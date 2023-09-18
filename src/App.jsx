import './App.css'
import LineChart from './component/LineChart/LineChart'
import NavBar from './component/NavBar/NavBar'
import Phones from './component/Phones/Phones'
import PriceOptions from './component/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <h1 className='text-4xl text-center bg-cyan-500'>Vite + React</h1>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
