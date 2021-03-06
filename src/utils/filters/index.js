export default {
  list(value) {
    if (!Array.isArray(value)) {
      return '???'
    }

    return value
      .map(v => {
        if (typeof v === 'string') {
          return this.capitalize(v)
        }

        return v
      })
      .join(', ')
  },
  money(value) {
    if (typeof value !== 'number') {
      return '???'
    }

    return value / 1000
  },
  // Transforms ISO8601 dates into date format: mm/dd/yyyy
  // NOTE: this filter should validate a lot more ... what happens if
  // I pass a non valid ISO8601 string?
  date(value) {
    const date = new Date(value)
    return `${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear()}`
  },
  capitalize(value) {
    if (typeof value !== 'string') {
      return '???'
    }

    return value
      .trim()
      .split(/\s+/)
      .map(word => {
        const lower = word.toLowerCase()

        return lower.charAt(0).toUpperCase() + lower.substr(1)
      })
      .join(' ')
  },
  upper(value) {
    if (typeof value !== 'string') {
      return '???'
    }

    return value.toUpperCase()
  },
}
