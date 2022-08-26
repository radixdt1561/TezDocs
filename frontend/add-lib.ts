import { addLib,tagManager,addStylesheet } from "@tezjs/js"

function getTagId(){
    const gtmCodes= [
        { host: "tezjs.io", code: "GTM-T9ZDSK8" },
        { host: "tezjsio.web.app", code: "GTM-N5XLBZG" },
        { host: "tezjs-stage.firebaseapp.com", code: "GTM-T4W6ZJ2" },
      ];
      const hostName = window.location.host;
        const gtmCode = gtmCodes.filter((t) => t.host == hostName)[0];
        return gtmCode ? gtmCode.code :""
}
export default addLib({
    afterUserInteraction:[tagManager(getTagId()),addStylesheet("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap")]
})