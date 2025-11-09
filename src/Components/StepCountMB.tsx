import '../assets/styles/step-count.css';

export default function StepCountMB({count, step, index}:{index:number,count:number, step:number}){
    return (
        <div className="step-count-wrap">
            <h4 style={{
                background: step==index+1? 'var(--blue300)':'',
                }}>{count}</h4>
            <div>
            </div>
        </div>
    )
}