interface Factorial {
    number: number
}

const BASE_URL = 'http://127.0.0.1:8000';

export const fetchFactorial = async ({ number }: Factorial) => {
    console.log(number)
    try {
        const response = await fetch(`${BASE_URL}/factorial/${number}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; 
    }
}
