import { arraToLocalizedString } from "./arrayToLocalizedString"

test('returns a localized string array', () => {
    const arr = [
        'Hello',
        'World',
        'Bar'
    ]
    expect(localizedStringArray(arr, 'en')).toBe('Hello, World, and Bar.')
    expect(localizedStringArray(arr, 'de')).toBe('Hello, World und Bar.')
})
