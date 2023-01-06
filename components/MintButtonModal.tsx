import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import useMetamask from "../hooks/useMetamask";
import { useDisclosure } from "@chakra-ui/react";

function MintButtonModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mintNFT } = useMetamask();
  const price = 1000000000000000;
  const [selectedAmount, setSelectedAmount] = useState<number>(1);
  return (
    <>
      <Button
        colorScheme="messenger"
        width={250}
        mt={4}
        mb={6}
        onClick={onOpen}
        fontSize="2rem"
      >
        Mint Now
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How many NFTs would you like to mint?</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="d-flex justify-center">
            <Button
              colorScheme="messenger"
              variant={selectedAmount == 1 ? "solid" : "outline"}
              m={2}
              onClick={() => setSelectedAmount(1)}
            >
              1
            </Button>
            <Button
              colorScheme="messenger"
              variant={selectedAmount == 2 ? "solid" : "outline"}
              m={2}
              onClick={() => setSelectedAmount(2)}
            >
              2
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => mintNFT(price, selectedAmount)}
            >
              Mint
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MintButtonModal;
