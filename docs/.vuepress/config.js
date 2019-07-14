module.exports = {
  base: '/',
  title: 'Front End',
  description: ' ',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: require('./nav/index'),
    sidebar: {
      '/js/': getJsSidebar('基础', '进阶'),
    }
  }
}

function getJsSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
      ]
    }
  ]
}
