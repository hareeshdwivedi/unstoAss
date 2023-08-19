import React, { useState, } from 'react';

const AppContext = React.createContext();

const AppContextProvider = ({ children, initialValue = {} }) => {
	const [isDesktop, setIsDesktop] = useState()

	const value = {
		...initialValue,
		isDesktop,
		setIsDesktop
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppState = () => {
	const context = React.useContext(AppContext);
	if (context === undefined) {
		throw new Error('useState must be used within a AppContextProvider');
	}
	return context;
};

export { AppContextProvider, useAppState };
