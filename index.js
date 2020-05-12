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
        this.input = inputs;
        return this;
    }

    allias(alias)
    {
        this.alias = alias;
        return this;
    }

    required()
    {
        this._check();
        if(this.input == null || this.input == undefined || this.input === '')
            return this._break(`مقدار پارامتر ${this._alias()} اجباریست`);
        else
            return this;
    }

    max(m) {
        this._check();
        if (isNaN(this.input)) { 
          return this._break(`مقدار پارامتر ${this._alias()} را به صورت عددی وارد نمایید`);
        }
        this.input = parseInt(this.input);
        
        if(m < this.input)
            return this._break(`مقدار پارامتر ${this._alias()} بیشتر از مقدار درخواستی است`);
        else
            return this;
    }

    min(m) {
        this._check();
        if (isNaN(this.input)) { 
          return this._break(`مقدار پارامتر ${this._alias()} را به صورت عددی وارد نمایید`);
        }
        this.input = parseInt(this.input);

        if(m > this.input)
            return this._break(`مقدار پارامتر ${this._alias()} کمتر از مقدار درخواستی است`);
        else
            return this;
    }

    isInt()
    {
      this._check();
      if (isNaN(this.input)) 
        return this._break(`مقدار پارامتر ${this._alias()} را به صورت عددی وارد نمایید`);
      else
          return this;
    }

    isEmail()
    {
      this._check();
      if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.input))
        return this._break(`پارامتر ${this._alias()} را به درستی وارد نمایید`);
      else
        return this;
    }

    isDate(separator='-')
    {
      this._check();
      const pattern = `\\b^[0-9]{4}${separator}(0[1-9]|1[0-2])${separator}(0[1-9]|[1-2][0-9]|3[0-1])$\\b`;
      const regex = new RegExp(pattern);
      if(!regex.test(this.input))
        return this._break(`پارامتر ${this._alias()} را به درستی وارد نمایید`);
        else
            return this;
    }

    isCardNumber()
    {

    }

    isMeliNumber()
    {

    }

    isIP()
    {
      this._check();
      const pattern = `\\b^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$\\b`;
      const regex = new RegExp(pattern);
      if(!regex.test(this.input))
        return this._break(`پارامتر ${this._alias()} را به درستی وارد نمایید`);
        else
            return this;
    }

    isVersion()
    {
      this._check();
      const pattern = `\\b^\\d+\.?\\d+\.?\\d+\.?\\d*$\\b`;
      const regex = new RegExp(pattern);
      if(!regex.test(this.input))
        return this._break(`پارامتر ${this._alias()} را به درستی وارد نمایید`);
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