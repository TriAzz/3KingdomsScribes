import React from 'react';
import { Link } from 'react-router-dom';
import { wuFasticles } from './wuFasticles';

const WuFasticleList: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'flex-start', 
      maxWidth: '1400px', 
      margin: '0 0 0 300px', 
      paddingLeft: '40px', 
      paddingRight: '20px' 
    }}>
      {/* Left Navigation Menu */}
      <nav style={{ 
        minWidth: 240, 
        marginRight: 35, 
        background: '#f5f7fa', 
        borderRadius: 8, 
        padding: 16, 
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)', 
        position: 'sticky', 
        top: 100, 
        height: 'fit-content' 
      }}>
        <div style={{ marginBottom: 16 }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 15, color: '#444' }}>Book Information</h4>
          <div style={{ fontSize: 14, color: '#666', lineHeight: 1.5 }}>
            <p>The Book of Wu contains records of emperors, nobles, and officials during the Eastern Wu dynasty.</p>
            <p>Select a fasticle to view detailed historical records.</p>
            
            <div style={{ marginTop: 16, padding: 12, background: 'rgba(201, 60, 60, 0.05)', borderRadius: 6, border: '1px solid rgba(201, 60, 60, 0.15)' }}>
              <h5 style={{ margin: '0 0 8px 0', color: '#c93c3c', fontSize: 14 }}>About the Wu Kingdom</h5>
              <p style={{ margin: '0 0 8px 0', fontSize: 13 }}>
                The Eastern Wu kingdom (222-280 CE) was established by Sun Quan, continuing the legacy of his father Sun Jian and elder brother Sun Ce. Controlling the fertile lands south of the Yangtze River, Wu possessed strong naval power and economic prosperity from commerce.
              </p>
              <p style={{ margin: '0 0 0 0', fontSize: 13 }}>
                Key figures include the founder Sun Quan, his predecessor Sun Ce (known as "The Little Conqueror"), the admiral Zhou Yu who helped defeat Cao Cao at Red Cliffs, and the brilliant strategist Lu Xun who maintained Wu's independence through shrewd diplomacy and military prowess.
              </p>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="scroll-container" style={{ flex: 1, maxWidth: 'calc(100% - 290px)' }}>
        <h2>Book of Wu - Fasticles</h2>
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
            {wuFasticles.map(fasticle => (
              <tr key={fasticle.id}>
                <td>{fasticle.id}</td>
                <td>
                  <Link to={`/wu/${fasticle.id}`} className="fasticle-link">
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
    </div>
  );
};

export default WuFasticleList;
