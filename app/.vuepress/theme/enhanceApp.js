import dayjs from 'dayjs'

export default ({ Vue }) => {
  Vue.filter('date', (val) => {
    const format = 'YYYY-MM-DD'

    if (!val) {
      return dayjs().format(format)
    }

    return dayjs(val).format(format)
  })

  Vue.filter('dateDiagonal', (val) => {
    const format = 'YYYY/MM/DD'

    if (!val) {
      return dayjs().format(format)
    }

    return dayjs(val).format(format)
  })
}
