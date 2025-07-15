import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { EducationCard } from '@/components/learn/education-card';
import { educationContent } from '@/data/education-content';

export default function Learn() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Water Safety Education</CardTitle>
          <CardDescription>
            Learn essential water safety practices to protect your family's health.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Education Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {educationContent.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>

      {/* Emergency Guidelines */}
      <Alert className="border-red-200 bg-red-50">
        <AlertTriangle className="h-6 w-6 text-red-600" />
        <div className="ml-3">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Water Safety</h3>
          <AlertDescription>
            <p className="text-red-700 mb-4">
              If you suspect water contamination or experience symptoms after drinking water:
            </p>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Stop using the water immediately</li>
              <li>• Seek medical attention if experiencing diarrhea, vomiting, or fever</li>
              <li>• Contact local health authorities</li>
              <li>• Use bottled or boiled water until safety is confirmed</li>
            </ul>
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
}
