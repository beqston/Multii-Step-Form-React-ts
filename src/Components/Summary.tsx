import '../assets/styles/select-plan.css';
import type { ComponentsProps } from '../types/props';
import PreviusNext from './PreviusNext';
import FormTitle from './FormTitle.tsx';

export default function Summary({step, setStep}:ComponentsProps){
    function handleCheckForm(){
        setStep(step+1)
    }
    return(
        <section className="select-plan">
            <FormTitle title='Finishing up' description='Double-check everything looks OK before confirming' />

                <PreviusNext step={step} setStep={setStep} handleCheckForm={handleCheckForm}/>
        </section>
    )
}