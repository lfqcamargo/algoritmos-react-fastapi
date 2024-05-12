// Factorial.js
import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Content } from "../../components/Content";
import { factorialDescription } from "../../const/descriptions";
import { FormStyled } from "../../styles/stylesForm";
import { fetchFactorial } from "../../services/apiService";

export function Factorial() {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const fetchedData = await fetchFactorial();  
            setData(fetchedData);
        } catch (error) {
            console.error('Error:', error);
            setData(null);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const form = (
        <FormStyled onSubmit={handleSubmit}>
            <h2>Parâmetros Para Calcular</h2>
            <p>Digite um número inteiro qualquer no campo abaixo, para ver o seu fatorial!</p>
            <label htmlFor="inputNumber">Número:</label>
            <input 
                type="number" 
                id="inputNumber" 
                name="inputNumber" 
                value={inputValue} 
                onChange={handleInputChange}
            />
            <Button text="Calcular" onClick={() => {}} />
        </FormStyled>
    );

    return (
        <Content 
            description={factorialDescription}
            params={form}
            result={data}
        />
    );
}
