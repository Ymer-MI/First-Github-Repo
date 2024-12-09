export const e = (() => {
    const createElement = (e: string, t?: string, cN?: string, id?:string) => {
        return Object.assign(document.createElement(`${e}`), {
            innerHTML: t || '',
            id: id || '',
            className: cN || ''
        })
    }, createHeading = (n: number, t: string, cN?: string, id?:string) => {
        return createElement(`h${n}`, t, `heading ${cN || ''}`.trim(), id) as HTMLHeadingElement
    }, createInpOrBtn = (e: string, str?: string, cN?: string, t?: string, id?: string) => {
        const el = createElement(e, cN, id);
        return Object.assign(e === 'input' ? el as HTMLInputElement : el as HTMLButtonElement, {
            innerHTML: str,
            type: t || ''
        })
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
        },
        div: (className?: string, id?: string) => {
            return createElement('div', className, id) as HTMLDivElement;
        },
        ul: (className?: string, id?: string) => {
            return createElement('ul', className, id) as HTMLUListElement;
        },
        li: (className?: string, id?: string) => {
            return createElement('li', className, id) as HTMLLIElement;
        },
        span: (className?: string, id?: string) => {
            return createElement('span', className, id) as HTMLSpanElement;
        },
        input: (type?: string, className?: string, id?: string) => {
            return createInpOrBtn('input', className, type || 'text', id) as HTMLInputElement;
        },
        button: (text: string, type?: string, className?: string, id?: string) => {
            return createInpOrBtn('button', text, className, type, id) as HTMLButtonElement;
        }
    }
})();