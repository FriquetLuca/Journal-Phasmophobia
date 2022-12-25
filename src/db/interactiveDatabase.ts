import { LazyTristate } from "@lazy-toolbox/client";
import { LazyMath } from "@lazy-toolbox/portable";
import { Database } from "./database";
import { initializeGhosts } from "../initializeGhosts";
export const interactiveDatabase: {[label: string]: any} = {
    "behaviourVisibility": (ghostName: string) => {
        let visibility = true;
        // Wraith semi-test
        if(visibility) {
            const bansheeTestC = <HTMLInputElement>document.querySelector('#farEventGhost');
            let currentState = LazyTristate.stateToString(bansheeTestC.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "wraith" || ghostName === "banshee" || ghostName === "mimic");
            }
        }
        // Wraith pure test
        if(visibility) {
            const wraithTest = <HTMLInputElement>document.querySelector('#saltFootsteps');
            let currentState = LazyTristate.stateToString(wraithTest.value);
            if(currentState === "false") {
                visibility = visibility && (ghostName === "wraith" || ghostName === "mimic");
            } else if(currentState === "true") {
                visibility = visibility && ghostName !== "wraith";
            }
        }
        // Mare test
        if(visibility) {
            const mareTestA = <HTMLInputElement>document.querySelector('#turnOnLight');
            let currentState = LazyTristate.stateToString(mareTestA.value);
            if(currentState === "true") {
                visibility = visibility && ghostName !== "mare";
            }
            if(visibility) {
                const mareTestB = <HTMLInputElement>document.querySelector('#notMare');
                currentState = LazyTristate.stateToString(mareTestB.value);
                if(currentState === "true") {
                    visibility = visibility && ghostName !== "mare";
                }
            }
            if(visibility) {
                const mareTestC = <HTMLInputElement>document.querySelector('#mareLight');
                currentState = LazyTristate.stateToString(mareTestC.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "mare" || ghostName === "mimic");
                }
            }
        }
        // Hantu Test
        if(visibility) {
            const hantuTest = <HTMLInputElement>document.querySelector('#turnOnBreaker');
            let currentState = LazyTristate.stateToString(hantuTest.value);
            if(currentState === "true") {
                visibility = visibility && ghostName !== "hantu";
            }
            if(visibility) {
                const hantuTestB = <HTMLInputElement>document.querySelector('#hantuTest');
                currentState = LazyTristate.stateToString(hantuTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "hantu" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "hantu";
                }
            }
            if(visibility) {
                const hantuTestB = <HTMLInputElement>document.querySelector('#hantuSpeedTest');
                currentState = LazyTristate.stateToString(hantuTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "hantu" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "hantu";
                }
            }
        }
        // Long See Test (Oni / Deogen)
        if(visibility) {
            const longSeeTest = <HTMLInputElement>document.querySelector('#longSeeTest');
            let currentState = LazyTristate.stateToString(longSeeTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "oni" || ghostName === "mimic" || ghostName === "deogen");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "oni" && ghostName !== "deogen";
            }
        }
        // Jinn Test
        if(visibility) {
            const jinnTest = <HTMLInputElement>document.querySelector('#turnOffBreaker');
            let currentState = LazyTristate.stateToString(jinnTest.value);
            if(currentState === "true") {
                visibility = visibility && ghostName !== "jinn";
            }
            if(visibility) {
                const jinnTestB = <HTMLInputElement>document.querySelector('#jinnBreaker');
                let currentState = LazyTristate.stateToString(jinnTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "jinn" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "jinn";
                }
            }
        }
        // Phantom Test
        if(visibility) {
            const phantomTest = <HTMLInputElement>document.querySelector('#phantomTest');
            let currentState = LazyTristate.stateToString(phantomTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "phantom" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "phantom";
            }
            if(visibility) {
                const phantomTestB = <HTMLInputElement>document.querySelector('#phantomPic');
                let currentState = LazyTristate.stateToString(phantomTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "phantom" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "phantom";
                }
            }
            if(visibility) {
                const phantomTestB = <HTMLInputElement>document.querySelector('#phantomPicHunt');
                let currentState = LazyTristate.stateToString(phantomTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "phantom" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "phantom";
                }
            }
        }
        // Oni Test
        if(visibility) {
            const oniTestB = <HTMLInputElement>document.querySelector('#notOni');
            let currentState = LazyTristate.stateToString(oniTestB.value);
            if(currentState === "true") {
                visibility = visibility && ghostName !== "oni";
            }
            if(visibility) {
                const oniTestC = <HTMLInputElement>document.querySelector('#oniSanityTest');
                let currentState = LazyTristate.stateToString(oniTestC.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "oni" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "oni";
                }
            }
        }
        // Goryo Test
        if(visibility) {
            const goryoTest = <HTMLInputElement>document.querySelector('#goryoTest');
            let currentState = LazyTristate.stateToString(goryoTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "goryo" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "goryo";
            }
            if(visibility) {
                const goryoTestB = <HTMLInputElement>document.querySelector('#goryoRoaming');
                let currentState = LazyTristate.stateToString(goryoTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "goryo" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "goryo";
                }
            }
            if(visibility) {
                const goryoTestB = <HTMLInputElement>document.querySelector('#goryoFavourite');
                let currentState = LazyTristate.stateToString(goryoTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "goryo" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "goryo";
                }
            }
        }
        // Banshee Test
        if(visibility) {
            let countTests = 0;
            const bansheeTest = <HTMLInputElement>document.querySelector('#bansheeScream');
            let currentState = LazyTristate.stateToString(bansheeTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "banshee" || ghostName === "mimic");
            } else if(currentState === "false") {
                countTests++;
            }
            if(visibility) {
                const bansheeTestB = <HTMLInputElement>document.querySelector('#bansheeHuntTest');
                currentState = LazyTristate.stateToString(bansheeTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "banshee" || ghostName === "mimic");
                } else if(currentState === "false") {
                    countTests++;
                    visibility = visibility && (ghostName !== "banshee");
                }
                if(visibility) {
                    const bansheeTestC = <HTMLInputElement>document.querySelector('#farEventGhost');
                    currentState = LazyTristate.stateToString(bansheeTestC.value);
                    if(currentState === "true") {
                        visibility = visibility && (ghostName === "banshee" || ghostName === "mimic" || ghostName === "wraith");
                    } else if(currentState === "false") {
                        countTests++;
                    }
                }
            }
            if(countTests == 3) {
                visibility = visibility && (ghostName !== "banshee");
            }
            if(visibility) {
                const bansheeTestC = <HTMLInputElement>document.querySelector('#bansheeSanityTest');
                currentState = LazyTristate.stateToString(bansheeTestC.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "banshee" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "banshee";
                }
            }
        }
        // Deogen Test
        if(visibility) {
            const deogenTest = <HTMLInputElement>document.querySelector('#deogenBreath');
            let currentState = LazyTristate.stateToString(deogenTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "deogen" || ghostName === "mimic");
            }
            if(visibility) {
                const deogenTestB = <HTMLInputElement>document.querySelector('#deogenHiding');
                let currentState = LazyTristate.stateToString(deogenTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "deogen" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "deogen";
                }
            }
            // 
        }
        // Yurei Test
        if(visibility) {
            const yureiTest = <HTMLInputElement>document.querySelector('#yureiDoor');
            let currentState = LazyTristate.stateToString(yureiTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "yurei" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "yurei";
            }
        }
        // Obake Test
        if(visibility) {
            let testCount = 0;
            const obakeTestA = <HTMLInputElement>document.querySelector('#obakeFringer');
            let currentState = LazyTristate.stateToString(obakeTestA.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "obake" || ghostName === "mimic");
            } else if(currentState === "false") {
                testCount++;
            }
            if(visibility) {
                const obakeTestB = <HTMLInputElement>document.querySelector('#obakeShapeshift');
                currentState = LazyTristate.stateToString(obakeTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "obake" || ghostName === "mimic");
                } else if(currentState === "false") {
                    testCount++;
                }
            }
            if(testCount == 2) {
                visibility = visibility && (ghostName !== "obake");
            }
        }
        // Demon Test
        if(visibility) {
            const demonTest = <HTMLInputElement>document.querySelector('#demonTest');
            let currentState = LazyTristate.stateToString(demonTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "demon" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "demon";
            }
        }
        // Spirit Test
        if(visibility) {
            const spiritTest = <HTMLInputElement>document.querySelector('#spiritTest');
            let currentState = LazyTristate.stateToString(spiritTest.value);
            if(currentState === "true") {
                visibility = visibility && ghostName !== "spirit";
            } else if(currentState === "false") {
                visibility = visibility && (ghostName === "spirit" || ghostName === "mimic");
            }
        }
        // Shade Test
        if(visibility) {
            let testCount = 0;
            const shadeTestA = <HTMLInputElement>document.querySelector('#shadeTestA');
            let currentState = LazyTristate.stateToString(shadeTestA.value);
            if(currentState === "true") {
                testCount++;
            }
            const shadeTestB = <HTMLInputElement>document.querySelector('#shadeTestB');
            currentState = LazyTristate.stateToString(shadeTestB.value);
            if(currentState === "true") {
                testCount++;
            }
            if(testCount == 2) {
                visibility = visibility && (ghostName === "shade" || ghostName === "mimic");
            }
            if(visibility) {
                const shadeTestB = <HTMLInputElement>document.querySelector('#shadeTestC');
                currentState = LazyTristate.stateToString(shadeTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "shade" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "shade";
                }
            }
            if(visibility) {
                const shadeTestB = <HTMLInputElement>document.querySelector('#shadeEMFTest');
                currentState = LazyTristate.stateToString(shadeTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "shade" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "shade";
                }
            }
        }
        // Myling Test
        if(visibility) {
            const mylingTest = <HTMLInputElement>document.querySelector('#mylingTest');
            let currentState = LazyTristate.stateToString(mylingTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "myling" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "myling";
            }
        }
        // raijuGhostEvent Test
        if(visibility) {
            const mylingTest = <HTMLInputElement>document.querySelector('#raijuGhostEvent');
            let currentState = LazyTristate.stateToString(mylingTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "raiju" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "raiju";
            }
        }
        // Onryo Test
        if(visibility) {
            const mylingTest = <HTMLInputElement>document.querySelector('#onryoTest');
            let currentState = LazyTristate.stateToString(mylingTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "onryo" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "onryo";
            }
        }
        // Moroi Test
        if(visibility) {
            const moroiTest = <HTMLInputElement>document.querySelector('#moroiTest');
            let currentState = LazyTristate.stateToString(moroiTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "moroi" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "moroi";
            }
            if(visibility) {
                const moroiTestB = <HTMLInputElement>document.querySelector('#moroiHuntTest');
                let currentState = LazyTristate.stateToString(moroiTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "moroi" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "moroi";
                }
            }
            if(visibility) {
                const moroiTestB = <HTMLInputElement>document.querySelector('#moroiSmudged');
                let currentState = LazyTristate.stateToString(moroiTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "moroi" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "moroi";
                }
            }
        }
        // Revenant Test
        if(visibility) {
            const revTest = <HTMLInputElement>document.querySelector('#revTest');
            let currentState = LazyTristate.stateToString(revTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "revenant" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "revenant";
            }
        }
        // Twins Test
        if(visibility) {
            const revTest = <HTMLInputElement>document.querySelector('#twinsSpeedTest');
            let currentState = LazyTristate.stateToString(revTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "twins" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "twins";
            }
        }
        // Yurei Test
        if(visibility) {
            const revTest = <HTMLInputElement>document.querySelector('#yureiActivityTest');
            let currentState = LazyTristate.stateToString(revTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "yurei" || ghostName === "mimic");
            }
        }
        // Yokai Test
        if(visibility) {
            const revTest = <HTMLInputElement>document.querySelector('#yokaiTest');
            let currentState = LazyTristate.stateToString(revTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "yokai" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "yokai";
            }
            if(visibility) {
                const revTest = <HTMLInputElement>document.querySelector('#yokaiActivityTest');
                let currentState = LazyTristate.stateToString(revTest.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "yokai" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "yokai";
                }
            }
        }
        // Sprinter Test
        if(visibility) {
            const sprintTest = <HTMLInputElement>document.querySelector('#sprintTest');
            let currentState = LazyTristate.stateToString(sprintTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "revenant" || ghostName === "mimic" || ghostName === "jinn");
            } else if(currentState === "false") {
                visibility = visibility && !(ghostName === "revenant" || ghostName === "jinn");
            }
        }
        // Thaye Test
        if(visibility) {
            const thayeTest = <HTMLInputElement>document.querySelector('#thayeTest');
            let currentState = LazyTristate.stateToString(thayeTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "thaye" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && ghostName !== "thaye";
            }
            if(visibility) {
                const thayeTestB = <HTMLInputElement>document.querySelector('#thayeAge');
                let currentState = LazyTristate.stateToString(thayeTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "thaye" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "thaye";
                }
            }
            if(visibility) {
                const thayeTestB = <HTMLInputElement>document.querySelector('#thayeAgeTesting');
                let currentState = LazyTristate.stateToString(thayeTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "thaye" || ghostName === "mimic");
                } else if(currentState === "false") {
                    visibility = visibility && ghostName !== "thaye";
                }
            }
        }
        // Polter Test
        if(visibility) {
            let nbrTest = 0;
            const polterTestA = <HTMLInputElement>document.querySelector('#polterTestA');
            let currentState = LazyTristate.stateToString(polterTestA.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "poltergeist" || ghostName === "mimic");
            } else if(currentState === "false") {
                nbrTest++;
            }
            if(visibility) {
                const polterTestB = <HTMLInputElement>document.querySelector('#polterTestB');
                currentState = LazyTristate.stateToString(polterTestB.value);
                if(currentState === "true") {
                    visibility = visibility && (ghostName === "poltergeist" || ghostName === "mimic");
                } else if(currentState === "false") {
                    nbrTest++;
                }
                if(visibility) {
                    const polterTestC = <HTMLInputElement>document.querySelector('#polterTestC');
                    currentState = LazyTristate.stateToString(polterTestC.value);
                    if(currentState === "true") {
                        visibility = visibility && (ghostName === "poltergeist" || ghostName === "mimic");
                    } else if(currentState === "false") {
                        nbrTest++;
                    }
                }
            }
            if(nbrTest === 3) {
                visibility = visibility && (ghostName !== "poltergeist");
            }
        }
        // Hunt Speed Hiding Test
        if(visibility) {
            const huntSpeedHidingTest = <HTMLInputElement>document.querySelector('#huntSpeedHidingTest');
            let currentState = LazyTristate.stateToString(huntSpeedHidingTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "moroi" || ghostName === "mimic" || ghostName === "hantu" || ghostName === "thaye" || ghostName === "deogen" || ghostName === "twins" || ghostName === "raiju");
            } else if(currentState === "false") {
                visibility = visibility && !(ghostName === "moroi" || ghostName === "hantu" || ghostName === "thaye" || ghostName === "deogen" || ghostName === "twins" || ghostName === "raiju");
            }
        }
        // Hunt Speed Skip Raiju Test
        if(visibility) {
            const huntSpeedHidingTest = <HTMLInputElement>document.querySelector('#huntSpeedSkipRaijuTest');
            let currentState = LazyTristate.stateToString(huntSpeedHidingTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "moroi" || ghostName === "mimic" || ghostName === "hantu" || ghostName === "thaye" || ghostName === "deogen" || ghostName === "twins");
            } else if(currentState === "false") {
                visibility = visibility && !(ghostName === "moroi" || ghostName === "hantu" || ghostName === "thaye" || ghostName === "deogen" || ghostName === "twins");
            }
        }
        // Variable Hunt Speed Test
        if(visibility) {
            const variableHuntSpeedTest = <HTMLInputElement>document.querySelector('#variableHuntSpeedTest');
            let currentState = LazyTristate.stateToString(variableHuntSpeedTest.value);
            if(currentState === "true") {
                visibility = visibility && (ghostName === "moroi" || ghostName === "thaye" || ghostName === "hantu" || ghostName === "twins" || ghostName === "mimic");
            } else if(currentState === "false") {
                visibility = visibility && !(ghostName === "moroi" || ghostName === "hantu" || ghostName === "thaye" || ghostName === "twins");
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
        const subEvidences = [...<NodeListOf<HTMLInputElement>>document.querySelectorAll('.subevidenceInput')];
        for(const subEvidence of subEvidences) {
            subEvidence.value = LazyTristate.NEUTRAL;
            subEvidence.innerText = LazyTristate.NEUTRAL;
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