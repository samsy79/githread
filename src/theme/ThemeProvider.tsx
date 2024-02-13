/* import React from 'react';

//'use client ' // pour les versions antérieurs de faire le rendu coté client 

import { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemeProvider } from "next-themes"; //NextThemeProvider can be rename unfortunatly  ; that's a one utility of ThemeProvider
//(Cette ligne importe le composant ThemeProvider du package next-themes et le renomme localement en NextThemeProvider)


export const ThemeProvider = (props: ThemeProviderProps) => {

    //const { titre } = props;   --extraction de la propriété titre de props ; si il existe dans props 

    return (
        <div>
            <NextThemeProvider>{props.children}</NextThemeProvider>  Usage des children du composant importé 

        </div>
    );
};
 */




"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
