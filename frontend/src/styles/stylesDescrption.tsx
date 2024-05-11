import styled from 'styled-components';

export const StyledDescription = styled.div`
    background-color: #fafafa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: #333;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.6;

    h2 {
        color: #2c3e50;
        margin-top: 20px;
        margin-bottom: 10px;
        border-bottom: 2px solid #ecf0f1;
        padding-bottom: 5px;
    }

    p {
        margin-bottom: 15px;
    }

    ul, ol {
        padding-left: 20px;
        margin-bottom: 15px;
    }

    li {
        margin-bottom: 8px;
    }
`;
