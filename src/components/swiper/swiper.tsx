import { Component, Prop } from '@stencil/core';
import Swiper from 'swiper';

@Component({
  tag: 'jc-swiper',
  styleUrl: 'swiper.scss',
  shadow: false
})
export class JcSwiper {
  // slider-options
  @Prop() loop: boolean;
  @Prop() speed: number;

  private container?: HTMLDivElement;
  private wrapper?: HTMLDivElement;
  private swiper: any;
  private options: any;

  componentDidLoad() {
    this.options = {
      loop: this.loop || false,
      speed: this.speed || 300,
    }

    this.initSwiper()
  }

  initSwiper() {
    for (const slide of this.wrapper.children as any) {
      slide.classList.add('swiper-slide')
    }

    this.swiper = new Swiper (this.container, {
      ...this.options,
    })
    // console.log(this.swiper)
  }

  update() {
    this.swiper.update();
  }

  render() {
    return (
      <div class="swiper-container"
        ref={el => this.container = el as HTMLDivElement}>
        <div class="swiper-wrapper"
          ref={el => this.wrapper = el as HTMLDivElement}>
          <slot />
        </div>
      </div>
    );
  }
}
