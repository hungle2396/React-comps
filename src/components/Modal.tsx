import ReactDOM from "react-dom";
import Button from "./Button";

const Modal = ({ onClose }: ModalProps) => {
    

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-40 p-10 bg-white">
                <h1>I'm a Modal</h1>
                <Button className="" onClick={onClose} secondary>Close</Button>
            </div>
        </div>,
        document.querySelector(".modal-container") as Element
    );
};

export default Modal;