import '../assets/styles/step-count.css';
import type StepCountType from '../types/stepCount';

export default function StepCountMB({count, step, index}:StepCountType){
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