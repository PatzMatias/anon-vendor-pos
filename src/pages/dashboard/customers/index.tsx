import type { ReactElement } from "react";
import DashboardLayout from "~/components/layout/DashboardLayout";
import CustomHead from "~/components/ui/CustomHead";
import DashboardPageHeader from "~/components/ui/DashboardPageHeader";
import TableSkeleton from "~/components/containers/TableSkeleton";
import DataTable from "~/components/table-parts/customers/data-table";
import { columns } from "~/components/table-parts/customers/columns";
import { useSession } from "next-auth/react";
import { api } from "~/lib/utils/api";

// import { getServerAuthSession } from "~/server/auth";
// import type { GetServerSidePropsContext } from "next";
// import type { CustomerInfo, CustomersData } from "~/pages/api/customers";
// import { env } from "~/env.mjs";

// interface IProps {
//   customers: CustomerInfo[];
// }

export default function Customers() {  
  const { data: session } = useSession();

  const {
    data: customers, 
    isLoading, 
    isSuccess
  } = api.customers.list.useQuery(
      undefined, 
      { enabled: session?.user !== undefined }
    );

  return (
    <>
      <CustomHead title={`Customers`} description="Manage your customers' information here." />
      <section className="container grid px-6 mx-auto">
        <DashboardPageHeader title="Customers" description="Manage your customers' information here."/>
        <div className="grid grid-cols-1">
          {isLoading && <TableSkeleton columnCount={2}/>}
          {isSuccess && <DataTable columns={columns} data={customers} />}
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

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await getServerAuthSession(context);
  
//   try {
//     if (session) {
//       const res = await fetch(`${env.NEXT_PUBLIC_ROOT_URL}/api/customers`, {
//         method: 'GET',

//         headers: {
//           'content-type': 'application/json;charset=UTF-8',
//         },
//       })
      
//       const customersData = await res.json() as CustomersData;
  
//       const customers: CustomerInfo[] = customersData.results ?? [];

//       return {
//         props: {
//           customers
//         }
//       };
//     }
//   } catch(e) {
//     return {
//       props: {
//         customers: []
//       }
//     };
//   }
// }