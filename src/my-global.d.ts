import Vue from 'vue';

// 来声明全局 property
declare module 'vue/types/vue' {
  interface Vue {
    // [key: string]: any;
  }
}

// 可以使用 `VueConstructor` 接口
declare module 'vue/types/vue' {
  interface VueConstructor {
    install?: any;
    options?: any;
    // [key: string]: any;
  }
}

// 组件选项
// ComponentOptions 声明于 types/options.d.ts 之中
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    // [key: string]: any;
  }
}
