(this.webpackJsonpreactcharts=this.webpackJsonpreactcharts||[]).push([[0],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),s=(a(49),a(12)),i=a(13),o=a(15),c=a(14),p=a(43),d=a.n(p),m=(a(50),a(26)),u=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={chartData:e.chartData},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"chart"},l.a.createElement("h1",null,"\ud83c\udde7\ud83c\uddffTotal Cases: ",452," \ud83c\udde7\ud83c\uddff"),l.a.createElement(m.Bar,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Cases in "+this.props.location,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}),l.a.createElement(m.Line,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Total Cases in "+this.props.location,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}))}}]),a}(n.Component);u.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right",location:"City"};var h=u,b=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"This site is to show the latest on coronavirus cases based on official reports made from Belize. If you would like to contribute, feel free to do so ",l.a.createElement("a",{href:"https://github.com/lmanzanero/belize-coronavirus-tracker",target:"_blank",rel:"noopener noreferrer"},"here"),l.a.createElement("span",{role:"img",alt:"globe"}," \ud83c\udf0e")))},g=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={chartData:e.chartData},n}return Object(i.a)(a,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartData:{labels:["Corozal","Orange Walk","San Pedro","Belize City","Cayo","Stann Creek","Toledo"],datasets:[{label:"Cases",data:[42,129,158,74,34,14,1],backgroundColor:["rgba(255, 99, 132, 0.6)","#ffa500","rgba(54, 162, 235, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)"]}]}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),l.a.createElement("h2",null,"Belize Coronavirus Cases"),l.a.createElement("div",{className:"screening-data"},l.a.createElement("div",{className:"btn"},"Tests Done"),l.a.createElement("div",{className:"btn"},"Under Investigation ",l.a.createElement("span",null)),l.a.createElement("div",{className:"btn"},"Negative",l.a.createElement("span",null,"-")),l.a.createElement("div",{className:"btn"},"Confirmed",l.a.createElement("span",null,"+")),l.a.createElement("div",{className:"btn"},"Deseased",l.a.createElement("span",null)),l.a.createElement("div",{className:"btn"},"Recovered",l.a.createElement("span",null)),l.a.createElement("div",{className:"btn"},"Active",l.a.createElement("span",null)))),l.a.createElement(h,{chartData:this.state.chartData,location:"Belize",legendPosition:"bottom"}),l.a.createElement(b,null))}}]),a}(n.Component),E=document.getElementById("root");E.hasChildNodes()?Object(r.hydrate)(l.a.createElement(g,null),E):Object(r.render)(l.a.createElement(g,null),E)},43:function(e,t,a){e.exports=a.p+"static/media/belize-flag.718e720a.png"},44:function(e,t,a){e.exports=a(150)},49:function(e,t,a){},50:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.473ae4f1.chunk.js.map