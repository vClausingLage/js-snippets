export function arraToLocalizedString(arr: string[] = [], lang = 'de') {

  const localizedArray = arr.map((str, index, arr) => {
      if (index === arr.length - 1) {
          return str + '.'
      }
      if (index === arr.length - 2 && lang === 'en') {
          return str + ', and '
      }
      if (index === arr.length - 2 && lang === 'de') {
          return str + ' und '
      }
      if (index !== arr.length - 1) {
          return str + ', '
      }
  })

  return localizedArray.join('')
}