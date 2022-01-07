import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../redux/actions/counterAction'
import Navbar from './Navbar'

const App = () => {
  const dispatch = useDispatch()
  const { value } = useSelector((state) => state.counter)
  return (
    <div style={{ textAlign: 'center' }}>
      <Navbar />
      <h1>Number Current: {value}</h1>
      <button onClick={() => dispatch(decrease())}>- Coutner Down</button>
      <button onClick={() => dispatch(increase())}>+ Counter Up</button>
    </div>
  )
}

export default App
