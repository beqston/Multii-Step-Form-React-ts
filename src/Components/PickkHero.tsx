import { useState } from "react";
import type { PickHeroProps } from "../types/props";

export default function PickHero({title, description, schedule}:PickHeroProps){
    const [chechPick, setCheckPick] =useState(false)
    function ckeckpick(){
        setCheckPick(!chechPick);
    }
    return(
        <div onClick={ckeckpick} className="pick-hero">
            <div className="pick-cnt">
                <input onChange={()=>setCheckPick(!chechPick)} type="checkbox"checked={chechPick?true:false} />
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <p>{schedule}</p>
            
        </div>
    )
}