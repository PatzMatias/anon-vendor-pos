import { BaseLayout } from "~/components/layout/BaseLayout";
import type { ChildProps } from "~/definitions/react";
import Header from "~/components/containers/Header";


interface IProps extends ChildProps {
  header?: boolean;
}

export default function FullPageLayout({children, header}: IProps) {
  return (
    <BaseLayout>
      <div className={`flex h-screen bg-background dark:bg-gray-900`}>
        <div className="flex flex-col flex-1 w-full">
          {header && <Header noMenu={true} />}
          <main className="h-full overflow-y-auto">
              {children}
          </main>
        </div>
      </div>
    </BaseLayout>
  )
}