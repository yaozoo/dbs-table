/*
 * @Author: luyao
 * @Date: 2022-12-09 15:42:38
 * @LastEditTime: 2023-08-04 14:32:48
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /dbsTable/src/index.ts
 */
import dbsTable from "./views/dbsTable/dbsTable.vue";
import { App } from "vue";

export default {
  install: (app: App) => {
    app.component("dbsTable", dbsTable);
  },
};
