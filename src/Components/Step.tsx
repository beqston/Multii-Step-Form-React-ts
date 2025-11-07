import "../assets/styles/step.css"
import StepCount from "./StepCount"


export default function Step({step}:{step:number}){
    interface stepNumber{
        count:number,
        description: string
    };


    const stepNumbers:stepNumber[] = [
        {
            count:1,
            description:'YOUR INFO'
        },
        {
            count:2,
            description:'SELECT PLAN'
        },
        {
            count:3,
            description:'ADD ONS'
        },
        {
            count:4,
            description:'SUMMARY'
        },
    ]
    return (
        <section className="step-count-cnt">
            {
                stepNumbers.map((stepObj, index)=>{
                    return (
                        <div key={stepObj.count}>
                            <StepCount index={index} step={step} count={stepObj.count} description={stepObj.description} />
                        </div>
                    )
                })
            }
        </section>
    )
}