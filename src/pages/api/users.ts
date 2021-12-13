import { NextApiRequest, NextApiResponse } from "next";

export default function (request: NextApiRequest, response: NextApiResponse) {
  const users = [
    { id: 1, name: "José" },
    { id: 2, name: "Mateus" },
    { id: 3, name: "Boné" },
  ];

  return response.json(users);
}
