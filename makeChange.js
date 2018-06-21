// **** PROBLEM 3 *****
// @ammout is the amount you are making change for
// @coins is the set of coin values you can use

function makeChange(ammout, coins) {
    // initialize the 'ways' answersArray
    let answers = [];
    for (let n = 1; n <= ammout; n++) {
        answers[n] = 0;
    }
    // there is only one way of doing 0 cents?
    // initialized the first pass
    answers[0] = 1;
        
    // go through the coins one at a time
    coins.forEach(function(coin){
        // test each value after you are able to use at least one of the coin
        for (let i = coin; i <= ammout; i++) {
            // can you make change from the remainder
            // after subtracting out another coin?
            let rem = i - coin;
            answers[i] += answers[rem];
        }
    });
    // answers at the amount will be the sum of all possibilities
    return answers[ammout];  
} 
makeChange(4, [1,2,3]);