const routeFiles = require.context('.', true, /\.vue$/)

const routes = routeFiles.keys().reduce((routes, routePath) => {
  const routeName = routePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  routes[routeName] = routeFiles(routePath).default
  return routes
}, {})

export default routes
