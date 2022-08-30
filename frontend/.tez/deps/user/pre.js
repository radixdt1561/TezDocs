
        import header from "/@/components/header.vue";import contentrightmenu from "/@/components/content-right-menu.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/user","slots":{"default":[{"name":"content-right-menu","data":{"title":"User","longText":"<p>To add a “User”, simply look for “User” in the left navigation bar “Content Manager”. On click its listing will appear, on the top right corner click on “Create new entry”.</p><p><strong>Image1</strong></p><p>Enter details, Save and Publish.</p>","vueReferenceCode":"content-right-menu","icon":{},"image":{},"video":{},"hoverIcon":{},"hoverImage":{},"imageCollections":{},"otherMedias":{}},"id":"0-content-right-menu"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"User | TezJS","canonical":"/user","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"content-right-menu":contentrightmenu,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/user/post.js")
            })
        }    