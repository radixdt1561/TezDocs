
        import header from "/@/components/header.vue";import contentrightmenu from "/@/components/content-right-menu.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/robots","slots":{"default":[{"name":"content-right-menu","data":{"title":"Robots","longText":"<p>To add a “Robots”, simply look for “Robots” in the left navigation bar “Content Manager”. On click its listing will appear, on the top right corner click on “Create new entry”.</p><p><strong>Image1</strong></p><p>Robots is used for allowing and disallowing the website crawling bots to crawl the data.</p><ul><li>For example, if you want the google bot to crawler your website data from the live site so you have to allow the user-agent of that particular<br>bot to go through your entire website and collect information.</li></ul><p><strong>Environment:</strong> you can specify your working environment here.</p><p><strong>Rules:</strong><br>User-agent: *</p><p>Sitemap: <a href=\"https://tezjs.io/sitemap.xml\" target=\"_blank\" rel=\"noopener nofollow\">https://tezjs.io/sitemap.xml</a></p>","vueReferenceCode":"content-right-menu"},"id":"0-content-right-menu"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Robots | TezJS","canonical":"/robots","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"content-right-menu":contentrightmenu,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/robots/post.js")
            })
        }    