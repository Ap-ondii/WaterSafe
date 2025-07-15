import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BookOpen, MapPin } from 'lucide-react';
import { useLocation } from 'wouter';
import { useI18n } from '@/lib/i18n';

export default function Home() {
  const [, setLocation] = useLocation();
  const { t } = useI18n();

  const handleTestWater = () => {
    setLocation('/predictor');
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="gradient-hero rounded-lg shadow-lg p-6 text-white">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('hero.title')}
          </h2>
          <p className="text-lg mb-6 opacity-90">
            {t('hero.subtitle')}
          </p>
          <Button 
            onClick={handleTestWater}
            className="bg-white text-primary hover:bg-gray-100 transition-colors"
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-lg">{t('features.ai.title')}</CardTitle>
            <CardDescription>{t('features.ai.description')}</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-secondary" />
            </div>
            <CardTitle className="text-lg">{t('features.education.title')}</CardTitle>
            <CardDescription>{t('features.education.description')}</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-yellow-500 bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-yellow-600" />
            </div>
            <CardTitle className="text-lg">{t('features.services.title')}</CardTitle>
            <CardDescription>{t('features.services.description')}</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Impact Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-gray-600">Water Tests Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">850+</div>
              <div className="text-sm text-gray-600">Families Reached</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">15</div>
              <div className="text-sm text-gray-600">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-700">95%</div>
              <div className="text-sm text-gray-600">User Satisfaction</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-lg">Ready to Test Your Water?</CardTitle>
          <CardDescription>
            Join thousands of families protecting their health with WaterSafe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleTestWater} className="bg-primary hover:bg-blue-700">
            Start Water Test
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
