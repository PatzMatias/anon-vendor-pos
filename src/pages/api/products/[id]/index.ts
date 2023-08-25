// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { dummyData } from '~/definitions/dummy-data';
import type { ProductItem } from '~/pages/api/products';


export type ProductItemData = {
  results?: ProductItem,
  message?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductItemData>
) {
  const {id} = req.query; 
  switch(req.method) {
    case 'GET': 
      const findData = dummyData.filter((item) => (item.id === id));
      res.status(200).json({
        results: findData[0]
      });
      break;
    default:
      res.status(405).json({
        message: `${req.method} Not Allowed`
      })
      break;
      
  }
}
