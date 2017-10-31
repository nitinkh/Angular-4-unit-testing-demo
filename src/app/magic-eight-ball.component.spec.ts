import { TestBed, async } from '@angular/core/testing';
import { MagicEightBallComponent } from './magic-eight-ball.component';
import { MagicEightBallService } from './magic-eight-ball.service';
import { By } from '@angular/platform-browser'

describe('Component:	MagicEightBall', () => {
    let fixture;
    let getHeaderEl = () => fixture.nativeElement.querySelector('h1');
    let magicEightBallResponse = 'Answer unclear';

    //if using stubs(1st way)
    //let magicEightBallServiceStub = { reveal: () => magicEightBallResponse };

    //for spy(2nd way)
    let magicEightBallService;
    let revealSpy;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MagicEightBallComponent],
            // providers: [{ provide: MagicEightBallService, useValue: magicEightBallServiceStub  }]
            providers: [MagicEightBallService]
        });
        fixture = TestBed.createComponent(MagicEightBallComponent);

        //for spy
        magicEightBallService = fixture.debugElement.injector.get(MagicEightBallService);
        revealSpy = spyOn(magicEightBallService, 'reveal').and.returnValue(magicEightBallResponse);
    }));

    afterEach(() => {
        fixture = undefined;
        magicEightBallService = undefined;
        revealSpy = undefined;
    });

    it('should	begin	with	no	text', async(() => {
        fixture.detectChanges();
        expect(getHeaderEl().textContent).toEqual('');
    }));

    it('should	show	text	after	click', async(() => {
        fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(getHeaderEl().textContent).toEqual(magicEightBallResponse);
    }));

    it('should	call	reveal	after	a	click', async(() => {
        fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
        expect(revealSpy.calls.count()).toBe(1);
        expect(revealSpy.calls.mostRecent().returnValue).toBe(magicEightBallResponse);
    }));
});