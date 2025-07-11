import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './Redux/Slice/MilkSlice' // Adjust the import path as necessary
const Milk = () => {
    const milkprice=useSelector((state)=>state.milk.value)
    const dispatch=useDispatch()
  return (
   <div>
    <h2>Milk Price: {milkprice}</h2>
    <button onClick={()=>dispatch(increment())}>Increase Milk Price</button>
    <button onClick={()=>dispatch(decrement())}>Decrease Milk Price</button>
    <button onClick={()=>dispatch(incrementByAmount(5))}>Increase Milk Price by 5</button>
    </div>


  )
}

export default Milk