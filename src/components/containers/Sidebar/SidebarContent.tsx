import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "~/lib/utils";
import { APP_STRINGS } from "~/constants/app-strings";
import styles from "./style.module.css";
import { DASHBOARD_MAINROUTE_DETAILS, type ROUTE_DETAIL } from "~/definitions/routes";

interface IProps {
  isSideBarOpen?: boolean,
  closeSidebar?: () => void
}

export default function SidebarContent({}: IProps) {

  const router = useRouter();
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
        <Link className={styles.app_title} href="/dashboard">
          {APP_STRINGS.site_title}
        </Link>
      <ul className="mt-6">
          {
            Object.entries(DASHBOARD_MAINROUTE_DETAILS).map(([key, route]: [string, ROUTE_DETAIL], index: number)=> {

              const path = route.path;
              const defaultLinkClass = styles.nav_menu_item

              const linkClass = cn(defaultLinkClass, "flex gap-4 items-center")

              return (
                <li className="relative px-6 py-3" key={`${key}_${index}`}>
                  <Link className={linkClass} href={path}>
                    {
                      router.pathname === path && (
                        <span
                        className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                        aria-hidden="true" />
                      )
                    }
                    <span>
                      {route.icon()}
                    </span>
                    <span>{route.label}</span>
                  </Link>
                </li>
              )
            })
          }
      </ul>
    </div>
  )

}