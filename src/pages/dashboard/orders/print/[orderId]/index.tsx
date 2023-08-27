import { useEffect, type ReactElement, useState, useCallback } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { getServerAuthSession } from "~/server/auth";
import type { GetServerSidePropsContext } from "next";
import type { OrderInfo } from '~/pages/api/orders';
import type { OrderData } from '~/pages/api/orders/[id]';
import DashboardLayout from "~/components/layout/DashboardLayout";
import CustomHead from '~/components/ui/CustomHead';
import DashboardPageHeader from '~/components/ui/DashboardPageHeader';
import Invoice from '~/components/ui/PDFParts/Invoice';
import { env } from '~/env.mjs';
import { useRouter } from 'next/router';
import { error } from 'console';
import { Skeleton } from '~/components/ui/Skeleton';
env

interface IProps {
  order: OrderInfo
}

type orderState = {
  data: OrderInfo  | null,
  loading: boolean,
  error: boolean
}

// Create Document Component
export default function PrintOrder() {

  const router = useRouter();
  const params = router.query;
  const { orderId } = params;
  const [order, setOrder] = useState<orderState>({
    data: null,
    loading: false,
    error: false,
  });

  const handleSetOrder = (newState: {}) => {
    setOrder((prevState: any) => ({...prevState, ...newState}))
  }

  const getOrder = useCallback(async() => {
    handleSetOrder({loading: true})
    try {
        console.log("trying order data", orderId);
        const res = await fetch(`${env.NEXT_PUBLIC_ROOT_URL}/api/orders/${orderId}`, {
          method: 'GET',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        })
  
        const orderData = await res.json() as OrderData;

        const order: OrderInfo | null = orderData.results ?? null;
        setTimeout(() => {handleSetOrder({data: order, loading: false});}, 1500);
        
        return order;
    } catch(e) {
      handleSetOrder({data: null, loading: false, error: true});
      return null;
    }
  }, [order.data, order.loading, order.error])

  useEffect(() => {
    if(order.data === null && order.data !== true && order.loading === false ) {
      getOrder();
    }
  }, [getOrder])
  
  return (
    <>
      <CustomHead title={`Generating a receipt`} />
      <section className="container grid mx-auto px-6">
        <DashboardPageHeader title='Generating a receipt' />
        {
          order.data === null && order.loading && (<Skeleton className="w-full h-screen" />)
        }
                {
          order.data === null && order.error && (<div>There was a problem loading the file...</div>)
        }
        {
          order.data !== null && (
            <PDFViewer className={`w-full h-screen`}>
              <Invoice order={order.data} />
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