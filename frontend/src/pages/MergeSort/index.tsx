import { Content } from "../../components/Content";
import { mergeSortDescription } from "../../const/descriptions";

export function MergeSort() {
    const description = mergeSortDescription
    const form = (
        <form action="" method="POST">
            <input type="number"/>
            <button type="submit">Calcular</button>
        </form>
    )
    return(
        <Content 
            description={description}
            params = {form}
        />
    );
}