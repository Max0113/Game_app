import React from 'react'
import LiquidEther from '@/Components/UI/LiquidEther';
import { MdOutlineVisibility } from "react-icons/md";
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'


function page() {
  return (
    
    <div className='text-[#a70000]'>
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
            <form className='p-10 w-125 bg-[#5a5a5a5d] backdrop-blur-2xl rounded-2xl '>
                <div className='text-center my-3'>
                    <h1 className='text-white font-bold text-[1.4rem]'>Login</h1>
                    <p className='text-[#9d9d9d] text-[0.9rem] font-medium'> Welcome back! Please entre your details</p>
                </div>
                <div className='*:m-1 my-3'>
                    <lable className='text-[0.8rem] text-white font-medium'>Email *</lable>
                    <input type='text' className='text-white text-[0.8rem] w-full outline-none px-5 py-3 border-1 border-[#9d9d9d] rounded-sm appearance-none' placeholder='Email'  />
                </div>
                <div className='*:m-1 relative my-3'>
                    <lable className='text-[0.8rem] text-white font-medium'>Password *</lable>
                    <input type='text' className='text-white text-[0.8rem] w-full outline-none px-5 py-3 border-1 border-[#9d9d9d] rounded-sm appearance-none' placeholder='Password'  />
                    <lable className='absolute right-4 top-1/2 text-white'><MdOutlineVisibility /></lable>
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
                            Remember for 30 Days
                        </label>
                    </div>
                    <div className='flex'>
                        <a className='text-[0.8rem] text-blue-500 font-medium'>Forgot Password</a>
                    </div>
                </div>
                <input type='submit' value='Sign in' className='bg-blue-500 w-full py-3 text-white font-medium rounded-3xl my-3' />
                <div className='flex items-center gap-3 w-full my-3'>
                    <hr className='flex-1 border-t border-gray-500'/>
                    <span className='text-gray-400 text-[0.8rem] font-medium'>or</span>
                    <hr className='flex-1 border-t border-gray-500'/>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 w-full my-3'>

      
                    <div className='flex items-center gap-3 w-full'>


                        <button className='flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 px-4 text-[0.85rem] text-gray-700 bg-white hover:bg-gray-50'>
                        <FcGoogle className='w-5 h-5 text-xl'/>
                        Sign up with Google
                        </button>

    
                        <button className='flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 px-4 text-[0.85rem] text-gray-700 bg-white hover:bg-gray-50'>
                        <FaApple className='w-5 h-5 text-xl'/>
                        Sign up with Apple
                        </button>

                    </div>


                    <p className='text-gray-500 text-[0.85rem] text-center'>
                        Don't have an account? <a href='/signup' className='font-bold text-blue-500 hover:underline'>Sign up</a>
                    </p>

                </div>
            </form>
        </div>
    </div>
  )
}

export default page