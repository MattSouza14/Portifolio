import '../Assets/Styles/timeLine.css'
import TimelineItem from './TimelineItem';

const Timeline = () => {
  const formations = [
    { year: '2023 - Presente', title: 'Análise e Desenvolvimento de Sistemas', institution: 'Faculdade CDL', status: 'Em andamento' }
   
  ];

  return (
    <section className="timeline">
      <h2>Minha Formação</h2>
      <div className="timeline-container">
        {formations.map((formation, index) => (
          <TimelineItem
            key={index}
            year={formation.year}
            title={formation.title}
            institution={formation.institution}
            status={formation.status}/>
        ))}
      </div>
    </section>
  );
};

export default Timeline;



