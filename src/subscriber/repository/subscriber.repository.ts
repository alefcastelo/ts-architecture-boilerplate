import { injectable } from 'inversify'
import { EntityManager, Repository } from 'typeorm'
import { Subscriber } from '../entity/subscriber'
import { SubscriberListFiltersInput } from '../input/subscriberListFilters.input'
import { SubscriberRepositoryInterface } from '../subscriberRepository.interface'

@injectable()
export class SubscriberRepository implements SubscriberRepositoryInterface {
  protected repository: Repository<Subscriber>

  constructor(entityManager: EntityManager) {
    this.repository = entityManager.getRepository<Subscriber>(Subscriber)
  }

  async findById(id: number): Promise<Subscriber> {
    return this.repository.findOne({ id })
  }

  async create(subscriber: Subscriber): Promise<Subscriber> {
    return this.repository.save(subscriber)
  }

  async update(subscriber: Subscriber): Promise<Subscriber> {
    return this.repository.save(subscriber)
  }

  async list(input: SubscriberListFiltersInput): Promise<Subscriber[]> {
    return this.repository.find(input)
  }
}
