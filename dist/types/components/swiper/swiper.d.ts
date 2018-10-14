import '../../stencil.core';
export declare class JcSwiper {
    loop: boolean;
    speed: number;
    private container?;
    private wrapper?;
    private swiper;
    private options;
    componentDidLoad(): void;
    initSwiper(): void;
    update(): void;
    render(): JSX.Element;
}
