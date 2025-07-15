import { EducationItem } from '@/types/water-quality';

export const educationContent: EducationItem[] = [
  {
    id: 'basic-testing',
    title: 'Basic Water Testing at Home',
    description: 'Learn simple methods to check your water quality using basic tools.',
    imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    content: [
      'Visual inspection for color and clarity',
      'Smell test for unusual odors',
      'pH testing with strips',
      'When to seek professional testing'
    ]
  },
  {
    id: 'water-treatment',
    title: 'Home Water Treatment Methods',
    description: 'Safe and effective ways to purify your water at home.',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    content: [
      'Boiling water for 1-3 minutes',
      'Water purification tablets',
      'Solar water disinfection (SODIS)',
      'Sand and charcoal filtration'
    ]
  },
  {
    id: 'safe-storage',
    title: 'Safe Water Storage',
    description: 'Proper storage prevents contamination and maintains water quality.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    content: [
      'Use clean, covered containers',
      'Store in cool, dark places',
      'Regular container cleaning',
      'Avoid metal containers for acidic water'
    ]
  },
  {
    id: 'warning-signs',
    title: 'Warning Signs of Contaminated Water',
    description: 'Recognize when water may be unsafe to drink.',
    imageUrl: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    content: [
      'Unusual color (brown, green, yellow)',
      'Strong chemical or sewage smell',
      'Cloudy or murky appearance',
      'Oily film on surface'
    ]
  }
];
