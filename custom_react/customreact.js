const mainContainer = document.querySelector('#root');

const reactElement ={
    type: 'a',
    props:{
        href:'http://google.com',
        target:'_blank',
    },
    children: 'click me to visit google',
}


// function customRender(reactElement,container){
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href',reactElement.props.href);
//     domElement.setAttribute('target',reactElement.props.target);
//     container.appendChild(domElement);

// }

function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(let prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);

}

customRender(reactElement,mainContainer)