import '../assets/styles/select-plan.css';
import type { SelectPlanProps } from '../types/props';
import PreviusNext from './PreviusNext';
import SelectHero from './SelectHero';
import arcadeImage from '../assets/images/icon-arcade.svg'
import advancedImage from '../assets/images/icon-advanced.svg'
import proImage from '../assets/images/icon-pro.svg'
import { useState } from 'react';
import FormTitle from './FormTitle.tsx';

export default function SelectPlan({step, setStep, selectSchedule, monthly, selectPlan, setSelectPlan}:SelectPlanProps){
    const [choiceRound, setChoiceRound] = useState(true);
    function handleCheckForm(){
        if(!selectPlan) return
        setStep(step+1)
    };

    return(
        <section className="select-plan">
            <FormTitle title='Select your plan' description='You have the option of monthly or yearly billing' />

                <div className='select-hero-cnt'>
                    <SelectHero selectPlan={selectPlan} setSelectPlan={setSelectPlan} monthly={monthly} title='Arcade' cost={`${monthly?'$9/mo':'$90/yr'}`} image={arcadeImage} />
                    <SelectHero selectPlan={selectPlan} setSelectPlan={setSelectPlan} monthly={monthly} title='Advanced' cost={`${monthly?'$12/mo':'$120/yr'}`} image={advancedImage} />
                    <SelectHero selectPlan={selectPlan} setSelectPlan={setSelectPlan} monthly={monthly} title='Pro' cost={`${monthly?'$15/mo':'$150/yr'}`} image={proImage} />
                </div>
                <div onClick={selectSchedule} className='monthly-early'>
                    <h4 style={{color:choiceRound?'black':'grey'}}>Monthly</h4>
                    <div onClick={()=>setChoiceRound(!choiceRound)} className='choice-round-cnt'>
                        <div className={`${choiceRound?'choice-round':'choice-right'}`}></div>
                    </div>
                    <h4 style={{color:choiceRound?'grey':'black'}}>Early</h4>
                </div>
                <PreviusNext step={step} setStep={setStep} handleCheckForm={handleCheckForm}/>
        </section>
    )
}