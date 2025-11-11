import '../assets/styles/summary.css';
import type { SummaryProps } from '../types/props';
import PreviusNext from './PreviusNext';
import FormTitle from './FormTitle.tsx';
import { useState } from 'react';
import TotalCount from './TotalCount.tsx';
import SummaryHero from './SummaryHero.tsx';

export default function Summary({step, setStep, selectPlan, monthly, selectSchedule, selectPick}:SummaryProps){
    const [sumTotal, setSumTotal] = useState(0);
 
    function handleCheckForm(){
        setStep(step+1)
    };

    return(
        <section className="select-plan">
            {/* title and description component */}
            <FormTitle title='Finishing up' description='Double-check everything looks OK before confirming' />
            {/* main content summary */}
                <section>
                    <SummaryHero monthly={monthly} setSumTotal={setSumTotal} selectPick={selectPick} selectPlan={selectPlan} selectSchedule={selectSchedule} />
                    <TotalCount monthly={monthly} sumTotal={sumTotal} />
                </section>
                {/* prev and next button component */}
                <PreviusNext step={step} setStep={setStep} handleCheckForm={handleCheckForm}/>
        </section>
    )
}