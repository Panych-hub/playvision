import type {Button} from "./Button";
export interface CardType{
    id: string,
    header: {
        info: string,
        exitButton?: boolean
    },
    body: {
        logo?: string,
        logoColor?: string ,
        title?: string,
        titleColor?: string,
        description: Array<string[]>,
    },
    footer: {
        buttons: Button[] | null
    }
}