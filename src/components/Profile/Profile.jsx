import PropTypes from 'prop-types';
import {
  Avatar,
  Description,
  ProfileBox,
  StatsItem,
  StatsList,
  StatsQuantity,
  Text,
  TextUsername,
} from './Profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileBox>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <TextUsername>{username}</TextUsername>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileBox>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
