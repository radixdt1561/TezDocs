
        import header from "/@/components/header.vue";import contentrightmenu from "/@/components/content-right-menu.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/generic-leads","slots":{"default":[{"name":"content-right-menu","data":{"title":"Generic Leads","longText":"<p>To add a “Generic Leads”, simply look for “Generic Leads” in the left navigation bar “Content Manager”. On click its listing will appear, on the top right corner click on “Create New Entry&quot;.</p><p><strong>Image1</strong></p><p>Enter required details, Save and Publish.</p>","vueReferenceCode":"content-right-menu"},"id":"0-content-right-menu"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Generic Leads | TezJS","canonical":"/generic-leads","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"content-right-menu":contentrightmenu,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/generic-leads/post.js")
            })
        }    