import { PlanDTO } from "./PlanDTO";

export interface SubscriptionDTO {
    subscriptionId: number;
    subscriptionName: string;
    subscribed: boolean | false;
    plans: PlanDTO[];
  }