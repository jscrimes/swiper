import Swiper from 'swiper';
export class JcSwiper {
    componentDidLoad() {
        this.options = {
            loop: this.loop || false,
            speed: this.speed || 300,
        };
        this.initSwiper();
    }
    initSwiper() {
        for (const slide of this.wrapper.children) {
            slide.classList.add('swiper-slide');
        }
        this.swiper = new Swiper(this.container, Object.assign({}, this.options));
    }
    update() {
        this.swiper.update();
    }
    render() {
        return (h("div", { class: "swiper-container", ref: el => this.container = el },
            h("div", { class: "swiper-wrapper", ref: el => this.wrapper = el },
                h("slot", null))));
    }
    static get is() { return "jc-swiper"; }
    static get properties() { return {
        "loop": {
            "type": Boolean,
            "attr": "loop"
        },
        "speed": {
            "type": Number,
            "attr": "speed"
        }
    }; }
    static get style() { return "/**style-placeholder:jc-swiper:**/"; }
}
