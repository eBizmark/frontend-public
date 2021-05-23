import NProgress from 'nprogress'

export const install = ({ isClient, router }) => {
    if (isClient) {
        router.beforeEach(() => {
            NProgress.start();
         })
        router.afterEach(() => {
            NProgress.done();
            document.querySelector("body").classList.remove("overflow-hidden");
            window.scrollTo({top: 0, behavior: 'smooth'});
        })
    }
}
