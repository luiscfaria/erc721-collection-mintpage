import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { settings } from "../config/settings";

function useMoralis() {
  const getContractTransfers = async (): Promise<number | undefined> => {
    if (!Moralis.Core.isStarted) {
      await Moralis.start({
        apiKey: settings.moralisKey,
      });
    }

    const address = settings.contractAddress;

    const chain = EvmChain.GOERLI;

    const response = await Moralis.EvmApi.nft.getNFTContractTransfers({
      address,
      chain,
    });
    const total = response.toJSON().total;
    return total;
  };
  return { getContractTransfers };
}

export default useMoralis;
