// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { Timestamp } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ordersDummyData } from '~/definitions/orders-dummy-data';
import type { CustomerInfo } from '~/pages/api/customers';
// import type { ProductItem } from '~/pages/api/products';

export type OrderItem = {
  short_name: string,
  name: string,
  price: number,
  size: string;
  discount: number,
  quantity: number,
  available?: boolean,
  description?: string,
  id?: string,
  categories?: string[],
}

export type OrderInfo = {
  id: string;
  created_at: Date;
  customer: CustomerInfo,
  items: OrderItem[],
  total_amount: number,
}

export type OrdersData = {
  results?: OrderInfo[],
  message?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrdersData>
) {
  switch(req.method) {
    case 'GET': 
      res.status(200).json({
        results: ordersDummyData
      })
      break;
    default:
      res.status(405).json({
        message: `${req.method} Not Allowed`
      })
      break;
      
  }
}
