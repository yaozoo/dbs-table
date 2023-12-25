import dbsTable from "./views/dbsTable/dbsTable.vue";
import { App } from "vue";

export default {
  install: (app: App) => {
    app.component("dbsTable", dbsTable);
  },
};
