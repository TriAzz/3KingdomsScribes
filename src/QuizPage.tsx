import React from 'react';
import { Link } from 'react-router-dom';

const QuizPage: React.FC = () => {
  return (
    <div className="scroll-container" style={{ maxWidth: '700px' }}>
      <h1>Three Kingdoms Trivia Quizzes</h1>
      <div style={{ 
        marginBottom: '1.5em', 
        fontSize: '1.08rem', 
        background: 'rgba(245,235,200,0.7)', 
        borderRadius: '18px', 
        padding: '18px 20px', 
        border: '1.5px solid #e5d3a1' 
      }}>
        <p>Test your knowledge of the Three Kingdoms period with our interactive quizzes. Choose from different quiz formats below to challenge yourself and learn more about this fascinating era of Chinese history.</p>
      </div>
      
      <div className="quiz-container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        marginTop: '30px' 
      }}>
        <div className="quiz-card" style={{ 
          padding: '24px', 
          border: '2px solid #e5d3a1', 
          borderRadius: '16px',
          backgroundColor: 'rgba(255,249,222,0.7)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          boxShadow: '0 4px 12px rgba(60,40,10,0.10)',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{ color: '#6b4a1b', marginTop: '0' }}>Timeline Quiz</h2>
          <div style={{ color: '#333', fontSize: '1.05em', marginBottom: '16px' }}>
            Arrange historical events in chronological order to test your knowledge of the Three Kingdoms timeline.
          </div>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ 
              backgroundColor: '#f3e6c4', 
              padding: '6px 12px', 
              borderRadius: '8px', 
              fontSize: '0.9em',
              color: '#6b4a1b',
              fontWeight: 'bold'
            }}>
              Difficulty: Moderate
            </div>
            <button className="scroll-btn" style={{ padding: '10px 20px' }}>
              Start Quiz
            </button>
          </div>
          <div style={{ 
            position: 'absolute', 
            top: '10px', 
            right: '10px', 
            backgroundColor: '#bfa05a', 
            color: 'white',
            padding: '4px 10px',
            borderRadius: '8px',
            fontSize: '0.8em',
            fontWeight: 'bold'
          }}>
            Coming Soon
          </div>
        </div>
        
        <Link to="./multiple-choice-quiz" style={{ textDecoration: 'none' }}>
          <div className="quiz-card" style={{ 
            padding: '24px', 
            border: '2px solid #e5d3a1', 
            borderRadius: '16px',
            backgroundColor: 'rgba(255,249,222,0.7)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 12px rgba(60,40,10,0.10)',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 style={{ color: '#6b4a1b', marginTop: '0' }}>Multiple Choice Quiz</h2>
            <div style={{ color: '#333', fontSize: '1.05em', marginBottom: '16px' }}>
              Test your knowledge with questions about the Three Kingdoms period, characters, battles, and political events.
            </div>
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ 
                backgroundColor: '#f3e6c4', 
                padding: '6px 12px', 
                borderRadius: '8px', 
                fontSize: '0.9em',
                color: '#6b4a1b',
                fontWeight: 'bold'
              }}>
                Difficulty: Various
              </div>
              <span className="scroll-btn" style={{ padding: '10px 20px' }}>
                Start Quiz
              </span>
            </div>
          </div>
        </Link>
      </div>
      
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link to="/" className="breadcrumb-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default QuizPage;