import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    width: 80%;
    border: 1px solid #4711B2;
    margin: 0 10%;
`;

export const TableRow = styled.tr`
    &:hover {
        background-color: #9575CD;
    };
    &:nth-child(odd) {
        background-color: #EDE7F6;
    };
    &:nth-child(even) {
        background-color: #D1C4E9;
    };
`;

export const TableHeader = styled.thead``;

export const TableBody = styled.tbody``;

export const TableHeaderCell = styled.th`
    text-align: center;
    padding: 0.1rem;
    background-color: #4711B2;
    color: white;
    font-weight: bold;
`;

export const TableCell = styled.td`
    text-align: center;
    padding: 0.1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #4711B2;
`;