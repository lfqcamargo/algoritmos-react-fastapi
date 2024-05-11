import { Description } from "./Description";
import { Params } from "./Params";
import { Result } from "./Result";
import { ContentStyled } from "./stylesContent";

interface ContentProps {
    description: string;
    params: React.ReactNode
}

export function Content ({ description, params }: ContentProps) {
    return(
        <ContentStyled>
            <Description description={description} />

            <Params params={params} />

            <Result />
        </ContentStyled>
    )
}