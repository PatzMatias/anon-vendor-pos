import type { ReactElement } from "react";
import DashboardLayout from "~/components/layout/DashboardLayout";
import CustomHead from "~/components/ui/CustomHead";
import DashboardPageHeader from "~/components/ui/DashboardPageHeader";
import type { ProductItem } from "~/pages/api/products";
import { getServerAuthSession } from "~/server/auth";
import type { GetServerSidePropsContext } from "next";
import type { ProductItemData } from "~/pages/api/products/[id]";

interface IProps {
  product: ProductItem;
}

export default function EditProduct({product}: IProps) {

  return (
    <>
      <CustomHead title={`Products`} description="The system's products management page" />
      <section className="container grid mx-auto px-6">
        <DashboardPageHeader 
          title={`Edit Product - ${product?.short_name}`} 
          description={product?.description}
        />
      </section>
    </>
  );
}


EditProduct.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context);
  
  // try {
  //   if (session) {
      const query = context.query;
      const res = await fetch(`http://localhost:3000/api/products/${query.id as string}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      })
      const productData = await res.json() as ProductItemData;
      const product: ProductItem | null = productData.results ?? null;

      return {
        props: {
          product: product
        }
      };
  //  }
  // } catch(e) {
  //   return {
  //     props: {
  //       products: []
  //     }
  //   };
  // }
}