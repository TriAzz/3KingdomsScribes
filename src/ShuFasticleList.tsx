import React from 'react';
import { Link } from 'react-router-dom';
import { shuFasticles } from './shuFasticles';

const ShuFasticleList: React.FC = () => {
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
            <p>The Book of Shu contains records of emperors, nobles, and officials during the Shu Han dynasty.</p>
            <p>Select a fasticle to view detailed historical records.</p>
            
            <div style={{ marginTop: 16, padding: 12, background: 'rgba(30, 130, 76, 0.05)', borderRadius: 6, border: '1px solid rgba(30, 130, 76, 0.15)' }}>
              <h5 style={{ margin: '0 0 8px 0', color: '#1e824c', fontSize: 14 }}>About the Shu Kingdom</h5>
              <p style={{ margin: '0 0 8px 0', fontSize: 13 }}>
                The Shu Han kingdom (221-263 CE) was founded by Liu Bei, who claimed legitimacy as a descendant of the Han imperial family. Based in present-day Sichuan, Shu was protected by natural mountain barriers but had limited population and resources.
              </p>
              <p style={{ margin: '0 0 0 0', fontSize: 13 }}>
                Key figures include the "Former Lord" Liu Bei, the "Later Lord" Liu Shan, the brilliant strategist Zhuge Liang, and the famous generals of the "Five Tiger Generals": Guan Yu, Zhang Fei, Zhao Yun, Ma Chao, and Huang Zhong.
              </p>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="scroll-container" style={{ flex: 1, maxWidth: 'calc(100% - 290px)' }}>
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
    </div>
  );
};

export default ShuFasticleList;
