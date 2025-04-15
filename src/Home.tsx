import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="scroll-container">
      <h1>Records of the Three Kingdoms</h1>
      <div style={{ marginBottom: '1.5em', fontSize: '1.08rem', background: 'rgba(245,235,200,0.7)', borderRadius: '18px', padding: '18px 20px', border: '1.5px solid #e5d3a1' }}>
        <p><b>Records of the Three Kingdoms</b> (<i>Sanguozhi</i>) is a classic Chinese historical text written by <b>Chen Shou</b> in the 3rd century. It covers the turbulent years at the end of the Han dynasty and the Three Kingdoms period (c. 184–280 AD), chronicling the rise and fall of the Wei, Shu, and Wu states. The work is renowned for its concise, factual style and is one of the most important sources for this era of Chinese history.</p>
        <p style={{ marginTop: '0.8em' }}><b>Chen Shou</b> (c. 233–297 AD) was a historian and official from Shu Han. After the fall of Shu, he served in the Jin dynasty, where he compiled the <i>Records of the Three Kingdoms</i> from official documents, eyewitness accounts, and earlier chronicles. His work laid the foundation for later historical and literary traditions about the Three Kingdoms.</p>
      </div>
      <p style={{ fontSize: '1.2rem', marginBottom: '2em' }}>
        Summaries of Chen Shou's classic historical chronicle. Choose a book to begin:
      </p>
      <div className="button-group">
        <a href="/wei" className="scroll-btn">Book of Wei</a>
        <a href="/shu" className="scroll-btn">Book of Shu</a>
        <a href="/wu" className="scroll-btn">Book of Wu</a>
      </div>
    </div>
  );
};

export default Home;
