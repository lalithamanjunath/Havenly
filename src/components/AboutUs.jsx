import image from "../assets/image.png";

function AboutUs() {
    return (
        <div className="bg-white pt-32 pb-12 px-8 md:px-20">
            
            <div className="flex justify-between items-center max-w-7xl mx-auto mb-16">
               
                <div className="flex items-center gap-4 flex-1">
                    <span className="text-5xl font-bold text-neutral-900">500+</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold leading-tight">
                        Properties sold <br/> & Rented 
                    </span>
                </div>

                
                <div className="hidden lg:block h-10 w-[1px] bg-gray-200 mx-4"></div>

                <div className="flex items-center gap-4 flex-1">
                    <span className="text-5xl font-bold text-neutral-900">98%</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold leading-tight">
                        Customer <br/> Satisfaction Rate
                    </span>
                </div>

                <div className="hidden lg:block h-10 w-[1px] bg-gray-200 mx-4"></div>

                <div className="flex items-center gap-4 flex-1">
                    <span className="text-5xl font-bold text-neutral-900">10+</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold leading-tight">
                        Years of Local <br/> Market Expertise 
                    </span>
                </div>

                <div className="hidden lg:block h-10 w-[1px] bg-gray-200 mx-4"></div>

                <div className="flex items-center gap-4 flex-1">
                    <span className="text-5xl font-bold text-neutral-900">300+</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold leading-tight">
                        Happy Families <br/> Served 
                    </span>
                </div>
            </div>

            
            <div className="border-t border-gray-200 w-full mb-20"></div>

            
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-start">
                
                <div className="md:w-1/4">
                    <span className="bg-[#B5BA1D] text-black text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                        About Us
                    </span>
                </div>

                
                <div className="md:w-3/4">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-[1.1] mb-2">
                        At Haven, we believe a home is more than just walls—it’s
                        where life happens. Our team blends passion, market insight,
                    </h2>
                    <p className="text-gray-600 text-2xl md:text-3xl font-bold leading-[1.1] mb-10">
                        and a personal touch to help every client feel confident and
                        cared for. From first-time buyers to seasoned investors, we
                        make property journeys simple and exciting.
                    </p>

                    <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-neutral-800 transition">
                        Learn More
                    </button>

                    <img 
                      src={image}
                      alt="Home"
                      className="h-full mt-16 w-auto object-contain transition-transform"
                    />

                </div>
            </div>
        </div>
    );
}

export default AboutUs;