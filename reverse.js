function reverseN(n, reversedNumber) {
  return n != (1 >> 1)
    ? reversedNumber = reverseN(
      //////////////////////////////* start divide n by 10 *//////////////////////////////////////////////////////
      ((((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) + ((((n >> 1)
      + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1)))  >> ((1 << 1) << 1))) >> (((1 << 1) << 1) << 1))
      ) + (((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) + ((((n >>
      1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) >> (((1 << 1) << 1) << 1
      ))) >> ((((1 << 1) << 1) << 1) << 1))) >> ((1 << 1) + 1))
      //////////////////////////////* add 0 or 1 to the above based */////////////////////////////////////////////
      //////////////////////////////* on whether or not the following *///////////////////////////////////////////
      //////////////////////////////* calculation is greater than 9 */////////////////////////////////////////////
      + (((n - (((((((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) <<
      1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) >>
      (((1 <<1) << 1) << 1))) + (((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >>
      ((1 <<1) << 1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1
      ) <<1))) >> (((1 << 1) << 1) << 1))) >> ((((1 << 1) << 1) << 1) << 1))) >> ((1 << 1) + 1)) <<
      (1 << 1)) + ((((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) <<
      1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) >>
      (((1 << 1) << 1) << 1))) + (((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >>
      ((1 << 1) << 1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1)
      << 1))) >> (((1 << 1) << 1) << 1))) >> ((((1 << 1) << 1) << 1) << 1))) >> ((1 << 1) + 1))) <<
      1)) // end calculation
      > ((((1 << 1) << 1) << 1) + 1)) // compare to 9
      ? 1 // add one if greater than 9
      : (1 >> 1)) // add 0 if less than 9
      //////////////////////////////* end divide n by 10 */////////////////////////////////////////////////////////
      ,
      //////////////////////////////* start append  to reverseNumber */////////////////////////////////////////////
      //////////////////////////////* append(r) = (10*r) + modulus(n) *////////////////////////////////////////////
      //////////////////////////////* start by getting 10*r *//////////////////////////////////////////////////////
      (((reversedNumber << ((1 << 1) + 1)) + (reversedNumber << 1))) // 10*r
      //////////////////////////////* then need to add the modulus *///////////////////////////////////////////////
      //////////////////////////////* modulus(n) = n - 10*(n/10) */////////////////////////////////////////////////
      //////////////////////////////* start by setting up n - *////////////////////////////////////////////////////
      + (n - // n -
      //////////////////////////////* start divide n by 10 *///////////////////////////////////////////////////////
      ((((((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) + ((((n
      >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1)))  >> ((1 << 1) << 1))) >> (((1 << 1) << 1) <<
      1))) + (((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) + ((((n >>
      1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) >> (((1 << 1) << 1) << 1)))
      >> ((((1 << 1) << 1) << 1) << 1))) >> ((1 << 1) + 1))
      //////////////////////////////* add 0 or 1 to the above based */////////////////////////////////////////////
      //////////////////////////////* on whether or not the following *///////////////////////////////////////////
      //////////////////////////////* calculation is greater than 9 */////////////////////////////////////////////
      + (((n - (((((((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) <<
      1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) >>
      (((1 <<1) << 1) << 1))) + (((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >>
      ((1 <<1) << 1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1
      ) <<1))) >> (((1 << 1) << 1) << 1))) >> ((((1 << 1) << 1) << 1) << 1))) >> ((1 << 1) + 1)) <<
      (1 << 1)) + ((((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) <<
      1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) >>
      (((1 << 1) << 1) << 1))) + (((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >>
      ((1 << 1) << 1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1)
      << 1))) >> (((1 << 1) << 1) << 1))) >> ((((1 << 1) << 1) << 1) << 1))) >> ((1 << 1) + 1))) <<
      1)) // end calculation
      > ((((1 << 1) << 1) << 1) + 1)) // compare to 9
      ? 1 // add one if greater than 9
      : (1 >> 1)) // add 0 if less than 9
      // (n/10)
      //////////////////////////////* end divide n by 10 *///////////////////////////////////////////////////////
      //////////////////////////////* then multiply by 8 *///////////////////////////////////////////////////////
      << ((1 << 1) + 1)) // multiply by 8
      //////////////////////////////* now have 8*(n/10) *////////////////////////////////////////////////////////
      //////////////////////////////* now need 2*(n/10) *////////////////////////////////////////////////////////
      + 																			// add both 8 * (n/10) and 2 * (n/10)
      //////////////////////////////*  start divide n by 10 *////////////////////////////////////////////////////
      ((((((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) + ((((n
      >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1)))  >> ((1 << 1) << 1))) >> (((1 << 1) << 1) <<
      1))) + (((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) + ((((n >>
      1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) >> (((1 << 1) << 1) << 1)))
      >> ((((1 << 1) << 1) << 1) << 1))) >> ((1 << 1) + 1))
      //////////////////////////////* add 0 or 1 to the above based *////////////////////////////////////////////
      //////////////////////////////* on whether or not the following *//////////////////////////////////////////
      //////////////////////////////* calculation is greater than 9 *////////////////////////////////////////////
      + (((n - (((((((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) <<
      1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) >>
      (((1 <<1) << 1) << 1))) + (((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >>
      ((1 <<1) << 1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1
      ) <<1))) >> (((1 << 1) << 1) << 1))) >> ((((1 << 1) << 1) << 1) << 1))) >> ((1 << 1) + 1)) <<
      (1 << 1)) + ((((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) <<
      1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1) << 1))) >>
      (((1 << 1) << 1) << 1))) + (((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >>
      ((1 << 1) << 1))) + ((((n >> 1) + (n >> (1 << 1))) + (((n >> 1) + (n >> (1 << 1))) >> ((1 << 1)
      << 1))) >> (((1 << 1) << 1) << 1))) >> ((((1 << 1) << 1) << 1) << 1))) >> ((1 << 1) + 1))) <<
      1)) // end calculation
      > ((((1 << 1) << 1) << 1) + 1)) // compare to 9
      ? 1 // add one if greater than 9
      : (1 >> 1))) // add 0   if less 	  than 9
      // (n/10)
      //////////////////////////////* end divide n by 10 *//////////////////////////////////////////////////////
      //////////////////////////////* then multiply by 2 *//////////////////////////////////////////////////////
      << 1))) // multiply by 2
      ) // end of passing parameters
  : reversedNumber; // returned if n == 0
}

module.exports = function(n) {
  if (typeof n !== 'number') {
    throw new Error(`${n} is not a number`);
  }
  else if (n > Number.MAX_SAFE_INTEGER) {
    throw new Error(`${n} is greater than ${Number.MAX_SAFE_INTEGER} which is the maximum safe integer`);
  }
  else if (n < 0) {
    throw new Error(`${n} is less than 0`);
  }
  else {
    return reverseN(n, 0);
  }
};
