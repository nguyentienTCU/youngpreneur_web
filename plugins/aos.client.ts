import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {

    AOS.init({
      once: false,
      easing: 'ease-out-cubic',
      duration: 600
    });


    nuxtApp.hook('page:finish', () => {
      AOS.refreshHard()
    })
//   onNuxtReady(() => {
//     AOS.refresh(); // ensure animations work after route changes
//   });
});