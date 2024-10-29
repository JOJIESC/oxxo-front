
'use client'
import {Modal, ModalContent, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import {LuPencil} from "react-icons/lu";

export default function UpdateLocation({children,store}: {children: React.ReactNode,store : string | string[] | undefined}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

    if(!store) return null
  return (
    <>
      <Button onPress={onOpen} color="primary"><LuPencil size="20"/></Button>
      <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}