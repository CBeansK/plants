const codeGen = require('voucher-code-generator');

module.exports.create = function(req, res) {
  // step 1: get the data from request (name, email, cost, count)
  const { cost, name, email , count } = req.query;

  // generate coupon codes
  const codesGenerated = [];
  for(let i = 0; i < count; i++) {
    // generate coupon code
    let newCouponCode = codeGen.generate({
      length: 25,
      count: 1,
      charset: codeGen.charset('numbers')
    });

    // add to codes list for response
    codesGenerated.push(newCouponCode[0]);
  };

  // step 3: build transaction data and put in response
  const transaction = {
    name: name,
    email: email,
    cost: cost,
    codes: codesGenerated
  };

  // attach it to the main transaction
  // step 4: return response
  res.statusCode = 200;
  res.send(transaction);

}
