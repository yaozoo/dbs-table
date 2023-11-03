<!--
 * @Author: 鲁遥
 * @Date: 2021-04-07 10:32:08
 * @LastEditTime: 2023-11-03 11:43:13
 * @LastEditors: luyao
 * @Description: 
 * @FilePath: /dbs-table/src/views/dbsTable/dbsTable.vue
-->

<template>
  <el-config-provider :locale="zhCn">
    <div class="PublicTable">
      <!-- 主题el-table一些设置表头可根据情况添加 -->
      <el-table
        :id="tableId"
        v-loading="loading"
        ref="tableRef"
        class="dbs-table"
        :class="[cusClass]"
        style="width: 100%"
        :border="configFlag.border"
        :header-cell-style="headerCellStyle"
        :cell-style="cellStyle"
        :data="data"
        :max-height="tableMaxHeight"
        :height="tableHeight"
        :highlight-current-row="highlightCurrentRow"
        :current-row-key="-1"
        @sort-change="sortChange"
        @current-change="handleCurrentChange"
        @selection-change="handleSelectionChange"
        @cell-click="cellClickFun"
        @row-dblclick="rowDblclickFun"
        :span-method="objectSpanMethod"
        :row-class-name="tableRowClassName"
        :row-key="rowKey"
        @header-contextmenu="handleRightClick"
      >
        <!--    :key="key" -->
        <!-- 全选单选 -->
        <!--  :align="configFlag.tableAlign" -->
        <el-table-column
          v-if="configFlag.selection"
          :selectable="selecTableFun"
          width="40"
          type="selection"
          label="Selection"
          fixed="left"
        />
        <!-- 序号列 -->
        <!--  :align="configFlag.tableAlign" -->
        <el-table-column
          v-if="needIndex || configFlag.index"
          width="35"
          type="index"
          :index="1"
          :label="(!!configFlag.indexName && configFlag.indexName) || '序号'"
        />

        <!-- 循环遍历表头展示数据 -->
        <!-- v-for="item in col" :key="item.label" :col="item" -->
        <ColumnItem
          v-for="(item, columnIndex) in columns"
          :item="item"
          :columnIndex="columnIndex.toString()"
        >
          <template v-for="slot in Object.keys(slots)" #[slot]="scope">
            <slot :name="slot" v-bind="scope"></slot>
          </template>
        </ColumnItem>
      </el-table>

      <!-- :hide-on-single-page="true" -->
      <!--  v-model:currentPage="pageNum" -->
      <el-pagination
        background
        class="el-pagination"
        v-if="needPage"
        :total="Number(totalNum)"
        :current-page="Number(pageNum)"
        :page-sizes="[10, 20, 30, 50, 100, 500]"
        :page-size="Number(pageSize)"
        layout="total,sizes, prev, pager, next"
        @size-change="sizeChange"
        @current-change="currentChange"
        small
      />

      <div
        v-if="contextMenuVisible"
        class="context-menu"
        v-has-authority="'upload_excel'"
        :style="contextMenuStyle"
      >
        <div class="context-menu-option" @click="exportExcelFun">
          导出为excel
        </div>
      </div>
    </div>
  </el-config-provider>
</template>

<script lang="ts" setup>
import SortableJs from "sortablejs";
import { onMounted, ref, computed, useSlots, watch } from "vue";
import ColumnItem from "./columnItem.vue";
import { exportExcel } from "eltable-as-xlsx";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

let props = defineProps({
  // 表格名称
  tableName: {
    type: String,
  },
  columns: {
    // 表头数据  文案和绑定值，以及需要特殊处理的slot
    type: Array,
    default: () => [],
  },

  // 数据
  data: {
    type: Array,
    default: () => [],
  },
  // 总条数
  totalNum: {
    type: Number || String,
    default: () => 0,
  },
  //当前页
  pageNum: {
    type: Number || String,
    default: () => 1,
  },
  // 每页数量
  pageSize: {
    type: Number || String,
    default: () => 20,
  },
  // 是否开启loading
  loading: {
    type: Boolean,
  },

  //其他table配置依次添加
  configFlag: {
    type: Object,
    default: () => {
      return {
        needPage: true, // 是否需要分页
        selection: false, // 是否需要多选
        index: false, // 是否需要序号
        border: true,
        tableAlign: "left",
        indexName: null,
      };
    },
  },
  // 是否需要分页
  needPage: {
    type: Boolean,
    default: true,
  },
  // 是否需要index
  needIndex: {
    type: Boolean,
    default: false,
  },
  // 是否需要自适应屏幕高度
  autoHeight: {
    type: Boolean,
    default: false,
  },
  tableHeight: {
    // 可以监听屏幕高度获取。
    // 高度
    type: String,
    // default: () => "100%",
  },
  tableMaxHeight: {
    // 可以监听屏幕高度获取。
    // 高度
    type: String,
    // default: () => "100%",
  },
  // header头部单元格样式
  headerCellStyle: {
    type: Object,
    default: () => {
      return {
        color: "white",
        backgroundColor: "#999",
      };
    },
  },
  // body单元格样式
  cellStyle: {
    type: Function || Object,
    default: () => {
      return {
        color: "",
        backgroundColor: "",
        // lineHeight: "18px",
      };
    },
  },
  // 行是否高亮
  highlightCurrentRow: {
    type: Boolean,
    default: true,
  },
  // 选中函数
  selecTableFun: {
    type: Function,
    default: () => {
      return true;
    },
  },
  // 单元格点击函数
  objectSpanMethod: {
    type: Function,
    default: () => {
      return true;
    },
  },
  key: {
    type: String,
    default: () => {
      return "";
    },
  },
  rowKey: {
    type: String,
    default: () => {
      return "";
    },
  },
  // table class
  tableRowClassName: {
    type: Function,
  },
  // 是否开启拖拽行为
  dragRow: {
    type: Boolean,
    default: false,
  },
  // 自定义行class
  cusClass: {
    type: String,
    default: () => {
      return "";
    },
  },
  // 拖拽句柄
  dragBtn: {
    type: String,
    default: () => {
      return "";
    },
  },
  // 前端下载表格的时候要过滤掉的列
  excludeDownloadColumns: {
    type: Array, // 后台数据
    default: () => ["", "操作", "图片"],
  },
});
let slots = useSlots();
let emit = defineEmits([
  "getTableRef",
  "handlePageChange",
  "handleSelectionChange",
  "handleSortChange",
  "handleCurrentChange",
  "cellClick",
  "rowDblclick",
  "dragChangeData",
]);

const tableRef: any = ref(null);
let t: any = Number(Math?.random() * 100000).toFixed(0);
const tableId: any = ref(`table_${t}`);
let sortable: any = "";
let tableHeight: any = ref(props.tableHeight);
let columns: any = ref(computed(() => props.columns));
emit("getTableRef", tableRef);
// 设置条数
function sizeChange(pageSize: any) {
  console.log("设置条数:", pageSize);
  emit("handlePageChange", { pageSize: pageSize });
}

// 翻页
function currentChange(pageNum: any) {
  console.log("翻页:", pageNum);
  emit("handlePageChange", { pageNum: pageNum });
}
function handleCurrentChange(row: any) {
  emit("handleCurrentChange", row);
}

// 多选
function handleSelectionChange(rows: any) {
  emit("handleSelectionChange", rows);
}
// 排序
function sortChange(item: { order: string; prop: string }) {
  emit("handleSortChange", { order: item.order, prop: item.prop });
}
// 点击单元格
function cellClickFun(row: any, column: any) {
  emit("cellClick", row, column);
}

function rowDblclickFun(row: any, column: any, event: any) {
  emit("rowDblclick", row, column, event);
}
function setHeight() {
  setTimeout(() => {
    let dom = document.querySelector(".dbs-table");
    if (dom) {
      let th = window.innerHeight - dom?.getBoundingClientRect().top - 40;
      tableHeight.value = th;
    }
  }, 500);
}
function rowDrop() {
  let tbody: any = "";
  let dragData: any = [];
  if (props.cusClass) {
    tbody = document.querySelector(
      `.${props.cusClass} .el-table__body-wrapper tbody`
    );
  } else {
    tbody = document.querySelector(`.el-table__body-wrapper tbody`);
  }
  dragData = props.data;
  sortable = SortableJs.create(tbody, {
    animation: 150,
    handle: props.dragBtn,
    onEnd({ newIndex, oldIndex }: any) {
      let currRow = dragData.splice(oldIndex, 1)[0];
      dragData.splice(newIndex, 0, currRow);
      emit("dragChangeData", dragData);
    },
  });
}

const contextMenuVisible = ref(false);
const contextMenuStyle = ref({
  left: "0",
  top: "0",
});

function handleRightClick(column: any, event: any) {
  event.preventDefault();
  // 获取鼠标位置
  let x = event.pageX;
  let y = event.pageY;
  contextMenuVisible.value = true;
  contextMenuStyle.value = {
    left: `${x}px`,
    top: `${y}px`,
  };
  setTimeout(() => {
    contextMenuVisible.value = false;
  }, 3000);
}

function exportExcelFun() {
  let columns = JSON.parse(JSON.stringify(props.columns));

  exportExcel({
    id: tableId.value,
    fileName: props.tableName || `file-${new Date().getTime()}`,
    columns: columns,
    excludeColumns: props.excludeDownloadColumns,
  });

  contextMenuVisible.value = false;
}

watch(
  () => props.data,
  (val: any, oldval: any) => {
    JSON.stringify(val) != JSON.stringify(oldval) &&
      !props.tableMaxHeight &&
      props.autoHeight &&
      setHeight();
  }
);
onMounted(() => {
  !props.tableMaxHeight && props.autoHeight && setHeight();
  window.addEventListener("resize", (e) => {
    !props.tableMaxHeight && props.autoHeight && setHeight();
  });
  props.dragRow && rowDrop();
});
</script>

<style lang="less" scoped>
.PublicTable {
  size: 12px;
  overflow: hidden;
}
.el-pagination {
  margin-top: 0px;
  background: #fff;
  padding: 3px 0;
  float: right;
  width: 100%;
  justify-content: flex-end;
}

.dbs-table {
  transition: height 0.3s;
  &:deep(.el-checkbox.el-checkbox--mini) {
    height: 18px;
  }
}

.context-menu {
  position: fixed;

  background-color: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  z-index: 999;
  border: 1px solid #ccc;
}

.context-menu-option {
  padding: 4px 15px;
  white-space: nowrap;
  cursor: pointer;
  font-size: 12px;
}

.context-menu-option:hover {
  background-color: #f5f5f5;
}
</style>
