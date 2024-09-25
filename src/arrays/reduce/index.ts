export const calculateTotalAmount = () : string => {
    const orders = [
        { id: 1, amount: 50 },
        { id: 2, amount: 100 },
        { id: 3, amount: 75 }
      ]

    return orders.reduce((sum, order) => sum + order.amount, 0).toString()
}

export const groupObjectAndCount = () : string => {
  const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 23 }
  ]

  const groupedByName = people.reduce((group, person) => {
    group[person.name] = group[person.name] || []
    group[person.name].push(person)
    return group
  }, {} as Group)

  return JSON.stringify(groupedByName)
}

export const arrayToObject = () : string => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]

  const userLookup = users.reduce((lookup: any, user) => {
    lookup[user.id] = user
    return lookup
  }, {})

  return JSON.stringify(userLookup)
}

export const flattenArrayOfObjects = () : string => {
  const departments = [
    { name: 'Engineering', employees: ['Alice', 'Bob'] },
    { name: 'HR', employees: ['Charlie'] }
  ]

  const allEmployees = departments.reduce((employees:any, department) => {
    return employees.concat(department.employees)
  }, [])

  return JSON.stringify(allEmployees)
}

export const countOccurrences = () : string => {
  const fruits = [
    { type: 'apple', quantity: 5 },
    { type: 'banana', quantity: 2 },
    { type: 'apple', quantity: 3 }
  ]

  const fruitCount = fruits.reduce((count: any, fruit) => {
    count[fruit.type] = (count[fruit.type] || 0) + fruit.quantity
    return count
  }, {})

  return JSON.stringify(fruitCount)
}

export const mergeObjects = (): string => {
  const arr1 = [
    { id: 1, value: 10 },
    { id: 2, value: 20 }
  ]

  const arr2 = [
    { id: 1, value: 15 },
    { id: 3, value: 30 }
  ]

  const merged = arr1.concat(arr2).reduce((acc: any, obj) => {
    acc[obj.id] = acc[obj.id] || { id: obj.id, value: 0 }
    acc[obj.id].value += obj.value
    return acc
  }, {})

  return JSON.stringify(Object.values(merged))
}

export const uniqueValues = (): string => {
  const products = [
    { id: 1, category: 'fruit' },
    { id: 2, category: 'vegetable' },
    { id: 3, category: 'fruit' }
  ];

  const uniqueCategories = products.reduce((categories: any, product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
    return categories;
  }, [])

  return JSON.stringify(uniqueCategories)
}

// TYPES
// groupObjectAndCount
type Person = {
  name: string
  age: number
}
type Group = {
  [key: string]: Person[]
}
