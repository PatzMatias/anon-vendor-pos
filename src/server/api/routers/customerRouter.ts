import { z } from "zod";
import { customersDummyData } from "~/definitions/customers-dummy-data";
import {
  createTRPCRouter,
  // publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

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

export const customerRouter = createTRPCRouter({
  list: protectedProcedure
    .query<CustomerInfo[]>(() => {
      return customersDummyData;
    }),

  customerInfo: protectedProcedure
    .input(z.object({ customerId: z.string() }))
    .query<CustomerInfo | undefined>(({input}) => {
      const customer = customersDummyData.filter(c => c.id === input.customerId)[0];
      return customer;
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
