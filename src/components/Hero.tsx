import banner from "../assets/banner-stack.png"

function Hero() {
  return (
    <section className="mx-auto grid max-w-356.25 items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-24 md:py-24 ">
      {/* Left Side */}
      <div className="max-w-138.75 space-y-10">
        {/* Headline */}
        <h1 className="text-5xl font-bold text-slate-900 md:text-[48px]">
          Build Your Ideal 
          <br />
          <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        {/* Paragraph */}
        <p className="mt-5 max-w-138.75 text-base text-slate-500 md:text-[16px]">
          Explore frontend, backend, database, and tooling options,
          <br /> compare them side by side, and put together the stack that fits your
          <br /> next project.
        </p>
        {/* Button */}
        <div className="flex items-center gap-2">
          <button className="text-white px-7 py-3 rounded-lg bg-linear-to-r from-orange-500 to-pink-500">Explore Technologies</button>
          <button className="rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-700">Learn More</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center md:justify-end">
          <img src={banner} alt="Banner 3D img" />
      </div>
    </section>
  );
}

export default Hero;