import React from 'react'

async function page({params}) {
    const {id} = await params;
    const {id1} = await params;
  return (
    <div>Meat item {id} review {id1}</div>
  )
}

export default page