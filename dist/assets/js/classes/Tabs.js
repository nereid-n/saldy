function Tabs(options) {
  this.defaultOptions = {
    tab: '.tab-item-js',
    tabActive: 'tab-item-active',
    tabContent: '.tab-content-js',
    tabContentActive: 'tab-content-active'
  };

  function setOptions(defaultOptions, options) {
    let finalParams = defaultOptions;
    for (let key in options) {
      if (typeof options[key] === "object" && key !== "class") {
        finalParams[key] = setOptions(finalParams[key], options[key]);
      }
      else {
        if (options.hasOwnProperty(key)) {
          if (options[key] !== undefined) {
            finalParams[key] = options[key];
          }
        }
      }
    }

    return finalParams;
  }

  this.run = function(options) {
    this.options = setOptions(this.defaultOptions, options);
    let mainTub = mainTubs.bind(this);
    mainTub();
  };

  mainTubs = function() {
    let tabItem = document.querySelectorAll(this.options.tab);
    let tabContent = document.querySelectorAll(this.options.tabContent);
    let $this = this;
    for (let i = 0; i < tabItem.length; i++) {
      tabItem[i].onclick = function(e) {
        e.preventDefault();
        let href = tabItem[i].getAttribute('href');
        let tabContentThis = document.querySelector(href);
        for (let j = 0; j < tabItem.length; j++) {
          if (tabItem[j] !== this) {
            tabItem[j].classList.remove($this.options.tabActive);
          }
          if(tabContent[j] !== tabContentThis) {
            tabContent[j].classList.remove($this.options.tabContentActive);
          }
        }
        this.classList.add($this.options.tabActive);
        tabContentThis.classList.add($this.options.tabContentActive);
      }
    }
  }
}

let tabs = function(options) {
  let tab = new Tabs();
  tab.run(options);
};

