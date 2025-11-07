import { Activity, useState } from 'react'
import './App.css'
import PersonalInfo from './Components/PersonalInfo'
import Step from './Components/Step'
import SelectPlan from './Components/SelectPlan'
import PickAdd from './Components/PickAdd'
import Summary from './Components/Summary'

function App() {
  const [step, setStep] = useState<number>(1);
  const[monthly, setMonthly] = useState<boolean>(true);
  const[selectPlan, setSelectPlan] = useState<string>('');
  console.log(selectPlan)

  function handleTogleMothlyEarly(){
    setMonthly(!monthly)
  }

  return (
    <div className='form-main-container'>
      <div className='form-cnt'>
        <div className='step-cnt'>
          <Step step={step} />
          <Activity mode={step==1? 'visible':'hidden'}>
              <PersonalInfo step={step} setStep={setStep} />
          </Activity>
          <Activity  mode={step==2? 'visible':'hidden'}>
              <SelectPlan selectPlan={selectPlan} setSelectPlan={setSelectPlan} selectSchedule={handleTogleMothlyEarly} monthly={monthly} step={step} setStep={setStep} />
          </Activity>
          <Activity mode={step==3? 'visible':'hidden'}>
              <PickAdd selectSchedule={handleTogleMothlyEarly} monthly={monthly} step={step} setStep={setStep} />
          </Activity>
          <Activity mode={step==4? 'visible':'hidden'}>
              <Summary monthly={monthly} step={step} setStep={setStep} />
          </Activity>  
        </div>
      </div>
    </div>
  )
}

export default App;