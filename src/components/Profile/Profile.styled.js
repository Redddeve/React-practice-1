import styled from 'styled-components';

export const ProfileBox = styled.div`
  margin: 150px 0 50px;
`;

export const Description = styled.div`
  padding: 50px 0;
  margin: 0 135px;
  width: 360px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 5px 10px gray;
`;

export const Avatar = styled.img`
  width: 25%;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  margin-bottom: 30px;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  margin: 0;
  width: 360px;
  border: 1px solid #6e767d;
  box-shadow: 0px 5px 10px gray;
`;

export const StatsItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6e767d;
  font-size: 16px;
  &:nth-child(2) {
    border: 1px solid #6e767d;
    border-top-width: 0px;
    border-bottom-width: 0px;
  }
`;

export const Text = styled.p`
  color: #6e767d;
  font-size: 16px;
  line-height: normal;
  margin: 0;
  margin-bottom: 10px;
`;

export const TextUsername = styled(Text)`
  color: black;
  font-weight: 600;
  font-size: 22px;
`;

export const StatsQuantity = styled.span`
  color: black;
  font-weight: 600;
  font-size: 17px;
`;
