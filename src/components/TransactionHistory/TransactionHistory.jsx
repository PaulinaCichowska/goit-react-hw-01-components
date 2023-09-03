
import PropTypes from "prop-types"
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) =>
  <div className={css.tabele}>
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((i) => {
          return <tr className={css.row} key={i.id}>
            <td className={css.td}>{i.type}</td>
            <td className={css.td}>{i.amount}</td>
            <td className={css.td}>{i.currency}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    currency: PropTypes.string,
    amount: PropTypes.string,
    id: PropTypes.string,
  }))
}
