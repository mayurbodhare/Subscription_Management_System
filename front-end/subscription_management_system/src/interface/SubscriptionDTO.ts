import { PlanDTO } from './PlanDTO';

export interface SubscriptionDTO {
  subscriptionId: number;
  subscriptionName: string;
  plans: PlanDTO[];
}
