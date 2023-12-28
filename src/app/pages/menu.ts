export default function (values: any) {
  return [
    {
      title: values['SalesManagement']['title'],
      children: [
        {
          title: values['SalesManagement']['SalesWorkbench'],
          link: '/pages/dashboard/analysis',
        },
        {
          title: values['SalesManagement']['SalesQuotations'],
          link: '/pages/dashboard/monitor',
        },
        {
          title: values['SalesManagement']['SalesOrders'],
          link: '/pages/dashboard/workspace',
        },
        {
          title: values['SalesManagement']['预发货清单'],
          link: '/pages/dashboard/workspace',
        },
        {
          title: values['SalesManagement']['销售发货单'],
          link: '/pages/dashboard/workspace',
        },
        {
          title: values['SalesManagement']['销售退货单'],
          link: '/pages/dashboard/workspace',
        },
        {
          title: values['SalesManagement']['销售汇总表'],
          link: '/pages/dashboard/workspace',
        },
        {
          title: values['SalesManagement']['销售出库明细表'],
          link: '/pages/dashboard/workspace',
        },
        {
          title: values['SalesManagement']['销售订单统计表'],
          link: '/pages/dashboard/workspace',
        },
        {
          title: values['SalesManagement']['车间销售订单统计'],
          link: '/pages/dashboard/workspace',
        }
      ],
      link: '/pages/dashboard',
      menuIcon: 'icon icon-date',
    },
    {
      title: values['ProcuredManagement']['title'],
      children: [
        {
          title: values['ProcuredManagement']['采购工作台'],
          link: '/pages/form/basic-form',
        },
        {
          title: values['ProcuredManagement']['采购订单'],
          link: '/pages/form/form-layout',
        },
        {
          title: values['ProcuredManagement']['采购到货单'],
          link: '/pages/form/advanced-form',
        },
        {
          title: values['ProcuredManagement']['采购需求'],
          link: '/pages/form/dynamic-form',
        },
        {
          title: values['ProcuredManagement']['采购退货单'],
          link: '/pages/form/dynamic-form',
        },
        {
          title: values['ProcuredManagement']['采购明细表'],
          link: '/pages/form/dynamic-form',
        },
        {
          title: values['ProcuredManagement']['采购进度表'],
          link: '/pages/form/dynamic-form',
        },
        {
          title: values['ProcuredManagement']['采购统计表'],
          link: '/pages/form/dynamic-form',
        },
        {
          title: values['ProcuredManagement']['采购入库统计表'],
          link: '/pages/form/dynamic-form',
        },
      ],
      link: '/pages/form',
      menuIcon: 'icon icon-marketplace',
    },
    {
      title: values['生产管理']['title'],
      children: [

        { title: values['生产管理']['生产工作台'], link: '/pages/list/card' },
        {
          title: values['生产管理']['生产需求'],
          link: '/pages/list/editable',
        },
        { title: values['生产管理']['生产计划'], link: '/pages/list/advance' },
        { title: values['生产管理']['生产计划单'], link: '/pages/list/tree' },
        { title: values['生产管理']['设备排产'], link: '/pages/list/tree' },
        { title: values['生产管理']['生产任务单'], link: '/pages/list/tree' },
        { title: values['生产管理']['任务派发'], link: '/pages/list/tree' },
        { title: values['生产管理']['派工任务单'], link: '/pages/list/tree' },
        { title: values['生产管理']['生产报工单'], link: '/pages/list/tree' },
        { title: values['生产管理']['委外公司'], link: '/pages/list/tree' },
        { title: values['生产管理']['委外单'], link: '/pages/list/tree' },
        { title: values['生产管理']['委外返工单'], link: '/pages/list/tree' },
        { title: values['生产管理']['返修单'], link: '/pages/list/tree' },
        { title: values['生产管理']['我的返修单'], link: '/pages/list/tree' },
        { title: values['生产管理']['设备排产报表'], link: '/pages/list/tree' },
        { title: values['生产管理']['产品追溯报表'], link: '/pages/list/tree' },
        { title: values['生产管理']['报工汇总报表'], link: '/pages/list/tree' },
        { title: values['生产管理']['委外单报表'], link: '/pages/list/tree' },
      ],
      link: '/pages/list',
      menuIcon: 'icon icon-table',
    },
    {
      title: values['工艺管理']['title'],
      children: [
        { title: values['工艺管理'][403], link: '/pages/abnormal/abnormal403' },
        { title: values['工艺管理'][404], link: '/pages/abnormal/abnormal404' },
        { title: values['工艺管理'][500], link: '/pages/abnormal/abnormal500' },
      ],
      link: '/pages/abnormal',
      menuIcon: 'icon icon-connection-relate',
    },
    {
      title: values['质量管理']['title'],
      children: [
        { title: values['质量管理']['质量工作台'], link: '/pages/user/center' },
        { title: values['质量管理']['检验项目'], link: '/pages/user/settings' },
        { title: values['质量管理']['检验模板'], link: '/pages/user/settings' },
        { title: values['质量管理']['采购入库检验'], link: '/pages/user/settings' },
        { title: values['质量管理']['销售发货检验'], link: '/pages/user/settings' },
        { title: values['质量管理']['成品返修检验'], link: '/pages/user/settings' },
        { title: values['质量管理']['生产过程检验'], link: '/pages/user/settings' },
        { title: values['质量管理']['不良分析报表'], link: '/pages/user/settings' },

      ],
      link: '/pages/user',
      menuIcon: 'icon icon-classroom-post-results-large',
    },
    {
      title: values['仓库管理']['title'],
      children: [
        { title: values['仓库管理']['仓库工作台'] },
        { title: values['仓库管理']['采购入库'] },
        { title: values['仓库管理']['生产入库'] },
        { title: values['仓库管理']['其他入库'] },
        { title: values['仓库管理']['初期入库'] },
        { title: values['仓库管理']['销售退货入库'] },
        { title: values['仓库管理']['成品返修入库'] },
        { title: values['仓库管理']['销售出库'] },
        { title: values['仓库管理']['生产领料出库'] },
        { title: values['仓库管理']['其他出库'] },
        { title: values['仓库管理']['采购退货出库'] },
        { title: values['仓库管理']['库存报废'] },
        { title: values['仓库管理']['库存预警'] },
        { title: values['仓库管理']['库存盘点'] },
        { title: values['仓库管理']['库存明细'] },
        { title: values['仓库管理']['实时库存'] },
        { title: values['仓库管理']['库存转移'] },
        { title: values['仓库管理']['库存出入库表'] },
        { title: values['仓库管理']['库存分析表'] },
        { title: values['仓库管理']['库位库存表'] },
        { title: values['仓库管理']['库存变动汇总表'] },
        { title: values['仓库管理']['安全库存分析'] },
        { title: values['仓库管理']['库存明细表'] },
      ],
      menuIcon:'icon icon-homepage'
    },
    {
      title: values['财务管理']['title'],
      children: [
        { title: values['财务管理']['center'] },
      ],
      menuIcon:'icon icon-identity-auth'
    },
    {
      title: values['看板管理']['title'],
      children: [
        { title: values['看板管理']['总看板'] },
      ],
      menuIcon:'icon icon-line-chart'
    },
    {
      title: values['设备管理']['title'],
      children: [
        { title: values['设备管理']['center'] },
      ],
      menuIcon:'icon icon-scan-focus'
    },
    {
      title: values['工装夹具']['title'],
      children: [
        { title: values['工装夹具']['center'] },
      ],
      menuIcon:'icon icon-infrastructure'
    },
    {
      title: values['研发管理']['title'],
      children: [
        { title: values['研发管理']['center'] },
      ],
      menuIcon:'icon icon-accelerations'
    },
    {
      title: values['基础数据']['title'],
      children: [
        { title: values['基础数据']['center'] },
      ],
      menuIcon:'icon icon-operation-log'
    },
    {
      title: values['系统设置']['title'],
      children: [
        {
          title: values['系统设置']['编码规则'],
          link:'/pages/systemset/Encoding-Rules'
        },
        {
          title: values['系统设置']['字典管理'],
          link:'/pages/systemset/Dirctory'
        },
      ],
      link: '/pages/systemset',
      menuIcon:'icon icon-setting'
    },
  ];
}
