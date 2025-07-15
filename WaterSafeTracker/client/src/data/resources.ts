import { ResourceContact, EmergencyContact } from '@/types/water-quality';

export const emergencyContacts: EmergencyContact[] = [
  {
    id: 'health-emergency',
    name: 'Health Emergency',
    phone: '999',
    description: 'Emergency Services'
  },
  {
    id: 'water-contamination',
    name: 'Water Contamination Report',
    phone: '+254-XXX-XXXX',
    description: 'Local Health Department'
  }
];

export const resourceContacts: ResourceContact[] = [
  {
    id: 'kenya-water-institute',
    name: 'Kenya Water Institute',
    description: 'Professional water quality testing',
    phone: '+254-XXX-XXXX',
    category: 'testing'
  },
  {
    id: 'local-health-center',
    name: 'Local Health Center',
    description: 'Community health services',
    phone: '+254-XXX-XXXX',
    category: 'health'
  },
  {
    id: 'water-quality-labs',
    name: 'Water Quality Labs',
    description: 'Comprehensive water analysis',
    phone: '+254-XXX-XXXX',
    category: 'testing'
  },
  {
    id: 'water-org-kenya',
    name: 'Water.org Kenya',
    description: 'Water access and sanitation',
    phone: '+254-XXX-XXXX',
    website: 'www.water.org',
    category: 'ngo'
  },
  {
    id: 'unicef-kenya',
    name: 'UNICEF Kenya',
    description: 'Child health and water safety',
    phone: '+254-XXX-XXXX',
    website: 'www.unicef.org',
    category: 'ngo'
  },
  {
    id: 'community-groups',
    name: 'Local Community Groups',
    description: 'Community-based water initiatives',
    phone: 'Contact local leaders',
    category: 'ngo'
  }
];
