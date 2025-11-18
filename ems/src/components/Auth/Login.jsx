import React from 'react'

const Login = () => {

    





  return (
    <div className='flex items-center  justify-center h-screen w-screen'>
      <div className='rounded-2xl  border-2 border-emerald-600 p-20'>
        <form className=' flex flex-col items-center justify-center'>
            <input required className='text-white outline-none bg-transparent
             border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
            <input required className=' text-white outline-none bg-transparent
             border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your password'/>
            <button className='mt-5 text-white outline-none 
             border-none bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-100'>Log in</button>
        </form>
 
      </div>
    </div>
  )
}

export default Login
