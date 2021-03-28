/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

//Vertical-bar change
const hamburgerIcon = document.querySelector('.hamburger-menu');
const verticalNavigation = document.querySelector('.vertical-bar');
const containerChange = document.querySelector('.container');
const insideHamburgerIcon = document.querySelector('.app-name img');

//const sectionsPicker = document.querySelectorAll('section');




hamburgerIcon.addEventListener('click', () => {
  verticalNavigation.classList.toggle('change');
  containerChange.classList.toggle('change');
});

insideHamburgerIcon.addEventListener('click', () => {
  verticalNavigation.classList.toggle('change');
  containerChange.classList.toggle('change');
});
/*fetch('')
    .then((response) => response.text())
    .then((html) => {
        document.querySelector("").innerHTML = html;
    })*/
/*function changeLinkStyle(){
  let index = sectionsPicker.length;

  while(--index && window.scrollY + 50 < sectionsPicker[index].offsetTop){

    navigationLinks.forEach((link) => link.classList.remove('active'));
    navigationLinks[index].classList.add('active');
  }

}
changeLinkStyle();
window.addEventListener('scroll', changeLinkStyle());*/

/*function onScroll(event){
  const navigationLinks = document.querySelectorAll('.ver-nav');
  let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
  for( i = 0; i < navigationLinks.length; i++ ){
    const currLink = navigationLinks[i]; 
    const val = currLink.getAttribute('class');
    
    const refElement = document.querySelector('.ver-nav');
    console.log(refElement)
      if( refElement.offsetTop <= scrollPos && ( refElement.offsetTop + refElement.offsetHeight > scrollPos)){
        document.querySelector('ul li').classList.remove('active');
        currLink.classList.add('active');
      }else{
         currLink.classList.remove('active');
       }
  }
  
  
                                                           
    
};

window.document.addEventListener('scroll', onScroll );*/

{
  'use strict';

  const select = {
    templateOf: {
      menuLinkList: '#template-menu-links',
      menuDetailsList: '#template-menu-details',
      menuInputsList: '#template-menu-inputs',
    },
    containerOf: {
      links: '.link-list',
      details: '.details-list',
      inputs: '.inputs-list',
      pages: '#pages',
    },
    all: {
      menuProducts: '#product-list > .product',
      menuProductsActive: '#product-list > .product.active',
      formInputs: 'input, select',
    },
    nav: {
      links: '.vertical-bar-container a',
    },
  };


  class DetailsList {
    constructor(data){
      const thisDetails = this;
      thisDetails.data = data;

      /* Functions Initializer*/
      thisDetails.render();

    }

    render(){
      const thisDetails = this;

      thisDetails.data = dataSource.details;

      for (let link of thisDetails.data){
        const linkCart = select.templateOf.menuDetailsList;

        const linksTemplate = Handlebars.compile(document.querySelector(linkCart).innerHTML);

        const generatedHTML = linksTemplate(link);

        const generatedDOM = utils.createDOMFromHTML(generatedHTML);
        console.log(generatedDOM);
        const linksContainer = document.querySelector(select.containerOf.details);

        linksContainer.appendChild(generatedDOM);
      }
    }
  }

  class LinkList {
    constructor(data){
      const thisLink = this;
      thisLink.data = data;

      /* Functions Initializer*/
      thisLink.render();

    }

    render(){
      const thisLink = this;

      thisLink.data = dataSource.links;

      for (let link of thisLink.data){
        const linkCart = select.templateOf.menuLinkList;

        const linksTemplate = Handlebars.compile(document.querySelector(linkCart).innerHTML);

        const generatedHTML = linksTemplate(link);

        const generatedDOM = utils.createDOMFromHTML(generatedHTML);

        const linksContainer = document.querySelector(select.containerOf.links);

        linksContainer.appendChild(generatedDOM);
      }
    }
  }

  class InputList {
    constructor(data){
      const thisInput = this;
      thisInput.data = data;

      /* Functions Initializer*/
      thisInput.render();

    }

    render(){
      const thisInput = this;

      thisInput.data = dataSource.input;

      for (let input of thisInput.data){
        const inputCart = select.templateOf.menuInputsList;

        const inputTemplate = Handlebars.compile(document.querySelector(inputCart).innerHTML);

        const generatedHTML = inputTemplate(input);

        const generatedDOM = utils.createDOMFromHTML(generatedHTML);
        console.log(generatedDOM)
        const inputsContainer = document.querySelector(select.containerOf.inputs);
        console.log(inputsContainer)
        inputsContainer.appendChild(generatedDOM);
      }
    }
  }

  const app = {
    initPages: function(){
      const thisApp = this;

      thisApp.pages = document.querySelector(select.containerOf.pages).children;
      console.log(thisApp.pages);
      thisApp.navLinks = document.querySelectorAll(select.nav.links);
      console.log(thisApp.navLinks);

      const idFromHash = window.location.hash.replace('#/', '');
      console.log(idFromHash);
      let pageMathingHash = thisApp.pages[0].id;
      console.log(pageMathingHash);

      for (let page of thisApp.pages){
        if(page.id == idFromHash){
          pageMathingHash = page.id;
          break;
        }
      }

      thisApp.activatePage(pageMathingHash);

      for (let link of thisApp.navLinks) {
        link.addEventListener('click', function(event) {
          const clickedElement = this;
          event.preventDefault();
          const id = clickedElement.getAttribute('href').replace('#', '');

          thisApp.activatePage(id);

          window.location.hash = '#/' + id;
        });
      }
    },

    activatePage: function(pageId){
      const thisApp = this;

      for(let page of thisApp.pages) {
        page.classList.toggle('active', page.id == pageId);
      }
      for(let link of thisApp.navLinks) { 
        link.classList.toggle( 
          'active',
          link.getAttribute('href') == '#' + pageId 
        );
      }
    },

    initProject: function(){
      new DetailsList();
      new LinkList();
      new InputList();
    }
  };
  app.initPages();
  app.initProject();
}

