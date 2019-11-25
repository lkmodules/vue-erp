export const menu = [
  {
    name: '档案管理',
    icon: '',
    id: '2001',
    lever: '1',
    children: [
      {
        name: '基础信息',
        icon: '',
        id: '200101',
        parentId: '2001',
        lever: '2',
        children: [
          {
            name: '机构建档',
            icon: '',
            url: '/localbranch',
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
            url: '/localbranch',
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
            name: '店组管理',
            icon: '',
            url: '/branch',
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
          }
        ]
      },
      {
        name: '供应商管理',
        icon: '',
        id: '200101',
        parentId: '2001',
        lever: '2',
        children: [
          {
            name: '供应商档案',
            icon: '',
            url: '/supplier',
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
            name: '供应商生命周期',
            icon: '',
            url: '/supplierStatus',
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
            name: '供应商区域档案',
            icon: '',
            url: '/supplierRegion',
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
            name: '收费项目定义',
            icon: '',
            url: '/contractFeeDefinition',
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
          }
        ]
      },
      {
        name: '商品维护',
        icon: '',
        id: '200101',
        parentId: '2001',
        lever: '2',
        children: [
          {
            name: '供应商经营范围群组管理档案',
            icon: '',
            url: '/businessGroup',
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
            name: '经营范围管理',
            icon: '',
            url: '/businessScope',
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
          }
        ]
      },
      {
        name: '商品关联信息',
        icon: '',
        id: '200101',
        parentId: '2001',
        lever: '2',
        children: [
          {
            name: '类别管理',
            icon: '',
            url: '/itemCls',
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
            name: '品牌管理',
            icon: '',
            url: '/itemBrand',
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
            name: '单位管理',
            icon: '',
            url: '/itemUnit',
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
            name: '商品部门',
            icon: '',
            url: '/itemDepartment',
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
          }
        ]
      },
      {
        name: '档案管理',
        icon: '',
        id: '200101',
        parentId: '2001',
        lever: '2',
        children: [
          {
            name: '商品档案',
            icon: '',
            url: '/item',
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
            name: '商品生命周期',
            icon: '',
            url: '/lifecycle',
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
          }
        ]
      },
      {
        name: '商品价格管理',
        icon: '',
        id: '200101',
        parentId: '2001',
        lever: '2',
        children: [
          {
            name: '调零售价单',
            icon: '',
            url: '/itemPriceChange',
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
            name: '调进货价单',
            icon: '',
            url: '/purchasePriceChange',
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
            name: '调配送价单',
            icon: '',
            url: '/deliveryPriceChange',
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
            name: '门店调价单',
            icon: '',
            url: '/storePriceChange',
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
            name: '生鲜调价单',
            icon: '',
            url: '/freshPriceChange',
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
            name: '调会员价单',
            icon: '',
            url: '/vipPriceChange',
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
            name: '综合调价单',
            icon: '',
            url: '/compositePriceChange',
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
          }
        ]
      }
    ]
  }
]
