import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Globe } from 'lucide-react';
import { ResourceContact } from '@/types/water-quality';

interface ContactCardProps {
  contact: ResourceContact;
}

export function ContactCard({ contact }: ContactCardProps) {
  const getCategoryColor = () => {
    switch (contact.category) {
      case 'testing':
        return 'border-l-blue-500';
      case 'ngo':
        return 'border-l-green-500';
      case 'health':
        return 'border-l-purple-500';
      case 'emergency':
        return 'border-l-red-500';
      default:
        return 'border-l-gray-500';
    }
  };

  return (
    <Card className={`border-l-4 ${getCategoryColor()}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{contact.name}</CardTitle>
        <CardDescription>{contact.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Phone className="w-4 h-4 text-primary" />
          <span>{contact.phone}</span>
        </div>
        {contact.email && (
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-primary" />
            <span>{contact.email}</span>
          </div>
        )}
        {contact.website && (
          <div className="flex items-center gap-2 text-sm">
            <Globe className="w-4 h-4 text-primary" />
            <a 
              href={`https://${contact.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {contact.website}
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
