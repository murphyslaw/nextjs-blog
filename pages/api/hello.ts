import { NextApiRequest, NextApiResponse } from "next";

function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: "Hello" });
}

export default handler;
