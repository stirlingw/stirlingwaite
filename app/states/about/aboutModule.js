export default Angular => {
    const ngAboutModule = Angular.module('aboutApp', []);
    require('./aboutCtrl')(ngAboutModule);
}