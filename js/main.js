const React = {
    createElement,
    render,
}

function createElement(type, props, children) {
    const container = document.createElement(type);
    
    if (typeof props === 'undefined') {
        props = {props}
    }
    
    for (let key in props) {
        if (typeof props[key] === 'object') {
            for (let keyDeep in props[key]) {
                container[key][keyDeep] = props[key][keyDeep]
            }
        } else {
            container[key] = props[key]
        }
    }

    if (!Array.isArray(children)) {
        children = [children]
    }

    children.forEach(child => {
        if (child === undefined) return
        
        if (typeof child === 'string') {
            child = document.createTextNode(child)
        }

        container.appendChild(child)
    })

    return container
}

function render(element, rootNode) {
    rootNode.appendChild(element)
}

const app =
    React.createElement('div', { style: { backgroundColor: 'red' } }, [
        React.createElement('span', undefined, 'Hello world'),
        React.createElement('br'),
        'This is just a text node',
        React.createElement('div', { textContent: 'Text content' }),
    ]);

React.render(
    app,
    document.getElementById('root'),
);