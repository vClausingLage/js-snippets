const dirMapping = {
    admin: {
      in: 'htdocs/app/client/src/javascript/admin/index.js',
      out: 'app/client/dist/javascript/admin/'
    },
    default: {
      in: 'htdocs/app/client/src/javascript/themes/default/index.js',
      out: 'themes/default/javascript/main/'
    }
  }

export const objectToIndexObject = (object: {[key: string]: {in:string, out: string}}) => {
    const obj = Object.values(object)
    const newObj = obj.map(el => {
      return {[el.in]: el.out}
    })
    return newObj
}

console.log(objectToIndexObject(dirMapping))