import { useSelector } from 'react-redux'

const Navbar = () => {
  const { value } = useSelector((state) => state.counter)
  return (
    <div>
      <h1 style={{ backgroundColor: 'blue', color: 'white' }}>
        Number Of Item: {value}
      </h1>
    </div>
  )
}

export default Navbar
