import { useState } from 'react';
import { Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/lib/i18n';

export function Header() {
  const { language, setLanguage } = useI18n();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">WaterSafe</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={language === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('en')}
              className="text-sm"
            >
              EN
            </Button>
            <span className="text-gray-400">|</span>
            <Button
              variant={language === 'sw' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('sw')}
              className="text-sm"
            >
              SW
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
