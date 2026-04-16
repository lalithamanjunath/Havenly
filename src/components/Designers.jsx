import bgImage from "../assets/bgImage.png";
import designer1 from "../assets/designer1.png";
import designer2 from "../assets/designer2.png";
import designer3 from "../assets/designer3.png";
import designer4 from "../assets/designer4.png";
import arrow1 from "../assets/arrow.png";

function Designers() {
  return (
    <div className="w-full px-6 py-20 bg-white flex justify-center">

      
      <div className="relative w-full max-w-6xl h-[500px] rounded-3xl overflow-hidden">

       
        <img
          src={bgImage}
          alt="Bg"
          className="absolute inset-0 w-full h-full object-cover"
        />

      
        <div className="absolute inset-0 bg-black/20"></div>

       
        <div className="relative z-10 w-full h-full flex items-center justify-between px-8">

          
          <div className="relative w-1/2 h-full">

            <img
              src={designer4}
              className="absolute bottom-12 left-0 w-16 h-16 rounded-xl"
            />

            <img
              src={designer2}
              className="absolute bottom-12 left-24 w-24 h-32 rounded-2xl shadow-lg"
            />

            <img
              src={designer3}
              className="absolute bottom-12 left-64 w-32 h-44 rounded-2xl shadow-xl"
            />

            <img
              src={designer1}
              className="absolute bottom-12 left-[25.5rem] w-44 h-56 rounded-2xl shadow-2xl opacity-[100%]"
            />
          </div>

          
          <div className="w-[400px] p-8 rounded-3xl backdrop-blur-sm bg-white/10 border border-white/20 text-white shadow-2xl">

            <div className="text-[#B5BA1D] text-8xl mb-4">“</div>

            <p className="text-lg leading-relaxed mb-6 text-white/90">
              Havenly didn’t just help us buy a house. They helped us
              understand what we actually needed. Every step felt clear.
              No pressure. Just honesty.
            </p>

            <div className="border-t border-white/20 my-4"></div>

            <div className="flex items-center justify-between mt-6">
              <div>
                <h3 className="font-semibold">SAMIR REHAMN</h3>
                <p className="text-sm text-white/70">UI/UX DESIGNER</p>
              </div>

              <button className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                <img src={arrow1} className="w-full h-full" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Designers;