import React, { createContext, useContext, useState, useEffect } from "react";

const ResponsivenessContext = createContext();

export function useResponsiveness () {
    return useContext(ResponsivenessContext);
}

export function ResponsivenessProvider ({children}) {

    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 576);

    useEffect(
        () => {
            function handleResize() {
                setIsMobileView(window.innerWidth < 576);
            }
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);

        }, []
    );

    return (
        <ResponsivenessContext.Provider value={{isMobileView}}>
            {children}
        </ResponsivenessContext.Provider>
    );

};
