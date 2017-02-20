<template>
  <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
    <div class="panel panel-default" v-for="(item,index) in options">
      <div class="panel-heading" role="tab" :id="`heading_${index}`">
        <h4 class="panel-title">
          <a role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="false" :href="`#collapse_${index}`" :aria-controls="`collapse_${index}`" class="collapsed">
            {{ item.title }}
          </a>
        </h4>
      </div>
      <div :id="`collapse_${index}`" class="panel-collapse collapse" role="tabpanel" :aria-labelledby="`heading_${index}`" aria-expanded="false">
        <div class="panel-body">
          {{ item.context }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VueCollapse',
    props: {
      options: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style scoped lang="scss">
@import '../style/collapse.scss';
</style>
