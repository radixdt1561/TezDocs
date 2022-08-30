
        import header from "/@/components/header.vue";import contentrightmenu from "/@/components/content-right-menu.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/downloads","slots":{"default":[{"name":"content-right-menu","data":{"title":"Downloads","longText":"<p>To add a “Downloads”, simply look for “Downloads” in the left navigation bar “Content Manager”. On click its listing will appear, on the top right corner click on “Create new entry”.</p><p><strong>Image1</strong></p><p>Enter details, Save and Publish.</p><h2><strong>Download Categories</strong> {#category}</h2><p>To add a “Download Categories”, simply look for “Download Categories” in the left navigation bar “Content Manager”. On click, its listing will appear, on the top right corner click on “Create new entry”.</p><p><strong>Image2</strong></p><p>Enter details, Save and Publish.</p>","vueReferenceCode":"content-right-menu","cTA":"[Download Categories](#category)"},"id":"0-content-right-menu"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Downloads | TezJS","canonical":"/downloads","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"content-right-menu":contentrightmenu,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/downloads/post.js")
            })
        }    