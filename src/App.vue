<script setup lang="ts">
import dbsTable from "./views/dbsTable/dbsTable.vue";
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
    title: "工艺难度",
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
