
        
        
        export default function(registerTezPage,preload){
            const payload = {"url":"/faq","slots":{},"masterPageSlots":{},"tags":{"title":"FAQ | TezJS","canonical":"https://local.host/faq","metaTag":{}}}; 
            registerTezPage({
                components:{},
                masterPage:{},
                payload:payload,
                postScript: ()=>import("/tez/deps/faq/post.js")
            })
        }    