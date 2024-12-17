import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LoadingScreen } from './components/ui/LoadingScreen';
import App from './App.tsx';
import './index.css';

// Create a root element
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

// Show loading screen first
root.render(
  <StrictMode>
    <LoadingScreen />
  </StrictMode>
);

// After a brief delay, render the full app
setTimeout(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}, 1500); // Reduced from 3000ms to 1500ms for initial load