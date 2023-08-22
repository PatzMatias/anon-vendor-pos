import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";
import { ChildProps } from "~/definitions/react";
import { User, LogOut } from "lucide-react";
import { Button } from "~/components/ui/Button";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuShortcut
} from "~/components/ui/DropdownMenu";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface IProps extends ChildProps {

}

export default function Header({children}: IProps) {

  const {data: session, status} = useSession();
  const router = useRouter()

  useEffect(() => {
    if(status === "unauthenticated") router.push("/")
  }, [status]);

  return (
    <header className="z-40 py-4 bg-background shadow-bottom dark:bg-gray-800 text-center">
      <div className="container-fluid flex justify-end items-center px-6">
        <div className="user-options flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Avatar>
                  <AvatarImage src={session?.user.image ?? ""}/>
                  <AvatarFallback><User /></AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>{`Hello, ${session?.user.name?.split(" ")[0] ?? "User"}!`}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => signOut()}>
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