import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transaction_table}>
      <thead className={styles.transaction_head}>
        <tr className={styles.table_row}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.transaction_body}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.table_row}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
