const routeFiles = require.context('.', true, /\.vue$/)

const routes = routeFiles.keys().reduce((routes, routePath) => {
  const routeName = routePath.split('/')[routePath.split('/').length - 1].split('.')[0]
  routes[routeName] = routeFiles(routePath).default
  return routes
}, {})

export default routes
