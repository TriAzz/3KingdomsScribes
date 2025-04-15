import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { weiFasticles } from './weiFasticles';
import { shuFasticles } from './shuFasticles';
import { wuFasticles } from './wuFasticles';

const PATH_LABELS: Record<string, string> = {
  '/': 'Home',
  '/wei': 'Book of Wei',
  '/shu': 'Book of Shu',
  '/wu': 'Book of Wu',
};

function getFasticleName(book: string, id: string) {
  if (book === 'wei') {
    const fasticle = weiFasticles.find(f => String(f.id) === id);
    return fasticle ? fasticle.name : id;
  }
  if (book === 'shu') {
    const fasticle = shuFasticles.find(f => String(f.id) === id);
    return fasticle ? fasticle.name : id;
  }
  if (book === 'wu') {
    const fasticle = wuFasticles.find(f => String(f.id) === id);
    return fasticle ? fasticle.name : id;
  }
  return id;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  const crumbs = [
    { to: '/', label: 'Home' },
    ...pathnames.map((part, idx) => {
      const path = '/' + pathnames.slice(0, idx + 1).join('/');
      // Special case for /wei/:id, /shu/:id, /wu/:id
      if ((pathnames[0] === 'wei' || pathnames[0] === 'shu' || pathnames[0] === 'wu') && idx === 1) {
        return { to: path, label: getFasticleName(pathnames[0], part) };
      }
      return { to: path, label: PATH_LABELS[path] || part };
    })
  ];

  return (
    <nav className="breadcrumbs">
      {crumbs.map((crumb, idx) => (
        <span key={crumb.to}>
          {idx > 0 && <span className="breadcrumb-sep">&nbsp;&rarr;&nbsp;</span>}
          <Link to={crumb.to} className="breadcrumb-link">{crumb.label}</Link>
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
