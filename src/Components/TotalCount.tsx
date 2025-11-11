import type { TotalCountProps } from "../types/props";

export default function TotalCount({monthly, sumTotal}:TotalCountProps){
    return(
        <div className='total-cnt'>
            <p>Total (per {monthly?'month':'year'})</p>
            <p>${sumTotal}/{monthly?'mo':'yr'}</p>
        </div>
    )
}