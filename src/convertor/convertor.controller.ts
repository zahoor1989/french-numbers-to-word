// src itmes.service.ts
import * as TaskHelper from "../helpers/convertorHelpers";

/*
* Service methods
*/
export const numberToString = (frCounting:number[]):any => {
  const numToFrench = []
  for (let choice = 0; choice < frCounting.length; choice++) {
    numToFrench.push({
      [frCounting[choice]] : TaskHelper.NumberToLetterInFrench(frCounting[choice])
    })
  }
  return numToFrench;
}
