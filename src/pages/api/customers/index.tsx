import type { NextApiRequest, NextApiResponse } from 'next'

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
  const customersDummyData: CustomerInfo[] = [
    {
      id: `customer-1`,
      first_name: "John",
      last_name: "Dela Cruz",
      phone_number: "0999-999-9999",
      address: "#123 Lansangan St., Brgy. Barangay, Philippines",
    },
    {
      id: `customer-2`,
      first_name: "Gina",
      last_name: "Dimagiba",
      phone_number: "0999-999-1111",
      address: "#352 Lansangan St., Brgy. Barangay, Philippines",
    }
  ]
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
