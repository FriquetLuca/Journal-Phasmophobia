'use strict';
class Tristate {
    static TRUE = '\u2705';
    static FALSE = '\u274C';
    static NEUTRAL = '\u2753';
}
let AUTOR_DATABASE = {
    'en': '- The diary.',
    'fr': '- Le journal.'
};
let TITLE_DATABASE = {
    'speed': {
        name: {
            'fr': 'Vitesse',
            'en': 'Speed'
        }
    },
    'hunt': {
        name: {
            'fr': 'Chasse',
            'en': 'Hunt'
        }
    },
    'behaviour': {
        name: {
            'fr': 'Comportement',
            'en': 'Behaviour'
        }
    },
    'ability': {
        name: {
            'fr': 'Abilité',
            'en': 'ability',
        }
    },
    'strenght': {
        name: {
            'fr': 'Force',
            'en': 'Strenght',
        }
    },
    'weakness': {
        name: {
            'fr': 'Faiblesse',
            'en': 'Weakness',
        }
    }
}
let DATABASE = {
    'Evidences': {
        name: 'Evidences',
        id: 'evidences',
        subId: 'evidence',
        text: {
            'fr': 'Évidences',
            'en': 'Evidences'
        },
        list: {
            'dots': {
                name: 'dots',
                icon: 'dots-projector.webp',
                text: {
                    'en': 'D.O.T.S. Projector',
                    'fr': 'Projecteur D.O.T.S.'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate'
            },
            'emf-5': {
                name: 'emf-5',
                icon: 'emf-reader.webp',
                text: {
                    'en': 'EMF Level 5',
                    'fr': 'EMF Niveau 5'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate'
            },
            'fingerprints': {
                name: 'fingerprints',
                icon: 'fingerprints.webp',
                text: {
                    'en': 'Fingerprints',
                    'fr': 'Empruntes'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate'
            },
            'freezing-temperatures': {
                name: 'freezing-temperatures',
                icon: 'thermometer.webp',
                text: {
                    'en': 'Freezing Temperatures',
                    'fr': 'Température glaciale'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate'
            },
            'ghost-orb': {
                name: 'ghost-orb',
                icon: 'ghost-orb.webp',
                text: {
                    'en': 'Ghost Orb',
                    'fr': 'Orbe fantômatique'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate'
            },
            'ghost-writing': {
                name: 'ghost-writing',
                icon: 'writing-book.webp',
                text: {
                    'en': 'Ghost Writing',
                    'fr': 'Écriture fantômatique'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate'
            },
            'spirit-box': {
                name: 'spirit-box',
                icon: 'spirit-box.webp',
                text: {
                    'en': 'Spirit Box',
                    'fr': 'Spirit Box'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate'
            }
        }
    },
    'Behaviour': {
        name: 'Behaviour',
        id: 'behaviours',
        subId: 'behaviour',
        text: {
            'fr': 'Comportement',
            'en': 'Behaviour'
        },
        list: {
            'turn-on-light': {
                name: 'turn-on-light',
                text: {
                    'en': 'Turn on the light',
                    'fr': 'Allume la lumière'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate',
                defaultValue: Tristate.NEUTRAL
            },
            'turn-on-breaker': {
                name: 'turn-on-breaker',
                text: {
                    'en': 'Turn on the breaker',
                    'fr': 'Allume le fusible'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate',
                defaultValue: Tristate.NEUTRAL
            },
            'turn-off-breaker': {
                name: 'turn-off-breaker',
                text: {
                    'en': 'Turn off the breaker',
                    'fr': 'Coupe le fusible'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate',
                defaultValue: Tristate.NEUTRAL
            },
            'footprints': {
                name: 'footprints',
                text: {
                    'en': 'Footprints',
                    'fr': 'Trace de pas'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate',
                defaultValue: Tristate.NEUTRAL
            },
            'air-ball-event': {
                name: 'air-ball-event',
                text: {
                    'en': 'Air ball event',
                    'fr': 'Événement boule d\'air'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate',
                defaultValue: Tristate.NEUTRAL
            },
            'banshee-scream': {
                name: 'banshee-scream',
                text: {
                    'en': 'Scream (Parabolic)',
                    'fr': 'Cris (Microphone Parabolique)'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate',
                defaultValue: Tristate.NEUTRAL
            },
            'deogen-breath': {
                name: 'deogen-breath',
                text: {
                    'en': 'Heavy breath (Spirit Box)',
                    'fr': 'Respiration lourde (Spirit Box)'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate',
                defaultValue: Tristate.NEUTRAL
            },
            'yurei-door': {
                name: 'yurei-door',
                text: {
                    'en': 'Sound delay (Closed door noise)',
                    'fr': 'Délais sonore (Bruit de porte fermée)'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate',
                defaultValue: Tristate.NEUTRAL
            },
            'obake-fringer': {
                name: 'obake-fringer',
                text: {
                    'en': 'Unique fingerprint',
                    'fr': 'Emprunte unique'
                },
                value: Tristate.NEUTRAL,
                type: 'tristate',
                defaultValue: Tristate.NEUTRAL
            }
        }
    },
    'Hunt': {
        name: 'Hunt',
        id: 'hunts',
        subId: 'hunt',
        text: {
            'fr': 'Chasse',
            'en': 'Hunt'
        },
        list: {
            'sanity': {
                name: 'sanity',
                text: {
                    'fr': 'Santé mentale (1è chasse)',
                    'en': 'Sanity (1st hunt)'                    
                },
                value: 0,
                type: 'select',
                selectValue: {
                    'fr': generateNumber(20, 'fr'),
                    'en': generateNumber(20, 'en')
                },
                defaultId: 'unknown'
            },
            'blind-speed': {
                name: 'blind-speed',
                text: {
                    'fr': 'Vitesse (ne voit pas le joueur)',
                    'en': 'Speed (don\'t see the player)'                    
                },
                value: 0,
                type: 'select',
                selectValue: {
                    'fr': [
                        {value: 'Inconnue', id: 'unknown'},
                        {value: 'Rapide', id: 'fast'},
                        {value: 'Normal', id: 'normal'},
                        {value: 'Lent', id: 'slow'}
                    ],
                    'en': [
                        {value: 'Unknown', id: 'unknown'},
                        {value: 'Fast', id: 'fast'},
                        {value: 'Normal', id: 'normal'},
                        {value: 'Slow', id: 'slow'}
                    ]
                },
                defaultIndex: 'unknown'
            },
            'targeting-speed': {
                name: 'targeting-speed',
                text: {
                    'fr': 'Vitesse (voit le joueur)',
                    'en': 'Speed (see the player)'                    
                },
                value: 0,
                type: 'select',
                selectValue: {
                    'fr': [
                        {value: 'Inconnue', id: 'unknown'},
                        {value: 'Rapide', id: 'fast'},
                        {value: 'Normal', id: 'normal'},
                        {value: 'Lent', id: 'slow'}
                    ],
                    'en': [
                        {value: 'Unknown', id: 'unknown'},
                        {value: 'Fast', id: 'fast'},
                        {value: 'Normal', id: 'normal'},
                        {value: 'Slow', id: 'slow'}
                    ]
                },
                defaultId: 'unknown'
            }
        }
    },
    'Modes': {
        name: 'Modes',
        id: 'modes',
        subId: 'mode',
        text: {
            'fr': 'Mode',
            'en': 'Mode'
        },
        list: {
            'nightmare': {
                name: 'nightmare',
                text: {
                    'fr': 'Cauchemar',
                    'en': 'Nightmare'                    
                },
                value: Tristate.FALSE,
                type: 'dualstate',
                defaultValue: Tristate.FALSE
            }
        }
    },
    'Options': {
        name: 'Options',
        id: 'options',
        subId: 'option',
        text: {
            'fr': 'Options',
            'en': 'Options'
        },
        list: {
            'reset': {
                name: 'reset',
                text: {
                    'fr': 'Réinitialiser',
                    'en': 'Reset'                    
                },
                type: 'button'
            },
            'language': {
                name: 'language',
                text: {
                    'fr': 'Langue',
                    'en': 'Language'                    
                },
                value: 'fr',
                type: 'select',
                selectValue: {
                    'fr': [
                        {value: 'Français', id: 'fr'},
                        {value: 'Anglais', id: 'en'}
                    ],
                    'en': [
                        {value: 'French', id: 'fr'},
                        {value: 'English', id: 'en'}
                    ]
                },
                defaultId: 'fr'
            }
        }
    }
};
let GHOST_DATABASE = {
    'Banshee': {
        id: 'banshee',
        name: 'Banshee',
        name_text: {
            'fr': 'Banshee',
            'en': 'Banshee'
        },
        evidences: [
            'dots',
            'fingerprints',
            'ghost-orb'
        ],
        strenght: {
            'fr': "Ne s'attaque qu'à une victime à la fois.",
            'en': "Hunt only one victim at a time."
        },
        weakness: {
            'fr': "Ses cris s'entendent au microphone parabolique.",
            'en': ''
        },
        description: {
            'fr': "La sirène qui chante, connue pour attirer ses victimes à travers ses chants. Elle est connue pour isoler sa proie avant de mettre le coup fatal.",
            'en': ''
        },
        ability: {
            'fr': '<p>Elle choisie une cible au début du jeu et ne changera de cible que si cette dernière meurt (ou quitte la partie).</p>',
            'en': ''
        },
        behaviour: {
            'fr': `
                <p>Elle a une chance de faire un son paranormal unique lorsque le <strong class="italic">microphone parabolique</strong> est utilisé.</p>
                <audio controls id="banshee-scream" class="sound-display">
                    <source src="assets/audio/banshee-scream.mp3" type="audio/mpeg" />
                </audio>
                <p>Elle peut choisir un joueur au hasard et marcher vers ce dernier créant un <strong class="italic">EMF 2</strong>.</p>
                <p>Elle préfère causer des événements où elle chante. Si sa cible la fait disparaître durant un événement musical en la touchant, sa santé mentale se réduit de 15% au lieu de 10%.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
                <p>La chasse est basée sur la santé mentale de la cible de la Banshee, ainsi une chasse sera démarrée si sa cible est en dessous de 50% de santé mentale. Tous les joueurs, autres que sa cible, seront ignorés durant une chasse. Si une chasse démarre sans sa cible présente dans le bâtiment, elle choisira alors une cible temporaire.</p>
                <p>L'objectif <strong class="italic">\"repousser le fantôme lorsqu'il chasse quelqu'un\"</strong> n'est pas possible avec de <strong class="italic">l'encent</strong> (à moins qu'elle ne chasse sa cible lorsque ça se produit).</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
                <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
                <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
    },
    'Demon': {
        id: 'demon',
        name: 'Demon',
        name_text: {
            'fr': 'Démon',
            'en': 'Demon'
        },
        evidences: [
            'fingerprints',
            'freezing-temperatures',
            'ghost-writing'
        ],
        strenght: {
            'fr': "Ils chassent plus souvent que les autres entités.",
            'en': ''
        },
        weakness: {
            'fr': "L'effet du crucifix est accrus contre eux jusqu'à 5 mètres.",
            'en': ''
        },
        description: {
            'fr': "Un démon est l'une des pires entités que l'on puisse rencontrer. Il est connu pour attaquer sans raison.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Il peut décider de démarrer une chasse quand il le désire. Lorsqu'il utilise cette abilité, il choisit un joueur au hasard et va vers ce joueur.</p>
            <p>Si il a ce joueur en vue dans les 20 secondes, la chasse sera initiée.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>La portée du <strong class="italic">crucifix</strong> est de 5 mètres pour lui (au lieu de 3 mètres pour les autres).</p>`,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Il peut démarrer des chasses dès que la santé moyenne de l'équipe est en dessous de 70%.</p>
            <p>Si il le désire, le Démon peut démarrer une chasse toutes les 20 secondes (contrairement aux autres entités peuvent démarrer une chasse toutes les 25 secondes).</p>
            <p>Si un <strong class="italic">encent</strong> est utilisé près de lui, il ne pourra pas démarrer une chasse pendant 60 secondes (au lieu de 90 secondes pour les autres entités).</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 100
    },
    'Deogen': {
        id: 'deogen',
        name: 'Deogen',
        name_text: {
            'fr': 'Deogen',
            'en': 'Deogen'
        },
        evidences: [
            'dots',
            'ghost-writing',
            'spirit-box'
        ],
        strongEvidence: 'spirit-box',
        strenght: {
            'fr': "Ils sentent constamment les vivants durant une chasse et avancent rapidement vers leurs positions.",
            'en': ''
        },
        weakness: {
            'fr': "Ils avancent lentement quand ils voient leurs victimes.",
            'en': ''
        },
        description: {
            'fr': "Parfois entourés d'un brouillard sans fin, les Deogen ont échappé aux chasseurs de fantômes pendant des années. Les rapports indiquent que ces entités trouvent même leurs proies les mieux cachés, avant de les harcelées jusqu'à l'épuisement.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Il connaît la position de tous les joueurs.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Il a 33% de chance par question de produire une réponse unique à la <strong class="italic">Spirit Box </strong> lorsque le joueur est situé à 1 mètre de ce dernier: une respiration lourde et constante durant 3 à 4 secondes.</p>
            <audio controls id="deogen-breath" class="sound-display">
                <source src="assets/audio/deogen-breath.mp3" type="audio/mpeg" />
            </audio>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Il ne peut démarrer une chasse que lorsque la santé mentale est en dessous de 40%.</p>
            <p>Lors du début d'une chasse, il ira vers le joueur le plus proche de lui. Il peut occasionnellement choisir un joueur au hasard.</p>
            <p>Durant une chasse, sa vitesse est déterminée par la distance qui le sépare du joueur (2.5 à 6 mètres de distance). Au plus le joueur est loin, au plus il sera rapide. Sa vitesse varie ainsi entre 0.4 et 3 m/s.</p>
            <p>Il clignotte plus rapidement ; il est visible durant de plus long intervales et/ou il est invisible durant de plus court intervales.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse proche d'une victime :</strong> 0,4 m/s</p>
            <p><strong>Vitesse loin d'une victime :</strong> 3 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'fast', 'normal', 'slow' ],
        speedChase: [ 'fast', 'normal', 'slow' ],
        sanity: 40
    },
    'Goryo': {
        id: 'goryo',
        name: 'Goryo',
        name_text: {
            'fr': 'Goryo',
            'en': 'Goryo'
        },
        evidences: [
            'dots',
            'emf-5',
            'fingerprints'
        ],
        strongEvidence: 'dots',
        strenght: {
            'fr': "Ses interactions avec le projecteur D.O.T.S. ne sont visible qu'au travers une caméra.",
            'en': ''
        },
        weakness: {
            'fr': "Tends à rester dans sa pièce.",
            'en': ''
        },
        description: {
            'fr': "Lorsqu'un Goryo passe à travers un projecteur D.O.T.S., employer une caméra est le seul moyen pour le voir.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Sa distance pour erré est généralement petite.</p>
            <p>Il ne réagit aux <strong class="italic">D.O.T.S.</strong> que si aucun joueur n'est dans sa pièce et il est uniquement visible à la caméra.</p>
            <p>Il est possible que le joueur puisse voir les <strong class="italic">D.O.T.S.</strong> si le Goryo interagit avec et si il est assez loin du joueur.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
    },
    'Hantu': {
        id: 'hantu',
        name: 'Hantu',
        name_text: {
            'fr': 'Hantu',
            'en': 'Hantu'
        },
        evidences: [
            'fingerprints',
            'freezing-temperatures',
            'ghost-orb'
        ],
        strongEvidence: 'freezing-temperatures',
        strenght: {
            'fr': "Il avance plus rapidement dans les températures les plus basses.",
            'en': ''
        },
        weakness: {
            'fr': "Les températures les plus élevées le font ralentir.",
            'en': ''
        },
        description: {
            'fr': "Le Hantu est une entitée rare qui apprécie les climats les plus froids. Le froid tends à les rendres plus aggressif et puissant.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Il ne peut pas allumer le fusible.</p>
            <p>Il peut éteindre le fusible deux fois plus souvent.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Sa vitesse dépends de la température autour de lui. Lorsque le fusible est branché, il sera en conséquent plus lent parce que la maison sera chauffée.</p>
            <p>Il n'accélère pas si on le garde en ligne de vue.</p>
            <p>Lorsqu'il est visible, émet un souffle glacé lorsqu'il est dans une pièce avec une <strong class="italic">température</strong> inférieur ou égale à 3°C (Les joueurs décédés ne peuvent pas voir ce souffle).</p>
            <p>Il est conseillé de ne pas le faire tourner trop longtemps autour de fourniture lorsque la pièce est chaude puisque la simple présence du Hantu suffit à faire baisser la température et donc lui augmente sa vitesse au fur et à mesure.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse dépendante de la <strong class="italic">température</strong> :</strong></p>
            <p>• <strong>inférieur à 3°C :</strong> 2,7 m/s</p>
            <p>• <strong>entre 3 - 6°C :</strong> 2,5 m/s</p>
            <p>• <strong>entre 6 - 9°C :</strong> 2,3 m/s</p>
            <p>• <strong>entre 9 - 12°C :</strong> 2,1 m/s</p>
            <p>• <strong>entre 12 - 15°C :</strong> 1,75 m/s</p>
            <p>• <strong>supérieur à 15°C :</strong> 1,4 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'fast', 'normal', 'slow' ],
        speedChase: [ 'fast', 'normal', 'slow' ],
        sanity: 50
    },
    'Jinn': {
        id: 'jinn',
        name: 'Jinn',
        name_text: {
            'fr': 'Djinn',
            'en': 'Jinn'
        },
        evidences: [
            'emf-5',
            'fingerprints',
            'freezing-temperatures'
        ],
        strenght: {
            'fr': "Il avance à plus grande vitesse lorsque sa victime s'éloigne.",
            'en': ''
        },
        weakness: {
            'fr': "Il ne peut pas utiliser son abilité si le courant est coupé.",
            'en': ''
        },
        description: {
            'fr': "Un Djinn est une entitée territorial qui attaque quand il est menacé. Il est également connu pour se déplacer à une vitesse signifiante.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Si le fusible est branché, il peut utiliser son abilité qui réduit de 25% la santé mentale de tous les joueurs présent aux environs de 3 mètres de lui et génère au fusible un <strong class="italic">EMF 2</strong> ou <strong class="italic">EMF 5.</strong></p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Il ne peut pas éteindre le fusible, seulement le faire sauter en allumant une lampe de trop.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Si il voit un joueur, il avance jusqu'au joueur à une vitesse de 2,5 m/s instantanément jusqu'à ce qu'il soit à environs 2 mètres du joueur avant d'avancer à sa vitesse de base.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s (instantané)</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'fast' ],
        sanity: 50
    },
    'Mare': {
        id: 'mare',
        name: 'Mare',
        name_text: {
            'fr': 'Cauchemar',
            'en': 'Mare'
        },
        evidences: [
            'ghost-orb',
            'ghost-writing',
            'spirit-box'
        ],
        strenght: {
            'fr': "Attaque plus souvent dans le noir.",
            'en': ''
        },
        weakness: {
            'fr': "Allumer la lumière réduit les chances qu'il attaque.",
            'en': ''
        },
        description: {
            'fr': "Le Cauchemar est la source de tous les cauchemars, le rendant plus puissant dans la pénombre.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Si on allume une lampe près de lui, il a une chance de l'éteindre immédiatement.</p>
            <p>Il n'allume jamais de lampe. Si il décide d'erré, il choisira plus souvent des pièces qui ne sont pas éclairées.</p>
            <p>Il fait plus souvent des événements où il explose des ampoules.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Si les lampes sont éteintes, il peut déclancher une chasse à partir de 60% de santé mentale. Dans le cas contraire, ce sera à partir de 40%.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 60
    },
    'Moroi': {
        id: 'moroi',
        name: 'Moroi',
        name_text: {
            'fr': 'Moroï',
            'en': 'Moroi'
        },
        evidences: [
            'freezing-temperatures',
            'ghost-writing',
            'spirit-box'
        ],
        strongEvidence: 'spirit-box',
        strenght: {
            'fr': "Il avance relativement plus vite lorsque les enquêteurs ont peu de santé mentale. Ils peuvent également faire perdre la santé mentale des enquêteurs plus rapidement qu'usuellement durant une enquête.",
            'en': ''
        },
        weakness: {
            'fr': "L'encent les aveugles plus longtemps durant les chasses.",
            'en': ''
        },
        description: {
            'fr': "Le Moroï est sorti de sa tombe pour absorber l'énergie des vivants. Ils sont connu pour placer des malédictions sur leurs victimes, curable uniquement par antidotes ou en partant au loin.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Si un joueur obtient une réponse à la <strong class="italic">Spirit Box</strong> où entends un bruit au <strong class="italic">microphone parabolique</strong>, il maudira ce joueur tant qu'il restera dans la zone d'investigation (la lumière n'a aucune importance). Il est possible d'être maudit plusieurs fois mais pas d'accumuler la malédiction.</p>
            <p>On peut briser la malédiction en prenant des <strong class="italic">pillules</strong>.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            Rien à signaler.
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Il devient plus rapide au plus la santé mentale est basse. Entre 1,5 m/s avec une santé mentale moyenne de 50% et 2,25 m/s à 0%. Il y a une augmentation de sa vitesse de 0.075 m/s pour chaque 5% de santé mentale perdue.</p>
            <p>Si on utilise <strong class="italic">l'encent</strong>, la durée durant laquelle il ne peut pas voir est de 12 secondes (au lieu des 6 usuelles).</p>
            <p>Il accélère lorsqu'il est vu par le joueur. A sa vitesse maximum, il est plus rapide qu'un Revenant.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> entre 1,5 et 2,25 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,25 et 3,71 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal', 'fast' ],
        speedChase: [ 'normal', 'fast' ],
        sanity: 50
    },
    'Myling': {
        id: 'myling',
        name: 'Myling',
        name_text: {
            'fr': 'Myling',
            'en': 'Myling'
        },
        evidences: [
            'emf-5',
            'fingerprints',
            'ghost-writing'
        ],
        strenght: {
            'fr': "Ses pas sont plus silencieux lorsqu'il chasse.",
            'en': ''
        },
        weakness: {
            'fr': "Produit des sons paranormaux plus fréquement.",
            'en': ''
        },
        description: {
            'fr': "Le Myling est une entitée très vocale et active. Il y a des rumeurs comme quoi ils sont silencieux lorsqu'ils chassent leurs proies.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Il émet beaucoup plus de son paranormal que les autres entités au <strong class="italic">microphone parabolique</strong>.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Le son de ses pas ne s'entends que s'il se situe à une distance d'environs 9 mètres.</p>
            <p>La distance audible des pas d'un Myling lors d'une chasse est par conséquent uniquement audible lorsqu'il interfère avec l'électronique.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
    },
    'Obake': {
        id: 'obake',
        name: 'Obake',
        name_text: {
            'fr': 'Obake',
            'en': 'Obake'
        },
        evidences: [
            'emf-5',
            'fingerprints',
            'ghost-orb'
        ],
        strongEvidence: 'fingerprints',
        strenght: {
            'fr': "Ils peuvent laisser des empruntes qui disparaissent rapidement.",
            'en': ''
        },
        weakness: {
            'fr': "Il laisse parfois une emprunte à six doigts.",
            'en': ''
        },
        description: {
            'fr': "Les Obakes sont terrifiant au changement de corps, capable de prendre bien des formes. Ils ont été vu prendre une forme humanoïde pour attirer leurs proies.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Il peut occasionnellement utiliser son abiliter qui réduit le temps d'existence des <strong class="italic">empruntes</strong> sur la map de moitié (il peut aussi l'utiliser plusieurs fois de suite, réduisant drastiquement le temps de vie des <strong class="italic">empruntes</strong>).</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Lorsqu'il interagit avec une surface, il a 75% de chance de laisser une <strong class="italic">emprunte</strong> (au lieu des 100% usuel).</p>
            <p>Il y a 16,7% de chance qu'il crée une <strong class="italic">emprunte</strong> unique:</p>
            <p>• Une trace de main à six doigts.</p>
            <p>• Deux empruntes de doigts sur un interrupteur au lieu d'une seule.</p>
            <p>• Cinq traces de doigts sur le clavier ou les portes de prison au lieu de quatre.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
    },
    'Oni': {
        id: 'oni',
        name: 'Oni',
        name_text: {
            'fr': 'Oni',
            'en': 'Oni'
        },
        evidences: [
            'dots',
            'emf-5',
            'freezing-temperatures'
        ],
        strenght: {
            'fr': "Augmentation des activités et des événements fantômatiques.",
            'en': ''
        },
        weakness: {
            'fr': "L'augmentation des activités des Onis les rends plus aisés à trouver.",
            'en': ''
        },
        description: {
            'fr': "Les Onis aiment effrayer leurs victimes autant que possible avant d'attaquer. Ils sont souvent vu dans une forme physique, gardant le lieu de leur décès.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Il est très actif et interagit plus souvent avec les objets, surtout si il y a des joueurs dans sa pièce.</p>
            <p>Il peut se manifester entièrement durant un événement.</p>
            <p>Il peut lancer les objets plus haut ou plus loin (un à la fois, ça ne réduit pas la santé mentale des joueurs).</p>
            <p>Il est incapable de produire l'événement de type "ballon d'air". Ainsi, on peut retirer l'Oni si l'on entends le son :</p>
            <audio controls id="sound-air-breath" class="sound-display">
                <source src="assets/audio/air-breath.mp3" type="audio/mpeg" />
            </audio>`,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
    },
    'Onryo': {
        id: 'onryo',
        name: 'Onryo',
        name_text: {
            'fr': 'Onryo',
            'en': 'Onryo'
        },
        evidences: [
            'freezing-temperatures',
            'ghost-orb',
            'spirit-box'
        ],
        strenght: {
            'fr': "Une flamme qui s'éteint peu provoquer l'attaque d'un Onryo.",
            'en': ''
        },
        weakness: {
            'fr': "La présence des flammes réduit l'abilité de l'Onryo à attaquer.",
            'en': ''
        },
        description: {
            'fr': "L'Onryo est souvent référer en tant qu' « Esprit vengeur ». Ils volent les âmes des de ses victimes mourrantes pour se venger. Cette entité est connue pour être effrayée du feu, et fera tout en son pouvoir pour s'en éloigner.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Si une <strong class="italic">bougie</strong>, un <strong class="italic">briquet</strong> ou un feu de camp est éteint par ce dernier, il y a une probabilité qu'il démarre une chasse, peu importe la santé mentale. En multijoueur, cette chance est accrue si un joueur meurt, avec presque une garantie si au moins deux joueurs sont morts.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Il a une plus haute chance que les autres fantômes d'éteindre une bougie.</p>
            <p>Si une flamme est proche de lui, elle agit tel un <strong class="italic">crucifix</strong>, l'empéchant de chasser à une distance de 4 mètres.</p>
            <p>Si il tente de démarrer une chasse près de la flamme, la chasse échouera et il éteindra la <strong class="italic">bougie</strong> à la place.</p>
            <p>Lorsqu'un crucifix posé sous une bougie allumée brûle sans que la bougie s'éteigne en premier, alors l'entité ne peut pas être un Onryo.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Il peut démarrer une chasse dès que la santé mentale est en dessous de 60%.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 100
    },
    'Phantom': {
        id: 'phantom',
        name: 'Phantom',
        name_text: {
            'fr': 'Fantôme',
            'en': 'Phantom'
        },
        evidences: [
            'dots',
            'fingerprints',
            'spirit-box'
        ],
        strenght: {
            'fr': "Regarder un fantôme fait perdre considérablement la santé mentale.",
            'en': ''
        },
        weakness: {
            'fr': "Prendre une photo d'un fantôme le fait disparaître brièvement.",
            'en': ''
        },
        description: {
            'fr': "Un fantôme est une entitée qui peut posséder le vivant, instaurant la peur à quiconque auprès de lui. Ils sont communément invoqués depuis une Ouija.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Si il est prit en photo durant un événement, il disparaît temporairement pour le reste de l'événement. Il sera visible sur la photo et les battements de coeur cessent, cependant la musique d'événement reste.</p>
            <p>Être aux environs de 10 mètres d'un fantôme en étant en ligne de vue de ce dernier réduit la santé mentale de ~0.5% par seconde.</p>
            <p>Il peut choisir un joueur au hasard et marcher vers ce dernier créant un <strong class="italic">EMF 2</strong>.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Si il est prit en photo durant une chasse, il ne sera pas visible sur la photo.</p>
            <p>Le fantôme clignotte environs toutes les 1  ~ 2s comparé aux autres qui ont 0.3 ~ 1s de délais.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
    },
    'Poltergeist': {
        id: 'poltergeist',
        name: 'Poltergeist',
        name_text: {
            'fr': 'Poltergeist',
            'en': 'Poltergeist'
        },
        evidences: [
            'fingerprints',
            'ghost-writing',
            'spirit-box'
        ],
        strenght: {
            'fr': "Capable de lancer plusieurs objets en une fois.",
            'en': ''
        },
        weakness: {
            'fr': "Il deviennent impuissant sans rien autour d'eux.",
            'en': ''
        },
        description: {
            'fr': "L'une des entités les plus connues, le Poltergeist. Connu pour manipulater les objets autour de lui pour instaurer la peur en ses victimes.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Il peut occasionnellement lancer de multiples objets d'un coup, créant un <strong class="italic">EMF 3</strong>. Les objets sont lancés avec plus de force que tous les autres fantômes.</p>
            <p>La santé mentale est réduite de 2% pour chaque objet lancé.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
    },
    'Raiju': {
        id: 'raiju',
        name: 'Raiju',
        name_text: {
            'fr': 'Raiju',
            'en': 'Raiju'
        },
        evidences: [
            'dots',
            'emf-5',
            'ghost-orb'
        ],
        strenght: {
            'fr': "Il avance rapidement près des objets électroniques.",
            'en': ''
        },
        weakness: {
            'fr': "Il brouille l'équipement électronique de plus loin lorsqu'il chasse.",
            'en': ''
        },
        description: {
            'fr': "Un Raiju est un démon qui se courrit du courant électrique. Généralement calme, ils peuvent commencer à s'agiter quand ils sont submergés de puissance.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Lors d'un événement, il interagit avec l'électronique dans un rayon de 15 mètres (au lieu de 10 mètres pour les autres entités).</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Lorsqu'un objet électronique est à porté, il peut démarré une chasse dès 65% de santé mentale.</p>
            <p>Suivant la taille de la map, si il est dans la portée d'une pièce d'équipement électronique, sa vitesse sera de 2,5 m/s:</p>
            <p>• 6 mètres sur une petite map.</p>
            <p>• 8 mètres sur une map moyenne.</p>
            <p>• 10 mètres sur une grande map.</p>
            <p>Ces effets s'appliquent sur l'équipement au sol et tenu dans les mains.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Près d'équipement électronique :</strong> 2,5 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal', 'fast' ],
        speedChase: [ 'normal', 'fast' ],
        sanity: 50
    },
    'Revenant': {
        id: 'revenant',
        name: 'Revenant',
        name_text: {
            'fr': 'Revenant',
            'en': 'Revenant'
        },
        evidences: [
            'freezing-temperatures',
            'ghost-orb',
            'ghost-writing'
        ],
        strenght: {
            'fr': "Il avance beaucoup plus vite lorsqu'il perçoit ses cibles lorsqu'il chasse.",
            'en': ''
        },
        weakness: {
            'fr': "Il est très lent lorsqu'il ne chasse pas une cible.",
            'en': ''
        },
        description: {
            'fr': "Le Revenant est une entitée violente qui attaque sans discrimination. Leur vitesse peut être décevante, vu qu'ils sont lent pendant la dormance ; cependant, aussitôt qu'ils chassent ils peuvent avancer incroyablement vite.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Sa vitesse lors d'une chasse varie fortement des autres entités. Il est très lent si il n'a pas de cible en vue (1,1 m/s), sinon il est extrêmement rapide (3 m/s).</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,1 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 3 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'slow' ],
        speedChase: [ 'fast' ],
        sanity: 50
    },
    'Shade': {
        id: 'shade',
        name: 'Shade',
        name_text: {
            'fr': 'Ombre',
            'en': 'Shade'
        },
        evidences: [
            'emf-5',
            'freezing-temperatures',
            'ghost-writing'
        ],
        strenght: {
            'fr': "Sa timidité la rends difficile à localiser et à obtenir une évidence.",
            'en': ''
        },
        weakness: {
            'fr': "Elle a moins de chance d'attaquer si plusieurs personnes sont dans les alentours.",
            'en': ''
        },
        description: {
            'fr': "Une ombre est connue pour être très timide. Plusieurs évidences supposent que l'Ombre arrêtera toute activité paranormal si il y a plusieurs personnes dans les environs.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Au plus la santé mentale est haute, au moins elle est active.</p>
            <p>Elle préfère se hisser dans les oreilles du joueur, mais peut se manifester en tant qu'ombre (rare).</p>
            <p>Il est incapable de donner une interaction <strong class="italic">EMF 3</strong> lorsqu'il y a un ou plusieurs joueurs dans la même pièce que lui.</p>
            <p>Si elle est invoqué, elle a une chance d'apparaître en tant qu'ombre noir transparente plutôt que dans sa forme complète tant qu'elle est piégée dans le cercle d'invocation.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Elle ne démarre pas de chasse tant que la santé mentale n'est pas en dessous de 35%.</p>
            <p>Elle est incapable de chasser lorsqu'il y a un ou plusieurs joueurs dans la même pièce que lui.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 35
    },
    'Spirit': {
        id: 'spirit',
        name: 'Spirit',
        name_text: {
            'fr': 'Esprit',
            'en': 'Spirit'
        },
        evidences: [
            'emf-5',
            'ghost-writing',
            'spirit-box'
        ],
        strenght: {
            'fr': "Aucune.",
            'en': ''
        },
        weakness: {
            'fr': "L'encent est très efficace, empêchant une chasse durant plus longtemps.",
            'en': ''
        },
        description: {
            'fr': "L'Esprit est une entitée très commune. Ils sont très puissants, mais passif, et n'attaque que quand ils doivent le faire. Ils défendent coûte que coûte le lieu de leur décès, tuant quiconque est surpris à dépasser son temps d'accueil.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Si un encent est utilisé près de lui, il ne pourra pas démarrer une chasse pendant 180 secondes (au lieu de 90 secondes pour les autres entités).</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
    },
    'Thaye': {
        id: 'thaye',
        name: 'Thaye',
        name_text: {
            'fr': 'Thayé',
            'en': 'Thaye'
        },
        evidences: [
            'dots',
            'ghost-orb',
            'ghost-writing'
        ],
        strenght: {
            'fr': "Entrer dans leur champ d'action les rends plus actifs, défensif et agile.",
            'en': ''
        },
        weakness: {
            'fr': "Ils deviennent plus lent et moins actif au fil du temps.",
            'en': ''
        },
        description: {
            'fr': "Le Thayé est connu pour vieillir rapidement au fil du temps, même dans l'au-delà. De ce que nous avons appris, ils semblent se détériorer plus rapidement à la présence des vivants.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Toutes les 1 à 2 minutes, le Thayé va tenter de vieillir. Si un joueur se trouve dans la même pièce que lui, alors il vieilli. Si aucun joueur n'est présent, alors il recommencera le processus 30 secondes plus tard.</p>
            <p>Il peut vieillir jusqu'à 10 fois</p>
            <p>Chaque fois qu'il prends de l'âge :</p>
            <p>• La santé mentale minimum pour qu'il démarre une chasse diminue de 6%.</p>
            <p>• Sa vitesse se réduit de 0.175 m/s lors de la chasse.</p>
            <p>• 15% de réduction sur les chances d'obtenir un événement / une interaction.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Au début de la partie, le Thayé a 200% de faire une interaction ou un événement paranormal.</p>
            <p>Au fil du temps, l'âge donné par la planche Ouija augmentera.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Suite à son abilité, le Thayé n'accélère pas lors d'une chasse.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse quand il est jeune :</strong> 2,75 m/s</p>
            <p><strong>Vitesse quand il est vieux :</strong> 1 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'slow', 'normal', 'fast' ],
        speedChase: [ 'slow', 'normal', 'fast' ],
        sanity: 75
    },
    'The Mimic': {
        id: 'themimic',
        name: 'The Mimic',
        name_text: {
            'fr': 'Le Mimic',
            'en': 'The Mimic'
        },
        evidences: [
            'fingerprints',
            'freezing-temperatures',
            'ghost-orb',
            'spirit-box'
        ],
        strongEvidence: 'ghost-orb',
        strenght: {
            'fr': "Peut copier les abilités et les traîts des autres entitées.",
            'en': ''
        },
        weakness: {
            'fr': "Présente les orbes fantômatique en évidence secondaire.",
            'en': ''
        },
        description: {
            'fr': "Le Mimic est un fantôme insaisissable, mystérieux et imitateur qui reproduit les traits et les comportements d'autres personnes, y compris d'autres types de fantômes.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Il peut imiter tous les types d'entités et ainsi hérité de toutes les capacités et abilités de l'entité qu'il décide de copier.</p>
            <p>Il peut copier des caractéristiques des évidences (exemple: les traces de pas invisible aux <strong class="italic">lampes UV</strong> du Spectre) mais pas les évidences elles-mêmes.</p>
            <p>Il peut imiter le joueur ou le Mimic, mais dans ce cas il agira alors comme un fantôme normal.</p>
            <p>Lorsqu'il choisit d'imiter le Thayé, il choisira un âge aléatoire et au lieu de vieillir comme le Thayé, il imitera une autre entité.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Il donne pour évidence les orbes fantômatiques en plus de ses trois évidences de base et ce qu'importe la difficulté.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Varie suivant l'entité imitée.</p>`,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Varie selon l'entité qu'il incarne.</strong></p>
            `,
            'en': ''
        },
        speedMesure: [ 'slow', 'normal', 'fast' ],
        speedChase: [ 'slow', 'normal', 'fast' ],
        sanity: 100
    },
    'The Twins': {
        id: 'thetwins',
        name: 'The Twins',
        name_text: {
            'fr': 'Les Jumeaux',
            'en': 'The Twins'
        },
        evidences: [
            'emf-5',
            'freezing-temperatures',
            'spirit-box'
        ],
        strenght: {
            'fr': "Les deux jumeaux peuvent lancer une chasse, mais pas en même temps.",
            'en': ''
        },
        weakness: {
            'fr': "Interagit souvent avec l'environnement en même temps.",
            'en': ''
        },
        description: {
            'fr': "Ces entités ont été signalés comme imitant les actions des autres. Ils alternent leurs attaques pour confondre leurs proies.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Les Jumeaux ne sont qu'une seule entité composée d'un corps principal et d'un leurre.</p>
            <p>Le leurre ne fait pas marcher les <strong class="italic">détecteurs de mouvements</strong>, ne réduit pas la <strong class="italic">température</strong> et ne réponds pas à la <strong class="italic">Spirit Box</strong> mais laisse un <strong class="italic">EMF 5</strong>.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Si il démarre une chasse, il y a une chance sur deux que ce soit le leurre qui chasse.</p>
            <p>Le leurre est 10% plus rapide qu'un fantôme usuel tandis que le corps principal est 10% plus lent.</p>
            <p>Lorsqu'un <strong class="italic">crucifix</strong> est utilisé pour empêcher une chasse, qu'importe le jumeau qui chasse, le <strong class="italic">crucifix</strong> s'appliquera uniquement au corps principal.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 (± 0,16) m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 (± 0,25) m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'slow', 'normal' ],
        speedChase: [ 'normal', 'fast' ],
        sanity: 50
    },
    'Wraith': {
        id: 'wraith',
        name: 'Wraith',
        name_text: {
            'fr': 'Spectre',
            'en': 'Wraith'
        },
        evidences: [
            'dots',
            'emf-5',
            'spirit-box'
        ],
        strenght: {
            'fr': "Ils ne laissent pas de traces de pas visible à la lumière UV après avoir marché dans le sel.",
            'en': ''
        },
        weakness: {
            'fr': "Il devient plus actif si il marche dans du sel.",
            'en': ''
        },
        description: {
            'fr': "Le Spectre est l'une des entitées les plus dangereuse que vous pourrez trouver. C'est aussi la seule entitée connue qui a la capacité de voler et qui est parfois connu pour voyager à travers les murs.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Il a une chance de se téléporter à environs 3 mètres d'un joueur avec 75% chance de générer un <strong class="italic">EMF 2</strong> et 25% chance de générer un <strong class="italic">EMF 5</strong>.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Si il marche dans le sel, aucune trace de pas ne sera visible aux <strong class="italic">lumières UV</strong>.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Il ne peut pas se téléporter pendant une chasse (il peut néanmoins initier une chasse après téléportation).</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
    },
    'Yokai': {
        id: 'yokai',
        name: 'Yokai',
        name_text: {
            'fr': 'Yokai',
            'en': 'Yokai'
        },
        evidences: [
            'dots',
            'ghost-orb',
            'spirit-box'
        ],
        strenght: {
            'fr': "Parler près d'un Yokai le mettra en colère, ce qui augmentera ses chances d'attaquer.",
            'en': ''
        },
        weakness: {
            'fr': "Il ne peut entendre que des voix proches de lui pendant qu'il chasse.",
            'en': ''
        },
        description: {
            'fr': "Les Yokai sont des entitées communes qui sont attirées par les voix humaines. On les trouve généralement dans les maisons familiales.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Si au moins un joueur parle ou émet du bruit, l'activité du Yokai activité augmente.</p>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Si au moins un joueur parle ou émet du bruit, une chasse peut être démarrée en dessous de 80% de santé mentale.</p>
            <p>Il ne peut qu'entendre les joueurs ou sentir les appareils électroniques dans une portée de 2 mètres.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 80
    },
    'Yurei': {
        id: 'yurei',
        name: 'Yurei',
        name_text: {
            'fr': 'Yurei',
            'en': 'Yurei'
        },
        evidences: [
            'dots',
            'freezing-temperatures',
            'ghost-orb'
        ],
        strenght: {
            'fr': "Il affecte plus fortement la santé mentale.",
            'en': ''
        },
        weakness: {
            'fr': "Allumer de l'encent dans la pièce du Yurei réduira la fréquence de ses errances.",
            'en': ''
        },
        description: {
            'fr': "Un Yurei est une entitée qui est revenue dans le monde physique, généralement dans un but de vengeance ou de haine.",
            'en': ''
        },
        ability: {
            'fr': `
            <p>Il peut utiliser son abilité qui réduit de 15% la santé mentale de tous les joueurs situés dans une portée de 7.5 mètres.</p>
            <p>Lorsqu'il emploie son abilité, une porte choisie aléatoirement dans la pièce du Yurei se fermera rapidement avec un son distinct nettement retardé.</p>
            `,
            'en': ''
        },
        behaviour: {
            'fr': `
            <p>Si on emploie de <strong class="italic">l'encent</strong> sur lui, en plus des effets de base, il ne quittera pas sa pièce durant 90s.</p>
            <p>Il offre plus souvent des événements de type "ballon d'air".</p>
            <audio controls id="sound-air-breath" class="sound-display">
                <source src="assets/audio/air-breath.mp3" type="audio/mpeg" />
            </audio>
            `,
            'en': ''
        },
        hunt: {
            'fr': `
            <p>Rien à signaler.</p>
            `,
            'en': ''
        },
        speed: {
            'fr': `
            <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
            <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
            `,
            'en': ''
        },
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
    }
};
let LANGUAGE = 'fr';
class MainDiary {
    static Create()
    {
        const MENU = document.querySelector('.menu');
        for(let dataLabel in DATABASE)
        {
            const MENU_DROPDOWN = new DropdownMenu(DATABASE[dataLabel].text[LANGUAGE], MenuManager.generateInputs(DATABASE[dataLabel], LANGUAGE));
            MENU.appendChild(MENU_DROPDOWN.constructDropdown());
        }
        GhostRender.writeArticles(GHOST_DATABASE, LANGUAGE);
    }
    static Reset()
    {
        for(let element in DATABASE)
        {
            let dbElement = DATABASE[element];
            for(let dbElem in dbElement.list)
            {
                let btn = dbElement.list[dbElem];
                if(btn.type === 'tristate'){
                    btn.value = Tristate.NEUTRAL;
                }
                else if(btn.type === 'dualstate'){
                    btn.value = Tristate.FALSE;
                }
            }
        }
        this.SubReset();
    }
    static SubReset()
    {
        const GHOSTS = document.querySelector('.ghosts');
        GHOSTS.innerHTML = '';
        const lang = document.querySelector('#language');
        if(lang && lang !== null)
        {
            if(LANGUAGE !== lang.value)
            {
                LANGUAGE = lang.value;
                lang.value = LANGUAGE;
                DATABASE['Options'].list['language'].value = LANGUAGE;
                DATABASE['Options'].list['language'].defaultId = LANGUAGE;
            }
        }
        const MENU = document.querySelector('.menu');
        MENU.innerHTML = '';
        this.Create();
        this.Update();
    }
    static Update()
    {
        const lang = document.querySelector('#language');
        if(lang && lang !== null && LANGUAGE !== lang.value)
        {
            this.SubReset();
            return;
        }

        let evidences = document.querySelectorAll(`.evidence_triState`);
        evidences = [...evidences].filter((value) => {
            return value.value !== Tristate.NEUTRAL;
        });
        
        let obtainedEvidences = evidences.filter((value) => {
            return value.value !== Tristate.FALSE;
        });
        let hiddenEvidences = evidences.filter((value) => {
            return value.value !== Tristate.TRUE;
        });

        let behaviours = document.querySelectorAll('.behaviour_triState');
        behaviours = [...behaviours].filter((value) => {
            return value.value !== Tristate.NEUTRAL;
        });
        let hunts = document.querySelectorAll('.hunt > .hunt_triState');
        let mode = document.querySelector('#nightmare');


        let visibility;
        if(mode.value === Tristate.TRUE)
        {
            for(let g in GHOST_DATABASE)
            {
                let actualGhost = GHOST_DATABASE[g];
                let visibility = true;
                if(actualGhost.strongEvidence) // Check for strong evidence
                {
                    let hasStrong = false;
                    for(let evidence of obtainedEvidences)
                    {
                        visibility &= actualGhost.evidences.includes(evidence.id);
                        if(evidence.id === actualGhost.strongEvidence)
                        {
                            hasStrong = true;
                        }
                    }
                    if(obtainedEvidences.length >= 2)
                    {
                        if(obtainedEvidences.length == 2 && actualGhost.id !== 'themimic')
                        {
                            visibility &= hasStrong;
                        }
                        else if(obtainedEvidences.length > 2)
                        {
                            visibility &= hasStrong;
                        }
                    }
                }
                else // No strong evidence for this ghost, classic testing
                {
                    for(let evidence of obtainedEvidences)
                    {
                        visibility &= actualGhost.evidences.includes(evidence.id);
                    }
                }
                // Compute hidden evidences
                if(visibility && hiddenEvidences.length > 1 && actualGhost.id !== 'themimic')
                {
                    let combineHidden = combinationArrayNRNO(hiddenEvidences, 2);
                    for(let childCombine of combineHidden)
                    {
                        let nbr = 0;
                        for(let child of childCombine)
                        {
                            if(actualGhost.evidences.includes(child.id))
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
                // Compute behaviour
                for(let behaviour of behaviours)
                {
                    switch(behaviour.id)
                    {
                        case 'footprints':
                            visibility &= behaviour.value === Tristate.TRUE ? actualGhost.id !== 'wraith' : (actualGhost.id === 'wraith' || actualGhost.id === 'themimic');
                            break;
                        case 'turn-on-breaker':
                            visibility &= behaviour.value === Tristate.TRUE ? actualGhost.id !== 'hantu' : true;
                            break;
                        case 'turn-off-breaker':
                            visibility &= behaviour.value === Tristate.TRUE ? actualGhost.id !== 'jinn' : true;
                            break;
                        case 'turn-on-light':
                            visibility &= behaviour.value === Tristate.TRUE ? actualGhost.id !== 'mare' : true;
                            break;
                        case 'air-ball-event':
                            visibility &= behaviour.value === Tristate.TRUE ? actualGhost.id !== 'oni' : true;
                            break;
                        case 'banshee-scream':
                            visibility &= behaviour.value === Tristate.TRUE ? (actualGhost.id === 'banshee' || actualGhost.id === 'themimic') : true;
                            break;
                        case 'deogen-breath':
                            visibility &= behaviour.value === Tristate.TRUE ? (actualGhost.id === 'deogen' || actualGhost.id === 'themimic') : true;
                            break;
                        case 'yurei-door':
                            visibility &= behaviour.value === Tristate.TRUE ? (actualGhost.id === 'yurei' || actualGhost.id === 'themimic') : true;
                            break;
                        case 'obake-fringer':
                            visibility &= behaviour.value === Tristate.TRUE ? (actualGhost.id === 'obake' || actualGhost.id === 'themimic') : true;
                            break;
                    }
                }
                let ghost = document.querySelector(`.${actualGhost.id}`);
                ghost.style.display = visibility ? 'block' : 'none';
            }
        }
        else
        {
            for(let g in GHOST_DATABASE)
            {
                let actualGhost = GHOST_DATABASE[g];
                visibility = true;
                for(let evidence of obtainedEvidences)
                {
                    visibility &= actualGhost.evidences.includes(evidence.id);
                }
                for(let evidence of hiddenEvidences)
                {
                    visibility &= !actualGhost.evidences.includes(evidence.id);
                }
                // Compute behaviour
                for(let behaviour of behaviours)
                {
                    switch(behaviour.id)
                    {
                        case 'footprints':
                            visibility &= behaviour.value === Tristate.TRUE ? actualGhost.id !== 'wraith' : (actualGhost.id === 'wraith' || actualGhost.id === 'themimic');
                            break;
                        case 'turn-on-breaker':
                            visibility &= behaviour.value === Tristate.TRUE ? actualGhost.id !== 'hantu' : true;
                            break;
                        case 'turn-off-breaker':
                            visibility &= behaviour.value === Tristate.TRUE ? actualGhost.id !== 'jinn' : true;
                            break;
                        case 'turn-on-light':
                            visibility &= behaviour.value === Tristate.TRUE ? actualGhost.id !== 'mare' : true;
                            break;
                        case 'air-ball-event':
                            visibility &= behaviour.value === Tristate.TRUE ? actualGhost.id !== 'oni' : true;
                            break;
                        case 'banshee-scream':
                            visibility &= behaviour.value === Tristate.TRUE ? (actualGhost.id === 'banshee' || actualGhost.id === 'themimic') : true;
                            break;
                        case 'deogen-breath':
                            visibility &= behaviour.value === Tristate.TRUE ? (actualGhost.id === 'deogen' || actualGhost.id === 'themimic') : true;
                            break;
                        case 'yurei-door':
                            visibility &= behaviour.value === Tristate.TRUE ? (actualGhost.id === 'yurei' || actualGhost.id === 'themimic') : true;
                            break;
                        case 'obake-fringer':
                            visibility &= behaviour.value === Tristate.TRUE ? (actualGhost.id === 'obake' || actualGhost.id === 'themimic') : true;
                            break;
                    }
                }
                // Check hunt sanity
                if(visibility)
                {
                    let firstHunySanity = document.querySelector('#sanity').value;
                    if(firstHunySanity !== 'unknown')
                    {
                        visibility = actualGhost.sanity >= firstHunySanity;
                    }
                }
                // Check hunt walking speed
                if(visibility)
                {
                    let walkingSpeed = document.querySelector('#blind-speed').value;
                    if(walkingSpeed !== 'unknown')
                    {
                        visibility = actualGhost.speedMesure.includes(walkingSpeed);
                    }
                }
                // Check hunt chasing speed
                if(visibility)
                {
                    let chasingPlayerSpeed = document.querySelector('#targeting-speed').value;
                    if(chasingPlayerSpeed !== 'unknown')
                    {
                        visibility = actualGhost.speedChase.includes(chasingPlayerSpeed);
                    }
                }
                let ghost = document.querySelector(`.${actualGhost.id}`);
                ghost.style.display = visibility ? 'block' : 'none';
            }
        }
    }
}
class DropdownMenu {
    constructor(name, content)
    {
        this.name = name;
        this.content = content;
    }
    constructDropdown()
    {
        let container = document.createElement('div');
        container.classList.add('menu_btn', 'dropdown', 'noSelect');
        let containerTitle = document.createElement('p');
        containerTitle.classList.add('dropbtn');
        containerTitle.innerText = this.name;
        container.appendChild(containerTitle);
        container.appendChild(this.content);
        return container;
    }
}
class MenuManager {
    static generateInput(elementName, element, language)
    {
        let div = document.createElement('div');
        div.classList.add(elementName.subId);
        div.addEventListener('click', (e) => {
            let evidenceClicked = e.target.closest(`.${elementName.subId}`);
            let triCheckBox = evidenceClicked.querySelector(`.${elementName.subId}_triState`);
            switch(element.type)
            {
                case 'dualstate':
                    triCheckBox.value = triCheckBox.value === Tristate.TRUE ? Tristate.FALSE : Tristate.TRUE;
                    triCheckBox.innerText = triCheckBox.value;
                    DATABASE[elementName.name].list[triCheckBox.getAttribute('id')].value = triCheckBox.value;
                    break;
                case 'tristate':
                    triCheckBox.value = triCheckBox.value === Tristate.NEUTRAL ? Tristate.TRUE : (triCheckBox.value === Tristate.TRUE ? Tristate.FALSE : Tristate.NEUTRAL);
                    triCheckBox.innerText = triCheckBox.value;
                    DATABASE[elementName.name].list[triCheckBox.getAttribute('id')].value = triCheckBox.value;
                    break;
                case 'button':
                    let btnValue = e.target.closest(`.${elementName.subId} > p`).value;
                    if(btnValue === 'reset')
                    {
                        MainDiary.Reset();
                    }
                    break;
            }
            MainDiary.Update();
        });

        let label;
        let input;
        if(element.type === 'select')
        {
            label = document.createElement('p');
            label.setAttribute('for', element.name);
            label.classList.add(`${elementName.subId}_name`);
            label.innerText = element.text[language];
            label.value = element.name;

            input = document.createElement('select');
            input.setAttribute('id', element.name);
            input.classList.add(`${elementName.id}`);

            for(let o of element.selectValue[language])
            {
                let newOpt = document.createElement('option');
                newOpt.classList.add(`${element.name}_${o.id}`, `${elementName.subId}_triState`);
                newOpt.value = o.id;
                if(o.id === element.defaultId)
                {
                    newOpt.selected = true;
                }
                newOpt.innerText = o.value;
                input.appendChild(newOpt);
            }
            
            div.appendChild(label);
            if(element.icon)
            {
                let icon = document.createElement('img');
                icon.classList.add(`${elementName.subId}_icon`);
                icon.setAttribute('src', `assets/icons/${element.icon}`);
                icon.setAttribute('alt', element.text[language]);
                div.appendChild(icon);
            }
            div.appendChild(input);
        }
        else
        {
            label = document.createElement('p');
            label.classList.add(`${elementName.subId}_name`);
            label.setAttribute('name', element.name);
            label.setAttribute('for', element.name);
            label.innerText = element.text[language];
            label.value = element.name;
            if(element.type !== 'button')
            {
                input = document.createElement('p');
                input.classList.add(`${elementName.subId}_triState`);
                input.setAttribute('id', element.name);
                input.setAttribute('type', 'text');
                input.setAttribute('name', element.text[language]);
                input.style.border = 'none';
                input.readOnly = true;
                input.size = 1;
                input.value = element.value;
                input.innerText = element.value;
    
                div.appendChild(input);
            }
            if(element.icon)
            {
                let icon = document.createElement('img');
                icon.classList.add(`${elementName.subId}_icon`);
                icon.setAttribute('src', `assets/icons/${element.icon}`);
                icon.setAttribute('alt', element.text[language]);
                div.appendChild(icon);
            }
            div.appendChild(label);
        }
        return div;
    }
    static generateInputs(input, language)
    {
        let section = document.createElement('section');
        section.classList.add(input.id, 'dropdown_content');
        for(const label in input.list)
        {
            section.appendChild(this.generateInput(input, input.list[label], language));
        }
        return section;
    }
}
class GhostRender {
    static writeDescription(ghost, language)
    {
        let desc = document.createElement('div');
        desc.classList.add('ghost_description');

        let name = document.createElement('h2');
        name.classList.add('ghost_name');
        name.innerHTML = ghost.name_text[language];
        desc.appendChild(name);

        let evidences = document.createElement('div');
        evidences.classList.add('ghost_presentation_evidences');
        for(let evidence of ghost.evidences)
        {
            let evidenceIcon = document.createElement('img');
            evidenceIcon.classList.add('ghost_presentation_evidences_icon');
            evidenceIcon.setAttribute('src', `assets/icons/${DATABASE['Evidences'].list[evidence].icon}`);
            evidenceIcon.setAttribute('alt', DATABASE['Evidences'].list[evidence].text[language]);
            evidences.appendChild(evidenceIcon);
        }
        desc.appendChild(evidences);

        let quote = document.createElement('div');
        quote.classList.add('ghost_quote');
        quote.innerHTML = `
        <cite class="ghost_quote_text">“ ${ghost.description[language]} „</cite>
        <p class="ghost_quote_autor">${AUTOR_DATABASE[language]}</p>
        `;
        desc.appendChild(quote);

        return desc;
    }
    static writeContent(ghost, language)
    {
        let content = document.createElement('div');
        content.classList.add('ghost_content');
        content.innerHTML = `
        <section class="ghost_presentation">
            <div class="ghost_presentation_strenght">
                <h3 class="ghost_presentation_strenght_title">${TITLE_DATABASE['strenght'].name[language]}:</h3>
                <p class="ghost_presentation_strenght_description">${ghost.strenght[language]}</p>
            </div>
            <div class="ghost_presentation_weakness">
                <h3 class="ghost_presentation_weakness_title">${TITLE_DATABASE['weakness'].name[language]}:</h3>
                <p class="ghost_presentation_weakness_description">${ghost.weakness[language]}</p>
            </div>
        </section>
        <section class="ghost_ability">
            <h3 class="ghost_ability_title">${TITLE_DATABASE['ability'].name[language]}</h3>
            <div class="ghost_ability_content">
                ${ghost.ability[language]}
            </div>
        </section>
        <section class="ghost_behaviour">
            <h3 class="ghost_behaviour_title">${TITLE_DATABASE['behaviour'].name[language]}</h3>
            <div class="ghost_behaviour_content">
                ${ghost.behaviour[language]}
            </div>
        </section>
        <section class="ghost_hunt">
            <h3 class="ghost_hunt_title">${TITLE_DATABASE['hunt'].name[language]}</h3>
            <div class="ghost_hunt_content">
                ${ghost.hunt[language]}
            </div>
        </section>
        <section class="ghost_speed">
            <h3 class="ghost_speed_title">${TITLE_DATABASE['speed'].name[language]}</h3>
            <div class="ghost_speed_content">
                ${ghost.speed[language]}
            </div>
        </section>
        `;
        return content;
    }
    static writeArticle(ghost, language)
    {
        let article = document.createElement('section');
        article.classList.add('ghost', ghost.id);
        article.appendChild(this.writeDescription(ghost, language));
        article.appendChild(this.writeContent(ghost, language));
        return article;
    }
    static writeArticles(ghosts, language)
    {
        const container = document.querySelector('.ghosts');
        for(const g in ghosts)
        {
            container.appendChild(this.writeArticle(ghosts[g], language));
        }
    }
}
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
           content // Pass the container of objets itself for referencing
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
       return [content]; // We return the new array of objects made on the way.
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
           copyContent  // Pass the container of newly packed objets itself for referencing
        ); // Go into nested combinations
        Array.prototype.push.apply(result, generated); // Combine result
    }
    return result; // Return the result
}
function generateNumber(n, l) {
    let obj = [];
    switch(l)
    {
        case 'fr':
            obj.push({id: 'unknown', value: 'Inconnu'});
            break;
        case 'en':
            obj.push({id: 'unknown', value: 'Unknown'});
            break;
    }
    for(let i = 0; i <= n; i++)
    {
        obj.push({id: `${i * 5}`, value: i * 5});
    }
    return obj;
}
MainDiary.Create();