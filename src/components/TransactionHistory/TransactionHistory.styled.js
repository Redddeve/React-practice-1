import styled from 'styled-components';

export const Table = styled.table`
  color: #717376;
  text-align: center;
  min-width: 400px;
  border-collapse: collapse;
  box-shadow: 0px 0px 8px gray;
`;

export const TableRow = styled.tr`
  background-color: #ecf1f4;
  &:nth-child(odd) {
    background-color: #fff;
  }
`;

export const TableHead = styled.th`
  background-color: #00bcd5;
  color: white;
`;

export const TableDesc = styled.td`
  border: 1px solid #ddd;
  padding: 10px 100px;
`;

export const TableType = styled(TableDesc)`
  text-align: left;
  text-transform: capitalize;
`;
