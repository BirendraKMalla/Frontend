import { HeroImage } from "../../../image";

const HeroSection = () => {
  return (
    <div className="relative h-150">
      <img
        src={HeroImage}
        alt="banner"
        className="h-full w-full absolute object-cover"
      />

      <div className="absolute inset-0 dark:bg-black/50">
        <div className="container h-full flex items-center">
          <div className="space-y-5">
            <div className="">
              <span className="section-btn">New Arrivals 2026</span>
            </div>
            <h1 className="font-bold text-3xl text-white md:text-4xl lg:text-5xl">
              Discover Your Perfect Style
            </h1>
            <p className="text-xs text-gray-300">
              Explore our latest collection of trendy fashion. Quality meets
              affordable
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button className="primary-btn">Shop now</button>
              <button className="secondary-btn">view collection</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
