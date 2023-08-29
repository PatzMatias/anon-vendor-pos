import { customerRouter } from "~/server/api/routers/customerRouter";
import { exampleRouter } from "~/server/api/routers/example";
import { orderRouter } from "~/server/api/routers/orderRouter";
import { productsRouter } from "~/server/api/routers/productsRouter";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  products: productsRouter,
  customers: customerRouter,
  orders: orderRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
