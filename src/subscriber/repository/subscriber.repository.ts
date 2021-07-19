import { AbstractRepository, EntityRepository } from 'typeorm'
import { Subscriber } from '../entity/subscriber'
import { SubscriberListFiltersInput } from '../input/subscriber-list-filters.input'
import { SubscriberRepositoryInterface } from '../subscriber-repository.interface'

@EntityRepository(Subscriber)
export class SubscriberRepository
  extends AbstractRepository<Subscriber>
  implements SubscriberRepositoryInterface {
  async findById(id: number): Promise<Subscriber> {
    return this.repository.findOne({ id })
  }

  async create(subscriber: Subscriber): Promise<Subscriber> {
    return this.repository.save<Subscriber>(subscriber)
  }

  async update(subscriber: Subscriber): Promise<Subscriber> {
    return this.repository.save<Subscriber>(subscriber)
  }

  async list(input: SubscriberListFiltersInput): Promise<Subscriber[]> {
    return []
  }
}
