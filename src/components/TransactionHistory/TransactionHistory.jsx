
import PropTypes from "prop-types"


export const TransactionHistory = ({items})=>
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>

  {items.map((i) => {
    return <tr key={i.id}>
    <td>{i.type}</td>
    <td>{i.amount}</td>
    <td>{i.currency}</td>
  </tr>})}
  

  </tbody>
</table>

TransactionHistory.propTypes = {
    type: PropTypes.string,
    currency: PropTypes.string,
    amount:PropTypes.number,
    id:PropTypes.number,
  
  }