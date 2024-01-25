import React from 'react'

function List({ doctors }:any) {
  return (
   <>
    {
        doctors?.map((e:any)=><li>{e.name}</li>)
    }
   </>
  )
}

export default List