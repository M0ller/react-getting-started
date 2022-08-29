import {useState, useEffect} from 'react' 

function UseEffectExample(){

    useEffect( ()=>{
        async function load(){
        let posts = await fetch('/posts')
        posts = await posts.json()
        console.log(posts)
        variableUpdateMethod(posts)
        }
        load()
    },[])

    const [variableName, variableUpdateMethod] = useState([])

    return <article>
        <h2>Use Effect Example</h2>
        <p>Current variable value: <em>{variableName.map(post => 
        <li key={posts.id}>
            {post.title}/{post.author}
        </li>)}</em></p>
    </article>
}

export default UseEffectExample