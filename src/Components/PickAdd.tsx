import type { PickAddsProps } from "../types/props";
import FormTitle from "./FormTitle.tsx";
import PickHero from "./PickkHero";
import PreviusNext from "./PreviusNext";
import '../assets/styles/pick-add.css'

export default function PickAdd({step, setStep, monthly, selectPick, setSelectPick}:PickAddsProps){

    function handleCheckForm(){
        if(selectPick.length == 0) return
        setStep(step+1)
    };


    return(
        <section className="select-plan">
            <FormTitle title='Pick Add-Ons' description='Add ons help echance your gaming experience' />
            <div className="pick-hero-cnt">
                <PickHero setSelectPick={setSelectPick} schedule={monthly?'+$1/mo':'+$10/yr'} title="Online service" description="Accsess to multiplayer games" />
                <PickHero setSelectPick={setSelectPick} schedule={monthly?'+$2/mo':'+$20/yr'}  title="Larger storage" description="Extra 1TB of cloud save" />
                <PickHero setSelectPick={setSelectPick} schedule={monthly?'+$2/mo':'+$20/yr'}  title="Customizable profile" description="Custom theme on your profile" />
            </div>
            <PreviusNext step={step} setStep={setStep} handleCheckForm={handleCheckForm} />
        </section>
    )
}