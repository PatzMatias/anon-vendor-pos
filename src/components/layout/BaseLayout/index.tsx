
import type { ReactElement } from "react";
import type { ChildProps } from "~/definitions/react";

interface IProps extends ChildProps {}

export function BaseLayout({ children }: IProps): ReactElement {
  return (
    <>
      {children}
    </>
  )
}

export function ApplyBaseLayout(page: ReactElement) {
  return (
    <BaseLayout>{page}</BaseLayout>
  )
}