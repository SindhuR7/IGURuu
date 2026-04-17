import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Inputform from '../components/Inputform.jsx'
import { toast } from 'react-toastify'


const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const[loginData, setLoginData] = useState({
    email : '',
    password : ''
  })
  const[SignUpData, setSignUpData] = useState({
    name : '',
    email : '',
    password : '',
    confirmPassword : ''
  })
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)

  //Input fields ma data ko check krna or save
  const handleInputChange = (e) => {
    const {name, value}= e.target 
    if(isSignUp){
      setSignUpData({
        ...SignUpData,
        [name] : value
      })
    }else {
      setLoginData({
      ...loginData,
      [name] : value
    })
    }
  }

  //Submit krne pe data ko save krna 
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    if(isSignUp){
      //Check krna k input fields fill hain ya ni
     if(!SignUpData.email || !SignUpData.password || !SignUpData.name || !SignUpData.confirmPassword){
      toast.error("All Fields are required")
      setLoading(false)
      return;
    }
        //Password aur confirm password ko match krna or check krna
    if(SignUpData.password !== SignUpData.confirmPassword){
        toast.error('Password do not match')
        return;
      }
      console.log("Sign Up Data : ",SignUpData)
    }
    else{
      if(!loginData.email || !loginData.password){
        toast.error("All fields required")
      }
        console.log("Login Data : ", loginData)
        setLoading(false)
    }

    //User k login k local storage ma store krna
    if(remember){
      localStorage.setItem('User', JSON.stringify(loginData))
    }else{
      localStorage.removeItem('User')
    }
  }

  //Local Storage se user ko load krna or input fields me automatically fill krna
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('User'))
    if(savedData){
      setLoginData(savedData)
      setRemember(true)
    }
  }, [])
  return (
    <div  className="flex items-center justify-center gap-14 bg-gradient-to-br from-[#2d5a61] via-[#3a7a83] to-[#e8b4a2] min-h-screen w-full"
      style={{ fontFamily: '"Open Sans", sans-serif' }}>
        
        {/* Form Div */}
        <div className={`flex flex-col justify-center items-center gap-8 transition-all duration-300 ${isSignUp ? 'max-w-3xl' : 'max-w-[400px]'}`}>
          {/* Heading */}
          <div className='flex flex-col items-center gap-1'>
            <h1 className='text-[#ff6d34] text-[32px] font-bold leading-10 tracking-wide italic'>
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className='text-[16px] text-white'>{isSignUp ? 'Already have an account,' : "Don't have an account ?"}  
              <span onClick={(e)=> setIsSignUp(!isSignUp)} className='ml-2 text-[#ff6d34] font-semibold cursor-pointer hover:text-white hover:underline underline-offset-4 transition-all duration-300'>
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </span>
            </p>
          </div>

          {/* Basic Form */}
          <div className='relative flex items-center justify-center w-full overflow-hidden'>
            {/* Login Form*/}
            {
              !isSignUp ? (
                <div className='w-full'>
                  <form onSubmit={handleSubmit} className='flex flex-col gap-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(255,109,52,0.25)] p-8 w-full'>
                    <Inputform label='Email' name='email' type='email' value={loginData.email} placeholder='Your Email' onChange={handleInputChange}  />
                    <Inputform label='Password' name='password' type='password' value={loginData.password} placeholder='' onChange={handleInputChange}  />
                    <div className='flex items-center justify-between'>
                      <label htmlFor="remember" className='flex items-center gap-1'>
                        <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                        Remember me
                      </label>
                      <p className='ml-2 text-white font-semibold cursor-pointer hover:underline underline-offset-4 decoration-[#ff6d34] transition-all duration-300'>
                        Forgot Password 
                      </p>
                    </div>
                    <button type='submit' className='mt-4 py-2 w-full text-[18px] font-semibold text-white rounded-xl bg-[#ff6d34]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(255,109,52,0.5)] hover:bg-[#ff6d34] hover:shadow-[0_6px_25px_rgba(255,109,52,0.8)] transition-all duration-300'>
                       {loading ? 
                       (
                         <div className="flex items-center justify-center gap-2">
                           <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                           Signing in...
                         </div>
                       ) : 'Sign in'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className='w-full'>
                  <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(255,109,52,0.25)] p-8 w-full'>
                    <Inputform label='Full Name' name='name' type='text' value={SignUpData.name} placeholder='Your Email' onChange={handleInputChange}  />
                    <Inputform label='Email' name='email' type='email' value={SignUpData.email} placeholder='Your Email' onChange={handleInputChange}  />
                    <Inputform label='Password' name='password' type='password' value={SignUpData.password} placeholder='' onChange={handleInputChange}  />
                    <Inputform label='Confirm Password' name='confirmPassword' type='password' value={SignUpData.confirmPassword} placeholder='' onChange={handleInputChange}  />
                    <button type='submit' className='col-span-2 mt-1 py-2 outline-none  text-[20px] leading-8 font-semibold text-white cursor-pointer active:translate-y=1 active:shadow-sm shadow-md rounded-2xl bg-[#ff6d34] hover:bg-[#00bda6] transition-all duration-300 align-center'>
                      Sign Up 
                    </button>
                  </form>
                </div>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default LoginForm