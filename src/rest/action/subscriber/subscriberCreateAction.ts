import { injectable } from 'inversify'
import { Request, Response } from 'express'
import { plainToClass } from 'class-transformer'
import { SubscriberCreate } from '@/subscriber/usecase/subscribeCreate'
import { SubscriberCreateInput } from '@/subscriber/input/subscriberCreateInput'

@injectable()
export class SubscriberCreateAction {
  constructor(
    protected subscriberCreate: SubscriberCreate
  ) {}

  public async handler(req: Request, res: Response): Promise<void> {
    const input = plainToClass(SubscriberCreateInput, req.body)
    const output = await this.subscriberCreate.handler(input)

    res.json(output)
  }
}
