import { browser, by, element } from 'protractor';


export class ArticleComponentPage {
    navigate() {
        browser.get('/article');
    }

    getHeaderText() {
        return element(by.css('app-article	h1')).getText();
    }
}