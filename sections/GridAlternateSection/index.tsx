import { GridAlternate } from "../../components/GridAlternate"
import { NftsCards } from "../../components/NftsCards"
import { useResize } from "../../hooks/useResize";

export const GridAlternateSection = ()=>{
    const size = useResize();
    return(
        <section className="bg-primary-background">
                <NftsCards/>
                <GridAlternate breackPoint={size}/>
        </section>
    )
}