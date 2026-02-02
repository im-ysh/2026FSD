function customRender(reactEle, Container){
//    const domEle = document.createElement(reactEle.type)
//    domEle.innerHTML = reactEle.Children
//    domEle.setAttribute('href',reactEle.props.href)
//     domEle.setAttribute('target',reactEle.props.target)
//     Container.appendChild(domEle)
const domEle = document.createElement(reactEle.type)
domEle.innerHTML = reactEle.Children
for(const prop in reactEle.props) {
    if(prop === 'children') continue
    domEle.setAttribute(prop, reactEle.props[prop])
}
    Container.appendChild(domEle)
}

const reactEle = {
    type: 'a',
    props : {
        href : "https://www.google.com",
        target : '_blank'
    },
    Children : 'click me to visit google'
}

const mainContainer = document.querySelector('#root')
customRender(reactEle,mainContainer);