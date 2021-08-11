import { Subscriber } from '@/subscriber/entity/subscriber'
import { SubscriberListFiltersInput } from '@/subscriber/input/subscriberListFiltersInput'

export interface SubscriberRepositoryInterface {
  findById(id: string): Promise<Subscriber>
  create(subscriber: Subscriber): Promise<Subscriber>
  update(subscriber: Subscriber): Promise<Subscriber>
  list(input: SubscriberListFiltersInput): Promise<Subscriber[]>
}
