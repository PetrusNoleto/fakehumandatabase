import { ReactNode } from "react"

export interface humanDatabaseProps{
    humanApiId:string
    humanIndentification: string
    humanName: string 
    humanAge: number
    humanGender: string
    humanEmail: string
    humanPhone: string
    humanLocation: humanDatabaseLocationProps[]
    humanLogin:humanDatabaseLoginProps[]
}
export interface humanDatabaseLoginProps {
    humanUserName:string;
    humanPassword:string;
}
export interface humanDatabaseLocationProps{
    humanStreetName: string
    humanStreetNumber: number
    humanCountry: string
    humanState: string
    humanPostalCode:string
}

export interface childrenProps{
    children?:ReactNode
}
export interface siteInterface {
    siteName:string
}

export interface flagProps{
    flagId: number
    flagAbreviation: string
    flagName: string
    flagAdreess: string
    flagHref:string
}

export interface flagMenuItemProps{
    menuItemHref:string,
    menuItemImageAddress:string
    menuItemImageAltText:string
    menuItemName:string
}

export interface firstFlagDataProps{
    firstFlagId:number
    firstFlagName:string,
    firstFlagAdress: string,
    fistFlagHref: string
}


export interface nationFlagProps{
    flagID:number,
    flagAbrev:string,
    flagName:string,
    flagAddress:string
}