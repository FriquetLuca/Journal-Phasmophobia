import { interactiveDatabase } from "../db/interactiveDatabase";
export class EvidenceRenderer {
    public static optionBehaviour() {
        const evidences = document.getElementsByClassName('evidenceInput');
        for(const evidence of evidences) {
            evidence.addEventListener("change", interactiveDatabase.triggerEvidence);
        }
        const evidenceGivenCount = document.getElementById('evidencesCount');
        evidenceGivenCount?.addEventListener("change", (e) => {
            const target = <HTMLInputElement>e.target;
            const evidenceCount = Number(target.value);
            if(evidenceCount == 0) {
                const hideAll = document.getElementsByClassName('evidence');
                for(const hide of hideAll) {
                    const currentElement = <HTMLTableRowElement>hide;
                    if(!currentElement.classList.contains("ghost-orb")) {
                        currentElement.style.display = "none";
                    }
                }
            } else {
                const showAll = document.getElementsByClassName('evidence');
                for(const show of showAll) {
                    const currentElement = <HTMLTableRowElement>show;
                    currentElement.style.display = "table-row";
                }
            }
            interactiveDatabase.resetEvidences();
        });
        const ghostSpeed = <HTMLSelectElement>document.getElementById('ghostSpeed');
        ghostSpeed.addEventListener("change", interactiveDatabase.triggerGhostSpeedRender);
        const subEvidences = document.getElementsByClassName('subevidenceInput');
        for(const subEvidence of subEvidences) {
            subEvidence.addEventListener("change", interactiveDatabase.triggerEvidence);
        }
        const btnReset = <HTMLButtonElement>document.querySelector('.resetMenuBtn');
        btnReset.addEventListener('click', interactiveDatabase.resetEvidences);
    }
}