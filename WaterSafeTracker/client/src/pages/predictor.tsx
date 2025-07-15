import { useState } from 'react';
import { WaterTestForm } from '@/components/predictor/water-test-form';
import { PredictionResults } from '@/components/predictor/prediction-results';
import { WaterTestInput, WaterTestResult } from '@/types/water-quality';
import { waterQualityAI } from '@/lib/water-quality-ai';

export default function Predictor() {
  const [result, setResult] = useState<WaterTestResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: WaterTestInput) => {
    setIsLoading(true);
    
    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const prediction = waterQualityAI.predict(data);
    setResult(prediction);
    setIsLoading(false);
    
    // Scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="space-y-6">
      <WaterTestForm onSubmit={handleSubmit} isLoading={isLoading} />
      
      {result && (
        <div id="results">
          <PredictionResults result={result} />
        </div>
      )}
    </div>
  );
}
