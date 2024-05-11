import { Content } from "../../components/Content";
import { binarySearchDescription } from "../../const/descriptions";

export function BinarySearchOrdened() {
    const description = binarySearchDescription

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