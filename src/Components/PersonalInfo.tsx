import { useState } from 'react';
import '../assets/styles/personal-info.css';
import type { personalInfoProps } from '../types/props';
import PreviusNext from './PreviusNext';
import FormTitle from './FormTitle.tsx';


export default function PersonalInfo({step, setStep}:personalInfoProps){
    const [form, setForm] = useState({
        name:'',
        email:'',
        phoneNumber:''
    });
    const [errMessage, setErrMessage]= useState({
        nameErr:'',
        emailErr:'',
        phoneNumberErr:''
    });
    function handleChangeinfo(e:React.ChangeEvent<HTMLInputElement>){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    };

    function handleCheckForm(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault();
        if(!form.name){
           return setErrMessage({
                ...errMessage,
                nameErr:'Please provide name'
            })
        }else if(!form.email){
            return setErrMessage({
                ...errMessage,
                emailErr:'Please provide email'
            })
        }else if(!form.email.includes('@') || !form.email.includes('.')){
            return setErrMessage({
                ...errMessage,
                emailErr:'Please provide valid email'
            })
        }else if(!form.phoneNumber){
            return setErrMessage({
                ...errMessage,
                phoneNumberErr:'Please provide phone number'
            })
        }else{
            setErrMessage({
                nameErr:'',
                emailErr:'',
                phoneNumberErr:''
            })

            function handleNext(){
                e.preventDefault();
                if(step<4){
                    setStep((currPrev)=>currPrev+1)
                }
            };    
            handleNext()        
        }
         
    }

    return(
        <section className="personal-info">
            {/* title and description component */}
            <FormTitle title='Personal Info' description='Please provide name, email and phone number' />
            {/* main content personal info */}
            <form>
                <div className="input-cnt">
                    {errMessage.nameErr && <span className='error'>{errMessage.nameErr}</span>}
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChangeinfo} value={form.name} type="text" name="name" id="name" placeholder="e.g. Stephen King"/>
                </div>

                <div className="input-cnt">
                    {errMessage.emailErr && <span className='error'>{errMessage.emailErr}</span>}
                    <label htmlFor="email">Email Address</label>
                    <input onChange={handleChangeinfo} value={form.email}  type="text" name="email" id="email" placeholder="e.g. stephenking@lorem.com"/>
                </div>

                <div className="input-cnt last-input-cnt">
                    {errMessage.phoneNumberErr && <span className='error'>{errMessage.phoneNumberErr}</span>}
                    <label htmlFor="phone-number">Phone Number</label>
                    <input onChange={handleChangeinfo} value={form.phoneNumber}  type="tel" name="phoneNumber" id="phone-number" placeholder="e.g. +1 234 567 890"/>
                </div>
                {/* prev and next button component */}
                <PreviusNext step={step} setStep={setStep} handleCheckForm={handleCheckForm} />
            </form>
        </section>
    )
}