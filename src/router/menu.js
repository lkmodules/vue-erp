const menu = [
  {
    name: '档案管理',
    icon: '',
    id: '2001',
    path: '/archives',
    lever: '1',
    children: [
      {
        name: '基础信息',
        icon: '',
        id: '200101',
        parentId: '2001',
        path: '/basic',
        lever: '2',
        children: [
          {
            name: '机构建档',
            icon: '',
            path: 'localBranch',
            id: '20010101',
            parentId: '200101',
            lever: '3',
            permission: {
              view: true,
              add: true,
              edit: true,
              delete: true,
              approve: true,
              stop: true,
              export: true,
              import: true,
              print: true
            }
          },
          {
            name: '机构档案',
            icon: '',
            path: '/branch',
            id: '20010102',
            parentId: '200101',
            lever: '3',
            permission: {
              view: true,
              add: true,
              edit: true,
              delete: true,
              approve: true,
              stop: true,
              export: true,
              import: true,
              print: true
            }
          },
          // {
          //   name: '店组管理',
          //   icon: '',
          //   path: 'archives/storeGroup/list',
          //   id: '20010101',
          //   parentId: '200101',
          //   lever: '3',
          //   permission: {
          //     view: true,
          //     add: true,
          //     edit: true,
          //     delete: true,
          //     approve: true,
          //     stop: true,
          //     export: true,
          //     import: true,
          //     print: true
          //   }
          // }
        ]
      },
      // {
      //   name: '供应商管理',
      //   icon: '',
      //   id: '200101',
      //   parentId: '2001',
      //   lever: '2',
      //   children: [
      //     {
      //       name: '供应商档案',
      //       icon: '',
      //       path: 'archives/supplier/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '供应商生命周期',
      //       icon: '',
      //       path: 'archives/supplierStatus/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '供应商区域档案',
      //       icon: '',
      //       path: 'archives/supplierRegion/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '收费项目定义',
      //       icon: '',
      //       path: 'archives/contractFeeDefinition/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     }
      //   ]
      // },
      // {
      //   name: '商品维护',
      //   icon: '',
      //   id: '200101',
      //   parentId: '2001',
      //   lever: '2',
      //   children: [
      //     {
      //       name: '供应商经营范围群组管理档案',
      //       icon: '',
      //       path: 'archives/businessGroup/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '经营范围管理',
      //       icon: '',
      //       path: 'archives/businessScope/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     }
      //   ]
      // },
      // {
      //   name: '商品关联信息',
      //   icon: '',
      //   id: '200101',
      //   parentId: '2001',
      //   lever: '2',
      //   children: [
      //     {
      //       name: '类别管理',
      //       icon: '',
      //       path: '/itemCls',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '品牌管理',
      //       icon: '',
      //       path: 'archives/itemCls/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '单位管理',
      //       icon: '',
      //       path: 'archives/itemUnit/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '商品部门',
      //       icon: '',
      //       path: 'archives/itemDepartment/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     }
      //   ]
      // },
      // {
      //   name: '档案管理',
      //   icon: '',
      //   id: '200101',
      //   parentId: '2001',
      //   lever: '2',
      //   children: [
      //     {
      //       name: '商品档案',
      //       icon: '',
      //       path: 'archives/item/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '商品生命周期',
      //       icon: '',
      //       path: 'archives/lifecycle/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     }
      //   ]
      // },
      // {
      //   name: '商品价格管理',
      //   icon: '',
      //   id: '200101',
      //   parentId: '2001',
      //   lever: '2',
      //   children: [
      //     {
      //       name: '调零售价单',
      //       icon: '',
      //       path: 'archives/itemPriceChange/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '调进货价单',
      //       icon: '',
      //       path: 'archives/purchasePriceChange/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '调配送价单',
      //       icon: '',
      //       path: 'archives/deliveryPriceChange/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '门店调价单',
      //       icon: '',
      //       path: 'archives/storePriceChange/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '生鲜调价单',
      //       icon: '',
      //       path: 'archives/freshPriceChange/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '调会员价单',
      //       icon: '',
      //       path: 'archives/vipPriceChange/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     },
      //     {
      //       name: '综合调价单',
      //       icon: '',
      //       path: 'archives/compositePriceChange/list',
      //       id: '20010101',
      //       parentId: '200101',
      //       lever: '3',
      //       permission: {
      //         view: true,
      //         add: true,
      //         edit: true,
      //         delete: true,
      //         approve: true,
      //         stop: true,
      //         export: true,
      //         import: true,
      //         print: true
      //       }
      //     }
      //   ]
      // }
    ]
  }
]

export default menu
