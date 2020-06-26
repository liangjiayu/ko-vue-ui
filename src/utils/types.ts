import Vue, { VueConstructor } from 'vue';

/**
 *  插入类型 暂用于 inject 的数据问题
 * @param vue
 * @example
 *  insertType<types,Vue>(Vue)
 */
export function insertType<T, V extends Vue>(v: VueConstructor) {
  return v as VueConstructor<V & T>;
}
