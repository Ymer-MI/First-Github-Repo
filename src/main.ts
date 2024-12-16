import "./style.css";
import { e as elements } from "./helpers/elementCreationHelpers";
import { BasicAttributes } from "./helpers/IBasicAttributes";

const DEFAULT_HEADING_CLASSES = elements.settings.defaultHeadingClass.set('heading'), formID = 'testForm';

console.log(
  {DEFAULT_HEADING_CLASSES: DEFAULT_HEADING_CLASSES},
  {elements_settings_defaultHeadingClass_get: elements.settings.defaultHeadingClass.get()}
);

document.getElementById("app")?.append(
  elements.heading.primary(`Test`, {className: 'primary'} as BasicAttributes),
  elements.heading.secondary(`Testing that the element helpers are working`),
  elements.form.input('placeholderTest', 'text', {value: 'Placeholder'}),
  elements.form.input('emailTest', 'email', {value: 'some.email@mail.com', isValue: true}),
  elements.form.input('checkboxTrueTest', 'checkbox', {value: 'true'}),
  elements.form.input('checkboxFalseTest', 'checkbox'),
  elements.form.button('Button'),
  elements.form.base({
    inputs: [
      elements.form.input('basicTestInArray'),
      elements.form.input('emailTestInArray', 'email', {value: 'some.email@mail.com'}),
      elements.form.input('checkboxTestInArray', 'checkbox')
    ],
    buttons: [
      elements.form.button('Reset', 'reset'),
      elements.form.button('Submit', 'submit')
    ],
    labels: [
      elements.form.label('Text:', 'basicTestInArray'),
      elements.form.label('Email:', 'emailTestInArray'),
      elements.form.label('Checkbox:', 'checkboxTestInArray')
    ]}, undefined, {className: 'form', id: formID} as BasicAttributes),
    elements.img('/src/img/todo_list.svg', 'Todo list', 200, 200)
);

document.getElementById(formID)?.addEventListener('submit', () => {
  console.log('Form submitted')
});
