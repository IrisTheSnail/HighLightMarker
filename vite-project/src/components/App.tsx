import '../App.css'
import { onClick } from '../contextItems'

function App() {
  
  console.log("is this shit executed once ?")
  
  return (
    <div>
      <p>dude ok wtf </p>
      <button onClick={onClick}>
        Click me
    </button>
    </div>
  )
}

export default App
