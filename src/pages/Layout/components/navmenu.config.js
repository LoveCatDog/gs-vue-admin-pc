var navMenu = [
  {
    name: '首页',
    icon: '',
    path: '/home'
  },
  {
    name: '基础数据',
    icon: '',
    path: 'basic',
    children: [
      {
        name: '数据导入',
        icon: 'file',
        path: 'progress',
      },
      {
        name: '数据列表',
        icon: 'file',
        path: 'datalist',
      },
      {
        name: '学院专业列表',
        icon: 'file',
        path: 'univerpro',
      },
      {
        name: '科类管理',
        icon: 'file',
        path: 'discipline',
      },
      {
        name: '省份专业管理',
        icon: 'file',
        path: 'promajor',
      },
      {
        name: '批次管理',
        icon: 'file',
        path: 'batchman',
      },
      {
        name: '考生类别管理',
        icon: 'file',
        path: 'examinee',
      },
      {
        name: '高中管理',
        icon: 'file',
        path: 'highmess',
      }
    ],
  },
  {
    name: '基本教育状态表',
    icon: '',
    path: 'stateexcel',
    children: [
      {
        name: '表6-3-1',
        icon: 'file',
        path: 'excel6-3-1',
      },
      {
        name: '表6-3-3',
        icon: 'file',
        path: 'excel6-3-3',
      },
      {
        name: '表6-3-4',
        icon: 'file',
        path: 'excel6-3-4',
      }
    ],
  },
  {
    name: '教育事业统计表',
    icon: 'folder',
    path: 'excel',
    children: [
      {
        name: '高基311',
        icon: 'file',
        path: 'excel311',
      },
      {
        name: '高基312',
        icon: 'file',
        path: 'excel312',
      },
      {
        name: '高基322',
        icon: 'file',
        path: 'excel322',
      },
      {
        name: '高基941',
        icon: 'file',
        path: 'excel941',
      },
      {
        name: '高基942',
        icon: 'file',
        path: 'excel942',
      },
      {
        name: '高基943',
        icon: 'file',
        path: 'excel943',
      },
      {
        name: '高基944',
        icon: 'file',
        path: 'excel944',
      }
    ],
  },
  {
    name: '数据分析',
    icon: 'bar-chart',
    path: 'templete',
    children: [
      {
        name: '招生数据统计',
        icon: 'file',
        path: 'statistics',
      },
      {
        name: '结果分析',
        icon: 'file',
        path: 'analysis',
      },
      {
        name: '省份',
        icon: 'file',
        path: 'provinces',
      },
      {
        name: '专业',
        icon: 'file',
        path: 'specials',
      },
      {
        name: '志愿率',
        icon: 'file',
        path: 'rate',
      },
      {
        name: '生源高中',
        icon: 'file',
        path: 'highschool',
      },
    ]
  },
  {
    name: '辅助功能',
    icon: 'inbox',
    path: 'auxiliary',
    children: [
      {
        name: '分班',
        icon: 'file',
        path: 'division'
      }
    ]
  }
];


export default navMenu;