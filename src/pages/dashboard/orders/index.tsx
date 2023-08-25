import type { ReactElement } from "react";
import DashboardLayout from "~/components/layout/DashboardLayout";
import CustomHead from "~/components/ui/CustomHead";
import DashboardPageHeader from "~/components/ui/DashboardPageHeader";
import type { OrdersData, OrderInfo } from "~/pages/api/orders";
import { getServerAuthSession } from "~/server/auth";
import type { GetServerSidePropsContext } from "next";
import DataTable from "~/components/table-parts/orders/data-table";
import { columns } from "~/components/table-parts/orders/columns";

interface IProps {
  orders: OrderInfo[]
}

export default function Order({orders}: IProps) {

  return (
    <>
      <CustomHead title={`Orders`} description="The system's orders management page" />
      <section className="container grid px-6 mx-auto">
        <DashboardPageHeader title="Orders" description="Create and manage your orders here."/>
        <div className="grid grid-cols-1">
          <DataTable columns={columns} data={orders} />
        </div>
      </section>
    </>
    
  );
}


Order.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context);
  
  try {
    if (session) {
        const res = await fetch('http://localhost:3000/api/orders', {
          method: 'GET',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        })

        const ordersData = await res.json() as OrdersData;
      
        const orders: OrderInfo[] = ordersData.results ?? [];

      return {
        props: {
          orders
        }
      };
    }
  } catch(e) {
    return {
      props: {
        orders: []
      }
    };
  }
}