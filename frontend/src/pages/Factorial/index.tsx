import { Content } from "../../components/Content";
import { factorialDescription } from "../../const/descriptions";

export function Factorial() {
    const description = factorialDescription

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