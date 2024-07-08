import './style.css'
import { arrayToLocalizedString } from './arrayToLocalizedString.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Localized String</h1>
    <p id="locStringEN"></p>
    <p id="locStringDE"></p>
  </div>
`

document.querySelector<HTMLDivElement>('#locStringEN')!.textContent = arrayToLocalizedString(['Hello', 'World', 'Bar'], 'en', 'and')
document.querySelector<HTMLDivElement>('#locStringDE')!.textContent = arrayToLocalizedString(['Hello', 'World', 'Bar'], 'de', 'und')