import { z } from "zod";
import { ordersDummyData } from "~/definitions/orders-dummy-data";
import { CustomerInfo } from "~/server/api/routers/customerRouter";
import {
  createTRPCRouter,
  // publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

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

export const orderRouter = createTRPCRouter({
  list: protectedProcedure
    .query<OrderInfo[]>(() => {
      return ordersDummyData;
    }),

  orderInfo: protectedProcedure
    .input(z.object({ orderId: z.string() }))
    .query<OrderInfo | undefined>(({input}) => {
      const order = ordersDummyData.filter(o => o.id === input.orderId)[0];
      return order;
    }),
    
  // createProduct: protectedProcedure.
  //   input(z.object({
  //     id: z.string(),
  //     available: z.boolean().default(true),
  //     categories: z.string().array(),
  //     description: z.string(),
  //     image: z.string(),
  //     name: z.string(),
  //     short_name: z.string(),
  //     size: z.string(),
  //     price: z.number().positive().default(0.00)
  //   })).mutation((input) => {
  //     console.log(input)
  //   })
});
