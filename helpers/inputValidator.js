function phoneValidator(input) {
  let output = '';
  if (input[0] === '0') {
    return output = '+62' + input.substring(1);
  } else if (input.slice(0,3) === '+62') {
    return output = input;
  } else {
    return output = '+62' + input;
  };
};


module.exports = { phoneValidator };