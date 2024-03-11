function countPrimeNumbers() {
  var count = 0;
  function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) {
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }
  for (i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      count += 1;
    }
  }
  return count;
}
const t0 = performance.now();
countPrimeNumbers()
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`)
