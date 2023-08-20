import { BaseLayout } from "~/components/layout/BaseLayout";
import { ChildProps } from "~/definitions/react";

interface IProps extends ChildProps {}

export default function DashboardLayout({children}: IProps) {
  return (
    <BaseLayout>
      <div>sidebar</div>
      <div>
        <div>
          topbar
        </div>
        <main>
          {children}
        </main>
      </div>
    </BaseLayout>
  )
}