import Head from "next/head";
import { APP_STRINGS } from "~/constants/app-strings";

interface IProps {
  title: string; // ^? The title of the page
  description?: string; // Description of the page's content
}

export default function CustomHead({
  title,
  description
}: IProps) {
  return (
    <Head>
      <title>{title} - {APP_STRINGS.site_title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}