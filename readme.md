validplease
------------
A JS module for input validation with custom Persian message.
[![Thanks to rimadarji](https://cdn.dribbble.com/users/2129809/screenshots/4788950/validate1.png "Thanks to rimadarji")](https://dribbble.com/rimadarji "Thanks to rimadarji")



### Warm Up
------------
Why should i use `validplease`?
 - Local in IR-FA.
 - Zero dependency.
 - More than 75 unit tests. 100% methods coverage.
 - No data leakage in message.
 - Clean an clear Persian message.
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

// console result:
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

// console result:
// output: ValidPlease {
//  message: 'پارامتر آدرس ایمیل را به درستی وارد نمایید',
//  success: false
// }
 ```




![](https://img.shields.io/github/stars/amindotb/validplease.svg) ![](https://img.shields.io/github/forks/amindotb/validplease.svg) ![](https://img.shields.io/github/tag/amindotb/validplease.svg) ![](https://img.shields.io/github/release/amindotb/validplease.svg) ![](https://img.shields.io/github/issues/amindotb/validplease.svg)