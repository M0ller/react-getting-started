


import {useState} from 'react'



function FormInputExample() {

    const [inputValue, inputValueUpdateMethod] = useState('Default value 666')

    const [inputValue2, inputValue2UpdateMethod] = useState('Default val 2')

    return <>
        <h2>Form input example</h2>
        <input value={inputValue} onChange={(event)=>inputValueUpdateMethod(event.target.value)} />
        <p>Current value {inputValue}</p>
        <div>
            <input value={inputValue2} onChange={ ()=> inputValue2UpdateMethod(event.target.value) } />
            <p>Current inputValue2: {inputValue2}</p>
        </div>
    </>
}

export default FormInputExample