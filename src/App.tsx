import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { ErrorBoundary } from './components/error/ErrorBoundary';
import { Header } from './components/navigation/Header';
import { Footer } from './components/Footer';
import { Suspense } from 'react';
import { LoadingScreen } from './components/ui/LoadingScreen';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Header />
          <main className="pt-16">
            <Suspense fallback={<LoadingScreen />}>
              <AppRoutes />
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;