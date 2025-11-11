export interface personalInfoProps{
    step:number, 
    setStep:React.Dispatch<React.SetStateAction<number>>,
}

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
    selectPick:string[],
    setSelectPick:React.Dispatch<React.SetStateAction<string[]>>,
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
    setSelectPick:React.Dispatch<React.SetStateAction<string[]>>,
}

export interface TotalCountProps{
    monthly:boolean,
    sumTotal:number
}

export interface SummaryProps{
    step:number, 
    setStep:React.Dispatch<React.SetStateAction<number>>,
    monthly:boolean,
    selectSchedule:()=>void;
    selectPlan:string,
    selectPick:string[],
}

export interface SummaryHeroProps{
    monthly:boolean,
    selectSchedule:()=>void;
    selectPick:string[], 
    selectPlan:string,
    setSumTotal:React.Dispatch<React.SetStateAction<number>>
}

export interface FormType{
    name:string,
    email:string,
    phoneNumber:string
}
export interface ErrMessageType{
    nameErr: String,
    emailErr:string,
    phoneNumberErr:string
}
export interface PersonalFormInputWrapType{
    form:FormType, 
    errMessage:ErrMessageType, 
    setForm: React.Dispatch<React.SetStateAction<FormType>>,
    wrapClass:string, 
    placeholder:string,
    type:string, 
    name:string, 
    id:string,
    labelText:string,
    setErrMessage: React.Dispatch<React.SetStateAction<ErrMessageType>>,
}