import { Request, Response } from 'express'
import { injectable } from 'inversify'

@injectable()
export class HealthCheckAction {
  public async handler(req: Request, res: Response): Promise<void> {
    res.json({ status: 'ok', time: Date.now() })
  }
}
