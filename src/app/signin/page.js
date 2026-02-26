"use client"
import React , { useState } from 'react'
import LiquidEther from '@/Components/UI/LiquidEther';
import { MdOutlineVisibility , MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



function page() {

    const [Active , SetActive] = useState(false)

    useGSAP(() => {
        gsap.to(".form",{
            autoAlpha : 1 ,
            y : 0
        })
    })

  return (
    
    <div className='text-[#a70000] overflow-hidden'>
        <div style={{ width: '100%', height: '100vh', position: 'absolute' ,zIndex : "-30"}}>
            <LiquidEther
                colors={[ '#a70000', '#9E3B3B', '#ff9494' ]}
                mouseForce={20}
                cursorSize={100}
                isViscous
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
                color0="#5227FF"
                color1="#FF9FFC"
                color2="#B19EEF"
            />
        </div>

        <div className='w-screen h-screen flex justify-center items-center'>
            <form className='p-10 w-125 bg-[#5a5a5a32] backdrop-blur-2xl rounded-2xl form invisible translate-y-4'>
                <div className='text-center my-3'>
                    <h1 className='text-white font-bold text-[1.4rem]'>Sign in</h1>
                    <p className='text-[#9d9d9d] text-[0.9rem] font-medium'> Welcome! Please entre your details</p>
                </div>
                <div className='*:m-1 my-3'>
                    <lable className='text-[0.8rem] text-white font-medium'>Name *</lable>
                    <input type='text' className='text-white text-[0.8rem] w-full outline-none px-5 py-3 border-1 border-[#9d9d9d] rounded-sm appearance-none' placeholder='Email'  required/>
                </div>
                <div className='*:m-1 my-3'>
                    <lable className='text-[0.8rem] text-white font-medium'>Email *</lable>
                    <input type='text' className='text-white text-[0.8rem] w-full outline-none px-5 py-3 border-1 border-[#9d9d9d] rounded-sm appearance-none' placeholder='Email'  required/>
                </div>
                <div className='*:m-1 relative my-3'>
                    <lable className='text-[0.8rem] text-white font-medium'>Password *</lable>
                    <input type={Active ? 'text' : 'password'} className='text-white text-[0.8rem] w-full outline-none px-5 py-3 border-1 border-[#9d9d9d] rounded-sm appearance-none' placeholder='Password'  required/>
                    <div onClick={() => SetActive(!Active)} className='absolute right-4 top-1/2 text-white cursor-pointer'>{Active ? <MdOutlineVisibility />  : <MdOutlineVisibilityOff />}</div>
                </div>
                <div className='flex items-center justify-between w-full mx-1 h-11 my-0'>
                    <div className='flex items-center gap-2'>
                        <style>{`
                            .glass-checkbox {
                            appearance: none;
                            -webkit-appearance: none;
                            width: 1.125rem;
                            height: 1.125rem;
                            border: 0.125rem solid rgba(255,255,255,0.4);
                            border-radius: 0.25rem;
                            background: rgba(255,255,255,0.08);
                            cursor: pointer;
                            position: relative;
                            transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
                            flex-shrink: 0;
                            }
                            .glass-checkbox:hover {
                            border-color: rgba(255,255,255,0.75);
                            box-shadow: 0 0 0 3px rgba(255,255,255,0.1);
                            }
                            .glass-checkbox:focus {
                            outline: none;
                            border-color: #3b82f6;
                            box-shadow: 0 0 0 3px rgba(59,130,246,0.3);
                            }
                            .glass-checkbox:checked {
                            background: #3b82f6;
                            border-color: #3b82f6;
                            background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
                            background-size: 120% 120%;
                            background-position: center;
                            background-repeat: no-repeat;
                            box-shadow: 0 0 0 3px rgba(59,130,246,0.25);
                            }
                        `}</style>
                        <input
                            type='checkbox'
                            value=""
                            id="checkboxDefault"
                            className='glass-checkbox'
                        />
                        <label htmlFor="checkboxDefault" className='text-white text-[0.8rem] font-medium cursor-pointer'>
                            You are agreed to laws
                        </label>
                    </div>
                    <div className='flex cursor-pointer'>
                        <a className='text-[0.8rem] text-[#ff3737] font-medium hover:underline cursor-pointer'>Show laws</a>
                    </div>
                </div>
                <input type='submit' value='Sign in' className='bg-[#ff3737] w-full py-3 text-white rounded-3xl my-3 font-bold shadow-[#ff373777] hover:bg-[#ff2121] hover:scale-101 hover:shadow-lg transition-all duration-300' />
                <div className='flex items-center gap-3 w-full my-3'>
                    <hr className='flex-1 border-t border-gray-500'/>
                    <span className='text-gray-400 text-[0.8rem] font-medium'>or</span>
                    <hr className='flex-1 border-t border-gray-500'/>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 w-full my-3'>

      
                    <div className='flex items-center gap-3 w-full'>


                        <button className='flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 px-4 text-[0.85rem] text-gray-700 bg-white hover:bg-gray-50 cursor-pointer'>
                        <FcGoogle className='w-5 h-5 text-xl'/>
                        Sign in with Google
                        </button>

    
                        <button className='flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 px-4 text-[0.85rem] text-gray-700 bg-white hover:bg-gray-50 cursor-pointer'>
                        <FaApple className='w-5 h-5 text-xl'/>
                        Sign in with Apple
                        </button>

                    </div>


                    <p className='text-gray-500 text-[0.85rem] text-center'>
                        if you have any problem <a href='/signup' className='font-bold text-[#ff3737] hover:underline'>Contact me</a>
                    </p>

                </div>
            </form>
        </div>
    </div>
  )
}

export default page