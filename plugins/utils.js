import { merge } from 'lodash-es'

export default (context, inject) => {
  inject('utils', {
    merge
  })
}
