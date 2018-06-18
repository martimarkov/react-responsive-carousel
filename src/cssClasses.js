import classNames from 'classnames';

export default {
    CAROUSEL: (classNamePrefix, isSlider) =>
        classNames({
            [classNamePrefix + 'carousel']: true,
            [classNamePrefix + 'carousel-slider']: isSlider,
        }),

    WRAPPER: (classNamePrefix, isSlider, axis) =>
        classNames({
            [classNamePrefix + 'thumbs-wrapper']: !isSlider,
            [classNamePrefix + 'slider-wrapper']: isSlider,
            [classNamePrefix + 'axis-horizontal']: axis === 'horizontal',
            [classNamePrefix + 'axis-vertical']: axis !== 'horizontal',
        }),

    SLIDER: (classNamePrefix, isSlider, isSwiping) =>
        classNames({
            [classNamePrefix + 'thumbs']: !isSlider,
            [classNamePrefix + 'slider']: isSlider,
            [classNamePrefix + 'animated']: !isSwiping,
        }),

    ITEM: (classNamePrefix, isSlider, selected) =>
        classNames({
            [classNamePrefix + 'thumb']: !isSlider,
            [classNamePrefix + 'slide']: isSlider,
            [classNamePrefix + 'selected']: selected,
        }),

    ARROW_PREV: (classNamePrefix, disabled) =>
        classNames({
            [classNamePrefix +
            'control-arrow ' +
            classNamePrefix +
            'control-prev']: true,
            [classNamePrefix + 'control-disabled']: disabled,
        }),

    ARROW_NEXT: (classNamePrefix, disabled) =>
        classNames({
            [classNamePrefix +
            'control-arrow ' +
            classNamePrefix +
            'control-next']: true,
            [classNamePrefix + 'control-disabled']: disabled,
        }),

    DOT: (classNamePrefix, selected) =>
        classNames({
            [classNamePrefix + 'dot']: true,
            [classNamePrefix + 'selected']: selected,
        }),
};
