// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

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
  const dummyData = [
    {
      id: `1`,
      available: true,
      categories: ['salty-snack'],
      description: `Chippy Original barbecue flavored corn chip`,
      image: 'https://firebasestorage.googleapis.com/v0/b/anon-vendor-pos.appspot.com/o/chippy-original.png?alt=media',
      name: 'Chippy Original Barbecue',
      price: 10.00,
      short_name: 'CHIPPY OG BBQ 27g',
      size: '27g'
    },
    {
      id: `2`,
      available: true,
      categories: ['salty-snack'],
      description: `Chippy Original barbecue flavored corn chip`,
      image: 'https://firebasestorage.googleapis.com/v0/b/anon-vendor-pos.appspot.com/o/chippy-original.png?alt=media',
      name: 'Chippy Original Barbecue',
      price: 30.50,
      short_name: 'CHIPPY OG BBQ 110g',
      size: '110g'
    },
    {
      id: `3`,
      available: true,
      categories: ['salty-snack'],
      description: `Chippy Original barbecue flavored corn chip`,
      image: 'https://firebasestorage.googleapis.com/v0/b/anon-vendor-pos.appspot.com/o/chippy-original.png?alt=media',
      name: 'Chippy Original Barbecue',
      price: 40.00,
      short_name: 'CHIPPY OG BBQ PRTY PCK 200g',
      size: '200g'
    },
    {
      id: `4`,
      available: true,
      categories: ['salty-snack'],
      description: `Chippy Mild & Tasty OG Barbecue with Less Salt`,
      image: 'https://firebasestorage.googleapis.com/v0/b/anon-vendor-pos.appspot.com/o/chippy-mild-tasty.png?alt=media',
      name: 'Chippy Mild & Tasty OG Barbecue',
      price: 10.00,
      short_name: 'CHIPPY MT OG BBQ 27g',
      size: '27g'
    },
    {
      id: `5`,
      available: true,
      categories: ['salty-snack'],
      description: `Chippy Mild & Tasty OG Barbecue with Less Salt`,
      image: 'https://firebasestorage.googleapis.com/v0/b/anon-vendor-pos.appspot.com/o/chippy-mild-tasty.png?alt=media',
      name: 'Chippy Mild & Tasty OG Barbecue',
      price: 30.50,
      short_name: 'CHIPPY MT OG BBQ 110g',
      size: '110g'
    },
    {
      id: `6`,
      available: true,
      categories: ['salty-snack'],
      description: `Chippy Mild & Tasty OG Barbecue with Less Salt`,
      image: 'https://firebasestorage.googleapis.com/v0/b/anon-vendor-pos.appspot.com/o/chippy-mild-tasty.png?alt=media',
      name: 'Chippy Mild & Tasty OG Barbecue',
      price: 40.00,
      short_name: 'CHIPPY MT OG BBQ PRTY PCK 200g',
      size: '200g'
    },
    {
      id: `7`,
      available: true,
      categories: ['salty-snack'],
      description: `Chippy Chilly Cheese flavored corn chip`,
      image: 'https://firebasestorage.googleapis.com/v0/b/anon-vendor-pos.appspot.com/o/chippy-chili-cheese.png?alt=media',
      name: 'Chippy Chilly Cheese',
      price: 10.00,
      short_name: 'CHIPPY CHILLY CHIZ 27g',
      size: '27g'
    },
    {
      id: `8`,
      available: true,
      categories: ['salty-snack'],
      description: `Chippy Chilly Cheese flavored corn chip`,
      image: 'https://firebasestorage.googleapis.com/v0/b/anon-vendor-pos.appspot.com/o/chippy-chili-cheese.png?alt=media',
      name: 'Chippy Chilly Cheese',
      price: 30.50,
      short_name: 'CHIPPY CHILLY CHIZ 110g',
      size: '110g'
    },
    {
      id: `9`,
      available: true,
      categories: ['salty-snack'],
      description: `Chippy Chilly Cheese flavored corn chip`,
      image: 'https://firebasestorage.googleapis.com/v0/b/anon-vendor-pos.appspot.com/o/chippy-chili-cheese.png?alt=media',
      name: 'Chippy Chilly Cheese',
      price: 40.00,
      short_name: 'CHIPPY CHILLY CHIZ PRTY PCK 200g',
      size: '200g'
    },
  ]
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
