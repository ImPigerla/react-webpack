import Demo from 'views/demo/index.jsx'
import loadable from '@loadable/component'

// router路由配置
const routes = [{
  path: '/',
  name: 'index',
  component: loadable(() => import('views/index/index.jsx'))
}, {
  path: '/demo',
  name: 'demo',
  component: Demo
}]

export default routes
