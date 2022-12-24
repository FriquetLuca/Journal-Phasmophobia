import { LazyTristate } from "@lazy-toolbox/client";
import { GHOST_DATABASE } from "./ghosts";
// const _EVIDENCE_DB = "phasmo_evidences";
export class Database {
    public static ghostDB = GHOST_DATABASE();
    public static evidenceIcons: {[name: string]: string} = {
        'dots': 'dots-projector.webp',
        'emf-5': 'emf-reader.webp',
        'fingerprints': 'fingerprints.webp',
        'freezing-temperatures': 'thermometer.webp',
        'ghost-orb': 'ghost-orb.webp',
        'ghost-writing': 'writing-book.webp',
        'spirit-box': 'spirit-box.webp'
    };
    public static getEvidences(): {[label: string]: string} {
        const allEvidences = <NodeListOf<HTMLInputElement>>document.querySelectorAll(".evidenceInput");
        const result: {[label: string]: string} = {};
        for(const evidence of allEvidences) {
            result[evidence.getAttribute('id') ?? ''] = LazyTristate.stateToString(evidence.value);
        }
        return result;
    }
    public static getEvidencesByValue(value: string) {
        const result: string[] = [];
        const evidences = Database.getEvidences();
        for(const evidence in evidences) {
            const evidenceValue = evidences[evidence];
            if(evidenceValue === value) {
                result.push(evidence);
            }
        }
        return result;
    }
}