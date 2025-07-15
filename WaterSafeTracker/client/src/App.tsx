import { useState } from 'react';
import { Switch, Route, useLocation } from 'wouter';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { I18nContext, getTranslation } from '@/lib/i18n';
import { Header } from '@/components/layout/header';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import Home from '@/pages/home';
import Predictor from '@/pages/predictor';
import Learn from '@/pages/learn';
import Resources from '@/pages/resources';
import NotFound from '@/pages/not-found';

function Router() {
  const [location, setLocation] = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation currentPath={location} onNavigate={setLocation} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/predictor" component={Predictor} />
          <Route path="/learn" component={Learn} />
          <Route path="/resources" component={Resources} />
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState('en');
  
  const t = (key: string) => getTranslation(key, language);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nContext.Provider value={{ language, setLanguage, t }}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </I18nContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
