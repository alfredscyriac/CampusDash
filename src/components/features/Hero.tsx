export default function Hero() {
    return (
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/campusdashbg.png)' }}
      >
        <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
              Campus food delivery made simple
            </h1>
            
            <p className="text-lg text-white/90 italic font-normal">
              Order from on-campus dining spots, delivered by fellow students
            </p>
          </div>
        </div>
      </section>
    )
}