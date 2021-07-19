import { Container } from '@/container'
import { Router } from 'express'

export const createAppRoutes = (container: Container): Router => {
  const router = Router()

  router.get('/', (req, res) => {
    res.json({ status: 'Ok', time: Date.now() })
  })

  router.get('/subscriber', () => {
    router.post('/', (req, res) => {
      res.json({ status: 'Ok', time: Date.now() })
    })
  })

  return router
}
