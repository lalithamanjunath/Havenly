import house1 from "../assets/house1.png";
import house2 from "../assets/house2.png";
import house3 from "../assets/house3.png";
import arrow from "../assets/arrow.png";

function Insights(){
    return(
        <div className="px-16 py-16 bg-white">
            <h1 className="font text-6xl font-extrabold md-12 px-12 mb-12">
                Latest <br/> Insights
            </h1>

            <div className="grid grid-cols-3 gap-8">

                <div className="relative px-12">
                    <img src={house1} className="w-80 h-52 rounded-xl object-cover" />
                 <div className="absolute -mt-16 right-24 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                    <img src={arrow} className="w-12 h-12" />
                 </div>
                </div>
                <div className="relative px-12">
                    <img src={house2} className="w-80 h-52 rounded-xl object-cover" />
                 <div className="absolute -mt-16 right-24 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                    <img src={arrow} className="w-12 h-12" />
                 </div>
                </div>
                <div className="relative px-12">
                    <img src={house3} className="w-80 h-52 rounded-xl object-cover" />
                 <div className="absolute -mt-16 right-24 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
                    <img src={arrow} className="w-12 h-12" />
                 </div>
                </div>
           </div>

           <div className="border-t border-gray-300 w-full mt-16"></div>

        </div>
    );
}

export default Insights;