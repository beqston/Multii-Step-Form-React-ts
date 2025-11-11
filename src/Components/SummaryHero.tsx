import { useEffect, useState } from "react";
import type PickAddsType from "../types/pickAddsType";
import type SelectPlanObjType from "../types/selectPlan";
import type { SummaryHeroProps } from "../types/props";

export default function SummaryHero({monthly, selectPick, selectSchedule, selectPlan, setSumTotal}:SummaryHeroProps){
    
    const [finishPlanCost, setFinishPlanCost] = useState<number>(0);
    
    //pick object for calculate
    const pickAdsObj: PickAddsType = {
        'Online service': { monthly: 9, yearly: 90 },
        'Larger storage': { monthly: 12, yearly: 120 },
        'Customizable profile': { monthly: 15, yearly: 150 },
    };

    function handleSelectPlanCost() {
        let cost = 0;

        const selectPlanObj: SelectPlanObjType = {
            Arcade: { monthly: 9, yearly: 90 },
            Advanced: { monthly: 12, yearly: 120 },
            Pro: { monthly: 15, yearly: 150 },
        };

        // calculate base plan cost
        if (selectPlan && selectPlan in selectPlanObj) {
            const planKey = selectPlan as keyof SelectPlanObjType;
            cost = monthly
            ? selectPlanObj[planKey].monthly
            : selectPlanObj[planKey].yearly;
        }

        setFinishPlanCost(cost);

        // calculate add-ons cost
        const numArray: number[] = selectPick.map(item => {
            const picked = pickAdsObj[item as keyof PickAddsType];
            return monthly ? picked.monthly as number : picked.yearly as number;
        });

        // sum total
        const total = numArray.reduce((acc, cur) => acc + cur, cost);
        setSumTotal(total);
    }

    useEffect(() => {
        handleSelectPlanCost();
    }, [monthly, selectPlan, selectPick]);

    return(
        <div className='select-plan-content'>
            <div>
                <div>
                    <h3>{selectPlan}{monthly?'(Monthly)':'(yearly)'}</h3>
                    <button onClick={selectSchedule}>Change</button>
                </div>
                <p className='monthly-yearly'>${finishPlanCost}/{monthly?'mo':'yr'}</p>
            </div>
            <div className='line'></div>
            <div className='pick-content-cnt'>
                {selectPick.map(item => {
                    return (
                        <div className="content" key={item}>
                        <p>{item}</p>
                        <p>
                            +${monthly ? pickAdsObj[item as keyof PickAddsType].monthly : pickAdsObj[item as keyof PickAddsType].yearly}/{monthly ? 'mo' : 'yr'}

                        </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}