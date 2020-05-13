validplease
------------
A JS module for input validation with custom Persian message.
[logo]: https://cdn.dribbble.com/users/2129809/screenshots/4788950/validate1.png "Thanks to rimadarji @https://dribbble.com/rimadarji"


### Warm Up
------------
Why should i use `validplease`?
 - Local in IR-FA.
 - More than 75 unit tests. 100% methods coverage.
 - No data leakage in message.
 - Clean an clear Persian message.
 - Zero dependency.
 - Customizable.
 - Simple. You can simply jump into the code and make a pull for you changes.

I accept any contributes with open arms \\./

### Instalation
------------
 ```
npm i validplease
 ```

### Usage
------------
 ```
 const VP = requre('validplease');
 const vp = new VP();
 ```

 ### Samples
------------
 ```
const result = vp.v('johndoe@gmail.com').required().isEmail();
console.log('output:', result);
// output: ValidPlease {
//  input: 'johndoe@gmail.com',
//  alias: null,
//  message: null,
//  success: true
// }
 ```

  ```
const result = vp.v('something that is not an email address').aliasName('آدرس ایمیل').required().isEmail();
console.log('output:', result);
// output: ValidPlease {
//  message: 'پارامتر آدرس ایمیل را به درستی وارد نمایید',
//  success: false
// }
 ```




![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)