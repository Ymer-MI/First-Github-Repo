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
        return Object.assign(e.toLowerCase() === 'input' ? el as HTMLInputElement : el as HTMLButtonElement, {
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
            primary: (text: HTMLHeadingElement['innerHTML'], basicAttributes?: BasicAttributes) => {
                return createHeading(1, text, basicAttributes);
            },
            secondary: (text: HTMLHeadingElement['innerHTML'], basicAttributes?: BasicAttributes) => {
                return createHeading(2, text, basicAttributes);
            },
            tertiary: (text: HTMLHeadingElement['innerHTML'], basicAttributes?: BasicAttributes) => {
                return createHeading(3, text, basicAttributes);
            },
            quaternary: (text: HTMLHeadingElement['innerHTML'], basicAttributes?: BasicAttributes) => {
                return createHeading(4, text, basicAttributes);
            },
            quinary: (text: HTMLHeadingElement['innerHTML'], basicAttributes?: BasicAttributes) => {
                return createHeading(5, text, basicAttributes);
            },
            senary: (text: HTMLHeadingElement['innerHTML'], basicAttributes?: BasicAttributes) => {
                return createHeading(6, text, basicAttributes);
            },
        },
        div: (basicAttributes?: BasicAttributes) => {
            return createElement('div', basicAttributes) as HTMLDivElement;
        },
        ul: (basicAttributes?: BasicAttributes) => {
            return createElement('ul', basicAttributes) as HTMLUListElement;
        },
        li: (basicAttributes?: BasicAttributes) => {
            return createElement('li', basicAttributes) as HTMLLIElement;
        },
        span: (basicAttributes?: BasicAttributes) => {
            return createElement('span', basicAttributes) as HTMLSpanElement;
        },
        img: (src: HTMLImageElement['src'], alt: HTMLImageElement['alt'], width?: HTMLImageElement['width'], height?: HTMLImageElement['height'], basicAttributes?: BasicAttributes) => {
            return Object.assign(createElement('img', basicAttributes) as HTMLImageElement, {
                src: src,
                alt: alt || '',
                width: width,
                height: height
            });
        },
        form:{
            base: (elements?: {fieldset?: HTMLFieldSetElement[], labels?: HTMLLabelElement[], inputs?: HTMLInputElement[], buttons?: HTMLButtonElement[]}, action?: HTMLFormElement['action'], basicAttributes?: BasicAttributes) => {
                const f = Object.assign(createElement('form', basicAttributes) as HTMLFormElement, {
                    action: action || 'void();'
                });
                
                f.addEventListener('submit', e => {
                    e.preventDefault();
                })

                if (elements) {
                    if (elements.fieldset) {
                        f.append(...elements.fieldset)
                    }

                    if (elements.inputs) {
                        elements.labels && elements.inputs.length === elements.labels.length ? (() => {
                            for (let i = 0; i < elements.inputs.length; i++) { f.append(elements.labels[i], elements.inputs[i]); console.log('appended both');
                            }
                        })() : f.append(...elements.inputs);
                    }
                    
                    if (elements.buttons) {
                        f.append(...elements.buttons);
                    }
                }

                return f;
            },
            fieldset: (text: HTMLLegendElement['innerHTML'], elements?: {labels: HTMLLabelElement[], inputs: HTMLInputElement[], buttons?: HTMLButtonElement[]}, basicAttributes?: BasicAttributes) => {
                const f = createElement('fieldset', basicAttributes) as HTMLFieldSetElement;
                
                f.append(Object.assign(createElement('legend') as HTMLLegendElement, {
                    innerHTML: text
                }))

                if (elements) {
                    elements.inputs && elements.labels && elements.inputs.length === elements.labels.length ? (() => {
                        for (let i = 0; i < elements.inputs.length; i++) { f.append(elements.labels[i], elements.inputs[i]); console.log('appended both');
                         }
                    })() : f.append(...elements.inputs);
                }

                return f;
            },
            label: (text: HTMLLabelElement['innerHTML'], forInput: HTMLLabelElement['htmlFor'], basicAttributes?: BasicAttributes) => {
                return Object.assign(createElement('label', basicAttributes) as HTMLLabelElement, {
                    innerHTML: text, 
                    htmlFor: forInput
                });
            },
            input: (name: HTMLInputElement['name'], type?: HTMLInputElement['type'], optionalAttributes?: {value?: HTMLInputElement['value'], isValue?: boolean}, basicAttributes?: BasicAttributes) => {
                return Object.assign(createInpOrBtn('input', type || 'text', basicAttributes) as HTMLInputElement, {
                    name: name,
                    value: optionalAttributes?.isValue && typeof optionalAttributes?.value === 'string' ? optionalAttributes?.value : '',
                    placeholder: !optionalAttributes?.isValue && typeof optionalAttributes?.value === 'string' ? optionalAttributes?.value : '',
                    checked: optionalAttributes?.value?.toLowerCase() === 'true' ? true : false 
                });
            },
            button: (text: HTMLButtonElement['innerHTML'], type?: HTMLButtonElement['type'], basicAttributes?: BasicAttributes) => {
                return Object.assign(createInpOrBtn('button', type || 'button', basicAttributes) as HTMLButtonElement, {
                    innerHTML: text || ''
                });
            }
        }
    }
})();