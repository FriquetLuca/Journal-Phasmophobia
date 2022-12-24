import { LazyAnimate } from "@lazy-toolbox/client";
import { GhostRenderer } from "./renderer/ghostRenderer";
export const initializeGhosts = (rndr = '100') => {
    const allRenderedGhosts = GhostRenderer.render(rndr);
    allRenderedGhosts.sort(function (a, b) {
        const idA = a.getAttribute('name') ?? '';
        const idB = b.getAttribute('name') ?? '';
        return idA.localeCompare(idB);
    });
    const ghostContainer = <HTMLDivElement>document.querySelector('.ghostsContainer');
    ghostContainer.innerHTML = "";
    for(let renderedGhost of allRenderedGhosts) {
        ghostContainer.appendChild(renderedGhost);
    }
    LazyAnimate.loadDefault();
};