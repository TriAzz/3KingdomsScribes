import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { weiFasticles } from './weiFasticles';

const WeiFasticleList: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

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
        width: 500, 
        minWidth: 500,
        maxWidth: 500, 
        marginRight: 35, 
        background: '#f5f7fa', 
        borderRadius: 8, 
        padding: 16, 
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)', 
        position: 'sticky', 
        top: 100, 
        height: 'fit-content',
        maxHeight: '80vh',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}>
        <div style={{ marginBottom: 16 }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 15, color: '#444' }}>Book Information</h4>
          <div style={{ fontSize: 14, color: '#666', lineHeight: 1.5 }}>
            <p>The Book of Wei contains records of emperors, nobles, and officials during the Cao Wei dynasty.</p>
            <p>Select a fasticle to view detailed historical records.</p>
            
            <div style={{ 
              marginTop: 16, 
              background: 'rgba(34, 85, 170, 0.05)', 
              borderRadius: 6, 
              border: '1px solid rgba(34, 85, 170, 0.15)',
              width: '100%'
            }}>
              <h5 style={{ margin: '0', padding: '8px 12px', color: '#2255aa', fontSize: 14, borderBottom: '1px solid rgba(34, 85, 170, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => setExpandedSection(expandedSection === 'overview' ? null : 'overview')}
              >
                About the Wei Kingdom
                <span>{expandedSection === 'overview' ? '▼' : '▶'}</span>
              </h5>
              
              {expandedSection === 'overview' && (
                <div style={{ padding: '8px 12px', fontSize: 13, overflow: 'hidden', wordBreak: 'break-word' }}>
                  <p style={{ margin: '0 0 8px 0' }}>
                    The Wei kingdom (220-266 CE) was founded by Cao Cao and formally established by his son Cao Pi, who forced the last Han emperor to abdicate. Wei controlled northern China and was the strongest of the Three Kingdoms militarily.
                  </p>
                  <p style={{ margin: '0 0 0 0' }}>
                    Key figures include Emperor Wu (Cao Cao), Emperor Wen (Cao Pi), Emperor Ming (Cao Rui), and notable generals and strategists like Sima Yi, Xiahou Dun, Zhang Liao, and Guo Jia.
                  </p>
                </div>
              )}
              
              <div style={{ borderTop: '1px solid rgba(34, 85, 170, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#2255aa', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('fall-of-han')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Fall of the Han Dynasty
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'fall-of-han' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'fall-of-han' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      The decline of the Han dynasty began with the Yellow Turban Rebellion in 184 CE. Cao Cao, then a minor official, joined the imperial forces to suppress the rebellion, showing early military talent. When the warlord Dong Zhuo seized control of the imperial court and took the young Emperor Xian hostage in 189 CE, Cao joined the coalition against Dong Zhuo led by Yuan Shao.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      While the coalition ultimately failed, Cao Cao managed to rescue Emperor Xian in 196 CE, establishing his base at Xu (present-day Xuchang, Henan). By positioning himself as the protector of the Han emperor, Cao gained legitimacy for his growing power.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(34, 85, 170, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#2255aa', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('central-plains')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Rise in the Central Plains
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'central-plains' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'central-plains' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Cao Cao steadily expanded his territory in the Central Plains (northern China) through a series of campaigns. He defeated the warlord Lü Bu at Xiapi in 198 CE, eliminating a significant rival. With control of the fertile Yellow River basin, Cao established a strong agricultural and economic base.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      His decisive victory at the Battle of Guandu in 200 CE against Yuan Shao, who commanded a much larger army, established Cao as the dominant power in northern China. Following this triumph, he systematically conquered the territories of Yuan's sons and other northern warlords.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(34, 85, 170, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#2255aa', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('red-cliffs')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Battle of Red Cliffs
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'red-cliffs' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'red-cliffs' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      In 208 CE, Cao Cao led a massive campaign southward with the aim of unifying China. However, he suffered a catastrophic defeat at the Battle of Red Cliffs (Chibi) against the allied forces of Sun Quan and Liu Bei. The use of fire ships by the alliance devastated Cao's navy, forcing him to retreat north.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      This defeat effectively created the Three Kingdoms division, as it prevented Cao from conquering the south. Despite this setback, Cao maintained control of the most populous and economically productive regions of China and continued to strengthen his position in the north.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(34, 85, 170, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#2255aa', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('cao-wei')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Establishment of Wei
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'cao-wei' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'cao-wei' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Cao Cao was enfeoffed as the Duke of Wei in 213 CE and later promoted to King of Wei in 216 CE, though he never claimed the imperial title. After his death in 220 CE, his son Cao Pi forced Emperor Xian to abdicate, formally ending the Han dynasty and establishing the Wei dynasty with himself as Emperor Wen.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Though Cao Pi's reign was brief (220-226 CE), he established many of the governmental institutions that would characterize the Wei state. His son Cao Rui (Emperor Ming) continued to strengthen these institutions during his rule (226-239 CE).
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(34, 85, 170, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#2255aa', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('jingzhou')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Battle of Jing Province
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'jingzhou' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'jingzhou' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      In 219 CE, Wei forces under Cao Ren faced a significant threat when Guan Yu of Shu besieged Fan Castle (present-day Xiangyang, Hubei) in Jing Province. The situation was dire until Xu Huang arrived with reinforcements, breaking the siege and forcing Guan Yu to retreat.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      This battle was pivotal as it led to Wei and Wu's cooperation against Shu. While Wu forces under Lü Meng captured most of Jing Province and executed Guan Yu, Wei retained control of important strategic positions along the Han River, strengthening their southern border.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(34, 85, 170, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#2255aa', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('sima')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Rise of the Sima Clan
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'sima' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'sima' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      After Emperor Ming's death, his young son Cao Fang ascended the throne with Cao Shuang and Sima Yi serving as regents. In 249 CE, Sima Yi staged a coup known as the "Incident at the Gaoping Tombs," eliminating the Cao faction led by Cao Shuang and securing control of the government.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Following Sima Yi's death, his son Sima Shi continued to consolidate power, deposing Cao Fang in favor of Cao Mao in 254 CE. After Sima Shi's death, his brother Sima Zhao maintained the family's dominance. When Cao Mao attempted to retake power in 260 CE, he was killed, and Cao Huan was installed as the last Wei emperor.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(34, 85, 170, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#2255aa', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('fall')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Fall of Wei
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'fall' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'fall' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      By the 260s, the Sima family held all real power in Wei. After Sima Zhao's death in 265 CE, his son Sima Yan forced Emperor Cao Huan to abdicate in 266 CE, establishing the Jin dynasty and formally ending the Wei state.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Despite its relatively brief existence, Wei laid important foundations for the eventual reunification of China under the Jin dynasty. Its governmental systems, military organization, and cultural developments had lasting impacts on Chinese history.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="scroll-container" style={{ flex: 1, maxWidth: 'calc(100% - 330px)' }}>
        <h2>Book of Wei - Fasticles</h2>
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
            {weiFasticles.map(fasticle => (
              <tr key={fasticle.id}>
                <td>{fasticle.id}</td>
                <td>
                  <Link to={`/wei/${fasticle.id}`} className="fasticle-link">
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

export default WeiFasticleList;
