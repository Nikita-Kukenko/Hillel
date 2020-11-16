window.onload = function() {
  const data = {
    name: 'context-menu',
    items: [
            {
        name: 'menu-item',
        title: 'Previous',
        handler: 'ActionPrevious',
        hr: false
      },
            {
        name: 'menu-item',
        title: 'Next',
        handler: 'ActionNext',
        hr: false
      },
            {
        name: 'menu-item',
        title: 'Reboot',
        handler: 'ActionReboot',
        hr: true
      },
            {
        name: 'menu-item',
        title: 'Save As',
        handler: 'ActionSaveAs',
        hr: false
      },
            {
        name: 'menu-item',
        title: 'Print',
        handler: 'ActionPrint',
        hr: true
      },
            {
        name: 'menu-item',
        title: 'View page code',
        handler: 'ActionViewPageCode',
        hr: false
      },
            {
        name: 'menu-item',
        title: 'View code',
        handler: 'ActionViewCode',
        hr: false
      }
    ]
  }
  
  const actions = {
    ActionPrevious: function() { console.log('Action Previous') },
    ActionNext: function() { console.log('Action Next') },
    ActionReboot: function() { console.log('Action Reboot') },
    ActionSaveAs: function() { console.log('Action Save As') },
    ActionPrint: function() { console.log('Action Print') },
    ActionViewPageCode: function() { console.log('Action View Page Code') },
    ActionViewCode: function() { console.log('Action View Code') },
  }
  
  function CreateContextMenu(config, actions) {
    this.config = config || {};
    this.actions = actions;
    this.container = null;
  }
  
  CreateContextMenu.prototype.makeConteiner = function() {
    const container = document.createElement('ul');
    container.classList.add(this.config.name);
  
    return container;
  }
  
  CreateContextMenu.prototype.makeItems = function(container) {
    const { items } = this.config;
    const fragment = document.createDocumentFragment();
  
    items.forEach(({title, handler, name, hr}) => {
        const li = document.createElement('li');
        li.innerText = title;
        li.classList.add(name);
        li.addEventListener('click', this.actions[handler]);
        fragment.append(li);
        if(hr) {
          const hrTag = document.createElement('hr');
          fragment.append(hrTag);
        }
    });
  
    return fragment;
  };
  
  CreateContextMenu.prototype.makeMenu = function() {
    const container = this.makeConteiner();
    const items = this.makeItems();
    container.append(items);
    this.container = container;
  
    return this;
  };
  
  CreateContextMenu.prototype.render = function() {
    if (this.container) {
        document.body.append(this.container);
    }
  
    return this;
  };
  
  const contextMenu = new CreateContextMenu(data, actions);
  
  contextMenu
      .makeMenu()
      .render();

  const menu = document.querySelector(`.${contextMenu.config.name}`);

  document.addEventListener('contextmenu', function(event){
    event.preventDefault();

    menu.style.top = `${event.pageY}px`;
    menu.style.left = `${event.pageX}px`;
    menu.style.display = 'block';
  });

  document.addEventListener('click', function(event) {
    event.stopImmediatePropagation();
    const html = document.querySelector('html');

    if (event.target == html) {
      menu.style.display = 'none';
    }
  });
}