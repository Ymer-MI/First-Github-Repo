import "./style.css";
import { e as elements } from "./helpers/elementCreationHelpers";

document.getElementById("app")?.append(elements.heading.primary(`Hello World by Ymer Nordström 2024`), elements.heading.secondary(`This is the start of the project.`));