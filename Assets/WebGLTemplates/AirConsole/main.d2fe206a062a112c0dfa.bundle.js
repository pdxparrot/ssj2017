webpackJsonp([1],{"+h1B":function(n,t,e){"use strict";var l=e("/oeL"),i=e("aR8+"),u=e("wQAS"),a=e("q4dy"),o=e("qbdv"),r=e("fc+i"),s=e("CPp0"),c=e("5kav"),f=e("vpkN");e.d(t,"a",function(){return p});var p=l.b(i.a,[u.a],function(n){return l.c([l.d(512,l.e,l.f,[[8,[a.a]],[3,l.e],l.g]),l.d(5120,l.h,l.i,[[3,l.h]]),l.d(4608,o.a,o.b,[l.h]),l.d(4608,l.j,l.j,[]),l.d(5120,l.k,l.l,[]),l.d(5120,l.m,l.n,[]),l.d(5120,l.o,l.p,[]),l.d(4608,r.b,r.c,[o.c]),l.d(6144,l.q,null,[r.b]),l.d(4608,r.d,r.e,[]),l.d(5120,r.f,function(n,t,e,l){return[new r.g(n),new r.h(t),new r.i(e,l)]},[o.c,o.c,o.c,r.d]),l.d(4608,r.j,r.j,[r.f,l.r]),l.d(135680,r.k,r.k,[o.c]),l.d(4608,r.l,r.l,[r.j,r.k]),l.d(6144,l.s,null,[r.l]),l.d(6144,r.m,null,[r.k]),l.d(4608,l.t,l.t,[l.r]),l.d(4608,r.n,r.n,[o.c]),l.d(4608,r.o,r.o,[o.c]),l.d(4608,s.a,s.a,[]),l.d(4608,s.b,s.c,[]),l.d(5120,s.d,s.e,[]),l.d(4608,s.f,s.f,[s.a,s.b,s.d]),l.d(4608,s.g,s.h,[]),l.d(5120,s.i,s.j,[s.f,s.g]),l.d(4608,c.a,c.a,[]),l.d(4608,f.a,f.a,[s.i,c.a]),l.d(512,o.d,o.d,[]),l.d(1024,l.u,r.p,[]),l.d(1024,l.v,function(n,t){return[r.q(n,t)]},[[2,r.r],[2,l.w]]),l.d(512,l.x,l.x,[[2,l.v]]),l.d(131584,l.y,l.y,[l.r,l.z,l.A,l.u,l.e,l.x]),l.d(2048,l.B,null,[l.y]),l.d(512,l.C,l.C,[l.B]),l.d(512,r.s,r.s,[[3,r.s]]),l.d(512,s.k,s.k,[]),l.d(512,i.a,i.a,[])])})},0:function(n,t,e){n.exports=e("cDNt")},"363H":function(n,t,e){"use strict";var l=e("H/9D");e.d(t,"a",function(){return i});var i=function(){function n(n,t){this.type=l.a.SetSlot,this.slotId=n,this.itemId=t}return n}()},"5kav":function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){this.assetPath="assets/"}return n.prototype.getAssetPathUrl=function(n){return this.assetPath+n+"/"},n.prototype.getAssetFileUrl=function(n,t){return this.getAssetPathUrl(n)+t},n}()},"9xzZ":function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return Object.defineProperty(n.prototype,"filledSlots",{get:function(){return this._filledSlots},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"slotItems",{get:function(){return this._slotItems},enumerable:!0,configurable:!0}),n.prototype.reset=function(n){var t=this;this._slots=n.Fighter?new Array(n.Fighter.Schematic.Slots.length).fill(0):[],this._filledSlots=0,this._slotItems=[],n.Fighter&&n.Fighter.Schematic.Slots.forEach(function(e){var l=t._slotItems.push([])-1;n.getItems(e.Type).forEach(function(n){t._slotItems[l].push(n)})})},n.prototype.getSlotItems=function(n){var t=n-1;return this._slotItems[t]},n.prototype.isMaxSlotsSet=function(n){return this.filledSlots>=n.Fighter.Schematic.MaxFilledSlots},n.prototype.isSlotSet=function(n){var t=n-1;return 0!==this._slots[t]},n.prototype.isSlotItem=function(n,t){var e=n-1;return this._slots[e]===t},n.prototype.setSlot=function(n,t){this.isSlotSet(n)||++this._filledSlots;var e=n-1;this._slots[e]=t},n.prototype.clearSlot=function(n){this.isSlotSet(n)&&--this._filledSlots;var t=n-1;this._slots[t]=0},n}()},DVs3:function(n,t,e){"use strict";var l=e("H/9D");e.d(t,"a",function(){return i});var i=function(){function n(n){this.type=l.a.UseSpecial,this.specialType=n}return n}()},"H/9D":function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l;!function(n){n[n.None=0]="None",n[n.SetTeam=1]="SetTeam",n[n.StartGame=2]="StartGame",n[n.ConfirmStaging=3]="ConfirmStaging",n[n.SetSlot=4]="SetSlot",n[n.ClearSlot=5]="ClearSlot",n[n.UseSpecial=6]="UseSpecial"}(l||(l={}))},Iquw:function(n,t,e){"use strict";var l=e("9xzZ");e.d(t,"a",function(){return i});var i=function(){function n(){this._name="Guest",this._teamId="None",this._teamName="Unaffiliated",this._schematic=new l.a}return Object.defineProperty(n.prototype,"deviceId",{get:function(){return this._deviceId},set:function(n){this._deviceId=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"name",{get:function(){return this._name},set:function(n){this._name=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"teamId",{get:function(){return this._teamId},set:function(n){this._teamId=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"teamName",{get:function(){return this._teamName},set:function(n){this._teamName=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isMasterPlayer",{get:function(){return this._isMasterPlayer},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isConfirmed",{get:function(){return this._isConfirmed},set:function(n){this._isConfirmed=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"schematic",{get:function(){return this._schematic},enumerable:!0,configurable:!0}),n.prototype.reset=function(n){this.schematic.reset(n),this.isConfirmed=!1},n.prototype.update=function(n){n.masterPlayer&&(this._isMasterPlayer=n.masterPlayer===this.deviceId)},n}()},NhKt:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=[".view-container[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;right:0;top:50px}#button-chaff[_ngcontent-%COMP%], #button-confirm[_ngcontent-%COMP%], #button-missiles[_ngcontent-%COMP%], #button-start[_ngcontent-%COMP%]{width:40%;height:100%}"]},RTy0:function(n,t,e){"use strict";var l=e("Tcb1"),i=e("Iquw");e.d(t,"a",function(){return u});var u=function(){function n(){this._player=new i.a}return Object.defineProperty(n.prototype,"player",{get:function(){return this._player},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isGameStarted",{get:function(){return this._isGameStarted},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"missilesRemaining",{get:function(){return this._missilesRemaining},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"chaffRemaining",{get:function(){return this._chaffRemaining},enumerable:!0,configurable:!0}),n.prototype.reset=function(n){this.player.reset(n),this._isGameStarted=!1,this._teamSlots=n.Fighter?new Array(n.Fighter.Schematic.Slots.length).fill({}):[],this._missilesRemaining=0,this._chaffRemaining=0},n.prototype.update=function(n){if(this.player.update(n),n.gameState){this._isGameStarted=n.gameState.isGameStarted;var t=n.gameState.fighterState[this.player.teamId];this._missilesRemaining=t?t.specialsRemaining[l.a.SpecialTypeMissiles]:0,this._chaffRemaining=t?t.specialsRemaining[l.a.SpecialTypeChaff]:0}},n.prototype.setTeamSlot=function(n,t){var e=n-1,l=t-1,i=this._teamSlots[e];l in i||(i[l]=0),++i[l]},n.prototype.clearTeamSlot=function(n,t){var e=n-1,l=t-1,i=this._teamSlots[e];l in i||(i[l]=1),--i[l]},n.prototype.useMissile=function(){--this._missilesRemaining},n.prototype.useChaff=function(){--this._chaffRemaining},n}()},SUnC:function(n,t,e){"use strict";var l=e("H/9D");e.d(t,"a",function(){return i});var i=function(){function n(n){this.type=l.a.ClearSlot,this.slotId=n}return n}()},Tcb1:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n.create=function(t){var e=new n;return e.Version=t.Version,e.Fighter=t.Fighter,e.Brains=t.Brains,e.Armor=t.Armor,e.Weapons=t.Weapons,e.Specials=t.Specials,e},n.prototype.getItems=function(t){switch(t){case n.ItemTypeBrain:return this.Brains.Brains;case n.ItemTypeArmor:return this.Armor.Armor;case n.ItemTypeWeapon:return this.Weapons.Weapons;case n.ItemTypeSpecial:return this.Specials.Specials}return null},n}();l.ItemTypeBrain="Brain",l.ItemTypeArmor="Armor",l.ItemTypeWeapon="Weapon",l.ItemTypeSpecial="Special",l.SpecialTypeMissiles="Missiles",l.SpecialTypeChaff="Chaff"},Xzz2:function(n,t,e){"use strict";var l=e("H/9D");e.d(t,"a",function(){return i});var i=function(){function n(){this.type=l.a.StartGame}return n}()},"aR8+":function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},cDNt:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("/oeL"),i=e("p5Ee"),u=e("+h1B"),a=e("fc+i");i.a.production&&e.i(l.a)(),e.i(a.a)().bootstrapModuleFactory(u.a)},p5Ee:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l={production:!0}},q4dy:function(n,t,e){"use strict";function l(n){return f._12(0,[(n()(),f._13(0,null,null,1,"option",[],[[8,"value",0],[8,"selected",0]],null,null,null,null)),(n()(),f._14(null,["",""]))],null,function(n,t){var e=t.component;n(t,0,0,t.context.$implicit.Id,e.player.schematic.isSlotItem(t.parent.context.$implicit.Id,t.context.$implicit.Id)),n(t,1,0,t.context.$implicit.Name)})}function i(n){return f._12(0,[(n()(),f._13(0,null,null,16,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),f._14(null,["\n        "])),(n()(),f._13(0,null,null,1,"label",[["class","col-form-label col-sm-2"]],[[8,"htmlFor",0]],null,null,null,null)),(n()(),f._14(null,["",""])),(n()(),f._14(null,["\n        "])),(n()(),f._13(0,null,null,10,"div",[["class","col-sm-10"]],null,null,null,null,null)),(n()(),f._14(null,["\n            "])),(n()(),f._13(0,null,null,7,"select",[["class","form-control"]],[[8,"id",0],[8,"name",0],[8,"disabled",0]],[[null,"change"]],function(n,t,e){var l=!0,i=n.component;if("change"===t){l=!1!==i.selectSchematicSlot(n.context.$implicit.Id,e.target.value)&&l}return l},null,null)),(n()(),f._14(null,["\n                "])),(n()(),f._13(0,null,null,1,"option",[],[[8,"value",0],[8,"selected",0]],null,null,null,null)),(n()(),f._14(null,["--"])),(n()(),f._14(null,["\n                "])),(n()(),f._15(16777216,null,null,1,null,l)),f._16(802816,null,0,p.h,[f._2,f._3,f.m],{ngForOf:[0,"ngForOf"]},null),(n()(),f._14(null,["\n            "])),(n()(),f._14(null,["\n        "])),(n()(),f._14(null,["\n    "]))],function(n,t){n(t,13,0,t.component.player.schematic.getSlotItems(t.context.$implicit.Id))},function(n,t){var e=t.component;n(t,2,0,f._17(1,"slot_",t.context.$implicit.Id,"")),n(t,3,0,t.context.$implicit.Name),n(t,7,0,f._17(1,"slot_",t.context.$implicit.Id,""),f._17(1,"slot_",t.context.$implicit.Id,""),e.player.schematic.isMaxSlotsSet(e.gameData)&&!e.player.schematic.isSlotSet(t.context.$implicit.Id));n(t,9,0,0,!e.player.schematic.isSlotSet(t.context.$implicit.Id))})}function u(n){return f._12(0,[(n()(),f._13(0,null,null,4,null,null,null,null,null,null,null)),(n()(),f._14(null,["\n    "])),(n()(),f._15(16777216,null,null,1,null,i)),f._16(802816,null,0,p.h,[f._2,f._3,f.m],{ngForOf:[0,"ngForOf"]},null),(n()(),f._14(null,["\n    "]))],function(n,t){n(t,3,0,t.component.gameData.Fighter.Schematic.Slots)},null)}function a(n){return f._12(0,[(n()(),f._13(0,null,null,1,"div",[["class","button-text"],["id","button-unconfirm-text"]],null,null,null,null,null)),(n()(),f._14(null,["Unconfirm"]))],null,null)}function o(n){return f._12(0,[(n()(),f._13(0,null,null,1,"div",[["class","button-text"],["id","button-confirm-text"]],null,null,null,null,null)),(n()(),f._14(null,["Confirm"]))],null,null)}function r(n){return f._12(0,[(n()(),f._13(0,null,null,14,"div",[["class","view view-container"],["id","lobby"]],null,null,null,null,null)),(n()(),f._14(null,["\n    "])),(n()(),f._13(0,null,null,5,"p",[],null,null,null,null,null)),(n()(),f._14(null,["\n        Welcome to the lobby ","! You're on team ","!"])),(n()(),f._13(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),f._14(null,["\n        This is where we gather and wait for the master player to start the game."])),(n()(),f._13(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),f._14(null,["\n    "])),(n()(),f._14(null,["\n    "])),(n()(),f._13(0,null,null,4,"div",[["class","button-300-150 center"],["id","button-start"]],[[8,"hidden",0]],null,null,null,null)),(n()(),f._14(null,["\n        "])),(n()(),f._13(0,null,null,1,"div",[["class","button-text"]],null,null,null,null,null)),(n()(),f._14(null,["Start"])),(n()(),f._14(null,["\n    "])),(n()(),f._14(null,["\n"])),(n()(),f._14(null,["\n"])),(n()(),f._13(0,null,null,20,"div",[["class","view view-container"],["id","staging"]],null,null,null,null,null)),(n()(),f._14(null,["\n    "])),(n()(),f._13(0,null,null,5,"p",[],null,null,null,null,null)),(n()(),f._14(null,["\n        Welcome to the staging area ","!"])),(n()(),f._13(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),f._14(null,["\n        This is where we assign weapons, armor, and core parts to our fighter."])),(n()(),f._13(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),f._14(null,["\n    "])),(n()(),f._14(null,["\n    "])),(n()(),f._15(16777216,null,null,1,null,u)),f._16(16384,null,0,p.i,[f._2,f._3],{ngIf:[0,"ngIf"]},null),(n()(),f._14(null,["\n    "])),(n()(),f._13(0,null,null,7,"div",[["class","button-300-150 center"],["id","button-confirm"]],null,null,null,null,null)),(n()(),f._14(null,["\n        "])),(n()(),f._15(16777216,null,null,1,null,a)),f._16(16384,null,0,p.i,[f._2,f._3],{ngIf:[0,"ngIf"]},null),(n()(),f._14(null,["\n        "])),(n()(),f._15(16777216,null,null,1,null,o)),f._16(16384,null,0,p.i,[f._2,f._3],{ngIf:[0,"ngIf"]},null),(n()(),f._14(null,["\n    "])),(n()(),f._14(null,["\n"])),(n()(),f._14(null,["\n"])),(n()(),f._13(0,null,null,27,"div",[["class","view view-container"],["id","arena"]],null,null,null,null,null)),(n()(),f._14(null,["\n    "])),(n()(),f._13(0,null,null,5,"p",[],null,null,null,null,null)),(n()(),f._14(null,["\n        Welcome to the arena ","!"])),(n()(),f._13(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),f._14(null,["\n        This is where we watch our fighter compete against the other team's fighter!"])),(n()(),f._13(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),f._14(null,["\n    "])),(n()(),f._14(null,["\n    "])),(n()(),f._13(0,null,null,5,"p",[],null,null,null,null,null)),(n()(),f._14(null,["\n        Missiles Remaining: ",""])),(n()(),f._13(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),f._14(null,["\n        Chaff Remaining: ",""])),(n()(),f._13(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),f._14(null,["\n    "])),(n()(),f._14(null,["\n    "])),(n()(),f._13(0,null,null,4,"div",[["class","button-300-150 left"],["id","button-missiles"]],[[8,"hidden",0]],null,null,null,null)),(n()(),f._14(null,["\n        "])),(n()(),f._13(0,null,null,1,"div",[["class","button-text"],["id","button-missiles-text"]],null,null,null,null,null)),(n()(),f._14(null,["Missiles"])),(n()(),f._14(null,["\n    "])),(n()(),f._14(null,["\n    "])),(n()(),f._13(0,null,null,4,"div",[["class","button-300-150 right"],["id","button-chaff"]],[[8,"hidden",0]],null,null,null,null)),(n()(),f._14(null,["\n        "])),(n()(),f._13(0,null,null,1,"div",[["class","button-text"],["id","button-chaff-text"]],null,null,null,null,null)),(n()(),f._14(null,["Chaff"])),(n()(),f._14(null,["\n    "])),(n()(),f._14(null,["\n"])),(n()(),f._14(null,["\n"]))],function(n,t){var e=t.component;n(t,26,0,e.gameData.Fighter),n(t,31,0,e.player.isConfirmed),n(t,34,0,!e.player.isConfirmed)},function(n,t){var e=t.component;n(t,3,0,e.player.name,e.player.teamName),n(t,9,0,!e.player.isMasterPlayer),n(t,19,0,e.player.name),n(t,41,0,e.player.name),n(t,48,0,e.gameState.missilesRemaining),n(t,50,0,e.gameState.chaffRemaining),n(t,54,0,!e.gameState.isGameStarted||e.gameState.missilesRemaining<=0),n(t,60,0,!e.gameState.isGameStarted||e.gameState.chaffRemaining<=0)})}function s(n){return f._12(0,[(n()(),f._13(0,null,null,1,"app-root",[],null,null,null,r,g)),f._16(4308992,null,0,m.a,[h.a],null,null)],function(n,t){n(t,1,0)},null)}var c=e("NhKt"),f=e("/oeL"),p=e("qbdv"),m=e("wQAS"),h=e("vpkN");e.d(t,"a",function(){return _});var d=[c.a],g=f._11({encapsulation:0,styles:d,data:{}}),_=f._18("app-root",m.a,s,{},{},[])},qtrl:function(n,t){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="qtrl"},vpkN:function(n,t,e){"use strict";var l=e("CPp0"),i=e("5v8a"),u=(e.n(i),e("82j9")),a=(e.n(u),e("5kav"));e.d(t,"a",function(){return o});var o=function(){function n(n,t){this.http=n,this.util=t}return n.prototype.getGameData=function(){var n=this.util.getAssetFileUrl("data","GameData.json");return console.log("Loading game data from "+n+"..."),this.http.get(n).map(function(n){return n.json()}).toPromise().catch(this.handleError)},n.prototype.handleError=function(n){return console.error(n),Promise.reject(n.message||n)},n.ctorParameters=function(){return[{type:l.i},{type:a.a}]},n}()},wQAS:function(n,t,e){"use strict";var l=e("vpkN"),i=e("RTy0"),u=e("Tcb1"),a=e("H/9D"),o=e("Xzz2"),r=e("ypKy"),s=e("363H"),c=e("SUnC"),f=e("DVs3");e.d(t,"a",function(){return p});var p=function(){function n(n){this.gameDataService=n,this.Title="Cat Fight Controller",this._gameData=new u.a,this._gameState=new i.a}return Object.defineProperty(n.prototype,"gameData",{get:function(){return this._gameData},enumerable:!0,configurable:!0}),n.prototype.setGameData=function(n){this._gameData=u.a.create(n)},Object.defineProperty(n.prototype,"gameState",{get:function(){return this._gameState},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"player",{get:function(){return this.gameState.player},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){var t=this;this._airConsole=new AirConsole({orientation:"landscape"}),this._airConsole.onReady=function(n){t._isAirConsoleReady=!0,t.debugLog("onReady",n),t.player.deviceId=t._airConsole.getDeviceId(),t.player.name=t._airConsole.getNickname(),t._viewManager=new AirConsoleViewManager(t)},this._airConsole.onMessage=function(n,e){t.debugLog("onMessage",n,e);var l=e.type;switch(l){case a.a.SetTeam:t.player.teamId=e.teamId,t.player.teamName=e.teamName,t._airConsole.setCustomDeviceStateProperty("teamData",e);break;case a.a.SetSlot:t.gameState.setTeamSlot(e.slotId,e.itemId);break;case a.a.ClearSlot:t.gameState.clearTeamSlot(e.slotId,e.itemId);break;default:t.debugLog("Invalid message type",l)}},this._airConsole.onCustomDeviceStateChange=function(n,e){t.debugLog("onCustomDeviceStateChange",n,e),t.gameState.update(e),t._viewManager.onViewChange(e,function(n){t.debugLog("onViewChange",n),"lobby"===n&&t.reset()})},this.debugLog("Requesting game data..."),this.gameDataService.getGameData().then(function(e){if(t.debugLog("Received game data",e),n.CurrentGameDataVersion!==e.Version)return void t.debugLog("Invalid game data version",e.Version,n.CurrentGameDataVersion);t.setGameData(e),t.reset()}).catch(this.handleError)},n.prototype.ngAfterViewInit=function(){var n=this;new Button("button-start",{down:function(){n.startGame()}}),new Button("button-confirm",{down:function(){n.confirmStaging()}}),new Button("button-missiles",{down:function(){n.fireMissiles()}}),new Button("button-chaff",{down:function(){n.launchChaff()}})},n.prototype.debugLog=function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];this._isAirConsoleReady?console.log.apply(console,[this._airConsole.getDeviceId(),n].concat(t)):console.log.apply(console,[n].concat(t))},n.prototype.reset=function(){this.gameState.reset(this.gameData)},n.prototype.startGame=function(){this.debugLog("Starting game..."),this.sendMessageToScreen(new o.a)},n.prototype.confirmStaging=function(){this.player.isConfirmed=!this.player.isConfirmed,this.debugLog("Confirming staging",this.player.isConfirmed),this.sendMessageToScreen(new r.a(this.player.isConfirmed))},n.prototype.selectSchematicSlot=function(n,t){t>0?this.setSlot(n,parseInt(t)):this.clearSlot(n)},n.prototype.setSlot=function(n,t){this.sendMessageToScreen(new s.a(n,t)),this.player.schematic.setSlot(n,t)},n.prototype.clearSlot=function(n){this.sendMessageToScreen(new c.a(n)),this.player.schematic.clearSlot(n)},n.prototype.fireMissiles=function(){this.useSpecial(u.a.SpecialTypeMissiles),this.gameState.useMissile()},n.prototype.launchChaff=function(){this.useSpecial(u.a.SpecialTypeChaff),this.gameState.useChaff()},n.prototype.useSpecial=function(n){this.gameState.isGameStarted&&(this.debugLog("Using special",n),this.sendMessageToScreen(new f.a(n)))},n.prototype.sendMessageToScreen=function(n){this._airConsole.message(AirConsole.SCREEN,n)},n.prototype.broadcastMessage=function(n){this._airConsole.broadcast(n)},n.prototype.handleError=function(n){return console.error(n),Promise.reject(n.message||n)},n.ctorParameters=function(){return[{type:l.a}]},n}();p.CurrentGameDataVersion=1},ypKy:function(n,t,e){"use strict";var l=e("H/9D");e.d(t,"a",function(){return i});var i=function(){function n(n){this.type=l.a.ConfirmStaging,this.isConfirmed=n}return n}()}},[0]);