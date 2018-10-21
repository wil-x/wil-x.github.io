import dayjs from 'dayjs'
import { checkIsMobile } from './helper'

export default ({ Vue }) => {
  Vue.mixin({
    mounted() {
      if (checkIsMobile()) {
        this.$router.replace('/blackhole/')
      }
    }
  })

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
