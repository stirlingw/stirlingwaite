export default Angular => {
    const ngContactModule = Angular.module('contactApp', []);
    require('./ContactCtrl')(ngContactModule);
}