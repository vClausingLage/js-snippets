import './style.css'
import { arraToLocalizedString } from './arrayToLocalizedString.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Localized String</h1>
    <p id="locStringEN"></p>
    <p id="locStringDE"></p>
  </div>
`

document.querySelector<HTMLDivElement>('#locStringEN')!.textContent = arraToLocalizedString(['Hello', 'World', 'Bar'], 'en')
document.querySelector<HTMLDivElement>('#locStringDE')!.textContent = arraToLocalizedString(['Hello', 'World', 'Bar'], 'de')