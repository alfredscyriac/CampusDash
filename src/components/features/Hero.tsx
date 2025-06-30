export default function Hero() {
    return (
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/campusdashbg.png)' }}
      >
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Campus food delivery <span className="text-yellow-300"> made simple</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90">
              Order from on-campus dining spots, delivered by fellow students
            </p>
            
          </div>
        </div>
      </section>
    )
}