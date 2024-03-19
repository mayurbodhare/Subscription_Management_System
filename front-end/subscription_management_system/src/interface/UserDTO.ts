import { ActiveSubscriptionDTO } from "./ActiveSubscriptionDTO";

export interface UserDTO{
    email:String,
    firstName:String,
    lastName:String,
    password:String,
    subscriptions:ActiveSubscriptionDTO []
}