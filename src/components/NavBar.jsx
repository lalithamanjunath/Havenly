function NavBar() {
    return(
        <nav className="relative w-full bg-white/5 backdrop-blur-md border-b border-white/10">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex items-center gap-3 justify-between">
                         <img 
                            src="/logo.png"
                            alt="Havenly Logo" 
                            className="h-10 w-auto object-contain transition-transform group-hover:scale-110" 
                        />
                        <span className="text-2xl p-2 mr-2 font-semibold text-white cursor-pointer">Havenly</span>
                    </div>


                        <div className="hidden md:flex justify-between space-x-8 items-center gap-x-12">
                            <a href="#" className="text-white/80 hover:text-white transition">Properties</a>
                            <a href="#" className="text-white/80 hover:text-white transition">About</a>
                            <a href="#" className="text-white/80 hover:text-white transition">Why Havenly</a>
                            <a href="#" className="text-white/80 hover:text-white transition">Testimonals</a>
                            <a href="#" className="text-white/80 hover:text-white transition">Contact</a>

                            <img
                               src="/search.png"
                               alt="search"
                               className="h-10 w-auto object-contain transition-transform group-hover:scale-110"
                            />
                        
                            <button className="bg-white px-6 py-2.5 ml-6 rounded-full hover:bg-white/20 text-neutral-900 font-semibold transition-all shadow-lg shadow-white/20 active:scale-95">
                            Book a Call
                            </button>
                        </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;