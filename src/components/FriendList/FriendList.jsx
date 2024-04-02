import PropTypes from 'prop-types';
import {
  Avatar,
  FriendsItem,
  FriendsList,
  Name,
  OnlineStatus,
} from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem key={id}>
          <OnlineStatus $status={isOnline}></OnlineStatus>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </FriendsItem>
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.string,
    })
  ).isRequired,
};

export default FriendList;
