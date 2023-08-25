// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { Timestamp } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ordersDummyData } from '~/definitions/orders-dummy-data';
import type { OrderInfo } from '~/pages/api/orders';

export type OrderData = {
  results?: OrderInfo,
  message?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrderData>
) {
  const {id} = req.query; 
  switch(req.method) {
    case 'GET': 
      const findData = ordersDummyData.filter((order) => (order.id === id));
      res.status(200).json({
        results: findData[0]
      })
      break;
    default:
      res.status(405).json({
        message: `${req.method} Not Allowed`
      })
      break;
      
  }
}
