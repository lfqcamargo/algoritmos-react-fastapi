import { StyledDescription } from "../../../styles/stylesDescrption";

interface DescriptionProps {
    description: string;
}

export function Description({ description }: DescriptionProps) {
    return(
        <StyledDescription dangerouslySetInnerHTML={{ __html: description }}></StyledDescription>
    )
}