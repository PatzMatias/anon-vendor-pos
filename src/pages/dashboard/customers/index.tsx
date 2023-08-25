import type { ReactElement } from "react";
import DashboardLayout from "~/components/layout/DashboardLayout";
import CustomHead from "~/components/ui/CustomHead";
import DashboardPageHeader from "~/components/ui/DashboardPageHeader";
import { getServerAuthSession } from "~/server/auth";
import type { GetServerSidePropsContext } from "next";
import type { CustomerInfo, CustomersData } from "~/pages/api/customers";
import DataTable from "~/components/table-parts/customers/data-table";
import { columns } from "~/components/table-parts/customers/columns";

interface IProps {
  customers: CustomerInfo[];
}

export default function Customers({customers}: IProps) {

  return (
    <>
      <CustomHead title={`Customers`} description="Manage your customers' information here." />
      <section className="container grid px-6 mx-auto">
        <DashboardPageHeader title="Customers" description="Manage your customers' information here."/>
        <div className="grid grid-cols-1">
          <DataTable columns={columns} data={customers} />
        </div>
      </section>
    </>
    
  );
}


Customers.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerAuthSession(context);
  
  try {
    if (session) {
      const res = await fetch('http://localhost:3000/api/customers', {
        method: 'GET',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      })
      
      const customersData = await res.json() as CustomersData;
  
      const customers: CustomerInfo[] = customersData.results ?? [];

      return {
        props: {
          customers
        }
      };
    }
  } catch(e) {
    return {
      props: {
        customers: []
      }
    };
  }
}