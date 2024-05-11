interface ParamsProps {
    params: React.ReactNode;
}

export function Params({ params }: ParamsProps) {
    return(
        <div>
            {params}
        </div>
    )
}