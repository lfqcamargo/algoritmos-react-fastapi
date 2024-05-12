interface ContentProps {
    result : object | null
}

export function Result({ result }: ContentProps) {
    return (
        <div>
            <h2>Resultado:</h2>
            <pre>{result ? JSON.stringify(result, null, 2) : ""}</pre>
        </div>
    )
}