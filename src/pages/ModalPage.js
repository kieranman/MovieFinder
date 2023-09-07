import Modal from "../components/Modal";
import { useState } from "react"
export default function ModalPage(){
    const [showModal,setShowModal]= useState(false);
    const handleClick=()=>{
        setShowModal(true);
    }
    const handleClose =()=>{
        setShowModal(false);
    }

    const actionBar = <div>
        <button >I Accept</button>
    </div>


    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Heres an important agreement for you to accept
        </p>
    </Modal>

    return (
        <div className="relative">

            <button  onClick={handleClick}>Open Modal</button>
            {showModal && modal}
        </div>
    )
}