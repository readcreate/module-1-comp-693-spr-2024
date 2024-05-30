let zak = 'Zak'
let sally = 'Sally'
let holly = 'Holly'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let aaron = 'Aaron D. Tires'
let ivanna = 'Ivanna SeeIfThisWorksAgain'

// below we use {} within the li (template literals like in usual js)
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}> 
        <li>{zak}</li>
        <li>{sally}</li>
        <li>{holly}</li>
        <li>{amol.toUpperCase()}</li>
        <li>{robin}</li>   
        <li>{aaron}</li>     
        <li>{ivanna}</li>    
    </ul>

)
ReactDOM.render(element, document.getElementById('content'))