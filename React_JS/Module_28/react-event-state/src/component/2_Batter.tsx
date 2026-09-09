import { useState } from "react"

const Batter = () => {
    const [runs, setRuns] = useState(0)

    const handleAddOne = ()=>{
        setRuns(runs + 1)
    }
    const handleAddFour = ()=>{
        setRuns(runs + 4)
    }
    const handleAddSix = ()=>{
        setRuns(runs + 6)
    }
  return (
    <div>
        <h1>Football</h1>
        <h3>Score: {runs}</h3>
        <button style={{margin: "10px"}}  onClick={handleAddOne}>Add: 1</button>
        <button  onClick={handleAddFour}>Add: 4</button>
        <button style={{margin: "10px"}}  onClick={handleAddSix}>Add: 6</button>
    </div>
  )
}

export default Batter