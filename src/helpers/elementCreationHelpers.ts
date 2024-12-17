import { BasicAttributes } from "./IBasicAttributes";

export const e = (() => {
    const DEFAULTS = {
        HEADING_CLASS: '' as HTMLElement['className']
    },
    createElement = (e: HTMLElement['tagName'], bA?: BasicAttributes) => Object.assign(document.createElement(`${e}`), {id: bA?.id || '', className: bA?.className || ''}),
    createHeading = (n: number, t: HTMLHeadingElement['innerHTML'], bA?: BasicAttributes) => Object.assign(createElement(`h${n}`, {className: `${DEFAULTS.HEADING_CLASS} ${bA?.className || ''}`.trim(), id: bA?.id || ''}) as HTMLHeadingElement, {innerHTML: t || ''}),
    setScaleImgOrVideo = (e: HTMLImageElement | HTMLVideoElement, width?: HTMLImageElement['width'] | HTMLVideoElement['width'], height?: HTMLImageElement['height'] | HTMLVideoElement['height']) => {
        if (width) {
            e.width = width;
        }

        if (height) {
            e.height = height;
        }
    },
    createInpOrBtn = (e: HTMLInputElement['tagName'] | HTMLButtonElement['tagName'], t?: HTMLInputElement['type'] | HTMLButtonElement['type'], bA?: BasicAttributes) => {
        const el = createElement(e, bA);
        return Object.assign(e.toLowerCase() === 'input' ? el as HTMLInputElement : el as HTMLButtonElement, {
            type: t || ''
        })
    },
    appendInputsAndLabels = (e: HTMLFormElement | HTMLFieldSetElement, elements: {labels?: HTMLLabelElement[], inputs: HTMLInputElement[]}) => {
        elements.inputs && elements.labels && elements.inputs.length === elements.labels.length ? elements.labels.forEach((item, index) => {
                e.append(item, elements.inputs[index]);
             }) : e.append(...elements.inputs);
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
        img: (src: HTMLImageElement['src'], alt: HTMLImageElement['alt'], optionalAttributes?: {width?: HTMLImageElement['width'], height?: HTMLImageElement['height']}, basicAttributes?: BasicAttributes) => {
            const i = Object.assign(createElement('img', basicAttributes) as HTMLImageElement, {
                src: src,
                alt: alt || ''
            });

            setScaleImgOrVideo(i, optionalAttributes?.width, optionalAttributes?.height);
            
            return i; 
        },
        video: (src: HTMLVideoElement['src'], optionalAttributes?: {width?: HTMLImageElement['width'], height?: HTMLImageElement['height']}, basicAttributes?: BasicAttributes) => {
            const v = Object.assign(createElement('video', basicAttributes) as HTMLVideoElement, {
                src: src,
                controls: true
            });

            setScaleImgOrVideo(v, optionalAttributes?.width, optionalAttributes?.height);

            return v;
        },
        form:{
            base: (elements?: {fieldset?: HTMLFieldSetElement[], labels?: HTMLLabelElement[], inputs?: HTMLInputElement[], buttons?: HTMLButtonElement[]}, action?: HTMLFormElement['action'], basicAttributes?: BasicAttributes) => {
                const f = Object.assign(createElement('form', basicAttributes) as HTMLFormElement, {
                    action: action || 'void();'
                });
                
                f.addEventListener('submit', e => {
                    e.preventDefault();
                })

                if (elements?.fieldset) {
                    f.append(...elements.fieldset)
                }

                if (elements?.inputs) {
                    appendInputsAndLabels(f, {labels: elements.labels, inputs: elements.inputs});
                }
                
                if (elements?.buttons) {
                    f.append(...elements.buttons);
                }

                return f;
            },
            fieldset: (text: HTMLLegendElement['innerHTML'], elements?: {labels?: HTMLLabelElement[], inputs: HTMLInputElement[], buttons?: HTMLButtonElement[]}, basicAttributes?: BasicAttributes) => {
                const f = createElement('fieldset', basicAttributes) as HTMLFieldSetElement;
                
                f.append(Object.assign(createElement('legend') as HTMLLegendElement, {
                    innerHTML: text
                }));
                
                if (elements) {
                    appendInputsAndLabels(f, {labels: elements?.labels, inputs: elements?.inputs});
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