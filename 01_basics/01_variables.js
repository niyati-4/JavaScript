const accountId = 144558
let accountEmail = "niyu@google.com"
var accountPassword = "12345"
accountCity = "Bhavnagar"
let accountState; 


// accountId = 2 // not allowed

accountEmail = "np@np.com"
accountPassword = "521364"
accountCity = "surat"

console.log(accountId);
/*
prefer to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])