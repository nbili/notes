module.exports = {
  base: '/',
  title: 'Front End',
  head: [
    ['link', { rel: 'icon', href: `/favicon.gz.ico` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  description: ' ',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: require('./nav/index'),
    sidebar: {
      '/ts/': getTSSidebar('TS基础'),
      '/js/': getJSSidebar('JS基础')
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
  ]
}

function getTSSidebar(groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'type'
      ]
    }
  ]
}

function getJSSidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        'type'
      ]
    }
  ] 
}