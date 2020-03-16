import { trigger, transition, query, style, animate, group } from '@angular/animations';

export const RouterAnimations = trigger('routeAnimations', [
    transition('* <=> *', [
        group([
            query(':leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 1,
                    transform: 'translateX(0%)'
                }),
                animate('500ms ease',
                    style({
                        opacity: 0,
                        transform: 'translateX(100%)'
                    })
                )
            ], { optional: true }),
            query(':enter', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('750ms ease',
                    style({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    })
                )
            ], { optional: true })
        ])
    ])
]);