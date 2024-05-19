import asyncHandler from "express-async-handler"
import { Request, Response } from "express"
import AuthServices from "../services/Auth.Service"

class AuthController {
  registerUser = asyncHandler(async (req: Request, res: Response) => {})

  loginUser = asyncHandler(async (req: Request, res: Response) => {})

  logoutUser = asyncHandler(async (__, res: Response) => {})
}

export default new AuthController()
