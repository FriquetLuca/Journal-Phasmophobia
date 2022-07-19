'use strict';

const ghostsDB = {
    'Banshee': {
        evidences: [
            'D.O.T.S Projector',
            'Fingerprints',
            'Ghost Orb'
        ],
        strenght: "Will target only one player at a time.",
        weakness: "Has a distinctive wail on the Parabolic Microphone.",
        description: "„The singing siren, known for attracting its victims through song. It has been known to single out its prey before making a killing blow.”"
    },
    'Demon': {
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
        evidences: [
            'D.O.T.S Projector',
            'EMF Level 5',
            'Fingerprints'
        ],
        strongEvidence: 'D.O.T.S Projector',
        strenght: "Can only be seen interacting with D.O.T.S. through a camera when nobody is nearby.",
        weakness: "Tends to wander away less from its ghost room.",
        description: "„When a Goryo passes through a DOTS projector, using a video camera is the only way to see it.”"
    },
    'Hantu': {
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
        evidences: [
            'D.O.T.S Projector',
            'EMF Level 5',
            'Freezing Temperatures'
        ],
        strenght: "Increased activity and ghost events.",
        weakness: "An Oni's increased activity makes them easier to find.",
        description: "„Onis love to scare their victims as much as possible before attacking. They are often seen in their physical form, guarding their place of death.”"
    },
    'Onryo': {
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
        evidences: [
            'D.O.T.S Projector',
            'Fingerprints',
            'Spirit Box'
        ],
        strenght: "Looking at a Phantom will lower the player's sanity considerably.",
        weakness: "Taking a photo of the Phantom will cause it to briefly disappear.",
        description: "„A Phantom is a ghost that can possess the living, inducing fear into those around it. They are most commonly summoned from Ouija Boards.”"
    },
    'Poltergeist': {
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
        evidences: [
            'D.O.T.S Projector',
            'Ghost Orb',
            'Ghost Writing'
        ],
        strenght: "Entering the location makes it active, defensive and agile.",
        weakness: "Becomes slower and less active over time.",
        description: "„Thaye have been known to rapidly age over time, even in the afterlife. From what we've learned, they seem to deteriorate faster while within the presence of the living.”"
    },
    'The Mimic': {
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
        evidences: [
            'D.O.T.S Projector',
            'EMF Level 5',
            'Spirit Box'
        ],
        strenght: "Does not leave UV footprints after stepping in salt.",
        weakness: "Will become more active if it steps in salt.",
        description: "„Wraiths are one of the most dangerous ghosts you will find. It is also the only known ghost that has the ability of flight and has sometimes been known to travel through walls.”"
    },
    'Yokai': {
        evidences: [
            'D.O.T.S Projector',
            'Ghost Orb',
            'Spirit Box'
        ],
        strenght: "Talking near the Yokai will anger it, increasing the chance to attack.",
        weakness: "Can only hear voices close to it during a hunt.",
        description: "„Yokai are common ghosts that are attracted to human voices. They can usually be found haunting family homes.”"
    },
    'Yurei': {
        evidences: [
            'D.O.T.S Projector',
            'Freezing Temperatures',
            'Ghost Orb'
        ],
        strenght: "Has a stronger effect on sanity.",
        weakness: "Smudging the Yurei's ghost room will reduce how often it wanders.",
        description: "„A Yurei is a ghost that has returned to the physical world, usually for the purpose of revenge or hatred.”"
    }
};
class trilean {
    constructor(val = 'Unknown')
    {
        this.val = val;
    }
    toggleState()
    {
        switch(this.val)
        {
            case 'Unknown':
                this.val = 'Check';
                break;
            case 'Check':
                this.val = 'Uncheck';
                break;
            case 'Uncheck':
                this.val = 'Unknown';
                break;
        }
    }
    get value()
    {
        return this.val;
    }
    static newTrilean()
    {
        return new trilean('Unknown');
    }
}
let IDS = {
    'dots': {
        check: trilean.newTrilean(),
        name: 'D.O.T.S Projector',
        isEvidence: true
    },
    'emf-5': {
        check: trilean.newTrilean(),
        name: 'EMF Level 5',
        isEvidence: true
    },
    'fingerprints': {
        check: trilean.newTrilean(),
        name: 'Fingerprints',
        isEvidence: true
    },
    'freezing-temperature': {
        check: trilean.newTrilean(),
        name: 'Freezing Temperature'
    },
    'ghost-orbs': {
        check: trilean.newTrilean(),
        name: 'D.O.T.S Projector',
        isEvidence: true
    },
    'ghost-writing': {
        check: trilean.newTrilean(),
        name: 'Ghost Writing',
        isEvidence: true
    },
    'spirit-box': {
        check: trilean.newTrilean(),
        name: 'Spirit Box',
        isEvidence: true
    },
    'nightmare': {
        value: false,
        isMode: true
    }
};
function ghostCheck(control)
{
    let evidence = IDS[control.id];
    if(evidence.isMode) // It's nightmare mode toggle
    {

    }
    else // Anything else
    {
        if(evidence.value) // Value is only use on nightmare, so it's fine to test nightmare mode here
        {

        }
        else
        {
            if(evidence.isEvidence)
            {
                // It's one of the 7 evidences, do something
            }
            else
            {
                // It's not one of the 7 evidences, do something else
            }
        }
        
    }
}
function tristate(control, value1, value2, value3) {
    switch (control.value.charAt(0)) {
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
    ghostCheck(control);
}
function tristate_Marks(control) {
    tristate(control,'\u2753', '\u2705', '\u274C');
}
/*
function tristate_Circles(control) {
    tristate(control,'\u25EF', '\u25CE', '\u25C9');
}
function tristate_Ballot(control) {
    tristate(control,'\u2610', '\u2611', '\u2612');
}
function tristate_Check(control) {
    tristate(control,'\u25A1', '\u2754', '\u2714');
}*/

window.onload = addElements;

function addElements () {
    let nghtmr = document.getElementById('nightmare');
    nghtmr.onclick = () => {
        ghostCheck(nghtmr);
    };
    console.log(nghtmr.name);
}

