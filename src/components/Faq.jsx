import dropDown from "../assets/dropDown.png";

function Faq() {
    return(
        <div className="grid grid-cols-2 px-16 py-16 gap-8">

            <div className="flex flex-col justify-between w-full max-w-md h-screen p-12 bg-gray-300 rounded-2xl">
                <button className="bg-[#B5BA1D] w-16 px-4 py-1 mt-4 rounded-full font-semibold text-neutral-900">
                    FAQ
                </button>
                <p className="text-neutral-900 font-semibold text-5xl mt-8 leading-tight">
                    Everything <br/>
                    you need <br/>
                    to know
                </p>

                <p className="text-neutral-900 font-semibold mb-6">
                    Have a custom question? <br/>
                    Contact Us anytime. 
                </p>

                <button className="bg-neutral-900 rounded-full font-semibold text-white px-6 py-3">
                    Contact Us Now
                </button>
            </div>

            <div className="flex flex-col gap-8 p-12 bg-white rounded-2xl">

                <div className="">
                   <div className="flex justify-between items-center font-semibold">
                      <p className="text-gray-300 text-2xl">1. How do I know which home is right for me?</p>
                   </div>

                      <p className="text-neutral-900 mt-4 text-sm leading-relaxed">
                          We start by learning about your lifestyle, budget, and what “home” feels like to you.
                          From there, we guide you through options that genuinely fit your needs. No pressure.
                          No confusion. Just clarity.
                     </p>
                </div>

                <div className="border-t border-gray w-full"></div>


                <div className="flex justify-between pb-4 text-neutral-900 font-semibold">
                    <p className="text-2xl">2. Do you charge for the first consultation?</p>
                    <img src={dropDown} alt="dropDown" className="w-4 h-4 rounded-full" />
                </div>

                <div className="border-t border-gray-300 w-full"></div>


                 <div className="flex justify-between pb-4 text-neutral-900 font-semibold">
                    <p className="text-2xl">3. Can you help first-time homebuyers?</p>
                    <img src={dropDown} alt="dropDown" className="w-4 h-4 rounded-full" />
                </div>

                <div className="border-t border-gray-300 w-full"></div>


                 <div className="flex justify-between pb-4 text-neutral-900 font-semibold">
                    <p className="text-2xl">4. What areas do you work in?</p>
                    <img src={dropDown} alt="dropDown" className="w-4 h-4 rounded-full" />
                </div>

                <div className="border-t border-gray-300 w-full"></div>


                <div className="flex justify-between pb-4 text-neutral-900 font-semibold">
                    <p className="text-2xl">5. How long to buy a house?</p>
                    <img src={dropDown} alt="dropDown" className="w-4 h-4 rounded-full" />
                </div>

                <div className="border-t border-gray-300 w-full"></div>

                <div className="flex justify-between pb-4 text-netural-900 font-semibold">
                    <p className="text-2xl">6. Can I sell my current home through you too?</p>
                    <img src={dropDown} alt="dropDown" className="w-4 h-4 rounded-full" />
                </div>

                <div className="border-t border-gray-300 w-full"></div>

            </div>
            
        </div>

    );
}

export default Faq;