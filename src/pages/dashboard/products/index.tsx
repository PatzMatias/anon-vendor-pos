import type { ReactElement } from "react";
import { useSession } from "next-auth/react";
import DashboardLayout from "~/components/layout/DashboardLayout";
import CustomHead from "~/components/ui/CustomHead";
import DashboardPageHeader from "~/components/ui/DashboardPageHeader";
import TableSkeleton from "~/components/containers/TableSkeleton";
import DataTable from "~/components/table-parts/products/data-table";
import { columns } from "~/components/table-parts/products/columns";
import { api } from "~/lib/utils/api";

// import type { ProductData, ProductItem } from "~/pages/api/products";
// import { getServerAuthSession } from "~/server/auth";
// import type { GetServerSidePropsContext } from "next";
// import { env } from "~/env.mjs";

// interface IProps {
//   products: ProductItem[] | [];
// }

export default function Products() {
  const { data: session } = useSession();
  const {
    data: products, 
    isLoading, 
    isSuccess} = api.products.list.useQuery(
      undefined, 
      { enabled: session?.user !== undefined }
    );

  return (
    <>
      <CustomHead title={`Products`} description="The system's products management page" />
      <section className="container grid mx-auto px-6">
        <DashboardPageHeader title="Products" description="Add, edit, or delete your products here."/>
        <div className="grid grid-cols-1">
          {isLoading && <TableSkeleton columnCount={6} />}
          {isSuccess && <DataTable columns={columns} data={products} />}
        </div>
      </section>
    </>
  );
}


Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await getServerAuthSession(context);
  
//   try {
//     if (session) {
//       const res = await fetch(`${env.NEXT_PUBLIC_ROOT_URL}/api/products`, {
//         method: 'GET',
//         headers: {
//           'content-type': 'application/json;charset=UTF-8',
//         },
//       });

//       const productsData = await res.json() as ProductData;
//       const products: ProductItem[] = productsData.results ?? [];

//       return {
//         props: {
//           products: products
//         }
//       };
//    }
//   } catch(e) {
//     return {
//       props: {
//         products: []
//       }
//     };
//   }
// }