import { GHOST_DATABASE } from './ghosts';
import { LazyDoc } from '@lazy-toolbox/client';

const evidenceIcons: {[name: string]: string} = {
    'dots': 'dots-projector.webp',
    'emf-5': 'emf-reader.webp',
    'fingerprints': 'fingerprints.webp',
    'freezing-temperatures': 'thermometer.webp',
    'ghost-orb': 'ghost-orb.webp',
    'ghost-writing': 'writing-book.webp',
    'spirit-box': 'spirit-box.webp'
};

export class GhostRenderer {
    public static normalSpeed(): HTMLDivElement {
        const ghosts = GHOST_DATABASE('100');
        const ghostsContainer = LazyDoc.newTag('div', {
            class: ['ghostsContainer']
        });
        for(const ghostID in ghosts) {
            const currentGhost = ghosts[ghostID];
            let evidencesIcons = '';
            for(const evidence of currentGhost.evidences) {
                evidencesIcons += `<img src="/assets/icons/${evidenceIcons[evidence]}" alt="${evidence}" />`;
            }

            ghostsContainer.appendChild(LazyDoc.newTag('details', {
                attributes: {
                    'animated': '',
                    'shr_duration': '200',
                    'shr_ease': 'linear',
                    'exp_duration': '200',
                    'exp_ease': 'linear'
                },
                id: ghostID,
                class: ['ghostContainer'],
                childs: [
                    LazyDoc.newTag('summary', {
                        innerHTML: `<div><h2>${currentGhost.name}</h2><div>${evidencesIcons}</div><p>${currentGhost.sanity}%</p></div>`
                    }),
                    LazyDoc.newTag('content', {
                        innerHTML: `
                        <p>“ ${currentGhost.description} „</p>
                        <hr>
                        <p><span desc>Force :</span> <span>${currentGhost.strenght}</span></p>
                        <p><span desc>Faiblesse :</span> <span>${currentGhost.weakness}</span></p>
                        <hr>
                        <section>
                            <h3>Abilité</h3>
                            <hr>
                            ${currentGhost.ability}
                            <h3>Comportement</h3>
                            <hr>
                            ${currentGhost.behaviour}
                            <h3>Chasse</h3>
                            <hr>
                            ${currentGhost.hunt}
                            <h3>Vitesse</h3>
                            <hr>
                            ${currentGhost.speed}
                        </section>
                        `
                    })
                ]
            }));
            const newElement = ghostsContainer.lastChild;
            if(newElement) {

            }
        }
        return ghostsContainer;
    }
}