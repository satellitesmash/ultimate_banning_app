(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(56),c=a.n(s),o=a(23),i=a(24),l=a(26),u=a(25),p=a(27),d=(a(62),a(63),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.bannedColor,a=e.stage,n=e.callback;return r.a.createElement("div",{key:a,className:"stage",onClick:n},r.a.createElement("div",null,r.a.createElement("img",{className:"border",alt:a,src:"assets/".concat(a)})),r.a.createElement("div",{className:"placeholder ".concat(t)}))}}]),t}(n.Component)),m=a(17),v=a.n(m),h=(a(110),a(28)),g=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).alterState=function(e,t){var n=a.state,r=n.stateCount,s=n.counterpick;if("none"===t&&(s&&r<=3||!s&&r<=5)){var c={value:(s?h.states.counterpick:h.states.starter)["state"+r]},o={count:r+1};a.stageRef.child(e).update(c),a.counterpick.update(o)}},a.switchMode=function(){var e={value:a.state.counterpick?"starter":"counterpick"};a.counterpick.update(e)},a.reset=function(){a.counterpick.update({count:1,value:"starter"}),a.stageRef.set(h.resetObj)};var n=!1;return new URL(window.location).searchParams.get("hide")&&(document.querySelector("body").classList.add("transparent"),n=!0),a.state={stageEls:null,counterpick:!0,stageStates:null,loading:!0,hide:n},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.stageRef=v.a.database().ref("stage"),this.counterpick=v.a.database().ref("state"),this.stageRef.on("value",function(t){var a=t.val(),n=Object.keys(a),s=[],c=[];n.forEach(function(t){var n=a[t],o=r.a.createElement(d,{key:n.name,stage:n.name,bannedColor:n.value,callback:function(){return e.alterState(t,n.value)}});n.counterpick?c.push(o):s.push(o)}),e.setState({counterpicks:c,starters:s,stageStates:a})}),this.counterpick.on("value",function(t){var a=t.val();e.setState({counterpick:"starter"!==a.value,stateCount:a.count,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.stageRef.off(),this.counterpick.off()}},{key:"render",value:function(){var e=this.state,t=e.starters,a=e.counterpick,n=e.counterpicks,s=e.loading,c=e.hide;return r.a.createElement("div",{className:"App"},s?r.a.createElement("div",null):r.a.createElement("div",null,r.a.createElement("div",{id:"stage-container"},t,a&&n),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("div",{className:c?"hide":"",style:{width:"30%"}},r.a.createElement("button",{className:"button",style:{margin:"1rem "},onClick:this.switchMode},"Swap"),r.a.createElement("button",{className:"button",style:{margin:"1rem "},onClick:this.reset},"Reset")),r.a.createElement("div",{className:c?"hide":""},r.a.createElement("img",{height:100,alt:"pp6-logo",src:"./port6.png"})),r.a.createElement("div",{className:c?"hide":"",style:{width:"30%",textAlign:"right"}},r.a.createElement("h2",{style:{color:"white",margin:"1rem"}},a?"counterpick".toUpperCase():"starter".toUpperCase())))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f={apiKey:"AIzaSyDltYUHYXjkT5q_yA8fs6uNwPwm1h_v2cw",authDomain:"stage-striker.firebaseapp.com",databaseURL:"https://stage-striker-default-rtdb.firebaseio.com",projectId:"stage-striker",storageBucket:"stage-striker.appspot.com",messagingSenderId:"760767919401",appId:"1:760767919401:web:d493f8a3d7d8c76831b338"};v.a.initializeApp(f),c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t){t.states={starter:{state1:"blue",state2:"red",state3:"red",state4:"blue",state5:"green"},counterpick:{state1:"blue",state2:"blue",state3:"green"}},t.resetObj={"-L_RU2xGK4KiUOgFkool":{name:"battlefield.jpg",value:"none"},"-L_RU2xLA-bFgTH7-N50":{name:"final_destination.jpg",value:"none"},"-L_RU2xNGG37M1hMOpvQ":{name:"ps2.png",value:"none"},"-L_RU2xNGG37M1hMOpvR":{name:"smashville.png",value:"none"},"-L_RU2xNGG37M1hMOpvS":{counterpick:!0,name:"town.png",value:"none"},"-L_RU2xMnWVajCL8zLtL":{name:"small_battlefield.jpeg",value:"none"},"-L_RU2xMnWVajCL8zLtK":{counterpick:!0,name:"nothern_cave.png",value:"none"}},t.resetCounterpick={count:1,value:"starter"}},57:function(e,t,a){e.exports=a(114)},62:function(e,t,a){},63:function(e,t,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.27fb036e.chunk.js.map