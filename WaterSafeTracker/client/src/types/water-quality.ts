export interface WaterTestInput {
  ph: string;
  turbidity: string;
  color: string;
  smell: string;
  source: string;
}

export interface WaterTestResult {
  riskLevel: 'safe' | 'caution' | 'unsafe';
  riskScore: number;
  issues: string[];
  recommendations: string[];
  title: string;
  description: string;
}

export interface EducationItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  content: string[];
}

export interface ResourceContact {
  id: string;
  name: string;
  description: string;
  phone: string;
  email?: string;
  website?: string;
  category: 'testing' | 'ngo' | 'emergency' | 'health';
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  description: string;
}
