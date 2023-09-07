import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.friend_item} key={id}>
          <span className={isOnline ? styles.green : styles.red}>
            {/* {isOnline ? 'Online' : 'Offline'} */}
          </span>
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
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
