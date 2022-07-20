'use strict';

const ghostList = [
    'Banshee', 'Demon', 'Deogen', 'Goryo', 'Hantu', 'Jinn', 'Mare',
    'Moroi', 'Myling', 'Obake', 'Oni','Onryo', 'Phantom', 'Poltergeist',
    'Raiju', 'Shade', 'Spirit', 'Thaye', 'The Mimic', 'The Twins', 'Wraith',
    'Yokai', 'Yurei'
];
const checkboxEmotes = [
    '\u2753', // Neutral
    '\u2705', // True
    '\u274C' // False
];
const ghostsDB = {
    'Banshee': {
        name: 'Banshee',
        evidences: [
            'D.O.T.S. Projector',
            'Fingerprints',
            'Ghost Orb'
        ],
        strenght: "Will target only one player at a time.",
        weakness: "Has a distinctive wail on the Parabolic Microphone.",
        description: "„The singing siren, known for attracting its victims through song. It has been known to single out its prey before making a killing blow.”"
    },
    'Demon': {
        name: 'Démon',
        evidences: [
            'Fingerprints',
            'Freezing Temperatures',
            'Ghost Writing'
        ],
        strenght: "Can initiate hunts more often.",
        weakness: "Crucifix effectiveness is increased to 5m against one. ",
        description: "„A Demon is one of the worst ghosts you can encounter. It has been known to attack without reason.”"
    },
    'Deogen': {
        name: 'Deogen',
        evidences: [
            'D.O.T.S. Projector',
            'Ghost Writing',
            'Spirit Box'
        ],
        strongEvidence: 'Spirit Box',
        strenght: "Always knows where the player is during a hunt and moves very fast when going to their location.",
        weakness: "Moves very slowly when it sees its victim.",
        description: "„Sometimes surrounded by an endless fog, Deogen have been eluding ghost hunters for years. These ghosts have been reported to find even the most hidden prey, before stalking them into exhaustion.”"
    },
    'Goryo': {
        name: 'Goryo',
        evidences: [
            'D.O.T.S. Projector',
            'EMF Level 5',
            'Fingerprints'
        ],
        strongEvidence: 'D.O.T.S. Projector',
        strenght: "Can only be seen interacting with D.O.T.S. through a camera when nobody is nearby.",
        weakness: "Tends to wander away less from its ghost room.",
        description: "„When a Goryo passes through a DOTS projector, using a video camera is the only way to see it.”"
    },
    'Hantu': {
        name: 'Hantu',
        evidences: [
            'Fingerprints',
            'Freezing Temperatures',
            'Ghost Orb'
        ],
        strongEvidence: 'Freezing Temperatures',
        strenght: "Lower temperatures allow the Hantu to move faster.",
        weakness: "Warmer areas slow the Hantu's movement.",
        description: "„A Hantu is a rare ghost that thrives in the coldest climates. The cold seems to make them more aggressive and empowered.”"
    },
    'Jinn': {
        name: 'Djinn',
        evidences: [
            'EMF Level 5',
            'Fingerprints',
            'Freezing Temperatures'
        ],
        strenght: "Travels at faster speeds if its victim is far away.",
        weakness: "Cannot use its ability if the site's fuse box is off.",
        description: "„A Jinn is a territorial ghost that will attack when threatened. It has also been known to travel at significant speed.”"
    },
    'Mare': {
        name: 'Cauchemar',
        evidences: [
            'Ghost Orb',
            'Ghost Writing',
            'Spirit Box'
        ],
        strenght: "Has an increased chance to attack in the dark.",
        weakness: "Turning the lights on will reduce the chance of an attack.",
        description: "„A Mare is the source of all nightmares, making it most powerful in the dark.”"
    },
    'Moroi': {
        name: 'Moroï',
        evidences: [
            'Freezing Temperatures',
            'Ghost Writing',
            'Spirit Box'
        ],
        strongEvidence: 'Spirit Box',
        strenght: "Moves noticeably faster at low player sanity and can make players lose sanity quicker than usual while investigating.",
        weakness: "Smudge sticks blind the ghost for longer during hunts.",
        description: "„Moroi have risen from the grave to drain energy from the living. They have been known to place curses on their victims, curable only by antidotes or moving very far away.”"
    },
    'Myling': {
        name: 'Myling',
        evidences: [
            'EMF Level 5',
            'Fingerprints',
            'Ghost Writing'
        ],
        strenght: "Has quieter footsteps during a hunt.",
        weakness: "Produces paranormal sounds more frequently.",
        description: "„A Myling is a very vocal and active ghost. They are rumoured to be quiet when hunting their prey.”"
    },
    'Obake': {
        name: 'Obake',
        evidences: [
            'EMF Level 5',
            'Fingerprints',
            'Ghost Orb'
        ],
        strongEvidence: 'Fingerprints',
        strenght: "May leave fingerprints that disappear quicker.",
        weakness: "Has a small chance of leaving six-fingered handprints.",
        description: "„Obake are terrifying shape-shifters, capable of taking on many forms. They have been seen taking on humanoid shapes to attract their prey.”"
    },
    'Oni': {
        name: 'Oni',
        evidences: [
            'D.O.T.S. Projector',
            'EMF Level 5',
            'Freezing Temperatures'
        ],
        strenght: "Increased activity and ghost events.",
        weakness: "An Oni's increased activity makes them easier to find.",
        description: "„Onis love to scare their victims as much as possible before attacking. They are often seen in their physical form, guarding their place of death.”"
    },
    'Onryo': {
        name: 'Onryo',
        evidences: [
            'Freezing Temperatures',
            'Ghost Orb',
            'Spirit Box'
        ],
        strenght: "A flame extinguishing can cause an Onryo to attack.",
        weakness: "The presence of flames reduces the Onryo's ability to attack.",
        description: "„The Onryo is often referred to as \"The Wrathful Spirit.\" It steals souls from dying victims' bodies to seek revenge. This ghost has been known to fear any form of fire, and will do anything to be far from it.”"
    },
    'Phantom': {
        name: 'Fantôme',
        evidences: [
            'D.O.T.S. Projector',
            'Fingerprints',
            'Spirit Box'
        ],
        strenght: "Looking at a Phantom will lower the player's sanity considerably.",
        weakness: "Taking a photo of the Phantom will cause it to briefly disappear.",
        description: "„A Phantom is a ghost that can possess the living, inducing fear into those around it. They are most commonly summoned from Ouija Boards.”"
    },
    'Poltergeist': {
        name: 'Poltergeist',
        evidences: [
            'Fingerprints',
            'Ghost Writing',
            'Spirit Box'
        ],
        strenght: "Capable of throwing multiple objects at once.",
        weakness: "Becomes powerless with no throwables nearby.",
        description: "„One of the most famous ghosts, the Poltergeist. Known to manipulate objects around it to spread fear into its victims.”"
    },
    'Raiju': {
        name: 'Raiju',
        evidences: [
            'D.O.T.S. Projector',
            'EMF Level 5',
            'Ghost Orb'
        ],
        strenght: "Moves faster near electrical devices.",
        weakness: "Disrupts electronic equipment from further away when it hunts.",
        description: "„A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.”"
    },
    'Revenant': {
        name: 'Revenant',
        evidences: [
            'Freezing Temperatures',
            'Ghost Orb',
            'Ghost Writing'
        ],
        strenght: "Can travel significantly faster if a player is spotted during a hunt. ",
        weakness: "Moves very slowly when not chasing a player.",
        description: "„A Revenant is a violent ghost that will attack indiscriminately. Their speed can be deceiving, as they are slow while dormant; however, as soon as they hunt they can move incredibly fast.”"
    },
    'Shade': {
        name: 'Ombre',
        evidences: [
            'EMF Level 5',
            'Freezing Temperatures',
            'Ghost Writing'
        ],
        strenght: "Being shy makes it more difficult to locate and obtain evidence.",
        weakness: "Less likely to hunt if multiple people are nearby.",
        description: "„A Shade is known to be very shy. There is evidence to suggest that a Shade will stop all paranormal activity if there are multiple people nearby.”"
    },
    'Spirit': {
        name: 'Esprit',
        evidences: [
            'EMF Level 5',
            'Ghost Writing',
            'Spirit Box'
        ],
        strenght: "None.",
        weakness: "Smudge sticks are more effective, preventing a hunt for longer.",
        description: "„Spirits are very common ghosts. They are very powerful, but passive, only attacking when they need to. They defend their place of death to the utmost degree, killing anyone that is caught overstaying their welcome.”"
    },
    'Thaye': {
        name: 'Thayé',
        evidences: [
            'D.O.T.S. Projector',
            'Ghost Orb',
            'Ghost Writing'
        ],
        strenght: "Entering the location makes it active, defensive and agile.",
        weakness: "Becomes slower and less active over time.",
        description: "„Thaye have been known to rapidly age over time, even in the afterlife. From what we've learned, they seem to deteriorate faster while within the presence of the living.”"
    },
    'The Mimic': {
        name: 'Le Mimic',
        evidences: [
            'Fingerprints',
            'Freezing Temperatures',
            'Ghost Orb',
            'Spirit Box'
        ],
        strongEvidence: 'Ghost Orb',
        strenght: "Can mimic the abilities and traits of other ghosts.",
        weakness: "Will present Ghost Orbs as a secondary evidence.",
        description: "„The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.”"
    },
    'The Twins': {
        name: 'Les Jumeaux',
        evidences: [
            'EMF Level 5',
            'Freezing Temperatures',
            'Spirit Box'
        ],
        strenght: "Either Twin may start a hunt, though not at the same time.",
        weakness: "Will often interact with the environment at the same time.",
        description: "„These ghosts have been reported to mimic each other's actions. They alternate their attacks to confuse their prey.”"
    },
    'Wraith': {
        name: 'Esprit',
        evidences: [
            'D.O.T.S. Projector',
            'EMF Level 5',
            'Spirit Box'
        ],
        strenght: "Does not leave UV footprints after stepping in salt.",
        weakness: "Will become more active if it steps in salt.",
        description: "„Wraiths are one of the most dangerous ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.”"
    },
    'Yokai': {
        name: 'Yokai',
        evidences: [
            'D.O.T.S. Projector',
            'Ghost Orb',
            'Spirit Box'
        ],
        strenght: "Talking near the Yokai will anger it, increasing the chance to attack.",
        weakness: "Can only hear voices close to it during a hunt.",
        description: "„Yokai are common ghosts that are attracted to human voices. They can usually be found haunting family homes.”"
    },
    'Yurei': {
        name: 'Yurei',
        evidences: [
            'D.O.T.S. Projector',
            'Freezing Temperatures',
            'Ghost Orb'
        ],
        strenght: "Has a stronger effect on sanity.",
        weakness: "Smudging the Yurei's ghost room will reduce how often it wanders.",
        description: "„A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.”"
    }
};
const evidenceList = [
    'dots',
    'emf-5',
    'fingerprints',
    'freezing-temperature',
    'ghost-orbs',
    'ghost-writing',
    'spirit-box'
];
const ICONS = {
    'D.O.T.S. Projector': 'dots-projector.webp',
    'EMF Level 5': 'emf-reader.webp',
    'Fingerprints':'fingerprints.webp',
    'Freezing Temperatures': 'thermometer.webp',
    'Ghost Orb': 'ghost-orb.webp',
    'Ghost Writing': 'ghost-writing.webp',
    'Spirit Box': 'spirit-box.webp'
}
const IDS = {
    'dots': {
        name: 'D.O.T.S. Projector',
        isEvidence: true
    },
    'emf-5': {
        name: 'EMF Level 5',
        isEvidence: true
    },
    'fingerprints': {
        name: 'Fingerprints',
        isEvidence: true
    },
    'freezing-temperature': {
        name: 'Freezing Temperatures',
        isEvidence: true
    },
    'ghost-orbs': {
        name: 'Ghost Orb',
        isEvidence: true
    },
    'ghost-writing': {
        name: 'Ghost Writing',
        isEvidence: true
    },
    'spirit-box': {
        name: 'Spirit Box',
        isEvidence: true
    },
    'nightmare': {
        value: checkboxEmotes[2],
        isMode: true
    },
    'footsteps': {
        value: checkboxEmotes[0],
        isMode: true
    },
    'turn-off-breaker': {
        value: checkboxEmotes[2],
        isMode: true
    },
    'turn-on-light': {
        value: checkboxEmotes[2],
        isMode: true
    },
    'air-breath': {
        value: checkboxEmotes[2],
        isMode: true
    },
    'hunt-fast': {
        value: checkboxEmotes[2],
        isMode: true
    },
    'hunt-slow': {
        value: checkboxEmotes[2],
        isMode: true
    },
    'parabolic-scream': {
        value: checkboxEmotes[2],
        isMode: true
    },
    'heavy-breath': {
        value: checkboxEmotes[2],
        isMode: true
    }
};
const translate = {
    'D.O.T.S. Projector': 'Projecteur D.O.T.S.',
    'Fingerprints': 'Empruntes',
    'EMF Level 5': 'EMF Niveau 5',
    'Freezing Temperatures': 'Température glaciale',
    'Ghost Writing': 'Écriture fantômatique',
    'Spirit Box': 'Spirit Box',
    'Ghost Orb': 'Orbe fantômatique'
};
/***
* Return an array of ordered combination without repetition of n objets (a string array) classified in k groups.
*/
function combinationArrayNRNO(objects, k)
{
    let n = typeof objects === 'number' ? objects : objects.length; // Assign n as the length of all objets or the number passed through the function
    if(n < k) // n must be greater or equal to k...
    {
        throw new Error('The number of object must be greater or equal to k.');
    }
    let offset = n - k + 1; // The offset generated by the number of group
    let result = []; // Declare the result
    for(let i = 0; i < offset; i++) // Loop through all possible values on the first element
    {
       let content = [];
       content.push(objects[i]);
        let generated = combinationArrayDepthNRNO(objects, // Pass our objects
           i + 1, // Go to the next index to get the start of the next element
           offset + 1, // Subgroup gain a start offset of 1
           k - 1, // Align k for depth check since array start at 0
           0, // No depth, it's the 1st subgroup
           content // Give the object at the specific position in the array as a string or the position itself
        );
        Array.prototype.push.apply(result, generated); // Combine result
    }
    return result; // Return the result
}
/***
 * Generate an array of the entire set of element made out of binomial coefficient by taking the depth stack into account.
 */
function combinationArrayDepthNRNO(objects, index, offset, k, depth = 0, content = [])
{
    if(depth >= k) // If our depth is grater or equal to k, then we have all we need
    {
       return [content]; // We return the new string we made on the way.
    }
    let result = []; // Declare a result
    for(let i = index; i < offset; i++) // Loop through the possible values between index and offset - 1
    {
       let copyContent = [...content, objects[i]];
        let generated = combinationArrayDepthNRNO(objects,
           i + 1, // Go to the next index to get the start of the next element
           offset + 1, // Subgroup gain a start offset of 1
           k, // Just passing k along, it's already align if nothing goes wrong
           depth + 1, // Next depth of the stack
           copyContent // Give the object at the specific position in the array as a string or the position itself
        ); // Go into nested combinations
        Array.prototype.push.apply(result, generated); // Combine result
    }
    return result; // Return the result
}
function translateEvidence(elements)
{
    let result = [];
    for(let element of elements)
    {
        let src = `assets/icons/${ICONS[element]}`;
        result.push(`<div class="evidence-content"><img src="${src}" alt="${element}" class="evidence-content-icon"></div><p>${translate[element]}</p>`);
    }
    return result;
}
function listHTML(elements, ...liClass)
{

    let newUL = document.createElement('ul');
    for(let e of elements)
    {
        let li = document.createElement('li');
        li.innerHTML = e;
        for(let l of liClass)
        {
            li.classList.add(l);
        }
        newUL.appendChild(li);
    }
    return newUL;
}
function paragraphHTML(element)
{
    let par = document.createElement('p');
    par.innerHTML = element;
    return par;
}
function columnHTML(...toAppend)
{
    let column = document.createElement('th');
    for(let child of toAppend)
    {
        column.appendChild(child);
    }
    return column;
}
function createGhostList()
{
    for(let evidenceName of evidenceList)
    {
        let evidVals = document.getElementById(evidenceName);
        evidVals.value = '\u2753';
    }
    let nightmare = document.getElementById('nightmare');
    nightmare.value = '\u274C';
    let ghostTable = document.getElementById('ghost-result');
    let ind = 0;
    for(let ghostName of ghostList)
    {
        let ghostElement = document.getElementById(ghostName);
        if(ghostElement == undefined || ghostElement == null) // Doesn't exist, let's create it
        {
            let ghost = ghostsDB[ghostName]; // Get the ghost from it's name

            let line = document.createElement('tr');
            line.classList.add('ghost-table-element');
            line.classList.add(`ghost-table-parity-${(ind++ % 2) + 1}`);

                let ghostEvidences = listHTML(translateEvidence(ghost.evidences), 'ghost-evidences-item');
                    ghostEvidences.classList.add('ghost-evidences');
                let ghostNameCol = columnHTML(paragraphHTML(`${ghost.name}<br><em>(${ghostName})</em>`), ghostEvidences);
                    ghostNameCol.classList.add('ghost-name');
            line.appendChild(ghostNameCol);

                let ghostStrenght = columnHTML(paragraphHTML(ghost.strenght));
                    ghostStrenght.classList.add('ghost-strenght');
            line.appendChild(ghostStrenght);

                let ghostWeakn = columnHTML(paragraphHTML(ghost.weakness));
                    ghostWeakn.classList.add('ghost-weakness');
            line.appendChild(ghostWeakn);
                    
                let ghostDesc = columnHTML(paragraphHTML(ghost.description));
                    ghostDesc.classList.add('ghost-description');
            line.appendChild(ghostDesc);

            line.id = ghostName;
            ghostTable.appendChild(line);
        }
    }
}
function computeSpecialAbilities()
{
    let footsteps = document.getElementById('footsteps');
    if(footsteps.value === checkboxEmotes[1])
    {
        let wraith = document.getElementById('Wraith');
        wraith.style.visibility = 'collapse';
        wraith.style.overflow = 'hidden';
    }
    else if(footsteps.value === checkboxEmotes[2])
    {
        for(let ghostName of ghostList)
        {
            if(ghostName !== 'Wraith')
            {
                let ghost = document.getElementById(ghostName);
                ghost.style.visibility = 'collapse';
                ghost.style.overflow = 'hidden';
            }
        }
    }
    let toffBrkr = document.getElementById('turn-off-breaker');
    if(toffBrkr.value === checkboxEmotes[1])
    {
        let jinn = document.getElementById('Jinn');
        jinn.style.visibility = 'collapse';
        jinn.style.overflow = 'hidden';
    }
    let tonLight = document.getElementById('turn-on-light');
    if(tonLight.value === checkboxEmotes[1])
    {
        let mare = document.getElementById('Mare');
        mare.style.visibility = 'collapse';
        mare.style.overflow = 'hidden';
    }
    let airBreath = document.getElementById('air-breath');
    if(airBreath.value === checkboxEmotes[1])
    {
        let mare = document.getElementById('Oni');
        mare.style.visibility = 'collapse';
        mare.style.overflow = 'hidden';
    }
    let huntFast = document.getElementById('hunt-fast');
    if(huntFast.value === checkboxEmotes[1])
    {
        
    }
    let huntSlow = document.getElementById('hunt-slow');
    if(huntSlow.value === checkboxEmotes[1])
    {
        
    }
    let paraScream = document.getElementById('parabolic-scream');
    if(paraScream.value === checkboxEmotes[1])
    {
        let banshee = document.getElementById('Banshee');
        banshee.style.visibility = 'visible';
        banshee.style.overflow = 'visible';
        for(let ghostName of ghostList)
        {
            if(ghostName !== 'Banshee')
            {
                let ghost = document.getElementById(ghostName);
                ghost.style.visibility = 'collapse';
                ghost.style.overflow = 'hidden';
            }
        }
    }
    let heavyBreath = document.getElementById('heavy-breath');
    if(heavyBreath.value === checkboxEmotes[1])
    {
        let deogen = document.getElementById('Deogen');
        deogen.style.visibility = 'visible';
        deogen.style.overflow = 'visible';
        for(let ghostName of ghostList)
        {
            if(ghostName !== 'Deogen')
            {
                let ghost = document.getElementById(ghostName);
                ghost.style.visibility = 'collapse';
                ghost.style.overflow = 'hidden';
            }
        }
    }
}
function computeNormal()
{
    let actualEvidences = [];
    let hiddenEvidences = [];
    for(let evidenceName of evidenceList)
    {
        let elemEvidence = document.getElementById(evidenceName);
        switch(elemEvidence.value.charAt(0))
        {
            case checkboxEmotes[1]: // True
            actualEvidences.push(IDS[evidenceName].name);
                break;
            case checkboxEmotes[2]: // False
            hiddenEvidences.push(IDS[evidenceName].name);
                break;
        }
    }
    for(let ghostName of ghostList)
    {
        let ghostData = ghostsDB[ghostName];
        let ghostElement = document.getElementById(ghostName);
        let visibility = true;
        for(let evidence of actualEvidences)
        {
            if(!ghostData.evidences.includes(evidence))
            {
                visibility = false;
                break;
            }
        }
        for(let evidence of hiddenEvidences)
        {
            if(ghostData.evidences.includes(evidence))
            {
                visibility = false;
                break;
            }
        }
        ghostElement.style.visibility = visibility ? 'visible' : 'collapse';
        ghostElement.style.overflow = visibility ? 'visible' : 'hidden';
    }
    computeSpecialAbilities();
}
function computeNightmare()
{
    let actualEvidences = [];
    let hiddenEvidences = [];
    for(let evidenceName of evidenceList)
    {
        let elemEvidence = document.getElementById(evidenceName);
        switch(elemEvidence.value.charAt(0))
        {
            case checkboxEmotes[1]: // True
            actualEvidences.push(IDS[evidenceName].name);
                break;
            case checkboxEmotes[2]: // False
            hiddenEvidences.push(IDS[evidenceName].name);
                break;
        }
    }
    for(let ghostName of ghostList)
    {
        let ghostData = ghostsDB[ghostName];
        let ghostElement = document.getElementById(ghostName);
        let visibility = true;
        for(let evidence of actualEvidences)
        {
            if(!ghostData.evidences.includes(evidence))
            {
                visibility = false;
                break;
            }
        }
        // There's more than one evidence for some reason..
        // Let's test the strong evidence.
        let strongEvid = ghostData.strongEvidence;
        if(visibility && (strongEvid !== undefined)) // This ghost have a strong evidence
        {
            if(actualEvidences.length >= 2 && !actualEvidences.includes(strongEvid))
            {
                visibility = false;
            }
        }
        if(visibility && hiddenEvidences.length > 1 && ghostName !== 'The Mimic')
        {
            let combineHidden = combinationArrayNRNO(hiddenEvidences, 2);
            for(let childCombine of combineHidden)
            {
                let nbr = 0;
                for(let child of childCombine)
                {
                    if(ghostData.evidences.includes(child))
                    {
                        nbr++;
                    }
                }
                if(nbr == 2)
                {
                    visibility = false;
                    break;
                }
            }
        }
        ghostElement.style.visibility = visibility ? 'visible' : 'collapse';
        ghostElement.style.overflow = visibility ? 'visible' : 'hidden';
    }
    computeSpecialAbilities();
}
function isNightmare(v)
{
    return v.charAt(0) == checkboxEmotes[1];
}
function ghostCheck(control)
{
    let evidence = IDS[`${control.id}`];
    if(evidence.isMode) // It's mod mode toggle
    {
        // Assign new value to evidence
        evidence.value = control.value;
        if(control.id === 'nightmare') // nightmare
        {
            if(isNightmare(evidence.value)) // Nightmare mode
            {
                computeNightmare();
            }
            else // Not nightmare mode
            {
                computeNormal();
            }
        }
        else
        {
            if(isNightmare(IDS[`nightmare`].value)) // Is nightmare mode
            {
                computeNightmare();
            }
            else // Not nightmare mode
            {
                computeNormal();
            }
        }
    }
    else
    {
        if(isNightmare(IDS[`nightmare`].value)) // Is nightmare mode
        {
            computeNightmare();
        }
        else // Not nightmare mode
        {
            computeNormal();
        }
    }
}

// Multi-state
function dualstate(control, value1, value2)
{
    switch (control.value.charAt(0)) {
        case value1:
            control.value = value2;
            break;
        case value2:
            control.value = value1;
            break;
        default:
            throw new Error('Unexpected checkbox value');
    }
}
function tristate(control, value1, value2, value3)
{
    switch (control.value.charAt(0))
    {
        case value1:
            control.value = value2;
            break;
        case value2:
            control.value = value3;
            break;
        case value3:
            control.value = value1;
            break;
        default:
            throw new Error('Unexpected checkbox value');
    }
}
function evidenceMark(control)
{
    tristate(control, checkboxEmotes[0], checkboxEmotes[1], checkboxEmotes[2]);
    ghostCheck(control);
}
function modeMark(control)
{
    dualstate(control, checkboxEmotes[1], checkboxEmotes[2]);
    ghostCheck(control);
}
window.onload = () => {
    createGhostList();
}