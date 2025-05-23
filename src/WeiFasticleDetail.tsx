import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { weiFasticles } from './weiFasticles';
import { weiFasticle1 } from './Records/WeiFasticle1';
import { weiFasticle7 } from './Records/WeiFasticle7';
import { weiFasticle17 } from './Records/WeiFasticle17';

const WeiFasticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fasticle = weiFasticles.find(f => String(f.id) === id);
  const [showDetails, setShowDetails] = useState(true);

  if (!fasticle) {
    return <div className="scroll-container"><h2>Not Found</h2></div>;
  }

  // Get fasticle text and headings based on ID
  const getFasticleData = () => {
    switch (fasticle.id) {
      case 1:
        return {
          recordLines: weiFasticle1,
          headingNames: [
            "Cao Cao's Youth, The Yellow Turban Rebellion", 
            "The Coalition Against Dong Zhuo", 
            "Cao Cao in the Central Plains, Battles with Lü Bu", 
            "Attempted Assassination of Cao Cao, The Battle of Guandu", 
            "Pacifying the North", 
            "The Battle of Chibi, The Battle of Tong Gate", 
            "Cao Cao: Duke of Wei", 
            "The Battle of Hefei, The Battle of Yangping Gate", 
            "Cao Cao: King of Wei", 
            "Campaign against Guan Yu, Cao Cao's Death", 
            "Additional Details"
          ],
          titleId: 'wei-emperor-wu-title'
        };
      case 7:
        return {
          recordLines: weiFasticle7,
          headingNames: ["Lü Bu", "Zhang Miao", "Chen Gong", "Chen Deng", "Zang Hong", "Author's Evaluation"],
          titleId: 'wei-lubu-title'
        };
      case 17:
        return {
          recordLines: weiFasticle17,
          headingNames: ["Zhang Liao", "Yue Jin", "Yu Jin", "Zhang He", "Xu Huang", "Zhu Ling", "Author's Assessment"],
          titleId: 'wei-generals-title'
        };
      default:
        return { recordLines: [], headingNames: [], titleId: 'wei-fasticle-title' };
    }
  };

  const { recordLines, headingNames, titleId } = getFasticleData();

  // If no content is available yet
  if (!recordLines.length) {
    return (
      <div className="scroll-container">
        <h2>{fasticle.name}</h2>
        <p style={{ fontStyle: 'italic', marginTop: '2em', fontSize: '1.2em' }}>
          The record of {fasticle.mainPeople.join(', ')} will be added at a later time.
        </p>
      </div>
    );
  }

  // Create biography sections for navigation
  const biographySections = recordLines.reduce((acc, line, index) => {
    const trimmedLine = line.trim();
    if (headingNames.includes(trimmedLine)) {
      acc.push({ name: trimmedLine, index });
    }
    return acc;
  }, [] as Array<{name: string, index: number}>);

  // Replace abbreviated names with full names
  function replaceNames(line: string) {
    // Add name replacements as needed
    return line;
  }

  // Scroll to title handler
  const scrollToTitle = () => {
    const el = document.getElementById(titleId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Scroll to section handler
  const scrollToSection = (index: number) => {
    const el = document.getElementById(`biography-section-${index}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Render a line of text with appropriate styling
  const renderLine = (line: string, idx: number) => {
    // Display the first line as a subtitle
    if (idx === 0) {
      return (
        <h3 
          key={idx}
          style={{
            marginTop: '0.5em',
            marginBottom: '1.5em',
            fontSize: '1.3em',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#444',
            borderBottom: 'none'
          }}
        >
          {replaceNames(line)}
        </h3>
      );
    }

    // Check if this line is a biography section header
    const isBiographyHeader = biographySections.some(section => section.index === idx);
    
    // If the whole line is a bracketed detail
    if (line.startsWith('[') && line.endsWith(']')) {
      return showDetails && (
        <div key={idx} style={{color: '#2255aa', background: 'rgba(200,220,255,0.11)', borderLeft: '3px solid #2255aa', padding: '0.5em 1em', margin: '0.7em 0', borderRadius: 6}}>
          <span style={{fontWeight: 500}}></span>{replaceNames(line)}
        </div>
      );
    }
    
    // If this is a biography section header
    if (isBiographyHeader) {
      return (
        <h3 
          key={idx} 
          id={`biography-section-${idx}`} 
          style={{
            margin: '1.5em 0 0.8em 0',
            fontSize: '1.4em',
            fontWeight: 500,
            color: '#2255aa',
            borderBottom: '1px solid #aabbdd',
            paddingBottom: '0.3em'
          }}
        >
          {line}
        </h3>
      );
    }
    
    // If there are bracketed details within the line
    const parts = [];
    let lastIdx = 0;
    const regex = /\[[^\]]+\]/g;
    let match;
    let found = false;
    while ((match = regex.exec(line)) !== null) {
      found = true;
      // Add text before the bracketed part
      if (match.index > lastIdx) {
        parts.push(replaceNames(line.substring(lastIdx, match.index)));
      }
      // Add the bracketed part as additional detail if showDetails is true
      if (showDetails) {
        parts.push(
          <span key={match.index} style={{color: '#2255aa', background: 'rgba(200,220,255,0.11)', borderLeft: '3px solid #2255aa', padding: '0.1em 0.5em', margin: '0 0.2em', borderRadius: 5, fontWeight: 500}}>
            {replaceNames(match[0])}
          </span>
        );
      }
      lastIdx = match.index + match[0].length;
    }
    if (found) {
      // Add any remaining text after the last bracketed part
      if (lastIdx < line.length) {
        parts.push(replaceNames(line.substring(lastIdx)));
      }
      return <div key={idx} style={{margin: '0.6em 0'}}>{parts}</div>;
    }
    // If no bracketed detail, render as normal
    return <div key={idx} style={{margin: '0.6em 0'}}>{replaceNames(line)}</div>;
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', maxWidth: '1400px', margin: '0 0 0 300px', paddingLeft: '40px', paddingRight: '20px' }}>
      {/* Left Navigation Menu */}
      <nav style={{ minWidth: 240, marginRight: 35, background: '#f5f7fa', borderRadius: 8, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', position: 'sticky', top: 100, height: 'fit-content' }}>
        <div style={{ marginBottom: 16 }}>
          <button onClick={scrollToTitle} style={{ background: '#2255aa', color: 'white', border: 'none', borderRadius: 4, padding: '6px 18px', cursor: 'pointer', fontWeight: 500, width: '100%' }}>Go to Title</button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" checked={showDetails} onChange={e => setShowDetails(e.target.checked)} style={{ accentColor: '#2255aa' }} />
            Show Additional Details
          </label>
        </div>
        
        {/* Section navigation */}
        {biographySections.length > 0 && (
          <div style={{ marginTop: 16 }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: 15, color: '#444' }}>Jump to Section:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {biographySections.map((section, idx) => (
                <button 
                  key={idx} 
                  onClick={() => scrollToSection(section.index)} 
                  style={{ 
                    background: 'transparent', 
                    border: '1px solid #aabbdd', 
                    borderRadius: 4, 
                    padding: '4px 8px', 
                    cursor: 'pointer', 
                    textAlign: 'left',
                    color: '#2255aa',
                    transition: 'background 0.2s'
                  }}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Main Content */}
      <div className="scroll-container" style={{ flex: 1, maxWidth: 'calc(100% - 290px)' }}>
        <h2 id={titleId}>{fasticle.name}</h2>
        <div style={{marginTop: '2em', fontSize: '1.08em', lineHeight: 1.7}}>
          {recordLines.map((line, idx) => renderLine(line, idx))}
        </div>
      </div>
    </div>
  );
};

export default WeiFasticleDetail;
