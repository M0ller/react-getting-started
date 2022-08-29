import ReceivingPropsExample from "./ReceivingPropsExample"

function IteratingPropsExample(){

    const persons = [
        {
        firstName: 'Bobba',
        lastName: 'Fett'
    },
    {
        firstName: 'Ben',
        lastName: 'Benn'
    },
    {
        firstName: 'Toby',
        lastName: 'Low'
    }
]

return <>
    <h2>Iterating Props Example</h2>
    { persons.map( person => <RecieivingPropsExample firstName={person.firstName} lastName={person.lastName} /> ) }
</>

}

export default IteratingPropsExample