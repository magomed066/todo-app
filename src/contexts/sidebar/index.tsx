import { createContext, FC, ReactNode, useState } from 'react'

interface ISidebarContext {
	toggleSidebar(): void
	opened: boolean
}

const empty = () => {}

const initialContext: ISidebarContext = {
	toggleSidebar: empty,
	opened: true,
}

export const SidebarContext = createContext<ISidebarContext>(initialContext)

export const SidebarProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [opened, setOpened] = useState(true)

	const toggleSidebar = () => setOpened((prev) => !prev)

	const value = {
		opened,
		toggleSidebar,
	}

	return (
		<SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
	)
}
