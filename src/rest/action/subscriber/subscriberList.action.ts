import { SubscriberRepository } from '@/subscriber/repository/subscriber.repository'
import { Request, Response } from 'express'
import { injectable } from 'inversify'

@injectable()
export class SubscriberListAction {
  constructor(
    private subscriberRepository: SubscriberRepository
  ) {}

  public async handler(req: Request, res: Response): Promise<void> {
    res.json(await this.subscriberRepository.findById(1) ?? {})
  }
}
