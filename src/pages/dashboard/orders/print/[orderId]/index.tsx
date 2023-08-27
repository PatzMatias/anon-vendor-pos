import { useEffect, type ReactElement, useState, useCallback } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import type { OrderInfo } from '~/pages/api/orders';
import type { OrderData } from '~/pages/api/orders/[id]';
import DashboardLayout from "~/components/layout/DashboardLayout";
import CustomHead from '~/components/ui/CustomHead';
import DashboardPageHeader from '~/components/ui/DashboardPageHeader';
import Invoice from '~/components/ui/PDFParts/Invoice';
import { env } from '~/env.mjs';
import { useRouter } from 'next/router';
import { Skeleton } from '~/components/ui/Skeleton';
env

// interface IProps {
//   order: OrderInfo
// }

type OrderState = {
  data?: OrderInfo  | null,
  loading?: boolean,
  error?: boolean
}

// Create Document Component
export default function PrintOrder() {

  const router = useRouter();
  const params = router.query;
  const { orderId } = params;
  const [order, setOrder] = useState<OrderState>({
    data: null,
    loading: false,
    error: false,
  });

  const handleSetOrder = (newState: OrderState) => {
    setOrder((prevState: OrderState) => ({...prevState, ...newState}))
  }

  const getOrder = useCallback(() => {
    const fetchOrder = async () => {
      handleSetOrder({loading: true})
      const res = await fetch(`${env.NEXT_PUBLIC_ROOT_URL}/api/orders/${orderId as string}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      })

      if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const orderData = await res.json() as OrderData;

      const order: OrderInfo | null = orderData.results ?? null;
      handleSetOrder({data: order, loading: false});
    }

    fetchOrder().catch((e) => {
      console.error(e)
    })
  }, [orderId])

  useEffect(() => {
    if(order.data === null && order.error !== true && order.loading === false ) {
      getOrder();
    }
  }, [getOrder, order.data, order.loading, order.error])
  
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