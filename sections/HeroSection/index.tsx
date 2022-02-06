import { Hero } from "../../components/hero";
import { HeroAlternate } from "../../components/heroAlternate";
import { NavBarAlternate } from "../../components/navBarAlternate";
import { BreakPoints } from "../../hooks/useResize";
import homeStyled from "../../styles/styles"

interface HeroInterfaces {
    breackPoint: BreakPoints;
}

export const HeroSection = ({breackPoint}:HeroInterfaces)=>{
    return(
        <section className={`bg-primary-background`}>
                <NavBarAlternate/>
                <HeroAlternate  breackPoint={breackPoint}/>
        </section>
    )
}