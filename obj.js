const menuConfig = [
  {
    orderNo: 'workflow',
    name: '通用功能',
    id: 'workflow',
    children: [
      {
        orderNo: 'workflow-1',
        name: '待办任务',
        id: 'workflow-1',
        url: 'todotask.html#/todotask'
      },
      {
        orderNo: 2,
        name: '参保通用撤销管理',
        id: '1-3-2-reverse',
        url: 'N0201.html#/common-insu-reverse'
      },
      {
        orderNo: '14-21',
        name: '事务管理(公共)',
        id: '14-21',
        url: 'N1431.html#/N143101'
      },
      {
        orderNo: 'runqian-1',
        name: '报表模板',
        id: 'runqian-1',
        url: 'runqianmanager.html#/runqian'
      },
      {
        orderNo: 'runqian-2',
        name: '报表重复打印',
        id: 'runqian-2',
        url: 'runqianrepeatprint.html#/runqianrepeatprint'
      }
    ]
  },
  {
    orderNo: 1,
    name: '参保管理',
    id: '1',
    children: [
      {
        orderNo: 1,
        name: '参保登记管理',
        id: '1-1',
        children: [
          {
            orderNo: 1,
            name: '单位参保登记',
            id: '1-1-1',
            url: 'N0201.html#/N020101'
          },
          {
            orderNo: 2,
            name: '职工参保登记',
            id: '1-1-2',
            url: 'N0201.html#/N020102'
          },
          {
            orderNo: 3,
            name: '灵活就业人员参保登记',
            id: '1-1-3',
            url: 'N0101.html#/N010103'
          },
          {
            orderNo: 4,
            name: '超龄人员参保登记',
            id: '1-1-4',
            url: 'N0101.html#/N010104'
          }
        ]
      },
      {
        orderNo: 2,
        name: '职工参保人员管理',
        id: '1-2',
        children: [
          {
            orderNo: 1,
            name: '职工参保人员暂停缴费',
            id: '1-2-1',
            url: 'N0103.html#/N010301'
          },
          {
            orderNo: 2,
            name: '灵活就业人员中断缴费',
            id: '1-2-2',
            url: 'N0103.html#/N010302'
          },
          {
            orderNo: 3,
            name: '人员一般信息维护',
            id: '1-2-3',
            url: 'N0103.html#/N010303'
          },
          {
            orderNo: 4,
            name: '人员重要信息维护',
            id: '1-2-4',
            url: 'N0103.html#/N010304'
          },
          {
            orderNo: 5,
            name: '特殊身份认定',
            id: '1-2-5',
            url: 'N0105.html#/N010502'
          },
          {
            orderNo: 6,
            name: '医保视同缴费年限认定',
            id: '1-2-6',
            url: 'N0105.html#/N010503'
          },
          {
            orderNo: 7,
            name: '在职转退休',
            id: '1-2-7',
            url: 'N0105.html#/N010504'
          },
          {
            orderNo: 15,
            name: '退休转在职',
            id: '1-2-15',
            url: 'N0105.html#/N010515'
          },
          {
            orderNo: 8,
            name: '人员多号合并',
            id: '1-2-8',
            url: 'N0105.html#/N010501'
          },
          {
            orderNo: 10,
            name: '人员终止参保',
            id: '1-2-10',
            url: 'N0105.html#/N010505'
          },
          {
            orderNo: 11,
            name: '人员参保信息扩展',
            id: '1-2-11',
            url: 'N0105.html#/N010508'
          },
          {
            orderNo: 12,
            name: '基本医疗历史缴费年限认定',
            id: '1-2-12',
            url: 'N0105.html#/N010510'
          },
          {
            orderNo: 13,
            name: '人员终止转暂停',
            id: '1-2-13',
            url: 'N0105.html#/N010511'
          },
          {
            orderNo: 14,
            name: '退休人员暂停划账户',
            id: '1-2-14',
            url: 'N0105.html#/N010512'
          },
          {
            orderNo: 16,
            name: '退休人员批量转单位',
            id: '1-2-16',
            url: 'N0105.html#/N010516'
          },
          {
            orderNo: 17,
            name: '个人代缴认定',
            id: '1-2-17',
            url: 'N0105.html#/N010517'
          }
        ]
      },
      {
        orderNo: 3,
        name: '参保单位管理',
        id: '2-2',
        children: [
          {
            orderNo: 1,
            name: '单位信息维护',
            id: '2-2-1',
            url: 'N0202.html#/N020201'
          },
          {
            orderNo: 2,
            name: '单位缴费状态变更',
            id: '2-2-2',
            url: 'N0202.html#/N020202'
          },
          {
            orderNo: 3,
            name: '单位合并',
            id: '2-2-3',
            url: 'N0102.html#/N010203'
          },
          {
            orderNo: 4,
            name: '单位分户',
            id: '2-2-4',
            url: 'N0102.html#/N010204'
          },
          {
            orderNo: 5,
            name: '单位注销',
            id: '2-2-5',
            url: 'N0102.html#/N010205'
          },
          {
            orderNo: 8,
            name: '单位参保信息扩展',
            id: '2-2-8',
            url: 'N0102.html#/N010206'
          }
        ]
      }
    ]
  },
  {
    orderNo: 2,
    name: '参保缴费工资管理',
    id: '1-6',
    children: [
      {
        orderNo: 1,
        name: '缴费工资申报核定',
        id: '1-6-1',
        url: 'N0106.html#/N010601'
      },
      {
        orderNo: 2,
        name: '缴费工资变更核定',
        id: '1-6-2',
        url: 'N0106.html#/N010602'
      },
      {
        orderNo: 5,
        name: '社平工资启用',
        id: '1-6-3',
        url: 'N0106.html#/N010603'
      },
      {
        orderNo: 7,
        name: '缴费工资基数沿用',
        id: '1-6-8',
        url: 'N0106.html#/N010608'
      }
    ]
  },
  {
    orderNo: 3,
    name: '缴费管理',
    id: '2',
    children: [
      {
        orderNo: 1,
        name: '职工缴费管理',
        id: '2-1',
        children: [
          {
            orderNo: 1,
            name: '零星单位应收核定',
            id: '2-1-24',
            url: 'N0201.html#/N020123-new'
          },
          {
            orderNo: 1,
            name: '离休人员缴费核定',
            id: '2-1-31',
            url: 'N0201.html#/N020131'
          },
          {
            orderNo: 2,
            name: '用人单位统一应收核定',
            id: '2-1-21',
            url: 'N0201.html#/N020121'
          },
          {
            orderNo: 15,
            name: '零星单位应收核定预测',
            id: '2-1-29',
            url: 'N0201.html#/N020129'
          },
          {
            orderNo: 14,
            name: '正常核定回退',
            id: '2-8-01',
            url: 'N0201.html#/normal-verifi-reverse'
          },
          {
            orderNo: 16,
            name: '离休人员缴费核定',
            id: '2-1-30',
            url: 'N0201.html#/N020130'
          },
          {
            orderNo: 3,
            name: '单位特殊收款征集',
            id: '2-1-26',
            url: 'N0201.html#/N020126'
          },
          {
            orderNo: 6,
            name: '单位缓缴认定',
            id: '2-1-17',
            url: 'N0201.html#/N020117'
          },
          {
            orderNo: 7,
            name: '单位预缴核定',
            id: '2-3-01',
            url: 'N0203.html#/N020301'
          }
        ]
      },
      {
        orderNo: 2,
        name: '职工补收管理',
        id: '2-c',
        children: [
          {
            orderNo: 1,
            name: '单位补收核定',
            id: '2-1-03',
            url: 'N0201.html#/N020103'
          },
          {
            orderNo: 2,
            name: '单位差额补退',
            id: '2-1-05',
            url: 'N0201.html#/N020105'
          },
          {
            orderNo: 3,
            name: '统筹区差额补退',
            id: '2-1-07',
            url: 'N0201.html#/N020107'
          },
          {
            orderNo: 4,
            name: '单位欠费核销',
            id: '2-1-08',
            url: 'N0201.html#/N020108'
          },
          {
            orderNo: 5,
            name: '单位欠费补缴',
            id: '2-1-09',
            url: 'N0201.html#/N020109'
          },
          {
            orderNo: 6,
            name: '医保退休不满足年限一次性缴纳',
            id: '2-1-14',
            url: 'N0201.html#/N020114'
          },
          {
            orderNo: 7,
            name: '医疗保险费返还/核销',
            id: '2-1-10',
            url: 'N0201.html#/N020110'
          },
          {
            orderNo: 9,
            name: '人员缴费明细录入',
            id: '2-1-13',
            url: 'N0201.html#/N020113'
          }
        ]
      },
      {
        orderNo: 3,
        name: '灵活人员就业缴费管理',
        id: '2-3',
        children: [
          {
            orderNo: 1,
            name: '灵活就业人员医疗保险费缴纳',
            id: '2-1-11',
            url: 'N0201.html#/N020111'
          },
          {
            orderNo: 2,
            name: '灵活就业人员代扣核定',
            id: '2-1-12',
            url: 'N0201.html#/N020112'
          }
        ]
      },
      {
        orderNo: 4,
        name: '职工基金征集管理',
        id: '2-B-1',
        children: [
          {
            orderNo: 1,
            name: '医疗保险费缴费单据生成',
            id: '2-B-01',
            url: 'N020B.html#/N020B01'
          },
          {
            orderNo: 2,
            name: '医疗保险费缴费单据撤销',
            id: '2-B-02',
            url: 'N020B.html#/N020B02'
          },
          {
            orderNo: 3,
            name: '拨付计划生成',
            id: '2-B-05',
            url: 'N0901.html#/N090101'
          },
          {
            orderNo: 4,
            name: '推送税务单据撤销',
            id: '2-B-06',
            url: 'N020B.html#/N020B06'
          },
          {
            orderNo: 5,
            name: '单据变更',
            id: '2-B-07',
            url: 'N020B.html#/N020B07'
          },
          {
            orderNo: 6,
            name: '单据实收重处理',
            id: '2-B-08',
            url: 'N020B.html#/N020B08'
          }
        ]
      },
      {
        orderNo: 25,
        name: '退役士兵补收管理',
        id: '2-25',
        children: [
          {
            orderNo: 1,
            name: '退役士兵信息维护',
            id: '2-1-18',
            url: 'N0201.html#/N020127'
          },
          {
            orderNo: 2,
            name: '退役士兵中断补收',
            id: '2-1-03',
            url: 'N0201.html#/N020128'
          }
        ]
      },
      {
        orderNo: 5,
        name: '税务全责征收',
        id: '2-6',
        children: [
          {
            orderNo: 1,
            name: '单位缴费到账确认',
            id: '2-6-01',
            url: 'N0206.html#/N020601'
          },
          {
            orderNo: 2,
            name: '灵活就业人员缴费到账确认',
            id: '2-6-02',
            url: 'N0206.html#/N020602'
          },
          {
            orderNo: 3,
            name: '居民缴费到账确认',
            id: '2-6-03',
            url: 'N0206.html#/N020603'
          },
          {
            orderNo: 4,
            name: '特殊缴费到账确认',
            id: '2-6-04',
            url: 'N0206.html#/N020604'
          },
          {
            orderNo: 5,
            name: '医保费对账信息交换',
            id: '2-6-05',
            url: 'N0206.html#/N020605'
          },
          {
            orderNo: 6,
            name: '税务退款申请信息审核',
            id: '2-6-07',
            url: 'N0206.html#/N020607'
          }
        ]
      },
      {
        orderNo: 7,
        name: '税务代征',
        id: '2-7',
        children: [
          {
            orderNo: 1,
            name: '职工税务代征报盘',
            id: '2-7-01',
            url: 'N0207.html#/N020701'
          },
          {
            orderNo: 2,
            name: '职工税务代征回盘',
            id: '2-7-02',
            url: 'N0207.html#/N020702'
          },
          {
            orderNo: 3,
            name: '灵活就业税务代征报盘',
            id: '2-7-05',
            url: 'N0207.html#/N020705'
          },
          {
            orderNo: 4,
            name: '灵活就业税务代征回盘',
            id: '2-7-06',
            url: 'N0207.html#/N020706'
          },
          {
            orderNo: 5,
            name: '居民税务代征报盘',
            id: '2-7-03',
            url: 'N0207.html#/N020703'
          },
          {
            orderNo: 6,
            name: '居民税务代征回盘',
            id: '2-7-04',
            url: 'N0207.html#/N020704'
          },
          {
            orderNo: 7,
            name: '特殊缴费税务代征报盘',
            id: '2-7-07',
            url: 'N0207.html#/N020707'
          },
          {
            orderNo: 8,
            name: '特殊缴费税务代征回盘',
            id: '2-7-08',
            url: 'N0207.html#/N020708'
          },
          {
            orderNo: 9,
            name: '财务征收到账确认',
            id: '2-7-09',
            url: 'N0207.html#/N020709'
          }
        ]
      }
    ]
  },
  {
    orderNo: 4,
    name: '关系转移接续',
    id: '1-7',
    children: [
      {
        orderNo: 1,
        name: '基本医疗保险转移申请',
        id: '1-7-1',
        url: 'N0107.html#/N010701'
      },
      {
        orderNo: 3,
        name: '基本医疗保险转出',
        id: '1-7-3',
        url: 'N0107.html#/N010702'
      },
      {
        orderNo: 4,
        name: '基本医疗保险转入',
        id: '1-7-4',
        url: 'N0107.html#/N010703'
      },
      {
        orderNo: 5,
        name: '转入基金人员匹配',
        id: '1-7-5',
        url: 'N0107.html#/N010710'
      },
      {
        orderNo: 6,
        name: '转移机构信息变更',
        id: '1-7-6',
        url: 'N0107.html#/N010709'
      },
      {
        orderNo: 7,
        name: '转移情况统计',
        id: '1-7-7',
        url: 'N0107.html#/N010711'
      },
      {
        orderNo: 9,
        name: '转移信息管理',
        id: '1-7-9',
        url: 'N0107.html#/N010713'
      },
      {
        orderNo: 8,
        name: '基本医疗保险参保凭证打印',
        id: '1-7-8',
        url: 'N0107.html#/N010712'
      }
    ]
  },
  {
    orderNo: 5,
    name: '居民管理',
    id: '1-5',
    children: [
      {
        orderNo: 1,
        name: '居民参保人员管理',
        id: '1-4',
        children: [
          {
            orderNo: 1,
            name: '城乡居民单位新增',
            id: '1-4-9',
            url: 'N0104.html#/N010409'
          },
          {
            orderNo: 2,
            name: '城乡居民单位维护',
            id: '1-4-10',
            url: 'N0104.html#/N010410'
          },
          {
            orderNo: 3,
            name: '城乡居民单位注销',
            id: '1-4-11',
            url: 'N0104.html#/N010411'
          },
          {
            orderNo: 4,
            name: '城乡居民单位合并',
            id: '1-4-5',
            url: 'N0104.html#/N010405'
          },
          {
            orderNo: 5,
            name: '城乡居民参保登记',
            id: '1-4-1',
            url: 'N0104.html#/N010401'
          },
          {
            orderNo: 6,
            name: '城乡居民暂停参保登记',
            id: '1-4-6',
            url: 'N0104.html#/N010406'
          },
          {
            orderNo: 7,
            name: '城乡居民信息维护',
            id: '1-4-2',
            url: 'N0104.html#/N010402'
          },
          {
            orderNo: 8,
            name: '城乡居民特殊身份登记',
            id: '1-4-3',
            url: 'N0104.html#/N010403'
          },
          {
            orderNo: 9,
            name: '城乡居民跨区域流动',
            id: '1-4-12',
            url: 'N0104.html#/N010412'
          },
          {
            orderNo: 10,
            name: '家庭信息维护',
            id: '1-4-8',
            url: 'N0104.html#/N010408'
          },
          {
            orderNo: 11,
            name: '家庭人员信息维护',
            id: '1-4-7',
            url: 'N0104.html#/N010407'
          },
          {
            orderNo: 16,
            name: '城乡居民终止参保',
            id: '1-4-16',
            url: 'N0104.html#/N010416'
          }
        ]
      },
      {
        orderNo: 2,
        name: '城乡居民缴费管理',
        id: '2-4',
        children: [
          {
            orderNo: 1,
            name: '居民缴费核定',
            id: '2-4-01',
            url: 'N0204.html#/N020401'
          },
          {
            orderNo: 2,
            name: '批量居民缴费核定',
            id: '2-4-04',
            url: 'N0204.html#/N020404'
          },
          {
            orderNo: 3,
            name: '居民统筹区核定',
            id: '2-4-09',
            url: 'N0204.html#/N020409'
          },
          {
            orderNo: 4,
            name: '居民按基层行政区划核定',
            id: '2-4-010',
            url: 'N0204.html#/N0204010'
          },
          {
            orderNo: 6,
            name: '居民保险费返还',
            id: '2-4-02',
            url: 'N0204.html#/N020402'
          },
          {
            orderNo: 5,
            name: '居民保险费补差',
            id: '2-4-02-new',
            url: 'N0204.html#/N020402-new'
          },
          {
            orderNo: 7,
            name: '城乡居民补缴',
            id: '2-4-011',
            url: 'N0204.html#/N0204011'
          },
          {
            orderNo: 8,
            name: '居民零缴费单据生成',
            id: '2-4-012',
            url: 'N0204.html#/N0204012'
          },
          {
            orderNo: 10,
            name: '失地农民预缴核定',
            id: '2-4-014',
            url: 'N0204.html#/N0204014'
          }
        ]
      }
    ]
  },
  {
    orderNo: 7,
    name: '个人账户管理',
    id: '7',
    children: [
      {
        orderNo: 1,
        name: '个人账户收入管理',
        id: '3-1',
        children: [
          {
            orderNo: 2,
            name: '*单位退休人员划账户',
            id: '3-1-2',
            url: 'N0301.html#/N030102'
          },
          {
            orderNo: 3,
            name: '*灵活就业退休人员划账户',
            id: '3-1-3',
            url: 'N0301.html#/N030103'
          },
          {
            orderNo: 12,
            name: '*医疗照顾人员划账户',
            id: '3-1-12',
            url: 'N0301.html#/N030112'
          },
          {
            orderNo: 4,
            name: '*个人账户注入',
            id: '3-1-4',
            url: 'N0301.html#/N030104'
          },
          {
            orderNo: 9,
            name: '*预留人员账户划入',
            id: '3-1-9',
            url: 'N0301.html#/N030109'
          },
          {
            orderNo: 10,
            name: '*人员多划账户追回',
            id: '3-1-10',
            url: 'N0301.html#/N030110'
          },
          {
            orderNo: 11,
            name: '*退休老干账户注入',
            id: '3-1-11',
            url: 'N0301.html#/N030111'
          }
        ]
      },
      {
        orderNo: 2,
        name: '个人账户支出管理',
        id: '3-2',
        children: [
          {
            orderNo: 1,
            name: '个人账户返还管理',
            id: '3-2-1',
            children: [
              {
                orderNo: 1,
                name: '个人账户返还经办',
                id: '3-2-1-1',
                url: 'N0406.html#/N040601?personInsuType=1'
              },
              {
                orderNo: 2,
                name: '个人账户返还审核',
                id: '3-2-1-2',
                url: 'N0406.html#/N040602?nodeNo=mbs-n040601-h02&personInsuType=1'
              },
              {
                orderNo: 3,
                name: '个人账户返还撤销',
                id: '3-2-1-3',
                url: 'N0406.html#/N040603?nodeNo=mbs-n040601-h02&personInsuType=1'
              },
              {
                orderNo: 4,
                name: '个人账户返还打印',
                id: '3-2-1-4',
                url: 'N0406.html#/N040604?personInsuType=1'
              }
            ]
          },
          {
            orderNo: 2,
            name: '个人账户做实管理',
            id: '3-2-2',
            children: [
              {
                orderNo: 1,
                name: '个人账户做实经办',
                id: '3-2-2-1',
                url: 'N0407.html#/N040701?personInsuType=1'
              },
              {
                orderNo: 2,
                name: '个人账户做实审核',
                id: '3-2-2-2',
                url: 'N0407.html#/N040702?nodeNo=mbs-n040701-h02&personInsuType=1'
              },
              {
                orderNo: 3,
                name: '个人账户做实撤销',
                id: '3-2-2-3',
                url: 'N0407.html#/N040703?nodeNo=mbs-n040701-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: 3,
            name: '个人账户清退管理',
            id: '3-2-3',
            children: [
              {
                orderNo: 1,
                name: '个人账户清退经办',
                id: '3-2-3-1',
                url: 'N0408.html#/N040801?personInsuType=1'
              },
              {
                orderNo: 2,
                name: '个人账户清退审核',
                id: '3-2-3-2',
                url: 'N0408.html#/N040802?nodeNo=mbs-n040801-h02&personInsuType=1'
              },
              {
                orderNo: 3,
                name: '个人账户清退撤销',
                id: '3-2-3-3',
                url: 'N0408.html#/N040803?nodeNo=mbs-n040801-h02&personInsuType=1'
              },
              {
                orderNo: 4,
                name: '个人账户清退打印',
                id: '3-2-3-4',
                url: 'N0408.html#/N040804?personInsuType=1'
              }
            ]
          },
          {
            orderNo: 4,
            name: '年终结转',
            id: '3-2-4',
            children: [
              {
                orderNo: 1,
                name: '年终结转',
                id: '3-2-4-1',
                url: 'N0409.html#/N040901'
              },
              {
                orderNo: 2,
                name: '年终计息',
                id: '3-2-4-2',
                url: 'N0409.html#/N040902'
              },
              {
                orderNo: 3,
                name: '计息上账',
                id: '3-2-4-3',
                url: 'N0409.html#/N040903'
              }
            ]
          },
          {
            orderNo: 5,
            name: '账户共济管理',
            id: '3-2-5',
            children: [
              {
                orderNo: 1,
                name: '账户共济授权/解绑经办',
                id: '3-2-5-1',
                url: 'N0410.html#/N041001?personInsuType=1'
              },
              {
                orderNo: 2,
                name: '账户共济审核',
                id: '3-2-5-2',
                url: 'N0410.html#/N041002?nodeNo=mbs-041001-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: 6,
            name: '个人账户下账管理',
            id: '3-2-6',
            children: [
              {
                orderNo: 1,
                name: '个人账户下帐经办',
                id: '3-2-6-1',
                url: 'N0406.html#/N040601_XZ?personInsuType=1'
              },
              {
                orderNo: 2,
                name: '个人账户下帐审核',
                id: '3-2-6-2',
                url: 'N0406.html#/N040602_XZ?nodeNo=mbs-n040601-XZ-h02&personInsuType=1'
              },
              {
                orderNo: 3,
                name: '个人账户下帐撤销',
                id: '3-2-6-3',
                url: 'N0406.html#/N040603_XZ?nodeNo=mbs-n040601-XZ-h02&personInsuType=1'
              },
              {
                orderNo: 4,
                name: '个人账户下帐打印',
                id: '3-2-6-4',
                url: 'N0406.html#/N040606?personInsuType=1'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    orderNo: '99',
    name: '决策树政策规则管理',
    id: '99',
    children: [
      {
        orderNo: '99-6',
        name: '规则指标管理',
        id: '99-6',
        url: 'indiManage.html#/indiManageModule'
      },
      {
        orderNo: '99-1',
        name: '规则基本信息管理',
        id: '99-1',
        url: 'ruleManage.html#/ruleAddModule'
      },
      {
        orderNo: '99-2',
        name: '规则输入指标管理',
        id: '99-2',
        url: 'ruleManage.html#/ruleInputModule'
      },
      {
        orderNo: '99-3',
        name: '规则输出指标管理',
        id: '99-3',
        url: 'ruleManage.html#/ruleOutputModule'
      },
      {
        orderNo: '99-4',
        name: '规则查询指标管理',
        id: '99-4',
        url: 'ruleManage.html#/ruleFilterModule'
      },
      {
        orderNo: '99-5',
        name: '规则分支管理',
        id: '99-5',
        url: 'ruleBranchManage.html#/branchAddModule'
      },
      {
        orderNo: '99-7',
        name: '规则审核管理',
        id: '99-7',
        url: 'ruleManage.html#/ruleAuditModule'
      },
      {
        orderNo: '99-8',
        name: '规则生效信息管理',
        id: '99-8',
        url: 'ruleManage.html#/ruleEfftModule'
      },
      {
        orderNo: '99-9',
        name: '规则测试',
        id: '99-9',
        url: 'ruleTest.html#/ruleTestModule'
      },
      {
        orderNo: '99-10',
        name: '规则导入',
        id: '99-10',
        url: 'ruleManage.html#/ruleImport'
      },
      {
        orderNo: '88',
        name: '功能编号管理',
        id: '88',
        children: [
          {
            orderNo: '88-5',
            name: '功能编号信息管理',
            id: '88-5',
            url: 'maintenanceFunctions.html#/part'
          },
          {
            orderNo: '88-6',
            name: '配置功能规则生效管理',
            id: '88-6',
            url: 'maintenanceFunctions.html#/moduleVersionMaintenance'
          },
          {
            orderNo: '88-7',
            name: '功能规则审核',
            id: '88-7',
            url: 'ruleVerify.html#/part'
          }
        ]
      },
      {
        orderNo: '77',
        name: '功能编排管理',
        id: '77',
        children: [
          {
            orderNo: '77-1',
            name: '规则编排信息管理',
            id: '77-1',
            url: 'maintenanceFunctions.html#/arrangeRuleManagement'
          },
          {
            orderNo: '77-2',
            name: '规则编排信息审核',
            id: '77-2',
            url: 'maintenanceFunctions.html#/arrangeRuleAudit'
          }
        ]
      }
    ]
  },
  {
    orderNo: '1024',
    name: '业务规则管理',
    id: '1024',
    children: [
      {
        orderNo: '100-1-0',
        name: '决策表管理',
        id: '100-1-0',
        url: 'ruleAffirm.html#/affirm'
      },
      {
        orderNo: '100-1-10',
        name: '决策表管理 new',
        id: '100-1-10',
        url: 'dcstabManage.html#/affirm'
      },
      {
        orderNo: '100-1-1',
        name: '目录分解规则',
        id: '100-1-1',
        url: 'ruleAffirm.html#/directoryDecomposition'
      },
      {
        orderNo: '10-1-2',
        name: '规则测试导航',
        id: '10-1-2',
        url: 'ruleAffirm.html#/ruleTest'
      }
    ]
  },
  {
    orderNo: '12',
    name: '医保目录管理',
    id: '12',
    children: [
      {
        orderNo: '12-03',
        name: '医保目录信息管理',
        id: '12-03',
        children: [
          {
            orderNo: '12-03-01',
            name: '医保目录新增经办',
            id: '12-03-01',
            url: 'N1203.html#/N120301'
          },
          {
            orderNo: '12-03-03',
            name: '医保目录新增审核',
            id: '12-03-03',
            url: 'N1203.html#/N120303?nodeNo=mbs-n120301-h02'
          },
          {
            orderNo: '12-03-02',
            name: '医保目录维护经办',
            id: '12-03-02',
            url: 'N1203.html#/N120302'
          },
          {
            orderNo: '12-03-04',
            name: '医保目录维护审核',
            id: '12-03-04',
            url: 'N1203.html#/N120303?nodeNo=mbs-n120302-h02'
          }
        ]
      },
      {
        orderNo: '12-01',
        name: '医保目录限价管理',
        id: '12-01',
        children: [
          {
            orderNo: '12-01-01',
            name: '医保目录限价维护',
            id: '12-01-01',
            url: 'N1201.html#/N120101'
          },
          {
            orderNo: '12-01-02',
            name: '医保目录限价审核',
            id: '12-01-02',
            url: 'N1201.html#/N120102?nodeNo=mbs-n120101-h02'
          }
        ]
      },
      {
        orderNo: '12-02',
        name: '医保目录自付比例管理',
        id: '12-02',
        children: [
          {
            orderNo: '12-02-01',
            name: '医保目录自付比例维护',
            id: '12-02-01',
            url: 'N1202.html#/N120201'
          },
          {
            orderNo: '12-02-02',
            name: '医保目录自付比例审核',
            id: '12-02-02',
            url: 'N1202.html#/N120202?nodeNo=mbs-n120201-h02'
          }
        ]
      },
      {
        orderNo: '12-04',
        name: '医疗药品信息管理',
        id: '12-04',
        children: [
          {
            orderNo: '12-04-01',
            name: '医疗药品限价经办',
            id: '12-04-01',
            url: 'N1204.html#/N120401'
          },
          {
            orderNo: '12-04-02',
            name: '医疗药品限价审核',
            id: '12-04-02',
            url: 'N1204.html#/N120402?nodeNo=mbs-n120401-h02'
          },
          {
            orderNo: '12-04-03',
            name: '医疗药品自付比例经办',
            id: '12-04-03',
            url: 'N1204.html#/N120403'
          },
          {
            orderNo: '12-04-04',
            name: '医疗药品自付比例审核',
            id: '12-04-04',
            url: 'N1204.html#/N120404?nodeNo=mbs-n120403-h02'
          }
        ]
      },
      {
        orderNo: '12-05',
        name: '药品通用目录管理',
        id: '12-05',
        children: [
          {
            orderNo: '12-05-01',
            name: '通用目录新增',
            id: '12-05-01',
            url: 'N1205.html#/N120501'
          },
          {
            orderNo: '12-05-02',
            name: '通用目录新增审核',
            id: '12-05-02',
            url: 'N1205.html#/N120502?nodeNo=mbs-n120501-h02'
          },
          {
            orderNo: '12-05-03',
            name: '通用目录维护',
            id: '12-05-03',
            url: 'N1205.html#/N120503'
          },
          {
            orderNo: '12-05-04',
            name: '通用目录维护审核',
            id: '12-05-04',
            url: 'N1205.html#/N120504?nodeNo=mbs-n120503-h02'
          }
        ]
      },
      {
        orderNo: '12-06',
        name: '门诊慢特病限定目录管理',
        id: '12-06',
        children: [
          {
            orderNo: '12-06-01',
            name: '限定目录登记',
            id: '12-06-01',
            url: 'N1206.html#/N120601'
          },
          {
            orderNo: '12-06-02',
            name: '限定目录登记审核',
            id: '12-06-02',
            url: 'N1206.html#/N120602?nodeNo=mbs-n120601-h02'
          },
          {
            orderNo: '12-06-03',
            name: '限定目录停用',
            id: '12-06-03',
            url: 'N1206.html#/N120603'
          },
          {
            orderNo: '12-06-04',
            name: '限定目录停用审核',
            id: '12-06-04',
            url: 'N1206.html#/N120604?nodeNo=mbs-n120603-h02'
          },
          {
            orderNo: '12-06-05',
            name: '城乡病种限定目录维护',
            id: '12-06-05',
            url: 'N1206.html#/N120605?nodeNo=mbs-n12060501'
          }
        ]
      },
      {
        orderNo: '12-07',
        name: '日间手术开展信息管理',
        id: '12-07',
        children: [
          {
            orderNo: '12-07-01',
            name: '开展信息登记',
            id: '12-07-01',
            url: 'N1207.html#/N120701'
          },
          {
            orderNo: '12-07-02',
            name: '开展信息登记审核',
            id: '12-07-02',
            url: 'N1207.html#/N120702?nodeNo=mbs-n120701-h02'
          },
          {
            orderNo: '12-07-03',
            name: '开展信息停用',
            id: '12-07-03',
            url: 'N1207.html#/N120703'
          },
          {
            orderNo: '12-07-04',
            name: '开展信息停用审核',
            id: '12-07-04',
            url: 'N1207.html#/N120704?nodeNo=mbs-n120703-h02'
          }
        ]
      },
      {
        orderNo: '12-08',
        name: '按病种结算开展信息管理',
        id: '12-08',
        children: [
          {
            orderNo: '12-08-01',
            name: '开展信息登记',
            id: '12-08-01',
            url: 'N1208.html#/N120801'
          },
          {
            orderNo: '12-08-02',
            name: '开展信息登记审核',
            id: '12-08-02',
            url: 'N1208.html#/N120802?nodeNo=mbs-n120801-h02'
          },
          {
            orderNo: '12-08-03',
            name: '开展信息停用',
            id: '12-08-03',
            url: 'N1208.html#/N120803'
          },
          {
            orderNo: '12-08-04',
            name: '开展信息停用审核',
            id: '12-08-04',
            url: 'N1208.html#/N120804?nodeNo=mbs-n120803-h02'
          }
        ]
      },
      {
        orderNo: '5-5',
        name: '门慢门特开展信息管理',
        id: '5-5',
        children: [
          {
            orderNo: '5-5-1',
            name: '开展信息登记',
            id: '5-5-1',
            url: 'N0505.html#/N050501'
          },
          {
            orderNo: '5-5-2',
            name: '开展信息审核',
            id: '5-5-2',
            url: 'N0505.html#/N050502?nodeNo=mbs-n050501-h02'
          },
          {
            orderNo: '5-5-3',
            name: '开展信息变更',
            id: '5-5-3',
            url: 'N0505.html#/N050503'
          },
          {
            orderNo: '5-5-4',
            name: '开展信息变更审核',
            id: '5-5-4',
            url: 'N0505.html#/N050504?nodeNo=mbs-n050503-h02'
          },
          {
            orderNo: '5-5-5',
            name: '开展信息停用',
            id: '5-5-5',
            url: 'N0505.html#/N050505'
          },
          {
            orderNo: '5-5-6',
            name: '开展信息停用审核',
            id: '5-5-6',
            url: 'N0505.html#/N050506?nodeNo=mbs-n050505-h02'
          }
        ]
      },
      {
        orderNo: '12-09',
        name: '医疗与医保目录匹配信息管理',
        id: '12-09',
        children: [
          {
            orderNo: '12-09-01',
            name: '目录匹配维护',
            id: '12-09-01',
            url: 'N1209.html#/N120901'
          },
          {
            orderNo: '12-09-02',
            name: '目录匹配审核',
            id: '12-09-02',
            url: 'N1209.html#/N120902?nodeNo=mbs-n120901-up-h02'
          }
        ]
      },
      {
        orderNo: '12-10',
        name: '医疗目录特殊属性管理',
        id: '12-10',
        children: [
          {
            orderNo: '12-10-01',
            name: '医疗目录特殊属性经办',
            id: '12-10-01',
            url: 'N1210.html#/N121001'
          },
          {
            orderNo: '12-10-02',
            name: '医疗目录特殊属性审核',
            id: '12-10-02',
            url: 'N1210.html#/N121002?nodeNo=mbs-n121001-h02'
          }
        ]
      },
      {
        orderNo: '12-11',
        name: '特殊药品目录管理',
        id: '12-11',
        children: [
          {
            orderNo: '12-11-01',
            name: '特殊药品目录经办',
            id: '12-11-01',
            url: 'N1211.html#/N121101'
          },
          {
            orderNo: '12-11-02',
            name: '特殊药品目录审核',
            id: '12-10-02',
            url: 'N1211.html#/N121102?nodeNo=02'
          }
        ]
      },
      {
        orderNo: '12-15',
        name: '公改医疗机构目录限价管理',
        id: '12-15',
        children: [
          {
            orderNo: '12-15-01',
            name: '公改医疗机构目录限价维护',
            id: '12-15-01',
            url: 'N1215.html#/N121501'
          },
          {
            orderNo: '12-15-02',
            name: '公改医疗机构目录限价审核',
            id: '12-15-02',
            url: 'N1215.html#/N121502?nodeNo=mbs-n121501-h02'
          }
        ]
      },
      {
        orderNo: '12-16',
        name: '自制剂使用机构范围维护',
        id: '12-16',
        children: [
          {
            orderNo: '12-16-01',
            name: '自制剂使用机构范围维护',
            id: '12-16-01',
            url: 'N1216.html#/N121601'
          }
        ]
      },
      {
        orderNo: '12-17',
        name: '特药病种信息维护',
        id: '12-17',
        children: [
          {
            orderNo: '12-17-01',
            name: '特药病种信息维护',
            id: '12-17-01',
            url: 'N1217.html#/N121701'
          },
          {
            orderNo: '12-17-02',
            name: '特药病种信息维护审核',
            id: '12-17-02',
            url: 'N1217.html#/N121702?nodeNo=mbs-n121702-h-02'
          }
        ]
      },
      {
        orderNo: '12-18',
        name: '特药病种用药目录信息维护',
        id: '12-18',
        children: [
          {
            orderNo: '12-18-01',
            name: '特药病种用药目录信息维护',
            id: '12-18-01',
            url: 'N1218.html#/N121801'
          }
        ]
      }
    ]
  },
  {
    orderNo: '5',
    name: '定点协议管理',
    id: '5',
    children: [
      {
        orderNo: '5-6',
        name: '定点医药机构管理',
        id: '5-6',
        children: [
          {
            orderNo: '5-6-1',
            name: '业务属性管理',
            id: '5-6-1',
            children: [
              {
                orderNo: '5-6-1-1',
                name: '业务属性新增经办',
                id: '5-6-1-1',
                url: 'N0501.html#/N050105'
              },
              {
                orderNo: '5-6-1-4',
                name: '业务属性新增审核',
                id: '5-6-1-4',
                url: 'N0503.html#/N050305_addchk?nodeNo=02'
              },
              {
                orderNo: '5-6-1-2',
                name: '本地医药机构维护经办',
                id: '5-6-1-2',
                url: 'N0501.html#/N050105_maintain?local=1'
              },
              {
                orderNo: '5-6-1-3',
                name: '非本地医药机构维护经办',
                id: '5-6-1-3',
                url: 'N0501.html#/N050105_maintain?local=2'
              },
              {
                orderNo: '5-6-1-5',
                name: '医药机构维护审核',
                id: '5-6-1-5',
                url: 'N0503.html#/N050305?nodeNo=02'
              },
              {
                orderNo: 'fixmedinCtrl-1',
                name: '定点医疗机构管控经办',
                id: 'fixmedinCtrl-1',
                url: 'N0402.html#/fixmedinsTrnsOpt'
              },
              {
                orderNo: 'fixmedinCtrl-2',
                name: '定点医疗机构管控审核',
                id: 'fixmedinCtrl-2',
                url: 'N0402.html#/recheckTrns'
              }
            ]
          },
          {
            orderNo: '5-6-2',
            name: '银行账户管理',
            id: '5-6-2',
            children: [
              {
                orderNo: '5-6-2-1',
                name: '银行账户维护经办',
                id: '5-6-2-1',
                url: 'N0501.html#/N050102'
              },
              {
                orderNo: '5-6-2-2',
                name: '银行账户维护审核',
                id: '5-6-2-2',
                url: 'N0503.html#/N050302?nodeNo=02'
              }
            ]
          },
          {
            orderNo: '5-6-3',
            name: '医药服务管理',
            id: '5-6-3',
            children: [
              {
                orderNo: '5-6-3-1',
                name: '医药服务开通/暂停经办',
                id: '5-6-3-1',
                url: 'N0501.html#/N050103'
              },
              {
                orderNo: '5-6-3-2',
                name: '医药服务开通/暂停审核',
                id: '5-6-3-2',
                url: 'N0503.html#/N050303?nodeNo=02'
              }
            ]
          },
          {
            orderNo: '5-6-4',
            name: '附加属性管理',
            id: '5-6-4',
            children: [
              {
                orderNo: '5-6-4-1',
                name: '附加属性信息经办',
                id: '5-6-4-1',
                url: 'N0501.html#/N050116'
              },
              {
                orderNo: '5-6-4-2',
                name: '附加属性信息审核',
                id: '5-6-4-2',
                url: 'N0503.html#/N050316?nodeNo=02'
              }
            ]
          },
          {
            orderNo: '5-6-7',
            name: '服务协议管理',
            id: '5-6-7',
            children: [
              {
                orderNo: '5-6-7-1',
                name: '服务协议经办',
                id: '5-6-7-1',
                url: 'N0501.html#/N050123'
              },
              {
                orderNo: '5-6-7-2',
                name: '服务协议审核',
                id: '5-6-7-2',
                url: 'N0501.html#/N050124?nodeNo=01'
              }
            ]
          },
          {
            orderNo: '5-6-5',
            name: '费用结算经办机构管理',
            id: '5-6-5',
            children: [
              {
                orderNo: '5-6-5-1',
                name: '经办机构登记/维护经办',
                id: '5-6-5-1',
                url: 'N0501.html#/N050119'
              },
              {
                orderNo: '5-6-5-2',
                name: '经办机构登记/维护审核',
                id: '5-6-5-2',
                url: 'N0503.html#/N050319?nodeNo=02'
              }
            ]
          },
          {
            orderNo: '5-6-6',
            name: '医疗集团关系管理',
            id: '5-6-6',
            children: [
              {
                orderNo: '5-6-6-1',
                name: '医疗集团关系管理经办',
                id: '5-6-6-1',
                url: 'N0501.html#/N050120'
              },
              {
                orderNo: '5-6-6-2',
                name: '医疗集团关系管理审核',
                id: '5-6-6-2',
                url: 'N0503.html#/N050320?nodeNo=02'
              }
            ]
          },
          {
            orderNo: '5-6-8',
            name: '服务协议模板管理',
            id: '5-6-8',
            children: [
              {
                orderNo: '5-6-8-3',
                name: '服务协议模板管理',
                id: '5-6-8-3',
                url: 'N0501.html#/N050125'
              },
              {
                orderNo: '5-6-8-4',
                name: '服务协议模板审核',
                id: '5-6-8-4',
                url: 'N0501.html#/N050126?nodeNo=01'
              }
            ]
          }
        ]
      },
      {
        orderNo: '5-7',
        name: '医保医师服务管理',
        id: '5-7',
        children: [
          {
            orderNo: '5-7-01',
            name: '医师信息管理',
            id: '5-7-01',
            url: 'N0501.html#/N050107'
          },
          {
            orderNo: '5-7-02',
            name: '医师信息管理审核',
            id: '5-7-02',
            url: 'N0503.html#/N050307?nodeNo=02'
          }
        ]
      },
      {
        orderNo: '5-8',
        name: '定点医药机构病种管理',
        id: '5-8',
        children: [
          {
            orderNo: '5-8-01',
            name: '治疗病种新增',
            id: '5-8-01',
            url: 'N0501.html#/N050117'
          },
          {
            orderNo: '5-8-02',
            name: '治疗病种暂停/启用',
            id: '5-8-02',
            url: 'N0501.html#/N050118'
          },
          {
            orderNo: '5-8-03',
            name: '治疗病种经办审核',
            id: '5-8-03',
            url: 'N0503.html#/N050317?nodeNo=02'
          },
          {
            orderNo: '5-8-04',
            name: '认定病种新增',
            id: '5-8-04',
            url: 'N0501.html#/N050121'
          },
          {
            orderNo: '5-8-05',
            name: '认定病种暂停/停用',
            id: '5-8-05',
            url: 'N0501.html#/N050122'
          },
          {
            orderNo: '5-8-06',
            name: '认定病种经办审核',
            id: '5-8-06',
            url: 'N0503.html#/N050322?nodeNo=02'
          }
        ]
      },
      {
        orderNo: '5-27',
        name: '科室服务管理',
        id: '5-27',
        children: [
          {
            orderNo: '5-27-01',
            name: '定点医疗机构科室管理',
            id: '5-27-01',
            url: 'N0501.html#/N050127'
          },
          {
            orderNo: '5-27-02',
            name: '定点医疗机构科室审核',
            id: '5-27-02',
            url: 'N0503.html#/N050323'
          },
          {
            orderNo: '5-27-03',
            name: '科室暂停/终止服务',
            id: '5-27-03',
            url: 'N0501.html#/N050128'
          },
          {
            orderNo: '5-27-04',
            name: '科室暂停/终止服务审核',
            id: '5-27-04',
            url: 'N0503.html#/N050324'
          }
        ]
      },
      {
        orderNo: '5-28',
        name: '大学生首诊机构管理',
        id: '5-28',
        url: 'N2302.html#/N230211'
      }
    ]
  },
  {
    orderNo: '6',
    name: '审核监管处罚(城职)',
    id: '6',
    children: [
      {
        orderNo: '6-2',
        name: '白名单管理',
        id: '6-2',
        children: [
          {
            orderNo: '6-2-1',
            name: '白名单登记',
            id: '6-2-1',
            url: 'N0602.html#/N060201?bizEvtType=mbs-n060201-h&nodeNo=mbs-n060201-h02&personInsuType=1&empInsuType=1'
          },
          {
            orderNo: '6-2-2',
            name: '白名单维护',
            id: '6-2-2',
            url: 'N0602.html#/N060202?bizEvtType=mbs-n060202-h&nodeNo=mbs-n060202-h02&personInsuType=1&empInsuType=1'
          },
          {
            orderNo: '6-2-3',
            name: '白名单撤销',
            id: '6-2-3',
            url: 'N0602.html#/N060203?bizEvtType=mbs-n060203-h&nodeNo=mbs-n060203-h02&personInsuType=1&empInsuType=1'
          },
          {
            orderNo: '6-2-4',
            name: '白名单登记审核',
            id: '6-2-4',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060201-h&nodeNo=mbs-n060201-h02&personInsuType=1&empInsuType=1&menuCode=N060204-h'
          },
          {
            orderNo: '6-2-5',
            name: '白名单维护审核',
            id: '6-2-5',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060202-h&nodeNo=mbs-n060202-h02&personInsuType=1&empInsuType=1&menuCode=N060204-bg-h'
          },
          {
            orderNo: '6-2-6',
            name: '白名单撤销审核',
            id: '6-2-6',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060203-h&nodeNo=mbs-n060203-h02&personInsuType=1&empInsuType=1&menuCode=N060204-cx-h'
          }
        ]
      },
      {
        orderNo: '6-3',
        name: '个人待遇管理',
        id: '6-3',
        children: [
          {
            orderNo: '6-3-1',
            name: '个人待遇暂停',
            id: '6-3-1',
            url: 'N0603.html#/N060301?bizEvtType=mbs-n060301-h&nodeNo=mbs-n060301-h02&personInsuType=1'
          },
          {
            orderNo: '6-3-2',
            name: '个人待遇暂停期调整',
            id: '6-3-2',
            url: 'N0603.html#/N060302?bizEvtType=mbs-n060302-h&nodeNo=mbs-n060302-h02&personInsuType=1'
          },
          {
            orderNo: '6-4-4',
            name: '个人待遇暂停恢复',
            id: '6-4-1',
            url: 'N0604.html#/N060401?bizEvtType=mbs-n060401-h&nodeNo=mbs-n060401-h02&personInsuType=1'
          },
          {
            orderNo: '6-4-2',
            name: '个人待遇暂停审核',
            id: '6-4-2',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060301-h&nodeNo=mbs-n060301-h02&personInsuType=1&menuCode=N060402-h'
          },
          {
            orderNo: '6-4-3',
            name: '个人待遇暂停期调整审核',
            id: '6-4-3',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060302-h&nodeNo=mbs-n060302-h02&personInsuType=1&menuCode=N060402-hf-h'
          },
          {
            orderNo: '6-4-4',
            name: '个人待遇暂停恢复审核',
            id: '6-4-4',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060401-h&nodeNo=mbs-n060401-h02&personInsuType=1&menuCode=N060402-cx-h'
          }
        ]
      },
      {
        orderNo: '6-5',
        name: '单位待遇管理',
        id: '6-5',
        children: [
          {
            orderNo: '6-5-1',
            name: '单位待遇暂停',
            id: '6-5-1',
            url: 'N0605.html#/N060501?bizEvtType=mbs-n060501-h&nodeNo=mbs-n060501-h02&empInsuType=1'
          },
          {
            orderNo: '6-5-2',
            name: '单位待遇暂停恢复',
            id: '6-5-2',
            url: 'N0605.html#/N060502?bizEvtType=mbs-n060502-h&nodeNo=mbs-n060502-h02&empInsuType=1'
          },
          {
            orderNo: '6-6-1',
            name: '单位待遇暂停撤销',
            id: '6-6-1',
            url: 'N0606.html#/N060601?bizEvtType=mbs-n060601-h&nodeNo=mbs-n060601-h02&empInsuType=1'
          },
          {
            orderNo: '6-6-2',
            name: '单位待遇暂停审核',
            id: '6-6-2',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060501-h&nodeNo=mbs-n060501-h02&empInsuType=1&menuCode=N060602-h'
          },
          {
            orderNo: '6-6-3',
            name: '单位待遇暂停恢复审核',
            id: '6-6-3',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060502-h&nodeNo=mbs-n060502-h02&empInsuType=1&menuCode=N060602-hf-h'
          },
          {
            orderNo: '6-6-4',
            name: '单位待遇暂停撤销审核',
            id: '6-6-4',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060601-h&nodeNo=mbs-n060601-h02&empInsuType=1&menuCode=N060602-cx-h'
          }
        ]
      }
    ]
  },
  {
    orderNo: '10',
    name: '审核监管处罚(城乡)',
    id: '10',
    children: [
      {
        orderNo: '10-2',
        name: '白名单管理',
        id: '10-2',
        children: [
          {
            orderNo: '10-2-1',
            name: '白名单登记',
            id: '10-2-1',
            url: 'N0602.html#/N060201?bizEvtType=mbs-n060201-cj-h&nodeNo=mbs-n060201-cj-h02&personInsuType=2&empInsuType=2'
          },
          {
            orderNo: '10-2-2',
            name: '白名单维护',
            id: '10-2-2',
            url: 'N0602.html#/N060202?bizEvtType=mbs-n060202-cj-h&nodeNo=mbs-n060202-cj-h02&personInsuType=2&empInsuType=2'
          },
          {
            orderNo: '10-2-3',
            name: '白名单撤销',
            id: '10-2-3',
            url: 'N0602.html#/N060203?bizEvtType=mbs-n060203-cj-h&nodeNo=mbs-n060203-cj-h02&personInsuType=2&empInsuType=2'
          },
          {
            orderNo: '10-2-4',
            name: '白名单登记审核',
            id: '10-2-4',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060201-cj-h&nodeNo=mbs-n060201-cj-h02&personInsuType=2&empInsuType=2&menuCode=mbs-N060204-cj-h'
          },
          {
            orderNo: '10-2-5',
            name: '白名单维护审核',
            id: '10-2-5',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060202-cj-h&nodeNo=mbs-n060202-cj-h02&personInsuType=2&empInsuType=2&menuCode=mbs-N060204-bg-h'
          },
          {
            orderNo: '10-2-6',
            name: '白名单撤销审核',
            id: '10-2-6',
            url: 'N0602.html#/N060204?bizEvtType=mbs-n060203-cj-h&nodeNo=mbs-n060203-cj-h02&personInsuType=2&empInsuType=2&menuCode=mbs-N060204-cx-h'
          }
        ]
      },
      {
        orderNo: '10-3',
        name: '个人待遇管理',
        id: '10-3',
        children: [
          {
            orderNo: '10-3-1',
            name: '个人待遇暂停',
            id: '10-3-1',
            url: 'N0603.html#/N060301?bizEvtType=mbs-n060301-cj-h&nodeNo=mbs-n060301-cj-h02&personInsuType=2'
          },
          {
            orderNo: '10-3-2',
            name: '个人待遇暂停期调整',
            id: '10-3-2',
            url: 'N0603.html#/N060302?bizEvtType=mbs-n060302-cj-h&nodeNo=mbs-n060302-cj-h02&personInsuType=2'
          },
          {
            orderNo: '10-4-4',
            name: '个人待遇暂停恢复',
            id: '10-4-1',
            url: 'N0604.html#/N060401?bizEvtType=mbs-n060401-cj-h&nodeNo=mbs-n060401-cj-h02&personInsuType=2'
          },
          {
            orderNo: '10-4-2',
            name: '个人待遇暂停审核',
            id: '10-4-2',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060301-cj-h&nodeNo=mbs-n060301-cj-h02&personInsuType=2&menuCode=mbs-N060402-h'
          },
          {
            orderNo: '10-4-3',
            name: '个人待遇暂停期调整审核',
            id: '10-4-3',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060302-cj-h&nodeNo=mbs-n060302-cj-h02&personInsuType=2&menuCode=mbs-N060402-hf-h'
          },
          {
            orderNo: '10-4-4',
            name: '个人待遇暂停恢复审核',
            id: '10-4-4',
            url: 'N0604.html#/N060402?bizEvtType=mbs-n060401-cj-h&nodeNo=mbs-n060401-cj-h02&personInsuType=2&menuCode=mbs-N060402-cx-h'
          }
        ]
      },
      {
        orderNo: '10-5',
        name: '单位待遇管理',
        id: '10-5',
        children: [
          {
            orderNo: '10-5-1',
            name: '单位待遇暂停',
            id: '10-5-1',
            url: 'N0605.html#/N060501?bizEvtType=mbs-n060501-cj-h&nodeNo=mbs-n060501-cj-h02&empInsuType=2'
          },
          {
            orderNo: '10-5-2',
            name: '单位待遇暂停恢复',
            id: '10-5-2',
            url: 'N0605.html#/N060502?bizEvtType=mbs-n060502-cj-h&nodeNo=mbs-n060502-cj-h02&empInsuType=2'
          },
          {
            orderNo: '10-6-1',
            name: '单位待遇暂停撤销',
            id: '10-6-1',
            url: 'N0606.html#/N060601?bizEvtType=mbs-n060601-cj-h&nodeNo=mbs-n060601-cj-h02&empInsuType=2'
          },
          {
            orderNo: '10-6-2',
            name: '单位待遇暂停审核',
            id: '10-6-2',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060501-cj-h&nodeNo=mbs-n060501-cj-h02&empInsuType=2&menuCode=mbs-N060602-h'
          },
          {
            orderNo: '10-6-3',
            name: '单位待遇暂停恢复审核',
            id: '10-6-3',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060502-cj-h&nodeNo=mbs-n060502-cj-h02&empInsuType=2&menuCode=mbs-N060602-hf-h'
          },
          {
            orderNo: '10-6-4',
            name: '单位待遇暂停撤销审核',
            id: '10-6-4',
            url: 'N0606.html#/N060602?bizEvtType=mbs-n060601-cj-h&nodeNo=mbs-n060601-cj-h02&empInsuType=2&menuCode=mbs-N060602-cx-h'
          }
        ]
      }
    ]
  },
  {
    orderNo: '17',
    name: '医疗救助管理（城乡）',
    id: '17',
    children: [
      {
        orderNo: '16-1',
        name: '医疗救助人员管理',
        id: '16-1',
        children: [
          {
            orderNo: '16-1-1',
            name: '医疗救助人员登记',
            id: '16-1-1',
            url: 'N1001.html#/N100101?personInsuType=2'
          },
          {
            orderNo: '16-1-2',
            name: '救助人员信息审核',
            id: '16-1-2',
            url: 'N1001.html#/N100102?personInsuType=2'
          },
          {
            orderNo: '16-1-3',
            name: '救助人员信息公示',
            id: '16-1-3',
            url: 'N1001.html#/N100103?personInsuType=2'
          },
          {
            orderNo: '16-1-8',
            name: '公示信息审核',
            id: '16-1-8',
            url: 'N1001.html#/N100108?personInsuType=2'
          },
          {
            orderNo: '16-1-6',
            name: '公示结果审核',
            id: '16-1-6',
            url: 'N1001.html#/N100106?personInsuType=2'
          },
          {
            orderNo: '16-1-7',
            name: '医疗救助公示信息打印',
            id: '16-1-7',
            url: 'N1001.html#/N100107?personInsuType=2'
          },
          {
            orderNo: '16-1-4',
            name: '医疗救助公示信息举报',
            id: '16-1-4',
            url: 'N1001.html#/N100104?personInsuType=2'
          },
          {
            orderNo: '16-1-5',
            name: '医疗救助举报信息审核',
            id: '16-1-5',
            url: 'N1001.html#/N100105?personInsuType=2'
          },
          {
            orderNo: '16-1-12',
            name: '医疗救助撤销',
            id: '16-1-12',
            url: 'N1001.html#/N100112?personInsuType=2'
          },
          {
            orderNo: '16-1-13',
            name: '临时医疗救助结算审核',
            id: '16-1-13',
            url: 'N1001.html#/N100113?nodeNo=mbs-n100112-h02&personInsuType=2'
          },
          {
            orderNo: '16-1-14',
            name: '临时医疗救助结算撤销',
            id: '16-1-14',
            url: 'N1001.html#/N100114?personInsuType=2'
          },
          {
            orderNo: '16-1-15',
            name: '临时医疗救助结算撤销审核',
            id: '16-1-15',
            url: 'N1001.html#/N100113?nodeNo=mbs-n100113-h02&personInsuType=2'
          }
        ]
      },
      {
        orderNo: '17-2',
        name: '医疗救助报销管理',
        id: '17-2',
        children: [
          {
            orderNo: '17-2-1',
            name: '医疗救助登记',
            id: '17-2-1',
            url: 'N1002.html#/N100201?nodeNo=mbs-n100201-h01'
          },
          {
            orderNo: '17-2-2',
            name: '医疗救助结算',
            id: '17-2-2',
            url: 'N1002.html#/N100202?nodeNo=mbs-n100201-h02'
          },
          {
            orderNo: '17-2-3',
            name: '医疗救助审核',
            id: '17-2-3',
            url: 'N1002.html#/N100203?nodeNo=mbs-n100201-h03'
          },
          {
            orderNo: '17-2-4',
            name: '医疗救助结算单打印',
            id: '17-2-4',
            url: 'N1002.html#/N100204'
          },
          {
            orderNo: '17-2-5',
            name: '医疗救助撤销',
            id: '17-2-5',
            url: 'N1002.html#/N100205'
          },
          {
            orderNo: '17-2-6',
            name: '医疗救助结算撤销',
            id: '17-2-6',
            url: 'N1002.html#/N100206?nodeNo=mbs-n100201-h03'
          },
          {
            orderNo: '17-2-7',
            name: '医疗救助审核撤销',
            id: '17-2-7',
            url: 'N1002.html#/N100207'
          }
        ]
      },
      {
        orderNo: '17-0',
        name: '统计报表',
        id: '17-0',
        children: [
          {
            orderNo: '17-0-1',
            name: '医疗救助人员统计查询',
            id: '17-0-1',
            url: 'N1003.html#/N100301'
          }
        ]
      },
      {
        orderNo: '17-3',
        name: '医疗救助对象管理',
        id: '17-3',
        children: [
          {
            orderNo: '17-3-0',
            name: '医疗救助对象查询',
            id: '17-3-0',
            url: 'N1004.html#/N100400'
          },
          {
            orderNo: '17-3-1',
            name: '医疗救助对象新增',
            id: '17-3-1',
            url: 'N1004.html#/N100401'
          },
          {
            orderNo: '17-3-2',
            name: '医疗救助对象维护',
            id: '17-3-2',
            url: 'N1004.html#/N100402'
          },
          {
            orderNo: '17-3-3',
            name: '医疗救助对象审核',
            id: '17-3-3',
            url: 'N1004.html#/N100403?nodeNo1=mbs-n100401-h02&nodeNo2=mbs-n100402-h02'
          }
        ]
      },
      {
        orderNo: '17-4',
        name: '医疗救助特殊报销',
        id: '17-4',
        children: [
          {
            orderNo: '17-4-1',
            name: '资助参保医疗救助',
            id: '17-4-1',
            url: 'N2401.html#/N240104?personInsuType=2'
          }
        ]
      }
    ]
  },
  {
    orderNo: '1N23-05-04',
    name: '医疗救助管理',
    id: '1N23-05-04',
    children: [
      {
        orderNo: '2N23-05-04',
        name: '医疗救助特殊报销',
        id: '2N23-05-04',
        children: [
          {
            orderNo: 'N23-05-04',
            name: '门诊定额救助',
            id: 'N23-05-04',
            url: 'N2305.html#/N230504'
          }
        ]
      }
    ]
  },
  {
    orderNo: 3,
    name: '个人待遇管理(城职)',
    id: '4',
    children: [
      {
        orderNo: 1,
        name: '个人待遇结算管理',
        id: '4-1',
        children: [
          {
            orderNo: 1,
            name: '个人零星报销管理',
            id: '4-0',
            children: [
              {
                orderNo: 1,
                name: '零星报销登记',
                id: '4-0-1',
                url: 'N0405.html#/N04050101?personInsuType=1'
              },
              {
                orderNo: 3,
                name: '登记回退',
                id: '4-0-3',
                url: 'N0405.html#/N04050103?nodeNo=mbs-n040501-h03&personInsuType=1'
              },
              {
                orderNo: 6,
                name: '明细录入',
                id: '4-0-6',
                url: 'N0405.html#/N04050106?nodeNo=mbs-n040501-h03&personInsuType=1'
              },
              {
                orderNo: 7,
                name: '明细审核',
                id: '4-0-7',
                url: 'N0405.html#/N04050107?nodeNo=mbs-n040501-h04&personInsuType=1'
              },
              {
                orderNo: 8,
                name: '明细回退',
                id: '4-0-8',
                url: 'N0405.html#/N04050108?personInsuType=1'
              },
              {
                orderNo: 9,
                name: '住院结算',
                id: '4-0-9',
                url: 'N0405.html#/N04050401?nodeNo=mbs-n040501-h05&personInsuType=1'
              },
              {
                orderNo: 10,
                name: '门诊结算',
                id: '4-0-10',
                url: 'N0405.html#/N04050402?nodeNo=mbs-n040501-h06&personInsuType=1'
              },
              {
                orderNo: 17,
                name: '结算回退',
                id: '4-0-17',
                url: 'N0405.html#/N04050409?personInsuType=1'
              },
              {
                orderNo: 11,
                name: '结算审核',
                id: '4-0-11',
                url: 'N0405.html#/N04050403?nodeNo=mbs-n040501-h07&personInsuType=1'
              },
              {
                orderNo: 12,
                name: '审核回退',
                id: '4-0-12',
                url: 'N0405.html#/N04050404?nodeNo=mbs-n040501-h07&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '个人零星报销单据打印',
                id: '4-1-9',
                url: 'N0405.html#/N040509?personInsuType=1'
              },
              {
                orderNo: 18,
                name: '结算拨付失败重发',
                id: '4-0-18',
                url: 'N0405.html#/N04050410?nodeNo=mbs-n04050410&personInsuType=1'
              },
              {
                orderNo: 19,
                name: '结算拨付失败重发撤销',
                id: '4-0-19',
                url: 'N0405.html#/N04050411?nodeNo=mbs-n04050411&personInsuType=1'
              }
            ]
          },
          {
            orderNo: 1,
            name: '零星二次补差报销管理',
            id: '4-1-5',
            url: 'N0405.html#/N040505',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '4-1-5-1',
                url: 'N0405.html#/N040505?nodeNo=mbs-n04050501-h01&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '4-1-5-2',
                url: 'N0405.html#/N04050502?nodeNo=mbs-n04050501-h02&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '费用明细调整',
                id: '4-1-5-3',
                url: 'N0405.html#/N04050503?nodeNo=mbs-n04050501-h02&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '费用明细调整回退',
                id: '4-1-5-4',
                url: 'N0405.html#/N04050504?nodeNo=mbs-n04050501-h03&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '费用结算',
                id: '4-1-5-5',
                url: 'N0405.html#/N04050505?nodeNo=mbs-n04050501-h03&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '费用结算回退',
                id: '4-1-5-6',
                url: 'N0405.html#/N04050506?nodeNo=mbs-n04050501-h04&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '4-1-5-7',
                url: 'N0405.html#/N04050507?nodeNo=mbs-n04050501-h04&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '4-1-5-8',
                url: 'N0405.html#/N04050508?personInsuType=1'
              }
            ]
          },
          {
            orderNo: 1,
            name: '年度内二次报销管理',
            id: '4-1-6',
            url: 'N0405.html#/N040506',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '4-1-6-1',
                url: 'N0405.html#/N040506?nodeNo=mbs-n04050601-h01&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '4-1-6-2',
                url: 'N0405.html#/N04050602?nodeNo=mbs-n04050601-h02&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '结算',
                id: '4-1-6-3',
                url: 'N0405.html#/N04050603?nodeNo=mbs-n04050601-h02&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '*结算回退',
                id: '4-1-6-6',
                url: 'N0405.html#/N04050606?nodeNo=mbs-n04050601-h03&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '4-1-6-4',
                url: 'N0405.html#/N04050604?nodeNo=mbs-n04050601-h03&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '4-1-6-5',
                url: 'N0405.html#/N04050605?personInsuType=1'
              },
              {
                orderNo: 1,
                name: '报销结果查询',
                id: '4-1-6-7',
                url: 'N0405.html#/N04050607?personInsuType=1'
              }
            ]
          },
          {
            orderNo: 1,
            name: '灵活报销管理',
            id: '4-1-7',
            url: 'N0405.html#/N040507',
            children: [
              {
                orderNo: 1,
                name: '报销结果录入',
                id: '4-1-7-1',
                url: 'N0405.html#/N040507?nodeNo=mbs-N04050701-h01&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '报销结果录入回退',
                id: '4-1-7-2',
                url: 'N0405.html#/N04050702?personInsuType=1'
              },
              {
                orderNo: 1,
                name: '报销结果审核',
                id: '4-1-7-3',
                url: 'N0405.html#/N04050703?nodeNo=mbs-N04050701-h02&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '报销结果审核回退',
                id: '4-1-7-4',
                url: 'N0405.html#/N04050704?personInsuType=1'
              },
              {
                orderNo: 1,
                name: '医疗救助报销录入',
                id: '11-1-7-5',
                url: 'N0405.html#/N04050705?nodeNo=mbs-N04050705-g01&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '医疗救助无参保审核',
                id: '11-1-7-6',
                url: 'N0405.html#/N04050706?nodeNo=mbs-N04050705-g02&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '医疗救助无参保审核回退',
                id: '11-1-7-7',
                url: 'N0405.html#/N04050707?personInsuType=2'
              }
            ]
          },
          {
            orderNo: 1,
            name: '灵活报销管理(机构、单位)',
            id: '4-1-15',
            url: 'N0405.html#/N040515',
            children: [
              {
                orderNo: 1,
                name: '报销结果录入',
                id: '4-1-15-1',
                url: 'N0405.html#/N040515?nodeNo=mbs-N04051501-h01&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '报销结果录入回退',
                id: '4-1-15-2',
                url: 'N0405.html#/N04051502?personInsuType=1'
              },
              {
                orderNo: 1,
                name: '报销结果审核',
                id: '4-1-15-3',
                url: 'N0405.html#/N04051503?nodeNo=mbs-N04051501-h02&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '报销结果审核回退',
                id: '4-1-15-4',
                url: 'N0405.html#/N04051504?personInsuType=1'
              }
            ]
          },
          {
            orderNo: 1,
            name: '特殊人群奖励金拨付管理',
            id: '4-1-8',
            url: 'N0405.html#/N040508',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '4-1-8-1',
                url: 'N0405.html#/N040508?nodeNo=mbs-n040508-h01&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '4-1-8-2',
                url: 'N0405.html#/N04050802?personInsuType=1'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '4-1-8-3',
                url: 'N0405.html#/N04050803?nodeNo=mbs-n040508-h02&personInsuType=1'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '4-1-8-4',
                url: 'N0405.html#/N04050804?personInsuType=1'
              }
            ]
          }
        ]
      },
      {
        orderNo: '4-2',
        name: '人员就医登记管理',
        id: '4-2',
        children: [
          {
            orderNo: '4-2-01',
            name: '门慢门特登记',
            id: '4-2-01',
            children: [
              {
                orderNo: '4-2-01_01',
                name: '门慢门特登记',
                id: '4-2-01_01',
                url: 'N0402.html#/N040201?personInsuType=1'
              },
              {
                orderNo: '4-2-01_02',
                name: '门慢门特登记审核',
                id: '4-2-1_02',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n04020101-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-01_03',
                name: '门慢门特撤销',
                id: '4-2-1_03',
                url: 'N0402.html#/N040201_02?personInsuType=1'
              },
              {
                orderNo: '4-2-01_04',
                name: '门慢门特撤销审核',
                id: '4-2-01_04',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n04020103-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-01_05',
                name: '门慢门特维护',
                id: '4-2-01_05',
                url: 'N0402.html#/N040201_03?personInsuType=1'
              },
              {
                orderNo: '4-2-01_06',
                name: '门慢门特维护审核',
                id: '4-2-01_06',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n04020102-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-01_07',
                name: '病种特权维护经办',
                id: '4-2-01_07',
                url: 'N0402.html#/N040201_04?personInsuType=1'
              },
              {
                orderNo: '4-2-01_08',
                name: '门特治疗机构变更',
                id: '4-2-01_08',
                url: 'N0402.html#/N040201_05?personInsuType=1'
              },
              {
                orderNo: '4-2-01_09',
                name: '门特治疗机构变更撤销',
                id: '4-2-01_09',
                url: 'N0402.html#/N040201_06?personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-23',
            name: '门慢门特年审',
            id: '4-2-23',
            children: [
              {
                orderNo: '4-2-23_04',
                name: '门慢门特年审',
                id: '4-2-23_04',
                url: 'N0402.html#/N040230?personInsuType=1'
              },
              {
                orderNo: '4-2-23_05',
                name: '门慢门特年审审核',
                id: '4-2-23_05',
                url: 'N0402.html#/N040232?nodeNo=mbs-n040230-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-16',
            name: '门慢门特用药范围维护',
            id: '4-2-16',
            children: [
              {
                orderNo: '4-2-16',
                name: '门慢门特用药范围维护',
                id: '4-2-16',
                url: 'N0402.html#/N040216?personInsuType=1'
              },
              {
                orderNo: '4-2-16_01',
                name: '门慢门特用药范围维护审核',
                id: '4-2-16_01',
                url: 'N0402.html#/N040216_01?nodeNo=mbs-n040216-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-16_02',
                name: '门慢门特用药范围维护撤销',
                id: '4-2-16_02',
                url: 'N0402.html#/N040216_02?personInsuType=1'
              },
              {
                orderNo: '4-2-16_03',
                name: '门慢门特用药范围维护撤销审核',
                id: '4-2-16_03',
                url: 'N0402.html#/N040216_01?nodeNo=mbs-n040216-cx-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-9',
            name: '异地安置登记',
            id: '4-2-9',
            children: [
              {
                orderNo: '4-2-09',
                name: '异地安置登记',
                id: '4-2-09',
                url: 'N0402.html#/N040209?personInsuType=1'
              },
              {
                orderNo: '4-2-09_01',
                name: '异地安置登记审核',
                id: '4-2-09_01',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-n040209-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-09_02',
                name: '异地安置撤销',
                id: '4-2-09_02',
                url: 'N0402.html#/N040209_02?personInsuType=1'
              },
              {
                orderNo: '4-2-09_02_01',
                name: '异地安置撤销审核',
                id: '4-2-09_02_01',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-n040209-cx-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-09_03',
                name: '异地安置变更',
                id: '4-2-09_03',
                url: 'N0402.html#/N040209_03?personInsuType=1'
              },
              {
                orderNo: '4-2-09_03_01',
                name: '异地安置变更审核',
                id: '4-2-09_04',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-N040209_03-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-09_04_01',
                name: '异地备案信息首次上传',
                id: '4-2-09_05',
                url: 'N0402.html#/N040209_04'
              }
            ]
          },
          {
            orderNo: '4-2-14',
            name: '生育备案',
            id: '4-2-14',
            children: [
              {
                orderNo: '4-2-14-1',
                name: '生育备案登记',
                id: '4-2-14-1',
                url: 'N0402.html#/N040214?personInsuType=1'
              },
              {
                orderNo: '4-2-14_01',
                name: '生育备案登记审核',
                id: '4-2-14_01',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n040214-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-14_03',
                name: '生育备案信息撤销',
                id: '4-2-14_03',
                url: 'N0402.html#/N040214_02?personInsuType=1'
              },
              {
                orderNo: '4-2-14_04',
                name: '生育备案撤销审核',
                id: '4-2-14_04',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n04021403-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-14_06',
                name: '生育备案信息维护',
                id: '4-2-14_06',
                url: 'N0402.html#/N040214_03?personInsuType=1'
              },
              {
                orderNo: '4-2-14_07',
                name: '生育备案维护审核',
                id: '4-2-14_07',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-N040214_02-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-22',
            name: '无医保凭证结算备案登记',
            id: '4-2-22',
            children: [
              {
                orderNo: '4-2-22_01',
                name: '无医保凭证结算备案登记',
                id: '4-2-22_01',
                url: 'N0402.html#/N040223?personInsuType=1'
              },
              {
                orderNo: '4-2-22_02',
                name: '无医保凭证结算备案登记审核',
                id: '4-2-22_02',
                url: 'N0402.html#/N040223_01?nodeNo=mbs-N040223-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-22_03',
                name: '无医保凭证结算备案撤销',
                id: '4-2-22_03',
                url: 'N0402.html#/N040223_02?personInsuType=1'
              },
              {
                orderNo: '4-2-22_04',
                name: '无医保凭证结算备案撤销审核',
                id: '4-2-22_04',
                url: 'N0402.html#/N040223_01?nodeNo=mbs-n04022302-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-02',
            name: '按病种结算登记',
            id: '4-2-2',
            children: [
              {
                orderNo: '4-2-02',
                name: '按病种结算登记',
                id: '4-2-2',
                url: 'N0402.html#/N040202?personInsuType=1'
              },
              {
                orderNo: '4-2-02-01',
                name: '按病种结算审核',
                id: '4-2-2-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n040202-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-02_02',
                name: '按病种结算撤销',
                id: '4-2-2-02',
                url: 'N0402.html#/N040202_02?personInsuType=1'
              },
              {
                orderNo: '4-2-02-02-01',
                name: '按病种结算撤销审核',
                id: '4-2-2-02-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n04020202-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-02-03',
                name: '按病种结算维护',
                id: '4-2-2-03',
                url: 'N0402.html#/N040202_03?personInsuType=1'
              },
              {
                orderNo: '4-2-02-03-01',
                name: '按病种结算维护审核',
                id: '4-2-2-03-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n040202_03-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-03',
            name: '意外伤害登记',
            id: '4-2-03',
            children: [
              {
                orderNo: '4-2-03_01',
                name: '意外伤害登记',
                id: '4-2-03_01',
                url: 'N0402.html#/N040203?personInsuType=1'
              },
              {
                orderNo: '4-2-03_02',
                name: '意外伤害登记审核',
                id: '4-2-03_02',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n040203-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-03_03',
                name: '意外伤害撤销',
                id: '4-2-03_03',
                url: 'N0402.html#/N040203_02?personInsuType=1'
              },
              {
                orderNo: '4-2-03_04',
                name: '意外伤害撤销审核',
                id: '4-2-03_04',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n040203_02-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-03_05',
                name: '意外伤害变更',
                id: '4-2-03_05',
                url: 'N0402.html#/N040203_03?personInsuType=1'
              },
              {
                orderNo: '4-2-03_06',
                name: '意外伤害变更审核',
                id: '4-2-03_06',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n040203_03-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-04',
            name: '就医定点医疗机构登记',
            id: '4-2-04',
            children: [
              {
                orderNo: '4-2-04_01',
                name: '就医定点医疗机构登记',
                id: '4-2-04_01',
                url: 'N0402.html#/N040204?personInsuType=1'
              },
              {
                orderNo: '4-2-04_02',
                name: '就医定点医疗机构审核',
                id: '4-2-04_02',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n040204-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-04_02_01',
                name: '就医定点医疗机构批量审核',
                id: '4-2-04_02_01',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n04020404-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-04_03',
                name: '就医定点医疗机构撤销',
                id: '4-2-04_03',
                url: 'N0402.html#/N040204_02?personInsuType=1'
              },
              {
                orderNo: '4-2-04_04',
                name: '就医定点医疗机构撤销审核',
                id: '4-2-04_04',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n040204_02-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-04_05',
                name: '就医定点医疗机构停用',
                id: '4-2-04_05',
                url: 'N0402.html#/N040204_03?personInsuType=1'
              },
              {
                orderNo: '4-2-04_06',
                name: '就医定点医疗机构停用审核',
                id: '4-2-04_06',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n04020403-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-05',
            name: '家庭病床登记',
            id: '4-2-05',
            children: [
              {
                orderNo: '4-2-05_01',
                name: '家庭病床登记',
                id: '4-2-05_01',
                url: 'N0402.html#/N040205?personInsuType=1'
              },
              {
                orderNo: '4-2-05_02',
                name: '家庭病床登记审核',
                id: '4-2-05_02',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n040205-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-05_03',
                name: '家庭病床撤销',
                id: '4-2-05_03',
                url: 'N0402.html#/N040205_02?personInsuType=1'
              },
              {
                orderNo: '4-2-05_04',
                name: '家庭病床撤销审核',
                id: '4-2-05_04',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n040205_02-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-05_05',
                name: '家庭病床维护',
                id: '4-2-05_05',
                url: 'N0402.html#/N040205_03?personInsuType=1'
              },
              {
                orderNo: '4-2-05_06',
                name: '家庭病床维护审核',
                id: '4-2-05_06',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n040205_03-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-06',
            name: '家庭医生签约登记',
            id: '4-2-06',
            children: [
              {
                orderNo: '4-2-06_01',
                name: '家庭医生签约登记',
                id: '4-2-06_01',
                url: 'N0402.html#/N040206?personInsuType=1'
              },
              {
                orderNo: '4-2-06_02',
                name: '家庭医生签约登记审核',
                id: '4-2-06_02',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n04020601-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-06_03',
                name: '家庭医生签约撤销',
                id: '4-2-06_03',
                url: 'N0402.html#/N040206_02?personInsuType=1'
              },
              {
                orderNo: '4-2-06_04',
                name: '家庭医生签约撤销审核',
                id: '4-2-06_04',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n04020602-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-06_05',
                name: '家庭医生签约维护',
                id: '4-2-06_05',
                url: 'N0402.html#/N040206_03?personInsuType=1'
              },
              {
                orderNo: '4-2-06_06',
                name: '家庭医生签约维护审核',
                id: '4-2-06_06',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n04020603-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-07',
            name: '转诊转院备案',
            id: '4-2-07',
            children: [
              {
                orderNo: '4-2-07-1',
                name: '转诊转院登记',
                id: '4-2-07-1',
                url: 'N0402.html#/N040207?personInsuType=1'
              },
              {
                orderNo: '4-2-07_01',
                name: '转诊转院审核',
                id: '4-2-07_01',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n04020701-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-07_02',
                name: '转诊转院撤销',
                id: '4-2-07_02',
                url: 'N0402.html#/N040207_02?personInsuType=1'
              },
              {
                orderNo: '4-2-07_03',
                name: '转诊转院撤销审核',
                id: '4-2-07_03',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n04020703-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-07_05',
                name: '转诊转院信息维护',
                id: '4-2-07_05',
                url: 'N0402.html#/N040207_03?personInsuType=1'
              },
              {
                orderNo: '4-2-07_06',
                name: '转诊转院信息维护审核',
                id: '4-2-07_06',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n04020702-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-8',
            name: '异地急诊住院登记',
            id: '4-2-8',
            children: [
              {
                orderNo: '4-2-08',
                name: '异地急诊住院登记',
                id: '4-2-08',
                url: 'N0402.html#/N040208?personInsuType=1'
              },
              {
                orderNo: '4-2-08-01',
                name: '异地急诊住院登记审核',
                id: '4-2-08-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n040208-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-08-02',
                name: '异地急诊住院撤销',
                id: '4-2-08-02',
                url: 'N0402.html#/N040208_02?personInsuType=1'
              },
              {
                orderNo: '4-2-08-03',
                name: '异地急诊住院撤销审核',
                id: '4-2-08-02-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n040208-cx-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-08-04',
                name: '异地急诊住院变更',
                id: '4-2-08-03',
                url: 'N0402.html#/N040208_03?personInsuType=1'
              },
              {
                orderNo: '4-2-08-05',
                name: '异地急诊住院变更审核',
                id: '4-2-08-03-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n040208-wh-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-42',
            name: '异地临时就医备案登记',
            id: '4-2-42',
            children: [
              {
                orderNo: '4-2-42-1',
                name: '异地临时就医备案登记',
                id: '4-2-42-01',
                url: 'N0402.html#/N040242?personInsuType=1'
              },
              {
                orderNo: '4-2-42_02',
                name: '异地临时就医备案撤销',
                id: '4-2-42-03',
                url: 'N0402.html#/N040242_02?personInsuType=1'
              },
              {
                orderNo: '4-2-42_04',
                name: '异地临时就医备案变更',
                id: '4-2-42-05',
                url: 'N0402.html#/N040242_03?personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-10',
            name: '特检特治登记',
            id: '4-2-10',
            children: [
              {
                orderNo: '4-2-10-00',
                name: '特检特治登记',
                id: '4-2-10-00',
                url: 'N0402.html#/N040210?personInsuType=1'
              },
              {
                orderNo: '4-2-10-01',
                name: '特检特治登记审核',
                id: '4-2-10-01',
                url: 'N0402.html#/N040210_01?nodeNo=mbs-n040210-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-10-02',
                name: '特检特治撤销',
                id: '4-2-10-02',
                url: 'N0402.html#/N040210_02?personInsuType=1'
              },
              {
                orderNo: '4-2-10-03',
                name: '特检特治撤销审核',
                id: '4-2-10-03',
                url: 'N0402.html#/N040210_01?nodeNo=mbs-n040210-sc-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-11',
            name: '特殊药品登记',
            id: '4-2-11',
            children: [
              {
                orderNo: '4-2-11-00',
                name: '特殊药品登记',
                id: '4-2-11-00',
                url: 'N0402.html#/N040211?personInsuType=1'
              },
              {
                orderNo: '4-2-11-01',
                name: '特殊药品登记审核',
                id: '4-2-11-01',
                url: 'N0402.html#/N040211_01?nodeNo=mbs-n040211-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-11-02',
                name: '特殊药品撤销',
                id: '4-2-11-02',
                url: 'N0402.html#/N040211_02?personInsuType=1'
              },
              {
                orderNo: '4-2-11-03',
                name: '特殊药品撤销审核',
                id: '4-2-11-03',
                url: 'N0402.html#/N040211_01?nodeNo=mbs-n040211-cx-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-12',
            name: '长期带药登记',
            id: '4-2-12-00',
            children: [
              {
                orderNo: '4-2-12-00',
                name: '长期带药登记',
                id: '4-2-12-00',
                url: 'N0402.html#/N040212?personInsuType=1'
              },
              {
                orderNo: '4-2-12-01',
                name: '长期带药审核',
                id: '4-2-12-01',
                url: 'N0402.html#/N040212_01?nodeNo=mbs-n040212-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-12-02',
                name: '长期带药撤销',
                id: '4-2-12-02',
                url: 'N0402.html#/N040212_02?personInsuType=1'
              },
              {
                orderNo: '4-2-12-03',
                name: '长期带药撤销审核',
                id: '4-2-12-03',
                url: 'N0402.html#/N040212_01?nodeNo=mbs-n040212-cx-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-21',
            name: '外检外购登记',
            id: '4-2-21',
            children: [
              {
                orderNo: '4-2-21_01',
                name: '外检外购登记',
                id: '4-2-21_01',
                url: 'N0402.html#/N040221?personInsuType=1'
              },
              {
                orderNo: '4-2-21_02',
                name: '外检外购审核',
                id: '4-2-21_02',
                url: 'N0402.html#/N040221_01?personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-28',
            name: '生育门诊产前检查',
            id: '4-2-28',
            children: [
              {
                orderNo: '4-2-28-1',
                name: '生育门诊产前检查登记',
                id: '4-2-28-1',
                url: 'N0402.html#/N040228?personInsuType=1'
              },
              {
                orderNo: '4-2-28-2',
                name: '生育门诊产前检查审核',
                id: '4-2-28-2',
                url: 'N0402.html#/N040228_01?nodeNo=mbs-n040228-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-28-3',
                name: '生育门诊产前检查撤销',
                id: '4-2-28-3',
                url: 'N0402.html#/N040228_02?personInsuType=1'
              },
              {
                orderNo: '4-2-28-4',
                name: '生育门诊产前检查撤销审核',
                id: '4-2-28-4',
                url: 'N0402.html#/N040228_01?nodeNo=mbs-n040228-cx-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-2-29',
            name: '报销特殊认定登记',
            id: '4-2-29',
            children: [
              {
                orderNo: '4-2-29-1',
                name: '住院起付线减免认定（中心）登记',
                id: '4-2-29-1',
                url: 'N0402.html#/N040229?personInsuType=1'
              },
              {
                orderNo: '4-2-29-2',
                name: '住院起付线减免认定（中心）审核',
                id: '4-2-28-2',
                url: 'N0402.html#/N040229_01?nodeNo=mbs-n040229-h02&personInsuType=1'
              },
              {
                orderNo: '4-2-29-3',
                name: '住院起付线减免认定（中心）撤销',
                id: '4-2-29-3',
                url: 'N0402.html#/N040229_02?personInsuType=1'
              },
              {
                orderNo: '4-2-29-4',
                name: '住院起付线减免认定（中心）撤销审核',
                id: '4-2-29-4',
                url: 'N0402.html#/N040229_01?nodeNo=mbs-n040229_02-h02&personInsuType=1'
              }
            ]
          }
        ]
      },
      {
        orderNo: '4-3',
        name: '门诊统筹包干管理',
        id: '4-3',
        children: [
          {
            orderNo: '4-3-1',
            name: '包干费用拨付管理',
            id: '4-3-1',
            url: 'N0403.html#/N040301'
          },
          {
            orderNo: '4-3-3',
            name: '包干费用拨付审核',
            id: '4-3-3',
            url: 'N0403.html#/N040303'
          },
          {
            orderNo: '4-3-2',
            name: '人员与单位关联关系管理',
            id: '4-3-2',
            url: 'N0403.html#/N040302'
          }
        ]
      },
      {
        orderNo: '4-4',
        name: '个人医保待遇资格管理',
        id: '4-4',
        children: [
          {
            orderNo: '4-4-1',
            name: '个人医保待遇资格',
            id: '4-4-1',
            url: 'N0404.html#/N040401'
          }
        ]
      },
      {
        orderNo: '4-6',
        name: '生育津贴管理',
        id: '4-6',
        children: [
          {
            orderNo: '4-6-6',
            name: '生育津贴核定',
            id: '4-6-6',
            url: 'matntrtmgt.html#/benefitsManagement?personInsuType=1'
          },
          {
            orderNo: '4-6-9',
            name: '生育待遇核定审核',
            id: '4-6-9',
            url: 'matntrtmgt.html#/treatmentAudit?nodeNo=mbs-n040607-h-02&personInsuType=1'
          },
          {
            orderNo: '4-6-10',
            name: '生育待遇撤销',
            id: '4-6-10',
            url: 'matntrtmgt.html#/treatmentCancle?personInsuType=1'
          },
          {
            orderNo: '4-6-11',
            name: '生育待遇撤销审核',
            id: '4-6-11',
            url: 'matntrtmgt.html#/treatmentCancleAudit?nodeNo=mbs-n040611-h-02&personInsuType=1'
          }
        ]
      },
      {
        orderNo: '4-7',
        name: '特药资格申请管理',
        id: '4-7',
        children: [
          {
            orderNo: '4-7-1',
            name: '医师特药资格申请',
            id: '4-7-1',
            children: [
              {
                orderNo: '4-7-1-1',
                name: '医师特药资格申请登记',
                id: '4-7-1-1',
                url: 'N0411.html#/N041101?personInsuType=1'
              },
              {
                orderNo: '4-7-1-2',
                name: '医师特药资格申请审核',
                id: '4-7-1-2',
                url: 'N0411.html#/N041101_01?nodeNo=mbs-n041101-h02&personInsuType=1'
              },
              {
                orderNo: '4-7-1-3',
                name: '医师特药资格申请撤销',
                id: '4-7-1-3',
                url: 'N0411.html#/N041101_02?personInsuType=1'
              },
              {
                orderNo: '4-7-1-4',
                name: '医师特药资格申请撤销审核',
                id: '4-7-1-4',
                url: 'N0411.html#/N041101_01?nodeNo=mbs-n041101_011-h02&personInsuType=1'
              }
            ]
          },
          {
            orderNo: '4-7-2',
            name: '医师特药权限申请',
            id: '4-7-2',
            children: [
              {
                orderNo: '4-11-02-01',
                name: '医师特药权限申请',
                id: '4-11-02-01',
                url: 'N0411.html#/N04110201?nodeNo=mbs-n04110201-h02'
              },
              {
                orderNo: '4-11-02-02',
                name: '医师特药权限审核',
                id: '4-11-02-02',
                url: 'N0411.html#/N04110202?nodeNo=mbs-n04110201-h02'
              },
              {
                orderNo: '4-11-02-03',
                name: '医师特药权限撤销',
                id: '4-11-02-03',
                url: 'N0411.html#/N04110203'
              },
              {
                orderNo: '4-11-02-04',
                name: '医师特药权限撤销审核',
                id: '4-11-02-04',
                url: 'N0411.html#/N04110204?nodeNo=mbs-n04110203-h02'
              }
            ]
          },
          {
            orderNo: '4-7-3',
            name: '特药人员用药资格申请',
            id: '4-7-3',
            children: [
              {
                orderNo: '4-7-3-1',
                name: '特药人员用药资格申请',
                id: '4-7-3-1',
                url: 'N0411.html#/N04110301?personInsuType=1'
              },
              {
                orderNo: '4-7-3-2',
                name: '特药人员用药资格申请审核',
                id: '4-7-3-2',
                url: 'N0411.html#/N04110302?personInsuType=1&nodeNo=mbs-n04110301-h02'
              },
              {
                orderNo: '4-7-3-3',
                name: '特药人员用药资格撤销',
                id: '4-7-3-3',
                url: 'N0411.html#/N04110303?personInsuType=1'
              },
              {
                orderNo: '4-7-3-4',
                name: '特药人员用药资格撤销审核',
                id: '4-7-3-4',
                url: 'N0411.html#/N04110302?personInsuType=1&nodeNo=mbs-n04110303-h02'
              }
            ]
          },
          {
            orderNo: '4-7-5',
            name: '特殊病种限定目录管理',
            id: '4-7-5',
            children: [
              {
                orderNo: '4-7-5-1',
                name: '限定目录登记',
                id: '4-7-5-1',
                url: 'N0411.html#/N04110501'
              },
              {
                orderNo: '4-7-5-2',
                name: '限定目录登记审核',
                id: '4-7-5-2',
                url: 'N0411.html#/N04110502?nodeNo=mbs-n04110501-h02'
              },
              {
                orderNo: '4-7-5-3',
                name: '限定目录停用',
                id: '4-7-5-3',
                url: 'N0411.html#/N04110503'
              },
              {
                orderNo: '4-7-5-4',
                name: '限定目录停用审核',
                id: '4-7-5-4',
                url: 'N0411.html#/N04110504?nodeNo=mbs-n04110503-h02'
              }
            ]
          }
        ]
      },
      {
        orderNo: '4-8',
        name: '待遇享受信息查询',
        id: '4-8',
        url: 'N0412.html#/N041202'
      },
      {
        orderNo: '4-13',
        name: '大病医疗互助补充保险补报销',
        id: '4-13',
        children: [
          {
            orderNo: '4-13-1',
            name: '大病互助补报销登记',
            id: '4-13-1',
            url: 'N0412.html#/N041203?personInsuType=1'
          },
          {
            orderNo: '4-13-2',
            name: '大病互助补报销结算',
            id: '4-13-2',
            url: 'N0412.html#/N041204?personInsuType=1'
          }
        ]
      },
      {
        orderNo: '4-9',
        name: '待遇追回',
        id: '4-9',
        children: [
          {
            orderNo: '4-9-1',
            name: '待遇追回新增',
            id: '4-9-1',
            url: 'N0405.html#/N04051401?personInsuType=1'
          },
          {
            orderNo: '4-9-2',
            name: '待遇追回新增审核',
            id: '4-9-2',
            url: 'N0405.html#/N04051403?personInsuType=1&nodeNo=mbs-n04051401-h02'
          },
          {
            orderNo: '4-9-3',
            name: '待遇追回撤销',
            id: '4-9-3',
            url: 'N0405.html#/N04051402?personInsuType=1'
          },
          {
            orderNo: '4-9-4',
            name: '待遇追回撤销审核',
            id: '4-9-4',
            url: 'N0405.html#/N04051404?personInsuType=1&nodeNo=mbs-n04051402-h02'
          }
        ]
      },
      {
        orderNo: 'N043-1',
        name: '血透管理中心',
        id: 'N043-1',
        children: [
          {
            orderNo: 'N043-02',
            name: '血透认定大病互助待遇认定',
            id: 'N043-02',
            url: 'N0413.html#/N041302?personInsuType=1'
          },
          {
            orderNo: 'N043-03',
            name: '血透认定大病互助待遇审核',
            id: 'N043-03',
            url: 'N0413.html#/N041303?personInsuType=1&nodeId=mbs-n413012-h02'
          }
        ]
      },
      {
        orderNo: 'N044-1-1',
        name: '公务员门诊报销',
        id: 'N044-1-1',
        children: [
          {
            orderNo: 'N044-01-1',
            name: '报销结果录入',
            id: 'N044-01-1',
            url: 'N0414.html#/N041401?personInsuType=1'
          },
          {
            orderNo: 'N044-01-2',
            name: '报销结果录入回退',
            id: 'N044-01-2',
            url: 'N0414.html#/N041402?personInsuType=1'
          },
          {
            orderNo: 'N044-01-3',
            name: '报销结果审核',
            id: 'N044-01-3',
            url: 'N0414.html#/N041403?personInsuType=1&nodeNo=mbs-n041401-h02'
          },
          {
            orderNo: 'N044-01-4',
            name: '报销结果审核回退',
            id: 'N044-01-4',
            url: 'N0414.html#/N041404?personInsuType=1'
          },
          {
            orderNo: 'N044-01-5',
            name: '报销结果审核打印',
            id: 'N044-01-5',
            url: 'N0414.html#/N041405?personInsuType=1'
          },
          {
            orderNo: 'N044-01-6',
            name: '公务员门诊报销信息查询',
            id: 'N044-01-6',
            url: 'N0414.html#/N041406?personInsuType=1'
          }
        ]
      },
      {
        orderNo: 'N045-1',
        name: '核算检测门诊管理(城乡)',
        id: 'N045-1',
        children: [
          {
            orderNo: 'N045-1-1',
            name: '数据导入',
            id: 'N045-1-1',
            url: 'N0415.html#/N041501?personInsuType=1'
          },
          {
            orderNo: 'N045-1-2',
            name: '导入审核',
            id: 'N045-1-2',
            url: 'N0415.html#/N041502?personInsuType=1'
          },
          {
            orderNo: 'N045-1-3',
            name: '拨付',
            id: 'N045-1-3',
            url: 'N0415.html#/N041503?personInsuType=1'
          },
          {
            orderNo: 'N045-1-4',
            name: '拨付审核',
            id: 'N045-1-4',
            url: 'N0415.html#/N041504?personInsuType=1'
          },
          {
            orderNo: 'N045-1-5',
            name: '拨付回退',
            id: 'N045-1-5',
            url: 'N0415.html#/N041505?personInsuType=1'
          },
          {
            orderNo: 'N045-1-6',
            name: '拨付回退审核',
            id: 'N045-1-6',
            url: 'N0415.html#/N041506?personInsuType=1'
          }
        ]
      }
    ]
  },
  {
    orderNo: '11',
    name: '个人待遇管理(城乡)',
    id: '11',
    children: [
      {
        orderNo: 1,
        name: '个人待遇结算管理',
        id: '11-1',
        children: [
          {
            orderNo: 1,
            name: '零星报销',
            id: '11-0',
            children: [
              {
                orderNo: 1,
                name: '零星报销登记',
                id: '11-0-1',
                url: 'N0405.html#/N04050101?personInsuType=2'
              },
              {
                orderNo: 3,
                name: '登记回退',
                id: '11-0-3',
                url: 'N0405.html#/N04050103?nodeNo=mbs-n110501-h03&personInsuType=2'
              },
              {
                orderNo: 6,
                name: '明细录入',
                id: '11-0-6',
                url: 'N0405.html#/N04050106?nodeNo=mbs-n110501-h03&personInsuType=2'
              },
              {
                orderNo: 7,
                name: '明细审核',
                id: '11-0-7',
                url: 'N0405.html#/N04050107?nodeNo=mbs-n110501-h04&personInsuType=2'
              },
              {
                orderNo: 8,
                name: '明细回退',
                id: '11-0-8',
                url: 'N0405.html#/N04050108?personInsuType=2'
              },
              {
                orderNo: 9,
                name: '住院结算',
                id: '11-0-9',
                url: 'N0405.html#/N04050401?nodeNo=mbs-n110501-h05&personInsuType=2'
              },
              {
                orderNo: 10,
                name: '门诊结算',
                id: '11-0-10',
                url: 'N0405.html#/N04050402?nodeNo=mbs-n110501-h06&personInsuType=2'
              },
              {
                orderNo: 11,
                name: '结算回退',
                id: '11-0-11',
                url: 'N0405.html#/N04050409?personInsuType=2'
              },
              {
                orderNo: 12,
                name: '结算审核',
                id: '11-0-12',
                url: 'N0405.html#/N04050403?nodeNo=mbs-n110501-h07&personInsuType=2'
              },
              {
                orderNo: 13,
                name: '审核回退',
                id: '11-0-13',
                url: 'N0405.html#/N04050404?nodeNo=mbs-n110501-h07&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '个人零星报销单据打印',
                id: '11-1-9',
                url: 'N0405.html#/N040509?personInsuType=2'
              },
              {
                orderNo: 18,
                name: '结算拨付失败重发',
                id: '4-0-18',
                url: 'N0405.html#/N04050410?nodeNo=mbs-n04050410&personInsuType=2'
              },
              {
                orderNo: 19,
                name: '结算拨付失败重发撤销',
                id: '4-0-19',
                url: 'N0405.html#/N04050411?nodeNo=mbs-n04050411&personInsuType=2'
              }
            ]
          },
          {
            orderNo: 1,
            name: '零星二次补差报销管理',
            id: '11-1-5',
            url: 'N0405.html#/N040505',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '11-1-5-1',
                url: 'N0405.html#/N040505?nodeNo=mbs-n04050501-h01&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '11-1-5-2',
                url: 'N0405.html#/N04050502?nodeNo=mbs-n04050501-h02&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '费用明细调整',
                id: '11-1-5-3',
                url: 'N0405.html#/N04050503?nodeNo=mbs-n04050501-h02&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '费用明细调整回退',
                id: '11-1-5-4',
                url: 'N0405.html#/N04050504?nodeNo=mbs-n04050501-h03&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '费用结算',
                id: '11-1-5-5',
                url: 'N0405.html#/N04050505?nodeNo=mbs-n04050501-h03&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '费用结算回退',
                id: '11-1-5-6',
                url: 'N0405.html#/N04050506?nodeNo=mbs-n04050501-h04&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '11-1-5-7',
                url: 'N0405.html#/N04050507?nodeNo=mbs-n04050501-h04&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '11-1-5-8',
                url: 'N0405.html#/N04050508?personInsuType=2'
              }
            ]
          },
          {
            orderNo: 1,
            name: '年度内二次报销管理',
            id: '11-1-6',
            url: 'N0405.html#/N040506',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '11-1-6-1',
                url: 'N0405.html#/N040506?nodeNo=mbs-n04050601-h01&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '11-1-6-2',
                url: 'N0405.html#/N04050602?nodeNo=mbs-n04050601-h02&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '结算',
                id: '11-1-6-3',
                url: 'N0405.html#/N04050603?nodeNo=mbs-n04050601-h02&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '结算回退',
                id: '11-1-6-6',
                url: 'N0405.html#/N04050606?nodeNo=mbs-n0405060103&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '11-1-6-4',
                url: 'N0405.html#/N04050604?nodeNo=mbs-n04050601-h03&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '11-1-6-5',
                url: 'N0405.html#/N04050605?personInsuType=2'
              },
              {
                orderNo: 1,
                name: '报销结果查询',
                id: '11-1-6-7',
                url: 'N0405.html#/N04050607?personInsuType=2'
              }
            ]
          },
          {
            orderNo: 1,
            name: '灵活报销管理',
            id: '11-1-7',
            url: 'N0405.html#/N040507',
            children: [
              {
                orderNo: 1,
                name: '报销结果录入',
                id: '11-1-7-1',
                url: 'N0405.html#/N040507?nodeNo=mbs-N04050701-cx-h01&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '报销结果录入回退',
                id: '11-1-7-2',
                url: 'N0405.html#/N04050702?personInsuType=2'
              },
              {
                orderNo: 1,
                name: '报销结果审核',
                id: '11-1-7-3',
                url: 'N0405.html#/N04050703?nodeNo=mbs-N04050701-cx-h02&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '报销结果审核回退',
                id: '11-1-7-4',
                url: 'N0405.html#/N04050704?personInsuType=2'
              }
            ]
          },
          {
            orderNo: 1,
            name: '特殊人群奖励金拨付管理',
            id: '11-1-8',
            url: 'N0405.html#/N040508',
            children: [
              {
                orderNo: 1,
                name: '登记',
                id: '11-1-8-1',
                url: 'N0405.html#/N040508?nodeNo=mbs-n04050801&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '登记回退',
                id: '11-1-8-2',
                url: 'N0405.html#/N04050802?personInsuType=2'
              },
              {
                orderNo: 1,
                name: '审核',
                id: '11-1-8-3',
                url: 'N0405.html#/N04050803?nodeNo=mbs-n04050802&personInsuType=2'
              },
              {
                orderNo: 1,
                name: '审核回退',
                id: '11-1-8-4',
                url: 'N0405.html#/N04050804?personInsuType=2'
              }
            ]
          }
        ]
      },
      {
        orderNo: '4-2',
        name: '人员就医登记管理',
        id: '11-2',
        children: [
          {
            orderNo: '11-2-01',
            name: '门慢门特登记',
            id: '11-2-01',
            children: [
              {
                orderNo: '11-2-01_01',
                name: '门慢门特登记',
                id: '4-2-01_01',
                url: 'N0402.html#/N040201?nodeNo=mbs-n04020101-cx02&personInsuType=2'
              },
              {
                orderNo: '11-2-01-01-01',
                name: '城乡两病登记',
                id: '4-2-01_01_01',
                url: 'N0402.html#/N040201-cx?personInsuType=2'
              },
              {
                orderNo: '11-2-01-01-02',
                name: '城乡重大疾病登记',
                id: '4-2-01_01_02',
                url: 'N0402.html#/N040201-zd?personInsuType=2'
              },
              {
                orderNo: '11-2-01_02',
                name: '病种登记审核',
                id: '11-2-1_02',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n04020101-cx-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-01_03',
                name: '病种登记撤销',
                id: '11-2-1_03',
                url: 'N0402.html#/N040201_02?personInsuType=2'
              },
              {
                orderNo: '11-2-01_04',
                name: '病种登记撤销审核',
                id: '11-2-01_04',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n04020103-cx-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-01_05',
                name: '病种登记维护',
                id: '11-2-01_05',
                url: 'N0402.html#/N040201_03?personInsuType=2'
              },
              {
                orderNo: '11-2-01_06',
                name: '病种登记维护审核',
                id: '11-2-01_06',
                url: 'N0402.html#/N040201_01?nodeNo=mbs-n04020102-cx-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-01_07',
                name: '病种特权维护经办',
                id: '11-2-01_07',
                url: 'N0402.html#/N040201_04?personInsuType=2'
              },
              {
                orderNo: '11-2-01_08',
                name: '门特治疗机构变更',
                id: '11-2-01_08',
                url: 'N0402.html#/N040201_05?personInsuType=2'
              },
              {
                orderNo: '11-2-01_09',
                name: '门特治疗机构变更撤销',
                id: '11-2-01_09',
                url: 'N0402.html#/N040201_06?personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-23',
            name: '门慢门特年审',
            id: '11-2-23',
            children: [
              {
                orderNo: '11-2-23_05',
                name: '两病年审（单人）',
                id: '11-2-23_05',
                url: 'N0402.html#/N040231?personInsuType=2'
              },
              {
                orderNo: '4-2-23_04',
                name: '门慢门特年审',
                id: '4-2-23_04',
                url: 'N0402.html#/N040230?personInsuType=2'
              },
              {
                orderNo: '4-2-23_05',
                name: '门慢门特年审审核',
                id: '4-2-23_05',
                url: 'N0402.html#/N040232?nodeNo=mbs-n040230-cx-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-16',
            name: '门慢门特用药范围维护',
            id: '11-2-16',
            children: [
              {
                orderNo: '4-2-16',
                name: '门慢门特用药范围维护',
                id: '11-2-16',
                url: 'N0402.html#/N040216?personInsuType=2'
              },
              {
                orderNo: '11-2-16_01',
                name: '门慢门特用药范围维护审核',
                id: '11-2-16_01',
                url: 'N0402.html#/N040216_01?nodeNo=mbs-n040216-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-16_02',
                name: '门慢门特用药范围维护撤销',
                id: '11-2-16_02',
                url: 'N0402.html#/N040216_02?personInsuType=2'
              },
              {
                orderNo: '11-2-16_03',
                name: '门慢门特用药范围维护撤销审核',
                id: '11-2-16_03',
                url: 'N0402.html#/N040216_01?nodeNo=mbs-n04021601-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-9',
            name: '异地安置登记',
            id: '11-2-9',
            children: [
              {
                orderNo: '4-2-09',
                name: '异地安置登记',
                id: '11-2-09',
                url: 'N0402.html#/N040209?personInsuType=2'
              },
              {
                orderNo: '11-2-09_01',
                name: '异地安置登记审核',
                id: '11-2-09_01',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-n040209cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-09_02',
                name: '异地安置撤销',
                id: '11-2-09_02',
                url: 'N0402.html#/N040209_02?personInsuType=2'
              },
              {
                orderNo: '11-2-09_02_01',
                name: '异地安置撤销审核',
                id: '11-2-09_02_01',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-n040209-cxcj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-09_03',
                name: '异地安置变更',
                id: '11-2-09_03',
                url: 'N0402.html#/N040209_03?personInsuType=2'
              },
              {
                orderNo: '11-2-09_03_01',
                name: '异地安置变更审核',
                id: '11-2-09_04',
                url: 'N0402.html#/N040209_01?nodeNo=mbs-n040209-wh-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-14',
            name: '生育备案',
            id: '11-2-14',
            children: [
              {
                orderNo: '11-2-14-1',
                name: '生育备案登记',
                id: '11-2-14-1',
                url: 'N0402.html#/N040214?personInsuType=2'
              },
              {
                orderNo: '11-2-14_01',
                name: '生育备案登记审核',
                id: '11-2-14_01',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n04021401-cx-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-14_03',
                name: '生育备案信息撤销',
                id: '11-2-14_03',
                url: 'N0402.html#/N040214_02?personInsuType=2'
              },
              {
                orderNo: '11-2-14_04',
                name: '生育备案撤销审核',
                id: '11-2-14_04',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n04021403_cx-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-14_06',
                name: '生育备案信息维护',
                id: '11-2-14_06',
                url: 'N0402.html#/N040214_03?personInsuType=2'
              },
              {
                orderNo: '11-2-14_07',
                name: '生育备案维护审核',
                id: '11-2-14_07',
                url: 'N0402.html#/N040214_01?nodeNo=mbs-n04021402-cx-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-22',
            name: '无医保凭证结算备案登记',
            id: '11-2-22',
            children: [
              {
                orderNo: '11-2-22_01',
                name: '无医保凭证结算备案登记',
                id: '11-2-22_01',
                url: 'N0402.html#/N040223?personInsuType=2'
              },
              {
                orderNo: '11-2-22_02',
                name: '无医保凭证结算备案登记审核',
                id: '11-2-22_02',
                url: 'N0402.html#/N040223_01?nodeNo=mbs-n04022301-cx-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-22_03',
                name: '无医保凭证结算备案撤销',
                id: '11-2-22_03',
                url: 'N0402.html#/N040223_02?personInsuType=2'
              },
              {
                orderNo: '11-2-22_04',
                name: '无医保凭证结算备案撤销审核',
                id: '11-2-22_04',
                url: 'N0402.html#/N040223_01?nodeNo=mbs-n04022302-cx-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-02',
            name: '按病种结算登记',
            id: '11-2-2',
            children: [
              {
                orderNo: '11-2-02',
                name: '按病种结算登记',
                id: '11-2-2',
                url: 'N0402.html#/N040202?personInsuType=2'
              },
              {
                orderNo: '11-2-02-01',
                name: '按病种结算审核',
                id: '11-2-2-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n040202-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-02_02',
                name: '按病种结算撤销',
                id: '11-2-2-02',
                url: 'N0402.html#/N040202_02?personInsuType=2'
              },
              {
                orderNo: '11-2-02-02-01',
                name: '按病种结算撤销审核',
                id: '11-2-2-02-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n04020202-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-02-03',
                name: '按病种结算维护',
                id: '11-2-2-03',
                url: 'N0402.html#/N040202_03?personInsuType=2'
              },
              {
                orderNo: '11-2-02-03-01',
                name: '按病种结算维护审核',
                id: '11-2-2-03-01',
                url: 'N0402.html#/N040202_01?nodeNo=mbs-n04020203-cj-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-03',
            name: '意外伤害登记',
            id: '11-2-03',
            children: [
              {
                orderNo: '11-2-03_01',
                name: '意外伤害登记',
                id: '11-2-03_01',
                url: 'N0402.html#/N040203?personInsuType=2'
              },
              {
                orderNo: '11-2-03_02',
                name: '意外伤害登记审核',
                id: '11-2-03_02',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n04020301dj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-03_03',
                name: '意外伤害撤销',
                id: '11-2-03_03',
                url: 'N0402.html#/N040203_02?personInsuType=2'
              },
              {
                orderNo: '11-2-03_04',
                name: '意外伤害撤销审核',
                id: '11-2-03_04',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n04020302cx-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-03_05',
                name: '意外伤害变更',
                id: '11-2-03_05',
                url: 'N0402.html#/N040203_03?personInsuType=2'
              },
              {
                orderNo: '11-2-03_06',
                name: '意外伤害变更审核',
                id: '11-2-03_06',
                url: 'N0402.html#/N040203_01?nodeNo=mbs-n04020303wh-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-04',
            name: '就医定点医疗机构登记',
            id: '11-2-04',
            children: [
              {
                orderNo: '11-2-04_01',
                name: '就医定点医疗机构登记',
                id: '11-2-04_01',
                url: 'N0402.html#/N040204?personInsuType=2'
              },
              {
                orderNo: '11-2-04_02',
                name: '就医定点医疗机构审核',
                id: '11-2-04_02',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n04020401dj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-04_02_01',
                name: '就医定点医疗机构批量审核',
                id: '11-2-04_02_01',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n04020404_cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-04_03',
                name: '就医定点医疗机构撤销',
                id: '11-2-04_03',
                url: 'N0402.html#/N040204_02?personInsuType=2'
              },
              {
                orderNo: '11-2-04_04',
                name: '就医定点医疗机构撤销审核',
                id: '11-2-04_04',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n04020402cx-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-04_05',
                name: '就医定点医疗机构停用',
                id: '11-2-04_05',
                url: 'N0402.html#/N040204_03?personInsuType=2'
              },
              {
                orderNo: '11-2-04_06',
                name: '就医定点医疗机构停用审核',
                id: '11-2-04_06',
                url: 'N0402.html#/N040204_01?nodeNo=mbs-n04020403-ty-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-05',
            name: '家庭病床登记',
            id: '11-2-05',
            children: [
              {
                orderNo: '11-2-05_01',
                name: '家庭病床登记',
                id: '11-2-05_01',
                url: 'N0402.html#/N040205?personInsuType=2'
              },
              {
                orderNo: '11-2-05_02',
                name: '家庭病床登记审核',
                id: '11-2-05_02',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n04020501_cx-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-05_03',
                name: '家庭病床撤销',
                id: '11-2-05_03',
                url: 'N0402.html#/N040205_02?personInsuType=2'
              },
              {
                orderNo: '11-2-05_04',
                name: '家庭病床撤销审核',
                id: '11-2-05_04',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n04020502_cx-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-05_05',
                name: '家庭病床维护',
                id: '11-2-05_05',
                url: 'N0402.html#/N040205_03?personInsuType=2'
              },
              {
                orderNo: '11-2-05_06',
                name: '家庭病床维护审核',
                id: '11-2-05_06',
                url: 'N0402.html#/N040205_01?nodeNo=mbs-n04020503-wh-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-06',
            name: '家庭医生签约登记',
            id: '11-2-06',
            children: [
              {
                orderNo: '11-2-06_01',
                name: '家庭医生签约登记',
                id: '11-2-06_01',
                url: 'N0402.html#/N040206?personInsuType=2'
              },
              {
                orderNo: '11-2-06_02',
                name: '家庭医生签约登记审核',
                id: '11-2-06_02',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n040206-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-06_03',
                name: '家庭医生签约撤销',
                id: '11-2-06_03',
                url: 'N0402.html#/N040206_02?personInsuType=2'
              },
              {
                orderNo: '11-2-06_04',
                name: '家庭医生签约撤销审核',
                id: '11-2-06_04',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n04020602-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-06_05',
                name: '家庭医生签约维护',
                id: '11-2-06_05',
                url: 'N0402.html#/N040206_03?personInsuType=2'
              },
              {
                orderNo: '11-2-06_06',
                name: '家庭医生签约维护审核',
                id: '11-2-06_06',
                url: 'N0402.html#/N040206_01?nodeNo=mbs-n04020603-cj-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-07',
            name: '转诊转院备案',
            id: '11-2-07',
            children: [
              {
                orderNo: '11-2-07-1',
                name: '转诊转院登记',
                id: '11-2-07-1',
                url: 'N0402.html#/N040207?personInsuType=2'
              },
              {
                orderNo: '11-2-07_01',
                name: '转诊转院审核',
                id: '11-2-07_01',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n040207-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-07_02',
                name: '转诊转院撤销',
                id: '11-2-07_02',
                url: 'N0402.html#/N040207_02?personInsuType=2'
              },
              {
                orderNo: '11-2-07_03',
                name: '转诊转院撤销审核',
                id: '11-2-07_03',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n04020702-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-07_05',
                name: '转诊转院信息维护',
                id: '11-2-07_05',
                url: 'N0402.html#/N040207_03?personInsuType=2'
              },
              {
                orderNo: '11-2-07_06',
                name: '转诊转院信息维护审核',
                id: '11-2-07_06',
                url: 'N0402.html#/N040207_01?nodeNo=mbs-n04020703-cj-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-8',
            name: '异地急诊住院登记',
            id: '11-2-8',
            children: [
              {
                orderNo: '11-2-08',
                name: '异地急诊住院登记',
                id: '11-2-08',
                url: 'N0402.html#/N040208?personInsuType=2'
              },
              {
                orderNo: '11-2-08-01',
                name: '异地急诊住院登记审核',
                id: '11-2-08-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n040208-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-08-02',
                name: '异地急诊住院撤销',
                id: '11-2-08-02',
                url: 'N0402.html#/N040208_02?personInsuType=2'
              },
              {
                orderNo: '11-2-08-03',
                name: '异地急诊住院撤销审核',
                id: '11-2-08-02-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n04020805-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-08-04',
                name: '异地急诊住院变更',
                id: '11-2-08-03',
                url: 'N0402.html#/N040208_03?personInsuType=2'
              },
              {
                orderNo: '11-2-08-05',
                name: '异地急诊住院变更审核',
                id: '11-2-08-03-01',
                url: 'N0402.html#/N040208_01?nodeNo=mbs-n04020804-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-42',
            name: '异地临时就医备案登记',
            id: '11-2-42',
            children: [
              {
                orderNo: '11-2-42-00',
                name: '异地临时就医备案登记',
                id: '4-2-42-01',
                url: 'N0402.html#/N040242?personInsuType=2'
              },
              {
                orderNo: '11-2-42_02',
                name: '异地临时就医备案撤销',
                id: '11-2-42-03',
                url: 'N0402.html#/N040242_02?personInsuType=2'
              },
              {
                orderNo: '11-2-42_04',
                name: '异地临时就医备案变更',
                id: '11-2-42-05',
                url: 'N0402.html#/N040242_03?personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-10',
            name: '特检特治登记',
            id: '11-2-10',
            children: [
              {
                orderNo: '11-2-10-00',
                name: '特检特治登记',
                id: '11-2-10-00',
                url: 'N0402.html#/N040210?personInsuType=2'
              },
              {
                orderNo: '11-2-10-01',
                name: '特检特治登记审核',
                id: '11-2-10-01',
                url: 'N0402.html#/N040210_01?nodeNo=mbs-n040210-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-10-02',
                name: '特检特治撤销',
                id: '11-2-10-02',
                url: 'N0402.html#/N040210_02?personInsuType=2'
              },
              {
                orderNo: '11-2-10-03',
                name: '特检特治撤销审核',
                id: '11-2-10-03',
                url: 'N0402.html#/N040210_01?nodeNo=mbs-n04021001-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-11',
            name: '特殊药品登记',
            id: '11-2-11',
            children: [
              {
                orderNo: '11-2-11-00',
                name: '特殊药品登记',
                id: '11-2-11-00',
                url: 'N0402.html#/N040211?personInsuType=2'
              },
              {
                orderNo: '11-2-11-01',
                name: '特殊药品登记审核',
                id: '11-2-11-01',
                url: 'N0402.html#/N040211_01?nodeNo=mbs-n040211-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-11-02',
                name: '特殊药品撤销',
                id: '11-2-11-02',
                url: 'N0402.html#/N040211_02?personInsuType=2'
              },
              {
                orderNo: '11-2-11-03',
                name: '特殊药品撤销审核',
                id: '11-2-11-03',
                url: 'N0402.html#/N040211_01?nodeNo=mbs-n04021101-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-12',
            name: '长期带药登记',
            id: '11-2-12-00',
            children: [
              {
                orderNo: '11-2-12-00',
                name: '长期带药登记',
                id: '11-2-12-00',
                url: 'N0402.html#/N040212?personInsuType=2'
              },
              {
                orderNo: '11-2-12-01',
                name: '长期带药审核',
                id: '11-2-12-01',
                url: 'N0402.html#/N040212_01?nodeNo=mbs-n040212-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-12-02',
                name: '长期带药撤销',
                id: '11-2-12-02',
                url: 'N0402.html#/N040212_02?personInsuType=2'
              },
              {
                orderNo: '11-2-12-03',
                name: '长期带药撤销审核',
                id: '11-2-12-03',
                url: 'N0402.html#/N040212_01?nodeNo=mbs-n04021201-h02&personInsuType=2'
              }
            ]
          },
          {
            orderNo: '11-2-29',
            name: '报销特殊认定登记',
            id: '11-2-29',
            children: [
              {
                orderNo: '11-2-29-1',
                name: '住院起付线减免认定（中心）登记',
                id: '11-2-29-1',
                url: 'N0402.html#/N040229?personInsuType=2'
              },
              {
                orderNo: '11-2-29-2',
                name: '住院起付线减免认定（中心）审核',
                id: '11-2-28-2',
                url: 'N0402.html#/N040229_01?nodeNo=mbs-n040229-cj-h02&personInsuType=2'
              },
              {
                orderNo: '11-2-29-3',
                name: '住院起付线减免认定（中心）撤销',
                id: '11-2-29-3',
                url: 'N0402.html#/N040229_02?personInsuType=2'
              },
              {
                orderNo: '11-2-29-4',
                name: '住院起付线减免认定（中心）撤销审核',
                id: '11-2-29-4',
                url: 'N0402.html#/N040229_01?nodeNo=mbs-n04022901-h02&personInsuType=2'
              }
            ]
          }
        ]
      },
      {
        orderNo: '11-3',
        name: '门诊统筹包干管理',
        id: '11-3',
        children: [
          {
            orderNo: '11-3-1',
            name: '包干费用拨付管理',
            id: '11-3-1',
            url: 'N0403.html#/N040301?personInsuType=2'
          },
          {
            orderNo: '4-3-3',
            name: '包干费用拨付审核',
            id: '11-3-3',
            url: 'N0403.html#/N040303?personInsuType=2'
          },
          {
            orderNo: '11-3-2',
            name: '人员与单位关联关系管理',
            id: '11-3-2',
            url: 'N0403.html#/N040302?personInsuType=2'
          }
        ]
      },
      {
        orderNo: '11-4',
        name: '个人医保待遇资格管理',
        id: '11-4',
        children: [
          {
            orderNo: '11-4-1',
            name: '个人医保待遇资格',
            id: '11-4-1',
            url: 'N0404.html#/N040401?personInsuType=2'
          }
        ]
      },
      {
        orderNo: '11-7',
        name: '特药资格申请管理',
        id: '11-7',
        children: [
          {
            orderNo: '11-7-1',
            name: '特药人员用药资格申请',
            id: '11-7-01',
            children: [
              {
                orderNo: '11-7-1-1',
                name: '特药人员用药资格申请',
                id: '11-7-1-1',
                url: 'N0411.html#/N04110301?personInsuType=2'
              },
              {
                orderNo: '11-7-1-2',
                name: '特药人员用药资格申请审核',
                id: '11-7-1-2',
                url: 'N0411.html#/N04110302?personInsuType=2&nodeNo=mbs-n04110301-cj-h02'
              },
              {
                orderNo: '11-7-1-3',
                name: '特药人员用药资格撤销',
                id: '11-7-1-3',
                url: 'N0411.html#/N04110303?personInsuType=2'
              },
              {
                orderNo: '11-7-1-4',
                name: '特药人员用药资格撤销审核',
                id: '11-7-1-4',
                url: 'N0411.html#/N04110302?personInsuType=2&nodeNo=mbs-n04110303-cj-h02'
              }
            ]
          }
        ]
      },
      {
        orderNo: '11-8',
        name: '待遇追回',
        id: '11-8',
        children: [
          {
            orderNo: '11-8-1',
            name: '待遇追回新增',
            id: '11-8-1',
            url: 'N0405.html#/N04051401?personInsuType=2'
          },
          {
            orderNo: '11-8-2',
            name: '待遇追回新增审核',
            id: '11-8-2',
            url: 'N0405.html#/N04051403?personInsuType=2&nodeNo=mbs-n040514-h01-cx02'
          },
          {
            orderNo: '11-8-3',
            name: '待遇追回撤销',
            id: '11-8-3',
            url: 'N0405.html#/N04051402?personInsuType=2'
          },
          {
            orderNo: '11-8-4',
            name: '待遇追回撤销审核',
            id: '11-8-4',
            url: 'N0405.html#/N04051404?personInsuType=2&nodeNo=mbs-n04051402-cx-h02'
          }
        ]
      },
      {
        orderNo: 'N043-1-1',
        name: '血透管理中心',
        id: 'N043-1-1',
        children: [
          {
            orderNo: 'N043-02-01',
            name: '血透认定大病互助待遇认定',
            id: 'N043-02-01',
            url: 'N0413.html#/N041302?personInsuType=2'
          },
          {
            orderNo: 'N043-03-01',
            name: '血透认定大病互助待遇审核',
            id: 'N043-03-01',
            url: 'N0413.html#/N041303?personInsuType=2&nodeId=mbs-n413014-h02'
          }
        ]
      },
      {
        orderNo: 'N046-1-1',
        name: '大学生非首诊医院门诊报销',
        id: 'N046-1-1',
        children: [
          {
            orderNo: 'N046-01-1',
            name: '报销登记',
            id: 'N046-01-1',
            url: 'N2302.html#/N230201?nodeNo=mbs-n230201-h02&personInsuType=2'
          },
          {
            orderNo: 'N046-01-2',
            name: '报销登记回退',
            id: 'N046-01-2',
            url: 'N2302.html#/N230202?nodeNo=mbs-n230202-h&personInsuType=2'
          },
          {
            orderNo: 'N046-01-3',
            name: '明细录入',
            id: 'N046-01-3',
            url: 'N2302.html#/N230203?nodeNo=mbs-n230201-h02&personInsuType=2'
          },
          {
            orderNo: 'N046-01-4',
            name: '明细审核',
            id: 'N046-01-4',
            url: 'N2302.html#/N230204?nodeNo=mbs-n230201-h03&personInsuType=2'
          },
          {
            orderNo: 'N046-01-7',
            name: '明细回退',
            id: 'N046-01-7',
            url: 'N2302.html#/N230207?nodeNo=mbs-n230207-h&personInsuType=2'
          },
          {
            orderNo: 'N046-01-5',
            name: '门诊结算',
            id: 'N046-01-5',
            url: 'N2302.html#/N230205?nodeNo=mbs-n230201-h04&personInsuType=2'
          },
          {
            orderNo: 'N046-01-9',
            name: '结算回退',
            id: 'N046-01-9',
            url: 'N2302.html#/N230209?nodeNo=mbs-n230201-h05&personInsuType=2'
          },
          {
            orderNo: 'N046-01-6',
            name: '结算审核',
            id: 'N046-01-6',
            url: 'N2302.html#/N230206?nodeNo=mbs-n230201-h05&personInsuType=2'
          },
          {
            orderNo: 'N046-01-10',
            name: '审核回退',
            id: 'N046-01-10',
            url: 'N2302.html#/N230210?nodeNo=mbs-n230210-h&personInsuType=2'
          },
          {
            orderNo: 'N046-01-8',
            name: '报销单据打印',
            id: 'N046-01-8',
            url: 'N2302.html#/N230208?nodeNo=mbs-n230201-h06&personInsuType=2'
          }
        ]
      },
      {
        orderNo: '11-13',
        name: '大病医疗互助补充保险补报销',
        id: '11-13',
        children: [
          {
            orderNo: '11-13-1',
            name: '大病互助补报销登记',
            id: '11-13-1',
            url: 'N0412.html#/N041203?personInsuType=2'
          },
          {
            orderNo: '11-13-2',
            name: '大病互助补报销结算',
            id: '11-13-2',
            url: 'N0412.html#/N041204?personInsuType=2'
          }
        ]
      }
    ]
  },
  {
    orderNo: '232-1',
    name: '特药信息管理',
    id: '232',
    children: [
      {
        orderNo: '6',
        name: '特药病种信息管理',
        id: '232-6',
        children: [
          {
            orderNo: '1',
            name: '特药病种信息新增',
            id: '232-6-1',
            url: 'N2001.html#/N200101'
          },
          {
            orderNo: '2',
            name: '特药病种信息变更',
            id: '232-6-2',
            url: 'N2001.html#/N200102'
          },
          {
            orderNo: '3',
            name: '特药病种信息作废',
            id: '232-6-3',
            url: 'N2001.html#/N200103'
          },
          {
            orderNo: '4',
            name: '特药病种信息审核',
            id: '232-6-4',
            url: 'N2001.html#/N200104'
          },
          {
            orderNo: '5',
            name: '特药病种信息查询',
            id: '232-6-5',
            url: 'N2001.html#/N200105'
          }
        ]
      },
      {
        orderNo: '1',
        name: '特药目录信息管理',
        id: '232-1',
        children: [
          {
            orderNo: '1',
            name: '特药目录信息新增',
            id: '232-1-1',
            url: 'N2002.html#/N200201'
          },
          {
            orderNo: '2',
            name: '特药目录信息变更',
            id: '232-1-2',
            url: 'N2002.html#/N200202'
          },
          {
            orderNo: '3',
            name: '特药目录信息作废',
            id: '232-1-3',
            url: 'N2002.html#/N200203'
          },
          {
            orderNo: '4',
            name: '特药目录信息审核',
            id: '232-1-4',
            url: 'N2002.html#/N200204'
          },
          {
            orderNo: '5',
            name: '特药目录信息查询',
            id: '232-1-5',
            url: 'N2002.html#/N200205'
          }
        ]
      },
      {
        orderNo: '4-2-36',
        name: '特药复合用药管理',
        id: '4-2-36',
        children: [
          {
            orderNo: '4-2-36-1',
            name: '特药病种多药新增',
            id: '4-2-36-1',
            url: 'N1807.html#/N040238'
          },
          {
            orderNo: '4-2-36-2',
            name: '特药病种多药新增审核',
            id: '4-2-36-2',
            url: 'N1807.html#/N040238_01'
          },
          {
            orderNo: '4-2-36-3',
            name: '特药病种多药撤销',
            id: '4-2-36-3',
            url: 'N1807.html#/N040239'
          },
          {
            orderNo: '4-2-36-4',
            name: '特药病种多药撤销审核',
            id: '4-2-36-4',
            url: 'N1807.html#/N040239_01'
          },
          {
            orderNo: '4-2-36-5',
            name: '特药病种多药变更',
            id: '4-2-36-5',
            url: 'N1807.html#/N040240'
          },
          {
            orderNo: '4-2-36-6',
            name: '特药病种多药变更审核',
            id: '4-2-36-6',
            url: 'N1807.html#/N040240_01'
          }
        ]
      },
      {
        orderNo: '4-10-50',
        name: '准入信息管理',
        id: '4-10-50',
        children: [
          {
            orderNo: '4-10-50-01',
            name: '准入信息新增',
            id: '4-10-50-01',
            url: 'N1808.html#/N180801'
          },
          {
            orderNo: '4-10-50-02',
            name: '准入信息变更',
            id: '4-10-50-02',
            url: 'N1808.html#/N180802'
          },
          {
            orderNo: '4-10-50-03',
            name: '准入信息撤销',
            id: '4-10-50-03',
            url: 'N1808.html#/N180803'
          }
        ]
      },
      {
        orderNo: '2',
        name: '认定机构信息管理',
        id: '232-2',
        children: [
          {
            orderNo: '1',
            name: '认定机构新增',
            id: '232-2-1',
            url: 'N2004.html#/N200401'
          },
          {
            orderNo: '2',
            name: '认定机构变更',
            id: '232-2-2',
            url: 'N2004.html#/N200402'
          },
          {
            orderNo: '4',
            name: '认定机构作废',
            id: '232-2-4',
            url: 'N2004.html#/N200404'
          },
          {
            orderNo: '3',
            name: '认定机构审核',
            id: '232-2-3',
            url: 'N2004.html#/N200403'
          },
          {
            orderNo: '5',
            name: '认定机构查询',
            id: '232-2-5',
            url: 'N2004.html#/N200405'
          }
        ]
      },
      {
        orderNo: '3',
        name: '治疗机构信息管理',
        id: '232-3',
        children: [
          {
            orderNo: '1',
            name: '治疗机构新增',
            id: '232-3-1',
            url: 'N2005.html#/N200501'
          },
          {
            orderNo: '2',
            name: '治疗机构变更',
            id: '232-3-2',
            url: 'N2005.html#/N200502'
          },
          {
            orderNo: '3',
            name: '治疗机构审核',
            id: '232-3-3',
            url: 'N2005.html#/N200503'
          },
          {
            orderNo: '4',
            name: '治疗机构作废',
            id: '232-3-4',
            url: 'N2005.html#/N200504'
          },
          {
            orderNo: '5',
            name: '治疗机构查询',
            id: '232-3-5',
            url: 'N2005.html#/N200505'
          }
        ]
      },
      {
        orderNo: '4',
        name: '供药机构信息管理',
        id: '232-4',
        children: [
          {
            orderNo: '1',
            name: '供药机构新增',
            id: '232-4-1',
            url: 'N2006.html#/N200601'
          },
          {
            orderNo: '2',
            name: '供药机构变更',
            id: '232-4-2',
            url: 'N2006.html#/N200602'
          },
          {
            orderNo: '3',
            name: '供药机构审核',
            id: '232-4-3',
            url: 'N2006.html#/N200603'
          },
          {
            orderNo: '4',
            name: '供药机构作废',
            id: '232-4-4',
            url: 'N2006.html#/N200604'
          },
          {
            orderNo: '5',
            name: '供药机构查询',
            id: '232-4-5',
            url: 'N2006.html#/N200605'
          }
        ]
      },
      {
        orderNo: '5',
        name: '责任医师信息管理',
        id: '232-5',
        children: [
          {
            orderNo: '1',
            name: '责任医师新增',
            id: '232-5-1',
            url: 'N2007.html#/N200701'
          },
          {
            orderNo: '2',
            name: '责任医师状态变更',
            id: '232-5-2',
            url: 'N2007.html#/N200702'
          },
          {
            orderNo: '3',
            name: '责任医师审核',
            id: '232-5-3',
            url: 'N2007.html#/N200703'
          },
          {
            orderNo: '4',
            name: '责任医师信息查询',
            id: '232-5-4',
            url: 'N2007.html#/N200704'
          },
          {
            orderNo: '5',
            name: '责任医师信息批量新增',
            id: '232-5-5',
            url: 'N2007.html#/N200705'
          }
        ]
      },
      {
        orderNo: '7',
        name: '药品病种周期信息管理',
        id: '232-7',
        children: [
          {
            orderNo: '1',
            name: '药品病种周期信息',
            id: '232-7-1',
            url: 'N2016.html#/N201601'
          }
        ]
      },
      {
        orderNo: '4-10-1',
        name: '人员实名管理',
        id: '4-10-1',
        children: [
          {
            orderNo: '4-10-1-01',
            name: '人员实名制新增',
            id: '4-10-1-01',
            url: 'N1801.html#/N180101'
          },
          {
            orderNo: '4-10-1-02',
            name: '人员实名制新增审核',
            id: '4-10-1-02',
            url: 'N1801.html#/N180102?nodeNo=mbs-n180101-h-02'
          },
          {
            orderNo: '4-10-01-3',
            name: '人员实名制变更',
            id: '4-10-01-3',
            url: 'N1801.html#/N180103'
          },
          {
            orderNo: '4-10-01-4',
            name: '人员实名制变更审核',
            id: '4-10-01-4',
            url: 'N1801.html#/N180104?nodeNo=mbs-n180103-h-02'
          },
          {
            orderNo: '4-10-01-5',
            name: '人员实名制撤销',
            id: '4-10-01-5',
            url: 'N1801.html#/N180105'
          },
          {
            orderNo: '4-10-01-6',
            name: '人员实名制撤销审核',
            id: '4-10-01-6',
            url: 'N1801.html#/N180106?nodeNo=mbs-n180105-h-02'
          }
        ]
      },
      {
        orderNo: '4-10-2',
        name: '特药病种认定管理单行',
        id: '4-10-2',
        children: [
          {
            orderNo: '4-10-2-01',
            name: '患者病种认定新增',
            id: '4-10-2-01',
            url: 'N1802.html#/N180201'
          },
          {
            orderNo: '4-10-2-02',
            name: '患者病种认定新增审核',
            id: '4-10-2-02',
            url: 'N1802.html#/N180202?nodeNo=mbs-n180201-h-02'
          },
          {
            orderNo: '4-10-2-03',
            name: '患者病种认定变更',
            id: '4-10-2-03',
            url: 'N1802.html#/N180207'
          },
          {
            orderNo: '4-10-2-04',
            name: '患者病种认定变更审核',
            id: '4-10-2-04',
            url: 'N1802.html#/N180208?nodeNo=mbs-n180207-h-02'
          },
          {
            orderNo: '4-10-2-05',
            name: '患者病种认定撤销',
            id: '4-10-2-05',
            url: 'N1802.html#/N180205'
          },
          {
            orderNo: '4-10-2-06',
            name: '患者病种认定撤销审核',
            id: '4-10-2-06',
            url: 'N1802.html#/N180206?nodeNo=mbs-n180205-h-02'
          }
        ]
      },
      {
        orderNo: '4-10-51',
        name: '特药病种认定管理高值',
        id: '4-10-51',
        children: [
          {
            orderNo: '4-10-51-01',
            name: '患者病种事前新增',
            id: '4-10-51-01',
            url: 'N1809.html#/N180901'
          },
          {
            orderNo: '4-10-51-02',
            name: '患者病种事前新增审核',
            id: '4-10-51-02',
            url: 'N1809.html#/N180902?nodeNo=mbs-n180901-h-02'
          },
          {
            orderNo: '4-10-51-05',
            name: '患者病种认定变更',
            id: '4-10-51-05',
            url: 'N1809.html#/N180907'
          },
          {
            orderNo: '4-10-51-06',
            name: '患者病种认定变更审核',
            id: '4-10-51-06',
            url: 'N1809.html#/N180908?nodeNo=mbs-n180907-h-02'
          },
          {
            orderNo: '4-10-51-03',
            name: '患者病种事前撤销',
            id: '4-10-51-03',
            url: 'N1809.html#/N180905'
          },
          {
            orderNo: '4-10-51-04',
            name: '患者病种事前撤销审核',
            id: '4-10-51-04',
            url: 'N1809.html#/N180906?nodeNo=mbs-n180905-h-02'
          }
        ]
      },
      {
        orderNo: '4-10-22',
        name: '罕见病待遇认定管理（中心）',
        id: '4-10-22',
        children: [
          {
            orderNo: '4-10-22-01',
            name: '罕见病认定新增',
            id: '4-10-22-01',
            url: 'N1811.html#/N181101'
          },
          {
            orderNo: '4-10-22-02',
            name: '罕见病认定新增审核',
            id: '4-10-22-02',
            url: 'N1811.html#/N181102?nodeNo=mbs-n181101-h-02'
          },
          {
            orderNo: '4-10-22-05',
            name: '罕见病认定撤销',
            id: '4-10-22-05',
            url: 'N1811.html#/N181105'
          },
          {
            orderNo: '4-10-22-06',
            name: '罕见病认定撤销审核',
            id: '4-10-22-06',
            url: 'N1811.html#/N181106?nodeNo=mbs-n181105-h-02'
          }
        ]
      },
      {
        orderNo: '15',
        name: '特药治疗方案管理',
        id: '232-15',
        children: [
          {
            orderNo: '1',
            name: '治疗方案新增',
            id: '232-15-1',
            url: 'N1803.html#/N180301'
          },
          {
            orderNo: '2',
            name: '治疗方案变更',
            id: '232-15-2',
            url: 'N1803.html#/N180302'
          },
          {
            orderNo: '3',
            name: '治疗方案撤销',
            id: '232-15-3',
            url: 'N1803.html#/N180303'
          },
          {
            orderNo: '4',
            name: '治疗方案审批',
            id: '232-15-4',
            url: 'N1803.html#/N180304?nodeNo1=mbs-n180301-h-02&nodeNo2=mbs-n180303-h-02&nodeNo3=mbs-n180305-h-02'
          },
          {
            orderNo: '5',
            name: '治疗方案查询',
            id: '232-15-5',
            url: 'N1803.html#/N180305'
          }
        ]
      },
      {
        orderNo: '4-10-4',
        name: '特药处方管理',
        id: '4-10-4',
        children: [
          {
            orderNo: '4-10-4-01',
            name: '特药处方录入',
            id: '4-10-4-01',
            url: 'N1804.html#/N180401'
          },
          {
            orderNo: '4-10-4-02',
            name: '特药处方录入审核',
            id: '4-10-4-02',
            url: 'N1804.html#/N180402?nodeNo=mbs-n180401-h-02'
          },
          {
            orderNo: '4-10-4-05',
            name: '特药处方撤销',
            id: '4-10-4-05',
            url: 'N1804.html#/N180405'
          },
          {
            orderNo: '4-10-4-06',
            name: '特药处方撤销审核',
            id: '4-10-4-06',
            url: 'N1804.html#/N180406?nodeNo=mbs-n180405-h-02'
          },
          {
            orderNo: '4-10-4-07',
            name: '特药处方查询',
            id: '4-10-4-07',
            url: 'N1804.html#/N180407'
          }
        ]
      },
      {
        orderNo: '4-10-5',
        name: '特药结算',
        id: '4-10-5',
        children: [
          {
            orderNo: '4-10-5-01',
            name: '特药结算(医药)',
            id: '4-10-5-01',
            url: 'N1805.html#/N180501'
          },
          {
            orderNo: '4-10-5-02',
            name: '特药结算撤销(医药)',
            id: '4-10-5-02',
            url: 'N1805.html#/N180502'
          },
          {
            orderNo: '4-10-5-03',
            name: '特药结算查询打印',
            id: '4-10-5-03',
            url: 'N1805.html#/N180503'
          },
          {
            orderNo: '4-10-5-04',
            name: '特药结算(中心)',
            id: '4-10-5-04',
            url: 'N1805.html#/N180504'
          },
          {
            orderNo: '4-10-5-05',
            name: '特药结算撤销(中心)',
            id: '4-10-5-05',
            url: 'N1805.html#/N180505'
          },
          {
            orderNo: '4-10-5-07',
            name: '特药结算明细查询(药店单日)',
            id: '4-10-5-07',
            url: 'N2305.html#/N230501'
          },
          {
            orderNo: '4-10-5-10',
            name: '特药结算明细查询(中心)',
            id: '4-10-5-10',
            url: 'N2305.html#/N230502'
          },
          {
            orderNo: '4-10-5-09',
            name: '卡介苗结算(医药)',
            id: '4-10-5-09',
            url: 'N1805.html#/N180507'
          },
          {
            orderNo: '4-10-5-08',
            name: '卡介苗结算(中心)',
            id: '4-10-5-08',
            url: 'N1805.html#/N180508'
          },
          {
            orderNo: '4-10-5-06',
            name: '人员特药综合查询',
            id: '4-10-5-06',
            url: 'N1805.html#/N180506'
          },
          {
            orderNo: '4-10-5-11',
            name: '门诊特殊疾病处方查询',
            id: '4-10-5-11',
            url: 'N2305.html#/N230503'
          }
        ]
      },
      {
        orderNo: '4-10-6',
        name: '特药医药机构月度结算',
        id: '4-10-6',
        children: [
          {
            orderNo: '4-10-6-01',
            name: '医药机构月结申报(本地)',
            id: 'N070214',
            url: 'N0702.html#/N070214'
          },
          {
            orderNo: '4-10-6-02',
            name: '特药城职对账',
            id: 'N070215',
            url: 'N0702.html#/N070215?personInsuType=310'
          },
          {
            orderNo: '4-10-6-03',
            name: '特药城乡对账',
            id: 'N0702016',
            url: 'N0702.html#/N070215?personInsuType=390'
          }
        ]
      }
    ]
  },
  {
    orderNo: '11-2-30',
    name: '国家小程序备案申请信息',
    id: '11-2-30',
    children: [
      {
        orderNo: '11-2-30-1',
        name: '备案申请信息审核',
        id: '11-2-30-1',
        url: 'N0402.html#/N040243?nodeNo=mbs-n040209cj-h02'
      }
    ]
  },
  {
    orderNo: '30',
    name: '异地清算管理',
    id: '30-1',
    children: [
      {
        orderNo: '30-1-1',
        name: '就医地清算拨付',
        id: '30-1-1',
        url: 'N0714.html#/N071401'
      },
      {
        orderNo: '30-1-2',
        name: '就医地清算明细查询',
        id: '30-1-2',
        url: 'N0714.html#/N071402'
      },
      {
        orderNo: '30-1-3',
        name: '参保地清算明细查询',
        id: '30-1-3',
        url: 'N0714.html#/N071403'
      },
      {
        orderNo: '30-1-4',
        name: '月清算明细下载',
        id: '30-1-4',
        url: 'N0714.html#/N071404'
      }
    ]
  },
  {
    orderNo: '20',
    name: '省平台备案数据手工上传',
    id: '20',
    children: [
      {
        orderNo: '20-1',
        name: '手工上传备案数据',
        id: '20-1',
        url: 'N0402.html#/N040244?nodeNo=mbs-n040209cj-h02'
      }
    ]
  },
  {
    orderNo: 4,
    name: '定点机构结算管理',
    id: '3',
    children: [
      {
        orderNo: 1,
        name: '医药机构月度结算',
        id: '3-1-2',
        children: [
          {
            orderNo: 1,
            name: '月结申报',
            id: 'N070201',
            url: 'N0702.html#/N070201'
          },
          {
            orderNo: 2,
            name: '受理-城职',
            id: 'N070202',
            url: 'N0702.html#/N070202?personInsuType=310'
          },
          {
            orderNo: 11,
            name: '受理-城乡',
            id: 'N0702011',
            url: 'N0702.html#/N070202?personInsuType=390'
          },
          {
            orderNo: 12,
            name: '受理-生育',
            id: 'N0702012',
            url: 'N0702.html#/N070202?personInsuType=510'
          },
          {
            orderNo: 15,
            name: '受理-离休',
            id: 'N0702015',
            url: 'N0702.html#/N070202?personInsuType=340'
          },
          {
            orderNo: 3,
            name: '审核结算-城职',
            id: 'N070203',
            url: 'N0702.html#/N070203?personInsuType=310'
          },
          {
            orderNo: 13,
            name: '审核结算-城乡',
            id: 'N0702013',
            url: 'N0702.html#/N070203?personInsuType=390'
          },
          {
            orderNo: 14,
            name: '审核结算-生育',
            id: 'N0702014',
            url: 'N0702.html#/N070203?personInsuType=510'
          },
          {
            orderNo: 16,
            name: '审核结算-离休',
            id: 'N0702016',
            url: 'N0702.html#/N070203?personInsuType=340'
          },
          {
            orderNo: 4,
            name: '*生成拨付单',
            id: 'N070204',
            url: 'N0702.html#/N070204'
          },
          {
            orderNo: 5,
            name: '总账对账',
            id: 'N070205',
            url: 'N0702.html#/N070205'
          },
          {
            orderNo: 6,
            name: '明细对账',
            id: 'N070206',
            url: 'N0702.html#/N070206'
          },
          {
            orderNo: 7,
            name: '医疗机构乡村卫生室清算申请',
            id: 'N070207',
            url: 'N0702.html#/N070207?nodeNo=mbs-n070207-h02'
          },
          {
            orderNo: 8,
            name: '拨付单打印',
            id: 'N070208',
            url: 'N0702.html#/N070208'
          },
          {
            orderNo: 9,
            name: '推送智能审核',
            id: 'N070211',
            url: 'N0702.html#/N070211'
          },
          {
            orderNo: 15,
            name: '初审',
            id: 'N070215',
            url: 'N0702.html#/N070212'
          },
          {
            orderNo: 16,
            name: '终审',
            id: 'N070216',
            url: 'N0702.html#/N070213'
          }
        ]
      },
      {
        orderNo: 3,
        name: '预留金（保证金）管理',
        id: 'N07-03',
        children: [
          {
            orderNo: 1,
            name: '预留金返还登记',
            id: 'N070301',
            url: 'N0703.html#/N070301'
          },
          {
            orderNo: 2,
            name: '预留金返还登记审核',
            id: 'N07030201',
            url: 'N0703.html#/N070302?nodeNo=mbs-n070301-h02'
          },
          {
            orderNo: 5,
            name: '生成拨付单',
            id: 'N070303',
            url: 'N0703.html#/N070303'
          },
          {
            orderNo: 6,
            name: '预留金返还撤销',
            id: 'N070304',
            url: 'N0703.html#/N070304?nodeNo=mbs-n070301-h02'
          },
          {
            orderNo: 7,
            name: '预留金扣款登记',
            id: 'N070305',
            url: 'N0703.html#/N070305?nodeNo=mbs-n070305-h02'
          },
          {
            orderNo: 8,
            name: '预留金扣款审核',
            id: 'N070306',
            url: 'N0703.html#/N070306?nodeNo=mbs-n070305-h02'
          },
          {
            orderNo: 9,
            name: '保证金预留比例维护',
            id: 'N070307',
            url: 'N0703.html#/N070307'
          },
          {
            orderNo: 10,
            name: '保证金预留比例审核',
            id: 'N070308',
            url: 'N0703.html#/N070308?nodeNo=mbs-n070307-h02'
          },
          {
            orderNo: 11,
            name: '预留金扣款撤销',
            id: 'N070309',
            url: 'N0703.html#/N070309'
          },
          {
            orderNo: 12,
            name: '预留金扣款撤销审核',
            id: 'N070310',
            url: 'N0703.html#/N070310?nodeNo=mbs-n070309-h02'
          }
        ]
      },
      {
        orderNo: 4,
        name: '年终清算管理',
        id: 'N07-04',
        children: [
          {
            orderNo: 1,
            name: '核定年终清算信息',
            id: 'N070401',
            url: 'N0704.html#/N070401?nodeNo=mbs-n070401-h01'
          },
          {
            orderNo: 2,
            name: '调整年终清算信息',
            id: 'N070402',
            url: 'N0704.html#/N070402'
          },
          {
            orderNo: 3,
            name: '审核年终清算信息',
            id: 'N070403',
            url: 'N0704.html#/N070403?nodeNo=mbs-n070403-h02'
          },
          {
            orderNo: 4,
            name: '生成拨付单',
            id: 'N070404',
            url: 'N0704.html#/N070404'
          },
          {
            orderNo: 5,
            name: '撤销年终清算信息',
            id: 'N070405',
            url: 'N0704.html#/N070405'
          },
          {
            orderNo: 6,
            name: '回退年终清算信息',
            id: 'N070406',
            url: 'N0704.html#/N070406'
          }
        ]
      },
      {
        orderNo: 2,
        name: '预付金管理',
        id: '3-2',
        children: [
          {
            orderNo: 1,
            name: '预付金核定',
            id: '3-2-1',
            url: 'N0705.html#/N070501?nodeNo=mbs-n070501-h02'
          },
          {
            orderNo: 2,
            name: '预付金审核',
            id: '3-2-2',
            url: 'N0705.html#/N070502?nodeNo=mbs-n070501-h02'
          },
          {
            orderNo: 3,
            name: '预付金撤销',
            id: '3-2-3',
            url: 'N0705.html#/N070503?nodeNo=mbs-n070503-h02'
          },
          {
            orderNo: 4,
            name: '预付金撤销审核',
            id: '3-2-4',
            url: 'N0705.html#/N070504?nodeNo=mbs-n070503-h02'
          },
          {
            orderNo: 5,
            name: '预付金收回',
            id: '3-2-5',
            url: 'N0705.html#/N070505?nodeNo=mbs-n070505-h02'
          },
          {
            orderNo: 6,
            name: '预付金收回审核',
            id: '3-2-6',
            url: 'N0705.html#/N070506?nodeNo=mbs-n070505-h02'
          },
          {
            orderNo: 7,
            name: '预付金收回撤销',
            id: '3-2-7',
            url: 'N0705.html#/N070507?nodeNo=mbs-n070507-h02'
          },
          {
            orderNo: 8,
            name: '预付金收回撤销审核',
            id: '3-2-8',
            url: 'N0705.html#/N070508?nodeNo=mbs-n070507-h02'
          }
        ]
      },
      {
        orderNo: 8,
        name: '年中拨付费用调整',
        id: '7-6',
        children: [
          {
            orderNo: 1,
            name: '年中拨付费用调整',
            id: '7-6-1',
            url: 'N0706.html#/N070601?nodeNo=mbs-n070601-h02'
          },
          {
            orderNo: 2,
            name: '年中拨付费用调整审核',
            id: '7-6-2',
            url: 'N0706.html#/N070602?nodeNo=mbs-n070601-h02'
          },
          {
            orderNo: 3,
            name: '年中拨付费用调整撤销',
            id: '7-6-3',
            url: 'N0706.html#/N070603?nodeNo=mbs-n070603-h02'
          },
          {
            orderNo: 4,
            name: '年中拨付费用调整撤销审核',
            id: '7-6-4',
            url: 'N0706.html#/N070604?nodeNo=mbs-n070603-h02'
          }
        ]
      },
      {
        orderNo: 5,
        name: '稽核审查扣款管理',
        id: '3-5',
        children: [
          {
            orderNo: 1,
            name: '稽核审查扣费',
            id: '3-5-1',
            url: 'N0708.html#/N070801?nodeNo=03'
          },
          {
            orderNo: 2,
            name: '稽核审查扣费审核',
            id: '3-5-2',
            url: 'N0708.html#/N070802?nodeNo=03'
          },
          {
            orderNo: 3,
            name: '稽核审查扣费撤销',
            id: '3-5-3',
            url: 'N0708.html#/N070803'
          },
          {
            orderNo: 4,
            name: '稽核审查扣费撤销审核',
            id: '3-5-4',
            url: 'N0708.html#/N070804?nodeNo=03'
          }
        ]
      },
      {
        orderNo: 6,
        name: '明细审核管理',
        id: '3-6',
        children: [
          {
            orderNo: 1,
            name: '明细审核扣费',
            id: '3-6-1',
            url: 'N0709.html#/N070901'
          },
          {
            orderNo: 2,
            name: '明细审核扣费审核',
            id: '3-6-2',
            url: 'N0709.html#/N070902?nodeNo=03'
          },
          {
            orderNo: 3,
            name: '明细审核扣费撤销',
            id: '3-6-3',
            url: 'N0709.html#/N070903'
          },
          {
            orderNo: 4,
            name: '明细审核扣费撤销审核',
            id: '3-6-4',
            url: 'N0709.html#/N070904?nodeNo=03'
          }
        ]
      },
      {
        orderNo: 7,
        name: '年度总控指标管理',
        id: '3-7',
        children: [
          {
            orderNo: 1,
            name: '年中总控指标新增',
            id: '3-7-01',
            url: 'N0707.html#/N070701?nodeNo=mbs-n070701-h02'
          },
          {
            orderNo: 2,
            name: '年中总控指标审核',
            id: '3-7-02',
            url: 'N0707.html#/N070702?nodeNo=mbs-n070701-h02'
          },
          {
            orderNo: 3,
            name: '年中总控指标撤销',
            id: '3-7-03',
            url: 'N0707.html#/N070703?nodeNo=mbs-n070703-h02'
          },
          {
            orderNo: 4,
            name: '年中总控指标撤销审核',
            id: '3-7-04',
            url: 'N0707.html#/N070704?nodeNo=mbs-n070703-h02'
          },
          {
            orderNo: 5,
            name: '年中总控指标调整',
            id: '3-7-05',
            url: 'N0707.html#/N070705?nodeNo=mbs-n070705-h02'
          },
          {
            orderNo: 4,
            name: '年中总控指标调整审核',
            id: '3-7-06',
            url: 'N0707.html#/N070706?nodeNo=mbs-n070705-h02'
          }
        ]
      },
      {
        orderNo: 10,
        name: '协议扣款管理',
        id: '3-10',
        children: [
          {
            orderNo: 1,
            name: '协议扣款',
            id: '3-10-1',
            url: 'N0710.html#/N071001'
          },
          {
            orderNo: 2,
            name: '协议扣款审核',
            id: '3-10-2',
            url: 'N0710.html#/N071002?nodeNo=mbs-n071001-h02'
          }
        ]
      },
      {
        orderNo: 12,
        name: '扣款返还管理',
        id: '3-12',
        children: [
          {
            orderNo: 1,
            name: '扣款返还登记',
            id: '3-12-1',
            url: 'N0712.html#/N071201?nodeNo=mbs-n071201-h02'
          },
          {
            orderNo: 2,
            name: '扣款返还登记审核',
            id: '3-12-2',
            url: 'N0712.html#/N071202?nodeNo=mbs-n071201-h02'
          },
          {
            orderNo: 3,
            name: '扣款返还撤销',
            id: '3-12-3',
            url: 'N0712.html#/N071203'
          },
          {
            orderNo: 4,
            name: '扣款返还撤销审核',
            id: '3-12-4',
            url: 'N0712.html#/N071204?nodeNo=mbs-n071203-h02'
          }
        ]
      },
      {
        orderNo: 13,
        name: '费用月预拨管理',
        id: '3-13',
        children: [
          {
            orderNo: 1,
            name: '月预付核定',
            id: '3-13-1',
            url: 'N0713.html#/N071301?nodeNo=mbs-n071301-h02'
          },
          {
            orderNo: 2,
            name: '月预付审核',
            id: '3-13-2',
            url: 'N0713.html#/N071302?nodeNo=mbs-n071301-h02'
          },
          {
            orderNo: 3,
            name: '月预付撤销',
            id: '3-13-3',
            url: 'N0713.html#/N071303'
          },
          {
            orderNo: 4,
            name: '月预付撤销审核',
            id: '3-13-4',
            url: 'N0713.html#/N071304?nodeNo=mbs-n071303-h02'
          }
        ]
      }
    ]
  },
  {
    orderNo: '888',
    name: '预留人员管理',
    id: '888',
    children: [
      {
        orderNo: '888-01',
        name: '*预留批次申请',
        id: '888-01',
        url: 'N1501.html#/N150101'
      }
    ]
  },
  {
    orderNo: '14',
    name: '综合查询',
    id: '14',
    children: [
      {
        orderNo: '14-11',
        name: '单位综合查询',
        id: '14-11',
        url: 'N1411.html#/N141101'
      },
      {
        orderNo: 'psnCommQuery-1',
        name: '人员综合查询',
        id: 'psnCommQuery-1',
        url: 'N1412.html#/N141201'
      },
      {
        orderNo: '14-00',
        name: '缴费核定定时任务情况查询',
        id: '14-00',
        url: 'N1400.html#/N140001'
      },
      {
        orderNo: '14-05',
        name: '*医疗个人信息查询',
        id: '14-05',
        url: 'N1405.html#/N140501'
      },
      {
        orderNo: '14-05-02',
        name: '个人在院信息撤销',
        id: '14-05-02',
        url: 'N1405.html#/N140502'
      },
      {
        orderNo: '14-06',
        name: '*定点医药信息查询',
        id: '14-06',
        url: 'N1406.html#/N140601'
      },
      {
        orderNo: '14-14',
        name: '*财务记账查询',
        id: '14-14',
        url: 'N1414.html#/N141401'
      },
      {
        orderNo: '14-07',
        name: '*结算信息查询',
        id: '14-07',
        url: 'N1407.html#/N140701'
      },
      {
        orderNo: '14-08',
        name: '*财务记账信息查询',
        id: '14-08',
        url: 'N1408.html#/N140801'
      },
      {
        orderNo: '14-13',
        name: '*定点医药机构综合查询',
        id: '14-13',
        children: [
          {
            orderNo: '14-13-01',
            name: '*定点医疗机构综合查询',
            id: '14-13-01',
            url: 'N1413.html#/N141301'
          },
          {
            orderNo: '14-13-02',
            name: '*定点零售药店综合查询',
            id: '14-13-02',
            url: 'N1413.html#/N141302'
          }
        ]
      },
      {
        orderNo: '14-15',
        name: '*待遇基础信息查询',
        id: '14-15',
        children: [
          {
            orderNo: '14-15-01',
            name: '*医保目录信息查询',
            id: '14-15-01',
            url: 'N1415.html#/N141501'
          },
          {
            orderNo: '14-15-02',
            name: '*医疗目录信息查询',
            id: '14-15-02',
            url: 'N1415.html#/N141502'
          },
          {
            orderNo: '14-15-03',
            name: '*医疗保障基金信息查询',
            id: '14-15-03',
            url: 'N1415.html#/N141503'
          },
          {
            orderNo: '14-15-04',
            name: '*医疗保障基金结算清单',
            id: '14-15-04',
            url: 'N1415.html#/N141504'
          }
        ]
      },
      {
        orderNo: '14-16',
        name: '*医疗待遇综合查询',
        id: '14-16',
        children: [
          {
            orderNo: '14-16-01',
            name: '*定点医药机构费用查询',
            id: '14-16-01',
            url: 'N1416.html#/N141601'
          },
          {
            orderNo: '14-16-02',
            name: '*在院信息查询',
            id: '14-16-02',
            url: 'N1416.html#/N141602'
          },
          {
            orderNo: '14-16-05',
            name: '*人员就医登记综合查询',
            id: '14-16-05',
            url: 'N1416.html#/N141605'
          },
          {
            orderNo: '14-16-06',
            name: '*零星报销综合查询',
            id: '14-16-06',
            url: 'N1416.html#/N141606?personInsuType=1'
          },
          {
            orderNo: '14-16-07',
            name: '*医院次均费用查询',
            id: '14-16-07',
            url: 'N1416.html#/N141607'
          }
        ]
      },
      {
        orderNo: '14-17',
        name: '定点协议综合查询',
        id: '14-17',
        url: 'N1417.html#/N141701'
      },
      {
        orderNo: '14-18',
        name: '转移进度查看',
        id: '14-18',
        url: 'N1418.html#/N141801'
      },
      {
        orderNo: '14-19',
        name: '对账信息查询',
        id: '14-19',
        url: 'N1419.html#/N141901'
      },
      {
        orderNo: '14-20',
        name: '查询缓存',
        id: '14-20',
        url: 'N1430.html#/N143001'
      },
      {
        orderNo: '14-26',
        name: '生育津贴查询',
        id: '14-26',
        url: 'matntrtmgt.html#/benefitsCheck'
      },
      {
        orderNo: '目录开展信息查询',
        name: '目录开展信息查询',
        id: 'N16',
        children: [
          {
            orderNo: '16-1',
            name: '门慢门特开展信息查询',
            id: '16-1',
            url: 'N1601.html#/N160101'
          },
          {
            orderNo: '16-2',
            name: '日间手术开展信息查询',
            id: '16-2',
            url: 'N1601.html#/N160102'
          },
          {
            orderNo: '16-3',
            name: '按病种结算开展信息查询',
            id: '16-3',
            url: 'N1601.html#/N160103'
          }
        ]
      },
      {
        orderNo: '审核监管查询',
        name: '审核监管查询',
        id: 'N17',
        children: [
          {
            orderNo: '17-1',
            name: '白名单人员查询',
            id: '17-1',
            url: 'N1601.html#/N160104'
          },
          {
            orderNo: '17-2',
            name: '个人暂停信息查询',
            id: '17-2',
            url: 'N1601.html#/N160105'
          }
        ]
      },
      {
        orderNo: '14-34',
        name: '个人年度累计信息查询',
        id: '14-34',
        url: 'N1434.html#/N143401'
      },
      {
        orderNo: '14-35',
        name: '清算信息综合查询',
        id: '14-35',
        url: 'N1435.html#/N143501'
      }
    ]
  },
  {
    orderNo: '15',
    name: '缓存数据管理',
    id: '15',
    children: [
      {
        orderNo: '15-01',
        name: '初始化数据管理',
        id: '15-01',
        url: 'trtDataCache.html#/initDataFresh'
      },
      {
        orderNo: '15-02',
        name: '定时刷新缓存',
        id: '15-02',
        url: 'trtDataCache.html#/autoRefresh'
      },
      {
        orderNo: '15-03',
        name: '字典缓存刷新',
        id: '15-03',
        url: 'reloadDataDic.html#/reloadDataDic'
      }
    ]
  },
  {
    orderNo: '1000-',
    name: '数据权限',
    id: '1000-',
    children: [
      {
        orderNo: '1000-1',
        name: '数据权限管理',
        id: '1000-1',
        url: 'dataPermission.html#/dataPermission'
      },
      {
        orderNo: '1000-2',
        name: '数据权限测试',
        id: '1000-2',
        url: 'dataPermission.html#/dataPermissionTest'
      }
    ]
  },
  {
    orderNo: 'test',
    name: '样例代码',
    id: 'test',
    children: [
      {
        orderNo: 'test01',
        name: '样例代码',
        id: 'test01',
        url: 'test.html#/test01'
      },
      {
        orderNo: 'company',
        name: '单位公用组件样例',
        id: 'company',
        url: 'test.html#/company'
      },
      {
        orderNo: 'companyInsu',
        name: '单位参保公用组件样例',
        id: 'companyInsu',
        url: 'test.html#/companyInsu'
      },
      {
        orderNo: 'medica',
        name: '医药公用组件样例',
        id: 'medica',
        url: 'test.html#/medica'
      },
      {
        orderNo: 'psn',
        name: '人员公用组件样例',
        id: 'psn',
        url: 'test.html#/psn'
      },
      {
        orderNo: 'psnInfo',
        name: '人员信息组件样例',
        id: 'psnInfo',
        url: 'test.html#/psnInfo'
      },
      {
        orderNo: 'bank',
        name: '银行公用组件样例',
        id: 'bank',
        url: 'test.html#/bank'
      },
      {
        orderNo: 'plcmedica',
        name: '政策中心：定点医药机构查询组件',
        id: 'plcmedica',
        url: 'test.html#/plcmedica'
      },
      {
        orderNo: 'uscmedica',
        name: '用户中心：定点医药机构查询组件',
        id: 'uscmedica',
        url: 'test.html#/uscmedica'
      },
      {
        orderNo: 'diag',
        name: '政策中心：疾病诊断查询组件',
        id: 'diag',
        url: 'test.html#/diag'
      },
      {
        orderNo: 'deptInfo',
        name: '用户中心：医疗机构科室信息查询组件',
        id: 'deptInfo',
        url: 'test.html#/deptInfo'
      },
      {
        orderNo: 'doctorInfo',
        name: '用户中心：医疗机构医护人员信息查询组件',
        id: 'doctorInfo',
        url: 'test.html#/doctorInfo'
      },
      {
        orderNo: 'medListInfo',
        name: '政策中心：“医疗”目录查询组件',
        id: 'medListInfo',
        url: 'test.html#/medListInfo'
      },
      {
        orderNo: 'testdemos',
        name: '样例',
        id: 'testdemos',
        url: 'test.html#/testdemos'
      },
      {
        orderNo: 'disease',
        name: '病种组件',
        id: 'disease',
        url: 'test.html#/disease'
      },
      {
        orderNo: 'runqianExam',
        name: '润乾打印按钮组件',
        id: 'runqianExam',
        url: 'test.html#/runqian'
      }
    ]
  },
  {
    orderNo: '100',
    name: '用于演示',
    id: '100',
    children: [
      {
        orderNo: '100-01',
        name: '演示一',
        id: '100-01',
        url: 'testDemo.html#/module'
      },
      {
        orderNo: '100-02',
        name: '演示二',
        id: '100-02',
        url: 'testDemo.html#/slotDemo'
      },
      {
        orderNo: '100-03',
        name: '演示三',
        id: '100-03',
        url: ''
      },
      {
        orderNo: '100-04',
        name: '表格公用列',
        id: '100-04',
        url: 'tableTest.html#/part'
      }
    ]
  },
  {
    orderNo: '8',
    name: '政策参数管理',
    id: '8',
    children: [
      {
        orderNo: '8-01',
        name: '系统参数管理',
        id: '8-01',
        url: 'N0801.html#/N080101'
      },
      {
        orderNo: '8-02',
        name: '医疗待遇参数管理',
        id: '8-02',
        url: 'N0802.html#/N080201'
      },
      {
        orderNo: '8-03',
        name: '月结算参数管理',
        id: '8-03',
        url: 'N0803.html#/N080301'
      },
      {
        orderNo: '8-04',
        name: '日间手术业务信息维护',
        id: '8-04',
        url: 'N0804.html#/N080401'
      },
      {
        orderNo: '8-05',
        name: '业务检查控制参数管理',
        id: '8-05',
        url: 'N0805.html#/N080501'
      }
    ]
  },
  {
    orderNo: '999',
    name: '门户接入测试',
    id: '999',
    children: [
      {
        orderNo: '999-1',
        name: '消息发送测试',
        id: '999-1',
        url: 'portalTest.html#/communication'
      },
      {
        orderNo: '999-2',
        name: '打开菜单测试',
        id: '999-2',
        url: 'portalTest.html#/menu'
      },
      {
        orderNo: '999-3',
        name: '智能推荐测试',
        id: '999-3',
        url: 'portalTest.html#/recommend'
      },
      {
        orderNo: '999-4',
        name: '模拟业务菜单',
        id: '999-4',
        url: 'portalTest.html#/mock'
      },
      {
        orderNo: '999-5',
        name: '模拟待办',
        id: '999-5',
        url: 'portalTest.html#/todolist'
      }
    ]
  },
  {
    orderNo: 'workflow-1',
    name: '工作流管理',
    id: 'workflow-1',
    children: [
      {
        orderNo: 'workflow-1',
        name: '待办任务',
        id: 'workflow-1',
        url: 'todotask.html#/todotask'
      },
      {
        orderNo: 'workflow-2',
        name: '代办任务详情',
        id: 'workflow-2',
        url: 'todotask.html#/common-daibanToWindow'
      }
    ]
  },
  {
    orderNo: '18-1',
    name: '医保凭证',
    id: '18',
    children: [
      {
        orderNo: '1',
        name: '医保凭证重置密码（城职）',
        id: '18-1',
        url: 'N1701.html#/N170101?personInsuType=1'
      },
      {
        orderNo: '2',
        name: '医保凭证重置密码（城乡）',
        id: '18-2',
        url: 'N1701.html#/N170101?personInsuType=2'
      }
    ]
  },
  {
    orderNo: '232-1',
    name: '全省医保信息系统单行支付和高值药品管理',
    id: '232',
    children: [
      {
        orderNo: '1',
        name: '特殊药品信息管理',
        id: '232-1',
        children: [
          {
            orderNo: '1',
            name: '特殊药品信息新增',
            id: '232-1-1',
            url: 'specialDrugMsg.html#/drugMsgAdd'
          },
          {
            orderNo: '2',
            name: '特殊药品信息审核',
            id: '232-1-2',
            url: 'specialDrugMsg.html#/drugMsgAudit'
          },
          {
            orderNo: '3',
            name: '特殊药品信息查询',
            id: '232-1-3',
            url: 'specialDrugMsg.html#/drugMsgQuery'
          }
        ]
      },
      {
        orderNo: '2',
        name: '认定机构信息管理',
        id: '232-2',
        children: [
          {
            orderNo: '1',
            name: '认定机构新增',
            id: '232-2-1',
            url: 'accreditOptinsManagement.html#/accreditOptinsAdd'
          },
          {
            orderNo: '2',
            name: '认定机构审核',
            id: '232-2-2',
            url: 'accreditOptinsManagement.html#/accreditOptinsAudit'
          },
          {
            orderNo: '3',
            name: '认定机构查询',
            id: '232-2-3',
            url: 'accreditOptinsManagement.html#/accreditOptinsQuery'
          }
        ]
      },
      {
        orderNo: '3',
        name: '责任医师信息管理',
        id: '232-3',
        children: [
          {
            orderNo: '1',
            name: '责任医师新增',
            id: '232-3-1',
            url: 'physicianInfoManagement.html#/physicianInfoManagementAdd'
          },
          {
            orderNo: '2',
            name: '责任医师状态变更',
            id: '232-3-2',
            url: 'physicianInfoManagement.html#/physicianInfoManagementUpdate'
          },
          {
            orderNo: '3',
            name: '责任医师审核',
            id: '232-3-3',
            url: 'physicianInfoManagement.html#/physicianInfoManagementAudit'
          },
          {
            orderNo: '4',
            name: '责任医师信息查询',
            id: '232-3-4',
            url: 'physicianInfoManagement.html#/physicianInfoManagementQuery'
          }
        ]
      },
      {
        orderNo: '6',
        name: '治疗方案管理',
        id: '232-6',
        children: [
          {
            orderNo: '1',
            name: '治疗方案新增',
            id: '232-6-1',
            url: 'patnTrtManagement.html#/patnTrtAdd'
          },
          {
            orderNo: '2',
            name: '治疗方案审核',
            id: '232-6-2',
            url: 'patnTrtManagement.html#/'
          },
          {
            orderNo: '3',
            name: '治疗方案查询',
            id: '232-6-3',
            url: 'patnTrtManagement.html#/'
          }
        ]
      }
    ]
  },
  {
    orderNo: '19',
    name: '阳光平台',
    id: '19',
    children: [
      {
        orderNo: '1',
        name: '医疗救助费用报销',
        id: '19-1',
        url: 'N1901.html#/N190101'
      },
      {
        orderNo: '2',
        name: '阳光平台提交上传补贴资格申报受理',
        id: '19-2',
        url: 'N1901.html#/N190102?steps=1'
      },
      {
        orderNo: '3',
        name: '阳光平台提交上传补贴资格审核',
        id: '19-3',
        url: 'N1901.html#/N190102?steps=2'
      },
      {
        orderNo: '4',
        name: '阳光平台提交上传补贴资格审批',
        id: '19-4',
        url: 'N1901.html#/N190102?steps=3'
      },
      {
        orderNo: '5',
        name: '阳光平台提交补贴发放申报数据',
        id: '19-5',
        url: 'N1901.html#/N190103'
      },
      {
        orderNo: '6',
        name: '附件上传',
        id: '19-6',
        url: 'N1901.html#/N190104'
      },
      {
        orderNo: '7',
        name: '阳光审核提交查询补贴发放业务员审核流程（查询功能）',
        id: '19-7',
        url: 'N1901.html#/N190105'
      }
    ]
  },
  {
    orderNo: 'N21-01',
    name: '省政务一体化',
    id: 'N21-01',
    children: [
      {
        orderNo: 'N21-01-01',
        name: '省政务一体化待遇报销类申请业务流程',
        id: 'N21-01-01',
        url: 'N2101.html#/N210101'
      }
    ]
  },
  {
    orderNo: 'N23',
    name: '其他待遇管理',
    id: 'N23',
    children: [
      {
        orderNo: 'N23-01',
        name: '疫苗接种管理',
        id: 'N23-01',
        children: [
          {
            orderNo: 'N23-01-01',
            name: '数据管理',
            id: 'N23-01-01',
            url: 'N2301.html#/N230101'
          },
          {
            orderNo: 'N23-01-08',
            name: '导入回退',
            id: 'N23-01-08',
            url: 'N2301.html#/N230108'
          },
          {
            orderNo: 'N23-01-02',
            name: '导入审核',
            id: 'N23-01-02',
            url: 'N2301.html#/N230102'
          },
          {
            orderNo: 'N23-01-09',
            name: '导入审核回退',
            id: 'N23-01-09',
            url: 'N2301.html#/N230109'
          },
          {
            orderNo: 'N23-01-03-01',
            name: '拨付(城职)',
            id: 'N23-01-03-01',
            url: 'N2301.html#/N230103?InsuType=310'
          },
          {
            orderNo: 'N23-01-03-02',
            name: '拨付(城乡)',
            id: 'N23-01-03-02',
            url: 'N2301.html#/N230103?InsuType=390'
          },
          {
            orderNo: 'N23-01-04-01',
            name: '拨付审核(城职)',
            id: 'N23-01-04-01',
            url: 'N2301.html#/N230104?InsuType=310'
          },
          {
            orderNo: 'N23-01-04-02',
            name: '拨付审核(城乡)',
            id: 'N23-01-04-02',
            url: 'N2301.html#/N230104?InsuType=390'
          },
          {
            orderNo: 'N23-01-07-01',
            name: '拨付补打(城职)',
            id: 'N23-01-07-01',
            url: 'N2301.html#/N230107?InsuType=310'
          },
          {
            orderNo: 'N23-01-07-02',
            name: '拨付补打(城乡)',
            id: 'N23-01-07-02',
            url: 'N2301.html#/N230107?InsuType=390'
          },
          {
            orderNo: 'N23-01-05-01',
            name: '拨付回退(城职)',
            id: 'N23-01-05-01',
            url: 'N2301.html#/N230105?InsuType=310'
          },
          {
            orderNo: 'N23-01-05-02',
            name: '拨付回退(城乡)',
            id: 'N23-01-05-02',
            url: 'N2301.html#/N230105?InsuType=390'
          },
          {
            orderNo: 'N23-01-06-01',
            name: '拨付回退审核(城职)',
            id: 'N23-01-06-01',
            url: 'N2301.html#/N230106?InsuType=310'
          },
          {
            orderNo: 'N23-01-06-02',
            name: '拨付回退审核(城乡)',
            id: 'N23-01-06-02',
            url: 'N2301.html#/N230106?InsuType=390'
          }
        ]
      },
      {
        orderNo: 'N23-03',
        name: '补充保险报销',
        id: 'N23-03',
        children: [
          {
            orderNo: 'N23-03-01',
            name: '报销登记',
            id: 'N23-03-01',
            url: 'N2303.html#/N230301?personInsuType=1'
          },
          {
            orderNo: 'N23-03-02',
            name: '登记回退',
            id: 'N23-03-02',
            url: 'N2303.html#/N230302?personInsuType=1'
          },
          {
            orderNo: 'N23-03-03',
            name: '明细录入',
            id: 'N23-03-03',
            url: 'N2303.html#/N230303?personInsuType=1'
          },
          {
            orderNo: 'N23-03-04',
            name: '明细录入回退',
            id: 'N23-03-04',
            url: 'N2303.html#/N230304?personInsuType=1'
          },
          {
            orderNo: 'N23-03-05',
            name: '结算',
            id: 'N23-03-05',
            url: 'N2303.html#/N230305?personInsuType=1'
          },
          {
            orderNo: 'N23-03-06',
            name: '结算回退',
            id: 'N23-03-06',
            url: 'N2303.html#/N230306?personInsuType=1'
          },
          {
            orderNo: 'N23-03-07',
            name: '结算审核',
            id: 'N23-03-07',
            url: 'N2303.html#/N230307?personInsuType=1'
          },
          {
            orderNo: 'N23-03-08',
            name: '结算审核回退',
            id: 'N23-03-08',
            url: 'N2303.html#/N230308?personInsuType=1'
          },
          {
            orderNo: 'N23-03-09',
            name: '结算单打印',
            id: 'N23-03-09',
            url: 'N2303.html#/N230309?personInsuType=1'
          }
        ]
      },
      {
        orderNo: 'N23-05',
        name: '补充保险保单信息维护',
        id: 'N23-05',
        children: [
          {
            orderNo: 'N23-03-10',
            name: '保单维护',
            id: 'N23-03-10',
            url: 'N2305.html#/N230505'
          },
          {
            orderNo: 'N23-03-11',
            name: '保单维护审核',
            id: 'N23-03-11',
            url: 'N2305.html#/N230506'
          },
          {
            orderNo: 'N23-03-12',
            name: '保单打印',
            id: 'N23-03-12',
            url: 'N2305.html#/N230507'
          }
        ]
      },
      {
        name: '生育登记',
        orderNo: 'N23-04',
        id: 'N23-04',
        children: [
          {
            orderNo: 'N23-04-01',
            name: '平均缴费基数',
            id: 'N23-04-01',
            url: 'N2404.html#/N240401'
          }
        ]
      },
      {
        name: '核酸检测拨付管理',
        orderNo: 'N23-07',
        id: 'N23-07',
        children: [
          {
            orderNo: 'N23-07-00',
            name: '城乡居民',
            id: 'N23-07-00',
            children: []
          },
          {
            orderNo: 'N23-07-01',
            name: '城镇职工',
            id: 'N23-07-01',
            children: [
              {
                orderNo: 'N23-07-01-01',
                name: '检测信息上传',
                id: 'N23-07-01-01',
                url: 'N230701.html#/N230701'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    orderNo: 'N24',
    name: '个人待遇管理(中心端)',
    id: 'N24',
    children: [
      {
        orderNo: 'N24-01',
        name: '人员就医登记管理',
        id: 'N24-01',
        children: [
          {
            orderNo: 'N24-01-01',
            name: '血透基础信息采集',
            id: 'N24-01-01',
            url: 'N2401.html#/N240101?hospitalCenter=1'
          },
          {
            orderNo: 'N24-01-02',
            name: '器官移植信息采集',
            id: 'N24-01-02',
            url: 'N2401.html#/N240102?hospitalCenter=1'
          },
          {
            orderNo: 'N24-01-03',
            name: '门诊特殊疾病(三病)管理',
            id: 'N24-01-03',
            url: 'N2401.html#/N240103?hospitalCenter=1'
          }
        ]
      }
    ]
  },
  {
    orderNo: 'N25',
    name: '个人待遇管理(医院端)',
    id: 'N25',
    children: [
      {
        orderNo: 'N25-01',
        name: '人员就医登记管理',
        id: 'N25-01',
        children: [
          {
            orderNo: 'N25-01-01',
            name: '血透基础信息采集',
            id: 'N25-01-01',
            url: 'N2401.html#/N240101?hospitalCenter=2'
          },
          {
            orderNo: 'N2501-02',
            name: '器官移植信息采集',
            id: 'N25-01-02',
            url: 'N2401.html#/N240102?hospitalCenter=2'
          },
          {
            orderNo: 'N25-01-03',
            name: '门诊特殊疾病(三病)管理',
            id: 'N25-01-03',
            url: 'N2401.html#/N240103?hospitalCenter=2'
          }
        ]
      }
    ]
  },
  {
    orderNo: 'N230509',
    name: '综合受理登记',
    id: 'N230509',
    children: [
      {
        orderNo: 'N23-05-09',
        name: '综合受理登记',
        id: 'N23-05-09',
        url: 'N2305.html#/N230509'
      },
      {
        orderNo: 'N23-05-10',
        name: '综合受理登记查询',
        id: 'N23-05-10',
        url: 'N2305.html#/N230510'
      }
    ]
  },
  {
    orderNo: 'N230511',
    name: '定点医药机构清算申请单打印',
    id: 'N230511',
    children: [
      {
        orderNo: 'N23-05-11',
        name: '城乡清算申请单打印',
        id: 'N23-05-11',
        url: 'N2305.html#/N230511?insutype=390'
      },
      {
        orderNo: 'N23-05-12',
        name: '城职清算申请单打印',
        id: 'N23-05-12',
        url: 'N2305.html#/N230511?insutype=310'
      }
    ]
  },
  {
    orderNo: 'N2306',
    name: '家庭医生签约置标',
    id: 'N2306',
    children: [
      {
        orderNo: 'N23-06-01',
        name: '医院批量导入置标',
        id: 'N23-06-01',
        url: 'N2306.html#/N230602'
      },
      {
        orderNo: 'N23-06-02',
        name: '置标查询',
        id: 'N23-06-02',
        url: 'N2306.html#/N230601'
      },
      {
        orderNo: 'N23-06-03',
        name: '置标回退',
        id: 'N23-06-03',
        url: 'N2306.html#/N230603'
      }
    ]
  },
  {
    orderNo: '14-36',
    name: '*登记信息查询',
    id: '14-36',
    url: 'N2305.html#/N230508?insutype=310'
  }
]
module.exports = menuConfig
