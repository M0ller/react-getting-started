
function JsxExample(){

    const name = "Jsx is a datatype"
    const phrase = "and an element syntax"
    const calc = () => {
        return 5/4 * 9;
    }

    const add = function(){
        /* this */
        return 3 + 3;
    }

    const subtract = function subtract(){
        return 3 -3
    }

    return <ul>
        <li>Jsx Example</li>
        <li>{name} {phrase}</li>
        <li>{calc()}</li>
    </ul>
}

export default JsxExample