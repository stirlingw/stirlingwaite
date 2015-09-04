export default Angular => {
    const ngAboutModule = Angular.module('AboutApp', []);
    require('./AboutCtrl')(ngAboutModule);
}