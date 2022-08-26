<template>
  <footer
    class="border border-solid border-transparent border-t border-t-[#f0f0f0] py-4"
  >
    <div class="container">
      <div class="flex flex-wrap -mx-4 items-center justify-between">
        <div class="w-full lg:w-3/12 px-4 text-center xl:text-left">
          <tez-link to="/" title="TezJS">
            <img
                v-tez-src="'/assets/images/tez_logo.png'"
                alt="TezJS"
                width="130"
                height="35"
            />
          </tez-link>
        </div>
        <div
          class="w-full lg:w-6/12 my-4 lg:my-0 px-4 text-center mx-auto mt-4"
        >
          <p class="p-0 my-0 text-center text-base">
            Copyright &copy;
            <span class="inline">{{ new Date().getFullYear() }}</span>
            TezJS, Inc. All rights reserved.
          <span class="text-slate-500 leading-6 align-text-bottom">|</span> Powered by <a href="https://radixweb.com/" target="_blank" class="text-[#005baa] no-underline">Radixweb</a> </p>
        </div>
        <div
          class="w-full lg:w-3/12 px-4 flex justify-center lg:justify-end items-center text-right"
        >
          <ul class="list-none pl-0 mb-0">
            <li class="inline">
              <a href="https://twitter.com/tez_js" rel="nofollow noopener" title="Twitter"
                ><img
                  class="align-baseline mx-4"
                  width="25"
                  height="25"
                  v-tez-src="'/assets/images/twitter.svg'"
                  alt="Twitter"
              /></a>
            </li>
           <!--  <li class="inline">
              <tez-link
                to="https://www.linkedin.com/company/tezjs/"
                title="LinkedIn"
              >
                <img
                  class="align-baseline mr-4"
                  width="25"
                  height="25"
                  v-tez-src="'/assets/images/linkedin.svg'"
                  alt="Linkedin"
                />
              </tez-link>
            </li> -->
            <li class="inline">
                 <a
                href="https://github.com/tezjs/tezjs"
                title="Github"
                rel="nofollow noopener"
              >
              <img
                class="align-baseline"
                width="25"
                height="25"
                v-tez-src="'/assets/images/github.svg'"
                alt="GitHub"
              />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="w-full lg:w-3/12 px-4 flex justify-center items-center text-right">
                    <p class="p-0 my-0 text-center text-base">
                Copyright &copy;
                <span class="inline">{{ new Date().getFullYear() }}</span>
                TezJS, Inc. <br />All rights reserved.
              </p>
                </div> -->
      <!-- <div class="w-full lg:w-6/12 my-4 lg:my-0 px-4 text-center mx-auto mt-4">
                    <p class="p-0 my-0 text-center text-base">
                Copyright &copy;
                <span class="inline">{{ new Date().getFullYear() }}</span>
                TezJS, Inc. All rights reserved.
              </p>
                </div> -->
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>

</style>
