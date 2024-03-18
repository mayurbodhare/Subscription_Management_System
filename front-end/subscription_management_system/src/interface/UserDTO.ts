import { ActiveSubscriptionDTO } from "./ActiveSubscriptionDTO";

export interface UserDTO{
    email:String,
    firstName:String,
    lastName:String,
    subscriptions:ActiveSubscriptionDTO []
}