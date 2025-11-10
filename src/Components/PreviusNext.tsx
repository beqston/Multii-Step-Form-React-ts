import type { PreviusNextProps } from "../types/props";

export default function PreviusNext({step, setStep, handleCheckForm}:PreviusNextProps){
    // handle prev function
    function handlePrev(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault();
        if(step>1){
            setStep((currPrev)=>currPrev-1)
        }
    }
    return(
        <div className="prev-next-cnt">
            <button onClick={handlePrev} className={`${step==1?'hidden':'back'}`}>Go Back</button>
            {step < 4 && <button onClick={handleCheckForm} className='next'>Next Step</button>}
            {step > 3 &&<button onClick={handleCheckForm} className='next'>Confirm</button>}
        </div>
    )
}