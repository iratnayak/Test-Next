import React from 'react'

async function page({params}) {
    const {vid} = await params;
  return (
    <div>Vegitable Shop Location in - {vid}</div>
  )
}

export default page