import React from 'react';
import { useParams } from 'react-router-dom';
import { weiFasticles } from './weiFasticles';
import { weiFasticle1 } from './Records/WeiFasticle1';

const WeiFasticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fasticle = weiFasticles.find(f => String(f.id) === id);

  if (!fasticle) {
    return <div className="scroll-container"><h2>Not Found</h2></div>;
  }

  // Only for Annals of Emperor Wu (id 1)
  if (fasticle.id === 1) {
    // The first 20 lines from Record_detail.txt, with full names and bracketed sections styled
    const recordLines = weiFasticle1

    // Replace abbreviated names with full names (example: 'Lord Cao' -> 'Cao Cao')
    function replaceNames(line: string) {
      let replaced = line;
      // Replace common abbreviated names with full names
      // Add more replacements as needed
      return replaced;
    }

    // State for show/hide additional details
    const [showDetails, setShowDetails] = React.useState(true);

    // Scroll to title handler
    const scrollToTitle = () => {
      const el = document.getElementById('wei-emperor-wu-title');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        {/* Left Navigation Menu */}
        <nav style={{ minWidth: 200, marginRight: 24, background: '#f5f7fa', borderRadius: 8, padding: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', position: 'sticky', top: 100, height: 'fit-content' }}>
          <div style={{ marginBottom: 16 }}>
            <button onClick={scrollToTitle} style={{ background: '#2255aa', color: 'white', border: 'none', borderRadius: 4, padding: '6px 18px', cursor: 'pointer', fontWeight: 500 }}>Go to Title</button>
          </div>
          <div style={{ marginBottom: 8 }}>
            <label style={{ fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" checked={showDetails} onChange={e => setShowDetails(e.target.checked)} style={{ accentColor: '#2255aa' }} />
              Show Additional Details
            </label>
          </div>
        </nav>
        {/* Main Content */}
        <div className="scroll-container" style={{ flex: 1 }}>
          <h2 id="wei-emperor-wu-title">{fasticle.name}</h2>
          <div style={{marginTop: '2em', fontSize: '1.08em', lineHeight: 1.7}}>
            {recordLines.map((line, idx) => {
              // If the whole line is a bracketed detail
              if (line.startsWith('[') && line.endsWith(']')) {
                return showDetails && (
                  <div key={idx} style={{color: '#2255aa', background: 'rgba(200,220,255,0.11)', borderLeft: '3px solid #2255aa', padding: '0.5em 1em', margin: '0.7em 0', borderRadius: 6}}>
                    <span style={{fontWeight: 500}}></span>{replaceNames(line)}
                  </div>
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
            })}
          </div>
        </div>
      </div>
    );
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

export default WeiFasticleDetail;
