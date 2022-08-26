<template>
  <section :class="{ 'pb-0': data.bGColor == 'noBottomSpace' }">
    <div>
      <div class="container">
        <div>
          <div class="flex flex-wrap -mx-4">
            <div
              class="
                w-full
                lg:w-1/2
                px-4
                order-2
                lg:order-1
                lg:text-left
                mb-24
              "
            >
              <!-- <h3 class="bg-graident">90+ Core Web Vitals Score</h3> -->
              <h1 class="w-full lg:w-10/12 mt-10" v-html="toGradient"></h1>
              <div class="w-full lg:w-9/12" v-html="data.longText"></div>
              <!-- <  div class="btnStructure primary-gradient justify-center mt-4" v-html="$md.render(data.cTA ? data.cTA : '')"></> -->
              <tez-link
                to="/introduction"
                class="btnStructure border-gradient justify-center mt-4"
                >Getting Started</tez-link
              >
            </div>
            <div
              class="
                w-full
                lg:w-1/2
                px-4
                mb-4
                lg:mb-0
                order-1
                lg:order-2
                text-center
                mt-5
                lg:mt-32
              "
            >
              <img
                class="mb-7 lg:mt-0 max-w-full h-auto mx-auto"
                v-tez-src="data.image.url"
                :width="data.image.width"
                :height="data.image.height"
                :alt="data.image.alternativeText"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import titleGradient from "../mixins/titleGradient.mixin";
export default {
  mixins: [titleGradient],
  props: {
    data: Object,
  },
};
</script>

<style>
html h1 {
  font-size: 2.5rem;
}
html h2 {
  font-size: 1.875rem;
}
</style>