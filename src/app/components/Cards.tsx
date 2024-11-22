import Image from "next/image"
import Link from "next/link"

const Cards  = () => {
    return (

     
  <div className="  flex    ">
    {/* 1pic */}
  <div className=" w-[550px]  h-[350px]  rounded overflow-hidden shadow-lg  ml-12  px-8">
    <Image src="/images/first.png"     objectFit="contain" width={400} height={50} alt="image"  /></div>
 {/* 2pic */}
 <div className=" w-[550px]  h-[350px] rounded overflow-hidden shadow-lg  ml-12  px-8">
 <Image src="/images/image2.png"   layout="intrinsic"  objectFit="contain" width={400} height={50} alt="image"  /></div>
  {/* 3pic */}
 <div className="  w-[550px]  h-[350px]  rounded overflow-hidden shadow-lg   ml-12  px-8">
  <Image src="/images/image3.png"   layout="intrinsic"  objectFit="contain" width={400} height={50} alt="image"  /></div> 
  </div>  

    )
  }

export default  Cards 


// // "w-full h-48 object-cover" 