import path from 'path'

export default function() {
  this.addPlugin(path.resolve(__dirname, 'plugins/callLodash.js'))
}
