import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 250px;
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px gray;
`;

export const OnlineStatus = styled.span`
  content: '';
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => (props.$status ? '#00cc66' : 'crimson')};
`;

export const Avatar = styled.img`
  border-radius: 10px;
`;

export const Name = styled.p`
  font-weight: 500;
`;
