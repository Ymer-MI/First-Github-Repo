export const e = (() => {
    const createElement = (e: string, t?: string, id?:string, cN?: string) => {
        return Object.assign(document.createElement(`${e}`), {
            innerHTML: t || "",
            id: id || "",
            className: cN || "" 
        }) as HTMLElement
    }, createHeading = (n: number, t: string, id?:string, cN?: string) => {
        return createElement(`h${n}`, t, id, cN) as HTMLHeadingElement
    }

    return {
        heading: {
            primary: (text: string, id?: string, className?: string) => {
                return createHeading(1, text, id, className);
            },
            secondary: (text: string, id?: string, className?: string) => {
                return createHeading(2, text, id, className);
            },
            tertiary: (text: string, id?: string, className?: string) => {
                return createHeading(3, text, id, className);
            }
        }
    }
})();