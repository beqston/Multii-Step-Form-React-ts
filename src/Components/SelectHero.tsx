import type { SelectHeroProps } from "../types/props";

export default function SelectHero({image, title, cost, monthly,selectPlan, setSelectPlan}:SelectHeroProps){
    const isSelected = selectPlan === title;
    // handle select plan function
    function handleSelectPlan() {
        if(setSelectPlan){
            setSelectPlan(prev => (prev === title ? '' : title));
        }
    }

    return(
        <div style={{backgroundColor:isSelected?'#adbeff':''}} onClick={handleSelectPlan} className="select-hero-wrap">
            <img src={image} alt={image} />
            <h3>{title}</h3>
            <p>{cost}</p>
            {!monthly && <span className="monthly-span">2 months free</span>}
        </div>
    )
}