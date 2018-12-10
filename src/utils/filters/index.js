export default {
  list(value) {
    if (!Array.isArray(value)) {
      return '???'
    }

    return value
      .map(v => {
        if (typeof v === 'string') {
          return v.charAt(0).toUpperCase() + v.slice(1)
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
}
