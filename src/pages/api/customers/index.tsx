// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { customersDummyData } from '~/definitions/customers-dummy-data';

export type CustomerInfo = {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  address: string;
  createdAt?: number;
  updatedAt?: number;
}

export type CustomersData = {
  results?: CustomerInfo[],
  message?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CustomersData>
) {
  switch(req.method) {
    case 'GET': 
      res.status(200).json({
        results: customersDummyData
      })
      break;
    default:
      res.status(405).json({
        message: `${req.method} Not Allowed`
      })
      break;
      
  }
}
