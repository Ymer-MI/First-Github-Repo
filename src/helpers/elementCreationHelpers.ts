export const e = (() => {
    const DEFAULTS = {
        HEADING_CLASS: ''
    }, createElement = (e: string, t?: string, cN?: string, id?:string) => Object.assign(document.createElement(`${e}`), {
            innerHTML: t || '',
            id: id || '',
            className: cN || ''
        }),
    createHeading = (n: number, t: string, cN?: string, id?:string) => createElement(`h${n}`, t, `${DEFAULTS.HEADING_CLASS} ${cN || ''}`.trim(), id) as HTMLHeadingElement, 
    createInpOrBtn = (e: string, t?: string, cN?: string, id?: string) => {
        const el = createElement(e, cN, id);
        return Object.assign(e === 'input' ? el as HTMLInputElement : el as HTMLButtonElement, {
            type: t || ''
        })
    }

    return {
        settings: {
            defaultHeadingClass: {
                set: (className: string) => DEFAULTS.HEADING_CLASS = className,
                get: () => DEFAULTS.HEADING_CLASS
            }
        },
        heading: {
            primary: (text: string, className?: string, id?: string) => {
                return createHeading(1, text, className, id);
            },
            secondary: (text: string, className?: string, id?: string) => {
                return createHeading(2, text, className, id);
            },
            tertiary: (text: string, className?: string, id?: string) => {
                return createHeading(3, text, className, id);
            },
            quaternary: (text: string, className?: string, id?: string) => {
                return createHeading(4, text, className, id);
            },
            quinary: (text: string, className?: string, id?: string) => {
                return createHeading(5, text, className, id);
            },
            senary: (text: string, className?: string, id?: string) => {
                return createHeading(6, text, className, id);
            },
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
        form: (inputs?: HTMLInputElement[], className?: string, id?: string) => {
            const f = createElement('form', '', className, id) as HTMLFormElement;
            
            inputs ? f.append(...inputs) : f;

            return f;
        },
        input: (type = 'text', value?: string | boolean, isValue = false, className?: string, id?: string) => {
            return Object.assign(createInpOrBtn('input', type, className, id) as HTMLInputElement, {
                value: isValue && typeof value === 'string' ? value : '',
                placeholder: !isValue && typeof value === 'string' ? value : '',
                checked: typeof value === 'boolean' ? value : false 
            });
        },
        button: ( text: string, type = 'button', className?: string, id?: string) => {
            return Object.assign(createInpOrBtn('button', type, className, id) as HTMLButtonElement, {
                innerHTML: text || ''
            });
        }
    }
})();