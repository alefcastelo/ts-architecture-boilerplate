import { IsEmail, IsNotEmpty } from 'class-validator'

export class SubscriberCreateInput {
  @IsNotEmpty()
  public firstName: unknown;

  @IsNotEmpty()
  public lastName: unknown;

  @IsEmail()
  public email: unknown;
}
