import "../assets/styles/step.css"
import StepCount from "./StepCount"
import StepCountMB from "./StepCountMB"


export default function Step({step}:{step:number}){
    interface stepNumber{
        count:number,
        description: string
    };

    // array for render step
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
    ];

    return (
        <section className="step-count-cnt">
            {/* for desctop desing */}
            {
                stepNumbers.map((stepObj, index)=>{
                    return (
                        <div className="step-desctop" key={stepObj.count}>
                            <StepCount index={index} step={step} count={stepObj.count} description={stepObj.description} />
                        </div>
                    )
                })
            }

            {/* for mobile desing */}

            {
                stepNumbers.map((stepObj, index)=>{
                    return (
                        <div className="step-mb" key={stepObj.count}>
                            <StepCountMB index={index} step={step} count={stepObj.count} />
                        </div>
                    )
                })
            }
     
        </section>
    )
}