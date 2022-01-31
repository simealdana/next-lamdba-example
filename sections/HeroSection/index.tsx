import { Hero } from "../../components/hero"
import { NavBar } from "../../components/navBar"
import { BreakPoints } from "../../hooks/useResize";
import homeStyled from "../../styles/styles"

interface HeroInterfaces {
    breackPoint: BreakPoints;
}

export const HeroSection = ({breackPoint}:HeroInterfaces)=>{
    return(
        <section className={`bg-primary-background`}>
            <div className={`${homeStyled.container}`}>
                <NavBar/>
                <Hero  breackPoint={breackPoint}/>
            </div>
        </section>
    )
}