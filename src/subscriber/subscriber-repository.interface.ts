import { Subscriber } from './entity/subscriber'
import { SubscriberListFiltersInput } from './input/subscriber-list-filters.input'

export interface SubscriberRepositoryInterface {
  findById(id: number): Promise<Subscriber>
  create(subscriber: Subscriber): Promise<Subscriber>
  update(subscriber: Subscriber): Promise<Subscriber>
  list(input: SubscriberListFiltersInput): Promise<Subscriber[]>
}
