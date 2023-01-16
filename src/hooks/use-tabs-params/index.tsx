import React, { useEffect, useState } from 'react'

const useTabsParams = (params: string) => {
	const [activeTab, setActiveTab] = useState(0)

	useEffect(() => {
		if (!params) {
			setActiveTab(0)
		}
	}, [params])

	return {
		activeTab,
	}
}

export default useTabsParams
