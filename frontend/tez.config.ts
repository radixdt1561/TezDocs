import {defineTezConfig } from "@tezjs/vite"

export default defineTezConfig({
    payload:{
        page:{
            maxPreLoadComponent:20
        }
    },
    client:{
        imports:['/@/assets/scss/index.scss']
    },
        strapi:{
            siteUrl:process.env.SITE_URL,
            apiUri:"http://10.10.10.27:1339",
            robots:{
                environmentName:process.env.ROBOTS_ENVIRONMENT_NAME
            }
        },
        deployment:{firebase:true,amplify:true}
})