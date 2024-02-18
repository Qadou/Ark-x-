function narcissistic(value) {
    // Code me to return true or false
    var val = (value + '').split('');
    let sum = 0;
    var num = val.map(x => sum+=(parseInt(x) ** val.length) )
    return sum === value;
  }