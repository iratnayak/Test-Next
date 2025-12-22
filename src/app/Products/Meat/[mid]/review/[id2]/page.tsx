import React from 'react'

async function page({params}) {
    const {mid} = await params;
    const {id2} = await params;
  return (
    <div>Meat Item {mid} review {id2}</div>
  )
}

export default page