import PropTypes from 'prop-types';
import {
  Span,
  StatItem,
  StatList,
  StatisticsBox,
  Title,
} from './Statistics.styled';

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
    <StatisticsBox>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem $bgc={randomColor()} $color={newColor} key={id}>
            <Span>{label}</Span>
            <Span $perc>{percentage} %</Span>
          </StatItem>
        ))}
      </StatList>
    </StatisticsBox>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Statistics;
