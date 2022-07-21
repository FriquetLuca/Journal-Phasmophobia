export const ghostsDB = {
    'Banshee': {
        name: 'Banshee',
        englishName: 'Banshee',
        evidences: [
            'D.O.T.S. Projector',
            'Fingerprints',
            'Ghost Orb'
        ],
        strenght: "Ne s'attaque qu'à une victime à la fois.",
        weakness: "Ses cris s'entendent au microphone parabolique.",
        description: "La sirène qui chante, connue pour attirer ses victimes à travers ses chants. Elle est connue pour isoler sa proie avant de mettre le coup fatal.",
        ability: `<p>Elle choisie une cible au début du jeu et ne changera de cible que si cette dernière meurt (ou quitte la partie).</p>`,
        behaviour: `
            <p>Elle a une chance de faire un son paranormal unique lorsque le <strong class="italic">microphone parabolique</strong> est utilisé.</p>
            <p>Elle peut choisir un joueur au hasard et marcher vers ce dernier créant un <strong class="italic">EMF 2</strong>.</p>
            <p>Elle préfère causer des événements où elle chante. Si sa cible la fait disparaître durant un événement musical en la touchant, sa santé mentale se réduit de 15% au lieu de 10%.</p>
        `,
        hunt: `
            <p>La chasse est basée sur la santé mentale de la cible de la Banshee, ainsi une chasse sera démarrée si sa cible est en dessous de 50% de santé mentale. Tous les joueurs, autres que sa cible, seront ignorés durant une chasse. Si une chasse démarre sans sa cible présente dans le bâtiment, elle choisira alors une cible temporaire.</p>
            <p>L'objectif <strong class="italic">\"repousser le fantôme lorsqu'il chasse quelqu'un\"</strong> n'est pas possible avec de <strong class="italic">l'encent</strong> (à moins qu'elle ne chasse sa cible lorsque ça se produit).</p>
        `
    },
    'Demon': {
        name: 'Démon',
        englishName: 'Demon',
        evidences: [
            'Fingerprints',
            'Freezing Temperatures',
            'Ghost Writing'
        ],
        strenght: "Ils chassent plus souvent que les autres entités.",
        weakness: "L'effet du crucifix est accrus contre eux jusqu'à 5 mètres.",
        description: "Un démon est l'une des pires entités que l'on puisse rencontrer. Il est connu pour attaquer sans raison.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Deogen': {
        name: 'Deogen',
        englishName: 'Deogen',
        evidences: [
            'D.O.T.S. Projector',
            'Ghost Writing',
            'Spirit Box'
        ],
        strongEvidence: 'Spirit Box',
        strenght: "Ils sentent constamment les vivants durant une chasse et avancent rapidement vers leurs positions.",
        weakness: "Ils avancent lentement quand ils voient leurs victimes.",
        description: "Parfois entourés d'un brouillard sans fin, les Deogen ont échappé aux chasseurs de fantômes pendant des années. Les rapports indiquent que ces entités trouvent même leurs proies les mieux cachés, avant de les harcelées jusqu'à l'épuisement.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Goryo': {
        name: 'Goryo',
        englishName: 'Goryo',
        evidences: [
            'D.O.T.S. Projector',
            'EMF Level 5',
            'Fingerprints'
        ],
        strongEvidence: 'D.O.T.S. Projector',
        strenght: "Ses interactions avec le projecteur D.O.T.S. ne sont visible qu'au travers une caméra.",
        weakness: "Tends à rester dans sa pièce.",
        description: "Lorsqu'un Goryo passe à travers un projecteur D.O.T.S., employer une caméra est le seul moyen pour le voir.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Hantu': {
        name: 'Hantu',
        englishName: 'Hantu',
        evidences: [
            'Fingerprints',
            'Freezing Temperatures',
            'Ghost Orb'
        ],
        strongEvidence: 'Freezing Temperatures',
        strenght: "Il avance plus rapidement dans les températures les plus basses.",
        weakness: "Les températures les plus élevées le font ralentir.",
        description: "Le Hantu est une entitée rare qui apprécie les climats les plus froids. Le froid tends à les rendres plus aggressif et puissant.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Jinn': {
        name: 'Djinn',
        englishName: 'Jinn',
        evidences: [
            'EMF Level 5',
            'Fingerprints',
            'Freezing Temperatures'
        ],
        strenght: "Il avance à plus grande vitesse lorsque sa victime s'éloigne.",
        weakness: "Il ne peut pas utiliser son abilité si le courant est coupé.",
        description: "Un Djinn est une entitée territorial qui attaque quand il est menacé. Il est également connu pour se déplacer à une vitesse signifiante.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Mare': {
        name: 'Cauchemar',
        englishName: 'Mare',
        evidences: [
            'Ghost Orb',
            'Ghost Writing',
            'Spirit Box'
        ],
        strenght: "Attaque plus souvent dans le noir.",
        weakness: "Allumer la lumière réduit les chances qu'il attaque.",
        description: "Le Cauchemar est la source de tous les cauchemars, le rendant plus puissant dans la pénombre.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Moroi': {
        name: 'Moroï',
        englishName: 'Moroi',
        evidences: [
            'Freezing Temperatures',
            'Ghost Writing',
            'Spirit Box'
        ],
        strongEvidence: 'Spirit Box',
        strenght: "Il avance relativement plus vite lorsque les enquêteurs ont peu de santé mentale. Ils peuvent également faire perdre la santé mentale des enquêteurs plus rapidement qu'usuellement durant une enquête.",
        weakness: "L'encent les aveugles plus longtemps durant les chasses.",
        description: "Le Moroï est sorti de sa tombe pour absorber l'énergie des vivants. Ils sont connu pour placer des malédictions sur leurs victimes, curable uniquement par antidotes ou en partant au loin.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Myling': {
        name: 'Myling',
        englishName: 'Myling',
        evidences: [
            'EMF Level 5',
            'Fingerprints',
            'Ghost Writing'
        ],
        strenght: "Ses pas sont plus silencieux lorsqu'il chasse.",
        weakness: "Produit des sons paranormaux plus fréquement.",
        description: "Le Myling est une entitée très vocale et active. Il y a des rumeurs comme quoi ils sont silencieux lorsqu'ils chassent leurs proies.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Obake': {
        name: 'Obake',
        englishName: 'Obake',
        evidences: [
            'EMF Level 5',
            'Fingerprints',
            'Ghost Orb'
        ],
        strongEvidence: 'Fingerprints',
        strenght: "Ils peuvent laisser des empruntes qui disparaissent rapidement.",
        weakness: "Il laisse parfois une emprunte à six doigts.",
        description: "Les Obakes sont terrifiant au changement de corps, capable de prendre bien des formes. Ils ont été vu prendre une forme humanoïde pour attirer leurs proies.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Oni': {
        name: 'Oni',
        englishName: 'Oni',
        evidences: [
            'D.O.T.S. Projector',
            'EMF Level 5',
            'Freezing Temperatures'
        ],
        strenght: "Augmentation des activités et des événements fantômatiques.",
        weakness: "L'augmentation des activités des Onis les rends plus aisés à trouver.",
        description: "Les Onis aiment effrayer leurs victimes autant que possible avant d'attaquer. Ils sont souvent vu dans une forme physique, gardant le lieu de leur décès.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Onryo': {
        name: 'Onryo',
        englishName: 'Onryo',
        evidences: [
            'Freezing Temperatures',
            'Ghost Orb',
            'Spirit Box'
        ],
        strenght: "Une flamme qui s'éteint peu provoquer l'attaque d'un Onryo.",
        weakness: "La présence des flammes réduit l'abilité de l'Onryo à attaquer.",
        description: "L'Onryo est souvent référer en tant qu' « Esprit vengeur ». Ils volent les âmes des de ses victimes mourrantes pour se venger. Cette entité est connue pour être effrayée du feu, et fera tout en son pouvoir pour s'en éloigner.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Phantom': {
        name: 'Fantôme',
        englishName: 'Phantom',
        evidences: [
            'D.O.T.S. Projector',
            'Fingerprints',
            'Spirit Box'
        ],
        strenght: "Regarder un fantôme fait perdre considérablement la santé mentale.",
        weakness: "Prendre une photo d'un fantôme le fait disparaître brièvement.",
        description: "Un fantôme est une entitée qui peut posséder le vivant, instaurant la peur à quiconque auprès de lui. Ils sont communément invoqués depuis une Ouija.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Poltergeist': {
        name: 'Poltergeist',
        englishName: 'Poltergeist',
        evidences: [
            'Fingerprints',
            'Ghost Writing',
            'Spirit Box'
        ],
        strenght: "Capable de lancer plusieurs objets en une fois.",
        weakness: "Il deviennent impuissant sans rien autour d'eux.",
        description: "L'une des entités les plus connues, le Poltergeist. Connu pour manipulater les objets autour de lui pour instaurer la peur en ses victimes.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Raiju': {
        name: 'Raiju',
        englishName: 'Raiju',
        evidences: [
            'D.O.T.S. Projector',
            'EMF Level 5',
            'Ghost Orb'
        ],
        strenght: "Il avance rapidement près des objets électroniques.",
        weakness: "Il brouille l'équipement électronique de plus loin lorsqu'il chasse.",
        description: "Un Raiju est un démon qui se courrit du courant électrique. Généralement calme, ils peuvent commencer à s'agiter quand ils sont submergés de puissance.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Revenant': {
        name: 'Revenant',
        englishName: 'Revenant',
        evidences: [
            'Freezing Temperatures',
            'Ghost Orb',
            'Ghost Writing'
        ],
        strenght: "Il avance beaucoup plus vite lorsqu'il perçoit ses cibles lorsqu'il chasse.",
        weakness: "Il est très lent lorsqu'il ne chasse pas une cible.",
        description: "Le Revenant est une entitée violente qui attaque sans discrimination. Leur vitesse peut être décevante, vu qu'ils sont lent pendant la dormance ; cependant, aussitôt qu'ils chassent ils peuvent avancer incroyablement vite.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Shade': {
        name: 'Ombre',
        englishName: 'Shade',
        evidences: [
            'EMF Level 5',
            'Freezing Temperatures',
            'Ghost Writing'
        ],
        strenght: "Sa timidité la rends difficile à localiser et à obtenir une évidence.",
        weakness: "Elle a moins de chance d'attaquer si plusieurs personnes sont dans les alentours.",
        description: "Une ombre est connue pour être très timide. Plusieurs évidences supposent que l'Ombre arrêtera toute activité paranormal si il y a plusieurs personnes dans les environs.”",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Spirit': {
        name: 'Esprit',
        englishName: 'Spirit',
        evidences: [
            'EMF Level 5',
            'Ghost Writing',
            'Spirit Box'
        ],
        strenght: "Aucune.",
        weakness: "L'encent est très efficace, empêchant une chasse durant plus longtemps.",
        description: "L'Esprit est une entitée très commune. Ils sont très puissants, mais passif, et n'attaque que quand ils doivent le faire. Ils défendent coûte que coûte le lieu de leur décès, tuant quiconque est surpris à dépasser son temps d'accueil.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Thaye': {
        name: 'Thayé',
        englishName: 'Thaye',
        evidences: [
            'D.O.T.S. Projector',
            'Ghost Orb',
            'Ghost Writing'
        ],
        strenght: "Entrer dans leur champ d'action les rends plus actifs, défensif et agile.",
        weakness: "Ils deviennent plus lent et moins actif au fil du temps.",
        description: "Le Thayé est connu pour vieillir rapidement au fil du temps, même dans l'au-delà. De ce que nous avons appris, ils semblent se détériorer plus rapidement à la présence des vivants.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'The Mimic': {
        name: 'Le Mimic',
        englishName: 'The Mimic',
        evidences: [
            'Fingerprints',
            'Freezing Temperatures',
            'Ghost Orb',
            'Spirit Box'
        ],
        strongEvidence: 'Ghost Orb',
        strenght: "Peut copier les abilités et les traîts des autres entitées.",
        weakness: "Présente les orbes fantômatique en évidence secondaire.",
        description: "Le Mimic est un fantôme insaisissable, mystérieux et imitateur qui reproduit les traits et les comportements d'autres personnes, y compris d'autres types de fantômes.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'The Twins': {
        name: 'Les Jumeaux',
        englishName: 'The Twins',
        evidences: [
            'EMF Level 5',
            'Freezing Temperatures',
            'Spirit Box'
        ],
        strenght: "Les deux jumeaux peuvent lancer une chasse, mais pas en même temps.",
        weakness: "Interagit souvent avec l'environnement en même temps.",
        description: "Ces entités ont été signalés comme imitant les actions des autres. Ils alternent leurs attaques pour confondre leurs proies.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Wraith': {
        name: 'Esprit',
        englishName: 'Wraith',
        evidences: [
            'D.O.T.S. Projector',
            'EMF Level 5',
            'Spirit Box'
        ],
        strenght: "Ils ne laissent pas de traces de pas visible à la lumière UV après avoir marché dans le sel.",
        weakness: "Il devient plus actif si il marche dans du sel.",
        description: "L'Esprit est l'une des entitées les plus dangereuse que vous pourrez trouver. C'est aussi la seule entitée connue qui a la capacité de voler et qui est parfois connu pour voyager à travers les murs.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Yokai': {
        name: 'Yokai',
        englishName: 'Yokai',
        evidences: [
            'D.O.T.S. Projector',
            'Ghost Orb',
            'Spirit Box'
        ],
        strenght: "Parler près d'un Yokai le mettra en colère, ce qui augmentera ses chances d'attaquer.",
        weakness: "Il ne peut entendre que des voix proches de lui pendant qu'il chasse.",
        description: "Les Yokai sont des entitées communes qui sont attirées par les voix humaines. On les trouve généralement dans les maisons familiales.",
        ability: "",
        behaviour: "",
        hunt: ""
    },
    'Yurei': {
        name: 'Yurei',
        englishName: 'Yurei',
        evidences: [
            'D.O.T.S. Projector',
            'Freezing Temperatures',
            'Ghost Orb'
        ],
        strenght: "Il affecte plus fortement la santé mentale.",
        weakness: "Allumer de l'encent dans la pièce du Yurei réduira la fréquence de ses errances.",
        description: "Un Yurei est une entitée qui est revenue dans le monde physique, généralement dans un but de vengeance ou de haine.",
        ability: "",
        behaviour: "",
        hunt: ""
    }
};
export const ghostList = [
    'Banshee',
    'Demon',
    'Deogen',
    'Goryo',
    'Hantu',
    'Jinn',
    'Mare',
    'Moroi',
    'Myling',
    'Obake',
    'Oni',
    'Onryo',
    'Phantom',
    'Poltergeist',
    'Raiju',
    'Revenant',
    'Shade',
    'Spirit',
    'Thaye',
    'The Mimic',
    'The Twins',
    'Wraith',
    'Yokai',
    'Yurei'
];