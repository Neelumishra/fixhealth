import React from 'react'

function List({ doctors }:any) {
  return (
   <ul>
    {
        doctors?.map((e:any,index:number)=><li className='no-underline' key={index}>{e.name}</li>)
    }
   </ul>
  )
}

export default List