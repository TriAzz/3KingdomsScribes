import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { wuFasticles } from './wuFasticles';

const WuFasticleList: React.FC = () => {
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
            <p>The Book of Wu contains records of emperors, nobles, and officials during the Eastern Wu dynasty.</p>
            <p>Select a fasticle to view detailed historical records.</p>
            
            <div style={{ 
              marginTop: 16, 
              background: 'rgba(201, 60, 60, 0.05)', 
              borderRadius: 6, 
              border: '1px solid rgba(201, 60, 60, 0.15)',
              width: '100%'
            }}>
              <h5 style={{ margin: '0', padding: '8px 12px', color: '#c93c3c', fontSize: 14, borderBottom: '1px solid rgba(201, 60, 60, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => setExpandedSection(expandedSection === 'overview' ? null : 'overview')}
              >
                About the Wu Kingdom
                <span>{expandedSection === 'overview' ? '▼' : '▶'}</span>
              </h5>
              
              {expandedSection === 'overview' && (
                <div style={{ padding: '8px 12px', fontSize: 13, overflow: 'hidden', wordBreak: 'break-word' }}>
                  <p style={{ margin: '0 0 8px 0' }}>
                    The Eastern Wu kingdom (222-280 CE) was established by Sun Quan, continuing the legacy of his father Sun Jian and elder brother Sun Ce. Controlling the fertile lands south of the Yangtze River, Wu possessed strong naval power and economic prosperity from commerce.
                  </p>
                  <p style={{ margin: '0 0 0 0' }}>
                    Key figures include the founder Sun Quan, his predecessor Sun Ce (known as "The Little Conqueror"), the admiral Zhou Yu who helped defeat Cao Cao at Red Cliffs, and the brilliant strategist Lu Xun who maintained Wu's independence through shrewd diplomacy and military prowess.
                  </p>
                </div>
              )}
              
              <div style={{ borderTop: '1px solid rgba(201, 60, 60, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#c93c3c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('sun-jian')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Sun Jian and the Fall of Han
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'sun-jian' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'sun-jian' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      The Sun family's rise began with Sun Jian (155-191 CE), a military commander from Fuchun who gained prominence during the Yellow Turban Rebellion. When the warlord Dong Zhuo seized control of the Han court in 189 CE, Sun Jian joined the coalition against him and achieved significant victories, earning the title "Tiger of Jiangdong" for his ferocity in battle.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      After the coalition's dissolution, Sun Jian entered the service of the warlord Yuan Shu. In 191 CE, during a campaign against Liu Biao, the Governor of Jing Province, Sun Jian was killed in an ambush near Xiangyang. His legacy passed to his 18-year-old son, Sun Ce, who inherited his father's troops.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(201, 60, 60, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#c93c3c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('sun-ce')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Sun Ce's Conquests
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'sun-ce' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'sun-ce' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Sun Ce (175-200 CE), known as the "Little Conqueror," exchanged his inherited troops to Yuan Shu for a commission to conquer the fertile lands of Jiangdong (areas south of the lower Yangtze). From 194-199 CE, he carried out a series of brilliant military campaigns that established control over the regions of Wu, Kuaiji, and Danyang (modern Zhejiang and southern Jiangsu).
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Sun Ce's success came from his personal charisma, military acumen, and ability to recruit talented individuals like Zhou Yu, Zhang Zhao, and Lü Fan. He broke his allegiance with Yuan Shu when the latter declared himself emperor, instead forming a nominal alliance with Cao Cao in the north. At the height of his power, Ce was assassinated in 200 CE, reportedly by retainers of a minor warlord, though some accounts suggest religious cultists were responsible.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(201, 60, 60, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#c93c3c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('sun-quan')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Sun Quan's Early Rule
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'sun-quan' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'sun-quan' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Sun Quan (182-252 CE) inherited his brother's territories at the age of 18. Initially, many doubted whether the young ruler could maintain control, but Quan quickly proved his abilities. With the support of experienced administrators like Zhang Zhao and military commanders like Zhou Yu and Cheng Pu, he effectively consolidated power and continued to develop the region.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Under Quan's leadership, the Jiangdong region experienced significant economic development. He encouraged land reclamation, agricultural innovation, and shipbuilding. His administration also promoted education and attracted scholars fleeing from the chaos in the north, establishing a foundation for Wu's cultural and technological advancements.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(201, 60, 60, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#c93c3c', 
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
                      The pivotal Battle of Red Cliffs in 208 CE established Sun Quan as a major power. When Cao Cao led a massive army south after unifying northern China, many of Quan's advisors urged surrender. However, persuaded by Lu Su and the fiery speech of Zhou Yu—and bolstered by the arrival of Liu Bei's forces—Sun Quan decided to resist.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      The allied forces of Sun Quan and Liu Bei, led by Zhou Yu and Huang Gai, employed a brilliant fire attack strategy that destroyed Cao Cao's navy. This decisive victory prevented the unification of China under Cao Cao and secured the independence of the southern territories, setting the stage for the Three Kingdoms period. Following the battle, Sun Quan consolidated control over present-day Hunan and eastern Hubei.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(201, 60, 60, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#c93c3c', 
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
                    The Jing Province Conflict
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'jingzhou' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'jingzhou' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      The jurisdiction over Jing Province became a major point of contention between Sun Quan and Liu Bei. Initially, Sun had allowed Liu Bei to occupy parts of the province, with the understanding that these territories would eventually be returned to Wu. However, as Liu Bei consolidated power, he showed no intention of relinquishing these lands.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      In 219 CE, while Liu Bei's general Guan Yu was engaged in a campaign against Wei forces at Fan Castle, Sun Quan's commander Lü Meng executed a daring plan. Disguising his troops as merchants, he launched a surprise attack and captured Guan Yu, who was subsequently executed. This masterful campaign recovered most of Jing Province for Wu but permanently damaged relations with Shu.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(201, 60, 60, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#c93c3c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('yiling')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Battle of Yiling
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'yiling' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'yiling' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      In 222 CE, Liu Bei personally led a massive campaign against Sun Quan to avenge Guan Yu's death. Despite Sun Quan's peace overtures, Bei refused to negotiate. The Wu forces, led by the brilliant strategist Lu Xun, initially retreated to draw the Shu army deep into unfamiliar territory during the hot summer.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      After letting Liu Bei's troops become overextended and exhausted, Lu Xun launched coordinated fire attacks that inflicted devastating losses on the Shu forces. Liu Bei barely escaped with his life and died shortly after from illness. This decisive victory secured Wu's western frontier and demonstrated Lu Xun's strategic brilliance, elevating him to the highest military position in Wu.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(201, 60, 60, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#c93c3c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('dynasty')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Establishment of Eastern Wu
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'dynasty' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'dynasty' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      In 229 CE, Sun Quan formally declared himself Emperor of Wu, establishing the Eastern Wu dynasty. This came after both Cao Pi and Liu Bei had already claimed imperial titles. Under Sun Quan's leadership, Wu flourished economically through maritime trade with countries as far as Southeast Asia and even the Roman Empire (via intermediaries).
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Wu's culture blended northern Han traditions with southern indigenous customs, creating a distinctive regional identity. The state also made significant advancements in naval technology, navigation, and medicine. Buddhism gained considerable influence during this period, with many temples established throughout the region.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(201, 60, 60, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#c93c3c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('succession')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Succession Crisis
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'succession' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'succession' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Sun Quan's later years were troubled by succession disputes. His eldest son and initial heir, Sun Deng, died prematurely in 241 CE. Quan then designated his third son, Sun He, as crown prince, but this was contested by his fourth son, Sun Ba. The rivalry between the two princes created factions within the court that undermined administrative efficiency.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      In 250 CE, Sun Quan finally resolved the crisis by forcing Sun Ba to commit suicide and deposing Sun He. He named his seventh son, Sun Liang, as the new crown prince. When Sun Quan died in 252 CE after a 52-year reign, the 10-year-old Sun Liang ascended the throne with Zhuge Ke (son of Zhuge Jin and nephew of Shu's Zhuge Liang) serving as regent.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(201, 60, 60, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#c93c3c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('regents')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    The Regency Period
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'regents' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'regents' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      The regency period in Wu was marked by political instability and court intrigues. The initial regent, Zhuge Ke, was assassinated in 253 CE due to his arrogance and failed military campaigns. Sun Jun then seized power, deposed the young emperor Sun Liang in 258 CE, and installed Sun Xiu (the sixth son of Sun Quan) as emperor.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Following Sun Jun's death, his cousin Sun Chen controlled the government. When Emperor Sun Xiu died in 264 CE, Sun Chen placed the 17-year-old Sun Hao, grandson of Sun Quan, on the throne. Initially, Sun Hao showed promise, removing the corrupt Sun Chen. However, he soon became a tyrannical ruler, executing officials on slight pretexts and imposing heavy taxation, greatly weakening the state.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(201, 60, 60, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#c93c3c', 
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
                    Fall of Eastern Wu
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'fall' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'fall' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      By the 270s CE, Wu faced a rejuvenated Jin dynasty (which had replaced Wei) to the north. The Jin Emperor Sima Yan launched a massive invasion of Wu in 279 CE with forces approaching from multiple directions. Wu's defense was hampered by low morale, inadequate preparation, and Sun Hao's poor leadership.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Despite some initial Wu resistance, the Jin forces quickly overcame key strategic points. In 280 CE, the Jin general Wang Jun led a fleet down the Yangtze and captured the Wu capital of Jianye (modern Nanjing). Sun Hao surrendered, ending the Wu dynasty. Unlike the harsh treatment often afforded to defeated rulers, Sima Yan treated Sun Hao with respect, granting him a noble title. The fall of Wu completed the reunification of China under the Jin dynasty, ending the Three Kingdoms period.
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
