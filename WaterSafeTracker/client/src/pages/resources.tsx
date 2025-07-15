import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Download, Phone } from 'lucide-react';
import { ContactCard } from '@/components/resources/contact-card';
import { emergencyContacts, resourceContacts } from '@/data/resources';

export default function Resources() {
  const testingServices = resourceContacts.filter(c => c.category === 'testing');
  const ngoPartners = resourceContacts.filter(c => c.category === 'ngo');
  const healthServices = resourceContacts.filter(c => c.category === 'health');

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Resources & Support</CardTitle>
          <CardDescription>
            Connect with local services and organizations for water testing and support.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Emergency Contacts */}
      <Alert className="border-red-200 bg-red-50">
        <Phone className="h-4 w-4 text-red-600" />
        <div className="ml-3">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Emergency Contacts</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {emergencyContacts.map((contact) => (
              <div key={contact.id}>
                <h4 className="font-medium text-red-700">{contact.name}</h4>
                <p className="text-sm text-red-600">Call: {contact.phone}</p>
                <p className="text-sm text-red-600">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Alert>

      {/* Service Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Testing Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Water Testing Services</h3>
          <div className="space-y-4">
            {testingServices.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
            {healthServices.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>

        {/* NGO Partners */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NGO Partners</h3>
          <div className="space-y-4">
            {ngoPartners.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>

      {/* Downloadable Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Downloadable Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border border-gray-200 hover:bg-gray-50 transition-colors">
              <CardContent className="p-4">
                <Download className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-medium mb-1">Water Testing Guide</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Step-by-step testing instructions
                </p>
                <Button variant="link" size="sm" className="p-0 h-auto">
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:bg-gray-50 transition-colors">
              <CardContent className="p-4">
                <Download className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-medium mb-1">Treatment Methods</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Home water purification guide
                </p>
                <Button variant="link" size="sm" className="p-0 h-auto">
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:bg-gray-50 transition-colors">
              <CardContent className="p-4">
                <Download className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-medium mb-1">Emergency Checklist</h4>
                <p className="text-sm text-gray-600 mb-2">
                  What to do in water emergencies
                </p>
                <Button variant="link" size="sm" className="p-0 h-auto">
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
