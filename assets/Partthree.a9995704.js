import{P as m,C as g}from"./CarRunning.54e3817d.js";import{_ as u,o as l,c as a,a as t,i as b,j as p,b as r}from"./index.e3c0f85a.js";/* empty css                                                   */const v="/Decorate_Journey/assets/P3_01_title.c180bf0a.png";const h={},f={class:"Partthree_01"},$=t("img",{class:"title_P3_01",src:v},null,-1),P=[$];function w(_,s){return l(),a("div",f,P)}const x=u(h,[["render",w]]),I="/Decorate_Journey/assets/CO2.d9d44e78.png",k="/Decorate_Journey/assets/CH4.dc3896b4.png",B="/Decorate_Journey/assets/NO2.5f1f78ec.png";const E={},C={class:"Partthree_02"},J=t("img",{class:"co2",src:I},null,-1),D=t("img",{class:"ch4",src:k},null,-1),N=t("img",{class:"no2",src:B},null,-1),V=t("div",{class:"P3_01chart"},[t("iframe",{src:"https://flo.uri.sh/visualisation/11781762/embed",title:"Interactive or visual content",class:"flourish-embed-iframe",frameborder:"0",scrolling:"no",style:{width:"100%",height:"600px"},sandbox:"allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"})],-1),S=[J,D,N,V];function O(_,s){return l(),a("div",C,S)}const j=u(E,[["render",O]]),H="/Decorate_Journey/assets/P3_03_title.784c33ca.png";const R={},q={class:"Partthree_03"},z=t("img",{src:H},null,-1),A=t("iframe",{src:"https://flo.uri.sh/visualisation/11792178/embed",title:"Interactive or visual content",class:"flourish-embed-iframe",frameborder:"0",scrolling:"yes",style:{width:"100%",height:"100%","overflow-y":"hidden"},sandbox:"allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"},null,-1),F=[z,A];function G(_,s){return l(),a("div",q,F)}const K=u(R,[["render",G]]),L="/Decorate_Journey/assets/P3_story_img.79232bb6.png",M="/Decorate_Journey/assets/1.ed9c1805.png",Q="/Decorate_Journey/assets/2.cb902bcd.png",T="/Decorate_Journey/assets/3.78db44de.png",U="/Decorate_Journey/assets/story_end.81beb2ca.png";const W={class:"Partthree_04"},X=t("img",{class:"p3_story_img",src:L},null,-1),Y=b('<div class="P3_story"><img src="'+M+'" id="story01"><img src="'+Q+'" id="story02"><img src="'+T+'" id="story03"><img src="'+U+'" id="story04"></div>',1),Z={__name:"Partthree_04",setup(_){function s(i,d){var i=i,d=d;localStorage.setItem("toId",d),p.push(i)}function c(){document.getElementById("story01").style.animation="storymove  0.8s ease forwards",document.getElementById("button_01").style.visibility="hidden",document.getElementById("button_02").style.visibility="visible"}function e(){document.getElementById("story01").style.visibility="hidden",document.getElementById("story02").style.animation="storymove  0.8s  ease forwards ",document.getElementById("button_02").style.visibility="hidden",document.getElementById("button_03").style.visibility="visible"}function n(){document.getElementById("story02").style.visibility="hidden",document.getElementById("story03").style.animation="storymove  0.8s  ease forwards ",document.getElementById("button_03").style.visibility="hidden",document.getElementById("button_04").style.visibility="visible"}function y(){document.getElementById("story03").style.visibility="hidden",document.getElementById("story04").style.animation="storymove  0.8s  ease forwards ",document.getElementById("button_04").style.visibility="hidden",document.getElementById("button_05").style.visibility="visible"}return(at,o)=>(l(),a("div",W,[X,t("button",{class:"P3_story01_button",onClick:o[0]||(o[0]=i=>c()),id:"button_01"}),t("button",{class:"P3_story02_button",onClick:o[1]||(o[1]=i=>e()),id:"button_02"}),t("button",{class:"P3_story03_button",onClick:o[2]||(o[2]=i=>n()),id:"button_03"}),t("button",{class:"P3_story04_button",onClick:o[3]||(o[3]=i=>y()),id:"button_04"}),t("button",{class:"back_button",onClick:o[4]||(o[4]=i=>s("/","JumpSection")),id:"button_05"}),Y]))}};const tt={class:"Partthreepage"},et={class:"container"},st={class:"page",style:{color:"black","text-align":"center"},id:"page0"},ot={class:"page",style:{color:"black","text-align":"center"},id:"page1"},nt={class:"page",style:{color:"black","text-align":"center"},id:"page2"},it={class:"page",style:{color:"black","text-align":"center"},id:"page3"},rt={class:"page",style:{color:"black","text-align":"center"},id:"page4"},lt={class:"car"},ut={__name:"Partthree",setup(_){function s(c){document.getElementById(c).scrollIntoView({behavior:"smooth"})}return(c,e)=>(l(),a("div",tt,[t("div",et,[t("div",st,[t("button",{class:"button-go03",onClick:e[0]||(e[0]=n=>s("page1"))}),r(m)]),t("div",ot,[t("button",{class:"button-right",onClick:e[1]||(e[1]=n=>s("page2"))}),r(x)]),t("div",nt,[t("button",{class:"button-left",onClick:e[2]||(e[2]=n=>s("page1"))}),t("button",{class:"button-right",onClick:e[3]||(e[3]=n=>s("page3"))}),r(j)]),t("div",it,[t("button",{class:"button-left",onClick:e[4]||(e[4]=n=>s("page2"))}),t("button",{class:"button-right",onClick:e[5]||(e[5]=n=>s("page4"))}),r(K)]),t("div",rt,[t("button",{class:"button-left",onClick:e[6]||(e[6]=n=>s("page3"))}),r(Z)])]),t("div",lt,[r(g)])]))}};export{ut as default};
