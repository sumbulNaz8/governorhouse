
import Image from "next/image"
import Link from "next/link"

const Cardss  = () => {
    return (
<div className=" flex       ">
    {/* 1pic */}
  <div className=" w-[850px]  h-[350px]  rounded overflow-hidden shadow-lg 
   ml-12  px-8">
    <Image src="/images/first.png"   layout="intrinsic"  objectFit="contain"
     width={600} height={50} alt="image"  /></div>
 
   {/* 2pic */}
    <div className=" w-[850px]    h-[350px]  rounded overflow-hidden shadow-lg
      ml-12  px-8">
    <Image src="/images/first.png"   layout="intrinsic"  objectFit="contain" 
    width={600} height={50} alt="image"  /></div>


    </div>
    )
}
export default Cardss