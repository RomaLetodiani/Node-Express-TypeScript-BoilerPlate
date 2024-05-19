import { Request, Response, NextFunction } from "express"
import asyncHandler from "express-async-handler"

export const authenticateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {},
)
