import React from "react";
import { useDispatch, useSelector } from 'react-redux'

// uso o hooks do react redux o useSelector que basicamente tem nossos estado no reducer
function Contador(props) {

    // no reducer meu state ja e o valor do contador\
    const contador = useSelector((state) => { return  state })
    const dispatch = useDispatch()

    return (
        <div>
            <div>{contador}</div>
            <button onClick={() => { dispatch({type: 'DECREMENT'})}}>-</button>
            <button onClick={() => { dispatch({type: 'INCREMENT'})}}>+</button>
        </div>
    )
}

export default Contador;