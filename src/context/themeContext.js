import { createContext } from "react";

export const themeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {}
})