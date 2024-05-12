interface ContentProps {
    result: { factorial: string[] } | null;
}

export function Result({ result }: ContentProps) {
    return (
        <div>
            <h2>Detalhes do Cálculo do Fatorial</h2>
            {result ? (
                <ul>
                    {result.factorial.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul>
            ) : (
                <p>Não há dados disponíveis</p>
            )}
        </div>
    )
}