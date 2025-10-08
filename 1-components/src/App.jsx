import './App.css'
import ClassComponents from './components/ClassComponents'
import FunctionalComponents from './components/FunctionalComponents'
import PropsExample from './components/PropsExample'

function App() {

  return (
    <>
      <FunctionalComponents/>
      <ClassComponents/>
      <PropsExample nome="Hugo" idade={18}/>
    </>
  )
}

export default App
