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
    elements.input('placeholderTest', 'text', 'Placeholder'),
    elements.input('emailTest', 'email', 'some.email@mail.com', true),
    elements.input('checkboxTrueTest', 'checkbox', true),
    elements.input('checkboxFalseTest', 'checkbox'),
    elements.button('Button'),
    elements.form({
      inputs: [
        elements.input('basicTestInArray'),
        elements.input('emailTestInArray', 'email', 'some.email@mail.com'),
        elements.input('checkboxTestInArray', 'checkbox')
      ],
      buttons: [
        elements.button('Secound Button')
      ],
      labels: [
        elements.label('Text:', 'basicTestInArray'),
        elements.label('Email:', 'emailTestInArray'),
        elements.label('Checkbox:', 'checkboxTestInArray')
      ]}, undefined, 'form', formID),
      elements.img('/src/img/todo_list.svg', 'Todo list', 200, 200)
  );