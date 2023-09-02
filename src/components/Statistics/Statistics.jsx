import PropTypes from "prop-types"
import css from './Statistics.module.css'

export const Statistics = ({title, stats }) =>
<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>
  <ul className={css.list}>
  {stats.map((s) => {
    return <li className={css.item} key={s.id}> 
      <span className={css.label}>{s.label}</span>
      <span className={css.percentage}> {s.percentage}%</span>
    </li>})}
    </ul>
</section>

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage:PropTypes.number,
  id:PropTypes.number,

}