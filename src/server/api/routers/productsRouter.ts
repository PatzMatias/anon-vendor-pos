import { z } from "zod";
import { dummyData } from "~/definitions/dummy-data";
import {
  createTRPCRouter,
  // publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export type ProductItem = {
  id: string;
  available: boolean,
  categories: string[],
  description: string,
  image: string,
  name: string,
  price: number,
  short_name: string,
  size: string,
  createdAt?: number;
  updatedAt?: number;
}

export type ProductData = {
  results?: ProductItem[],
  message?: string;
}

export const productsRouter = createTRPCRouter({
  list: protectedProcedure
    .query<ProductItem[]>(() => {
      return dummyData;
    }),

  productInfo: protectedProcedure
    .input(z.object({ productId: z.string() }))
    .query<ProductItem | undefined>(({input, ctx}) => {
      const product = dummyData.filter(item => item.id === input.productId)[0];
      return product;
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
