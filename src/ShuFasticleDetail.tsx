import React from 'react';
import { useParams } from 'react-router-dom';
import { shuFasticles } from './shuFasticles';

const ShuFasticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fasticle = shuFasticles.find(f => String(f.id) === id);

  if (!fasticle) {
    return <div className="scroll-container"><h2>Not Found</h2></div>;
  }

  return (
    <div className="scroll-container">
      <h2>{fasticle.name}</h2>
      <p style={{ fontStyle: 'italic', marginTop: '2em', fontSize: '1.2em' }}>
        The record of {fasticle.mainPeople.join(', ')}
      </p>
    </div>
  );
};

export default ShuFasticleDetail;
