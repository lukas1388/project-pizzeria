import {select, classNames, templates} from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initLinks();
  }
 
  render(element){
    const thisHome = this;
    const generatedHTML = templates.homePage();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  initLinks(){
    const thisHome = this;
    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.containerOf.homeLinks);
    thisHome.menuNavLinks = document.querySelectorAll(select.nav.links);

    for (let link of thisHome.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisHome.activatePage(id);
        window.location.hash = '#/' + id;
        console.log('pagechange');
      });
    }
  }

  activatePage(pageId){
    const thisHome = this;

    for (let page of thisHome.pages){
      page.classList.toggle(classNames.pages.active, page.id === pageId);
    }
    for (let link of thisHome.menuNavLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') === '#' + pageId
      );
    }
  }
}

export default Home;