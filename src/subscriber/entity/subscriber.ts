import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Subscriber {
  @PrimaryGeneratedColumn()
  protected id: string

  @Column()
  protected firstName: string

  @Column()
  protected lastName: string

  @Column()
  protected email: string

  constructor(
    firstName: string,
    lastName: string,
    email: string
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
  }

  public getId(): string {
    return this.id
  }

  public getFirstName(): string {
    return this.firstName
  }

  public getLastName(): string {
    return this.lastName
  }

  public getEmail(): string {
    return this.email
  }
}
