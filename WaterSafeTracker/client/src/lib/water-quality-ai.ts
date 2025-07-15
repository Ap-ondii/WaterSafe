import { WaterTestInput, WaterTestResult } from '@/types/water-quality';

export class WaterQualityAI {
  private assessPH(ph: string): { score: number; issues: string[] } {
    const issues: string[] = [];
    let score = 0;
    
    switch (ph) {
      case 'very-acidic':
        score = 30;
        issues.push('Dangerous pH levels detected - extremely acidic water');
        break;
      case 'acidic':
        score = 15;
        issues.push('pH levels outside safe range - acidic water');
        break;
      case 'neutral':
        score = 0;
        break;
      case 'alkaline':
        score = 15;
        issues.push('pH levels outside safe range - alkaline water');
        break;
      case 'very-alkaline':
        score = 30;
        issues.push('Dangerous pH levels detected - extremely alkaline water');
        break;
      default:
        score = 5;
        issues.push('pH level not specified');
    }
    
    return { score, issues };
  }

  private assessTurbidity(turbidity: string): { score: number; issues: string[] } {
    const issues: string[] = [];
    let score = 0;
    
    switch (turbidity) {
      case 'clear':
        score = 0;
        break;
      case 'slightly-cloudy':
        score = 5;
        issues.push('Slight cloudiness detected - may indicate minor contamination');
        break;
      case 'cloudy':
        score = 15;
        issues.push('Moderate turbidity detected - indicates possible contamination');
        break;
      case 'very-cloudy':
        score = 25;
        issues.push('High turbidity indicates significant contamination');
        break;
      default:
        score = 10;
        issues.push('Water clarity not specified');
    }
    
    return { score, issues };
  }

  private assessColor(color: string): { score: number; issues: string[] } {
    const issues: string[] = [];
    let score = 0;
    
    switch (color) {
      case 'colorless':
        score = 0;
        break;
      case 'yellow':
        score = 20;
        issues.push('Yellow/brown coloration may indicate organic contamination or iron presence');
        break;
      case 'green':
        score = 25;
        issues.push('Green coloration indicates possible algae or bacterial contamination');
        break;
      case 'other':
        score = 20;
        issues.push('Abnormal water color detected - requires investigation');
        break;
      default:
        score = 10;
        issues.push('Water color not specified');
    }
    
    return { score, issues };
  }

  private assessSmell(smell: string): { score: number; issues: string[] } {
    const issues: string[] = [];
    let score = 0;
    
    switch (smell) {
      case 'none':
        score = 0;
        break;
      case 'chlorine':
        score = 5;
        issues.push('Chlorine smell detected - may indicate over-treatment');
        break;
      case 'sulfur':
        score = 20;
        issues.push('Sulfur/rotten egg smell indicates bacterial contamination');
        break;
      case 'other':
        score = 20;
        issues.push('Unusual odor detected - indicates potential contamination');
        break;
      default:
        score = 10;
        issues.push('Water smell not specified');
    }
    
    return { score, issues };
  }

  private assessSource(source: string): { score: number; issues: string[] } {
    const issues: string[] = [];
    let score = 0;
    
    switch (source) {
      case 'tap':
        score = 2;
        break;
      case 'well':
        score = 5;
        issues.push('Well water requires regular testing for bacterial contamination');
        break;
      case 'borehole':
        score = 3;
        break;
      case 'spring':
        score = 8;
        issues.push('Natural spring water may contain minerals or bacteria');
        break;
      case 'river':
        score = 15;
        issues.push('River/stream water has high contamination risk');
        break;
      case 'rainwater':
        score = 10;
        issues.push('Rainwater collection may introduce contamination');
        break;
      case 'other':
        score = 12;
        issues.push('Unknown water source increases risk assessment');
        break;
      default:
        score = 15;
        issues.push('Water source not specified');
    }
    
    return { score, issues };
  }

  private generateRecommendations(riskLevel: string, issues: string[]): string[] {
    const recommendations: string[] = [];
    
    if (riskLevel === 'unsafe') {
      recommendations.push('DO NOT DRINK this water without proper treatment');
      recommendations.push('Seek professional water testing immediately');
      recommendations.push('Use bottled water or boil water for at least 3 minutes before consumption');
      recommendations.push('Contact local health authorities if symptoms occur');
    } else if (riskLevel === 'caution') {
      recommendations.push('Consider professional water testing');
      recommendations.push('Boil water for 1-3 minutes before drinking as a precaution');
      recommendations.push('Monitor for any changes in water appearance, smell, or taste');
      recommendations.push('Consider using water purification tablets or filters');
    } else {
      recommendations.push('Water appears safe for consumption');
      recommendations.push('Continue regular monitoring of water quality');
      recommendations.push('Maintain good storage practices');
      recommendations.push('Consider annual professional testing');
    }
    
    // Add specific recommendations based on issues
    if (issues.some(issue => issue.includes('pH'))) {
      recommendations.push('pH adjustment may be needed - consult water treatment specialist');
    }
    
    if (issues.some(issue => issue.includes('turbidity') || issue.includes('cloudy'))) {
      recommendations.push('Use filtration systems to remove particles');
    }
    
    if (issues.some(issue => issue.includes('bacterial') || issue.includes('contamination'))) {
      recommendations.push('Disinfection treatment is strongly recommended');
    }
    
    return recommendations;
  }

  public predict(input: WaterTestInput): WaterTestResult {
    const assessments = [
      this.assessPH(input.ph),
      this.assessTurbidity(input.turbidity),
      this.assessColor(input.color),
      this.assessSmell(input.smell),
      this.assessSource(input.source)
    ];

    const totalScore = assessments.reduce((sum, assessment) => sum + assessment.score, 0);
    const allIssues = assessments.flatMap(assessment => assessment.issues);

    let riskLevel: 'safe' | 'caution' | 'unsafe';
    let title: string;
    let description: string;

    if (totalScore >= 40) {
      riskLevel = 'unsafe';
      title = 'Water May Be Unsafe';
      description = 'Your water shows signs of potential contamination. Do not drink without proper treatment.';
    } else if (totalScore >= 20) {
      riskLevel = 'caution';
      title = 'Exercise Caution';
      description = 'Your water shows some concerning parameters. Consider treatment before consumption.';
    } else {
      riskLevel = 'safe';
      title = 'Water Appears Safe';
      description = 'Based on your inputs, your water appears to be within safe parameters. However, we recommend regular testing.';
    }

    const recommendations = this.generateRecommendations(riskLevel, allIssues);

    return {
      riskLevel,
      riskScore: totalScore,
      issues: allIssues,
      recommendations,
      title,
      description
    };
  }
}

export const waterQualityAI = new WaterQualityAI();
