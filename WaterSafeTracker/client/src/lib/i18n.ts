import { createContext, useContext } from 'react';

interface Translation {
  [key: string]: string | Translation;
}

const translations: { [lang: string]: Translation } = {
  en: {
    nav: {
      home: 'Home',
      predictor: 'Water Test',
      learn: 'Learn',
      resources: 'Resources'
    },
    hero: {
      title: 'Protecting Communities Through Water Safety',
      subtitle: 'Access real-time water quality monitoring, educational resources, and local testing services to keep your family safe.',
      cta: 'Test Your Water Now'
    },
    features: {
      ai: {
        title: 'AI-Powered Testing',
        description: 'Get instant water quality predictions based on simple parameters you can check at home.'
      },
      education: {
        title: 'Educational Resources',
        description: 'Learn water safety techniques, treatment methods, and prevention tips for your community.'
      },
      services: {
        title: 'Local Services',
        description: 'Connect with verified water testing services, NGOs, and community health centers near you.'
      }
    },
    predictor: {
      title: 'Water Quality Predictor',
      disclaimer: 'This tool provides advisory predictions only. For definitive water safety, consult professional testing services.',
      analyze: 'Analyze Water Quality',
      ph: {
        label: 'pH Level',
        description: 'Use pH strips or digital meter. Safe range: 6.5-8.5',
        options: {
          'very-acidic': 'Very Acidic (0-4)',
          'acidic': 'Acidic (4-6.5)',
          'neutral': 'Neutral/Safe (6.5-8.5)',
          'alkaline': 'Alkaline (8.5-12)',
          'very-alkaline': 'Very Alkaline (12-14)'
        }
      },
      turbidity: {
        label: 'Water Clarity (Turbidity)',
        description: 'How clear does your water look?',
        options: {
          'clear': 'Crystal Clear',
          'slightly-cloudy': 'Slightly Cloudy',
          'cloudy': 'Cloudy',
          'very-cloudy': 'Very Cloudy'
        }
      },
      color: {
        label: 'Water Color',
        description: 'What color is your water?',
        options: {
          'colorless': 'Colorless/Clear',
          'yellow': 'Yellow/Brown',
          'green': 'Green',
          'other': 'Other Color'
        }
      },
      smell: {
        label: 'Smell',
        description: 'Does your water have any unusual smell?',
        options: {
          'none': 'No Smell',
          'chlorine': 'Chlorine',
          'sulfur': 'Sulfur/Rotten Egg',
          'other': 'Other Smell'
        }
      },
      source: {
        label: 'Water Source',
        options: {
          'tap': 'Tap Water',
          'well': 'Well Water',
          'borehole': 'Borehole',
          'spring': 'Natural Spring',
          'river': 'River/Stream',
          'rainwater': 'Rainwater',
          'other': 'Other'
        }
      }
    }
  },
  sw: {
    nav: {
      home: 'Nyumbani',
      predictor: 'Upimaji wa Maji',
      learn: 'Jifunze',
      resources: 'Rasilimali'
    },
    hero: {
      title: 'Kulinda Jamii kupitia Usalama wa Maji',
      subtitle: 'Pata ufuatiliaji wa ubora wa maji kwa wakati halisi, rasilimali za kielimu, na huduma za upimaji wa maji za eneo lako ili kulinda familia yako.',
      cta: 'Pima Maji Yako Sasa'
    },
    features: {
      ai: {
        title: 'Upimaji wa AI',
        description: 'Pata utabiri wa haraka wa ubora wa maji kulingana na vipimo rahisi unavyoweza kufanya nyumbani.'
      },
      education: {
        title: 'Rasilimali za Kielimu',
        description: 'Jifunze mbinu za usalama wa maji, njia za matibabu, na vidokezo vya kuzuia katika jamii yako.'
      },
      services: {
        title: 'Huduma za Eneo',
        description: 'Unganishwa na huduma za upimaji wa maji zilizothibitishwa, mashirika yasiyo ya kiserikali, na vituo vya afya ya jamii karibu nawe.'
      }
    },
    predictor: {
      title: 'Kitabiri cha Ubora wa Maji',
      disclaimer: 'Kifaa hiki hutoa utabiri wa ushauri tu. Kwa usalama wa maji wa uhakika, shauri na huduma za upimaji wa kitaalamu.',
      analyze: 'Changanua Ubora wa Maji',
      ph: {
        label: 'Kiwango cha pH',
        description: 'Tumia vipimo vya pH au kipimo cha kidijitali. Kiwango salama: 6.5-8.5',
        options: {
          'very-acidic': 'Asidi Sana (0-4)',
          'acidic': 'Asidi (4-6.5)',
          'neutral': 'Wastani/Salama (6.5-8.5)',
          'alkaline': 'Alkaline (8.5-12)',
          'very-alkaline': 'Alkaline Sana (12-14)'
        }
      }
    }
  }
};

interface I18nContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

export const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key
});

export const useI18n = () => useContext(I18nContext);

export const getTranslation = (key: string, lang: string): string => {
  const keys = key.split('.');
  let current: any = translations[lang] || translations.en;
  
  for (const k of keys) {
    current = current[k];
    if (!current) break;
  }
  
  return current || key;
};
