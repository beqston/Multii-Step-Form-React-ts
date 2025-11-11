import { useState } from 'react';
import '../assets/styles/personal-info.css';
import type { ErrMessageType, FormType, personalInfoProps } from '../types/props';
import PreviusNext from './PreviusNext';
import FormTitle from './FormTitle.tsx';
import PersonalFormInputWrapp from './PersonalFormInputWrapp.tsx';


export default function PersonalInfo({step, setStep}:personalInfoProps){
    const [form, setForm] = useState<FormType>({
        name:'',
        email:'',
        phoneNumber:''
    });
    const [errMessage, setErrMessage]= useState<ErrMessageType>({
        nameErr:'',
        emailErr:'',
        phoneNumberErr:''
    });

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
                <PersonalFormInputWrapp form={form} errMessage={errMessage} setErrMessage={setErrMessage} setForm={setForm} wrapClass='input-cnt' placeholder='e.g. Stephen King' type='text' name='name' id='name' labelText='Name' />
                <PersonalFormInputWrapp form={form} errMessage={errMessage} setErrMessage={setErrMessage} setForm={setForm} wrapClass='input-cnt' placeholder='e.g. stephenking@lorem.com' type='email' name='email' id='email' labelText='Email Address' />
                <PersonalFormInputWrapp form={form} errMessage={errMessage} setErrMessage={setErrMessage} setForm={setForm} wrapClass='input-cnt last-input-cnt' placeholder='e.g. +1 234 567 890' type='tel' name='phoneNumber' id='phone-number' labelText='Phone Number' />
                {/* prev and next button component */}
                <PreviusNext step={step} setStep={setStep} handleCheckForm={handleCheckForm} />
            </form>
        </section>
    )
}