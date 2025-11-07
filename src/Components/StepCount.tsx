import '../assets/styles/step-count.css';

export default function StepCount({count, description, step, index}:{index:number,count:number, description:string, step:number}){
    return (
        <div className="step-count-wrap">
            <h4 style={{
                background: step==index+1? 'var(--blue300)':'',
                }}>{count}</h4>
            <div>
                <p>STEP{count}</p>
                <h3>{description}</h3>
            </div>
        </div>
    )
}