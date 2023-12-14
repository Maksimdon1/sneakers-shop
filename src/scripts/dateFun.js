
class DateTimeParse {
    DateParse;
    Year;
    Month;
    Day;
    Hour;
    Minute;
    Second;

    constructor(params) {
        this.DateParse = new Date(params)
        this.Year = this.DateParse.getFullYear()
        this.Month = this.DateParse.getMonth()
        this.Day = this.DateParse.getDay()
        this.Hour = this.DateParse.getHours()
        this.Minute = this.DateParse.getMinutes()
        this.Second = this.DateParse.getSeconds()

        
    
    }
  
    GetAll() {
     
        return{

            Year : this.Year,
            Month : this.Month,
            Day : this.Day,
            Hour: this.Hour,
            Minute: this.Minute,
            Second : this.Second
        }
      
    }
  
  }
  module.exports = DateTimeParse;
  