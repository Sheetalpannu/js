const accountId = 12435
let accountEmail = "dsgh@gmail.com"
var accountPassword = "23451"
accountCity = "Delhi"
let accountState;

// accountId = 2// not allowed

accountEmail = "gfd@gmail.com"
accountPassword = "22221"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in block scope and functional scope
*/