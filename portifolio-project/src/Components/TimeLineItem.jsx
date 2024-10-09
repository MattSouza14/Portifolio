import '../Assets/Styles/timeLineItem.css';

export default function TimelineItem({ year, title, institution, status }) {
  const statusClass = status === 'Concluído' ? 'concluido' : 'andamento'

  return (
    <div className="card-timeline">
    <div className="card-header-timeline">
      <h3 className="title-timeline">{title || 'Título Indefinido'}</h3>
      <span className="year-timeline">{year || 'Ano Indefinido'}</span>
    </div>
    <div className="card-body-timeline">
      <p className="institution-timeline">{institution || 'Instituição Indefinida'}</p>
      <span className={`status-timeline ${statusClass}`}>{status}</span>
    </div>
  </div>
  )
}


