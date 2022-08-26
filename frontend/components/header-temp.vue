<template>
  <div id="headerTez" class="polymorphism sticky top-0 mx-auto shadow-md">
    <header class="">
      <nav class="py-2 md:py-4">
        <div class="container lg:flex lg:items-center">
          <div class="flex justify-between items-center">
            <tez-link to="/"
              ><img
                v-tez-src="'/assets/images/tez_logo.png'"
                alt="TezJS"
                width="130"
                height="37"
            /></tez-link>
            <!-- <div @click="toggleMenu">
              <img
                id="navbar-toggler"
                class="lg:hidden cursor-pointer"
                v-tez-src="'/assets/images/menu.svg'"
                width="20"
                height="20"
                alt="Menu"
              />
            </div> -->
          </div>
          
          <div
            class="hidden lg:flex flex-row lg:ml-auto mt-3 lg:mt-0 items-center"
            id="navbar-collapse"
          >
            <tez-link
              to="/contact-us"
              class="btnStructure primary-gradient p-2 lg:px-4 lg:mx-2 no-underline"
              >Get in Touch</tez-link>
            <!-- <a
              href="#"
              class="p-2 lg:px-4 lg:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 no-underline"
              ><img
                src="https://d2ms8rpfqc4h24.cloudfront.net/Light_Mode_cdf2246d87.svg"
                alt=""
            /></a> -->
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  mounted(){
    var div = document.getElementById("headerTez");
   div.parentElement.classList.add("sticky","top-0","z-[999]");
  },
};
</script>

<style lang="scss">
.polymorphism {
  backdrop-filter: blur(16px);
  background: #ffffff80;
  z-index: 9;
}
</style>
