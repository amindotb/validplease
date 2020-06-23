validplease
------------
A JS module for input validation with custom Persian message.
[![Thanks to rimadarji](https://cdn.dribbble.com/users/2129809/screenshots/4788950/validate1.png "Thanks to rimadarji")](https://dribbble.com/rimadarji "Thanks to rimadarji")



### Warm Up
------------
Why should i use `validplease`?
 - Local in IR-FA.
 - Zero dependency.
 - More than 100 unit tests. 100% methods coverage.
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
//  message: 'پارامتر آدرس ایمیل را به صورت یک آدرس ایمیل صحیح وارد نمایید',
//  success: false
// }
```


### Methods
------------

```.aliasName('Your alliar name')```        // The Alias name for this variable which is going to use in messages  
```.required()```                           // Checks variable must be set  
```.max(maximum number)```                  // Checks the input to be lower than maximum number  
```.min(minimum number)```                  // Checks the input to be greater than minimum number 
```.len(length)```                          // Checks the length of input to be equal with given length
```.maxLen(maximum number)```               // Checks the length of input to be lower than maximum number  
```.minLen(minimum number)```               // Checks the length of input to be greater than maximum number  
```.isInt()```                              // Checks the input must be number  
```.isBoolean()```                          // Checks the input to be boolean (=== true|false)  
```.isEmail()```                            // Checks the input to be a valid email address  
```.isMobile()```                           // Checks the input to be a valid Iranian format mobile number (eg: 09123456789)  
```.isDate('separator eg:-')```             // Checks the input to be valid date (eg: 1399-03-25)  
```.isMeliCode()```                         // Checks the input to be a valid Iranian natinal code format (Code Meli) 
```.isPersian()```                          // Checks if a valid Persian language character detected  
```.isEnglish()```                          // Checks if all characters are in English language  
```.isPersianDigit()```                     // Checks if all characters are in Persian language digit  
```.isEnglishDigit()```                     // Checks if all characters are in English language digit  
```.isIP()```                               // Checks the input to be a valid IP address in v4 format  
```.isIPv6()```                             // Checks the input to be a valid IP address in v6 format  
```.isVersion()```                          // Checks the input if it's a valid software version with maximum 4 scopes (major.minor.patch.build eg: 1.2 | 1.2.3 | 1.2.3.4)  
```.pattern('Given pattern')```             // Checks given pattern on the input    


![](https://img.shields.io/github/stars/amindotb/validplease.svg) ![](https://img.shields.io/github/forks/amindotb/validplease.svg) ![](https://img.shields.io/github/tag/amindotb/validplease.svg) ![](https://img.shields.io/github/release/amindotb/validplease.svg) ![](https://img.shields.io/github/issues/amindotb/validplease.svg)