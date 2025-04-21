import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { shuFasticles } from './shuFasticles';

const ShuFasticleList: React.FC = () => {
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
            <p>The Book of Shu contains records of emperors, nobles, and officials during the Shu Han dynasty.</p>
            <p>Select a fasticle to view detailed historical records.</p>
            
            <div style={{ 
              marginTop: 16, 
              background: 'rgba(30, 130, 76, 0.05)', 
              borderRadius: 6, 
              border: '1px solid rgba(30, 130, 76, 0.15)',
              width: '100%'
            }}>
              <h5 style={{ margin: '0', padding: '8px 12px', color: '#1e824c', fontSize: 14, borderBottom: '1px solid rgba(30, 130, 76, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => setExpandedSection(expandedSection === 'overview' ? null : 'overview')}
              >
                About the Shu Kingdom
                <span>{expandedSection === 'overview' ? '▼' : '▶'}</span>
              </h5>
              
              {expandedSection === 'overview' && (
                <div style={{ padding: '8px 12px', fontSize: 13, overflow: 'hidden', wordBreak: 'break-word' }}>
                  <p style={{ margin: '0 0 8px 0' }}>
                    The Shu Han kingdom (221-263 CE) was founded by Liu Bei, who claimed legitimacy as a descendant of the Han imperial family. Based in present-day Sichuan, Shu was protected by natural mountain barriers but had limited population and resources.
                  </p>
                  <p style={{ margin: '0 0 0 0' }}>
                    Key figures include the "Former Lord" Liu Bei, the "Later Lord" Liu Shan, the brilliant strategist Zhuge Liang, and the famous generals of the "Five Tiger Generals": Guan Yu, Zhang Fei, Zhao Yun, Ma Chao, and Huang Zhong.
                  </p>
                </div>
              )}
              
              <div style={{ borderTop: '1px solid rgba(30, 130, 76, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#1e824c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('liu-bei-origins')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Liu Bei's Early Years
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'liu-bei-origins' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'liu-bei-origins' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Liu Bei (161-223 CE) claimed descent from the Han imperial family through Liu Zhen, a son of Emperor Jing. Though he grew up in poverty weaving straw mats and shoes with his mother, he received education and was known for his ambition. When the Yellow Turban Rebellion erupted in 184 CE, Liu Bei gathered volunteers to join the imperial forces.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      During this campaign, he formed his legendary brotherhood with Guan Yu and Zhang Fei, swearing an oath in the Peach Garden to live and die together. His early military service earned him minor positions, but his fortunes remained unsteady as the Han dynasty continued to decline under the influence of powerful warlords.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(30, 130, 76, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#1e824c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('governor-of-xu')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Governor of Xuzhou
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'governor-of-xu' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'governor-of-xu' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Liu Bei briefly served as the Governor of Xuzhou (present-day northern Jiangsu) around 194-195 CE after the death of Tao Qian, who had recommended Bei as his successor. However, this period was tumultuous, marked by conflicts with Cao Cao and the warlord Lü Bu, who seized Xuzhou from Liu Bei in 196 CE.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      After Lü Bu's defeat by Cao Cao in 198 CE, Liu Bei fled to Yuan Shao in the north and later sought refuge with Liu Biao, the Governor of Jing Province (present-day Hubei and Hunan). During this period, Bei's forces remained small, but he began gathering talented advisors, most notably Zhuge Liang, who joined him in 207 CE.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(30, 130, 76, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#1e824c', 
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
                      The pivotal Battle of Red Cliffs in 208 CE marked a turning point for Liu Bei. When Cao Cao invaded Jing Province following Liu Biao's death, Bei fled south with a massive refugee population. Forming an alliance with Sun Quan, the ruler of the southeast, their combined forces dealt a crushing defeat to Cao Cao's numerically superior army.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Following this victory, Liu Bei gained control of southern Jing Province through the efforts of his strategist Zhuge Liang's diplomacy with Sun Quan's representatives. This gave Bei his first substantial territorial base and the resources to build a stronger army.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(30, 130, 76, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#1e824c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('yi-province')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Conquest of Yi Province
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'yi-province' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'yi-province' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Between 211-214 CE, Liu Bei undertook his most successful military campaign, the conquest of Yi Province (present-day Sichuan). Initial operations against the Governor Liu Zhang were led by Bei's generals Zhang Fei and Zhao Yun from the north, while Bei himself approached from the east, having been invited by Liu Zhang as an ally against a rival warlord.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Once inside Yi Province, Bei gradually consolidated power, eventually forcing Liu Zhang to surrender. The acquisition of this fertile, well-protected region provided the foundation for the Shu state. Bei established his capital at Chengdu and implemented reforms under the guidance of Zhuge Liang and other advisors to strengthen the region's economy and military.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(30, 130, 76, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#1e824c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('jingzhou-loss')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Loss of Jing Province
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'jingzhou-loss' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'jingzhou-loss' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      In 219 CE, while Liu Bei was consolidating his position in the west, his general Guan Yu was defeated and executed during a campaign against Wei forces at Fan Castle in Jing Province. The eastern Wu kingdom, feeling threatened by Guan Yu's expansion, had secretly allied with Wei and captured most of Shu's territory in Jing Province.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      This devastating loss not only deprived Shu of valuable territory but also one of its most capable generals. The defeat transformed the previously friendly Shu-Wu relationship into one of bitter enmity, as Liu Bei considered the Wu attack a betrayal of their earlier alliance.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(30, 130, 76, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#1e824c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('han-emperor')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Establishment of Shu Han
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'han-emperor' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'han-emperor' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      In 221 CE, after Cao Pi forced the abdication of Emperor Xian and established Wei, Liu Bei declared himself the legitimate Emperor of Han, establishing what historians call the "Shu Han" state. This move was presented as continuing the Han dynasty rather than founding a new one, emphasizing Bei's claimed imperial lineage.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Liu Bei's reign as emperor was brief and marked by his disastrous campaign against Eastern Wu to avenge Guan Yu. His forces suffered a crushing defeat at the Battle of Xiaoting (Yiling) in 222 CE. Following this defeat, Bei retreated to Baidicheng where he fell ill and died in 223 CE, leaving the throne to his son Liu Shan with Zhuge Liang as regent.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(30, 130, 76, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#1e824c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('zhuge-liang')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Zhuge Liang's Regency
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'zhuge-liang' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'zhuge-liang' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Following Liu Bei's death, Zhuge Liang served as regent for the young and inexperienced Emperor Liu Shan. Liang implemented significant domestic reforms, improving agriculture and education while maintaining stable governance. He also pacified the indigenous tribes of the south, securing Shu's southwestern frontier.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Between 228-234 CE, Zhuge Liang launched a series of five Northern Expeditions against Wei. Despite brilliant strategic planning, these campaigns achieved limited success due to Shu's resource constraints and logistical challenges. During the final expedition, Liang fell ill and died at the military camp of Wuzhang Plains in 234 CE, dealing a severe blow to Shu's long-term prospects.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(30, 130, 76, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#1e824c', 
                    fontSize: 13,
                    fontWeight: 600, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleSection('later-campaigns')}
                >
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Jiang Wei's Campaigns
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'later-campaigns' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'later-campaigns' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      After Zhuge Liang's death, Jiang Wei, his protégé, continued the northern campaign policy from 247-262 CE. Despite Jiang's tactical ability, these expeditions placed an unsustainable burden on Shu's limited resources. Their repeated failure further weakened the state while strengthening the opposition.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Meanwhile, Emperor Liu Shan came under the influence of corrupt officials like eunuch Huang Hao, leading to a decline in governance. The combination of ineffective leadership, resource depletion from continuous warfare, and increasing corruption created critical vulnerabilities.
                    </p>
                  </div>
                )}
              </div>
              
              <div style={{ borderTop: '1px solid rgba(30, 130, 76, 0.15)' }}>
                <h6 
                  style={{ 
                    margin: '0', 
                    padding: '8px 12px', 
                    color: '#1e824c', 
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
                    Fall of Shu
                  </span>
                  <span style={{ flexShrink: 0 }}>{expandedSection === 'fall' ? '▼' : '▶'}</span>
                </h6>
                {expandedSection === 'fall' && (
                  <div style={{ padding: '0 12px 8px 12px', fontSize: 12, overflow: 'hidden', wordBreak: 'break-word' }}>
                    <p style={{ margin: '0 0 6px 0' }}>
                      In 263 CE, Wei launched a comprehensive campaign against Shu under the leadership of Deng Ai and Zhong Hui. Despite Jiang Wei's efforts at defense, Deng Ai led a surprise attack through difficult mountain terrain to approach the Shu capital of Chengdu directly.
                    </p>
                    <p style={{ margin: '0 0 6px 0' }}>
                      Facing this dire situation, Emperor Liu Shan surrendered rather than continuing resistance. The Wei general Zhong Hui initially planned to rebel and establish his own state in the former Shu territory but was killed in a mutiny. Liu Shan was relocated to Luoyang and given an honorary title, reportedly commenting that he found his new life "simple" compared to ruling—a phrase that became notorious in Chinese history as "the simple life of Liu Shan."
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
