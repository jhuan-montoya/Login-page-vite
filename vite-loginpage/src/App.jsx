import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (    
    <div className='bg-blue-800 items-center bg-[url("./src/assets/montain2.jpg")] bg-cover h-screen flex justify-center'>
        <form className='flex justify-center h-max w-full'>
        <div className='grid justify-items-center	grid-rows-3 items-center	justify-center backdrop-sepia-0 bg-white/0 rounded'>
            <div className='row-span-1'>
                <span class="custom-materialize text-8xl material-symbols-outlined">
                Login
                </span>
                <h1 className='text-5xl font-bold text-white'>Login</h1>
            </div>              
            <div className='row-span-1'>
              <div className='flex p-3 items-center'>
                <span class="pl-1 pt-1 text-4xl h-12 bg-white/50 material-symbols-outlined">person</span>
                <input class="h-12 bg-white/50" name="email-input" type="email"></input>             
              </div>
              <div className='flex p-3 items-center'>
                  <span class="pl-1 pt-1 text-4xl h-12 bg-white/50 material-symbols-outlined">key</span>
                  <input class="h-12 bg-white/50" name="password-input" type="password">
                  </input>
              </div>
            </div>
            <div className='grid grid-rows-2 row-span-1'>
              <span className='row-span-1 text-white'>Ainda não tem cadastro? <span className='bg-white text-sm font-bold rounded-full p-2 text-black'>Faça agora!</span></span>
              <button className='m-2 h-16 rounded-full row-span-2 text-black font-bold bg-white/50' type='submit'>Logar</button>
            </div>
            </div>
        </form>
        
    </div>

  )
}

export default App
