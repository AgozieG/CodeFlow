
const testimonials = [
    {
        name:"Sarah Chen",
        role:"Senior Developer",
        image:"https://www.bing.com/th/id/OIP.UkTBowRhbbhym0TupnXktgHaE7?w=268&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        content:"Code Flow completely changed how I learn coding. The tutorials are clear, practical, and actually build real skills. I went from confused beginner to confident builder in weeks.",
    },
    {
        name:"Ben Jack",
        role:"Media Developer",
        image:"https://www.bing.com/th/id/OIP.Rh1p8GFGRj5Yq8DOW9qYIgHaE8?w=257&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        content:"I’ve tried a lot of coding sites, but Code Flow is on another level. The community support, real-world examples, and interactive challenges make learning feel fun, not like homework.",
    },
    {
        name:"Mark Seth",
        role:"Junior Developer",
        image:"https://www.bing.com/th/id/OIP.Soqtvc8GbISKlazg81TPigHaFy?w=218&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        content:"Code Flow helped me land my first internship. The lessons are so well structured that I could actually show what I built — and interviewers noticed.",
    },
]

function Testimonials() {
    return(
        <section id="testimonials" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
                    {/* left side --- header */}
                    <div className="lg:w-1/2 w-full text-center lg:text-left">
                        <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            What developers are saying about us
                        </h2>
                        <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto">Everything you need to build, test, and deploy applications with AI-powered development tools.</p>
                    </div>
                    {/* right side---testimonials*/}

                    <div className="lg:w-1/2 w-full">
                        <div className="space-y-6 sm:space-y-8">
                            {testimonials.map((testimonial,key) => (
                                <div key={key} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"</div>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.content}</p>
                                            <div className="flex items-center space-x-2 sm:space-x-3">
                                                <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 sm:h-12 sm:w-12 rounded-full object-cover"/>
                                                <div className="">
                                                    <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                                                    <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;