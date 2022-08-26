
        import header from "/@/components/header.vue";import contentrightmenu from "/@/components/content-right-menu.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/portfolios","slots":{"default":[{"name":"content-right-menu","data":{"title":"Portfolios","longText":"<p>A portfolio is a collection of your best work. Portfolios are optional entity of any website.<br>Some websites may or may not have a Portfolio section.</p><p>Let us say, you have a portfolio section in your website.</p><h2><strong>How to add a “Portfolios”</strong>{#addProtfolios}</h2><p>To add a “Portfolios”, simply look for “Portfolios” in the left navigation bar “Content Manager”. On click its listing will appear, on the top right corner click on “Create new entry”.</p><p><strong>Image1</strong></p><p>You can do the need full for mapping of portfolio with domain, industries and technology as below.</p><p><strong>Image2</strong></p><p>Enter details, Save and Publish.</p>","vueReferenceCode":"content-right-menu","cTA":"[How to add a “Portfolios”](#addProtfolios)"},"id":"0-content-right-menu"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Portfolios | TezJS","canonical":"https://local.host/portfolios","metaTag":{}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"content-right-menu":contentrightmenu,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/portfolios/post.js")
            })
        }    