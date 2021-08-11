import { inject, injectable } from 'inversify'
import { SubscriberFullOutput } from '@/subscriber/output/subscriberFullOutput'
import { SubscriberRepository } from '@/subscriber/repository/subscriberRepository'
import { SubscriberFullOutputMapper } from '@/subscriber/output/mapper/subscriberFullOutputMapper'
import { SubscriberRepositoryInterface } from '@/subscriber/subscriberRepositoryInterface'

@injectable()
export class SubscriberRetrieve {
  constructor(
    @inject(SubscriberRepository)
    protected subscriberRepository: SubscriberRepositoryInterface,
    protected subscriberFullOutputMapper: SubscriberFullOutputMapper
  ) {}

  async handler(id: number): Promise<SubscriberFullOutput> {
    const subscriber = await this.subscriberRepository.findById(id)

    return this.subscriberFullOutputMapper.map(subscriber)
  }
}
