import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { WaterTestInput } from '@/types/water-quality';
import { useI18n } from '@/lib/i18n';

const waterTestSchema = z.object({
  ph: z.string().min(1, 'Please select a pH range'),
  turbidity: z.string().min(1, 'Please select water clarity'),
  color: z.string().min(1, 'Please select water color'),
  smell: z.string().min(1, 'Please select water smell'),
  source: z.string().min(1, 'Please select water source')
});

interface WaterTestFormProps {
  onSubmit: (data: WaterTestInput) => void;
  isLoading?: boolean;
}

export function WaterTestForm({ onSubmit, isLoading }: WaterTestFormProps) {
  const { t } = useI18n();
  
  const form = useForm<WaterTestInput>({
    resolver: zodResolver(waterTestSchema),
    defaultValues: {
      ph: '',
      turbidity: '',
      color: '',
      smell: '',
      source: ''
    }
  });

  const handleSubmit = (data: WaterTestInput) => {
    onSubmit(data);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>{t('predictor.title')}</CardTitle>
          <Alert className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Disclaimer:</strong> {t('predictor.disclaimer')}
            </AlertDescription>
          </Alert>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              {/* pH Level */}
              <FormField
                control={form.control}
                name="ph"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('predictor.ph.label')}</FormLabel>
                    <FormDescription>{t('predictor.ph.description')}</FormDescription>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pH range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="very-acidic">{t('predictor.ph.options.very-acidic')}</SelectItem>
                        <SelectItem value="acidic">{t('predictor.ph.options.acidic')}</SelectItem>
                        <SelectItem value="neutral">{t('predictor.ph.options.neutral')}</SelectItem>
                        <SelectItem value="alkaline">{t('predictor.ph.options.alkaline')}</SelectItem>
                        <SelectItem value="very-alkaline">{t('predictor.ph.options.very-alkaline')}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Turbidity */}
              <FormField
                control={form.control}
                name="turbidity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('predictor.turbidity.label')}</FormLabel>
                    <FormDescription>{t('predictor.turbidity.description')}</FormDescription>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="clear" id="clear" />
                          <Label htmlFor="clear">{t('predictor.turbidity.options.clear')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="slightly-cloudy" id="slightly-cloudy" />
                          <Label htmlFor="slightly-cloudy">{t('predictor.turbidity.options.slightly-cloudy')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cloudy" id="cloudy" />
                          <Label htmlFor="cloudy">{t('predictor.turbidity.options.cloudy')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="very-cloudy" id="very-cloudy" />
                          <Label htmlFor="very-cloudy">{t('predictor.turbidity.options.very-cloudy')}</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Color */}
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('predictor.color.label')}</FormLabel>
                    <FormDescription>{t('predictor.color.description')}</FormDescription>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="colorless" id="colorless" />
                          <Label htmlFor="colorless">{t('predictor.color.options.colorless')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yellow" id="yellow" />
                          <Label htmlFor="yellow">{t('predictor.color.options.yellow')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="green" id="green" />
                          <Label htmlFor="green">{t('predictor.color.options.green')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other-color" />
                          <Label htmlFor="other-color">{t('predictor.color.options.other')}</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Smell */}
              <FormField
                control={form.control}
                name="smell"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('predictor.smell.label')}</FormLabel>
                    <FormDescription>{t('predictor.smell.description')}</FormDescription>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="none" id="none" />
                          <Label htmlFor="none">{t('predictor.smell.options.none')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="chlorine" id="chlorine" />
                          <Label htmlFor="chlorine">{t('predictor.smell.options.chlorine')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="sulfur" id="sulfur" />
                          <Label htmlFor="sulfur">{t('predictor.smell.options.sulfur')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other-smell" />
                          <Label htmlFor="other-smell">{t('predictor.smell.options.other')}</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Source */}
              <FormField
                control={form.control}
                name="source"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('predictor.source.label')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select water source" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="tap">{t('predictor.source.options.tap')}</SelectItem>
                        <SelectItem value="well">{t('predictor.source.options.well')}</SelectItem>
                        <SelectItem value="borehole">{t('predictor.source.options.borehole')}</SelectItem>
                        <SelectItem value="spring">{t('predictor.source.options.spring')}</SelectItem>
                        <SelectItem value="river">{t('predictor.source.options.river')}</SelectItem>
                        <SelectItem value="rainwater">{t('predictor.source.options.rainwater')}</SelectItem>
                        <SelectItem value="other">{t('predictor.source.options.other')}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Analyzing...' : t('predictor.analyze')}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
