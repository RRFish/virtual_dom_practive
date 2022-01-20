const render = (vNode) => {
    if(typeof(vNode) === "string") {
        return document.createTextNode(vNode)
    }
    return renderElement(vNode)
}

const renderElement = ({ tagName, attrs, children }) => {
    const $el = document.createElement(tagName);
    for(const key in attrs) {
        $el.setAttribute(key, attrs[key]);
    }

    children.forEach((child) => {
        const $child = render(child);
        $el.appendChild($child)
    });

    return $el;

}

export default render