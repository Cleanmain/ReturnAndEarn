import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { DemoProvider } from './state/DemoContext';
import { App } from './App';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <DemoProvider>
        <App />
      </DemoProvider>
    </HashRouter>
  </StrictMode>,
);
