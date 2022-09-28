import { v4 as uuidv4 } from 'uuid';

const plugin = {
  install(app, opts = {}) {
    let store = opts.store
    // inject a globally available $translate() method
  app.config.globalProperties.$spinnerAdd = (task) => {
      store.commit('util/spinnerAdd', task)
    }
    app.config.globalProperties.$spinnerRemove = function(task){
      store.commit('util/spinnerRemove', task)
    }

    app.config.globalProperties.$random = function(){
      return uuidv4()
    }

    app.config.globalProperties.$secondsToHms = function (d) {
      d = Number(d);
      var j = Math.floor(d / 86400);
      var h = Math.floor(d / 3600);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);

      // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      // var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
      // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
      var display = ''
      display = j > 0 ? j+'j' : h > 0 ? h+'h' : m > 0 ? m+ 'm' : s +'s'
      return display//hDisplay + mDisplay + sDisplay;
    }
  }
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
