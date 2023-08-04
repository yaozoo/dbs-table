<!--
 * @Author: luyao
 * @Date: 2023-08-02 14:03:09
 * @LastEditTime: 2023-08-04 16:13:42
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /dbs-table/README.md
-->

# dbs-table

基于 vue3+elementPlus 二次开发的表格（实际项目中用了两年半了）

### 环境

```
vue3 、 elementPlus
```

### 使用说明

```
// 安装依赖
npm i dbs-table  -D

// main.js 引入

import dbsTable from "dbs-table";

let app = createApp(App);
app.use(dbsTable);
app.mount("#app");



<script setup lang="ts">
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

let columns = [
  {
    title: "date",
    key: "date",
    minWidth: 80,
  },
  {
    title: "name",
    key: "name",
    minWidth: 80,
  },
  {
    title: "address",
    key: "address",
    minWidth: 80,
  },
];
</script>

<template>
  <dbsTable :data="tableData" :columns="columns" />
</template>


```

# 组件名称

## Props

| Prop 名称              | 类型            | 默认值                                                                                                  | 说明                                        |
| ---------------------- | --------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| tableName              | String          |                                                                                                         | 表格名称                                    |
| columns                | Array           | `[]`                                                                                                    | 表头数据，包含文案、绑定值和特殊处理的 slot |
| data                   | Array           | `[]`                                                                                                    | 数据                                        |
| totalNum               | Number          | `0`                                                                                                     | 总条数                                      |
| pageNum                | Number          | `1`                                                                                                     | 当前页                                      |
| pageSize               | Number          | `20`                                                                                                    | 每页数量                                    |
| loading                | Boolean         |                                                                                                         | 是否开启 loading                            |
| configFlag             | Object          | `{ needPage: true, selection: false, index: false, border: true, tableAlign: 'left', indexName: null }` | 其他 table 配置                             |
| needPage               | Boolean         | `true`                                                                                                  | 是否需要分页                                |
| needIndex              | Boolean         | `false`                                                                                                 | 是否需要 index                              |
| autoHeight             | Boolean         | `false`                                                                                                 | 是否需要自适应屏幕高度                      |
| tableHeight            | String          |                                                                                                         | 表格高度                                    |
| tableMaxHeight         | String          |                                                                                                         | 表格最大高度                                |
| headerCellStyle        | Object          | `{ color: 'white', backgroundColor: '#999' }`                                                           | header 头部单元格样式                       |
| cellStyle              | Function/Object | `{ color: '', backgroundColor: '' }`                                                                    | body 单元格样式                             |
| highlightCurrentRow    | Boolean         | `true`                                                                                                  | 行是否高亮                                  |
| selecTableFun          | Function        | `() => true`                                                                                            | 选中函数                                    |
| objectSpanMethod       | Function        | `() => true`                                                                                            | 单元格点击函数                              |
| key                    | String          |                                                                                                         | key 字段                                    |
| rowKey                 | String          |                                                                                                         | 行 key 字段                                 |
| tableRowClassName      | Function        |                                                                                                         | table class                                 |
| dragRow                | Boolean         | `false`                                                                                                 | 是否开启拖拽行为                            |
| cusClass               | String          |                                                                                                         | 自定义行 class                              |
| dragBtn                | String          |                                                                                                         | 拖拽句柄                                    |
| excludeDownloadColumns | Array           | `['', '操作', '图片']`                                                                                  | 前端下载表格时需要过滤掉的列                |
