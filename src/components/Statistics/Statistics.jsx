// import data from "data.json"

export const Statistics = ({title, stats }) =>
<section className="statistics">
  <h2 className="title">{title}</h2>
  <ul className="stat-list">
  {stats.map((s) => {
    return <li className="item" key={s.id}> 
      <span className="label">{s.label}</span>
      <span className="percentage"> {s.percentage}%</span>
    </li>})}
    </ul>
</section>
