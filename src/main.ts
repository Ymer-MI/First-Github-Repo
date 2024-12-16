import "./style.css";
import { e as elements } from "./helpers/elementCreationHelpers";

const DEFAULT_HEADING_CLASSES = elements.settings.defaultHeadingClass.set('heading'), formID = 'testForm';

  console.log(
    {DEFAULT_HEADING_CLASSES: DEFAULT_HEADING_CLASSES},
    {elements_settings_defaultHeadingClass_get: elements.settings.defaultHeadingClass.get()}
  );

  document.getElementById("app")?.append(
    elements.heading.primary(`Test`, 'primary'),
    elements.heading.secondary(`Testing that the element helpers are working`),
    elements.form.input('placeholderTest', 'text', 'Placeholder'),
    elements.form.input('emailTest', 'email', 'some.email@mail.com', true),
    elements.form.input('checkboxTrueTest', 'checkbox', true),
    elements.form.input('checkboxFalseTest', 'checkbox'),
    elements.form.button('Button'),
    elements.form.base({
      inputs: [
        elements.form.input('basicTestInArray'),
        elements.form.input('emailTestInArray', 'email', 'some.email@mail.com'),
        elements.form.input('checkboxTestInArray', 'checkbox')
      ],
      buttons: [
        elements.form.button('Secound Button')
      ],
      labels: [
        elements.form.label('Text:', 'basicTestInArray'),
        elements.form.label('Email:', 'emailTestInArray'),
        elements.form.label('Checkbox:', 'checkboxTestInArray')
      ]}, undefined, 'form', formID),
      elements.img('/src/img/todo_list.svg', 'Todo list', 200, 200)
  );