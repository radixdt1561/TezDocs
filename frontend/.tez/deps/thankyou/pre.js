
        import header from "/@/components/header.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/thankyou","slots":{},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Thank You for Contacting Us | TezJS","canonical":"https://local.host/thankyou","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0","robots":"noindex nofollow","description":"Thank you for getting in touch! We appreciate you contacting us! One of our TezJS Team member will get back in touch with you soon!"},"property":{"og:local":"en_US","og:type":"website","og:title":"Thank You for Contacting Us | TezJS","og:description":"Thank you for getting in touch! We appreciate you contacting us! One of our TezJS Team member will get back in touch with you soon!","og:url":"/thank-you","og:site_name":"TezJS","twitter:card":"summary_large_image","twitter:title":"Thank You for Contacting Us | TezJS","twitter:description":"Thank you for getting in touch! We appreciate you contacting us! One of our TezJS Team member will get back in touch with you soon!","twitter:site":"tezjs"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/thankyou/post.js")
            })
        }    