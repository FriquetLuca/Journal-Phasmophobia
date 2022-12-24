import { LazyInteractivity } from "@lazy-toolbox/client";
import { initializeGhosts } from "./initializeGhosts";
import { EvidenceRenderer } from "./renderer/evidenceRenderer";
const initializeMenu = () => {
    LazyInteractivity.loadDefault();
    EvidenceRenderer.optionBehaviour();
};
initializeMenu();
initializeGhosts();