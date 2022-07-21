'use strict';

const checkboxEmotes = [
    '\u2753', // Neutral
    '\u2705', // True
    '\u274C' // False
];
const ghostsDB = {
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
            <audio controls id="banshee-scream" class="sound-display">
                <source src="assets/audio/banshee-scream.mp3" type="audio/mpeg" />
            </audio>
            <p>Elle peut choisir un joueur au hasard et marcher vers ce dernier créant un <strong class="italic">EMF 2</strong>.</p>
            <p>Elle préfère causer des événements où elle chante. Si sa cible la fait disparaître durant un événement musical en la touchant, sa santé mentale se réduit de 15% au lieu de 10%.</p>
        `,
        hunt: `
            <p>La chasse est basée sur la santé mentale de la cible de la Banshee, ainsi une chasse sera démarrée si sa cible est en dessous de 50% de santé mentale. Tous les joueurs, autres que sa cible, seront ignorés durant une chasse. Si une chasse démarre sans sa cible présente dans le bâtiment, elle choisira alors une cible temporaire.</p>
            <p>L'objectif <strong class="italic">\"repousser le fantôme lorsqu'il chasse quelqu'un\"</strong> n'est pas possible avec de <strong class="italic">l'encent</strong> (à moins qu'elle ne chasse sa cible lorsque ça se produit).</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
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
        ability: `
        <p>Il peut décider de démarrer une chasse quand il le désire. Lorsqu'il utilise cette abilité, il choisit un joueur au hasard et va vers ce joueur.</p>
        <p>Si il a ce joueur en vue dans les 20 secondes, la chasse sera initiée.</p>
        `,
        behaviour: `
        <p>La portée du <strong class="italic">crucifix</strong> est de 5 mètres pour lui (au lieu de 3 mètres pour les autres).</p>`,
        hunt: `
        <p>Il peut démarrer des chasses dès que la santé moyenne de l'équipe est en dessous de 70%.</p>
        <p>Il peut enchaîner une chasse 20 secondes après en avoir fini une autre contrairement aux autres entités qui ne peuvent pas en dessous de 25 secondes.</p>
        <p>Si un <strong class="italic">encent</strong> est utilisé près de lui, il ne pourra pas démarrer une chasse pendant 60 secondes (au lieu de 90 secondes pour les autres entités).</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 100
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
        ability: `
        <p>Il connaît la position de tous les joueurs.</p>
        `,
        behaviour: `
        <p>Il a 33% de chance par question de produire une réponse unique à la <strong class="italic">Spirit Box </strong> lorsque le joueur est situé à 1 mètre de ce dernier: une respiration lourde et constante durant 3 à 4 secondes.</p>
        <audio controls id="deogen-breath" class="sound-display">
            <source src="assets/audio/deogen-breath.mp3" type="audio/mpeg" />
        </audio>
        `,
        hunt: `
        <p>Il ne peut démarrer une chasse que lorsque la santé mentale est en dessous de 40%.</p>
        <p>Lors du début d'une chasse, il ira vers le joueur le plus proche de lui. Il peut occasionnellement choisir un joueur au hasard.</p>
        <p>Durant une chasse, sa vitesse est déterminée par la distance qui le sépare du joueur (2.5 à 6 mètres de distance). Au plus le joueur est loin, au plus il sera rapide. Sa vitesse varie ainsi entre 0.4 et 3 m/s.</p>
        <p>Il clignotte plus rapidement ; il est visible durant de plus long intervales et/ou il est invisible durant de plus court intervales.</p>
        `,
        speed: `
        <p><strong>Vitesse proche d'une victime :</strong> 0,4 m/s</p>
        <p><strong>Vitesse loin d'une victime :</strong> 3 m/s</p>
        `,
        speedMesure: [ 'fast', 'normal', 'slow' ],
        speedChase: [ 'fast', 'normal', 'slow' ],
        sanity: 40
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Il ne réagit aux <strong class="italic">D.O.T.S.</strong> que si aucun joueur n'est dans les environs et est uniquement visible à la caméra.</p>
        <p>Sa distance pour erré est généralement petite.</p>
        `,
        hunt: `
        <p>Rien à signaler.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Il ne peut pas allumer le fusible.</p>
        <p>Il peut éteindre le fusible deux fois plus souvent.</p>
        `,
        hunt: `
        <p>Sa vitesse dépends de la température autour de lui. Lorsque le fusible est branché, il sera en conséquent plus lent parce que la maison sera chauffée.</p>
        <p>Il n'accélère pas si on le garde en ligne de vue.</p>
        <p>Lorsqu'il est visible, émet un souffle glacé lorsqu'il est dans une pièce avec une <strong class="italic">température</strong> inférieur ou égale à 3°C (Les joueurs décédés ne peuvent pas voir ce souffle).</p>
        `,
        speed: `
        <p><strong>Vitesse dépendante de la <strong class="italic">température</strong> :</strong></p>
        <p><strong>inférieur à 3°C :</strong> 2,7 m/s</p>
        <p><strong>entre 3 - 6°C :</strong> 2,5 m/s</p>
        <p><strong>entre 6 - 9°C :</strong> 2,3 m/s</p>
        <p><strong>entre 9 - 12°C :</strong> 2,1 m/s</p>
        <p><strong>entre 12 - 15°C :</strong> 1,75 m/s</p>
        <p><strong>supérieur à 15°C :</strong> 1,4 m/s</p>
        `,
        speedMesure: [ 'fast', 'normal', 'slow' ],
        speedChase: [ 'fast', 'normal', 'slow' ],
        sanity: 50
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
        ability: `
        <p>Si le fusible est branché, il peut utiliser son abilité qui réduit de 25% la santé mentale de tous les joueurs présent aux environs de 3 mètres de lui et génère au fusible un <strong class="italic">EMF 2</strong> ou <strong class="italic">EMF 5.</strong></p>
        `,
        behaviour: `
        <p>Il ne peut pas éteindre le fusible, seulement le faire sauter en allumant une lampe de trop.</p>
        `,
        hunt: `
        <p>Si il voit un joueur, il avance jusqu'au joueur à une vitesse de 2,5 m/s instantanément jusqu'à ce qu'il soit à environs 2 mètres du joueur avant d'avancer à sa vitesse de base.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s (instantané)</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Si on allume une lampe près de lui, il a une chance de l'éteindre immédiatement.</p>
        <p>Il n'allume jamais de lampe. Si il décide d'erré, il choisira plus souvent des pièces qui ne sont pas éclairées.</p>
        <p>Il fait plus souvent des événements où il explose des ampoules.</p>
        `,
        hunt: `
        <p>Si les lampes sont éteintes, il peut déclancher une chasse à partir de 60% de santé mentale. Dans le cas contraire, ce sera à partir de 40%.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 60
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
        ability: `
        <p>Si un joueur obtient une réponse à la <strong class="italic">Spirit Box</strong> où entends un bruit au <strong class="italic">microphone parabolique</strong>, il maudira ce joueur tant qu'il restera dans la zone d'investigation (la lumière n'a aucune importance). Il est possible d'être maudit plusieurs fois mais pas d'accumuler la malédiction.</p>
        <p>On peut briser la malédiction en prenant des <strong class="italic">pillules</strong>.</p>
        `,
        behaviour: `
        Rien à signaler.
        `,
        hunt: `
        <p>Il devient plus rapide au plus la santé mentale est basse. Entre 1,5 m/s avec une santé mentale moyenne de 50% et 2,25 m/s à 0%. Il y a une augmentation de sa vitesse de 0.075 m/s pour chaque 5% de santé mentale perdue.</p>
        <p>Si on utilise <strong class="italic">l'encent</strong>, la durée durant laquelle il ne peut pas voir est de 12 secondes (au lieu des 6 usuelles).</p>
        <p>Il accélère lorsqu'il est vu par le joueur. A sa vitesse maximum, il est plus rapide qu'un Revenant.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> entre 1,5 et 2,25 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 et 3,2 m/s</p>
        `,
        speedMesure: [ 'normal', 'fast' ],
        speedChase: [ 'fast' ],
        sanity: 50
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Il émet beaucoup plus de son paranormal que les autres entités au <strong class="italic">microphone parabolique</strong>.</p>
        `,
        hunt: `
        <p>Le son de ses pas ne s'entends que s'il se situe à une distance d'environs 9 mètres.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
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
        ability: `
        <p>Il peut occasionnellement utiliser son abiliter qui réduit le temps d'existence des <strong class="italic">empruntes</strong> sur la map de moitié (il peut aussi l'utiliser plusieurs fois de suite, réduisant drastiquement le temps de vie des <strong class="italic">empruntes</strong>).</p>
        `,
        behaviour: `
        <p>Lorsqu'il interagit avec une surface, il a 75% de chance de laisser une <strong class="italic">emprunte</strong> (au lieu des 100% usuel).</p>
        <p>Il y a 16,7% de chance qu'il crée une <strong class="italic">emprunte</strong> unique:</p>
        <p>• Une trace de main à six doigts.</p>
        <p>• Deux empruntes de doigts sur un interrupteur au lieu d'une seule.</p>
        <p>• Cinq traces de doigts sur le clavier ou les portes de prison au lieu de quatre.</p>
        `,
        hunt: `
        <p>Rien à signaler.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Il est très actif et interagit plus souvent avec les objets, surtout si il y a des joueurs dans sa pièce.</p>
        <p>Il peut se manifester entièrement durant un événement.</p>
        <p>Il peut lancer les objets plus haut ou plus loin (un à la fois, ça ne réduit pas la santé mentale des joueurs).</p>
        <p>Il est incapable de produire l'événement de type "ballon d'air". Ainsi, on peut retirer l'Oni si l'on entends le son :</p>
        <audio controls id="sound-air-breath" class="sound-display">
            <source src="assets/audio/air-breath.mp3" type="audio/mpeg" />
        </audio>`,
        hunt: `
        <p>Rien à signaler.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Il a une plus haute chance que les autres fantômes d'éteindre une bougie.</p>
        <p>Si une flamme est proche de lui, elle agit tel un <strong class="italic">crucifix</strong>, l'empéchant de chasser à une distance de 4 mètres.</p>
        <p>Si il tente de démarrer une chasse près de la flamme, la chasse échouera et il éteindra la <strong class="italic">bougie</strong> à la place.</p>
        `,
        hunt: `
        <p>Il peut démarrer une chasse dès que la santé mentale est en dessous de 60%.</p>
        <p>Si une <strong class="italic">bougie</strong>, un <strong class="italic">briquet</strong> ou un feu de camp est éteint par ce dernier, il y a une probabilité qu'il démarre une chasse, peu importe la santé mentale. En multijoueur, cette chance est accrue si un joueur meurt, avec presque une garantie si au moins deux joueurs sont morts.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 100
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Si il est prit en photo durant un événement, il disparaît temporairement pour le reste de l'événement. Il sera visible sur la photo et les battements de coeur cessent, cependant la musique d'événement reste.</p>
        <p>Être aux environs de 10 mètres d'un fantôme en étant en ligne de vue de ce dernier réduit la santé mentale de ~0.5% par seconde.</p>
        <p>Il peut choisir un joueur au hasard et marcher vers ce dernier créant un <strong class="italic">EMF 2</strong>.</p>
        `,
        hunt: `
        <p>Si il est prit en photo durant une chasse, il ne sera pas visible sur la photo.</p>
        <p>Le fantôme clignotte environs toutes les 1  ~ 2s comparé aux autres qui ont 0.3 ~ 1s de délais.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Il peut occasionnellement lancer de multiples objets d'un coup, créant un <strong class="italic">EMF 3</strong>. Les objets sont lancés avec plus de force que tous les autres fantômes.</p>
        <p>La santé mentale est réduite de 2% pour chaque objet lancé.</p>
        `,
        hunt: `
        <p>Rien à signaler.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Lors d'un événement, il interagit avec l'électronique dans un rayon de 15 mètres (au lieu de 10 mètres pour les autres entités).</p>
        `,
        hunt: `
        <p>Lorsqu'un objet électronique est à porté, il peut démarré une chasse dès 65% de santé mentale.</p>
        <p>Suivant la taille de la map, si il est dans la portée d'une pièce d'équipement électronique, sa vitesse sera de 2,5 m/s:</p>
        <p>• 6 mètres sur une petite map.</p>
        <p>• 8 mètres sur une map moyenne.</p>
        <p>• 10 mètres sur une grande map.</p>
        <p>Ces effets s'appliquent sur l'équipement au sol et tenu dans les mains.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Près d'équipement électronique :</strong> 2,5 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal', 'fast' ],
        speedChase: [ 'normal' ],
        sanity: 50
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Rien à signaler.</p>
        `,
        hunt: `
        <p>Sa vitesse lors d'une chasse varie fortement des autres entités. Il est très lent si il n'a pas de cible en vue (1,1 m/s), sinon il est extrêmement rapide (3 m/s).</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,1 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 3 m/s</p>
        `,
        speedMesure: [ 'slow' ],
        speedChase: [ 'fast' ],
        sanity: 50
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Au plus la santé mentale est haute, au moins elle est active.</p>
        <p>Elle préfère se hisser dans les oreilles du joueur, mais peut se manifester en tant qu'ombre (rare).</p>
        <p>Il est incapable de donner une interaction <strong class="italic">EMF 3</strong> lorsqu'il y a un ou plusieurs joueurs dans la même pièce que lui.</p>
        <p>Si elle est invoqué, elle a une chance d'apparaître en tant qu'ombre noir transparente plutôt que dans sa forme complète tant qu'elle est piégée dans le cercle d'invocation.</p>
        `,
        hunt: `
        <p>Elle ne démarre pas de chasse tant que la santé mentale n'est pas en dessous de 35%.</p>
        <p>Elle est incapable de chasser lorsqu'il y a un ou plusieurs joueurs dans la même pièce que lui.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 35
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Si un encent est utilisé près de lui, il ne pourra pas démarrer une chasse pendant 180 secondes (au lieu de 90 secondes pour les autres entités).</p>
        `,
        hunt: `
        <p>Rien à signaler.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
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
        ability: `
        <p>Toutes les 1 à 2 minutes, le Thayé va tenter de vieillir. Si un joueur se trouve dans la même pièce que lui, alors il vieilli. Si aucun joueur n'est présent, alors il recommencera le processus 30 secondes plus tard.</p>
        <p>Il peut vieillir jusqu'à 10 fois</p>
        <p>Chaque fois qu'il prends de l'âge :</p>
        <p>• La santé mentale minimum pour qu'il démarre une chasse diminue de 6%.</p>
        <p>• Sa vitesse se réduit de 0.175 m/s lors de la chasse.</p>
        <p>• 15% de réduction sur les chances d'obtenir un événement.</p>
        <p>• 15% de réduction sur les chances d'obtenir une interaction.</p>
        `,
        behaviour: `
        <p>Au début de la partie, le Thayé a 200% de faire une interaction ou un événement paranormal.</p>
        `,
        hunt: `
        <p>Suite à son abilité, le Thayé n'accélère pas lors d'une chasse.</p>
        `,
        speed: `
        <p><strong>Vitesse quand il est jeune :</strong> 2,75 m/s</p>
        <p><strong>Vitesse quand il est vieux :</strong> 1 m/s</p>
        `,
        speedMesure: [ 'slow', 'normal', 'fast' ],
        speedChase: [ 'slow', 'normal', 'fast' ],
        sanity: 75
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
        ability: `
        <p>Il peut imiter tous les types d'entités et ainsi hérité de toutes les capacités et abilités de l'entité qu'il décide de copier.</p>
        <p>Il peut copier des caractéristiques des évidences (exemple: les traces de pas invisible aux <strong class="italic">lampes UV</strong> du Spectre) mais pas les évidences elles-mêmes.</p>
        <p>Il peut imiter le joueur ou le Mimic, mais dans ce cas il agira alors comme un fantôme normal.</p>
        <p>Lorsqu'il choisit d'imiter le Thayé, il choisira un âge aléatoire et au lieu de vieillir comme le Thayé, il imitera une autre entité.</p>
        `,
        behaviour: `
        <p>Il donne pour évidence les orbes fantômatiques en plus de ses trois évidences de base et ce qu'importe la difficulté.</p>
        `,
        hunt: `
        <p>Varie suivant l'entité imitée.</p>`,
        speed: `
        <p><strong>Vitesse variable.</strong></p>
        `,
        speedMesure: [ 'slow', 'normal', 'fast' ],
        speedChase: [ 'slow', 'normal', 'fast' ],
        sanity: 100
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
        ability: ``,
        behaviour: `
        <p>Les Jumeaux ne sont qu'une seule entité composée d'un corps principal et d'un leurre.</p>
        <p>Le leurre ne fait pas marcher les <strong class="italic">détecteurs de mouvements</strong>, ne réduit pas la <strong class="italic">température</strong> et ne réponds pas à la <strong class="italic">Spirit Box</strong> mais laisse un <strong class="italic">EMF 5</strong>.</p>
        `,
        hunt: `
        <p>Si il démarre une chasse, il y a une chance sur deux que ce soit le leurre qui chasse.</p>
        <p>Le leurre est 10% plus rapide qu'un fantôme usuel tandis que le corps principal est 10% plus lent.</p>
        <p>Lorsqu'un <strong class="italic">crucifix</strong> est utilisé pour empêcher une chasse, qu'importe le jumeau qui chasse, le <strong class="italic">crucifix</strong> s'appliquera uniquement au corps principal.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 (± 0,16) m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 (± 0,25) m/s</p>
        `,
        speedMesure: [ 'slow', 'normal' ],
        speedChase: [ 'normal', 'fast' ],
        sanity: 50
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
        ability: `
        <p>Il a une chance de se téléporter à environs 3 mètres d'un joueur avec 75% chance de générer un <strong class="italic">EMF 2</strong> et 25% chance de générer un <strong class="italic">EMF 5</strong>.</p>
        `,
        behaviour: `
        <p>Si il marche dans le sel, aucune trace de pas ne sera visible aux <strong class="italic">lumières UV</strong>.</p>
        `,
        hunt: `
        <p>Il ne peut pas se téléporter pendant une chasse (il peut néanmoins initier une chasse après téléportation).</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
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
        ability: `
        <p>Rien à signaler.</p>
        `,
        behaviour: `
        <p>Si au moins un joueur parle ou émet du bruit, l'activité du Yokai activité augmente.</p>
        `,
        hunt: `
        <p>Si au moins un joueur parle ou émet du bruit, une chasse peut être démarrée en dessous de 80% de santé mentale.</p>
        <p>Il ne peut qu'entendre les joueurs ou sentir les appareils électroniques dans une portée de 2 mètres.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 80
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
        ability: `
        <p>Il peut utiliser son abilité qui réduit de 15% la santé mentale de tous les joueurs situés dans une portée de 7.5 mètres.</p>
        <p>Lorsqu'il emploie son abilité, une porte choisie aléatoirement dans la pièce du Yurei se fermera rapidement avec un son distinct nettement retardé.</p>
        `,
        behaviour: `
        <p>Si on emploie de <strong class="italic">l'encent</strong> sur lui, en plus des effets de base, il ne quittera pas sa pièce durant 90s.</p>
        <p>Il offre plus souvent des événements de type "ballon d'air".</p>
        <audio controls id="sound-air-breath" class="sound-display">
            <source src="assets/audio/air-breath.mp3" type="audio/mpeg" />
        </audio>
        `,
        hunt: `
        <p>Rien à signaler.</p>
        `,
        speed: `
        <p><strong>Vitesse de base :</strong> 1,6 m/s</p>
        <p><strong>Victime en ligne de vue :</strong> 2,5 m/s</p>
        `,
        speedMesure: [ 'normal' ],
        speedChase: [ 'normal' ],
        sanity: 50
    }
};
const ghostList = [
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
const evidenceDB = {
    'D.O.T.S. Projector': {
        id: 'dots',
        name: 'Projecteur D.O.T.S.',
        englishName: 'D.O.T.S. Projector',
        icon: 'dots-projector.webp'
    },
    'EMF Level 5': {
        id: 'emf-5',
        name: 'EMF Niveau 5',
        englishName: 'EMF Level 5',
        icon: 'emf-reader.webp'
    },
    'Fingerprints': {
        id: 'fingerprints',
        name: 'Empruntes',
        englishName: 'Fingerprints',
        icon: 'fingerprints.webp'
    },
    'Freezing Temperatures': {
        id: 'freezing-temperatures',
        name: 'Température glaciale',
        englishName: 'Freezing Temperatures',
        icon: 'thermometer.webp'
    },
    'Ghost Orb': {
        id: 'ghost-orbs',
        name: 'Orbe fantômatique',
        englishName: 'Ghost Orb',
        icon: 'ghost-orb.webp'
    },
    'Ghost Writing': {
        id: 'ghost-writing',
        name: 'Écriture fantômatique',
        englishName: 'Ghost Writing',
        icon: 'writing-book.webp'
    },
    'Spirit Box': {
        id: 'spirit-box',
        name: 'Spirit box',
        englishName: 'Spirit Box',
        icon: 'spirit-box.webp'
    }
};
const evidenceList = [
    'D.O.T.S. Projector',
    'EMF Level 5',
    'Fingerprints',
    'Freezing Temperatures',
    'Ghost Orb',
    'Ghost Writing',
    'Spirit Box'
];
const behaviourDB = {
    'footsteps': {
        id: 'footsteps',
        name: 'Trace de pas',
        state: 'triState',
        value: checkboxEmotes[0]
    },
    'turn-on-light': {
        id: 'turn-on-light',
        name: 'Allume la lumière',
        state: 'triState',
        value: checkboxEmotes[2]
    },
    'air-breath': {
        id: 'air-breath',
        name: 'Événement boule d\'air',
        state: 'triState',
        value: checkboxEmotes[2]
    },
    'turn-on-breaker': {
        id: 'turn-on-breaker',
        name: 'Allume le fusible',
        state: 'triState',
        value: checkboxEmotes[2]
    },
    'turn-off-breaker': {
        id: 'turn-off-breaker',
        name: 'Coupe le fusible',
        state: 'triState',
        value: checkboxEmotes[2]
    },
    'parabolic-scream': {
        id: 'parabolic-scream',
        name: 'Cris (Microphone Parabolique)',
        state: 'triState',
        value: checkboxEmotes[2]
    },
    'heavy-breath': {
        id: 'heavy-breath',
        name: 'Respiration lourde (Spirit Box)',
        state: 'triState',
        value: checkboxEmotes[2]
    }
};
const behaviourList = [
    'turn-on-light',
    'turn-on-breaker',
    'turn-off-breaker',
    'footsteps',
    'air-breath',
    'parabolic-scream',
    'heavy-breath'
];

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
/***
 * Get an element by id, test the value of this element from a chosen function and if it's true, then execute a function without parameters.
 */
function elementValueIsThen(id, test, execute)
{
    let elemID = document.getElementById(id);
    if(test(elemID.value))
    {
        execute();
    }
}
/***
 * Find the first element of elements, test it, if it's true then we can assign a chosen value to the boolValue we passed there then from a function getBool that have have the current element as a parameter. It return the new value of boolValue.
 */
function forFirstOfArrayTestValue(elements, boolValue, test, getBool)
{
    for(let element of elements)
    {
        if(test(element))
        {
            boolValue = getBool(element);
            break;
        }
    }
    return boolValue;
}
function retrieveEvidences()
{
    let actualEvidences = [];
    let hiddenEvidences = [];
    for(let e of evidenceList)
    {
        let evidence = evidenceDB[e];
        let elemEvidence = document.getElementById(evidence.id);
        switch(elemEvidence.value.charAt(0))
        {
            case checkboxEmotes[1]: // True
            actualEvidences.push(evidence);
                break;
            case checkboxEmotes[2]: // False
            hiddenEvidences.push(evidence);
                break;
        }
    }
    return [actualEvidences, hiddenEvidences];
}
function hideGhost(ghostData)
{
    let ghost = document.getElementsByClassName(ghostData.englishName);
    collapseGhostVisibility(ghost, false);
}
function lookThroughGhosts(test, event)
{
    for(let ghostName of ghostList)
    {
        let ghostData = ghostsDB[ghostName];
        if(test(ghostData))
        {
            event(ghostData);
        }
    }
}
function computeSanity()
{
    let sanityCheck = document.getElementById('hunt-huntSanity');
    let currentSanity = sanityCheck.options[sanityCheck.selectedIndex].text;
    if(currentSanity === '?')
    {
        return;
    }
    lookThroughGhosts((ghostData) => { return ghostData.sanity < currentSanity; }, (ghostData) => { hideGhost(ghostData); });
}
function huntSpeed(id, test)
{
    let huntSpeed = document.getElementById(id);
    let speed = huntSpeed.options[huntSpeed.selectedIndex].value;
    if(speed !== 'unknown')
    {
        lookThroughGhosts(
        (ghostData) => { // Test
            return test(ghostData, speed);
        },
        (ghostData) => { // If it's true
            hideGhost(ghostData);
        });
    }
}
function computeSpecialAbilities()
{
    computeSanity();
    huntSpeed('hunt-noChaseSpeed', (ghost, speed) => { return !ghost.speedMesure.includes(speed); });
    huntSpeed('hunt-chaseSpeed', (ghost, speed) => { return !ghost.speedChase.includes(speed); });
    let checkMoteOne = (e) => { return e === checkboxEmotes[1]; };
    let checkMoteTwo = (e) => { return e === checkboxEmotes[2]; };
    elementValueIsThen('footsteps', checkMoteOne, () => { hideGhost('Wraith'); });
    elementValueIsThen('footsteps', checkMoteTwo, () => { lookThroughGhosts((ghostData) => { return ghostData.englishName !== 'Wraith'; }, (ghostData) => { hideGhost(ghostData); }); });
    elementValueIsThen('turn-on-breaker', checkMoteOne, () => { hideGhost('Hantu'); });
    elementValueIsThen('turn-off-breaker', checkMoteOne, () => { hideGhost('Jinn'); });
    elementValueIsThen('turn-on-light', checkMoteOne, () => { hideGhost('Mare'); });
    elementValueIsThen('air-breath', checkMoteOne, () => { hideGhost('Oni'); });
    elementValueIsThen('parabolic-scream', checkMoteOne, () => { lookThroughGhosts((ghostData) => { return ghostData.englishName !== 'Banshee'; }, (ghostData) => { hideGhost(ghostData); }); });
    elementValueIsThen('parabolic-scream', checkMoteTwo, () => { hideGhost('Banshee'); });
    elementValueIsThen('heavy-breath', checkMoteOne, () => { lookThroughGhosts((ghostData) => { return ghostData.englishName !== 'Deogen'; }, (ghostData) => { hideGhost(ghostData); }); });
    elementValueIsThen('heavy-breath', checkMoteTwo, () => { hideGhost('Deogen'); });
}
function generateNormal()
{
    let e = retrieveEvidences();
    let foundEvidences = e[0];
    let notEvidences = e[1];
    for(let ghostName of ghostList)
    {
        let ghostData = ghostsDB[ghostName];
        let ghostElements = document.getElementsByClassName(ghostData.englishName);
        let visibility = true;
        visibility = forFirstOfArrayTestValue(foundEvidences, visibility, (evidence) => { return !ghostData.evidences.includes(evidence.englishName); }, (e) => { return false; });
        visibility = forFirstOfArrayTestValue(notEvidences, visibility, (evidence) => { return ghostData.evidences.includes(evidence.englishName); }, (e) => { return false; });
        collapseGhostVisibility(ghostElements, visibility);
    }
    computeSpecialAbilities();
}
function collapseGhostVisibility(ghostElements, visibility)
{
    for(let ghostElement of ghostElements)
    {
        ghostElement.style.visibility = visibility ? 'visible' : 'collapse';
        ghostElement.style.overflow = visibility ? 'visible' : 'hidden';
    }
}
function evidenceIncludes(foundEvidences, strongEvidence)
{
    for(let evidence of foundEvidences)
    {
        if(evidence.englishName === strongEvidence)
        {
            return true;
        }
    }
    return false;
}
function generateNightmare()
{
    let e = retrieveEvidences();
    let foundEvidences = e[0];
    let hiddenEvidences = e[1];
    for(let ghostName of ghostList)
    {
        let ghostData = ghostsDB[ghostName];
        let ghostElements = document.getElementsByClassName(ghostData.englishName);
        let visibility = true;
        visibility = forFirstOfArrayTestValue(foundEvidences, visibility, (evidence) => { return !ghostData.evidences.includes(evidence.englishName); }, (e) => { return false; });
        // There's more than one evidence for some reason..
        // Let's test the strong evidence.
        let strongEvid = ghostData.strongEvidence;
        if(visibility && (strongEvid !== undefined) && foundEvidences.length >= 2 && !evidenceIncludes(foundEvidences, strongEvid)) // This ghost have no strong evidence included after 2 evidences found
        {
            visibility = false;
        }
        if(visibility && hiddenEvidences.length > 1 && ghostName !== 'The Mimic')
        {
            let combineHidden = combinationArrayNRNO(hiddenEvidences, 2);
            for(let childCombine of combineHidden)
            {
                let nbr = 0;
                for(let child of childCombine)
                {
                    if(ghostData.evidences.includes(child.englishName))
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
        collapseGhostVisibility(ghostElements, visibility);
    }
    computeSpecialAbilities();
}

function generateEvidenceHTML()
{
    let result = '';
    for(let e of evidenceList)
    {
        let evidence = evidenceDB[e];
        let htmlContent = `
        <section class="evidence">
            <img class="evidence-icon" src="assets/icons/${evidence.icon}" alt="${evidence.englishName}">
            <label class="evidence-name" for="${evidence.id}">
                <input id='${evidence.id}' class='evidence-triState'
                type='text' name="${evidence.name}" style='border: none;' onfocus='this.blur()'
                readonly='true' size='1' value='&#x2753;'
                onclick='triState(this)' />
                ${evidence.name}
            </label>
        </section>`;
        result = `${result}${htmlContent}`;
    }
    return result;
}
function generateEvidenceIconHTML(ghostName)
{
    let result = '';
    let ghost = ghostsDB[ghostName];
    for(let e of ghost.evidences)
    {
        let evidence = evidenceDB[e];
        let htmlContent = `
        <img class="ghost-evidence-icon" src="assets/icons/${evidence.icon}" alt="${evidence.englishName}">
        `;
        result = `${result}${htmlContent}`;
    }
    return result;
}
function generateBehaviourHTML()
{
    let result = '';
    for(let b of behaviourList)
    {
        let behaviour = behaviourDB[b];
        let htmlContent = `
        <section class="behaviour">
            <label id="behaviour-${behaviour.id}" class="behaviour-name" for="${behaviour.id}">
                <input id='${behaviour.id}' class='behaviour-${behaviour.state}'
                type='text' name="${behaviour.name}" style='border: none;' onfocus='this.blur()'
                readonly='true' size='1' value='${behaviour.state === 'triState' ? '&#x2753;' : '&#x274c;'}'
                onclick='${behaviour.state}(this)' />
                ${behaviour.name}
            </label>
        </section>
        `;
        result = `${result}${htmlContent}`;
    }
    return result;
}
function generateGhostHTML()
{
    let result = '';
    for(let g of ghostList)
    {
        let ghost = ghostsDB[g];
        let htmlContent = `
        <tr class="ghost-table-line ${ghost.englishName} ghost-table-overline">
            <td class="ghost-name ghost-table-row">${ghost.name}<br>(<em>${ghost.englishName}</em>)</td>
            <td class="ghost-strenght ghost-table-row">${ghost.strenght}</td>
            <td class="ghost-weakness ghost-table-row">${ghost.weakness}</td>
        </tr>
        <tr class="ghost-table-line ${ghost.englishName} ghost-table-middleline">
            <td class="ghost-description ghost-table-row" colspan="4">
                <h4>Description</h4>
                <em>“ ${ghost.description} „</em>
                <h4 class="ghost-description-ability">Abilité</h4>
                <div class="ghost-description-ability-trigger">${ghost.ability}</div>
                <h4 class="ghost-description-behaviour">Comportement</h4>
                <div class="ghost-description-behaviour-trigger">${ghost.behaviour}</div>
                <h4 class="ghost-description-hunt">Chasse</h4>
                <div class="ghost-description-hunt-trigger">${ghost.hunt}</div>
                <h4 class="ghost-description-speed">Vitesse</h4>
                <div class="ghost-description-speed-description">${ghost.speed}</div>
            </td>
        </tr>
        <tr class="ghost-table-line ${ghost.englishName} ghost-table-underline">
            <td class="ghost-evidence ghost-table-row-underline" colspan="4">
                ${generateEvidenceIconHTML(ghost.englishName)}
            </td>
        </tr>
        `;
        result = `${result}${htmlContent}`;
    }
    return result;
}
function generatePercentOption()
{
    let result = '<option value="?" selected>Inconnue</option>';
    for(let i = 20; i >= 0; i--)
    {
        result = `${result}<option value="${i * 5}">${i * 5}</option>`;
    }
    return result;
}
function generateBoard()
{
    let htmlContent = `
    <section class="selectionables">
        <div class="evidences">
            <section class="evidence">
                <h1 class="evidence-title">Évidences</h1>
            </section>
            ${generateEvidenceHTML()}
        </div>
        <div class="behaviours">
            <section class="behaviour">
                <h1 class="behaviour-title">Comportement</h1>
            </section>
            ${generateBehaviourHTML()}
            <section class="behaviour">
                <section id="behaviour-huntSanity" class="behaviour">
                    <label class="behaviour-name" for="hunt-huntSanity">
                        Santé mentale (1è chasse) :
                        <select id="hunt-huntSanity" onChange="updateDatas()">
                            ${generatePercentOption()}
                        </select>
                    </label>
                </section>
            </section>
            <section class="behaviour">
                <section id="behaviour-hunt" class="behaviour">
                    Vitesse lors d'une chasse:<br>
                    <label class="behaviour-name" for="hunt-noChaseSpeed">
                        <em>Ne voit pas le joueur</em> :
                        <select id="hunt-noChaseSpeed" onChange="updateDatas()">
                            <option value="fast">Rapide</option>
                            <option value="normal">Normale</option>
                            <option value="slow">Lente</option>
                            <option value="unknown" selected>Inconnue</option>
                        </select>
                    </label>
                    <label class="behaviour-name" for="hunt-chaseSpeed">
                        <em>Voit le joueur</em> :
                        <select id="hunt-chaseSpeed" onChange="updateDatas()">
                            <option value="fast">Rapide</option>
                            <option value="normal">Normale</option>
                            <option value="slow">Lente</option>
                            <option value="unknown" selected>Inconnue</option>
                        </select>
                    </label>
                </section>
            </section>
            
        </div>
        <div class="mod">
            <section class="mode">
                <h1 class="mode-title">Mode</h1>
            </section>
            <section class="mode">
                <label class="mode-name" for="nightmare">
                    <input id='nightmare' class='mode-dualState'
                    type='text' name="Cauchemar" style='border: none;' onfocus='this.blur()'
                    readonly='true' size='1' value='&#x274c;'
                    onclick='dualState(this)' />
                    Cauchemar
                </label>
            </section>
        </div>
    </section>
    <table id='ghost-result'>
        <thead>
            <tr class="ghost-result-line">
                <th class="ghost-result-title" colspan="4"><h1>Liste des entités potentiels :</h1></th>
            </tr>
            <tr class="ghost-table-line">
                <th class="ghost-name ghost-table-row-underline"><h2>Nom</h2></th>
                <th class="ghost-strenght ghost-table-row-underline"><h2>Force</h2></th>
                <th class="ghost-weakness ghost-table-row-underline"><h2>Faiblesse</h2></th>
            </tr>
        </thead>
        ${generateGhostHTML()}
    </table>
    `;
    let opt = document.getElementById('options');
    opt.innerHTML = htmlContent;
}

function updateDatas()
{
    let nightmare = document.getElementById('nightmare');
    if(nightmare.value === checkboxEmotes[1])
    {
        generateNightmare();
    }
    else
    {
        generateNormal();
    }
}

function doubleCheck(control, value1, value2)
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
function tripleCheck(control, value1, value2, value3)
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
function triState(control)
{
    tripleCheck(control, checkboxEmotes[0], checkboxEmotes[1], checkboxEmotes[2]);
    updateDatas();
}
function dualState(control)
{
    doubleCheck(control, checkboxEmotes[1], checkboxEmotes[2]);
    updateDatas();
}

generateBoard();
