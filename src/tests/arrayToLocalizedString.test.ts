import { arrayToLocalizedString } from "./arrayToLocalizedString"

test('returns a localized string array', () => {
    const arr = [
        'Hello',
        'World',
        'Bar'
    ]
    expect(arrayToLocalizedString(arr, 'en', 'and')).toBe('Hello, World, and Bar.')
    expect(arrayToLocalizedString(arr, 'de', 'und')).toBe('Hello, World und Bar.')
})
