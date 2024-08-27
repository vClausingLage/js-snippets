type Gender = {
    0: 'male',
} | {
    1: 'female',
} | {
    3: 'other'
}

type Employment = {
    0: 'full-time',
} | {
    1: 'part-time',
} | {
    2: 'self-employed',
} | {
    3: 'unemployed',
} | {
    4: 'student',
} | {
    5: 'retired',
} 

type Data = {
    id: number
    name: string
    gender: Gender
    age: number
    employment: Employment[]
}

export const mock: Data[] = [
    {
        id: 0,
        name: 'First',
        gender: {
            0: 'male'
        },
        age: 20,
        employment: [
            {
                0: 'full-time'
            },
            {
                1: 'part-time'
            }
        ]
    }
]

const createMockData = () => {
    const arr = [...Array(10).keys()]
    return arr.map((_, index): Data=> {
        return {
            id: index,
            name: `Name ${index}`,
            gender: { 0: 'male' },
            age: Math.floor(Math.random() * 100),
            employment: [
                { 0: 'full-time' },
                { 1: 'part-time' }
            ],
        }
    })
}