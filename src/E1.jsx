import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "./Card"


export default function E1(){
const[begin,setBegin]=useState("")//קליטת התאריכם בתור סטרינגים
const [end,setEnd]=useState("")
const[dates,setDates]=useState([])
const [filter,setFilter]=useState([])


const f=async()=>{
    await(fetch("https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start="+begin+"&end="+end))
    .then((response)=>response.json())
    .then(res=>setDates(res))
    .then(()=>console.log(dates))
    .catch((c)=>alert(c))
}

const check=()=>{
    if(begin.length<10||end.length<10)
    {
        alert("הכנס תאריכים תקינים")
        return
    }
    if(begin[4]!='-'||begin[7]!='-'||end[4]!='-'||begin[7]!='-')
    {
            alert("תבדוק שאכן התו המפריד בין התאריכים הוא -")
            return
    }
    f()//לאחר בדיקה שאכן התריכים כתובים כמו שצריך נפנה לשרת
}

const parashatShavua=()=>{
    let date=[...dates]
    const date2=date.filter((i)=>i.className=="parashat")
    setFilter(date2)
    console.log(filter)
}
    return(
        <>
        <input placeholder="תאריך התחלה"onChange={(e)=>setBegin(e.target.value)}></input>
        <input placeholder="תאריך סיום" onChange={(e)=>setEnd(e.target.value)}></input>
        <button onClick={()=>check()}>הצג</button> 
        <br></br>
        <br></br>
       <button  onClick={()=>parashatShavua()}>הצג רק פרשת שבוע</button>
       <button  onClick={()=>setFilter(dates)}>  הצג הכל </button>
       {
        filter!==null?<ui>
            {filter.map((i,index)=><><br></br><br></br><Card props={i} key={index}></Card></>)}
        </ui>:<div></div>
       }
      </>
    )
}