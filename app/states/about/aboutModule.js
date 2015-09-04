export default Angular => {
    const ngAboutModule = Angular.module('aboutApp', []);
    require('./AboutCtrl')(ngAboutModule);
}