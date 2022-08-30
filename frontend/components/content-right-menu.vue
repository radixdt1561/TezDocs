<template>
  <fragment>
    <section
      class="container center-content mx-auto prose-h1:text-left prose-h2:text-left prose-p:leading-7 lg:prose-p:leading-[34px] prose-p:text-lg lg:prose-p:text-xl prose-slate prose-a:text-[#62BD5F] prose-blockquote:text-white prose-blockquote:italic prose-blockquote:px-6 prose-blockquote:py-3 prose-blockquote:border-l-2 prose-blockquote:border-solid prose-blockquote:border-l-[#bbbbba] prose-blockquote:bg-[#f8f8f8] prose-ul:text-left prose-pre:px-10 prose-pre:py-10 prose-pre:bg-[#435C66]"
    >
      <div class="flex flex-wrap justify-between">
        <div
          class="w-full pt-5 border-2 border-indigo-600 lg:w-3/4 lg:pr-4 lg:pl-0"
        >
          <h1 :class="data.cTA ? 'lg:w-11/12' : ''" v-html="toGradient"></h1>
          <div
            class="w-full my-0 pb-12"
            v-html="formatText"
            :class="data.cTA ? 'lg:w-11/12' : 'lg:w-10/12'"
          ></div>
          <div
            class="w-full my-0 mb-16"
            :class="data.cTA ? 'lg:w-11/12' : 'lg:w-3/4'"
          >
            <NextBackButton />
          </div>
        </div>
        <div
          class="px-lg-20 px-0 border-2 mx-auto border-indigo-600 lg:w-1/4 w-full lg:pr-4 lg:pl-0 mb-lg-0 mb-3"
        >
          <RightBar :h2tag="data" v-if="data.cTA" />
        </div>
      </div>
    </section>
  </fragment>
</template>

<script>
import titleGradient from "../mixins/titleGradient.mixin";
import formatLongText from "../mixins/formatLongText.mixin";
import NextBackButton from "./next-and-back-button.vue";
import RightBar from "./rightbar.vue";

export default {
  mixins: [titleGradient, formatLongText],
  props: {
    data: Object,
  },
  components: {
    NextBackButton,
    RightBar,
  },
};
</script>

<style>
h2 {
  scroll-behavior: smooth;
  scroll-margin-top: 100px;
}

/*
h3 {
  text-align: center;
}
html p , html ol > li ,html ul > li {
  color: gray;
}

html h6 {

   height: 100px; 
  padding: 25px 25px;
  margin-left:30px;
  border: 2px solid orange;
  background-color: rgb(253, 255, 162);
  font-weight: 200;
}

h6 > strong {

  font-weight: 1000;
  display: block;
  margin: 5px 0px;
}

a{
  text-decoration: none;
  font-size: 20px;
  color: #808080;
}

a:hover{
  color: black;
}

table{
  font-size: 20px;
  margin-bottom: 20px;
  border-collapse: collapse;
  border-radius: 5px;
  width: 100%;
}

td{
  border: 1px solid #808080;
  padding: 10px;
  color: #808080;
}

th{
  padding: 10px;
} */
</style>
