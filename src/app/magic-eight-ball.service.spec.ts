import { TestBed, inject } from '@angular/core/testing';
import { MagicEightBallService } from './magic-eight-ball.service';

describe('service : MagicEightBall', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MagicEightBallService
            ]
        });
    });

    it('should be able to inject', inject([MagicEightBallService],
        (magigEightBallService: MagicEightBallService) => {
            expect(magigEightBallService).toBeTruthy();
        }));

    it('should be able to inject', inject([MagicEightBallService],
        (magigEightBallService: MagicEightBallService) => {
            let result = magigEightBallService.reveal();
            expect(result).toEqual(jasmine.any(String));
            expect(result.length).toBeGreaterThan(0);
        }));

    it('should	not	return	the	same	value	twice	in	a	row', inject([MagicEightBallService],
        (magicEightBallService: MagicEightBallService) => {
            let last; for (let i = 0; i < 50; ++i) {
                let next = magicEightBallService.reveal();
                expect(next).not.toEqual(last);
                last = next;
            }
        }));
});