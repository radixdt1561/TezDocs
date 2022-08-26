<template lang="">
  <div  class="sticky top-[114px] overflow-y-auto py-3 mt-5 w-100 sidebar-sticky">
  <h3 class="h5">On this page</h3>
        <span class="wrapper" v-html="$md.render(h2tag.cTA ? h2tag.cTA : '')"></span>
  </div>
</template>

<script>
export default {
  props: {
    h2tag: Object,
  },
};
</script>

<style scoped >

</style>