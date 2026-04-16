import connects from "../assets/connects.png";
import brain from "../assets/brain.png";
import like from "../assets/like.png";
import trust from "../assets/trust.png";

function Features() {
  return (
    <div className="bg-white py-20 px-6">

      <div className="grid grid-cols-4 grid-rows-2 gap-10 max-w-5xl mx-auto">

        
        <div className="col-start-1 row-start-1 bg-gray-100 p-8 rounded-xl text-center">
          <img src={connects} className="mx-auto w-14 h-14 mb-4 rounded-full bg-white p-2" />
          <h3 className="font-bold">Human-First Approach</h3>
          <p className="text-sm text-gray-500 mt-2">
            We listen before we recommend.
          </p>
        </div>

        
        <div className="col-start-3 row-start-1 bg-gray-100 p-8 rounded-xl text-center">
          <img src={like} className="mx-auto w-14 h-14 mb-4 rounded-full bg-white p-2" />
          <h3 className="font-bold">Neighborhood Knowledge</h3>
          <p className="text-sm text-gray-500 mt-2">
            We know the streets and people.
          </p>
        </div>

        
        <div className="col-start-2 row-start-2 bg-gray-100 p-8 rounded-xl text-center">
          <img src={brain} className="mx-auto w-14 h-14 mb-4 rounded-full bg-white p-2" />
          <h3 className="font-bold">Clear, Honest Information</h3>
          <p className="text-sm text-gray-500 mt-2">
            No hidden fees. No confusion.
          </p>
        </div>

        
        <div className="col-start-4 row-start-2 bg-gray-100 p-8 rounded-xl text-center">
          <img src={trust} className="mx-auto w-14 h-14 mb-4 rounded-full bg-white p-2" />
          <h3 className="font-bold">Stress-Free Guidance</h3>
          <p className="text-sm text-gray-500 mt-2">
            We support you till closing.
          </p>
        </div>

      </div>

      
      <div className="flex justify-center items-center mt-24 text-center">
        <h1 className="font-extrabold text-neutral-900 text-4xl md:text-6xl leading-tight">
          People who found home
        </h1>
      </div>

    </div>
  );
}

export default Features;