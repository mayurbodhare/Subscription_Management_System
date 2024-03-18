import { PlanDTO } from "./PlanDTO";
import { SubscriptionDTO } from "./subscriptionDTO";

export interface ActiveSubscriptionDTO {
    subscriptionDTO: SubscriptionDTO;
    planDTO: PlanDTO;
}