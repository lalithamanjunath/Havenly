import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";

function Footer(){
    return(
        <>
        <div className="px-12 py-8 flex justify-between items-center">

           <div className="p-">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="logo" className="w-8 h-8" />
                <h1 className="text-2xl font-semibold">Havenly</h1>
              </div>

              <p className="text-gray-600 mt-8">
                Homes with heart, guidance with clarity.
              </p>
           </div>

          <div className="text-right">

            <div className="flex gap-3 justify-end mb-2">
              <img src={facebook} className="w-5 h-5" />
              <img src={instagram} className="w-5 h-5" />
              <img src={linkedin} className="w-5 h-5" />
              <img src={youtube} className="w-5 h-5" />
            </div>

            <p className="text-gray-500 text-sm">
               Legal: © 2025 Havenly. All Rights Reserved.
            </p>
          </div>
        </div>
        </>
    );
}

export default Footer;