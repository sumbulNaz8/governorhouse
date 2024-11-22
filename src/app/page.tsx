// import Image from "next/image";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cards from "./components/Cards"
import Cardss from "./components/Cardss"





export default function Home() {
  return (
    <>

    <div>   <Navbar />  </div>
    <div className="text-3xl mt-9 mb-4 text-center  text-blue-900 font-extrabold"><h1>In First row there should be 2 cards using flexbox</h1></div>
  <div> <Cardss /> </div>
  <div className="text-3xl mt-9 mb-4 text-center  text-blue-900 font-extrabold"><h1>In Second row there should be 3 cards using flexbox</h1></div>
  <div> <Cards /> </div>
    
       {/* <div> <HeroSection/>  </div> */}
       </>
  );
}
