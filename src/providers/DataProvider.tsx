import React, { createContext, Dispatch, SetStateAction, useMemo, useState } from "react";

interface IContext {
    activeStories: Array<string> | null;
    setActiveStories: Dispatch<SetStateAction<Array<string> | null>>;
}

export const DataContext = createContext<IContext>({} as IContext);

export const DataProvider: React.FC = ({ children }) => {
    const [activeStories, setActiveStories] = useState<Array<string> | null>(null);

    const value = useMemo(() => ({
        activeStories, setActiveStories
    }), [activeStories]);

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}