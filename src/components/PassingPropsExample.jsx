import ReceivingPropsExample from "./ReceivingPropsExample"


function PassingPropsExample(){

    return <div>
        <h2>Passing props from this component to a sub component</h2>
        <ReceivingPropsExample firstName="Bill" lastName="The Kidd" />
        <ReceivingPropsExample firstName="Ben" lastName="Benn" />
    </div>
}

export default PassingPropsExample