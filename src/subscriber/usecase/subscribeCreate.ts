import { inject, injectable } from 'inversify'
import { SubscriberFullOutput } from '@/subscriber/output/subscriberFullOutput'
import { SubscriberRepository } from '@/subscriber/repository/subscriberRepository'
import { SubscriberCreateInput } from '@/subscriber/input/subscriberCreateInput'
import { SubscriberFullOutputMapper } from '@/subscriber/output/mapper/subscriberFullOutputMapper'
import { SubscriberCreateInputMapper } from '@/subscriber/input/mapper/subscriberCreateInputMapper'
import { SubscriberRepositoryInterface } from '@/subscriber/subscriberRepositoryInterface'

@injectable()
export class SubscriberCreate {
  constructor(
    @inject(SubscriberRepository)
    protected subscriberRepository: SubscriberRepositoryInterface,
    protected subscriberCreateInputMapper: SubscriberCreateInputMapper,
    protected subscriberFullOutputMapper: SubscriberFullOutputMapper
  ) {}

  async handler(input: SubscriberCreateInput): Promise<SubscriberFullOutput> {
    const subscriber = await this.subscriberCreateInputMapper.map(input)
    await this.subscriberRepository.create(subscriber)

    return this.subscriberFullOutputMapper.map(subscriber)
  }
}
