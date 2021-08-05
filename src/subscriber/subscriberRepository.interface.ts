import { Subscriber } from '@/subscriber/entity/subscriber'
import { SubscriberListFiltersInput } from '@/subscriber/input/subscriberListFilters.input'

export interface SubscriberRepositoryInterface {
  findById(id: number): Promise<Subscriber>
  create(subscriber: Subscriber): Promise<Subscriber>
  update(subscriber: Subscriber): Promise<Subscriber>
  list(input: SubscriberListFiltersInput): Promise<Subscriber[]>
}
