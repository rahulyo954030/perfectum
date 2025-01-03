import { AboutHero, Careers, Stats,Mission,Values } from "@/_components/about"
import NewsLetter from "@/_components/common/newsletter"

const About = () => {
    return (
        <div className='bg-secondary1'>
           <AboutHero/>
           <Stats/>
           <Mission/>
           <Values/>
           <Careers/>
           <NewsLetter/>
        </div>
    )
}

export default About