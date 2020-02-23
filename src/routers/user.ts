import express from 'express'
import { getManager } from 'typeorm'
import { User } from '../entity/User'

const userRouter = express.Router()

userRouter.get('', async (req, res, next) => {
  const userRepo = getManager().getRepository(User)
  try {
    const users = await userRepo.find()
    res.json(users)
  } catch(err) {
    next(err)
  }
})

userRouter.post('', async (req, res, next) => {
  const userRepo = getManager().getRepository(User)
  const newUser = { firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age }
  try {
    res.json(await userRepo.save(newUser))
  } catch(err) {
    next(err)
  }
})

userRouter.delete('/:id', async (req, res, next) => {
  const userRepo = getManager().getRepository(User)
  try {
    await userRepo.delete(req.params.id)
    res.send(200)
  } catch(err) {
    next(err)
  }
})

export {
  userRouter
}