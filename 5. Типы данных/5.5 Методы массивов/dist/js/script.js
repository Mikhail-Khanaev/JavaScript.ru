function camelize(t){t=t.split("-").map(((t,e)=>0==e?t:t[0].toUpperCase()+t.slice(1))).join(""),alert(t)}function filterRange(t,e,l){return t.filter((t=>e<=t&&t<=l))}function filterRangeInPlace(t,e,l){for(let a=0;a<t.length;a++){let n=t[a];(n<e||n>l)&&t.splice(a,1)}}function Calculator(){this.methods={"-":(t,e)=>t-e,"+":(t,e)=>t+e},this.calculate=function(t){let e=t.split(" ");return a=e[0],op=e[1],b=e[2],!this.methods[op]||isNaN(a)||isNaN(b)?NaN:this.methods[op](a,b)},this.addMethod=function(t,e){this.methods[t]=e}}let powerCalc=new Calculator;powerCalc.addMethod("*",((t,e)=>t*e)),powerCalc.addMethod("/",((t,e)=>t/e)),powerCalc.addMethod("**",((t,e)=>t**e));let result=powerCalc.calculate("2 ** 3");function shuffle(t){alert(t.sort((()=>Math.random()-.5)))}function unique(t){let e=[];for(let l=0;l<t.length;l++)e.includes(t[l])||e.push(t[l]);return e}let strings=["кришна","кришна","харе","харе","харе","харе","кришна","кришна",":-O"];alert(unique(strings));
//# sourceMappingURL=script.js.map