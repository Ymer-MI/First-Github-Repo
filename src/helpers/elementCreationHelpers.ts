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
        img: (src: string, alt: string, width?: number, height?: number, className?: string, id?: string) => {
            return Object.assign(createElement('img', '', className, id) as HTMLImageElement, {
                src: src,
                alt: alt || '',
                width: width,
                height: height
            });
        },
        form: (elements?: {inputs: HTMLInputElement[], buttons?: HTMLButtonElement[], labels?: HTMLLabelElement[]}, action = 'void();', className?: string, id?: string) => {
            const f = Object.assign(createElement('form', '', className, id) as HTMLFormElement, {
                action: action
            });
            
            if (elements) {
                elements.inputs && elements.labels && elements.inputs.length === elements.labels.length ? (() => {
                    for (let i = 0; i < elements.inputs.length; i++) { f.append(elements.labels[i], elements.inputs[i]) }
                })() : f.append(...elements.inputs);

                if (elements.buttons) {
                    f.append(...elements.buttons);
                }
            }

            return f;
        },
        label: (text: string, forInput: string, className?: string, id?: string) => {
            const l = createElement('label', text, className, id) as HTMLLabelElement

            l.setAttribute('for', forInput);

            return l;
        },
        input: (name: string, type = 'text', value?: string | boolean, isValue = false, className?: string, id?: string) => {
            return Object.assign(createInpOrBtn('input', type, className, id) as HTMLInputElement, {
                name: name,
                value: isValue && typeof value === 'string' ? value : '',
                placeholder: !isValue && typeof value === 'string' ? value : '',
                checked: typeof value === 'boolean' ? value : false 
            });
        },
        button: (text: string, type = 'button', className?: string, id?: string) => {
            return Object.assign(createInpOrBtn('button', type, className, id) as HTMLButtonElement, {
                innerHTML: text || ''
            });
        }
    }
})();