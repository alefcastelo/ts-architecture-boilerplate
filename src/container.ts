import 'reflect-metadata'
import { container } from 'tsyringe'

export class Container {
  get(id: string): unknown {
    return container.resolve(id)
  }

  set(id: string, instance: unknown): void {
    container.registerInstance(id, instance)
  }
}
