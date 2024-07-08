export function arrayToLocalizedString(arr: string[] = [], lang = 'de', conj = 'und') {

  const localizedArray = arr.map((str, index, arr) => {
      if (index === arr.length - 1) {
          return str + '.'
      }
      if (index === arr.length - 2 && lang === 'en') {
          return str + `, ${conj} `
      }
      if (index === arr.length - 2 && lang === 'de') {
          return str + ` ${conj} `
      }
      if (index !== arr.length - 1) {
          return str + ', '
      }
  })

  return localizedArray.join('')
}