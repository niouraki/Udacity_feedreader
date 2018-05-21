$(function() {
  describe('RSS Feeds', function() {
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    //Loops through allFeeds object and makes sure it has a URL defined
    it('have URL', function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).not.toBe(" ");
      }
    });

    //Loops through the allFeeds object and makes sure it has a name defined
    it('have name', function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).not.toBe(" ");
      }
    });
  });

  describe('The menu', function() {
    let element = document.body;
    let menu = document.querySelector('.menu-icon-link');

    //Expects that menu will be hidden by default
    it('is hidden', function() {
      expect(element.className).toContain('menu-hidden');
    });

    //Expects what on first click the menu appears and on second click disappears
    it('click on menu', function() {
      menu.click();
      expect(element.className).not.toContain('menu-hidden');

      menu.click();
      expect(element.className).toContain('menu-hidden');
    });
  });

  describe('Initial Entries', function() {

    let container = document.getElementsByClassName('feed');

    //This will run before the function loadFeed is called each time
    beforeEach(function(done) {
      setTimeout(function loadFeed() {
        done();
      }, 100);
    });

    //Makes sure that the length of the feed element will be greater than zero
    it('should contain element', function(done) {
      expect(container.length).toBeGreaterThan(0);
      done();
    });
  });

  describe('New Feed Selection', function() {
    let container;

    //This will run before the function loadFeed is called each time
    beforeEach(function(done) {
      setTimeout(function loadFeed() {
        let container = document.querySelector('.feed').innerHTML;
        done();
      }, 100);
    });

    //Makes sure that when a new feed is added it is included
    it('should change the content', function(done) {
      let changedContainer = document.querySelector('.feed').innerHTML;
      expect(changedContainer).not.toBe(container)
      done();
    });
  });
}());
