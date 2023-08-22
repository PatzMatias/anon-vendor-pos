import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "~/lib/utils";
import { APP_STRINGS } from "~/constants/app-strings";
import styles from "./style.module.css";

export const ROUTES = {
  '/dashboard': "Dashboard",
  '/dashboard/admin': "Admin",
  '/dashboard/kiosk': "Kiosk",
  '/dashboard/user': "User",
}

export default function SidebarContent() {

  const router = useRouter();
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Link className={styles['app_title']} href="/dashboard">
        {APP_STRINGS.site_title}
      </Link>
      <ul className="mt-6">
          {
          Object.entries(ROUTES)
            .map(([href, label]: [string, string]) => {

              const defaultLinkClass = styles['nav-menu-item']
              const activeLinkClass = "text-gray-800 dark:text-gray-100"

              const linkClass = cn(defaultLinkClass, {
                [activeLinkClass]: router.pathname === href
              })

              return (
                <li className="relative px-6 py-3" key={href}>
                  <Link className={linkClass} href={href}>
                    {
                      router.pathname === href && (
                        <span
                        className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true" />
                      )
                    }
                    <span>{label}</span>
                  </Link>
              </li>
              )
            })
          }
      </ul>
    </div>
  )

}