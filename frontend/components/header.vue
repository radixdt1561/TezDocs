<template>
  <div
    id="headerTez"
    class="
      polymorphism
      sticky
      top-0
      mx-auto
      shadow-md
      bg-white
      dark:bg-[#0F172A]
    "
  >
    <header class="container relative">
      <nav class="py-2 md:py-3">
        <div class="lg:flex lg:items-center">
          <div class="flex justify-between items-center max-h-[2.3125rem]">
            <tez-link to="/" class="w-[8.125rem] flex items-center">
              <img
                v-tez-src="'/assets/images/tez_logo.png'"
                alt="TezJS"
                width="130"
                height="35"
                @click="hideMenu"
              />
            </tez-link>
          
            <div @click="toggleMenu">
              <img
                v-if="!istoggle"
                id="navbar-toggler"
                class="lg:hidden cursor-pointer"
                v-tez-src="'/assets/images/menu.svg'"
                width="20"
                height="20"
                alt="Menu"
              />
              <img
                v-else
                v-tez-src="'/assets/images/cross.svg'"
                class="lg:hidden cursor-pointer"
                alt="cross"
                width="20"
                height="20"
              />
            </div>
          </div>
          <div
            v-show="istoggle"
            class="
              block
              lg:flex
              flex-col
              lg:flex-row lg:ml-8 lg:mr-auto lg:mt-0
              items-center
              absolute
              z-40
              left-0
              right-0
              bg-white
              pb-8
              lg:pb-0 lg:bg-transparent lg:relative
              h-[calc(100vh-42px)]
              lg:h-auto
              overflow-y-auto
              lg:overflow-visible
            "
            id="navbar-toggle"
          >


            <!-- Pages start -->
            <div class="group py-5 lg:mx-2 xl:mx-7 px-6 lg:px-0 cursor-pointer mt-6 lg:mt-0 ">
              <span
                class="text-xl lg:text-lg flex items-center leading-normal"
                :class="{ 'bg-gradient text-transparent': isPages && isMobile }"
                @click="showSubmenu('isPages')">
                  Pages
                  <img
                    class="inline-block ml-auto lg:ml-2"
                    v-tez-src="'/assets/images/downArrow.svg'"
                    alt="Menu Drop Down"
                    width="14"
                    height="7"
                  />
              </span>
              <div
                v-show="isPages"
                class="
                  lg:bg-white
                  rounded-lg
                  lg:absolute
                  top-full
                  lg:hidden
                  block
                  group-hover:lg:flex
                  flex-wrap
                  shadowCustom
                  w-full
                  lg:max-w-[270px]
                "
              >
            
                <div
                  class="
                    w-full
                    rounded-lg
                    lg:rounded-lg lg:px-8
                    pb-0
                    pt-5
                    pr-4
                    lg:py-5
                    innerLinkHover
                  "
                >
                
                  <tez-link
                    to="/master-page"
                    title="Master Pages"
                    class="
                      text-[#333333] text-base
                      lg:text-xl
                      font-medium
                      lg:px-2
                      py-4
                      no-underline
                      items-center
                      block
                      border border-solid border-transparent border-b-[#dddddd]
                    "
                    @click="hideMenu"
                  >
                    Master Pages
                    <span
                      class="
                        text-sm
                        mt-1
                        text-normal
                        hidden
                        lg:block
                        text-[#A0A9A5]
                      "
                      >Creating themes for the application</span
                    >
                  </tez-link>
                  
                  <tez-link
                    to="/pages"
                    title="Pages"
                    class="
                      text-[#333333] text-base
                      lg:text-xl
                      font-medium
                      lg:px-2
                      py-4
                      no-underline
                      items-center
                      block
                    "
                    @click="hideMenu"
                  >
                    Pages
                    <span
                      class="
                        text-sm
                        mt-1
                        text-normal
                        hidden
                        lg:block
                        text-[#A0A9A5]
                      "
                      >Defines the site identity</span
                    >
                  </tez-link>
                </div>
              
              </div>
            </div>
            <!-- Pages end -->

            <!-- Collections start -->
            <div
              class="
              group py-5 lg:mx-2 xl:mx-7 px-6 lg:px-0 cursor-pointer
              "
            >
              <span
                class="text-xl lg:text-lg flex items-center leading-normal"
                :class="{ 'bg-gradient text-transparent': isCollections && isMobile }"
                @click="showSubmenu('isCollections')"
              >
                Collections
                <img
                  class="inline-block ml-auto lg:ml-2"
                  v-tez-src="'/assets/images/downArrow.svg'"
                  alt="Menu Drop Down"
                  width="14"
                  height="7"
                />
              </span>

              <div
                v-show="isCollections"
                class="
                  lg:bg-white
                  rounded-lg
                  lg:absolute
                  top-full
                  lg:hidden
                  block
                  group-hover:lg:flex
                  flex-wrap
                  shadowCustom
                  w-[unset]
                  max-w-full
                  xl:max-w-[unset] xl:w-[600px] 
                  xl:max-h-[unset] lg:max-h-[80vh]
                  overflow-x-auto
                "
              >
                <div class="lg:px-8 pt-5 pb-0 lg:py-8">
                  <div class="flex flex-wrap lg:-mx-4">
                    <div
                      class="
                        w-full
                        xl:w-1/2
                        pr-4
                        lg:px-4
                        text-gray-600
                        innerLinkHover
                      "
                    >
                      <tez-link
                        to="/blogs"
                        title="Blogs"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          block
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Blogs
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >
                          Stay up-to-date with latest trends
                        </span>
                      </tez-link>
                      <tez-link
                        to="/"
                        title="Careers"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          hidden
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Careers
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Lorem ipsum dolor sit amet</span
                        >
                      </tez-link>
                      <tez-link
                        to="/"
                        title="Career Leads"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          hidden
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Career Leads
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Lorem ipsum dolor sit amet</span
                        >
                      </tez-link>
                      <tez-link
                        to="/"
                        title="Case Studies"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          hidden
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Case Studies
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Lorem ipsum dolor sit amet</span
                        >
                      </tez-link>
                      <tez-link
                        to="/downloads"
                        title="Downloads"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          block
                          border
                          border-solid
                          border-transparent
                        border-b-[#dddddd]
                          xl:border-b-0
                        "
                        @click="hideMenu"
                      >
                        Downloads
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Small business encyclopedia</span
                        >
                      </tez-link>
                      
                    </div>
                    <div
                      class="
                        w-full
                        xl:w-1/2
                        border-none
                        xl:border
                        xl:border-solid
                        xl:border-transparent
                        xl:border-l-[#dddddd]
                        lg:pr-4 lg:pl-4
                        text-gray-600
                        innerLinkHover
                      "
                    >
                      <tez-link
                        to="/"
                        title="Guides"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          hidden
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Guides
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Lorem ipsum dolor sit amet</span
                        >
                      </tez-link>
                      <tez-link
                        to="/"
                        title="Whitepapers"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          hidden
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Whitepapers
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                        >
                          Lorem ipsum dolor sit amet
                        </span>
                      </tez-link>
                      <tez-link
                        to="/portfolios"
                        title="Portfolios"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          block
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Portfolios
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Your best work</span
                        >
                      </tez-link>
                      <tez-link
                        to="/"
                        title="News Items"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          hidden
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        News Items
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Lorem ipsum dolor sit amet</span
                        >
                      </tez-link>
                      <tez-link
                        to="/call-to-action"
                        title="Call-To-Actions"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          block
                          border
                          border-solid
                          border-transparent
                        border-b-[#dddddd]
                          xl:border-b-0
                        "
                        @click="hideMenu"
                      >
                        Call-To-Actions
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                        >
                          Keep your call-to-action short and sweet
                        </span>
                      </tez-link>
                      
                    </div> 
                  </div>
                </div>
              
              </div>
            </div>
            <!-- Collections end -->

            <!-- Categories start -->
            <div class="group py-5 lg:mx-2 xl:mx-7 px-6 lg:px-0 cursor-pointer hidden">
              <span
                class="text-xl lg:text-lg flex items-center leading-normal"
                :class="{ 'bg-gradient text-transparent': isCategories && isMobile }"
                @click="showSubmenu('isCategories')"
                >Categories
                <img
                  class="inline-block ml-auto lg:ml-2"
                  v-tez-src="'/assets/images/downArrow.svg'"
                  alt="Menu Drop Down"
                  width="14"
                  height="7"
                />
              </span>

              <div
                v-show="isPages"
                class="
                  lg:bg-white
                  rounded-lg
                  lg:absolute
                  top-full
                  lg:hidden
                  block
                  group-hover:lg:flex
                  flex-wrap
                  shadowCustom
                  w-full
                  lg:max-w-[270px]
                "
              >
            
                <div
                  class="
                    w-full
                    rounded-lg
                    lg:rounded-lg lg:px-8
                    pb-0
                    pt-5
                    pr-4
                    lg:py-5
                    innerLinkHover
                  "
                >
                
                  <tez-link
                    to="/downloads"
                    title="Download Categories"
                    class="
                      text-[#333333] text-base
                      lg:text-xl
                      font-medium
                      lg:px-2
                      py-4
                      no-underline
                      items-center
                      block
                      border border-solid border-transparent 
                    "
                    @click="hideMenu"
                  >
                    Download Categories
                    <span
                      class="
                        text-sm
                        mt-1
                        text-normal
                        hidden
                        lg:block
                        text-[#A0A9A5]
                      "
                      >Creating themes for the application</span
                    >
                  </tez-link>
                  
                  
                </div>
              </div>
              <!-- <div
                v-show="isCategories"
                class="
                  lg:bg-white
                  rounded-lg
                  lg:absolute
                  top-full
                  lg:hidden
                  block
                  group-hover:lg:flex
                  flex-wrap
                  shadowCustom
                  w-[unset]
                  max-w-full
                  xl:max-w-[unset] xl:w-[600px] 
                  xl:max-h-[unset] lg:max-h-[80vh]
                  overflow-x-auto
                "
              >
                <div class="lg:px-8 pt-5 pb-0 lg:py-8">
                  <div class="flex flex-wrap lg:-mx-4">
                    <div
                      class="
                        w-full
                        xl:w-1/2
                        pr-4
                        lg:px-4
                        text-gray-600
                        innerLinkHover
                      "
                    >
                      <tez-link
                        to="/"
                        title="Case Studies Categories"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          hidden
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Case Studies Categories
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Lorem ipsum dolor sit amet</span
                        >
                      </tez-link>
                      <tez-link
                        to="/downloads"
                        title="Download Categories"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          block
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                          xl:border-b-0
                        "
                        @click="hideMenu"
                      >
                        Download Categories
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Lorem ipsum dolor sit amet</span
                        >
                      </tez-link>
                    
                    </div>
                    <div
                      class="
                        w-full
                        xl:w-1/2
                        border-none
                        xl:border
                        xl:border-solid
                        xl:border-transparent
                        xl:border-l-[#dddddd]
                        lg:pr-4 lg:pl-4
                        text-gray-600
                        innerLinkHover
                      "
                    >
                      <tez-link
                        to="/"
                        title="Whitepaper Categories"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          hidden
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Whitepaper Categories
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Lorem ipsum dolor sit amet</span
                        >
                      </tez-link>
                       <tez-link
                        to="/"
                        title="Classifications"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          hidden
                        "
                        @click="hideMenu"
                      >
                        Classifications
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Lorem ipsum dolor sit amet</span
                        >
                      </tez-link>
                    </div> 
                  </div>
                </div>
               
              </div> -->
            </div>
            <!-- Categories end -->
            
            <!-- Configurations start -->
            <div class="group py-5 lg:mx-2 xl:mx-7 px-6 lg:px-0 cursor-pointer">
              <span
                class="text-xl lg:text-lg flex items-center leading-normal"
                :class="{ 'bg-gradient text-transparent': isConfigurations && isMobile }"
                @click="showSubmenu('isConfigurations')"
                >Configurations
                <img
                  class="inline-block ml-auto lg:ml-2"
                  v-tez-src="'/assets/images/downArrow.svg'"
                  alt="Menu Drop Down"
                  width="14"
                  height="7"
                />
              </span>
             
              <div
                v-show="isConfigurations"
                class="
                  lg:bg-white
                  rounded-lg
                  lg:absolute
                  top-full
                  lg:hidden
                  block
                  group-hover:lg:flex
                  flex-wrap
                  shadowCustom
                  w-[unset]
                  max-w-full
                  xl:max-w-[unset] xl:w-[600px] 
                  xl:max-h-[unset] lg:max-h-[80vh]
                  overflow-x-auto
                "
              >
               <div class="lg:px-8 pt-5 pb-0 lg:py-8">
                  <div class="flex flex-wrap lg:-mx-4">
                    <div
                      class="
                        w-full
                        xl:w-1/2
                        pr-4
                        lg:px-4
                        text-gray-600
                        innerLinkHover
                      "
                    >
                      <tez-link
                        to="/generic-leads"
                        title="Generic Leads"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          block
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Generic Leads
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Initiation of consumer interest</span
                        >
                      </tez-link>
                      <tez-link
                        to="/testimonials"
                        title="Testimonials"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          block
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Testimonials
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Help to grow your business</span
                        >
                      </tez-link>
                      <tez-link
                        to="/"
                        title="Teams"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          hidden
                          border
                          border-solid
                          border-transparent
                        border-b-[#dddddd]
                          xl:border-b-0
                        "
                        @click="hideMenu"
                      >
                        Teams
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Lorem ipsum dolor sit amet</span
                        >
                      </tez-link>
                    
                    </div>
                    <div
                      class="
                        w-full
                        xl:w-1/2
                        border-none
                        xl:border
                        xl:border-solid
                        xl:border-transparent
                        xl:border-l-[#dddddd]
                        lg:pr-4 lg:pl-4
                        text-gray-600
                        innerLinkHover
                      "
                    >
                    <tez-link
                        to="/robots"
                        title="Robots"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          block
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Robots
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Set your deployment enviroments</span
                        >
                      </tez-link>
                      <tez-link
                        to="/user"
                        title="Users"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          block
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                        "
                        @click="hideMenu"
                      >
                        Users
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >New board members</span
                        >
                      </tez-link>
                      <tez-link
                        to="/"
                        title="Locations"
                        class="
                          text-[#333333] text-base
                          lg:text-xl
                          font-medium
                          lg:px-2
                          py-4
                          no-underline
                          items-center
                          hidden
                          border
                          border-solid
                          border-transparent
                          border-b-[#dddddd]
                           xl:border-b-0
                        "
                        @click="hideMenu"
                      >
                        Locations
                        <span
                          class="
                            text-sm
                            mt-1
                            text-normal
                            hidden
                            lg:block
                            text-[#A0A9A5]
                          "
                          >Lorem ipsum dolor sit amet</span
                        >
                      </tez-link>
                     
                    </div> 
                  </div>
                </div>
             
              </div> 
              
            </div>
            <!-- Configurations end -->

            <div
              class="
                flex
                lg:hidden
                flex-row
                lg:ml-auto
                mt-3
                lg:mt-0
                items-center
                px-6
                lg:px-0
              "
              id="navbar-collapse"
            >
              <tez-link
                @click="hideMenu"
                to="/contact-us"
                class="
                  btnStructure
                  primary-gradient
                  lg:mx-2
                  no-underline
                  inline-block
                  overflow-hidden
                "
                >Get in Touch</tez-link
              >
              <a
                class="ml-auto lg:ml-2"
                href="https://github.com/tezjs/tezjs"
                target="_blank"
                title="TezJS Github"
                ><img
                  src="/assets/images/github.svg"
                  width="30"
                  height="30"
                  alt=""
              /></a>
            </div>
          </div>
          <div
            class="hidden lg:flex flex-row lg:ml-auto mt-3 lg:mt-0 items-center"
            id="navbar-collapse"
          >
            <a
              class="mr-2"
              href="https://github.com/tezjs/tezjs"
              target="_blank"
              title="TezJS Github"
            >
              <img
                src="/assets/images/github.svg"
                width="30"
                height="30"
                alt=""
              />
            </a>
            
             <tez-link
              to="/contact-us"
              class="btnStructure primary-gradient lg:ml-2 no-underline"
              >
              Get in Touch
            </tez-link> 

          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>

export default {
 
  data() {
    return {
      istoggle: true,
      isCollections: true,
      isCategories: true,
      isPages: true,
      isConfigurations: true,
      toggleSubMenu: false,
      window: {
        width: 0,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  computed: {
    isMobile() {
      this.window.width = window.innerWidth;
      return this.window.width < 1024;
    },
  },
  mounted() {
    var div = document.getElementById("headerTez");
    div.parentElement.classList.add("sticky", "top-0", "z-[999]");

  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      if (this.window.width < 1024) {
      
        this.istoggle = false;
        this.toggleSubMenu = false;
        this.isCollections = false;
        this.isCategories = false;
        this.isPages = false;
        this.isConfigurations = false;
      } else {
        this.istoggle = true;
        this.toggleSubMenu = true;
        this.isCollections = true;
        this.isCategories = true;
        this.isPages = true;
        this.isConfigurations = true;
      }
    },
    toggleMenu() {
      this.istoggle = !this.istoggle;
    },

    showSubmenu(menu) {
     
      if (this.window.width < 1024) {
        switch (menu) {
          case "isCollections":
            this.isCollections = !this.isCollections;
            return;
          case "isCategories":
            this.isCategories = !this.isCategories;
            break;
          case "isPages":
            this.isPages = !this.isPages;
            break;
          case "isConfigurations":
            this.isConfigurations = !this.isConfigurations;
            break;
          default:
            break;
        }
      }
    },
    hideMenu() {
    
      if (this.window.width < 1024) {
        this.istoggle = false;
      } else {
        this.isCollections = false;
        this.isCategories = false;
        this.isPages = false;
        this.isConfigurations = false;
        setTimeout(() => {
          this.isCollections = true;
          this.isCategories = true;
          this.isPages = true;
          this.isConfigurations = true;
        }, 1000);
      }
    },
    
  },
};
</script>

<style lang="scss">
.polymorphism {
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  background: #ffffff80;
  z-index: 9;
}

.shadowCustom {
  box-shadow: unset;
  @screen lg {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
  }
}
span.textGradient {
  color: transparent;
  background: linear-gradient(to right, #3aabdf, #63bd5e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.innerLinkHover {
  a {
    font-weight: 600;
    &:hover {
      color: transparent;
      background: linear-gradient(to right, #3aabdf, #63bd5e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
/* right bounce */
@-webkit-keyframes bounceRight {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  40% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
  }
  60% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@-moz-keyframes bounceRight {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(8px);
  }
  60% {
    transform: translateX(0);
  }
}
@keyframes bounceRight {
  100% {
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  40% {
    -ms-transform: translateX(8px);
    transform: translateX(8px);
  }
  60% {
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}

.bg-gradient{
  background: linear-gradient(to right,#3aabdf,#63bd5e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
}

/* /right bounce */
.arrow-animate {
  -webkit-animation: bounceRight 2s infinite;
  animation: bounceRight 2s infinite;
}
</style>
