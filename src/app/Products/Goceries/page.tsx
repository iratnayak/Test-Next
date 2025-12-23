import React from 'react'
import Link from 'next/link'

function page() {
  const Goceries = [
    {
      id:1,
      location : "Colombo" 
    },
    {
      id:2,
      location : "Nugegoda" 
    },
    {
      id:3,
      location : "Maharagamaa" 
    },
  ]
  return (
    <>
    <div className='text-2xl text-blue-400 font-bold'>Goceries Shop Location</div>
    <ul>
      {Goceries.map((loc) => {
        return (
          <li key={loc.id}>  
          <Link href={`/Products/Goceries/${loc.location}`}>{loc.location}</Link>
          </li>
        )
      }) }
    </ul>
    </>
  )
}

export default page