const HomePage = require('../pages/home');

describe('Search', () => {
    it('should return "CODE 浮士德遊戲" when search "吳慷仁"', () => {
        HomePage.open().search('吳慷仁').checkHasVideo('CODE 浮士德遊戲')
    });

    it('should return "一拳超人 S2" when search "一拳超人"', () => {
        HomePage.open().search('一拳超人').checkHasVideo('一拳超人 S2');
    });

    it('should not return "一拳超人 S2" when search "吳慷仁"', () => {
        HomePage.open().search('吳慷仁').checkHasVideo('一拳超人 S2', false);
    });
});
