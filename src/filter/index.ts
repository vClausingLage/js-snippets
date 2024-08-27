import '../style.css'

class Filter {
  constructor(
    private filter?: any
  ) {}

  public init() {
    console.log('hi')
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const filter = new Filter()
  filter.init()
})
