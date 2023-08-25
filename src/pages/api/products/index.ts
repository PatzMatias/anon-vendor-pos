// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { dummyData } from '~/definitions/dummy-data';

export type ProductItem = {
  id: string;
  available: boolean,
  categories: string[],
  description: string,
  image: string,
  name: string,
  price: number,
  short_name: string,
  size: string
  createdAt?: number;
  udpatedAt?: number;
}

export type ProductData = {
  results?: ProductItem[],
  message?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductData>
) {
  switch(req.method) {
    case 'GET': 
      res.status(200).json({
        results: dummyData
      })
      break;
    default:
      res.status(405).json({
        message: `${req.method} Not Allowed`
      })
      break;
      
  }
}
