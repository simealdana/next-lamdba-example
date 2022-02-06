import { GridAlternate } from "../../components/GridAlternate"
import { NftsCards } from "../../components/NftsCards"

export const GridAlternateSection = ()=>{
    return(
        <section className="bg-primary-background">
                <NftsCards/>
                <GridAlternate/>
        </section>
    )
}