import{r as o,w as b,o as c,c as m,a as r,t as d,u as k,F as O,b as $,d as C,n as N,e as S,f as x,g as f,h as U,i as q,j as h}from"./index-3eb7c59a.js";const F={class:"test-timer"},I=r("span",null,"Время",-1),M={style:{"margin-left":"1rem",width:"3rem"}},V=r("span",null,":",-1),P={style:{width:"3rem"}},j={__name:"Timer",props:{testingTime:{type:Number,required:!0}},setup(n){const e=n,t=o("00"),s=o("00");return b(()=>e.testingTime,()=>{e.testingTime===0&&(t.value="00",s.value="00"),e.testingTime<10?s.value="0"+e.testingTime:e.testingTime<60&&(s.value=e.testingTime),e.testingTime/60>=1&&(t.value="0"+Math.trunc(e.testingTime/60),e.testingTime-Math.trunc(e.testingTime/60)*60<10?s.value="0"+(e.testingTime-Math.trunc(e.testingTime/60)*60):s.value=e.testingTime-Math.trunc(e.testingTime/60)*60)}),(a,i)=>(c(),m("div",F,[I,r("div",M,d(t.value),1),V,r("div",P,d(s.value),1)]))}};const E={class:"test-main-random-text"},z={__name:"Test",props:{randomText:{type:String,required:!0}},emits:{"check-one-symbol":(n,e)=>typeof n=="number"&&typeof e=="number"?!0:(console.warn("Invalid change-time event payload!"),!1),"finish-test":null},setup(n,{emit:e}){const t=n;C(l=>({"94aafa2a":u.value}));const s=o(0),a=o(!0),i=o(0),u=o("#fff");return b(()=>t.randomText,()=>{s.value=0,a.value=!0,i.value=0,u.value="#fff"}),k(document,"keypress",l=>{l.key===t.randomText[s.value]?(a.value=!0,s.value+=1,u.value="#fff",s.value===t.randomText.length&&e("finish-test")):(a.value=!1,i.value+=1,u.value="#ff0000"),e("check-one-symbol",s.value,i.value)}),(l,g)=>(c(),m("div",E,[(c(!0),m(O,null,$(t.randomText,(v,_)=>(c(),m("span",{key:v.id,style:{"white-space":"pre-wrap"},class:N({validSymbol:a.value&&_===s.value,unvalidSymbol:!a.value&&_===s.value,uncheckedSymbol:_>s.value,checkedSymbol:_<s.value})},d(v),3))),128))]))}};const B={class:"testing-params"},L={class:"testing-params__items"},A=r("p",{class:"testing-params__item"},"Скорость",-1),D={class:"testing-params__item-value"},R=r("span",{style:{"font-size":"0.6em"}},"зн./мин",-1),X=r("p",{class:"testing-params__item"},"Точность",-1),G={class:"testing-params__item-value"},H=r("span",{style:{"font-size":"0.6em"}},"%",-1),J={__name:"TestingParams",props:{testingTime:{type:Number,required:!0},numderOfCheckedSymbols:{type:Number,required:!0},numberOfUnvalidSymbols:{type:Number,required:!0}},emits:{"start-new-test":null,"change-testing-params":(n,e)=>typeof n=="number"&&typeof e=="number"?!0:(console.warn("Invalid change-time event payload!"),!1)},setup(n,{emit:e}){const t=n,s=S(()=>t.testingTime?Math.trunc(t.numderOfCheckedSymbols/t.testingTime*60):0),a=S(()=>t.numderOfCheckedSymbols?t.numberOfUnvalidSymbols?100-Math.trunc(t.numberOfUnvalidSymbols/(t.numberOfUnvalidSymbols+t.numderOfCheckedSymbols)*100):100:0);b([s,a],()=>{e("change-testing-params",s.value,a.value)});const i=()=>{console.log("1"),document.querySelector(".testing-params__new-test-button").blur(),e("start-new-test")};return(u,l)=>(c(),m("div",B,[r("div",L,[A,r("p",D,[x(d(f(s))+" ",1),R]),X,r("p",G,[x(d(f(a))+" ",1),H])]),r("button",{class:"testing-params__new-test-button",onClick:i}," Заново! ")]))}},w="Земля - пятая по величине планета Солнечной системы и единственная, имеющая слой газов в атмосфере, гарантирующий условия для существования здесь жизни. Около 70% поверхности планеты покрыто водой в жидком состоянии, необходимым элементом для существования форм жизни.",K=async()=>{try{const n=await fetch("https://fish-text.ru/get?&tipe=sentence&number=1"),e=await n.json();return n.ok?e.text:(console.log(e),w)}catch(n){return console.error(n.message),w}},Q=()=>{const n=o(0),e=setInterval(()=>{n.value++},1e3),t=()=>n.value=0;return U(()=>{clearInterval(e)}),{testingTime:n,startNewTest:t}};const W={class:"test"},Y={class:"test__main"},ee={__name:"TestPage",setup(n){const e=q(),t=Q(),s=o(""),a=o(0),i=o(0),u=o(0),l=o(0),g=async()=>{s.value=await K(),t.startNewTest(),a.value=0,i.value=0};g();const v=()=>{e.push({name:"result",query:{speed:`${u.value}`,accuracy:`${l.value}`}})};return(_,p)=>(c(),m("div",W,[h(j,{testingTime:f(t).testingTime.value},null,8,["testingTime"]),r("main",Y,[h(z,{randomText:s.value,onCheckOneSymbol:p[0]||(p[0]=(y,T)=>{a.value=y,i.value=T}),onFinishTest:v},null,8,["randomText"]),h(J,{testingTime:f(t).testingTime.value,numderOfCheckedSymbols:a.value,numberOfUnvalidSymbols:i.value,onStartNewTest:g,onChangeTestingParams:p[1]||(p[1]=(y,T)=>{u.value=y,l.value=T})},null,8,["testingTime","numderOfCheckedSymbols","numberOfUnvalidSymbols"])])]))}};export{ee as default};