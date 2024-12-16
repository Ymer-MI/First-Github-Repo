import { BasicAttributes } from "./IBasicAttributes";

export const e = (() => {
    const DEFAULTS = {
        HEADING_CLASS: '' as HTMLElement['className']
    }, createElement = (e: HTMLElement['tagName'], bA?: BasicAttributes) => Object.assign(document.createElement(`${e}`), {
            id: bA?.id || '',
            className: bA?.className || ''
        }),
    createHeading = (n: number, t: HTMLHeadingElement['innerHTML'], bA?: BasicAttributes) => Object.assign(createElement(`h${n}`, {className: `${DEFAULTS.HEADING_CLASS} ${bA?.className || ''}`.trim(), id: bA?.id || ''}) as HTMLHeadingElement, {innerHTML: t || ''}), 
    createInpOrBtn = (e: HTMLInputElement['tagName'] | HTMLButtonElement['tagName'], t?: HTMLInputElement['type'] | HTMLButtonElement['type'], bA?: BasicAttributes) => {
        const el = createElement(e, bA);
        return Object.assign(e === 'input' ? el as HTMLInputElement : el as HTMLButtonElement, {
            type: t || ''
        })
    }

    return {
        settings: {
            defaultHeadingClass: {
                set: (className: HTMLElement['className']) => DEFAULTS.HEADING_CLASS = className,
                get: () => DEFAULTS.HEADING_CLASS
            }
        },
        heading: {
            primary: (text: HTMLHeadingElement['innerHTML'], BasicAttributes?: BasicAttributes) => {
                return createHeading(1, text, BasicAttributes);
            },
            secondary: (text: HTMLHeadingElement['innerHTML'], BasicAttributes?: BasicAttributes) => {
                return createHeading(2, text, BasicAttributes);
            },
            tertiary: (text: HTMLHeadingElement['innerHTML'], BasicAttributes?: BasicAttributes) => {
                return createHeading(3, text, BasicAttributes);
            },
            quaternary: (text: HTMLHeadingElement['innerHTML'], BasicAttributes?: BasicAttributes) => {
                return createHeading(4, text, BasicAttributes);
            },
            quinary: (text: HTMLHeadingElement['innerHTML'], BasicAttributes?: BasicAttributes) => {
                return createHeading(5, text, BasicAttributes);
            },
            senary: (text: HTMLHeadingElement['innerHTML'], BasicAttributes?: BasicAttributes) => {
                return createHeading(6, text, BasicAttributes);
            },
        },
        div: (BasicAttributes?: BasicAttributes) => {
            return createElement('div', BasicAttributes) as HTMLDivElement;
        },
        ul: (BasicAttributes?: BasicAttributes) => {
            return createElement('ul', BasicAttributes) as HTMLUListElement;
        },
        li: (BasicAttributes?: BasicAttributes) => {
            return createElement('li', BasicAttributes) as HTMLLIElement;
        },
        span: (BasicAttributes?: BasicAttributes) => {
            return createElement('span', BasicAttributes) as HTMLSpanElement;
        },
        img: (src: HTMLImageElement['src'], alt: HTMLImageElement['alt'], width?: HTMLImageElement['width'], height?: HTMLImageElement['height'], BasicAttributes?: BasicAttributes) => {
            return Object.assign(createElement('img', BasicAttributes) as HTMLImageElement, {
                src: src,
                alt: alt || '',
                width: width,
                height: height
            });
        },
        form:{
            base: (elements?: {inputs: HTMLInputElement[], buttons: HTMLButtonElement[], labels: HTMLLabelElement[]}, action?: HTMLFormElement['action'], BasicAttributes?: BasicAttributes) => {
                const f = Object.assign(createElement('form', BasicAttributes) as HTMLFormElement, {
                    action: action || 'void();'
                });
                
                f.addEventListener('submit', e => {
                    e.preventDefault();
                })

                if (elements) {
                    elements.inputs && elements.labels && elements.inputs.length === elements.labels.length ? (() => {
                        for (let i = 0; i < elements.inputs.length; i++) { f.append(elements.labels[i], elements.inputs[i]); console.log('appended both');
                         }
                    })() : f.append(...elements.inputs);

                    if (elements.buttons) {
                        f.append(...elements.buttons);
                    }
                }

                return f;
            },
            label: (text: HTMLLabelElement['innerHTML'], forInput: HTMLLabelElement['htmlFor'], BasicAttributes?: BasicAttributes) => {
                return Object.assign(createElement('label', BasicAttributes) as HTMLLabelElement, {
                    innerHTML: text, 
                    htmlFor: forInput
                });
            },
            input: (name: HTMLInputElement['name'], type?: HTMLInputElement['type'], optionalAttributes?: {value?: HTMLInputElement['value'], isValue?: boolean}, BasicAttributes?: BasicAttributes) => {
                return Object.assign(createInpOrBtn('input', type || 'text', BasicAttributes) as HTMLInputElement, {
                    name: name,
                    value: optionalAttributes?.isValue && typeof optionalAttributes?.value === 'string' ? optionalAttributes?.value : '',
                    placeholder: !optionalAttributes?.isValue && typeof optionalAttributes?.value === 'string' ? optionalAttributes?.value : '',
                    checked: optionalAttributes?.value?.toLowerCase() === 'true' ? true : false 
                });
            },
            button: (text: HTMLButtonElement['innerHTML'], type?: HTMLButtonElement['type'], BasicAttributes?: BasicAttributes) => {
                return Object.assign(createInpOrBtn('button', type || 'button', BasicAttributes) as HTMLButtonElement, {
                    innerHTML: text || ''
                });
            }
        }
    }
})();