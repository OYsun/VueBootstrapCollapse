# VueBootstrapCollapse
面试题

- 用Bootstrap的样式和js写一个vue的collapse的组件
- 使用scss添加了一下自己修改的样式

# demo

http://web-oysun.cn/VueBootstrapCollapse

# 使用

```javascript
<template>
  <div id="app">
    <collapsed :options='CollapseData'></collapsed>
  </div>
</template>

<script>
import collapsed from './components/VueCollapse.vue'
export default {
  name: 'app',
  data () {
    return {
      CollapseData: [
        { title: '第一', context: '第一栏的相关信息' },
        { title: '第二', context: '第二栏的相关信息' },
        { title: '第三', context: '第三栏的相关信息' }
      ]
    }
  },
  components: {
    collapsed
  }
}
</script>

```
