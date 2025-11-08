export interface SelectPlanProps{
    step:number, 
    setStep:React.Dispatch<React.SetStateAction<number>>,
    monthly:boolean,
    selectSchedule:()=>void;
    selectPlan:string,
    setSelectPlan:React.Dispatch<React.SetStateAction<string>>,
}
export interface PickAddsProps{
    step:number, 
    setStep:React.Dispatch<React.SetStateAction<number>>,
    monthly:boolean,
    selectPick:string,
    setSelectPick:React.Dispatch<React.SetStateAction<string>>,
}

export interface SummaryProps{
    step:number, 
    setStep:React.Dispatch<React.SetStateAction<number>>,
    monthly:boolean,
    selectSchedule?:()=>void;
    selectPlan:string,
    setSelectPlan?:React.Dispatch<React.SetStateAction<string>>,
}

export interface PreviusNextProps{
    step:number, 
    setStep:React.Dispatch<React.SetStateAction<number>>,
    handleCheckForm?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export interface SelectHeroProps{
    image:string, 
    title:string, 
    cost:string,
    monthly?:boolean
    selectPlan?:string,
    setSelectPlan?:React.Dispatch<React.SetStateAction<string>>,
}

export interface PickHeroProps{
    title:string,
    description:string,
    schedule:string,
    monthly:boolean,
    selectPick:string,
    setSelectPick:React.Dispatch<React.SetStateAction<string>>,
}