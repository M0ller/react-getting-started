import ReceivingPropsExample from "./ReceivingPropsExample"

function IteratingExample(){

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
    <h2>Iterating Example</h2>
    <ul>
    { persons.map( person => <li>Hi There!, {person.firstName} {person.lastName}!</li> ) }
</ul>
    
</>

}

export default IteratingExample