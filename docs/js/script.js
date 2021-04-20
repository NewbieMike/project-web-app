/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

//Vertical-bar change
const hamburgerIcon = document.querySelector('.hamburger-menu');
const verticalNavigation = document.querySelector('.vertical-bar');
const containerChange = document.querySelector('.container');
const insideHamburgerIcon = document.querySelector('.app-name img');
const verticalNavLinks = document.querySelectorAll('.vertical-bar-container .nav-link');


hamburgerIcon.addEventListener('click', () => {
  verticalNavigation.classList.toggle('change');
  containerChange.classList.toggle('change');
});

insideHamburgerIcon.addEventListener('click', () => {
  verticalNavigation.classList.toggle('change');
  containerChange.classList.toggle('change');
});

verticalNavLinks.forEach(link =>{
  link.addEventListener('click', () => {
    verticalNavigation.classList.toggle('change');
  });
});

const modal = document.querySelector('.modal');
const contactPick = document.querySelectorAll('.contact-container');

contactPick.forEach(contact => {
  contact.addEventListener('click', () => {
    modal.classList.add('open');
    const employeeName = contact.getAttribute('id');
    document.querySelector('.emp_name').innerHTML = employeeName;
  });
});
modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')){
    modal.classList.remove('open');
  }
  if (event.keyCode === 27){
    modal.classList.remove('open');
  }
});
{
  'use strict';

  const select = {
    templateOf: {
      menuLinkList: '#template-menu-links',
      menuDetailsList: '#template-menu-details',
      menuInputsList: '#template-menu-inputs',
      menuPayoutList: '#template-menu-payouts',
    },
    containerOf: {
      links: '.link-list',
      details: '.details-list',
      inputs: '.inputs-list',
      payouts: '.payout-table',
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

        const inputsContainer = document.querySelector(select.containerOf.inputs);

        inputsContainer.appendChild(generatedDOM);
      }
    }
  }

  class PayoutList {
    constructor(data){
      const thisPayout = this;
      thisPayout.data = data;

      thisPayout.render();

    }

    render(){
      const thisPayout = this;

      thisPayout.data = dataSource.payout;

      for (let payout of thisPayout.data){
        const payoutCart = select.templateOf.menuPayoutList;

        const payoutTemplate = Handlebars.compile(document.querySelector(payoutCart).innerHTML);

        const generatedHTML = payoutTemplate(payout);

        const generatedDOM = utils.createDOMFromHTML(generatedHTML);

        const payoutsContainer = document.querySelector(select.containerOf.payouts);

        payoutsContainer.appendChild(generatedDOM);
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
      new PayoutList();
    }
  };
  app.initPages();
  app.initProject();
}
/* eslint-env jquery */
var owl = $('.owl-carousel');
owl.owlCarousel({
  loop:true,
  nav:true,
  margin:10,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },            
    960:{
      items:5
    },
    1200:{
      items:6
    }
  }
});
owl.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY>0) {
    owl.trigger('next.owl');
  } else {
    owl.trigger('prev.owl');
  }
  e.preventDefault();
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {// eslint-disable-line no-use-before-define
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: false,
    }]
  },
});

console.log(chart);