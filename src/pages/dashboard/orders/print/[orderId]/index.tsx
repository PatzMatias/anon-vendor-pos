import { type ReactElement } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
// import { getServerAuthSession } from "~/server/auth";
import type { GetServerSidePropsContext } from "next";
import type { OrderInfo } from '~/pages/api/orders';
import type { OrderData } from '~/pages/api/orders/[id]';
import DashboardLayout from "~/components/layout/DashboardLayout";
import CustomHead from '~/components/ui/CustomHead';
import DashboardPageHeader from '~/components/ui/DashboardPageHeader';
import Invoice from '~/components/ui/PDFParts/Invoice';

interface IProps {
  order: OrderInfo
}

// Create Document Component
export default function PrintOrder({
  order
}: IProps) {
  
  return (
    <>
      <CustomHead title={`Generating a receipt`} />
      <section className="container grid mx-auto px-6">
        <DashboardPageHeader title='Generating a receipt' />
        {
          order === null && (<div>Loading file...</div>)
        }
        {
          order !== null && (
            <PDFViewer className={`w-full h-screen`}>
              <Invoice order={order} />
            </PDFViewer>
          )
          
        }
      </section>
    </>
  )
};

PrintOrder.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const session = await getServerAuthSession(context);
  
  // try {
  //   if (session) {
      const query = context.query;
        const res = await fetch(`http://localhost:3000/api/orders/${query.orderId as string}`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        })

        const orderData = await res.json() as OrderData;
      
        const order: OrderInfo | null = orderData.results ?? null;

      return {
        props: {
          order
        }
      };
  //   }
  // } catch(e) {
  //   return {
  //     props: {
  //       order: null
  //     }
  //   };
  // }
}