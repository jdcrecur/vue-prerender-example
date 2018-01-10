/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
export default (name) => {
  return function (resolve) {
    require(['@/components/' + name + '.vue'], resolve)
  }
}
