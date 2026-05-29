import { HeroImage } from "../../../image"

const HeroSection = () => {
  return (
    <div>
        <img src={HeroImage} alt="banner" className="h-full w-full object-cover"/>
        <div>
            <div>
                <div>
                    <div>
                        <span>New Arrivals 2026</span>
                        <h1>Discover Your Perfect Style</h1>
                        <p>Explore our latest collection of trendy fashion. Quality meets affordable</p>
                        <div>
                            <button className="primary-btn">Shop now</button>
                            <button>view collection</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection