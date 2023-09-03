import PropTypes from "prop-types"
import css from './Statistics.module.css'

export const Statistics = ({ stats }) =>
  <section className={css.statistics}>
    <ul className={css.list}>
      {stats.map((s) => {
        return <li className={css.item} key={s.id}>
          <span className={css.label}>{s.label}</span>
          <span className={css.percentage}> {s.percentage}%</span>
        </li>
      })}
    </ul>
  </section>

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
    id: PropTypes.string,
  }))

}