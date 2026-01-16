import { Menu } from "lucide-react";
import {X} from "lucide-react"
import { useState } from "react";


function Navbar() {
    const [mobileMenuIsOpen,setMobileMenuIsOpen] = useState(false)
    return(
        <nav className="fixed top-0 w-full z-50 tranition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img src="/logo.png" 
                            alt="CodeFlow" 
                            className="x-6 h-6 sm:w-8 sm:h8"/>
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Code</span>
                            <span className="text-blue-400">Flow</span>
                        </span>
                    </div>
                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
                        <a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
                        <a href="#testimonials" className="text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
                    </div>

                    <button 
                        className="md:hidden p-2 text-gray-300 hover:text-white" 
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                        {mobileMenuIsOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6"/> :<Menu className="w-5 h-5 sm:w-6 sm:h-6"/>}
                    </button>
                </div>
            </div>
            {mobileMenuIsOpen && 
                <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-500">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a href="#features" className="block text-gray-300 hover:text-white text-sm lg:text-base" onClick={() => setMobileMenuIsOpen(false)}>Features</a>
                        <a href="#pricing" className="block text-gray-300 hover:text-white text-sm lg:text-base" onClick={() => setMobileMenuIsOpen(false)}>Pricing</a>
                        <a href="#testimonials" className="block text-gray-300 hover:text-white text-sm lg:text-base" onClick={() => setMobileMenuIsOpen(false)}>Testimonials</a>
                    </div>
                </div> 
            }
        </nav>
    )
}

export default Navbar;