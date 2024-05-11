import { Content } from "../../components/Content";

export function Home() {
    const description = 'Home'
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