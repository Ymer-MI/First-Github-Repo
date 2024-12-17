import { e as elements } from "./helpers/elementCreationHelpers";
import { BasicAttributes } from "./helpers/IBasicAttributes";

export const e = () => {
    const DEFAULT_HEADING_CLASSES = elements.settings.defaultHeadingClass.set('heading'), formID = 'testForm';

    console.log(
    {DEFAULT_HEADING_CLASSES: DEFAULT_HEADING_CLASSES},
    {elements_settings_defaultHeadingClass_get: elements.settings.defaultHeadingClass.get()}
    );

    document.getElementById('app')?.append(
    elements.heading.primary(`Test`, {className: 'primary'} as BasicAttributes),
    elements.heading.secondary(`Testing that the element helpers are working`),
    elements.form.input('placeholderTest', 'text', {value: 'Placeholder'}),
    elements.form.input('emailTest', 'email', {value: 'some.email@mail.com', isValue: true}),
    elements.form.input('checkboxTrueTest', 'checkbox', {value: 'true'}),
    elements.form.input('checkboxFalseTest', 'checkbox'),
    elements.form.button('Button'),
    elements.form.base({
        fieldset: [
        elements.form.fieldset('Legend 1:', {
            inputs: [
            elements.form.input('basicTestInArray'),
            elements.form.input('checkboxTestInArray', 'checkbox')
            ],
            labels: [
            elements.form.label('Text:', 'basicTestInArray'),
            elements.form.label('Checkbox:', 'checkboxTestInArray')
            ]
        }),
        elements.form.fieldset('Legend 2:', {
            inputs: [
            elements.form.input('emailTestInArray', 'email', {value: 'some.email@mail.com'})
            ],
            labels: [
            elements.form.label('Email:', 'emailTestInArray')
            ]
        })
        ],
        labels: [
        elements.form.label('Solve the captcha:', 'captcha')
        ],
        inputs: [
        elements.form.input('captcha')
        ],
        buttons: [
        elements.form.button('Reset', 'reset'),
        elements.form.button('Submit', 'submit')
        ]
    }, undefined, {className: 'form', id: formID} as BasicAttributes),
    elements.img('/src/img/todo_list.svg', 'Todo list', {width: 200}),
    elements.img('/src/img/todo_list.svg', 'Todo list'),
    elements.video('/src/video/The_Wrong_Way_To_Use_Healing_Magic_Ttrailer.mp4')
    );

    document.getElementById(formID)?.addEventListener('submit', () => {
    document.getElementById('app')?.append(
        elements.video('/src/video/Overlord_Opening.mp4', {width: document.documentElement.clientWidth, height: document.documentElement.clientHeight})
    );
    });
}