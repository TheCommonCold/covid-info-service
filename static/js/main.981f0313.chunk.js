(this["webpackJsonpcovid-info-service"]=this["webpackJsonpcovid-info-service"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"casesHistory":["6907","4896","8977","11497","13110","13749","12168","8312"],"today":{"active_cases":"244389","bed_count":"36799","cases_global":"1147446","dead_all_today":"349","dead_covid_today":"77","dead_global":"23309","dead_intercurrent_today":"272","healed_count":"879748","new_cases_today":"6907","occupied_bed_count":"19210","occupied_respirator_count":"1739","per_voivodeship":{},"percent_positive":"22,57 %","percent_positive_value":22.5718954248366,"respirator_count":"3098","tests_done_today":"30,6 tys.","the_average":10186.285714285714},"yesterday":{"active_cases":"248457","bed_count":"37411","cases_global":"1140572","dead_all_today":"96","dead_covid_today":"40","dead_global":"22960","dead_intercurrent_today":"56","healed_count":"869155","new_cases_today":"4896","occupied_bed_count":"18813","occupied_respirator_count":"1807","per_voivodeship":{},"percent_positive":"24,60 %","percent_positive_value":24.603015075376884,"respirator_count":"3103","tests_done_today":"19,9 tys.","the_average":10387}}')},35:function(e){e.exports=JSON.parse('{"lastRestrictions":"28.11.2020","lastCases":"15.12.2020"}')},40:function(e){e.exports=JSON.parse('[{"title":"Ograniczenia w przemieszczaniu si\u0119","restrictions":[{"content":"Zachowanie 1,5 metra odleg\u0142o\u015bci mi\u0119dzy pieszymi"},{"content":"Zgromadzenia publiczne do max. 5 os\xf3b"},{"content":"Zas\u0142anianie ust i nosa w miejscach publicznych","details":["nie dotyczy las\xf3w, park\xf3w, pla\u017cy i rodzinnych ogr\xf3dk\xf3w dzia\u0142kowych"]},{"content":"Dzieci i m\u0142odzie\u017c do 16 roku \u017cycia musz\u0105 przemieszcza\u0107 si\u0119 pod opiek\u0105 rodzica lub opiekuna","details":["obowi\u0105zuje od poniedzia\u0142ku do pi\u0105tku w godzinach 8:00-16:00","nie dotyczy kiedy dziecko idzie do szko\u0142y lub wraca z niej do domu"]},{"content":"Seniorzy (zw\u0142aszcza osoby 70+) powinni ograniczy\u0107 przemieszczanie si\u0119 do minimum","details":["nie dotyczy wykonywania czynno\u015bci zawodowych","nie dotyczy zaspokajania niezb\u0119dnych potrzeb zwi\u0105zanych z bie\u017c\u0105cymi sprawami \u017cycia codziennego","nie dotyczy sprawowania lub uczestniczenia w sprawowaniu kultu religijnego, w tym czynno\u015bci lub obrz\u0119d\xf3w religijnych"]},{"content":"Ograniczenia liczby miejsc w komunikacji publicznej","details":["50% liczby miejsc siedz\u0105cych","30% liczby wszystkich miejsc siedz\u0105cych i stoj\u0105cych, przy jednoczesnym pozostawieniu w poje\u017adzie co najmniej 50% miejsc siedz\u0105cych niezaj\u0119tych"]}]},{"title":"Edukacja","restrictions":[{"content":"Nauka zdalna","details":["dla wszystkich klas szk\xf3\u0142 podstawowych","dla wszystkich klas szk\xf3\u0142 ponadpodstawowych","dla centr\xf3w kszta\u0142cenia zawodowego","s\u0142uchaczy plac\xf3wek kszta\u0142cenia ustawicznego"]}]},{"title":"Gospodarka","restrictions":[{"content":"Limit klient\xf3w w sklepach, na targu i poczcie","details":["do 100 m kw. - 1os / 10 m kw.","powy\u017cej 100 m kw. - 1os / 15 m kw."]},{"content":"Godziny dla senior\xf3w 10:00 - 12:00","details":["tylko osoby powy\u017cej 60. roku \u017cycia mog\u0105 przebywa\u0107 w tych godzinach w sklepie, drogerii, aptece oraz na poczcie","obowi\u0105zuj\u0105 od poniedzia\u0142ku do pi\u0105tku"]},{"content":"Zakaz dzia\u0142alno\u015bci stacjonarnej restauracji","details":["mo\u017cliwa jest jedynie obs\u0142uga na wynos oraz na dow\xf3z"]},{"content":"Zawieszona dzia\u0142alno\u015b\u0107 basen\xf3w, aquapark\xf3w, si\u0142owni i centr\xf3w fitness","details":["nie dotyczy zaj\u0119\u0107 dla uczni\xf3w i student\xf3w","nie dotyczy hoteli (tylko dla go\u015bci powy\u017cej jednej doby)"]},{"content":"Zawieszona dzia\u0142alno\u015b\u0107 plac\xf3wek kultury","details":["dotyczy min. teatr\xf3w, kin, muze\xf3w, galerii sztuk, dom\xf3w kultury i bibliotek"]},{"content":"W ko\u015bcio\u0142ach maksymalnie 1os / 15 m kw."},{"content":"Hotele tylko dla go\u015bci s\u0142u\u017cbowych"},{"content":"Wydarzenia sportowe bez udzia\u0142u publiczon\u015bci"}]}]')},49:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(19),n=t(0),i=t.n(n),o=t(22),r=t.n(o),l=(t(49),t(64)),d=t(63),j=t(17);var b=function(){return Object(c.jsxs)(l.a,{bg:"primary",variant:"dark",children:[Object(c.jsx)(l.a.Brand,{href:"/",children:"info-covid.pl"}),Object(c.jsxs)(d.a,{className:"w-100 justify-content-end",children:[Object(c.jsx)(j.b,{className:"nav-link",to:"/",children:"Statystyki"}),Object(c.jsx)(j.b,{className:"nav-link",to:"/restrictions",children:"Obostrzenia"})]})]})},h=t(58),p=t(66);var m=function(e){return Object(c.jsxs)("li",{children:[Object(c.jsx)("p",{className:"m-0",children:e.content}),e.details&&Object(c.jsx)("ul",{children:e.details.map((function(e){return Object(c.jsx)("li",{className:"font-weight-light",children:Object(c.jsx)("small",{children:e})},e)}))}),Object(c.jsx)("hr",{className:"m-2"})]})};var x=function(e){return Object(c.jsx)(h.a,{className:"p-0",children:e.restrictions.map((function(e){return Object(c.jsxs)(p.a,{border:"light",children:[Object(c.jsx)(p.a.Header,{children:Object(c.jsx)(p.a.Title,{className:"m-0",children:Object(c.jsx)("h6",{className:"m-0",children:e.title})})}),Object(c.jsx)(p.a.Body,{className:"p-1",children:Object(c.jsx)("ul",{className:"pl-4",children:e.restrictions.map((function(e){return Object(c.jsx)(m,{content:e.content,details:e.details},e.content)}))})})]},e.title)}))})},u=t(59),O=t(65),z=t(60),y=t(61),w=t(40);var _=function(){return Object(n.useEffect)((function(){s.a.pageview(window.location.pathname+window.location.search)})),Object(c.jsx)("div",{children:Object(c.jsxs)(u.a,{fluid:!0,className:"p-0 m-0",children:[Object(c.jsx)(O.a,{className:"p-0 m-0 pt-1",variant:"info",children:Object(c.jsx)("h4",{className:"text-center",children:"Aktualne obostrzenia"})}),Object(c.jsx)(h.a,{children:Object(c.jsx)(z.a,{className:"text-center",children:Object(c.jsx)(y.a,{className:"p-0",children:Object(c.jsxs)("small",{children:["Dok\u0142adny spis aktualnych zasad i ogranicze\u0144 znajdziesz na ",Object(c.jsx)("a",{href:"https://www.gov.pl/web/koronawirus/aktualne-zasady-i-ograniczenia",children:Object(c.jsx)("b",{children:"gov.pl"})})]})})})}),Object(c.jsx)(x,{restrictions:w})]})})},g=t(67),k=t(62),N=t(35),v=t(16);function f(e){return v.today[e]?v.today[e]:v.yesterday[e]}function S(e){if(!v.today[e])return Object(c.jsx)("span",{className:"adnotation text-danger m-0",children:"(Wczorajsza warto\u015b\u0107)"})}function Z(e){if(!v.today[e])return null;var a=Math.ceil(1e4*(v.today[e]/v.yesterday[e]-1))/100;return a>0?Object(c.jsxs)("span",{className:"adnotation text-danger",children:["(",a,"%\u2197)"]}):0===a?Object(c.jsx)("span",{className:"adnotation text-secondary",children:"(-%)"}):Object(c.jsxs)("span",{className:"adnotation text-success",children:["(",a,"%\u2198)"]})}function M(e,a){return a?Object(c.jsx)("div",{children:Math.floor(Math.min(e,a)).toString()+"/"+a.toString()}):Object(c.jsx)("div",{children:e.toString()})}function B(e){return e.replace(/\B(?=(\d{3})+(?!\d))/g,"\u2009")}var C=t(28),J=t(41);var P=function(){var e=function(){for(var e=[3800,9400,19e3,27e3],a=e.map((function(e){return e})),t=1;t<e.length;t++)a[t]=e[t]-e[t-1];a.push(4e3);for(var c=310,s=f("the_average"),n=[],i=[],o=0;o<5;o++)if(s<e[o]||o>=e.length){for(var r=0;r<5;r++){if(r<o&&(n.push(a[r]/c),i.push("")),r===o){if(o>=e.length){n.push((s-e[o-1])/c),i.push(M(s));break}if(0===o){n.push(s/c),i.push(M(s));break}n.push((s-e[r-1])/c),i.push(M(s,e[r]))}r>o&&(n.push(0),i.push(""))}break}return[e,a,c,n,i,s]}(),a=Object(J.a)(e,5),t=a[0],s=a[1],n=a[2],i=a[3],o=a[4];return Object(c.jsx)(u.a,{className:"p-0 m-2",children:Object(c.jsx)(h.a,{className:"text-center pt-2",children:Object(c.jsx)(z.a,{children:Object(c.jsxs)(y.a,{children:[Object(c.jsx)("h6",{children:"Etapy zasad bezpiecze\u0144stwa"}),Object(c.jsxs)("p",{className:"font-weight-light",children:["\u015arednia liczba nowych zaka\u017ce\u0144 przez ostatnie 7 dni:",Object(c.jsxs)("b",{children:[" ",Math.round(f("the_average"))," ",Z("the_average"),S("the_average")]})]}),Object(c.jsxs)(g.a,{className:"doom-bar",children:[Object(c.jsx)(g.a,{className:"color-green",now:i[0]}),Object(c.jsx)(g.a,{className:"color-yellow",now:i[1]}),Object(c.jsx)(g.a,{className:"color-red",now:i[2]}),Object(c.jsx)(g.a,{className:"color-purple",now:i[3]}),Object(c.jsx)(g.a,{className:"color-black",now:i[4]})]}),Object(c.jsxs)(g.a,{className:"doom-light-bar",children:[Object(c.jsx)(g.a,{className:"color-light-green",now:s[0]/n,label:o[0]}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{className:"tooltiptext",children:t[0]})}),Object(c.jsx)(g.a,{className:"color-light-yellow",now:s[1]/n,label:o[1]}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{className:"tooltiptext",children:t[1]})}),Object(c.jsx)(g.a,{className:"color-light-red",now:s[2]/n,label:o[2]}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{className:"tooltiptext",children:t[2]})}),Object(c.jsx)(g.a,{className:"color-light-purple",now:s[3]/n,label:o[3]}),Object(c.jsx)("div",{children:Object(c.jsx)("span",{className:"tooltiptext",children:t[3]})}),Object(c.jsx)(g.a,{className:"color-light-black",now:s[4]/n,label:o[4]})]}),Object(c.jsxs)(z.a,{className:"m-0",children:[Object(c.jsx)("div",{className:"doom-bar-label d-md-inline d-lg-inline d-none",style:{width:(s[0]/n).toString()+"%","border-left-style":"dashed"},children:Object(c.jsx)("small",{children:"Regionalny podzia\u0142 na strefy"})}),Object(c.jsx)("div",{className:"doom-bar-label d-md-inline d-lg-inline d-none",style:{width:(s[1]/n).toString()+"%"},children:Object(c.jsx)("small",{children:"Ca\u0142a polska stref\u0105 \u017c\xf3\u0142t\u0105, wybrane powiaty stref\u0105 czerwon\u0105"})}),Object(c.jsx)("div",{className:"doom-bar-label d-md-inline d-lg-inline d-none",style:{width:(s[2]/n).toString()+"%"},children:Object(c.jsx)("small",{children:"Ca\u0142a polska stref\u0105 czerwon\u0105"})}),Object(c.jsx)("div",{className:"doom-bar-label d-md-inline d-lg-inline d-none",style:{width:(s[3]/n).toString()+"%"},children:Object(c.jsx)("small",{children:"Bezpiecznik/Faza odpowiedzialno\u015bci"})}),Object(c.jsx)("div",{className:"doom-bar-label d-md-inline d-lg-inline d-none",style:{width:(s[4]/n).toString()+"%"},children:Object(c.jsx)("small",{children:"Kwarantanna narodowa"})})]}),Object(c.jsx)("hr",{className:"m-2"}),Object(c.jsx)("small",{children:"Wi\u0119cej informacji o etapach zasad bezpiecze\u0144stwa:"}),Object(c.jsx)("p",{children:Object(c.jsxs)("a",{href:"https://twitter.com/PremierRP/status/1330078274987450369/photo/1",children:[Object(c.jsx)(C.a,{size:20}),"Kancelaria Premiera"]})})]})})})})};var E=function(){return Object(n.useEffect)((function(){s.a.pageview(window.location.pathname+window.location.search)})),Object(c.jsxs)("div",{children:[Object(c.jsx)(u.a,{className:"p-0 m-2",children:Object(c.jsxs)(h.a,{className:"text-center pt-2",children:[Object(c.jsx)(z.a,{children:Object(c.jsxs)(y.a,{children:[Object(c.jsxs)("p",{className:"m-0",children:["Ostatnia aktualizacja: ",N.lastCases]}),Object(c.jsx)("hr",{className:"m-2"})]})}),Object(c.jsxs)(z.a,{children:[Object(c.jsxs)(y.a,{md:{span:4,order:1},xs:{span:6,order:1},className:"mb-3",children:[Object(c.jsx)("h6",{children:"Nowe zaka\u017cenia:"}),Object(c.jsx)("h4",{className:"m-0",children:B(f("new_cases_today"))}),S("new_cases_today"),Z("new_cases_today")]}),Object(c.jsxs)(y.a,{md:{span:4,order:2},xs:{span:12,order:3},className:"mb-3",children:[Object(c.jsx)("h6",{children:"Aktywne przypadki:"}),Object(c.jsx)("h4",{className:"m-0",children:B(f("active_cases"))}),S("active_cases"),Z("active_cases")]}),Object(c.jsxs)(y.a,{md:{span:4,order:3},xs:{span:6,order:2},className:"mb-3",children:[Object(c.jsx)("h6",{children:"Nowe zgony:"}),Object(c.jsx)("h4",{className:"m-0",children:B(f("dead_all_today"))}),S("dead_all_today"),Z("dead_all_today")]})]}),Object(c.jsx)(z.a,{children:Object(c.jsx)(y.a,{children:Object(c.jsx)("hr",{})})}),Object(c.jsxs)(z.a,{children:[Object(c.jsxs)(y.a,{lg:{span:3,order:1},md:{span:6,order:1},xs:{span:6,order:1},children:[Object(c.jsx)("h6",{children:"Liczba test\xf3w:"}),Object(c.jsx)(z.a,{children:Object(c.jsxs)(y.a,{children:[Object(c.jsx)("h4",{className:"m-0",children:f("tests_done_today")}),Object(c.jsx)("p",{className:"m-0 p-0",children:Object(c.jsxs)("small",{className:"text-muted font-weight-normal",children:[f("percent_positive")," pozytywnych"]})}),S("tests_done_today")]})}),Object(c.jsx)("br",{})]}),Object(c.jsxs)(y.a,{lg:{span:3,order:2},md:{span:6,order:3},xs:{span:6,order:3},children:[Object(c.jsx)("h6",{children:"Zaj\u0119te respiratory:"}),Object(c.jsxs)("h5",{children:[B(f("occupied_respirator_count")),"/",B(f("respirator_count"))]}),Object(c.jsx)(g.a,{variant:"danger",animated:!0,now:f("occupied_respirator_count")/f("respirator_count")*100,label:String(Math.floor(f("occupied_respirator_count")/f("respirator_count")*100))+"%"}),S("occupied_respirator_count")]}),Object(c.jsxs)(y.a,{lg:{span:3,order:3},md:{span:6,order:4},xs:{span:6,order:4},children:[Object(c.jsx)("h6",{children:"Zaj\u0119te \u0142\xf3\u017cka:"}),Object(c.jsxs)("h5",{children:[B(f("occupied_bed_count")),"/",B(f("bed_count"))]}),Object(c.jsx)(g.a,{variant:"danger",animated:!0,now:f("occupied_bed_count")/f("bed_count")*100,label:String(Math.floor(f("occupied_bed_count")/f("bed_count")*100))+"%"}),S("occupied_bed_count")]}),Object(c.jsxs)(y.a,{lg:{span:3,order:4},md:{span:6,order:2},xs:{span:6,order:2},children:[Object(c.jsx)("h6",{children:"Zgony \u0141\u0105cznie:"}),Object(c.jsx)("h4",{children:B(f("dead_global"))}),S("dead_global"),Object(c.jsx)("br",{})]})]}),Object(c.jsx)(z.a,{children:Object(c.jsx)(y.a,{children:Object(c.jsx)("hr",{className:"m-2"})})}),Object(c.jsx)(z.a,{children:Object(c.jsx)(y.a,{className:"mb-2",children:Object(c.jsxs)("small",{children:["Dane pobierane z ",Object(c.jsxs)("a",{href:"https://twitter.com/MZ_GOV_PL",children:[Object(c.jsx)(C.a,{size:20}),"MZ_GOV_PL"]})]})})})]})}),Object(c.jsx)(P,{}),Object(c.jsx)(u.a,{className:"p-0 m-2",children:Object(c.jsxs)(h.a,{children:[Object(c.jsx)(z.a,{className:"text-center",children:Object(c.jsx)(y.a,{children:Object(c.jsxs)("p",{className:"m-0",children:["Aktualnie obowi\u0105zuj\u0105ce obostrzenia z dnia: ",N.lastRestrictions]})})}),Object(c.jsx)(z.a,{className:"m-0",children:Object(c.jsx)(y.a,{className:"p-0 m-2",children:Object(c.jsx)(k.a,{className:"restrictions-button p-0",block:!0,children:Object(c.jsx)(j.b,{to:"/restrictions",children:Object(c.jsx)("p",{className:"m-2 text-white",children:"Zobacz obostrzenia"})})})})})]})})]})},L=t(6);var F=function(){return Object(c.jsxs)(j.a,{basename:"/",children:[Object(c.jsx)(b,{}),Object(c.jsxs)(L.c,{children:[Object(c.jsx)(L.a,{path:"/restrictions",children:Object(c.jsx)(_,{})}),Object(c.jsx)(L.a,{path:"/statistics",children:Object(c.jsx)(E,{})}),Object(c.jsx)(L.a,{path:"/",children:Object(c.jsx)(E,{})})]})]})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),c(e),s(e),n(e),i(e)}))};s.a.initialize("G-5J0BQEKJX3"),r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),G()}},[[56,1,2]]]);
//# sourceMappingURL=main.981f0313.chunk.js.map