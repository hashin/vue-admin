import lazyLoading from './lazyLoading'

export default {
  path: '/devices',
  meta: {
    icon: 'fa-thermometer-three-quarters',
    expanded: false,
    label: 'Devices'
  },
  component: lazyLoading('devices', true),

  children: [
    {
      name: 'Devices',
      path: '',
      component: lazyLoading('devices/devices1'),
      meta: {
        link: 'devices/devices1.vue'
      }
    },
    {
      name: 'Market 1',
      path: 'devices1',
      meta: {
        description: 'Jump component is based on jump.js',
        repository: 'https://github.com/vue-bulma/jump',
        link: '/devices1.vue'
      },
      component: lazyLoading('devices/devices1')
    },
    {
      name: 'Market 2',
      path: 'devices2',
      meta: {
        description: 'Jump component is based on jump.js',
        repository: 'https://github.com/vue-bulma/jump',
        link: '/devices2.vue'
      },
      component: lazyLoading('devices/devices2')
    }
  ]
}
