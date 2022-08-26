<template lang="">
  <div class="flex flex-warp justify-between">
    <div>
      <div v-if="currentIndex > 0">
        <img
          class="inline"
          style=" transform: rotate(180deg); background-image: url(/assets/images/arrow.svg);"
          v-tez-src="'/assets/images/arrow.svg'"
          width="28"
          height="20"
          alt="Explore More"
        />
        <h2   
          class="inline text-2xl customContent no-underline text-[#00b5d5] hover:text-[#63bd5e] ml-3 hover:ml-4 hover:ease-in-out hover:duration-300 cursor-pointer"
          @click="handleBack()"
        >
          Previous  
        </h2>
        
      </div>
    </div>
    <div>
      <div  v-if="currentIndex < 10">
        <h2  
          class="inline text-2xl customContent no-underline text-[#00b5d5] hover:text-[#63bd5e] mr-3 hover:mr-4 hover:ease-in-out hover:duration-300 cursor-pointer"
          @click="handleNext()"
        >
          Next
        </h2>
        <img
          class="inline"
          v-tez-src="'/assets/images/arrow.svg'"
          width="28"
          height="20"
          alt="Explore More"
        />
    
      </div>
    </div>
  </div>
</template>


<script>
import routes from '../enums/routeEnums'
export default {
  data() {
    return {
      currentIndex:0,
      routesNames : routes.routes
    };
  },
  mounted: function(){
    this.setIndex();
  },
  methods: {
    setIndex(){
      this.currentIndex = this.routesNames.find((x) => x.url == this.$tezRouter.currentUrl)?.index;
    },
    getUrl(){
      var route = this.routesNames.find((x) => x.index == this.currentIndex).url;
      this.$tezRouter.push(route);
    },
    handleNext() {
      this.currentIndex++;
      this.getUrl();
    },
    handleBack() {
      this.currentIndex--;
      this.getUrl();
    },
  },
};
</script>
<style lang=""></style>
