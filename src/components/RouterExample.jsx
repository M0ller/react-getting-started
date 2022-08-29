import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'

import FormInputExample from "./FormInputExample"
import IteratingPropsExample from "./IteratingPropsExample"
import IteratingExample from "./IteratingExample"
import JsxExample from "./JsxExample"
import MyComponent from "./MyComponent"
import PassingPropsExample from "./PassingPropsExample"
import UseStateExample from "./UseStateExample"
import ReceivingPropsFromUrlExample from "./ReceivingPropsFromUrlExample"
import ReceivingPropsExample from './ReceivingPropsExample'
import UseEffectExample from './UseEffectExample'

function RouterExample(){

    return <Router>
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/form-input-example" >FormInputExample</Link>
            <Link to="/iterating-props-example" >IteratingPropsExample</Link>
            <Link to="/iterating-example" >IteratingExample</Link>
            <Link to="/jsx-example" >JsxExample</Link>
            <Link to="/my-component" >MyComponent</Link>
            <Link to="/passing-props-example" >PassingPropsExample</Link>
            <Link to="/use-state-example" >UseStateExample</Link>
            <Link to="/receiving-props-example">ReceivingPropsExample</Link>
            <Link to="/receiving-props-From-url-example/Simon/Möllerberg"> Simon Möllerberg Props</Link>
            <Link to="/use-effect-example">Use Effect Example</Link>
        </nav>
        <Routes>
            <Route path="/form-input-example"  element={<FormInputExample />} />
            <Route path="/Iterating-Props-Example" element={<IteratingPropsExample />} />
            <Route path="/iterating-props-example" element={<IteratingExample />} />
            <Route path="/jsx-example" element={<JsxExample />} />
            <Route path="/my-component" element={<MyComponent />} />
            <Route path="/passing-props-example" element={<PassingPropsExample />} />
            <Route path="/use-state-example" element={<UseStateExample />} />
            <Route path="/receiving-props-from-url" element={<ReceivingPropsExample />} />

            <Route path="/receiving-props-from-url-example/:firstName/:lastName" element={<ReceivingPropsFromUrlExample/>}></Route>
            <Route path="/use-effect-example" element={<UseEffectExample/>} />
        </Routes>
    </Router>
}

export default RouterExample