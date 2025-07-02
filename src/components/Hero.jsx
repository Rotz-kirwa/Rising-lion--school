export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-8">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Empowering Minds,
              <span className="block text-yellow-400 mt-2">Shaping Futures</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              At Rising Lion Academy, we nurture young minds with excellence in education, character development, and innovative learning approaches.
            </p>
          </div>
          
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center space-y-4">
                <div className="text-4xl sm:text-5xl">📚</div>
                <h3 className="text-lg sm:text-xl font-bold">Excellence in Education</h3>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                  Preparing students for success through innovative teaching methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}