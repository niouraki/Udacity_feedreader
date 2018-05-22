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
        expect(allFeeds[i].url.length).not.toBe(0);
      }
    });

    //Loops through the allFeeds object and makes sure it has a name defined
    it('have name', function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name.length).not.toBe(0);
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

    //This will run before the function loadFeed is called each time
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    //Makes sure that the length of the feed element will be greater than zero
    it('should contain element', function(done) {
      //It gets the children of feed element
      let container = document.querySelector('.feed').querySelectorAll('.entry').length;
      expect(container).toBeGreaterThan(0);
      done();
    });
  });

  describe('New Feed Selection', function() {
    let prevFeedData;
    let newFeedData;

    //This will run before the function loadFeed is called each time
    beforeEach(function(done) {
      //It runs the loadFeed Function
      loadFeed(0, function() {
        prevFeedData = document.querySelector('.feed').innerHTML;
        //It runs the load feed function again after a feed has been added
        loadFeed(1, function() {
          newFeedData = document.querySelector('.feed').innerHTML;
          done();
        });
      });
    });

    //Makes sure that when a new feed is added it is included by comparing
    //the feed element before and after
    it('should change the content', function(done) {
      expect(prevFeedData).not.toBe(newFeedData);
      done();
    });
  });
}());
