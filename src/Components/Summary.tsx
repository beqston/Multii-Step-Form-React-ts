import '../assets/styles/summary.css';
import type { SummaryProps } from '../types/props';
import PreviusNext from './PreviusNext';
import FormTitle from './FormTitle.tsx';
import type SelectPlanObjType from '../types/selectPlan.ts';
import { useEffect, useState } from 'react';

export default function Summary({step, setStep, selectPlan, monthly, selectSchedule}:SummaryProps){
    const [finishPlanCost, setFinishPlanCost] = useState<number>(0);

    function handleCheckForm(){
        setStep(step+1)
    };

    function handleSelectPlanCost(){
        let cost:number =0;
        const selectPlanObj:SelectPlanObjType = {
            Arcade:{monthly:9, yearly:90},
            Advanced:{monthly:12, yearly:120},
            Pro:{monthly:15, yearly:150},
            
        };
        
        if (selectPlan && selectPlan in selectPlanObj) {
        const planKey = selectPlan as keyof SelectPlanObjType;
        cost = monthly
            ? selectPlanObj[planKey].monthly
            : selectPlanObj[planKey].yearly;
        }
        setFinishPlanCost(cost)
    }

    useEffect(()=>{
        handleSelectPlanCost()
    }, [monthly, selectPlan])

    return(
        <section className="select-plan">
            <FormTitle title='Finishing up' description='Double-check everything looks OK before confirming' />
                <section className='select-plan-content'>
                    <div>
                        <div>
                            <h3>{selectPlan}{monthly?'(Monthly)':'(yearly)'}</h3>
                            <button onClick={selectSchedule}>Change</button>
                        </div>
                        <p className='monthly-yearly'>${finishPlanCost}/{monthly?'mo':'yr'}</p>
                    </div>
                    <div className='line'></div>
                </section>
                <PreviusNext step={step} setStep={setStep} handleCheckForm={handleCheckForm}/>
        </section>
    )
}