export default Angular => {
    const ngHomeModule = Angular.module('HomeApp', []);
    require('./HomeCtrl')(ngHomeModule);
}