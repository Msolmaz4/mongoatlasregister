import React from 'react'

// baglanti icin iki tabe use var
import { useDispatch,useSelector } from 'react-redux';
import Actions from '../redux/actions';

const Counter = () => {


  const count  = useSelector(state=>state.countReducer)
  const dispatch = useDispatch()
//actions sazfasindan ayarlama yapariz
  return (
    <div>
      
        <button  onClick={()=>dispatch(Actions.sayiAk.sayiAr(1))}>artir</button>
        <button onClick={()=>dispatch(Actions.sayiAk.sayiAz(1))}>azalt</button>
        {count}
    </div>
  )
}

export default Counter