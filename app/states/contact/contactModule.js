export default Angular => {
    const ngContactModule = Angular.module('contactApp', []);

    require('./contactCtrl.js')(ngContactModule);
}