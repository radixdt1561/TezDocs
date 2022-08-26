
        import header from "/@/components/header.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/","slots":{},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Docs | TezJs","canonical":"https://local.host/","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/index/post.js")
            })
        }    