import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = () => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        const time = setTimeout(() => {
            setTime((prev) => prev + 1);
            
        }, 1000);

        return () => {
            clearTimeout(time);
        }
    },[time]);

    return createPortal(
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity w-[500px] h-[500px] m-auto rounded-lg">
                Modal
                {time}
                <button onClick={() => console.log(time/60)} className="bg-amber-100 rounded">Reset</button>
            </div>
        </>, document.body
    )
}

export default Modal;