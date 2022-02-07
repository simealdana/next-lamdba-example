import { GridAlternate } from "../../components/GridAlternate"
import { NftsCards } from "../../components/NftsCards"
import { BreakPoints} from "../../hooks/useResize";

interface GridAlternateSectionInterfaces {
    breackPoint: BreakPoints;
}


export const GridAlternateSection:React.FunctionComponent<GridAlternateSectionInterfaces> = ({breackPoint})=>{
    return(
        <section className="bg-primary-background">
                <NftsCards/>
                <GridAlternate breackPoint={breackPoint}/>
        </section>
    )
}