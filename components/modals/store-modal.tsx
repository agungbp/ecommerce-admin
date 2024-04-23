"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "../ui/modal"

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title="title"
            description="description"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Future create store modal
        </Modal>
    )
}