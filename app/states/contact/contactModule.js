export default Angular => {
    const ngContactModule = Angular.module('ContactApp', []);
    require('./ContactCtrl')(ngContactModule);
}