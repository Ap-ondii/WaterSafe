import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EducationItem } from '@/types/water-quality';

interface EducationCardProps {
  item: EducationItem;
}

export function EducationCard({ item }: EducationCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-gray-700">
          {item.content.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
