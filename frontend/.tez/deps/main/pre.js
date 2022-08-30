
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/main","slots":{"default":[{"name":"footer","data":{"componentName":"footer"},"id":"10-footer"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Tez - The Fastest Open Source Framework","canonical":"/main","linkingData":"{'@context':'https://schema.org','@type':'Organization','name':'TezJs','url':'https://tezjsio.web.app/','logo':'https://tezjsio.web.app/assets/images/tez_logo.png'}","metaTag":{"property":{"og:local":"en_US","og:type":"website","og:title":"TezJS - The Fastest Open Source Framework","og:description":"TezJS is an open-source framework allowing developers to build a super-fast website and deliver endless possibilities to every team member working on the project.","og:url":"/","og:site_name":"TezJS","og:image":"/uploads/Banner_image_a9c9737f94.png","og:image:width":"652","og:image:height":"539","twitter:card":"summary_large_image","twitter:title":"TezJS - The Fastest Open Source Framework","twitter:description":"TezJS is an open-source framework allowing developers to build a super-fast website and deliver endless possibilities to every team member working on the project.","twitter:image":"/uploads/Banner_image_a9c9737f94.png","twitter:site":"tezjs"},"name":{"description":"Tez is an open-source framework allowing developers to build a super-fast website and deliver endless possibilities to every team member working on the project."}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/main/post.js")
            })
        }    