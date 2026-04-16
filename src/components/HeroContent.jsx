function HeroContent(){
    return(
        <div className="relative w-full min-h-[600px] flex flex-col justify-center px-8 md:px-20 py-20 overflow-hidden">

            <div className="absolute top-12 right-4 md:right-10 w-full max-w-[320px] bg-white/18 backdrop-blur-lg border border-white/20 rounded-3xl p-8">

               <h3 className="font-bold text-white text-lg mb-2">The Skyline Residence</h3>
               <p className="text-[11px] text-white/80 leading-relaxed mb-6">
                  Breathing views, smart home features, and <br/>
                  spaces designed for your lifestyle
                </p>

                <div className="flex items-center justify-between">
                    <button className="bg-white text-neutral-900 font-semibold rounded-full px-3 py-3 hover:bg-gray-200 transition">
                        Explore This Home
                    </button>
                    
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full font-bold bg-white"></div>
                        <div className="w-2 h-2 rounded-full font-bold bg-white/40"></div>
                        <div className="w-2 h-2 rounded-full font-bold bg-white/40"></div>
                        <div className="w-2 h-2 rounded-full font-bold bg-white/40"></div>
                    </div>
                </div>

            </div>
            <div className="relative z-0">
                <h1 className="text-white font-bold text-5xl md:text-[80px] leading-[1.1] mb-32">
                   Find a home that <br/>
                   <span className="text-white">feels like heaven.</span>
                 </h1>

                <div className="flex flex-col sm:flex-row gap-4 mb-24">
                  <button className="bg-white text-neutral-900 font-semibold rounded-full px-6 py-3 hover:bg-gray-200 transition">
                    View Available Properties
                  </button>
                  <button className="bg-white/20 backdrop-blur-md text-white font-semibold rounded-full px-6 py-3 hover:bg-white/30 transition">
                    Start Your Home Journey
                  </button>
                </div>


            </div>
            
        </div>
        
    );
};

export default HeroContent;