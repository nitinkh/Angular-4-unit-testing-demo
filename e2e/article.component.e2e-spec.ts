import { ArticleComponentPage } from './article-component.po';

describe('Article	E2E	Test	Suite', () => {
    let page: ArticleComponentPage;

    beforeEach(() => {
        page = new ArticleComponentPage();
    });
    it('should	have	the	correct	h1	text', () => {
        page.navigate();
        expect(page.getHeaderText()).toEqual('Captain Hook Sues Over Spork Snafu');
    });
});