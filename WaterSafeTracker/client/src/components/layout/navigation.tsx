import { useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { useI18n } from '@/lib/i18n';

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Navigation({ currentPath, onNavigate }: NavigationProps) {
  const { t } = useI18n();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/predictor', label: t('nav.predictor') },
    { path: '/learn', label: t('nav.learn') },
    { path: '/resources', label: t('nav.resources') }
  ];

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-0 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={cn(
                "flex-1 py-3 px-4 text-sm font-medium text-gray-700 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap transition-colors",
                currentPath === item.path && "border-primary text-primary bg-primary bg-opacity-5"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
