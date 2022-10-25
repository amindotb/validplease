module.exports = class ValidPlease {
    
    constructor()
    {
        this.input = null;
        this.alias = null;
        this.message = null;
        this.success = true;
    }

    v(inputs)
    {
        this.input = null;
        this.alias = null;
        this.message = null;
        this.success = true;

        this.input = inputs;
        return this;
    }

    aliasName(alias)
    {
        this.alias = alias + ' ';
        return this;
    }

    required()
    {
        if(this.success === false) {
            return this;
        }
        if(this.input == null || this.input == undefined || this.input === '' || !this.hasOwnProperty("input"))
            return this._break(`مقدار پارامتر ${this._alias()}اجباریست`);
        else
            return this;
    }

    max(m) {
        if(this.success === false) {
            return this;
        }
        let temp = this.input;
        if (isNaN(+temp) || temp === '') {
          return this._break(`مقدار پارامتر ${this._alias()}را به صورت عددی وارد نمایید`);
        }
        temp = +temp;
        
        if(m < temp)
            return this._break(`مقدار پارامتر ${this._alias()}بیشتر از مقدار درخواستی (${m}) است`);
        else
            return this;
    }

    min(m) {
        if(this.success === false) {
            return this;
        }
        let temp = this.input;
        if (isNaN(+temp) || temp === '') {
          return this._break(`مقدار پارامتر ${this._alias()}را به صورت عددی وارد نمایید`);
        }
        temp = +temp;

        if(m > temp)
            return this._break(`مقدار پارامتر ${this._alias()}کمتر از مقدار درخواستی (${m}) است`);
        else
            return this;
    }

    len(m) {
        if(this.success === false) {
            return this;
        }
        let temp = this.input;
        temp = temp + '';
        const len = temp.length;
        
        if(m !== len)
            return this._break(`طول پارامتر ${this._alias()}باید (${m}) کاراکتر باشد`);
        else
            return this;
    }

    maxLen(m) {
        if(this.success === false) {
            return this;
        }
        let temp = this.input;
        temp = temp + '';
        const len = temp.length;
        
        if(m < len)
            return this._break(`طول پارامتر ${this._alias()}بیشتر از (${m}) کاراکتر است`);
        else
            return this;
    }

    minLen(m) {
        if(this.success === false) {
            return this;
        }
        let temp = this.input;
        temp = temp + '';
        const len = temp.length;
        
        if(m > len)
            return this._break(`طول پارامتر ${this._alias()}کمتر از (${m}) کاراکتر است`);
        else
            return this;
    }

    isInt()
    {
      if(this.success === false) {
            return this;
        }
      let temp = this.input;
      if (isNaN(+temp) || temp === '' || typeof temp !== "number" ) 
        return this._break(`مقدار پارامتر ${this._alias()}را به صورت عددی وارد نمایید`);
      else
          return this;
    }

    isBoolean()
    {
        if(this.success === false) {
            return this;
        }
        if(this.input === false || this.input === true)
            return this;
        else
            return this._break(`مقدار پارامتر ${this._alias()}را به صورت درست،غلط ارسال نمایید`);
    }

    isEmail()
    {
      if(this.success === false) {
            return this;
        }
      if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.input))
        return this;
      else
        return this._break(`پارامتر ${this._alias()}را به صورت یک آدرس ایمیل صحیح وارد نمایید`);
    }

    isMobile()
    {
      if(this.success === false) {
            return this;
        }
      if(/^09\d{9}$/.test(this.input))
        return this;
      else
        return this._break(`پارامتر ${this._alias()}را به فرمت موبایل ...09 وارد نمایید`);
    }


    isDate(separator='-')
    {
      if(this.success === false) {
            return this;
        }
      const pattern = `\\b^[0-9]{4}${separator}(0[1-9]|1[0-2])${separator}(0[1-9]|[1-2][0-9]|3[0-1])$\\b`;
      const regex = new RegExp(pattern);
      if(!regex.test(this.input))
        return this._break(`پارامتر ${this._alias()}را به درستی وارد نمایید`);
        else
            return this;
    }

    isMeliCode()
    {
        if(this.success === false) {
            return this;
        }
        let code = '' + this.input;
        let len = code.length;
        if(len < 8 || parseInt(code ,10)==0) 
            return false;
        code=('0000'+code).substr(len - 6);
        if(parseInt(code.substr(3,6),10)==0) 
            return false;
        let c=parseInt(code.substr(9,1),10);
        let s=0;
        for(let i=0;i<9;i++)
            s+=parseInt(code.substr(i,1),10)*(10-i);
        s=s%11;
        if((s<2 && c==s) || (s>=2 && c==(11-s)))
        {
            return this;
        }
        else
            return this._break(`مقدار کد ملی را به درستی وارد نمایید`);
    }

    isPostalCode()
    {      
        if(this.success === false) {
            return this;
        }
        const regex = new RegExp(/^(\d{5}-?\d{5})$/);
        if(!regex.test(this.input))
          return this._break(`کد پستی را به درستی وارد کنید`);
          else
              return this;
    }

    isPhone()
    {      
        if(this.success === false) {
            return this;
        }
        const regex = new RegExp(/^[2-9][0-9]{7}$/);
        if(!regex.test(this.input))
          return this._break(`شماره تلفن را به درستی وارد کنید`);
          else
              return this;
    }

    isPersian()
    {
        if(this.success === false) {
            return this;
        }
        const regex = new RegExp(/^[\u0600-\u06F9\s]+$/);
        if(!regex.test(this.input))
          return this._break(`پارامتر ${this._alias()}را به فارسی وارد کنید`);
          else
              return this;
    }

    isEnglish()
    {
        if(this.success === false) {
            return this;
        }
        const regex = new RegExp(/^[A-z0-9\s]+$/);
        if(!regex.test(this.input))
          return this._break(`پارامتر ${this._alias()}را به انگلیسی وارد کنید`);
          else
              return this;
    }

    isPersianDigit()
    {
        if(this.success === false) {
            return this;
        }
        const regex = new RegExp(/^[\u06F0-\u06F9]+$/);
        if(!regex.test(this.input))
          return this._break(`پارامتر ${this._alias()}را به اعداد فارسی وارد کنید`);
          else
              return this;
    }

    isEnglishDigit()
    {
        if(this.success === false) {
            return this;
        }
        const regex = new RegExp(/^[0-9]+$/);
        if(!regex.test(this.input))
          return this._break(`پارامتر ${this._alias()}را به اعداد انگلیسی وارد کنید`);
          else
              return this;
    }

    isIP()
    {
      if(this.success === false) {
            return this;
        }
      const regex = new RegExp(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
      if(!regex.test(this.input))
        return this._break(`پارامتر ${this._alias()}را به درستی وارد نمایید`);
        else
            return this;
    }

    isIPv6()
    {
      if(this.success === false) {
            return this;
        }
      const regex = new RegExp(/^(?:(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){6})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:::(?:(?:(?:[0-9a-fA-F]{1,4})):){5})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){4})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,1}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){3})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,2}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){2})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,3}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:[0-9a-fA-F]{1,4})):)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,4}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,5}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,6}(?:(?:[0-9a-fA-F]{1,4})))?::))))$/);
      if(!regex.test(this.input))
        return this._break(`پارامتر ${this._alias()}را به درستی وارد نمایید`);
        else
            return this;
    }

    isVersion()
    {
      if(this.success === false) {
            return this;
        }
      const regex = new RegExp(/^((\d+)\.){0,3}(\d+)$/);
      if(!regex.test(this.input))
        return this._break(`پارامتر ${this._alias()}را به درستی وارد نمایید`);
        else
            return this;
    }

    isIn(arr)
    {
      if(this.success === false) {
            return this;
        }
      
      if(!arr.includes(this.input))
        return this._break(`پارامتر ${this._alias()}را به درستی وارد نمایید`);
        else
            return this;
    }

    pattern(pat) {
        const regex = new RegExp(pat);
        if(!regex.test(this.input))
            return this._break(`پارامتر ${this._alias()}را به درستی وارد نمایید`);
        else
            return this;
    }

    _check() {
        if(this.success === false)
            return this;
    }

    _break(message) {
        this.success = false;
        this.message = message;
        delete this.input;
        delete this.alias;
        return this;
    }

    _alias()
    {
        if(this.alias == null)
            return '';
        else
            return this.alias;
    }

   
}