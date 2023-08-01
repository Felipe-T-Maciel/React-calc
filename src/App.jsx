import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="w-full h-full  flex items-center justify-center">
        <div className="flex flex-col-reverse  items-center justify-center bg-slate-500 w-20 h-44 rounded-md border-solid">

          <div>
            <button className="w-8 hover:bg-white" onClick={() => handleButtonClick('0',)}>0</button>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('+')}>+</button>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('=')}>=</button>
          </div>

          <div>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('1')}>1</button>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('2')}>2</button>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('3')}>3</button>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('X')}>X</button>
          </div>

          <div>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('4')}>4</button>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('5')}>5</button>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('6')}>6</button>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('-')}>-</button>
          </div>

          <div>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('7')}>7</button>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('8')}>8</button>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('9')}>9</button>
            <button className=" hover:bg-white" onClick={() => handleButtonClick('/')}>/</button>
          </div>

          <div>
            <button className="w-16 hover:bg-white">Clear</button>
          </div>
          <div>
             <input type="number" value={soma} className="bg-white w-16 h-5 rounded-sm p-2" disabled/>
          </div>
        </div>
      </div>
    </>
  )
}

let soma = '';
const handleButtonClick = (num,) => {
  console.log(input + num)
  soma = input + num
}

export default App
