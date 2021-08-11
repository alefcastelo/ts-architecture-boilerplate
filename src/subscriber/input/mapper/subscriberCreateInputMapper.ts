import { injectable } from 'inversify'
import { validate } from 'class-validator'
import { Subscriber } from '@/subscriber/entity/subscriber'
import { ViolationException } from '@/shared/exception/violationException'
import { SubscriberCreateInput } from '@/subscriber/input/subscriberCreateInput'

@injectable()
export class SubscriberCreateInputMapper {
  async map(input: SubscriberCreateInput): Promise<Subscriber> {
    const violations = await validate(input)

    if (violations.length > 0) {
      throw new ViolationException(violations)
    }

    const subscriber = new Subscriber(
      input.firstName as string,
      input.lastName as string,
      input.email as string
    )

    return subscriber
  }
}
