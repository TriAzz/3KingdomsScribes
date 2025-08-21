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
      explanation: "This quote is famously attributed to Cao Cao in the novel Romance of the Three Kingdoms, where it encapsulates his pragmatic and often ruthless philosophy. While not found in historical records, the line effectively portrays his character as a leader who prioritized practical outcomes and preemptive action over traditional morality.\n\nDong Zhuo: Portrayed as a brute tyrant who was cruel for his own pleasure, lacking the complex, philosophical justification suggested by the quote.\nYuan Shao: Known for his aristocratic bearing but also his chronic indecisiveness, which is contrary to the decisive and proactive nature of the quote.\nLiu Bei: Characterized as the opposite of Cao Cao, prioritizing benevolence, virtue, and righteousness, often to his own detriment."
    },
    {
      id: 2,
      text: "Hefei was attacked by Sun Quan and his successors 6 times throughout the period ranging from 208 to 253. What year was the famous siege in which Zhang Liao, Yue Jin and Li Dian repelled a massive force (about 100,000) with only a small force?",
      answers: ["208", "215", "233", "253"],
      correctAnswer: "215",
      explanation: "The famous Battle of Hefei occurred in 215 CE when Zhang Liao, Yue Jin, and Li Dian defended the city against Sun Quan's massive army with only about 7,000 troops.\n\nThe other sieges of Hefei were:\n\n• 208 CE: The first siege occurred during Cao Cao's southern campaign, before the Battle of Red Cliffs. Sun Quan attacked Hefei but retreated after an indecisive engagement with Liu Fu and Jiang Ji.\n\n• 233 CE: This battle occurred after Zhuge Liang's Northern Expeditions had begun. Sun Quan attacked Hefei again but was repelled by Man Chong, who had demolished the previous Hefei and rebuilt it further west as the 'New City' of Hefei.\n\n• 253 CE: The final major assault on Hefei occurred when Wu regent Zhuge Ke led Wu forces against the city, but retreated when Sima Fu arrived with 200,000 Wei troops as reinforcements."
    },
    {
      id: 3,
      text: "Before compiling the Records of the Three Kingdoms, Chen Shou served as an official in which kingdom?",
      answers: [
        "Shu",
        "Wei",
        "Wu",
        "Jin"
      ],
      correctAnswer: "Shu",
      explanation: "Chen Shou served as an official in Shu under Liu Shan before the kingdom's fall in 263 CE. After Shu was conquered, he later worked under the Jin dynasty, where he wrote the Sanguo Zhi. His early career in Shu gave him direct access to many of the figures and records of that state."
    },
    {
      id: 4,
      text: "During the Coalition Against Dong Zhuo, Cao Cao suffered a major defeat in his only significant engagement of the campaign. Which general defeated him at the Battle of Xingyang?",
      answers: [
        "Xu Rong",
        "Lu Bu",
        "Hua Xiong",
        "Li Jue"
      ],
      correctAnswer: "Xu Rong",
      explanation: "At the Battle of Xingyang in 190 CE, Cao Cao's pursuing force was ambushed and decisively defeated by Xu Rong, one of Dong Zhuo's most capable generals. This was a severe early-career setback for Cao Cao, who barely escaped with his life thanks to the actions of his cousin, Cao Hong.\n\nLu Bu: While Dong Zhuo's most famous warrior, historical records do not place him at the engagement at Xingyang.\nHua Xiong: A figure greatly embellished in the Romance of the Three Kingdoms novel, where he is a mighty general slain by Guan Yu. Historically, Hua Xiong was a subordinate officer under Dong Zhuo who was defeated and killed by Sun Jian's army, not Cao Cao's.\nLi Jue: A senior commander under Dong Zhuo, Li Jue was a key figure in Dong Zhuo's army but is not recorded as being present at Xingyang. He would later rise to prominence by seizing control of the capital Chang'an after Dong Zhuo's assassination."
    },
    {
      id: 5,
      text: "Which emperor had the shortest reign of any of the Three Kingdoms?",
      answers: [
        "Cao Pi",
        "Cao Mao",
        "Sun Liang",
        "Liu Bei"
      ],
      correctAnswer: "Liu Bei",
      explanation: "Liu Bei, the founding emperor of Shu Han, had the shortest imperial reign of the entire Three Kingdoms period. He declared himself emperor in 221 CE and ruled for only about two years before his death in 223 CE, following his devastating defeat at the hands of Wu at the Battle of Yiling.\n\nThe other emperors listed also had notably short reigns:\n\n• Cao Pi: The first emperor of Cao Wei, he reigned from 220 CE until his death from illness in 226 CE, for a total of about six years.\n• Cao Mao: The fourth emperor of Cao Wei, he also reigned for about six years, from 254 CE to 260 CE, before he was killed during a failed coup against the regent Sima Zhao.\n• Sun Liang: The second emperor of Eastern Wu, he had the shortest reign of any Wu monarch. He ruled from 252 CE to 258 CE (about six years) before being deposed by the regent Sun Chen."
    },
    {
      id: 6,
      text: "In Romance of the Three Kingdoms, Yan Liang and Wen Chou are famously killed by Guan Yu. However, who historically killed each of these Generals?",
      answers: [
        "Guan Yu killed both Yan Liang and Wen Chou.",
        "Guan Yu killed Yan Liang; Wen Chou was killed by Cao Cao's cavalry.",
        "Cao Cao's Cavalry killed Yan Liang; Zhang Liao killed Wen Chou.",
        "Both were killed by Cao Cao's cavalry."
      ],
      correctAnswer: "Guan Yu killed Yan Liang; Wen Chou was killed by Cao Cao's cavalry.",
      explanation: "The historical account of these events, found in Chen Shou's Records of the Three Kingdoms, confirms Guan Yu's feat against Yan Liang but attributes Wen Chou's death to a cavalry charge during a cleverly orchestrated rout, not a duel.\n\nYan Liang's Death (Battle of Boma, 200 CE): The historical record is clear and dramatic. While temporarily serving Cao Cao, Guan Yu saw Yan Liang's command canopy, charged directly through Yuan Shao's army, killed Yan Liang in the midst of his soldiers, and returned with his severed head.\n\nWen Chou's Death (Battle of Yan Ford, 200 CE): The novel creates a duel where Guan Yu slays Wen Chou. Historically, Cao Cao, following a plan from his advisor Xun You, used a baggage train as bait to disorder Wen Chou's advancing army. When Wen Chou's troops broke formation to plunder the supplies, Cao Cao's elite cavalry unit charged into the chaotic mass. The Sanguozhi records that Wen Chou was killed during this rout, with no single individual credited for the kill and no mention of Guan Yu's involvement in this specific engagement."
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
                6 Questions Available
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
            <div style={{
              lineHeight: '1.7',
              textAlign: 'left',
            }}>
              {currentQuestion.explanation.split(/\n\n/).map((para, i) => {
                // Bullet section
                if (para.trim().startsWith('•')) {
                  return (
                    <div key={i} style={{ margin: '18px 0 18px 0' }}>
                      {para.split(/\n/).map((line, j) =>
                        line.trim().startsWith('•') ? (
                          <div key={j} style={{ marginLeft: 18 }}>
                            {line.trim()}
                          </div>
                        ) : null
                      )}
                    </div>
                  );
                } else {
                  // Regular paragraph
                  return (
                    <div key={i} style={{ margin: '18px 0' }}>{para}</div>
                  );
                }
              })}
            </div>
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