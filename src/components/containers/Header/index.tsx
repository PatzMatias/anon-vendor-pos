import { useSession } from "next-auth/react";
import { User, LogOut, Menu } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "~/components/ui/Button";
import type { ChildProps } from "~/definitions/react";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuGroup,
} from "~/components/ui/DropdownMenu";
import { signOut } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/Sheet"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";;
import SidebarContent from "~/components/containers/Sidebar/SidebarContent";
import { useSidebar } from "~/context/sidebar-context";
import { env } from "~/env.mjs";
import { cn } from "~/lib/utils";

interface IProps extends ChildProps {
  noMenu?: boolean
}

export default function Header({ children, noMenu = false }: IProps) {

  const {data: session } = useSession();

  const router = useRouter()

  const {isSidebarOpen, toggleSidebar, openSidebar} = useSidebar();

  useEffect(() => {
    router.events.on("routeChangeComplete" ,() => {
      setTimeout(() => {
        if(isSidebarOpen) toggleSidebar()
      },500)
  })
  }, [router.asPath, router.events, isSidebarOpen, toggleSidebar])

  const onSidebarOpen = (_open: boolean) => {
    openSidebar();
    toggleSidebar();
  };

  const menuTriggerClass = cn({
    [`hidden`]: noMenu
  })
  
  // console.log("session", session);

  // useEffect(() => {
  //   if(status === "unauthenticated") router.push("/")
  // }, [status]);

  return children ? (
  <header className="z-10 py-4 bg-background shadow-bottom dark:bg-gray-800 text-center">
    {children}
  </header>) : (
    <header className="z-10 py-4 bg-background shadow-bottom dark:bg-gray-800 text-center">
      <div className="container-fluid flex justify-between lg:justify-end items-center px-6 h-full mx-auto">
        <div className="sidebar-trigger lg:hidden">
          <Sheet open={isSidebarOpen} onOpenChange={onSidebarOpen}>
            <SheetTrigger asChild>
              <Button className={menuTriggerClass} size="icon" variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-64 px-0" side={"left"}>
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </div>
        <div className="user-options flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-8 w-8" variant="ghost" size="icon">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={session?.user.image ?? ""}/>
                  <AvatarFallback><User /></AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>{`Hello, ${session?.user.name?.split(" ")[0] ?? "User"}!`}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => signOut({callbackUrl: env.NEXT_PUBLIC_ROOT_URL})}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}