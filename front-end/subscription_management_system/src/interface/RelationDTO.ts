import { PlanDTO } from "./PlanDTO";
import { SubscriptionDTO } from "./subscriptionDTO";

export interface RelationDTO {
    emailId: String;
    startDate: String;
    subscriptionEntity: SubscriptionDTO;
    planEntity: PlanDTO;
  }
  