class AccountDetail {
    constructor(_userName, _dob, _accountNumber,  _balance) {
        this.statement = [];

      const _bankName = "Hello Bank Limited"
      this._userName = _userName;
      this._dob = _dob;
      this._bankName = _bankName;
      this._accountNumber = _accountNumber;
      this._balance= _balance;
    }
    /*@param {Int32Array} _accountNumber
    @param {Float32Array} amount 
     */
    async depositBalance( _accountNumber, amount, transferredBy="N/A"){
      try {
        
         if(amount>= 0){
    this._balance += amount;
              let depositarr = [`status: ${transferredBy?"N/A":"Deposit"}`,`Date: ${ new Date().toLocaleString()}`
, `AMOUNT: ${amount}`,`Remaining Balance: ${this._balance}`];

              this.statement.push(depositarr);

    return `${this._balance } `;
    }
    
        return `error: cannot accept amount less than 1 ${amount}`;
  
      } catch (e) {
            return "error: invalid amount provided";
  
        
      }
     
    }
      /*@param {Float32Array} amount */
  
   async withdrawBalance(amount, transferredTo="N/A"){
      try {
        if (amount<=this._balance) {
          console.info("111");
            this._balance -= amount;
            let withdrawarr = [`status: ${transferredTo?"N?A":"Withdrawn"}`,`Date: ${new Date().toLocaleString()}`
, `AMOUNT: ${amount}`,`Remaining Balance: ${this._balance}`];
              this.statement.push(withdrawarr);

                return `${amount} has been withdrawn `
      }return "error: insufficient balance ";
      } catch (e) {
        return "error: invalid amount provided";
      }
    }
    balanceInquiry(){
      console.info(this._balance);
      return this._balance;
    }   
    /*@param {Float32Array} amount 
      @param {Int32Array} accountNo
          @param {String} accountName 
  */
  
    async transferBalance(amount, accountNo, accountName){
      try {
         if (this.withdrawBalance(amount) && accountName.depositBalance(accountNo, amount)) {
//             let transferarr = [`Date: ${new Date().toLocaleString()}`
// , `AMOUNT: ${amount}`,`Remaining Balance: ${this._balance}`]
//             await this.statement.push(transferarr)

           
        return `transferred ${amount} from ${_accountName} to ${accountName}  succesfully `
      }return "error: some error occured";
      } catch (e) {
        return "error: some error occured";
      }
  
    }
    getStatement(){

      for(var i = 0; i < this.statement.length; i++) {

    console.info( this.statement[i] );
}

    }
    
  }
  const Sujal = new AccountDetail('Sujal',2001/1/1, 101, 100);
  const Rashi = new AccountDetail('Rashi',2001/1/1, 102, 120);
  let depositSujal= Sujal.depositBalance(101,1);
    let depositSujal1= Sujal.depositBalance(101,2);

   let transferToRashi = Sujal.transferBalance(1, 102, Rashi);
   let wihdrawFromRashi = Rashi.withdrawBalance(1);
   let rashiBalanceInquiry = Rashi.balanceInquiry();
  let statementSujal = Sujal.getStatement();
