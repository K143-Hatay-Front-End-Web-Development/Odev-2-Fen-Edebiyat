const CheckMatch = (row1, row2, row3) => {
  let k = [...row1];
  let l = [...row2];
  let m = [...row3];
  let table = [k, l, m];

/* check rows*/
  for (let i = 0; i < table.length; i++) {
    let satir = table[i];
    for (let j = 0; j < satir.length; j++) {
      if (
        satir[j] === satir[j + 1] &&
        satir[j + 1] === satir[j + 2] &&
        satir[j] !== ""
      ) {
        console.log(i + 1 + ". satirda oyun biter");
        return satir[j];
      }
    }
  }
/*check columns*/
  for (let i = 0; i < table.length; i++) {
    if (
      k[i] === l[i] &&
      l[i] === m[i] &&
      (k[i] !== "" || l[i] !== "" || m[i] !== "")
    ) {
      console.log(i + 1 + ". sütunda oyun biter");
        return k[i];
    }
  }
/* check left diagonal algorithms */
  for (let i = 0; i < 3; i++) {
    if (
      k[0] === l[1] &&
      l[1] === m[2] &&
      (k[0] !== "" || l[1] !== "" || m[2] !== "")
    ) {
      console.log("1. soldan capraz kosegen oyun biter");
        return k[0];
    }
  }/* check right diagonal algorithms */
  for (let i = 0; i < 3; i++) {
    if (
      m[0] === l[1] &&
      l[1] === k[2] &&
      (k[2] !== "" || l[1] !== "" || m[0] !== "")
    ) {
      console.log("2. sagdan capraz kosegen oyun biter");
        return k[2];
    }
  }
  return;
};

export default CheckMatch;
