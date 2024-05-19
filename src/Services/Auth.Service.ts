import { Request, Response } from "express"

class AuthServices {
  async register(req: Request, res: Response) {}
  async login(req: Request, res: Response) {}
  async logout(res: Response) {}
}

export default new AuthServices()
