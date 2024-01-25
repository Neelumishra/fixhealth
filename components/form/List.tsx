import React from 'react'

function List({ doctors }:any) {
  return (
   <>
    {
        doctors?.map((e:any,index:number)=><li key={index}>{e.name}</li>)
    }
   </>
  )
}

export default List