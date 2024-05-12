import { Description } from "./Description";
import { Params } from "./Params";
import { Result } from "./Result";
import { ContentStyled } from "./stylesContent";

interface ContentProps {
    description: string;
    params: React.ReactNode
    result: { factorial: string[] } | null;
}

export function Content ({ description, params, result }: ContentProps) {
    return(
        <ContentStyled>
            <Description description={description} />

            <Params params={params} />

            <Result result={result} />
        </ContentStyled>
    )
}