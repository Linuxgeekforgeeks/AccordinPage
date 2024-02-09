import { useState } from "react"
import "./AccordinPage.css"
import { acordinData } from "../../assets/api/AccordData"
import AccordinItem from "../../component/accordinItem/AccordinItem"

function AccordinPage() {
    const [accordinData,setAccordinData]=useState(acordinData)
  return (
    <div className="accordinpage">
     <header>
        <h1>Frequently Asked Questions</h1>
     </header>
     {
        accordinData.map((accordinItem,index)=>(

            <AccordinItem key={index} title={accordinItem.title} content={accordinItem.content}/>
        ))
     }
    </div>
  )
}

export default AccordinPage