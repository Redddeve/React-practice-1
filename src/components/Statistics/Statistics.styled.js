import styled from 'styled-components';

export const StatisticsBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 5px 5px 10px gray;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
  padding: 30px 100px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  background-color: ${props => props.$bgc};
  color: ${props => props.$color};
`;

export const Span = styled.span`
  font-size: ${props => (props.$perc ? '24px' : 'inherit')};
`;
