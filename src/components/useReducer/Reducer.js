import React,{ useReducer} from 'react'
const reducer = (state,action) =>{
    if(action.type === 'DELETE_USER') {
        return state.filter(user => user.id !== action.payload);
    }
    return state;

}

function Reducer() {
    const initialState = [
      {id:1,firstName:'Ankit',lastName:'Kumar'},
      {id:2,firstName:'John',lastName:'Doe'},
      {id:3,firstName:'Jane',lastName:'Smith'}
    ]
    const [state, dispatch] = useReducer(reducer,initialState);

    const handleDelete = (id) => {
      dispatch({
        type: 'DELETE_USER',
        payload: id
      });
    }


  return (
    <div>
      <h2>useReducer Example</h2>
      {state.map(user =>(
        <div key={user.id}>
          <div>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p> 
          <button onClick ={() => handleDelete(user.id)}>Delete</button>
          </div>
        </div>
      ))} 
    </div>
  )
}

export default Reducer