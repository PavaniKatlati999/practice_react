import React,{ useReducer} from 'react'
const reducer = (state,action) =>{
    if(action.type === 'INCREMENT_COUNT') {
        return state + 1;
    }
    if(action.type === 'DECREMENT_COUNT') {
        return state - 1;
    }
    return state;

}
function Counter() {
    const initialState = 0;
    const [state,dispatch] = useReducer(reducer,initialState);


    const handleIncrement = () => {
      dispatch({
        type: "INCREMENT_COUNT",
      });
    };

    const handleDecrement = () => {
      dispatch({
        type: "DECREMENT_COUNT",
      });
    };  

  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <p>Count : {state}</p>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter