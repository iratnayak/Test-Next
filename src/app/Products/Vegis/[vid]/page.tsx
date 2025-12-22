import React from 'react'

async function page({params}) {
    const {vid} = await params;
  return (
    <div>Vegitable Item {vid}</div>
  )
}

export default page