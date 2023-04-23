export class financeCalculator{
    
     static monthsInYear = 12;
    

        
    static calculateFutureValue(monthlyPayment, rate, years) {
       
        var months = years * monthsInYear;
        var intrestRate = 1+ rate / 100;
        var presentValue = monthlyPayment * months;
        var futureValue = presentValue * Math.pow(intrestRate, months);

        return futureValue.toFixed(2);
          
        }    

        static convertToCurrency(field){

            currancyFormatter = new Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD"
            });
            return currancyFormatter.format(field);
        }
}
