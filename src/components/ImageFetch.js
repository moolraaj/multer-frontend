import React, { useEffect, useState } from 'react'

function ImageFetch() {
    const [images, setImages] = useState([])
   const uploadImage=async ()=>{
    let data=await fetch('http://localhost:4500/upload')
    let result=await data.json()
    setImages(result)
    console.log(result)

   }
   useEffect(()=>{
    uploadImage()
   },[])
  return (
    <>
    {
images.map((items,index)=>{
    return  <img key={items._id} src={items.imageUrl} alt='images' />

    
   

   

})
    }
    </>
  )
}

export default ImageFetch