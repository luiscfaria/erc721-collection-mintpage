import React from "react";
import { ethers } from "ethers";
import { useUserContext } from "../context/UserInfoContext";
import { settings } from "../config/settings";
import { BigNumber } from "@ethersproject/bignumber";
import ABI from '../data/abi';

export interface IGetSigner {
  signer: ethers.providers.JsonRpcSigner | null;
  address: string;
}

function useMetamask() {
  const { userValues, updateContext } = useUserContext();

  function getProvider(): ethers.providers.JsonRpcProvider | null {
    try {
      window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      return provider;
    } catch (error) {
      console.log("🚀 ~ getProvider ~ error", error);
      return null;
    }
  }

  async function getSigner(): Promise<IGetSigner> {
    const provider = await getProvider();

    const signer = provider ? provider.getSigner() : null;

    try {
      const address = signer ? await signer.getAddress() : null;

      if (!address) {
        console.log("Please make sure your metamask is connected");
        return { signer: null, address: "" };
      }

      return { signer, address };
    } catch (err) {
      console.log("🚀 ~ getSigner ~ err", err);
      throw err;
    }
  }

  async function connectMetamask() {
    if (typeof window.ethereum == "undefined") {
      console.log("Metamask not detected");
      return;
    }

    try {
      const signer = await getSigner();
      updateContext({ ...userValues, address: signer.address });
    } catch (err) {
      console.error(err);
    }
  }

  async function disconnectMetamask() {
    if (typeof window.ethereum == "undefined") {
      console.log("Metamask not detected");
      return;
    }

    try {
      await window.ethereum.enable(null);

      updateContext({ ...userValues, address: "" });
    } catch (err) {
      console.error(err);
    }
  }

  const mintNFT = async (price: number, mintAmount: number) => {
    const { signer } = await getSigner();

    if (!signer) {
      return;
    }

    const pricing = ethers.utils
      .hexlify(BigNumber.from((price * mintAmount).toString()))
      .replace("x0", "x");

    const contract = new ethers.Contract(
      settings.contractAddress,
      ABI.FariaCollection.abi,
      signer
    );

    contract
      .publicMint(mintAmount, {
        value: pricing,
      })
      .then(() => {
        console.log("Success");
      })
      .catch((err: Error) => {
        console.log("🚀 ~ mintNFT ~ err", err);
      });
  };

  return { connectMetamask, disconnectMetamask, mintNFT };
}

export default useMetamask;
