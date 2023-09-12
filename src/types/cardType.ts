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
        textConfig?: boolean,
        inputField?: boolean
    },
    footer: {
        buttons?: Button[] | null
    }
}