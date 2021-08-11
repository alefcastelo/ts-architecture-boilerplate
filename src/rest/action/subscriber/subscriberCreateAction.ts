import { injectable } from 'inversify'
import { NextFunction, Request, Response } from 'express'
import { plainToClass } from 'class-transformer'
import { SubscriberCreate } from '@/subscriber/usecase/subscribeCreate'
import { SubscriberCreateInput } from '@/subscriber/input/subscriberCreateInput'
import { nextTick } from 'process'

@injectable()
export class SubscriberCreateAction {
  constructor(
    protected subscriberCreate: SubscriberCreate
  ) {}

  public async handler(request: Request, response: Response): Promise<void> {
    const input = plainToClass(SubscriberCreateInput, request.body)
    const output = await this.subscriberCreate.handler(input)

    response.json(output)
  }
}
