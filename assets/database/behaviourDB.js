import { checkboxEmotes } from './triboxDB.js';
export const behaviourDB = {
    'footsteps': {
        id: 'footsteps',
        name: 'Trace de pas',
        state: 'triState',
        value: checkboxEmotes[0]
    },
    'turn-off-breaker': {
        id: 'turn-off-breaker',
        name: 'Coupe le courant',
        state: 'dualState',
        value: checkboxEmotes[2]
    },
    'turn-on-light': {
        id: 'turn-on-light',
        name: 'Allume la lumière',
        state: 'dualState',
        value: checkboxEmotes[2]
    },
    'air-breath': {
        id: 'air-breath',
        name: 'Événement boule d\'air',
        state: 'triState',
        value: checkboxEmotes[2]
    },
    'hunt-fast': {
        id: 'hunt-fast',
        name: 'Rapide en chasse (Sans voir)',
        state: 'triState',
        value: checkboxEmotes[2]
    },
    'hunt-slow': {
        id: 'hunt-slow',
        name: 'Lent en chasse (Sans voir)',
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
export const behaviourList = [
    'turn-off-breaker',
    'turn-on-light',
    'footsteps',
    'air-breath',
    'hunt-fast',
    'hunt-slow',
    'parabolic-scream',
    'heavy-breath'
];