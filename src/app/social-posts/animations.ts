import { trigger,transition,state,animate,style } from '@angular/animations'

export let slideUp = trigger('slideUp', [
    state('void', style({transform: 'translate(-50%, +50%)'})),
    transition( ':enter', [
        animate('500ms ease-out')
    ]),
    transition(':leave', [
        animate('500ms ease-in')
    ])
])

export let fade = trigger('fade', [
    state('void', style({opacity: 0})),
    transition(':enter, :leave', [
        animate('500ms ease-out')
    ]),
    transition(':leave', [
        animate('500ms ease-in')
    ])
])