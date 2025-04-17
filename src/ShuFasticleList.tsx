import React from 'react';
import { Link } from 'react-router-dom';
import { shuFasticles } from './shuFasticles';

const ShuFasticleList: React.FC = () => {
  return (
    <div className="scroll-container">
      <h2>Book of Shu - Fasticles</h2>
      <table className="fasticle-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Main People</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {shuFasticles.map(fasticle => (
            <tr key={fasticle.id}>
              <td>{fasticle.id}</td>
              <td>
                <Link to={`/shu/${fasticle.id}`} className="fasticle-link">
                  {fasticle.name}
                </Link>
              </td>
              <td>{fasticle.mainPeople.join(', ')}</td>
              <td>
                <span style={{ 
                  color: fasticle.status.color, 
                  padding: '2px 6px', 
                  borderRadius: '4px', 
                  backgroundColor: `${fasticle.status.color}20`, 
                  fontWeight: 500,
                  fontSize: '0.8em',
                  whiteSpace: 'nowrap',
                  display: 'inline-block'
                }}>
                  {fasticle.status.text}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShuFasticleList;
