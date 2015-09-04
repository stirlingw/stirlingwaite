export default Angular => {
    const ngHomeModule = Angular.module('homeApp', []);
    require('./HomeCtrl')(ngHomeModule);
}