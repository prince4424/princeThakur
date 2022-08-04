import React from 'react'
import Image from './images/cv.pdf'
import ReactPDF from 'react'

 const Resume = () => {
  return (
    <div>
        <ReactPDF
  file={{
    url: {Image}  }}
/>
    </div>
  )
}
export default Resume
