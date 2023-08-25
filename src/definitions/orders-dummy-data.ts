import { randomUUID } from 'crypto';
import type { OrderInfo } from '~/pages/api/orders';

export const ordersDummyData: OrderInfo[] = [
  {
    id: randomUUID(),
    created_at: new Date(),
    total_amount: 202.50,
    customer: {
      id: randomUUID(),
      first_name: "John",
      last_name: "Dela Cruz",
      phone_number: "0999-999-9999",
      address: "#123 Lansangan St., Brgy. Barangay, Philippines",
    },
    items: [
      {
        id: randomUUID(),
        description: `Chippy Original barbecue flavored corn chip`,
        name: 'Chippy Original Barbecue',
        price: 10.00,
        short_name: 'CHIPPY OG BBQ 27g',
        size: '27g',
        discount: 0.00,
        quantity: 5,
      },
      {
        id: randomUUID(),
        description: `Chippy Original barbecue flavored corn chip`,
        name: 'Chippy Original Barbecue',
        price: 30.50,
        short_name: 'CHIPPY OG BBQ 110g',
        size: '110g',
        discount: 0.00,
        quantity: 5,
      }
    ],
  },
  {
    id: randomUUID(),
    created_at: new Date(`2023 August 21`),
    total_amount: 405.00,
    customer: {
      id: randomUUID(),
      first_name: "Gina",
      last_name: "Dimagiba",
      phone_number: "0999-999-9999",
      address: "#352 Lansangan St., Brgy. Barangay, Philippines",
    },
    items: [
      {
        id: randomUUID(),
        description: `Chippy Original barbecue flavored corn chip`,
        name: 'Chippy Original Barbecue',
        price: 10.00,
        short_name: 'CHIPPY OG BBQ 27g',
        size: '27g',
        discount: 0.00,
        quantity: 5,
      },
      {
        id: randomUUID(),
        description: `Chippy Original barbecue flavored corn chip`,
        name: 'Chippy Original Barbecue',
        price: 30.50,
        short_name: 'CHIPPY OG BBQ 110g',
        size: '110g',
        discount: 0.00,
        quantity: 5,
      },
      {
        id: randomUUID(),
        description: `Chippy Chilly Cheese flavored corn chip`,
        name: 'Chippy Chilly Cheese',
        price: 10.00,
        short_name: 'CHIPPY CHILLY CHIZ 27g',
        size: '27g',
        discount: 0.00,
        quantity: 5,
      },
      {
        id: randomUUID(),
        description: `Chippy Chilly Cheese flavored corn chip`,
        name: 'Chippy Chilly Cheese',
        price: 30.50,
        short_name: 'CHIPPY CHILLY CHIZ 110g',
        size: '110g',
        discount: 0.00,
        quantity: 5,
      },
    ]
  }
]