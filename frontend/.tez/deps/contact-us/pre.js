
        import header from "/@/components/header.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/contact-us","slots":{},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Contact Us | TezJS","canonical":"https://local.host/contact-us","linkingData":"{'@context':'http://schema.org','@type':'WebPage','name':'Contact Us | TezJS','url':'https://tezjsio.web.app/contact-us','inLanguage':'en-US','description':'Do you have a question? Contact TezJS team to request any further details or information','publisher':{'@type':'Organization','name':'TezJs','url':'https://tezjsio.web.app/'}}","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0","description":"Do you have a question? Contact TezJS team to request any further details or information"},"property":{"og:local":"en_US","og:type":"website","og:title":"Contact - Tez Team to Revolutionize Your Website","og:description":"Do you have a question? Contact TezJS team to request any further details or information","og:url":"/contact-us","og:site_name":"TezJS","twitter:card":"summary_large_image","twitter:title":"Contact - Tez Team to Revolutionize Your Website","twitter:description":"Do you have a question? Contact TezJS team to request any further details or information","twitter:site":"tezjs"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/contact-us/post.js")
            })
        }    