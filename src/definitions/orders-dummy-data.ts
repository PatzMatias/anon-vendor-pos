import type { OrderInfo } from '~/pages/api/orders';

export const ordersDummyData: OrderInfo[] = [
  {
    id: 'order-1',
    created_at: new Date(),
    total_amount: 202.50,
    customer: {
      id: `customer-1`,
      first_name: "John",
      last_name: "Dela Cruz",
      phone_number: "0999-999-9999",
      address: "#123 Lansangan St., Brgy. Barangay, Philippines",
    },
    items: [
      {
        id: `1`,
        description: `Chippy Original barbecue flavored corn chip`,
        name: 'Chippy Original Barbecue',
        price: 10.00,
        short_name: 'CHIPPY OG BBQ 27g',
        size: '27g',
        discount: 0.00,
        quantity: 5,
      },
      {
        id: `2`,
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
    id: `order-2`,
    created_at: new Date(`2023 August 21`),
    total_amount: 405.00,
    customer: {
      id: `customer-2`,
      first_name: "Gina",
      last_name: "Dimagiba",
      phone_number: "0999-999-9999",
      address: "#352 Lansangan St., Brgy. Barangay, Philippines",
    },
    items: [
      {
        id: `1`,
        description: `Chippy Original barbecue flavored corn chip`,
        name: 'Chippy Original Barbecue',
        price: 10.00,
        short_name: 'CHIPPY OG BBQ 27g',
        size: '27g',
        discount: 0.00,
        quantity: 5,
      },
      {
        id: `2`,
        description: `Chippy Original barbecue flavored corn chip`,
        name: 'Chippy Original Barbecue',
        price: 30.50,
        short_name: 'CHIPPY OG BBQ 110g',
        size: '110g',
        discount: 0.00,
        quantity: 5,
      },
      {
        id: `3`,
        description: `Chippy Chilly Cheese flavored corn chip`,
        name: 'Chippy Chilly Cheese',
        price: 10.00,
        short_name: 'CHIPPY CHILLY CHIZ 27g',
        size: '27g',
        discount: 0.00,
        quantity: 5,
      },
      {
        id: `4`,
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