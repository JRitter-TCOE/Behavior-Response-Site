import { Accordian } from "./Accordian.js";
import { ResponseNodes } from "./ResponseNodes.js";


const App = $('#App');

export function renderSplashView() {
  
App.load('./views/SplashView.html', () => {

    const startButton = $('#startButton');
    const responseButton = $('#responseButton');
    const returnButton = $('#returnButton');

    startButton.click(() => {
      renderResponseView(ResponseNodes[0]);
    });

  responseButton.click(() => {
    renderResponseView(ResponseNodes[19]);
  });

    returnButton.click(() => {
      renderResponseView(ResponseNodes[34]);
    });
    
  });
  
}

function renderResponseView(node) {
  console.log(node);
  App.load('./views/ResponseView.html', () => {
    // inflate components with data from the node

    $('.r-text').html(node.text);

    const options = $('.r-options');

    for (let o of node.options) {
      const btn = $(`<button class="r-option btn">${o.text}</button>`);
      btn.click(() => renderResponseView(ResponseNodes[o.next]));
      options.append(btn);
    }

    const resources = $('.r-resources');
    
    for (let r of node.resources) {
      resources.append(Accordian(r));
    }
    
  });
}

renderSplashView();