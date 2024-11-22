
// import Image from "next/image";
// import Image from "public/image.png"
const Navbar = () =>  {
        return (
            <div className="bg-cover bg-center bg-[url('/images/bg.png')]:">
            <fieldset  className="h-10  
            ">
   { /*{step 1}*/ }
    <div  >
   <ul  className="flex  justify-end  space-x-10   mr-[05px] pr-0  border-blue-900    border-8 border-16 
   text-1xl mt-0 px-8 bg-blue-900 text-white ">
    <li className="font-bold  text-3xl">Tuition Free Education Program on Latest Technologies</li>
      <li>Home</li>
      <li>Apply</li>
      <li>Jobs</li>
      <li>Result</li>
      <li>Courses</li>
     </ul>
    </div>
    { /*{step 2}*/ }
<div className="-top-40  alt=logo h-12 w-16   -mt-6 mr-10 ml-14  " >
  <img src="/images/logo.png" alt="Logo" className="object-contain"></img>
</div>
{ /*{step 3}*/ }
<div className="font-bold  text-7xl  text-left ml-12 mt-16 text-blue-900">
  <p>Governor Sindh</p>
  <p className=" text-5xl text-left  ml-0 mt-2 text-blue-900">Kamran Khan Tessori</p>
  <p className=" text-5xl text-left  ml-0 mt-8 text-sky-500 font-bold">Certified cloud</p>
  <p className=" text-5xl text-left  ml-0 mt-1 text-sky-500 font-bold">Applied Generative AI</p>
  <p className=" text-5xl text-left  ml-0 mt-1 text-sky-500 font-bold">Engineer (GenEng)</p>
  <p className=" text-2xl text-left  ml-0 mt-6 text-sky-500">Earn  up to $5,000 /month</p>
  <p className=" text-2xl text-left  ml-0 mt-1 text-sky-500">Now admission are open in</p>
  <p className=" text-2xl text-left  ml-0 mt-1 text-sky-500">Karachi</p>
</div>
</fieldset>


 
{ /*{step 4}*/ }

<div className="w-full flex justify-end  h-screen items-start">
    <img src="/images/imag4.png" alt="Imaage" className="w-[800px] h-[600px] object-cover absolute top-0 right-0 
    mt-14  -mr-14 ml-8 " />
</div>

<div className=" text-4xl  font-bold text-center ml-16 mt-16 text-blue-900"> <p>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur</p></div>
<div className=" text-4xl  font-bold text-center mt-18 text-blue-900" >Developing Billion-Dollar Valued Developers and Solopreneurs</div>


<div> <p  className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify __web-inspector-hide-shortcut ml-4">The pace of technological change is accelerating, big players like Microsoft, Amazon,
Google, and OpenAI arewinning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, 
and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to
employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus
paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new
breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently
and will not need to hire employees or other team members.</p></div>
{/* 
  <div className="  flex-wrap justify-center  flex  gap-8 ">
<div className=" w-[400px] rounded overflow-hidden shadow-lg   bg-red-400 ml-12 h-[300px] px-8 ">
  <img className="w-full h-48 object-cover "  src="public/image.png"  alt="Card Image"/>
</div>
<div className=" w-[400px] rounded overflow-hidden shadow-lg   bg-red-400 ml-12 h-[300px] px-8"></div>
<div className="w-[400px] rounded overflow-hidden shadow-lg  bg-red-400 ml-12 h-[300px] px-8"></div>
 </div>   */}
   {/* <div className="flex flex-wrap justify-center gap-8 w-[30%]">
  <div className="w-[900px] rounded overflow-hidden shadow-lg bg-red-400 ml-12 h-[300px] px-8"></div>
  <div className="w-[900px] rounded overflow-hidden shadow-lg bg-red-400 ml-12 h-[300px] px-8"></div>
  <div className="w-[900px] rounded overflow-hidden shadow-lg bg-red-400 ml-12 h-[300px] px-8"></div>
</div> */}

    </div>
  );
}


export default Navbar
