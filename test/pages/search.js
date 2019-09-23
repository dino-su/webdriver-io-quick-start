function checkHasVideo(name, expected = true) {
    browser.waitUntil(() => {
        return $(`.desc-title=${name}`).isExisting() === expected
    }, 5000);

    return this;
}

module.exports = {
    checkHasVideo,
};
