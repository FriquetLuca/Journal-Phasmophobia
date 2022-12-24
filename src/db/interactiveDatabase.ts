import { LazyTristate } from "@lazy-toolbox/client";
import { LazyMath } from "@lazy-toolbox/portable";
import { Database } from "./database";
import { initializeGhosts } from "../initializeGhosts";
export const interactiveDatabase: {[label: string]: any} = {
    "behaviourVisibility": (ghostName: string) => {
        let visibility = true;
        // Wraith test
        const wraithTest = <HTMLInputElement>document.querySelector('#saltFootsteps');
        let currentState = LazyTristate.stateToString(wraithTest.value);
        if(currentState === "false") {
            visibility = visibility && (ghostName === "wraith" || ghostName === "mimic");
        } else if(currentState === "true") {
            visibility = visibility && ghostName !== "wraith";
        }
        // Mare test
        if(visibility) {
            const mareTestA = <HTMLInputElement>document.querySelector('#turnOnLight');
            currentState = LazyTristate.stateToString(mareTestA.value);
            if(currentState === "true") {
                visibility = visibility && ghostName !== "mare";
            }
            const mareTestB = <HTMLInputElement>document.querySelector('#notMare');
            currentState = LazyTristate.stateToString(mareTestB.value);
            if(currentState === "true") {
                visibility = visibility && ghostName !== "mare";
            }
        }
        // Hantu Test
        if(visibility) {
            const hantuTest = <HTMLInputElement>document.querySelector('#turnOnBreaker');
            currentState = LazyTristate.stateToString(hantuTest.value);
            if(currentState === "true") {
                visibility = visibility && ghostName !== "hantu";
            }
        }
        // Jinn Test
        if(visibility) {
            const jinnTest = <HTMLInputElement>document.querySelector('#turnOffBreaker');
            currentState = LazyTristate.stateToString(jinnTest.value);
            if(currentState === "true") {
                visibility = visibility && ghostName !== "jinn";
            }
        }
        // Oni Test
        if(visibility) {
            const oniTest = <HTMLInputElement>document.querySelector('#notOni');
            currentState = LazyTristate.stateToString(oniTest.value);
            if(currentState === "true") {
                visibility = visibility && ghostName !== "oni";
            }
        }
        // Banshee Test
        if(visibility) {
            const bansheeTest = <HTMLInputElement>document.querySelector('#bansheeScream');
            currentState = LazyTristate.stateToString(bansheeTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "banshee" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "banshee";
            }
        }
        // Deogen Test
        if(visibility) {
            const deogenTest = <HTMLInputElement>document.querySelector('#deogenBreath');
            currentState = LazyTristate.stateToString(deogenTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "deogen" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "deogen";
            }
        }
        // Yurei Test
        if(visibility) {
            const yureiTest = <HTMLInputElement>document.querySelector('#yureiDoor');
            currentState = LazyTristate.stateToString(yureiTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "yurei" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "yurei";
            }
        }
        // Obake Test
        if(visibility) {
            const obakeTestA = <HTMLInputElement>document.querySelector('#obakeFringer');
            currentState = LazyTristate.stateToString(obakeTestA.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "obake" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "obake";
            }
            const obakeTestB = <HTMLInputElement>document.querySelector('#obakeShapeshift');
            currentState = LazyTristate.stateToString(obakeTestB.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "obake" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "obake";
            }
        }
        // Demon Test
        if(visibility) {
            const demonTest = <HTMLInputElement>document.querySelector('#demonTest');
            currentState = LazyTristate.stateToString(demonTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "demon" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "demon";
            }
        }
        // Spirit Test
        if(visibility) {
            const spiritTest = <HTMLInputElement>document.querySelector('#spiritTest');
            currentState = LazyTristate.stateToString(spiritTest.value);
            if(currentState === "true") {
                visibility = visibility && ghostName !== "spirit";
            } else if(currentState === "false") {
                visibility = visibility && (ghostName === "spirit" || ghostName === "mimic");
            }
        }
        return visibility;
    },
    "triggerGhostSpeedRender": (event: Event) => {
        initializeGhosts((<HTMLSelectElement>event.target).value);
        interactiveDatabase.triggerGhostRendering();
    },
    "triggerEvidence": (event: Event) => {
        interactiveDatabase.triggerGhostRendering();
    },
    "resetEvidences": () => {
        const evidences = Database.getEvidences();
        for(const label in evidences) {
            const evid = <HTMLInputElement>document.querySelector(`#${label}`);
            evid.value = LazyTristate.NEUTRAL;
            evid.innerText = LazyTristate.NEUTRAL;
        }
        const allGhosts = [...<NodeListOf<HTMLDetailsElement>>document.querySelectorAll('.ghostsContainer > .ghostContainer')];
        for(const ghost of allGhosts) {
            ghost.style.display = "block";
        }
        const resultNumber = <HTMLTableColElement>document.querySelector('.resultNumber');
        resultNumber.innerText = `${allGhosts.length} résultat${allGhosts.length > 1 ? 's' : ''}`;
    },
    "triggerGhostRendering": () => {
        const obtainedEvidences = Database.getEvidencesByValue('true');
        const hiddenEvidences = Database.getEvidencesByValue('false');
        const allGhosts = [...<NodeListOf<HTMLDetailsElement>>document.querySelectorAll('.ghostsContainer > .ghostContainer')];
        const evidenceCount = Number((<HTMLInputElement>document.getElementById('evidencesCount')).value);
        switch(evidenceCount) {
            case 3:
                interactiveDatabase.allEvidences(obtainedEvidences, hiddenEvidences, allGhosts);
                break;
            default:
                interactiveDatabase.fiewEvidences(obtainedEvidences, hiddenEvidences, allGhosts, evidenceCount);
                break;
        }
    },
    "allEvidences": (gotEvidences: string[], notEvidences: string[], ghosts: HTMLDetailsElement[]) => {
        let ghostResults = ghosts.length;
        for(const ghostHTMLElement of ghosts) {
            ghostHTMLElement.style.display = "block";
            const ghostName = ghostHTMLElement.getAttribute('id') ?? "";
            const currentGhost = Database.ghostDB[ghostName];
            const hasEvidences = interactiveDatabase.hasEvidences(currentGhost.evidences, gotEvidences);
            if(!hasEvidences) {
                ghostHTMLElement.style.display = "none";
                ghostResults--;
                continue;
            } 
            const rejectedEvidences = interactiveDatabase.hasHiddenEvidences(currentGhost.evidences, notEvidences);
            if(rejectedEvidences) {
                ghostHTMLElement.style.display = "none";
                ghostResults--;
                continue;
            }
            if(!interactiveDatabase.behaviourVisibility(ghostName)) {
                ghostHTMLElement.style.display = "none";
                ghostResults--;
                continue;
            }
        }
        const resultNumber = <HTMLTableColElement>document.querySelector('.resultNumber');
        resultNumber.innerText = `${ghostResults} résultat${ghostResults > 1 ? 's' : ''}`;
    },
    "fiewEvidences": (obtainedEvidences: string[], hiddenEvidences: string[], ghosts: HTMLDetailsElement[], totalEvidences: number = 2) => {
        let ghostResults = ghosts.length;
        for(const ghostHTMLElement of ghosts) {
            ghostHTMLElement.style.display = "block";
            const ghostName = ghostHTMLElement.getAttribute('id') ?? "";
            const currentGhost = Database.ghostDB[ghostName];
            let actualGhost = currentGhost;
            let visibility = true;
            if(totalEvidences > 0) {
                // Strong evidence test
                if(actualGhost.strongEvidence) {
                    // Strong evidence isn't found AND is included in hiddenEvidences, can't be the ghost
                    if(!obtainedEvidences.includes(actualGhost.strongEvidence) && hiddenEvidences.includes(actualGhost.strongEvidence)) {
                        visibility = false;
                    }
                }
                // It could be filtered by behaviour
                if(visibility) {
                    visibility = interactiveDatabase.behaviourVisibility(ghostName);
                }
                // If it passed the strong evidence test, then we're gonna test the obtained evidences
                if(visibility) {
                    for(let evidence of obtainedEvidences) {
                        visibility = visibility && actualGhost.evidences.includes(evidence);
                    }
                }
                if(visibility) {
                    if(obtainedEvidences.length > totalEvidences) { // Must be a mimic, impossible otherwise
                        if(ghostName !== 'mimic') {
                            visibility = false;
                        } else {
                            let isMimic = true;
                            for(const evd of obtainedEvidences) {
                                if(!actualGhost.evidences.includes(evd)) {
                                    isMimic = false;
                                }
                            }
                            if(!isMimic) {
                                visibility = false;
                            }
                        }
                    } else {                   
                        if(totalEvidences == 2) {
                            if(visibility && hiddenEvidences.length > 1 && ghostName !== 'mimic') {
                                let combineHidden = LazyMath.combinationArrayNRNO(hiddenEvidences, 2);
                                for(let childCombine of combineHidden) {
                                    let nbr = 0;
                                    for(let child of childCombine) {
                                        if(actualGhost.evidences.includes(child))
                                        {
                                            nbr++;
                                        }
                                    }
                                    if(nbr == 2) {
                                        visibility = false;
                                        break;
                                    }
                                }
                            }
                        } else if(totalEvidences == 1) {
                            if(visibility && hiddenEvidences.length > 2 && ghostName !== 'mimic') {
                                let combineHidden = LazyMath.combinationArrayNRNO(hiddenEvidences, 3);
                                for(let childCombine of combineHidden) {
                                    let nbr = 0;
                                    for(let child of childCombine) {
                                        if(actualGhost.evidences.includes(child)) {
                                            nbr++;
                                        }
                                    }
                                    if(nbr == 3) {
                                        visibility = false;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                if(!visibility) {
                    ghostHTMLElement.style.display = "none";
                    ghostResults--;
                }
            } else {
                if(obtainedEvidences.includes('ghost-orb')) {
                    if(ghostName !== 'mimic') {
                        ghostHTMLElement.style.display = "none";
                        ghostResults--;
                    }
                } else {
                    if(ghostName === 'mimic') {
                        ghostHTMLElement.style.display = "none";
                        ghostResults--;
                    }
                }
            }
        }
        const resultNumber = <HTMLTableColElement>document.querySelector('.resultNumber');
        resultNumber.innerText = `${ghostResults} résultat${ghostResults > 1 ? 's' : ''}`;
    },
    "hasEvidences": (ghostEvidences: string[], currentEvidences: string[]) => {
        for(const evidence of currentEvidences) {
            if(!ghostEvidences.includes(evidence)) {
                return false;
            }
        }
        return true;
    },
    "hasHiddenEvidences": (ghostEvidences: string[], currentEvidences: string[]) => {
        for(const evidence of currentEvidences) {
            if(ghostEvidences.includes(evidence)) {
                return true;
            }
        }
        return false;
    }
};