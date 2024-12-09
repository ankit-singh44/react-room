// import './App.css'

import { useState } from "react"

function App() {

const [num, setNum] = useState(0)
const [Input, setInput] = useState("")

// Increment fucntion
const inc=function(){
  const incBy=parseInt(Input) || 1
  setNum(num+incBy)
  setNum(num+incBy)
}

// decrement function
const dec=function(){
  const decBy=parseInt(Input) || 1
  if(num-decBy>=0){
    setNum(num-decBy)
  }  
}

//set input valur to the var
const handleInput=(e)=>{
  setInput(e.target.value)
}

//Reset the value
const res=function(){
  setNum(0)
  setInput("")
}


  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-center">Counter App</h1>
      <h2 className="text-2xl text-center">Count will be {num}</h2>
      <input value={Input} onChange={(e)=>{
        handleInput(e)
      }} type="number" className="px-4 py-4 text-xl m-3 border-cyan-300" type="text" placeholder="Enter number" />
      <div className="flex gap-4">
        <button onClick={inc} className="px-4 py-2 bg-green-600 text-white text-xl font-semibold rounded-xl hover:bg-green-700 transition-colors">Increments</button>
        <button onClick={dec} className="px-4 py-2 bg-green-600 text-white text-xl font-semibold rounded-xl hover:bg-green-700 transition-colors">Decrement</button>
        <button onClick={res} className="px-4 py-2 bg-green-600 text-white text-xl font-semibold rounded-xl hover:bg-green-700 transition-colors">Reset</button>
      </div>
    </div>
  )
}

export default App
