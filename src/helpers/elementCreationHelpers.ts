export const e = (() => {
    const createElement = (e: string, t?: string, cN?: string, id?:string) => {
        return Object.assign(document.createElement(`${e}`), {
            innerHTML: t || '',
            id: id || '',
            className: cN || ''
        })
    }, createHeading = (n: number, t: string, cN?: string, id?:string) => {
        return createElement(`h${n}`, t, `heading ${cN || ''}`.trim(), id) as HTMLHeadingElement
    }

    return {
        heading: {
            primary: (text: string, className?: string, id?: string) => {
                return createHeading(1, text, className, id);
            },
            secondary: (text: string, className?: string, id?: string) => {
                return createHeading(2, text, className, id);
            },
            tertiary: (text: string, className?: string, id?: string) => {
                return createHeading(3, text, className, id);
            }
        }
    }
})();