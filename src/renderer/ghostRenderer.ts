import { GHOST_DATABASE } from '../db/ghosts';
import { LazyDoc } from '@lazy-toolbox/client';
import { Database } from '../db/database';

export class GhostRenderer {
    public static render(speed: string = '100') {
        const ghosts = GHOST_DATABASE(speed, speed !== '100' ? 1.5 : 1);
        const ghostsContainer = [];
        for(const ghostID in ghosts) {
            const currentGhost = ghosts[ghostID];
            let evidencesIcons = '';
            for(const evidence of currentGhost.evidences) {
                evidencesIcons += `<img src="/assets/icons/${Database.evidenceIcons[evidence]}" alt="${evidence}" />`;
            }
            ghostsContainer.push(LazyDoc.newTag('details', {
                attributes: {
                    'animated': '',
                    'shr_duration': '200',
                    'shr_ease': 'linear',
                    'exp_duration': '200',
                    'exp_ease': 'linear',
                    'name': currentGhost.name
                },
                id: ghostID,
                class: ['ghostContainer'],
                innerHTML: `
                <summary class="ghostSummary">
                    <div>
                        <h2>${currentGhost.name}</h2>
                        <div>${evidencesIcons}</div>
                        <p>${currentGhost.sanity}%</p>
                    </div>
                </summary>
                <content class="ghostContent">
                    <p class="ghostDesc"><span desc fullDesc>“ ${currentGhost.description} „</span></p>
                    <p><span desc strenght>Force :</span> <span>${currentGhost.strenght}</span></p>
                    <p><span desc weakness>Faiblesse :</span> <span>${currentGhost.weakness}</span></p>
                    <section>
                        <hr><br>
                        <h3>Abilité</h3>
                        <hr><br>
                        ${currentGhost.ability}
                        <h3>Comportement</h3>
                        <hr><br>
                        ${currentGhost.behaviour}
                        <h3>Chasse</h3>
                        <hr><br>
                        ${currentGhost.hunt}
                        <h3>Vitesse</h3>
                        <hr><br>
                        ${currentGhost.speed}
                    </section>
                </content>
                `
            }));
        }
        return ghostsContainer;
    }
}