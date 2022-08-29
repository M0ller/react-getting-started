import {useParams} from 'react-router-dom'

function ReceivingPropsFromUrlExample(){

    let {firstName, lastName} = useParams()

    return (
        <h4>Hello {firstName} {lastName}</h4>
    )
}

export default ReceivingPropsFromUrlExample