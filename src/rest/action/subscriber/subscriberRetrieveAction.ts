import { injectable } from 'inversify'
import { Request, Response } from 'express'
import { SubscriberFullOutputMapper } from '@/subscriber/output/mapper/subscriberFullOutputMapper'
import { SubscriberRetrieve } from '@/subscriber/usecase/subscribeRetrieve'

@injectable()
export class SubscriberRetrieveAction {
  constructor(
    protected subscriberRetrieve: SubscriberRetrieve,
    protected subscriberFullOutputMapper: SubscriberFullOutputMapper
  ) {}

  public async handler({ params }: Request, response: Response): Promise<void> {
    const output = await this.subscriberRetrieve.handler(parseInt(params.id))

    response.json(output)
  }
}
