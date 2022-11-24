import { useSelector, useDispatch } from 'react-redux'

import { selectCounter, incCounter } from './redux/slices/counterSlice'

import './App.css'

function App() {
  const counter = useSelector(selectCounter)
  const dispatch = useDispatch()

  const updateValue = () => {
    dispatch(incCounter(counter + 1))
  }

  return (
    <div className='App'>
      <h1>{counter}</h1>
      <a onClick={updateValue}>Aumentar</a>
    </div>
  )
}

export default App
