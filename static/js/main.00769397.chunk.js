(this.webpackJsonpreactcharts=this.webpackJsonpreactcharts||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/belize-flag.718e720a.png"},24:function(e,a,t){e.exports=t.p+"static/media/positive.c236a5d9.png"},25:function(e,a,t){e.exports=t.p+"static/media/recovered.5dde9d14.png"},26:function(e,a,t){e.exports=t.p+"static/media/negative.d3b06c15.png"},27:function(e,a,t){e.exports=t.p+"static/media/swab.3accb93f.png"},28:function(e,a,t){e.exports=t.p+"static/media/death.7f2974b3.png"},29:function(e,a,t){e.exports=t.p+"static/media/search.11438bda.png"},30:function(e,a,t){e.exports=t.p+"static/media/active.14662814.png"},31:function(e,a,t){e.exports=t.p+"static/media/virus.13a9fbc1.png"},33:function(e,a,t){e.exports=t(60)},38:function(e,a,t){},39:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(8),l=(t(38),t(32)),o=t(23),s=t.n(o),c=t(24),d=t.n(c),m=t(25),u=t.n(m),p=t(26),b=t.n(p),g=t(27),v=t.n(g),f=t(28),E=t.n(f),y=t(29),h=t.n(y),C=t(30),N=t.n(C),k=(t(39),t(1)),S=t(4),z=t.n(S),B=function(){return z.a.get("https://covid19.mathdro.id/api/countries/belize/confirmed")},w=function(){return z.a.get("https://api.covid19api.com/total/country/belize")},A=function(){return z.a.get("https://api.covid19api.com/total/dayone/country/belize/status/confirmed")},x=function(){return z.a.get("https://api.covid19api.com/country/belize/status/deaths/live")},j=function(){return z.a.get("https://api.covid19api.com/country/belize/status/recovered/live")},O=function(){return z.a.get("https://api.covid19api.com/country/belize/status/confirmed/live")},T=function(){return z.a.get("https://services6.arcgis.com/8TOGEuvqHhwQHCke/arcgis/rest/services/DistrictIndicators/FeatureServer/0/query?f=json&where=(Last_Update%20%3D%20%27Yes%27)%20AND%20(Last_Update%3D%27Yes%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=Area&orderByFields=value%20desc&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Cases%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&outSR=102100&resultType=standard&cacheHint=true")},D=function(){return z.a.get("https://services6.arcgis.com/fbMLjLVHNRUxmuIA/arcgis/rest/services/country_covid19_cases/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmale%22%2C%22outStatisticFieldName%22%3A%22confirmale%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmfemale%22%2C%22outStatisticFieldName%22%3A%22confirmfemale%22%7D%5D&resultType=standard&cacheHint=true")},I=function(){return z.a.get("https://api.github.com/repos/lmanzanero/belize-coronavirus-tracker/contributors")},L=t(5),F=t.n(L),M=function(){var e=Object(k.a)("casesbydistrict",T),a=e.data,t=e.isLoading;return console.log("from cases by district:",a),Object(r.useEffect)((function(){if(t);else{var e=null===a||void 0===a?void 0:a.data.features.map((function(e){return{name:e.attributes.Area,value:e.attributes.value}})),r=e.map((function(e){return e.name})),n=e.map((function(e){return e.value})),i=document.getElementById("casesByDistrict");new F.a(i,{type:"bar",data:{labels:r,datasets:[{label:"Cases",data:n,backgroundColor:["rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.1)"],borderColor:["rgba(255, 99, 132, )","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},maintainAspectRatio:!1,responsive:!0,title:{display:!0,text:"Cases by District",fontSize:30}}})}}),[t]),n.a.createElement("div",{className:"chart ".concat(t&&!a?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"casesByDistrict"})))},R=t(7),_=t(12),P=function(){var e=Object(k.a)("timelinecases",A),a=e.data,t=e.isLoading,i=(e.error,["January","February","March","April","May","June","July","August","September","October","November","December"]),l=n.a.useCallback((function(){return t?[]:null===a||void 0===a?void 0:a.data.map((function(e){return{date:new Date(e.Date).getMonth(),cases:e.Cases}}))}),[a,t]),o=n.a.useCallback((function(){var e=[],a=l();if(0!==a.length)return i.map((function(e,t){var r=a.filter((function(e){return e.date===t}));return Object(_.a)({},e,0===r.length?0:Math.max.apply(Math,r.map((function(e){return e.cases}))))})).map((function(a){var t=Object.values(a);e.push.apply(e,Object(R.a)(t))})),console.log(e),e}),[l,i]);return Object(r.useEffect)((function(){var e=document.getElementById("casesByTimelineCart");new F.a(e,{type:"line",data:{labels:t?[]:i,datasets:[{label:"Cases",data:t?[0,0,3,18,18,24,48,1007,1825,2243]:o(),backgroundColor:["rgba(54, 162, 235, 0.5)","rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 100, 64, 0.7)","rgba(255, 99, 132, 0.3)"],borderColor:["rgba(54, 162, 235, 0.9)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{maintainAspectRatio:!1,legend:{position:"bottom",display:!1},layout:{padding:{bottom:0,left:10,right:10,top:0}},title:{display:!0,text:"Total Cases by Month",fontSize:30}}})}),[o,t,i]),n.a.createElement("div",{className:"chart ".concat(t?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"casesByTimelineCart",style:{margin:0,padding:0}})))},W=function(){var e=Object(k.a)("getgithubcontributors",I),a=e.data,t=e.isLoading;return n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"This site is to show the latest on coronavirus cases based on official reports made from Belize. If you would like to contribute to the source code, feel free to do so"," ",n.a.createElement("a",{href:"https://github.com/lmanzanero/belize-coronavirus-tracker",target:"_blank",rel:"noopener noreferrer"},"here"),n.a.createElement("span",{role:"img","aria-label":"globe"}," ","\ud83c\udf0e\ud83c\udde7\ud83c\uddff")),n.a.createElement("div",{className:"contributors"},n.a.createElement("p",null,n.a.createElement("i",null,"All Contributors")," ",n.a.createElement("span",null,"(",t?"loading...":null===a||void 0===a?void 0:a.data.length,")")),t&&a?"loading...":null===a||void 0===a?void 0:a.data.map((function(e){return n.a.createElement("a",{href:e.html_url,key:e.id,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:e.avatar_url,alt:"users"}))}))))},J=t(13),U=t(3),Y=t.n(U),G=t(31),H=t.n(G),V=[[-89.1485595703125,17.329664329425057],[-89.154052734375,16.99375545289456],[-89.197998046875,16.401835664857224],[-89.14031982421875,16.4624268437789],[-89.06341552734375,16.483497602648132],[-89.03045654296874,16.52299909410501],[-89.0057373046875,16.49403212250543],[-88.97552490234374,16.515099441440785],[-88.95904541015625,16.520365912442116],[-88.9453125,16.549328935473294],[-88.9068603515625,16.559859865723602],[-88.868408203125,16.591449202097333],[-88.8299560546875,16.609873919524187],[-88.8134765625,16.65461230098613],[-88.79150390625,16.688816956180833],[-88.77777099609375,16.701970963616578],[-88.76953125,16.73353688351116],[-88.72833251953125,16.804541076383455],[-88.67340087890625,16.82031618192045],[-88.692626953125,16.849233798068777],[-88.66241455078125,16.85711965391805],[-88.65966796875,16.88865978738161],[-88.6651611328125,16.93070509876554],[-88.63494873046875,16.946469670739273],[-88.61297607421875,16.975367952825138],[-88.5882568359375,17.014767530557833],[-88.56903076171875,17.0436552869869],[-88.58551025390624,17.062036080716222],[-88.5992431640625,17.085665870561126],[-88.60198974609375,17.109292665395643],[-88.582763671875,17.13554114256562],[-88.5662841796875,17.156537255486093],[-88.55255126953125,17.190650872324778],[-88.560791015625,17.222134788822114],[-88.57177734375,17.248367290475684],[-88.57452392578125,17.379473773227488],[-88.58551025390624,17.500008881254466],[-88.604736328125,17.492150326224376],[-88.604736328125,17.463332719132804],[-88.626708984375,17.4607127104298],[-88.65692138671875,17.458092664041494],[-88.68438720703125,17.444991866993263],[-88.7200927734375,17.43975128454968],[-88.73931884765625,17.40830462902467],[-88.78875732421874,17.40568382996758],[-88.83819580078125,17.41354611437445],[-88.88763427734375,17.41616680065723],[-88.9068603515625,17.389958246585568],[-88.97003173828125,17.38209494787749],[-89.03594970703125,17.37685256104539],[-89.07714843749999,17.38209494787749],[-89.12384033203124,17.34539508915956],[-89.14787292480469,17.318520892437274]];function q(){return Object(r.useEffect)((function(){var e=Y.a.map("mapid").setView([17.1899,-88.4976],8);Y.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(e);var a=Y.a.icon({iconUrl:H.a,iconSize:[20,20],iconAnchor:[20,20],popupAnchor:[-3,-76]}),t={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:Object(R.a)(V)},properties:{}}]};Y.a.marker([18.391669187688766,-88.39324951171875],{icon:a}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup(),Y.a.marker([17.25066245705116,-88.77090454101562],{icon:a}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup(),Y.a.marker([17.499354014646553,-88.19686889648438],{icon:a}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup(),Y.a.marker([16.96486000097799,-88.22296142578125],{icon:a}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup(),Y.a.marker([16.097278567218588,-88.81622314453125],{icon:a}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup(),Y.a.marker([18.081895438726583,-88.56353759765625],{icon:a}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup(),Y.a.geoJSON(t).addTo(e);var r=Y.a.popup();e.on("click",(function(a){r.setLatLng(a.latlng).setContent("You clicked the map at "+a.latlng.toString()).openOn(e)}))}),[]),n.a.createElement("div",{id:"mapid"})}var Z=function(){var e=Object(k.a)("getcasesbygender",D),a=e.data,t=e.isLoading;return Object(r.useEffect)((function(){if(a){var e=a.data.features[0].attributes,t=e.confirmale,r=e.confirmfemale,n=document.getElementById("casesByGenderChart");new F.a(n,{type:"pie",data:{labels:["Male","Female"],datasets:[{label:"# of Votes",data:[t,r],backgroundColor:["rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{maintainAspectRatio:!1,legend:{position:"bottom"},layout:{padding:{bottom:0,left:10,right:10,top:0}},title:{display:!0,text:"Cases by Gender",fontSize:30}}})}}),[a,t]),n.a.createElement("div",{className:"chart ".concat(t?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"casesByGenderChart",style:{margin:0,padding:0}})))},Q=function(){var e=Object(k.a)("deathtimelinecases",x),a=e.data,t=e.isLoading,i=["January","February","March","April","May","June","July","August","September","October","November","December"];Object(r.useEffect)((function(){var e=document.getElementById("deathCasesByTimelineCart");new F.a(e,{type:"bar",data:{labels:t?[]:i,datasets:[{label:"Cases",data:l(),backgroundColor:["rgba(54, 162, 235, 0.5)","rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 100, 64, 0.7)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)"],borderColor:["rgba(54, 162, 235, 0.9)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{maintainAspectRatio:!1,legend:{position:"bottom",display:!1},layout:{padding:{bottom:0,left:10,right:10,top:0}},title:{display:!0,text:"Total Deaths by Month",fontSize:30}}})}),[t,i]);var l=function(){var e=[],r=t?[]:null===a||void 0===a?void 0:a.data.map((function(e){return{date:new Date(e.Date).getMonth(),cases:e.Cases}}));if(0!=r.length)return i.map((function(e,a){var t=r.filter((function(e){return e.date===a}));return Object(_.a)({},e,0===t.length?0:Math.max.apply(Math,t.map((function(e){return e.cases}))))})).map((function(a){var t=Object.values(a);e.push.apply(e,Object(R.a)(t))})),console.log(e),e};return n.a.createElement("div",{className:"chart ".concat(t?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"deathCasesByTimelineCart",style:{margin:0,padding:0}})))},X=t(11),K=t.n(X);function $(){var e=Object(k.a)("livetimelinecases",O),a=e.data,t=e.isLoading,i=Object(k.a)("livetimelinerecoveredcases",j),l=i.data,o=i.isLoading,s=Object(k.a)("livetimelinedeathscases",x),c=s.data,d=s.isLoading,m=Object(k.a)("activecases",w),u=m.data,p=m.isLoading;return Object(r.useEffect)((function(){var e={data:{datasets:[{label:" \u2705 Confirmed",backgroundColor:"#81B622",borderColor:"#81B622",data:n(a),type:"line",pointRadius:0,fill:!1,lineTension:0,borderWidth:4},{label:" \ud83e\udda0 Active",backgroundColor:"#f6cd61",borderColor:"#f6cd61",data:function(e){if(u){return u.data.map((function(e){return{t:new Date(e.Date).getTime(),y:"".concat(e.Active)}}))}}(),type:"line",pointRadius:0,fill:!1,lineTension:0,borderWidth:4},{label:" \ud83e\udd73 Recovered",backgroundColor:"#0e9aa7",borderColor:"#0e9aa7",data:n(l),type:"line",pointRadius:0,fill:!1,lineTension:0,borderWidth:4},{label:" \u2620\ufe0f Deaths",backgroundColor:"#fe8a71",borderColor:"#fe8a71",data:n(c),type:"line",pointRadius:0,fill:!1,lineTension:0,borderWidth:4}]},options:{maintainAspectRatio:!1,responsive:!0,animation:{duration:0},title:{display:!0,text:"Belize \ud83e\udda0 Coronavirus \ud83e\udda0 Curve",fontSize:30},legend:{display:!0,position:"bottom"},scales:{xAxes:[{type:"time",distribution:"series",offset:!0,ticks:{major:{enabled:!0,fontStyle:"bold"},source:"data",autoSkip:!0,autoSkipPadding:75,maxRotation:0,sampleSize:100},afterBuildTicks:function(e,a){var t,r,n,i,l,o,s=e._majorUnit,c=a[0];for(n=K()(a[0].value),"minute"===s&&0===n.second()||"hour"===s&&0===n.minute()||"day"===s&&9===n.hour()||"month"===s&&n.date()<=3&&1===n.isoWeekday()||"year"===s&&0===n.month()?c.major=!0:c.major=!1,o=n.get(s),t=1,r=a.length;t<r;t++)i=a[t],l=(n=K()(i.value)).get(s),i.major=l!==o,o=l;return a}}],yAxes:[{gridLines:{drawBorder:!1},scaleLabel:{display:!0,labelString:"\ud83e\udda0 cases"}}]},tooltips:{intersect:!1,mode:"index",callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"";return t&&(t+=": "),t+=parseFloat(e.value).toFixed(0),t}}}}};if(!t&&!o&&!d&&!p){var r=document.getElementById("liveCasesByTimelineCart");new F.a(r,e)}function n(e){if(e)return e.data.map((function(e){return{t:new Date(e.Date).getTime(),y:"".concat(e.Cases)}}))}}),[t,o,d,p,a,l,c,u]),n.a.createElement("div",{className:"chart ".concat(t||o||d?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"liveCasesByTimelineCart",style:{margin:"0",padding:0}}),n.a.createElement("div",null,n.a.createElement("select",{id:"type"},n.a.createElement("option",{value:"line"},"Line"),n.a.createElement("option",{value:"bar"},"Bar")),n.a.createElement("select",{id:"unit",defaultChecked:!0},n.a.createElement("option",{value:"second"},"Second"),n.a.createElement("option",{value:"minute"},"Minute"),n.a.createElement("option",{value:"hour"},"Hour"),n.a.createElement("option",{value:"day"},"Day"),n.a.createElement("option",{value:"month"},"Month"),n.a.createElement("option",{value:"year"},"Year")))))}var ee=[{name:"corozal",formatted_name:"Corozal",data:[{0:"corozal village 1",1:"corozal village 2",2:"corozal village 3"}]},{name:"orangewalk",formatted_name:"Orange Walk",data:[{0:"orange walk village 1",1:"orange walk village 2",2:"orange walk village 3"}]},{name:"belize",formatted_name:"Belize",data:[{0:"belize village 1",1:"belize village 2",2:"belize village 3"}]},{name:"cayo",formatted_name:"Cayo",data:[{0:"cayo village 1",1:"cayo village 2",2:"cayo village 3"}]},{name:"stanncreek",formatted_name:"Stann Creek",data:[{0:"stann creek village 1",1:"stann creek village 2",2:"stann creek village 3"}]},{name:"toledo",formatted_name:"Toledo",data:[{0:"toledo village 1",1:"toledo village 2",2:"toledo village 3"}]}],ae=function(){var e=Object(k.a)("latestdata",B),a=e.data,t=e.isLoading,i=Object(r.useState)(""),o=Object(l.a)(i,2),c=o[0],m=o[1];Object(r.useEffect)((function(){if(J.a.initialize("UA-175547717-1"),J.a.pageview(window.location.pathname+window.location.search),a){var e=Number(a.data[0].lastUpdate),t=new Date(e);m(t.toDateString())}}),[a,t]);var p=function(e){ee.filter((function(a){return a.name===e.target.getAttribute("data-value")}))};return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header"},n.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),n.a.createElement("h1",null,n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")," ","Belize Coronavirus (covid-19) cases and live updates"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("h4",null,"\ud83c\udde7\ud83c\uddff Total Cases: ",t?"loading...":null===a||void 0===a?void 0:a.data[0].confirmed," \ud83c\udde7\ud83c\uddff ",n.a.createElement("br",null),n.a.createElement("br",null)," ",n.a.createElement("span",null,"Last Updated: ",t?"loading...":c)),n.a.createElement("div",{className:"screening-data"},n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Test Done"),n.a.createElement("img",{src:v.a,alt:"Belize Coronavirus updates"}),n.a.createElement("p",{className:"text"},"19,351")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Under Investigation"),n.a.createElement("img",{src:h.a,alt:"Belize Coronavirus under investigation"}),n.a.createElement("p",{className:"text"},"531")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Negative"),n.a.createElement("img",{src:b.a,alt:"Belize negative cases"}),n.a.createElement("p",{className:"text"},"14799")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Confirmed"),n.a.createElement("img",{src:d.a,alt:"Belize Coronavirus confirmed"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":null===a||void 0===a?void 0:a.data[0].confirmed," ")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Deseased"),n.a.createElement("img",{src:E.a,alt:"Belize Coronavirus deseased"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":null===a||void 0===a?void 0:a.data[0].deaths)),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Recovered"),n.a.createElement("img",{src:u.a,alt:"Belize Coronavirus recovered"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":null===a||void 0===a?void 0:a.data[0].recovered)),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Active"),n.a.createElement("img",{src:N.a,alt:"Belize Coronavirus Active cases"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":null===a||void 0===a?void 0:a.data[0].active)))),n.a.createElement("div",{className:"grid-2"},n.a.createElement(M,null),n.a.createElement(Z,null)),n.a.createElement("div",{className:"grid-2"},n.a.createElement(P,null),n.a.createElement(Q,null)),n.a.createElement("div",{className:"container"},n.a.createElement($,null)),n.a.createElement("div",{className:"map-container"},n.a.createElement("div",{className:"map-container-inner"},n.a.createElement("div",{className:"map-data-col"},n.a.createElement("h1",{className:"paper-title"},"View Cases on Map"),n.a.createElement("div",{className:"districts-row"},n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"corozal"},"Corozal"),n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"belize"},"Belize"),n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"orangewalk"},"Orange Walk"),n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"cayo"},"Cayo"),n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"stanncreek"},"Stann Creek"),n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"toledo"},"Toledo")),n.a.createElement("div",{className:"affected-areas"},n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")))),n.a.createElement(q,null))),n.a.createElement(W,null))},te=document.getElementById("root");(null===te||void 0===te?void 0:te.hasChildNodes())?Object(i.hydrate)(n.a.createElement(ae,null),te):Object(i.render)(n.a.createElement(ae,null),te)}},[[33,1,2]]]);
//# sourceMappingURL=main.00769397.chunk.js.map