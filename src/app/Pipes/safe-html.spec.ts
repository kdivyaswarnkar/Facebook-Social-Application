// import { SafeHtml } from './safe-html';

// describe('SafeHtml', () => {
//   it('should create an instance', () => {
//     expect(new SafeHtml()).toBeTruthy();
//   });
// });


import { SafeHtml } from './safe-html';
import { DomSanitizer } from '@angular/platform-browser';

describe('SafeHtml', () => {
  it('should create an instance', () => {
    const sanitizer = {} as DomSanitizer; // Replace this with an actual instance of DomSanitizer
    expect(new SafeHtml(sanitizer)).toBeTruthy();
  });
});
