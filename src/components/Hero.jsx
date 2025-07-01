export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container flex flex-col lg:flex-row items-center justify-between min-h-screen pt-20 pb-12">
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Empowering Minds,
            <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text mt-2"> 
              Shaping Futures
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            At Rising Lion Academy, we nurture young minds with excellence in education, 
            character development, and innovative learning approaches.
          </p>
        </div>
        
        <div className="flex-1 max-w-md w-full lg:max-w-lg px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl mb-4">📚</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Excellence in Education</h3>
              <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                Preparing students for success in academics and life through innovative teaching methods.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}