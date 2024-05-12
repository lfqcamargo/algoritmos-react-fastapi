// apiService.js

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchFactorial = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; 
    }
}
