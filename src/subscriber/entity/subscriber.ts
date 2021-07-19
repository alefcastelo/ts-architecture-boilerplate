import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Subscriber {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  email: string
}
