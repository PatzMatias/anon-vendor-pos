
import type { ReactElement } from "react";
import { ChildProps } from "~/definitions/react";
import Head from "next/head";

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