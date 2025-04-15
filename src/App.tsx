import './App.css'

import logo from './assets/logo.png';
import Breadcrumbs from './Breadcrumbs';

function App({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className="site-header">
        <img src={logo} alt="Three Kingdoms Logo" className="site-logo" />
        <Breadcrumbs />
      </header>
      <div className="site-content">
        {children}
      </div>
    </>
  );
}

export default App
