import type{ ChildProps } from "~/definitions/react";

interface IProps extends ChildProps {
  title: string;
  description?: string;
  custom?: boolean;
}

export default function DashboardPageHeader({
  title, 
  description,
  custom = false,
  children
}: IProps) {


  return (
    <div className="my-6">
      {!custom && (
        <>
          <h3>{title}</h3>
          {description && <p className="text-muted-foreground mt-0">{description}</p>}
        </>
      )}
      {custom && (children)}
    </div>
  )


}