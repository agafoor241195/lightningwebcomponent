import { createElement } from 'lwc';
import Lwc_displayarraydata_eg4 from 'c/lwc_displayarraydata_eg4';

describe('c-lwc-displayarraydata-eg4', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-displayarraydata-eg4', {
            is: Lwc_displayarraydata_eg4
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});