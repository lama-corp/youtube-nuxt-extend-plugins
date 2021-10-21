export default ({ $utils }) => {
  console.log('Calling lodash from plugin!')
  console.log($utils.merge({ test1: 1 }, { test2: 2 }))
}
