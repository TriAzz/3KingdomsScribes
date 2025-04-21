import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="scroll-container">
      <h1>Three Kingdoms Scribed</h1>
      <div style={{ marginBottom: '1.5em', fontSize: '1.08rem', background: 'rgba(245,235,200,0.7)', borderRadius: '18px', padding: '18px 20px', border: '1.5px solid #e5d3a1' }}>
        <p><b>Records of the Three Kingdoms</b> (<i>Sanguozhi</i>) is a classic Chinese historical text written by <b>Chen Shou</b> in the 3rd century. It covers the turbulent years at the end of the Han dynasty and the Three Kingdoms period (c. 184–280 AD), chronicling the rise and fall of the Wei, Shu, and Wu states. The work is renowned for its concise, factual style and is one of the most important sources for this era of Chinese history.</p>
        <p style={{ marginTop: '0.8em' }}><b>Chen Shou</b> (c. 233–297 AD) was a historian and official from Shu Han. After the fall of Shu, he served in the Jin dynasty, where he compiled the <i>Records of the Three Kingdoms</i> from official documents, eyewitness accounts, and earlier chronicles. His work laid the foundation for later historical and literary traditions about the Three Kingdoms.</p>
      </div>
      <p style={{ fontSize: '1.2rem', marginBottom: '2em' }}>
        Summaries of Chen Shou's classic historical chronicle. Choose a book to begin:
      </p>
      <div className="kingdoms-container" style={{ display: 'flex', gap: '20px', marginTop: '30px', justifyContent: 'center' }}>
        <Link to="/wei" className="kingdom-card" style={{ 
          padding: '20px', 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px',
          textDecoration: 'none',
          width: '220px',
          textAlign: 'center',
          backgroundColor: '#f8f8f8',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}>
          <h2 style={{ color: '#2255aa', marginTop: '0' }}>Book of Wei</h2>
          <div style={{ color: '#333', fontSize: '0.95em' }}>Records of Cao Cao and the Wei kingdom</div>
        </Link>
        
        <Link to="/shu" className="kingdom-card" style={{ 
          padding: '20px', 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px',
          textDecoration: 'none',
          width: '220px',
          textAlign: 'center',
          backgroundColor: '#f8f8f8',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}>
          <h2 style={{ color: '#c93c3c', marginTop: '0' }}>Book of Shu</h2>
          <div style={{ color: '#333', fontSize: '0.95em' }}>Records of Liu Bei and the Shu kingdom</div>
        </Link>
        
        <Link to="/wu" className="kingdom-card" style={{ 
          padding: '20px', 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px',
          textDecoration: 'none',
          width: '220px',
          textAlign: 'center',
          backgroundColor: '#f8f8f8',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}>
          <h2 style={{ color: '#1e824c', marginTop: '0' }}>Book of Wu</h2>
          <div style={{ color: '#333', fontSize: '0.95em' }}>Records of Sun Quan and the Wu kingdom</div>
        </Link>
      </div>
      <div style={{ 
        marginTop: '60px', 
        borderTop: '1px solid #e0e0e0', 
        paddingTop: '20px',
        fontSize: '0.9em',
        color: '#666',
        textAlign: 'center' 
      }}>
        <h3>Acknowledgments</h3>
        <p>
          This project includes text adapted from the Records of the Three Kingdoms (三國志) 
          available on <a 
            href="https://zh.wikisource.org/wiki/%E4%B8%89%E5%9C%8B%E5%BF%97" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#2255aa', textDecoration: 'underline' }}
          >
            Chinese Wikisource
          </a>.
        </p>
        <p>
          The Records of the Three Kingdoms was written by Chen Shou in the 3rd century CE
          and remains one of the most important historical texts about this period.
        </p>
      </div>
    </div>
  );
};

export default Home;
