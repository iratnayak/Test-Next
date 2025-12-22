import React from 'react'

async function page({params}) {
    const {vid} = await params;
    const {id3} = await params;
  return (
    <div>Vegitable Item {vid} review {id3}</div>
  )
}

export default page