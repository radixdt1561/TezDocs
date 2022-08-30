
    import { createTezApp } from '@tezjs/vue';
    import useVue from '/@/plugins';import '/@/assets/scss/index.scss';
import addLib from '/@/add-lib'; addLib();
    createTezApp({
        isDevMode:true,useVue:useVue,buildVersion:637974363349380000,maxPreComponentCount:20,
    });
    