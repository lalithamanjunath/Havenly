import NavBar from "./components/NavBar"; 
import home1 from "./assets/home1.jpeg";
import HeroContent from "./components/HeroContent";
import AboutUs from "./components/AboutUs";
import Properties from "./components/Properties";
import Features from "./components/Features";
import Designers from "./components/Designers";
import Faq from "./components/Faq.jsx"
import Insights from "./components/Insights";
import Footer from "./components/Footer.jsx";

function Havenly() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">

      <img 
        src={home1} 
        className="absolute inset-0 w-full h-100vh object-cover -z-10"
      />
      
       <div className="relative z-50">
        <NavBar />
       </div>
    
       <div className="flex items-center min-h-screen relative z-10">
          <HeroContent />
           <h1 className="absolute bottom-0 left-0 w-full text-center text-[80px] md:text-[120px] lg:text-[180px] xl:text-[220px] font-extrabold text-[#B5BA1D] tracking-tight leading-none pointer-events-none">
               Havenly
           </h1>
                
       </div>

      <div className="relative bg-white">
        <AboutUs />
      </div>

      <div className="relative bg-white mt-20">
        <Properties />
      </div>

      <div className="relative bg-white">
        <Features />
      </div>

     <div className="mt-20">
       <Designers />
     </div>

     <div className="mt-20">
       <Faq />
     </div>

     <div className="">
       <Insights />
     </div>

     <div className="">
      <Footer />
     </div>

    </div>
    
  );
}

export default Havenly;