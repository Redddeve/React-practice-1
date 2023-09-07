import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

let newColor;
const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  newColor = r * 0.299 + g * 0.587 + b * 0.114;
  if (newColor > 186) {
    newColor = 'black';
  } else {
    newColor = 'white';
  }
  return `rgb(${r}, ${g}, ${b})`;
};

function Statistics({ stats, title }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: randomColor(), color: newColor }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
