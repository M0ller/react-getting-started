import {useState} from 'react'

function UseStateExample(){

    const [variableName, variableUpdateMethod] = useState(2)

    const changeValueMethod = () => variableUpdateMethod(6)

    return <div>
        <h2>Use State Example</h2>
        <p>Current value: {variableName}</p>
        <button onClick={()=>variableUpdateMethod(4)}>Change value to 4</button>
        <button onClick={()=>variableUpdateMethod(5)}>Change value to 5</button>
        <button onClick={changeValueMethod}> Change value to 6 using changeValueMethod</button>
        <Link to="input-link-example">Read about FormInputExamples</Link>
    </div>


}

export default UseStateExample