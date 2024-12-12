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
    elements.input('text', 'Placeholder'),
    elements.input('email', 'some.email@mail.com', true),
    elements.input('checkbox', true),
    elements.input('checkbox'),
    elements.button('Button'),
    elements.form([elements.input(), elements.input('email', 'some.email@mail.com'), elements.input('checkbox')], 'form', formID)
);

document.getElementById(formID)?.append(elements.button('Secound Button'))