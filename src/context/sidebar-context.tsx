import React, { useState, useMemo, createContext, useContext } from 'react'
import { ChildProps } from '~/definitions/react'


// create context
export const SidebarContext = createContext<{
  isSidebarOpen: boolean,
  toggleSidebar: () => void,
  closeSidebar: () => void
}>({
  isSidebarOpen: false,
  toggleSidebar: () => {
    //do nothing
  },
  closeSidebar: () => {
    // do nothing
  }
})

export const useSidebar = () => useContext(SidebarContext);

export default function SidebarProvider({ children }: ChildProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen)
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
    }),
    [isSidebarOpen]
  )

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
