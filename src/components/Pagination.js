import React from 'react'

export default function Pagination(props) {
    let pageNumber = [];
    for(let i = 1;i< Math.ceil((props.data.length/8)+1);i++){
      pageNumber.push(i);

    }
  return (
      <center>
    <div>
    
        {pageNumber.map((num,index) => <button style={{width:"40px",marginBottom:"50px",marginRight:"2px",backgroundColor:"lightblue",borderRadius:"5px"}} onClick={() => props.partHandler(num)} >{num}</button> )}
    </div>
    </center>
  )
}
