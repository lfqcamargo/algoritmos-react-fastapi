import { Link } from "react-router-dom"
import { OptionsStyled } from "./stylesOptions"

export function Options () {
    return(
        <OptionsStyled>
            <nav>
                <li><Link to="/factorial">Fatorial</Link></li>
                <li><Link to="/binary-search-ordened">Busca Binária Ordenada</Link></li>
                <li><Link to="/merge-sort">Merge Sort</Link></li>
            </nav>
        </OptionsStyled>

    )
}