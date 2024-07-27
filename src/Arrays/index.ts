import { calculateTotalAmount, groupObjectAndCount, arrayToObject, flattenArrayOfObjects, countOccurrences, mergeObjects, uniqueValues } from "./Reduce"

document.getElementById('total')!.innerText = calculateTotalAmount()
document.getElementById('group')!.innerText = groupObjectAndCount()
document.getElementById('lookup')!.innerText = arrayToObject()
document.getElementById('flatten')!.innerText = flattenArrayOfObjects()
document.getElementById('count')!.innerText = countOccurrences()
document.getElementById('merge')!.innerText = mergeObjects()
document.getElementById('unique')!.innerText = uniqueValues()