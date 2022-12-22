import { GhostRenderer } from "./ghostRenderer";
import { LazySlideContent } from "@lazy-toolbox/client";

const DivElement = GhostRenderer.normalSpeed();
document.body.appendChild(DivElement);

document.querySelectorAll('details[animated]').forEach((el) => {
    new LazySlideContent(<HTMLDetailsElement>el);
});