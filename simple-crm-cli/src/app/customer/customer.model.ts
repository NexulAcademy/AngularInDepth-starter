export type CustomerType = 'none' | 'personal' | 'business';
export type InteractionMethod = 'none' | 'email' | 'phone';
export type CustomerStatus = 'initial' | 'prospect' | 'purchased';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  optInNewsletter: boolean;
  type: CustomerType;
  emailAddress: string;
  lastContactDate: string;
  preferredContactMethod: InteractionMethod;
  status: CustomerStatus;
}
