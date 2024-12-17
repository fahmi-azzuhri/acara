import { Request, Response } from "express";

export default {
  dummy(req: Request, res: Response) {
    res.status(200).send({
      message: "Success",
      data: "Ok",
    });
  },
};
