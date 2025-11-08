import { useEffect, useState } from "react";
import type { PickHeroProps } from "../types/props";
import type PickAddsType from "../types/pickAddsType";
import type { pickAddsKayValuesType } from "../types/pickAddsType";

export default function PickHero({title, description, schedule, selectPick, setSelectPick, monthly}:PickHeroProps){
    const [chechPick, setCheckPick] =useState(false);
    const [finishPickAdds, setFinishPickAdds]= useState<pickAddsKayValuesType[]>([]);

    function ckeckpick(){
        setCheckPick(!chechPick);
    };
// i want add and remove from list
    function handlePickAdds() {
        if (!selectPick) return; // nothing selected
        let pickList =[];
        const pickAdsObj: PickAddsType = {
            'Online service': { monthly: 9, yearly: 90 },
            'Larger storage': { monthly: 12, yearly: 120 },
            'Customizable profile': { monthly: 15, yearly: 150 },
        };

        const planKey = selectPick as keyof PickAddsType;
        // // Add to previous selections
        setFinishPickAdds(prevList => {
            // Avoid duplicates if needed
            if (prevList.some(item => item === pickAdsObj[planKey])) return prevList;
            return [...prevList, pickAdsObj[planKey]];
        });
    }
        
    useEffect(()=>{
        handlePickAdds()
    }, [monthly, selectPick, finishPickAdds]);

    return(
        <div style={{backgroundColor:chechPick?'#f0f5ff':'#ffffff', borderColor:chechPick?'#473dff':'#adbeff'}} onClick={ckeckpick} className="pick-hero">
            <div className="pick-cnt">
                <input onChange={()=>setCheckPick(!chechPick)} type="checkbox"checked={chechPick?true:false} />
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <p className="schedule">{schedule}</p>
            
        </div>
    )
}