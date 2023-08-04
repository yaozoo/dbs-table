/*
 * @Author: luyao
 * @Date: 2022-01-07 11:55:31
 * @LastEditTime: 2023-07-28 16:38:26
 * @Description:
 * @LastEditors: luyao
 * @FilePath: /bom-info-comp/src/shims-vue.d.ts
 */

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 忽略类型检查

declare module "*";
