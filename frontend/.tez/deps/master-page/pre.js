
        import header from "/@/components/header.vue";import contentrightmenu from "/@/components/content-right-menu.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/master-page","slots":{"default":[{"name":"content-right-menu","data":{"title":"Master Pages","longText":"<p>A Master Page enables you to share content across multiple pages in a website</p><p>Master pages typically contain page headers, footers and other elements that occur on multiple pages on your website.</p><p>Advantage of master pages is that they allow you to centralize the common functionality of your pages so that you can make updates in just one place. They make it easy to create one set of controls and code and apply the results to a set of pages.</p><h2><strong>Creating a new master page:</strong>{#createMasterPage}</h2><p>To add a “Master Page”, simply look for “Master Page” in the left navigation bar “Content Manager”. On click, its listing will appear, on the top right corner click on “Create new entry”.</p><p><strong>Image1</strong></p><p><strong>Title:</strong> Enter the name of your master page.</p><p><strong>Layout Name:</strong> This field is mainly referred to the layout of the frontend page.</p><ul><li><strong>Example:</strong> “layout Name” is “main”, and then at the frontend side “main.vue” page will be the layout of the page.</li></ul><p><strong>Generic Collections:</strong> You can add content to your master page via various components.</p><ul><li><strong>Example:</strong> Header, Footer components are common in all pages in your website then you can add these components to genetic collections of your master page</li></ul>","vueReferenceCode":"content-right-menu","cTA":"[Creating a new master page](#createMasterPage)","icon":{},"image":{},"video":{},"hoverIcon":{},"hoverImage":{},"imageCollections":{},"otherMedias":{}},"id":"0-content-right-menu"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Master Pages | TezJS","canonical":"https://local.host/master-page","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"content-right-menu":contentrightmenu,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/master-page/post.js")
            })
        }    