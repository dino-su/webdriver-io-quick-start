const SEARCH_BUTTON = 'form.search-bar';
const SEARCH_FIELD = 'div.auto-complete-input input';

function open() {
    browser.url('https://www.kktv.me');

    return this;
}

function search(keyword) {
    $(SEARCH_BUTTON).click();
    $(SEARCH_FIELD).setValue(keyword);

    // submit search form.
    browser.keys("\uE007"); 
    
    return SearchPage = require('./search');
}

module.exports = {
    open,
    search,
};
