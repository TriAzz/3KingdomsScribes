import React from 'react';
import { useParams } from 'react-router-dom';
import { wuFasticles } from './wuFasticles';

const WuFasticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fasticle = wuFasticles.find(f => String(f.id) === id);

  if (!fasticle) {
    return <div className="scroll-container"><h2>Not Found</h2></div>;
  }

  // Check if the fasticle has no content yet ("To Be Added")
  if (fasticle.status.text === "To Be Added") {
    return (
      <div className="scroll-container">
        <h2>{fasticle.name}</h2>
        <p style={{ fontStyle: 'italic', marginTop: '2em', fontSize: '1.2em' }}>
          The record of {fasticle.mainPeople.join(', ')} will be added at a later time.
        </p>
      </div>
    );
  }

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
        width: 320,
        minWidth: 320,
        maxWidth: 320, 
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
          <button 
            onClick={() => {
              const el = document.querySelector('h2');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }} 
            style={{ 
              background: '#2255aa', 
              color: 'white', 
              border: 'none', 
              borderRadius: 4, 
              padding: '6px 18px', 
              cursor: 'pointer', 
              fontWeight: 500, 
              width: '100%' 
            }}
          >
            Go to Title
          </button>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="scroll-container" style={{ flex: 1, maxWidth: 'calc(100% - 290px)' }}>
        <h2>{fasticle.name}</h2>
        <p style={{ fontStyle: 'italic', marginTop: '2em', fontSize: '1.2em' }}>
          The record of {fasticle.mainPeople.join(', ')} will be added at a later time.
        </p>
      </div>
    </div>
  );
};

export default WuFasticleDetail;
