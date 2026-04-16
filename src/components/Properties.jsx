import prop1 from "../assets/prop1.png";
import prop2 from "../assets/prop2.png";
import prop3 from "../assets/prop3.png";

function Properties() {
  return (
    <div className="px-8 md:px-20 py-20 bg-white">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h1 className="font-bold text-neutral-900 text-4xl md:text-6xl leading-tight">
          Featured <br /> Properties
        </h1>

        <button className="mt-6 md:mt-0 bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-neutral-800 transition">
          View All Properties
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <img 
          src={prop1} 
          alt="property1"
          className="w-full h-full object-cover rounded-xl"
        />

        <img 
          src={prop2} 
          alt="property2"
          className="w-full h-full object-cover rounded-xl"
        />

        <img 
          src={prop3} 
          alt="property3"
          className="w-full h-full object-cover rounded-xl"
        />

      </div>

      <div className="flex justify-center items-center mt-20 text-center">
        <h1 className="font-extrabold text-neutral-900 text-4xl md:text-6xl leading-tight">
          Why homebuyers <br /> trust havenly
        </h1>
      </div>

    </div>
  );
}

export default Properties;