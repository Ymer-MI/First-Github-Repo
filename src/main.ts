import "./style.css";
import { e as elements } from "./helpers/elementCreationHelpers";

document.getElementById("app")?.append(
    elements.heading.primary(`Test`, 'primary'), 
    elements.heading.secondary(`Testing that the element helpers are working`),
    elements.input('text', 'Placeholder'),
    elements.input('email', 'ymer.nordstrom@medieinstitutet.se', true),
    elements.input('checkbox', true, true),
    elements.button('Button')
  );