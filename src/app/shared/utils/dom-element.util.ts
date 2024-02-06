export function getElementHeight(window: any, el: any) {
    const style = window.getComputedStyle(el);
    const marginTop = parseInt(style.getPropertyValue('margin-top'), 10);
    const marginBottom = parseInt(style.getPropertyValue('margin-bottom'), 10);
    return el.offsetHeight + marginTop + marginBottom;
}