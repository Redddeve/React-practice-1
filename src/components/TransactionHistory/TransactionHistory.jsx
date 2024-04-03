import PropTypes from 'prop-types';
import {
  Table,
  TableDesc,
  TableHead,
  TableRow,
  TableType,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableType>{type}</TableType>
            <TableDesc>{amount}</TableDesc>
            <TableDesc>{currency}</TableDesc>
          </TableRow>
        ))}
      </tbody>
    </Table>
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
