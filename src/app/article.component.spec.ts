import { TestBed, async } from '@angular/core/testing';
import { ArticleComponent } from './article.compoent';

describe('Component:	Article', () => {
    let expectedTitle = 'Captain Hook Sues Over Spork Snafu';
    //let fixture;

    it('should create an instance', () => {
        let component = new ArticleComponent();
        expect(component).toBeTruthy();
    });

    describe('Async', () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [ArticleComponent],
            });

        }));

        afterEach(() => {
            //fixture = undefined;
        });

        it('should have correct title', async(() => {
            const fixture = TestBed.createComponent(ArticleComponent);
            expect(fixture.componentInstance.title).toEqual(expectedTitle);
        }));

        it('should render title in an h1 tag', async(() => {
            const fixture = TestBed.createComponent(ArticleComponent);
            fixture.detectChanges();
            expect(fixture.nativeElement.querySelector('h1').textContent).toContain(expectedTitle);

        }));
    });
});