import React from 'react';
import { Link } from 'react-router-dom';
import { wuFasticles } from './wuFasticles';

const WuFasticleList: React.FC = () => {
  return (
    <div className="scroll-container">
      <h2>Book of Wu - Fasticles</h2>
      <table className="fasticle-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Main People</th>
          </tr>
        </thead>
        <tbody>
          {wuFasticles.map(fasticle => (
            <tr key={fasticle.id}>
              <td>{fasticle.id}</td>
              <td>
                <Link to={`/wu/${fasticle.id}`} className="fasticle-link">
                  {fasticle.name}
                </Link>
              </td>
              <td>{fasticle.mainPeople.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WuFasticleList;
