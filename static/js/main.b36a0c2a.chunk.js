(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(3),s=a.n(o),r=(a(15),a(1)),i=a(4),l=a(5),u=a(7),h=a(6),v=a(8),m=(a(16),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).makeSelection=function(e){var t;a.setState((t={},Object(r.a)(t,e.target.name,e.target.value),Object(r.a)(t,"conversion",""),t),a.recalculate)},a.changeValue=function(e){a.setState({value:e.target.value},a.recalculate)},a.recalculate=function(){var e=parseFloat(a.state.value);isNaN(e)||(void 0!==a.cached[a.state.base]&&Date.now()-a.cached[a.state.base].timestamp<6e4&&a.setState({conversion:a.cached[a.state.base].rates[a.state.other]*e}),fetch("https://api.exchangeratesapi.io/latest?base=".concat(a.state.base)).then(function(e){return e.json()}).then(function(t){a.cached[a.state.base]={rates:t.rates,timestamp:Date.now()},a.setState({conversion:t.rates[a.state.other]*e})}))},a.cached={},a.currencies=["CAD","AUD","USD","JPY","NZD","GBP"],a.state={base:"AUD",other:"CAD",value:0,conversion:0},a}return Object(v.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("select",{onChange:this.makeSelection,name:"base",value:this.state.base},this.currencies.map(function(e){return c.a.createElement("option",{key:e,value:e},e)})),c.a.createElement("input",{onChange:this.changeValue,value:this.state.value})),c.a.createElement("div",null,c.a.createElement("select",{onChange:this.makeSelection,name:"other",value:this.state.other},this.currencies.map(function(e){return c.a.createElement("option",{key:e,value:e},e)})),c.a.createElement("input",{value:""===this.state.conversion&&""!==this.state.value?"Calculating... ":this.state.conversion,disabled:!0})))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b36a0c2a.chunk.js.map