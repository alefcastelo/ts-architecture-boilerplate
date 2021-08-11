import { injectable } from 'inversify'
import { Subscriber } from '@/subscriber/entity/subscriber'
import { SubscriberFullOutput } from '@/subscriber/output/subscriberFullOutput'

@injectable()
export class SubscriberFullOutputMapper {
  public map(subscriber: Subscriber): SubscriberFullOutput {
    const output = new SubscriberFullOutput()

    output.id = subscriber.getId()
    output.firstName = subscriber.getFirstName()
    output.lastName = subscriber.getLastName()
    output.email = subscriber.getEmail()

    return output
  }
}
