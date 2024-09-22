import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      home
      <div>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  )
}

export default page
