import type { ReactElement } from "react";
import FullPageLayout from "~/components/layout/FullPageLayout";
import { Button } from "~/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { 
  type ROUTE_DETAIL,
  DASHBOARD_MAINROUTE_DETAILS, 
} from "~/definitions/routes";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  const goToRoute = (href: string) => router.push(href);

  return (
    <section className="container grid px-6 mx-auto">
      <div className="mb-8">
        <h1>Welcome to the dashboard</h1>
      </div>

      <div className="cards grid grid-cols-1 md:grid-cols-1 gap-4">
        {
            Object.entries(DASHBOARD_MAINROUTE_DETAILS).map(([key, route]: [string, ROUTE_DETAIL], index: number)=> {

              const isOdd = index % 2 === 0;
              const cardClass = isOdd ? `bg-primary text-primary-foreground` : ``;
              const descriptionClass = isOdd ? `text-primary-foreground` : ``;
              const buttonVariant = isOdd ? `secondary` : `default`;
          
              return (
                <Card className={cardClass} key={`${key}_${index}`}>
                  <CardHeader>
                    <CardTitle>{route.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={descriptionClass}>
                      {route.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button className="flex items-center" variant={buttonVariant} onClick={() => goToRoute(route.path)}><span className="mr-1">Go</span><ArrowRight size={16} /></Button>
                  </CardFooter>
                </Card>
              )
            })
        }
      </div>
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <FullPageLayout header={true}>{page}</FullPageLayout>
  )
}