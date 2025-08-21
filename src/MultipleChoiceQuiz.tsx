import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  text: string;
  answers: string[];
  correctAnswer: string;
  explanation: string;
}

const MultipleChoiceQuiz: React.FC = () => {
  // Easy difficulty questions
  const easyQuestions: Question[] = [
    {
      id: 1,
      text: "Although likely not a real quote, the famous saying \"I would rather betray the world than let the world betray me\" is attributed to which character in the Three Kingdoms?",
      answers: [
        "Cao Cao",
        "Dong Zhuo",
        "Yuan Shao",
        "Liu Bei"
      ],
      correctAnswer: "Cao Cao",
      explanation: "This quote is commonly attributed to Cao Cao, reflecting his pragmatic and sometimes ruthless approach to politics and warfare. While the exact phrase does not appear in historical records, it became associated with Cao Cao through later interpretations of his character, particularly in the Romance of the Three Kingdoms novel. The quote captures the essence of Cao Cao's strategic mindset - he was known for preemptive actions and prioritizing practical results over idealistic principles. The other figures have different characterizations: Dong Zhuo was portrayed as simply tyrannical without such philosophical justifications, Yuan Shao was known for his indecisiveness and adherence to aristocratic traditions, and Liu Bei was characterized as prioritizing virtue and righteousness above pragmatism."
    },
    {
      id: 2,
      text: "Hefei was attacked by Sun Quan and his successors 6 times throughout the period ranging from 208 to 253. What year was the famous siege in which Zhang Liao, Yue Jin and Li Dian repelled a massive force (about 100,000) with only a small force?",
      answers: ["208", "215", "233", "253"],
      correctAnswer: "215",
      explanation: "The famous Battle of Hefei occurred in 215 CE when Zhang Liao, Yue Jin, and Li Dian defended the city against Sun Quan's massive army with only about 7,000 troops. The other sieges were: \n\n• 208: The first siege, Sun Quan attacked Hefei but retreated after an indesicive engagement with Liu Fu and Jiang Ji. \n\n• 233: This battle occurred after Zhuge Liang's Northern Expeditions began. Sun Quan attacked Hefei again but was repelled by Man Chong who had demolished the previous Hefei and rebuilt it further west as the 'New City' of Hefei. \n\n• 253: The final major assault on Hefei occurred when Wu regent Zhuge Ke led Wu forces against the city, but retreated when Sima Fu arrived with 200,000 Wei troops as reinforcements."
    }
  ];

  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Reset answer selection and explanation when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, [currentQuestionIndex]);

  // Get current questions based on selected difficulty
  const getCurrentQuestions = () => {
    switch (selectedDifficulty) {
      case 'easy':
        return easyQuestions;
      default:
        return [];
    }
  };

  const questions = getCurrentQuestions();
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleDifficultySelect = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer !== null) return; // Prevent changing answer after selection
    
    setSelectedAnswer(answer);
    setShowExplanation(true);
  };
  
  const getAnswerStyle = (answer: string) => {
    // Default style for answers
    const baseStyle = {
      backgroundColor: '#f5f5f5',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px',
      cursor: selectedAnswer === null ? 'pointer' : 'default',
      border: '1px solid #ddd',
      transition: 'all 0.3s ease'
    };
    
    // No selection made yet
    if (selectedAnswer === null) return baseStyle;
    
    // This is the correct answer
    if (answer === currentQuestion.correctAnswer) {
      return {
        ...baseStyle,
        backgroundColor: '#d4edda',
        border: '1px solid #c3e6cb',
        color: '#155724',
        fontWeight: selectedAnswer === answer ? 'bold' : 'normal',
        opacity: selectedAnswer !== answer ? 0.85 : 1,
      };
    }
    
    // This was selected but is incorrect
    if (answer === selectedAnswer) {
      return {
        ...baseStyle,
        backgroundColor: '#f8d7da',
        border: '1px solid #f5c6cb',
        color: '#721c24',
      };
    }
    
    // Other unselected answers after a selection was made
    return {
      ...baseStyle,
      opacity: 0.6,
    };
  };
  
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Difficulty selection screen
  if (!selectedDifficulty) {
    return (
      <div className="scroll-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        {/* Breadcrumb navigation */}
        <div style={{ 
          display: 'flex', 
          gap: '8px', 
          alignItems: 'center',
          marginBottom: '20px',
          fontSize: '0.9rem'
        }}>
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span>›</span>
          <Link to="/quiz" className="breadcrumb-link">Trivia Quiz</Link>
          <span>›</span>
          <span style={{ color: '#6b4a1b' }}>Multiple Choice Questions</span>
        </div>
        
        <h1>Multiple Choice Questions</h1>
        
        <div style={{ 
          backgroundColor: 'rgba(245,235,200,0.7)',
          borderRadius: '18px',
          padding: '24px',
          marginBottom: '30px',
          boxShadow: '0 4px 12px rgba(60,40,10,0.10)',
        }}>
          <h2 style={{ color: '#6b4a1b', marginTop: '0', marginBottom: '20px' }}>Select Difficulty Level</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div 
              onClick={() => handleDifficultySelect('easy')}
              style={{
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid #e5d3a1',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f3f4';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              <h3 style={{ color: '#6b4a1b', margin: '0 0 10px 0' }}>Easy</h3>
              <p style={{ margin: '0', color: '#666' }}>Basic questions about well-known events and characters</p>
              <div style={{ 
                marginTop: '10px', 
                fontSize: '0.9rem', 
                color: '#6b4a1b',
                fontWeight: 'bold'
              }}>
                2 Questions Available
              </div>
            </div>
            
            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid #ddd',
              opacity: 0.6,
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#999', margin: '0 0 10px 0' }}>Medium</h3>
              <p style={{ margin: '0', color: '#999' }}>Coming Soon</p>
            </div>
            
            <div style={{
              backgroundColor: '#f5f5f5',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid #ddd',
              opacity: 0.6,
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#999', margin: '0 0 10px 0' }}>Hard</h3>
              <p style={{ margin: '0', color: '#999' }}>Coming Soon</p>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/quiz" className="breadcrumb-link">
            Back to Quizzes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="scroll-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* Breadcrumb navigation */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        alignItems: 'center',
        marginBottom: '20px',
        fontSize: '0.9rem'
      }}>
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span>›</span>
        <Link to="/quiz" className="breadcrumb-link">Trivia Quiz</Link>
        <span>›</span>
        <span style={{ color: '#6b4a1b' }}>Multiple Choice Questions</span>
      </div>
      
      <h1>Multiple Choice Questions - {selectedDifficulty?.charAt(0).toUpperCase() + selectedDifficulty?.slice(1)}</h1>
      
      <div style={{ 
        backgroundColor: 'rgba(245,235,200,0.7)',
        borderRadius: '18px',
        padding: '24px',
        marginBottom: '30px',
        boxShadow: '0 4px 12px rgba(60,40,10,0.10)',
      }}>
        <div style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <h2 style={{ color: '#6b4a1b', marginTop: '0' }}>{currentQuestion.text}</h2>
        
        <div style={{ marginTop: '20px' }}>
          {currentQuestion.answers.map((answer, index) => (
            <div 
              key={index}
              onClick={() => handleAnswerClick(answer)}
              style={getAnswerStyle(answer)}
            >
              {answer}
            </div>
          ))}
        </div>
        
        {showExplanation && (
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '15px',
            marginTop: '20px',
            borderRadius: '8px',
            border: '1px solid #e5d3a1',
            animation: 'fadeIn 0.5s'
          }}>
            <h3 style={{ color: '#6b4a1b', marginTop: '0' }}>Explanation</h3>
            <p style={{ lineHeight: '1.6' }}>{currentQuestion.explanation}</p>
          </div>
        )}
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginTop: '25px' 
        }}>
          <button 
            onClick={prevQuestion}
            disabled={currentQuestionIndex === 0}
            className="scroll-btn"
            style={{ 
              padding: '10px 20px',
              opacity: currentQuestionIndex === 0 ? 0.5 : 1
            }}
          >
            Previous
          </button>
          
          <button
            onClick={nextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
            className="scroll-btn"
            style={{ 
              padding: '10px 20px',
              opacity: currentQuestionIndex === questions.length - 1 ? 0.5 : 1
            }}
          >
            Next
          </button>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button 
          onClick={() => setSelectedDifficulty(null)}
          className="breadcrumb-link"
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            marginRight: '20px'
          }}
        >
          Change Difficulty
        </button>
        <Link to="/quiz" className="breadcrumb-link">
          Back to Quizzes
        </Link>
      </div>
    </div>
  );
};

export default MultipleChoiceQuiz;