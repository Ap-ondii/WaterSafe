import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { WaterTestResult } from '@/types/water-quality';
import { cn } from '@/lib/utils';

interface PredictionResultsProps {
  result: WaterTestResult;
}

export function PredictionResults({ result }: PredictionResultsProps) {
  const getRiskIcon = () => {
    switch (result.riskLevel) {
      case 'safe':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'caution':
        return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
      case 'unsafe':
        return <XCircle className="w-6 h-6 text-red-600" />;
      default:
        return <Info className="w-6 h-6 text-gray-600" />;
    }
  };

  const getRiskColor = () => {
    switch (result.riskLevel) {
      case 'safe':
        return 'bg-green-50 border-green-200';
      case 'caution':
        return 'bg-yellow-50 border-yellow-200';
      case 'unsafe':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getRiskBadgeColor = () => {
    switch (result.riskLevel) {
      case 'safe':
        return 'bg-green-100 text-green-800';
      case 'caution':
        return 'bg-yellow-100 text-yellow-800';
      case 'unsafe':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Water Quality Assessment
          <Badge className={getRiskBadgeColor()}>
            Risk Score: {result.riskScore}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Result */}
        <Alert className={cn('border', getRiskColor())}>
          <div className="flex items-start gap-3">
            {getRiskIcon()}
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-1">{result.title}</h4>
              <p className="text-sm">{result.description}</p>
            </div>
          </div>
        </Alert>

        {/* Issues Detected */}
        {result.issues.length > 0 && (
          <div>
            <h4 className="font-semibold mb-3">Issues Detected:</h4>
            <ul className="space-y-2">
              {result.issues.map((issue, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recommendations */}
        <div>
          <h4 className="font-semibold mb-3">Recommended Actions:</h4>
          <ul className="space-y-2">
            {result.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-blue-500 mt-1">•</span>
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Disclaimer:</strong> This is an advisory tool only. For definitive water safety assessment, 
            consult professional testing services. If you experience symptoms after drinking water, seek medical attention immediately.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
