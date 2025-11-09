import { useEffect, useState } from "react";
import type { PickHeroProps } from "../types/props";

export default function PickHero({ title, description, schedule, setSelectPick }: PickHeroProps) {
  const [isCheckPick, setIsCheckPick] = useState(false);

  function handleTogglePick() {
    setIsCheckPick(prev => !prev);
  }

    useEffect(()=>{
        if(isCheckPick){
        setSelectPick(prev=>{
            if(!prev.includes(title)){
                return [...prev, title]
            }
            return prev;
        })
        }else{
            setSelectPick(prev=>prev.filter(item=>item!==title))
        }
    },[isCheckPick]);
    

  return (
    <div
      style={{
        backgroundColor: isCheckPick ? "#f0f5ff" : "#ffffff",
        borderColor: isCheckPick ? "#473dff" : "#adbeff",
      }}
      onClick={handleTogglePick}
      className="pick-hero"
    >
      <div className="pick-cnt">
        <input
          type="checkbox"
          checked={isCheckPick}
          onChange={handleTogglePick}
        />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <p className="schedule">{schedule}</p>
    </div>
  );
}
