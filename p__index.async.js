"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{78745:function(fe,f,n){n.r(f),n.d(f,{default:function(){return Ee}});var b=n(62435),s=n(20109),g=n(96074),D=n(12845),T=n(24019),e=n(86074),N=function(r){var u=r.dataSource.map(function(t,i){return{label:"",dot:i===r.dataSource.length-1?(0,e.jsx)(T.Z,{style:{fontSize:"16px"}}):void 0,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("p",{className:"title-line",children:[t.company,(0,e.jsx)("span",{className:"date",children:t.dateRange})]}),(0,e.jsx)("p",{children:t.description})]})}});return(0,e.jsxs)(s.Z,{className:"small-card company-time-line",bordered:!1,children:[(0,e.jsx)(g.Z,{children:"\u5DE5\u4F5C\u7ECF\u5386"}),(0,e.jsx)(D.Z,{reverse:!0,items:u})]})},R=N,a=n(42575),w=n(39778),O=n(79977),y=n(8250),M=function(r){return(0,e.jsxs)(s.Z,{className:"small-card education",bordered:!1,children:[(0,e.jsx)(g.Z,{children:"\u6559\u80B2\u7ECF\u5386"}),(0,e.jsx)(a.Z,{dataSource:r.dataSource,grid:{gutter:16,xs:2,sm:2,md:4,lg:4,xl:4,xxl:4},split:!1,renderItem:function(t){return(0,e.jsx)(a.Z.Item,{extra:(0,e.jsx)(w.Z,{title:t.tagInfo.full,color:"purple",children:(0,e.jsx)(O.Z,{className:"tag",color:t.tagInfo.color,children:t.tagInfo.short})}),children:(0,e.jsx)(s.Z,{children:(0,e.jsx)(s.Z.Meta,{avatar:(0,e.jsx)(y.C,{style:{color:"#f56a00",backgroundColor:"#fde3cf"},children:t.type}),title:t.name,description:(0,e.jsxs)("p",{children:[t.profession,(0,e.jsx)("span",{className:"p-right",children:t.dateRange})]})})})})}})]})},L=M,V=function(r){return(0,e.jsxs)(s.Z,{className:"small-card",bordered:!1,children:[(0,e.jsx)(g.Z,{children:"\u793E\u4EA4\u4E3B\u9875"}),(0,e.jsx)(a.Z,{grid:{gutter:16,xs:1,sm:2,md:2,lg:2,xl:3,xxl:3},dataSource:r.dataSource,renderItem:function(t){var i=t.icon;return(0,e.jsx)(a.Z.Item,{children:(0,e.jsx)(s.Z,{hoverable:!0,children:(0,e.jsx)(s.Z.Meta,{title:(0,e.jsxs)("a",{rel:"noopener noreferrer",href:t.url,target:"_blank",children:[(0,e.jsx)(i,{}),"\xA0",t.title]}),description:t.description})})})}})]})},W=V,k=function(r){return(0,e.jsxs)(s.Z,{className:"small-card",bordered:!1,children:[(0,e.jsx)(g.Z,{children:"\u8054\u7CFB\u65B9\u5F0F"}),(0,e.jsx)(a.Z,{grid:{gutter:16,xs:2,sm:2,md:4,lg:4,xl:4,xxl:4},dataSource:r.dataSource,renderItem:function(t){var i=t.icon;return(0,e.jsx)(a.Z.Item,{children:(0,e.jsx)(s.Z,{children:(0,e.jsx)(s.Z.Meta,{title:(0,e.jsxs)("span",{children:[(0,e.jsx)(i,{}),"\xA0",t.title]}),description:t.description})})})}})]})},G=k,z=n(97857),p=n.n(z),H=n(5574),A=n.n(H),Q=n(71230),K=n(15746),U=n(34381),J=n(29158),X=n(51285),Y=n.n(X),Z=function(r){var u=(0,b.useState)(r.openIndex),t=A()(u,2),i=t[0],j=t[1],E=function(B,C){j(C)};return(0,e.jsx)(Y(),{rotatable:!1,scalable:!1,zoomSpeed:.1,visible:!0,images:r.images,activeIndex:i,onChange:E,onClose:r.onClose})};Z.defaultProps={images:[],openIndex:0};var $=Z,q=function(r){var u=(0,b.useState)({images:[],openIndex:-1}),t=A()(u,2),i=t[0],j=t[1],E={gutter:{xs:8,sm:8,md:8,lg:8,xl:8,xxl:12}},S={xs:24,sm:12,md:8,lg:6,xl:3,xxl:3},B=function(){j({openIndex:-1,images:[]})},C=function(P,d){j({openIndex:d,images:P.map(function(m){var F=p()(p()({},m),{},{alt:m.title});return F})})},Ce=r.dataSource.map(function(o,P){return{key:o.name,label:o.name,extra:o.url?(0,e.jsxs)("a",{rel:"noopener noreferrer",target:"_blank",href:o.url,children:[(0,e.jsx)(J.Z,{}),"\xA0\u94FE\u63A5"]}):null,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Q.Z,p()(p()({className:"project-row"},E),{},{children:o.images.map(function(d,m){return(0,e.jsx)(K.Z,p()(p()({},S),{},{children:(0,e.jsx)(s.Z,{className:"p-b-xs",hoverable:!0,onClick:function(){return C(o.images,m)},cover:(0,e.jsx)("img",{alt:d.title,src:"/".concat(d.src)}),children:(0,e.jsx)(s.Z.Meta,{description:d.title})})}),m)})})),o.descriptions.map(function(d,m){return(0,e.jsx)(a.Z,{size:"small",header:(0,e.jsx)("b",{children:d.header}),bordered:!1,dataSource:d.contents,renderItem:function(Fe){return(0,e.jsx)(a.Z.Item,{children:Fe})}},m)})]})}});return(0,e.jsxs)(s.Z,{className:"small-card",bordered:!1,children:[(0,e.jsx)(g.Z,{children:"\u9879\u76EE\u7ECF\u5386"}),(0,e.jsx)(U.Z,{defaultActiveKey:["0"],accordion:!0,items:Ce}),i.openIndex!==-1&&(0,e.jsx)($,{onClose:B,openIndex:i.openIndex,images:i.images})]})},_=q,ee=n(18073),te=function(r){return(0,e.jsxs)(s.Z,{className:"small-card",bordered:!1,children:[(0,e.jsx)(g.Z,{children:"\u6280\u672F\u6808"}),(0,e.jsx)(a.Z,{dataSource:r.dataSource,renderItem:function(t){return(0,e.jsx)(a.Z.Item,{children:(0,e.jsxs)("p",{children:[(0,e.jsx)(ee.Z,{}),"\xA0",t]})})}})]})},ne=te,l=n(65016),v=n(18610),re=l.Z.Title,x=l.Z.Paragraph,be=l.Z.Text,ye=l.Z.Link,se=function(r){return(0,e.jsx)(s.Z,{bordered:!1,children:(0,e.jsxs)(l.Z,{children:[(0,e.jsx)(re,{children:"\u4E2A\u4EBA\u7B80\u4ECB"}),(0,e.jsx)(x,{children:"\u8C22\u65B0\u6839 13 \u5E74\u6BD5\u4E1A\uFF0C\u4ECE\u4E1A\u81F3\u4ECA\u63A5\u89E6\u4E86.net\u3001.net core \u540E\u7AEF\u5F00\u53D1\u3001\u6570\u636E\u5E93\u3001Docker\u3001CI/CD\u3001\u4E5F\u57FA\u4E8E Python Scrapy \u5199\u8FC7\u51E0\u4E2A\u722C\u866B\uFF1B"}),(0,e.jsx)(x,{children:"\u7ECF\u5386\u4E86\u4ECE\u6700\u539F\u59CB\u7684 jquery\u3001jquery widget\u3001easyui \u5230 ng1.x \u65F6\u4EE3\u518D\u5230\u73B0\u5728\u7684 react\u3001vue \u7684\u4E3B\u6D41\u524D\u7AEF\u6846\u67B6\u7684\u53D1\u5C55\uFF1B"}),(0,e.jsx)(x,{children:"\u5199\u8FC7\u4E1A\u52A1\u9875\u9762\u3001\u642D\u8FC7\u57FA\u7840\u6846\u67B6\u3001\u505A\u8FC7\u9879\u76EE\u7BA1\u7406\u3001\u4E5F\u9020\u8FC7\u524D\u7AEF\u7EC4\u4EF6\u8F6E\u5B50\uFF0C\u5199\u8FC7\u7684\u7EC4\u4EF6\u5982\uFF1A\u62D6\u62FD\u6ED1\u5757\u9A8C\u8BC1\u7801\u3001\u624B\u5199\u7B7E\u540D\u3001\u57FA\u4E8E lodop \u7684 web \u6253\u5370\u3001\u57FA\u4E8E UEditor \u5F62\u5F0F\u7684\u8868\u5355\u8BBE\u8BA1\u5668\u3001\u57FA\u4E8E TinyMCE \u7684\u5173\u952E\u8BCD\u9AD8\u4EAE\u3001\u81EA\u5B9A\u4E49 json \u5F62\u5F0F\u7684\u8868\u5355\u8BBE\u8BA1\u5668\u3001\u57FA\u4E8E signalr \u7684\u63A8\u9001\u3001\u52A0\u5BC6\u4F20\u8F93\u3001token \u5931\u6548\u81EA\u52A8\u5237\u65B0\u3001\u73A9\u8FC7 WPF..."}),(0,e.jsx)(x,{children:"\u57FA\u4E8E taro\u3001uni-app \u7684\u5C0F\u7A0B\u5E8F\u3001app \u5F00\u53D1"}),(0,e.jsx)(x,{children:"\u57FA\u4E8E ast \u5199\u8FC7\u7528\u6765\u68C0\u6D4B\u4EE3\u7801\u786C\u7F16\u7801\u7684 eslint \u63D2\u4EF6\uFF0C\u5173\u6CE8\u4E00\u4E9B\u5982\u4F4E\u4EE3\u7801\u7684\u4E1C\u897F"}),(0,e.jsxs)(x,{children:["\u5178\u578B\u7684\u4EE3\u8868\u4F5C",(0,e.jsx)(v.ZP,{type:"link",href:"https://github.com/xiexingen/topology-designable",target:"_blank",children:"\u62D3\u6251\u56FE\u8BBE\u8BA1\u5668"}),(0,e.jsx)(v.ZP,{type:"link",href:"https://github.com/nomui/nomui",target:"_blank",children:"nomui"}),(0,e.jsx)(v.ZP,{type:"link",href:"https://wetrial.github.io/wetrials/component",target:"_blank",children:"wetrials"})]})]})})},ae=se,ie=l.Z.Paragraph,ue=l.Z.Text,oe=function(r){return(0,e.jsxs)(s.Z,{className:"small-card",bordered:!1,children:[(0,e.jsx)(g.Z,{children:"\u4E2A\u4EBA\u76F8\u5173\u5F00\u6E90\u6280\u672F"}),(0,e.jsx)(a.Z,{dataSource:r.dataSource,renderItem:function(t){return(0,e.jsx)(a.Z.Item,{actions:[(0,e.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:t.github,children:"\u76F4\u8FBEGithub"},t.github)],children:(0,e.jsx)(a.Z.Item.Meta,{avatar:(0,e.jsx)(y.C,{size:"large",style:{backgroundColor:"#87d068"},children:t.title}),className:"ant-typography",title:t.title,description:(0,e.jsxs)(l.Z,{children:[(0,e.jsx)(ue,{strong:!0,children:t.subTitle}),(0,e.jsx)(ie,{children:t.detail})]})})})}})]})},le=oe,ce=n(54811),de=n(51947),I=n(1210),ge=n(1832),he=n(13190),me=n(28548),pe=n(38123),xe=n(88641),je=n(71356),h={companys:[{company:"\u5E7F\u5DDE\u5954\u6B65\u7535\u8111",dateRange:"2012.11-2016.04",description:"\u65B0\u9879\u76EE\u7684\u5F00\u53D1(\u5982\uFF1A\u8BA2\u5355\u3001\u5145\u503C\u3001\u63D0\u73B0\u3001\u652F\u4ED8\u3001\u5FEB\u9012\u67E5\u8BE2\u3001\u77ED\u4FE1\u90AE\u4EF6\u901A\u77E5\u3001web \u5FEB\u9012\u5355\u6253\u5370\u3001\u6761\u7801\u6253\u5370\u3001\u7B2C\u4E09\u65B9\u767B\u5F55\u2026)\u76F8\u5173\u4E8B\u60C5\u3001\u6280\u672F\u5347\u7EA7\u3001\u6846\u67B6\u7684\u652F\u6301\u7B49"},{company:"\u6E56\u5357\u5FAE\u8BD5\u4E91\u533B\u7597",dateRange:"2016.04-2018.09",description:"\u8D1F\u8D23\u516C\u53F8\u6574\u4F53\u524D\u7AEF\u67B6\u6784\u3001\u57FA\u7840\u7EC4\u4EF6\u7814\u53D1\u548C\u7EF4\u62A4\uFF1B\u4E3A\u4E1A\u52A1\u5F00\u53D1\u4EBA\u5458\u63D0\u4F9B\u57F9\u8BAD\u3001\u5B8C\u5584\u5F00\u53D1\u6587\u6863\u7B49\uFF1B\u516C\u53F8 github \u5730\u5740:https://github.com/wetrial\u3001https://github.com/nomui/nomui"},{company:"\u5B89\u514B\u521B\u65B0",dateRange:"2021.07-2022.01",description:"\u6280\u672F\u6808\u4E3A vue + vuetify + nuxt \u7684 ssr\uFF0C\u8D1F\u8D23\u4E1A\u52A1\u7684\u5F00\u53D1\u8FED\u4EE3\u3001\u62BD\u53D6\u57FA\u5EFA\uFF1B\u8D1F\u8D23\u4E86\u5982:\u591A\u8BED\u8A00\u786C\u7F16\u7801\u7684lint\u5DE5\u5177\u3001\u57FA\u7840 filter \u7EC4\u4EF6\u7B49"},{company:"\u5947\u5B89\u4FE1",dateRange:"2022.02-\u76EE\u524D",description:"\u4E3B\u8981\u53C2\u4E0E\u5927\u79B9\u5E73\u53F0 6.4.0\u30016.60.0\u30016.62.0\u30016.70.0 \u7B49\u7248\u672C\u7684\u8FED\u4EE3\u5F00\u53D1\u4EE5\u53CA\u56FD\u5BB6\u7535\u7F51\u9879\u76EE\u7684\u5B9A\u5236\u5316\u5F00\u53D1\uFF0C\u6D89\u53CA\u5230\u7684\u6A21\u5757\u6709:\u6D88\u606F\u4E2D\u5FC3\u3001\u65E5\u5FD7\u68C0\u7D22\u3001\u544A\u8B66\u3001\u4E8B\u4EF6\u3001\u62D3\u6251\u56FE\u7B49\u6A21\u5757\u7684\u5F00\u53D1\u5DE5\u4F5C"}],educations:[{name:"\u6E56\u5357\u4FE1\u606F\u804C\u4E1A\u6280\u672F\u5B66\u9662",type:"\u4E13\u79D1",profession:"\u8BA1\u7B97\u673A\u8F6F\u4EF6\u6280\u672F",dateRange:"2010-2013",tagInfo:{short:"\u5168",color:"success",full:"\u5168\u65E5\u5236"}},{name:"\u4E2D\u5357\u6797\u4E1A\u79D1\u6280\u5927\u5B66",type:"\u672C\u79D1",profession:"\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F",dateRange:"2014-2016",tagInfo:{short:"\u51FD",color:"processing",full:"\u51FD\u6388"}}],socials:[{icon:ce.Z,url:"https://blog.xxgtalk.cn",title:"\u4E2A\u4EBA\u535A\u5BA2",description:"\u4E2A\u4EBA\u535A\u5BA2\u5206\u4EAB"},{icon:de.Z,url:"https://xiexingen.github.io/hand-tear-ahooks/hooks/async/use-request",title:"\u624B\u6495ahooks",description:"\u5B66\u4E60\u7814\u7A76ahooks\u6E90\u7801"},{icon:I.Z,url:"https://wetrial.github.io/wetrials",title:"wetrials",description:"\u516C\u53F8\u7684\u524D\u7AEF\u7EC4\u4EF6\u5E93"},{icon:I.Z,url:"https://www.github.com/xiexingen",title:"\u4E2A\u4EBAgithub",description:"\u4E2A\u4EBA\u5B66\u4E60\u3001\u5A31\u4E50\u7684\u4E2A\u4EBAgithub"},{icon:ge.Z,url:"https://github.com/xiexingen/CTS.Signalr",title:"signalr",description:"\u57FA\u4E8ESignalr\u5B9E\u73B0\u7684\u63A8\u9001"},{icon:he.Z,url:"https://github.com/crawlab-team/artipub",title:"artipub",description:"\u53C2\u4E0E\u7684\u793E\u533A\u9879\u76EE"}],concats:[{icon:me.Z,title:"\u624B\u673A",description:"18569590930"},{icon:pe.Z,title:"QQ",description:"1002275364"},{icon:xe.Z,title:"\u90AE\u7BB1",description:"1002275364@qq.com"},{icon:je.Z,title:"\u5FAE\u4FE1",description:"xxg1002275364"}],technicals:["React\u3001Antd\u3001TypeScript\u3001Webpack\u3001Nodejs\u3001Vue\u3001ElementUI\u3001umi\u3001taro\u3001uni-app","AST\u3001\u4F4E\u4EE3\u7801\u7B49","axios\u3001lodash\u3001dayjs\u3001bpmnjs...",".NET Core\u3001SqlServer\u3001Dapper\u3001EF\u3001PetaPoco\u3001WPF\u3001ABP\u3001Redis\u3001MongoDB","Docker\u3001CICD\u3001Linux","\u7B2C\u4E09\u65B9\u652F\u4ED8\u3001\u7B2C\u4E09\u65B9\u767B\u5F55\u3001\u5FEB\u9012\u63A5\u53E3\u3001\u77ED\u4FE1\u63A5\u53E3\u3001web\u5FEB\u9012\u5355\u6253\u5370\u3001\u6761\u7801\u6253\u5370\u3001\u5BFC\u51FA excel,word,pdf \u7B49\u5E38\u7528\u7B2C\u4E09\u7684\u4E1C\u897F"],projects:[{name:"\u5927\u79B9\u5E73\u53F0",url:"",descriptions:[{header:"\u4EA7\u54C1\u4ECB\u7ECD",contents:["\u5927\u79B9\u5E73\u53F0\u662F\u9762\u5411\u5B89\u5168\u5927\u6570\u636E\u7684\u901A\u7528\u5F00\u53D1\u5206\u6790\u5E73\u53F0\uFF0C\u5E76\u63D0\u4F9B\u914D\u5957\u7684\u5185\u7F6E\u5B89\u5168\u80FD\u529B;\u5176\u6838\u5FC3\u80FD\u529B\u5305\u62EC\u6570\u636E\u63A5\u5165\u3001\u6570\u636E\u6CBB\u7406\u3001\u4E91\u5730\u534F\u540C\u3001\u8054\u5408\u5206\u6790\u7CFB\u7EDF\u3001\u4E8B\u4EF6\u5206\u6790\u4E0E\u7BA1\u7406\u3001\u5B89\u5168\u8BBE\u5907\u63A5\u5165..."]},{header:"\u4E3B\u8981\u804C\u8D23",contents:["\u4E3B\u8981\u53C2\u4E0E\u5927\u79B9\u5E73\u53F0 6.4.0\u30016.60.0\u30016.62.0\u30016.70.0 \u7B49\u7248\u672C\u7684\u8FED\u4EE3\u5F00\u53D1\u4EE5\u53CA\u56FD\u5BB6\u7535\u7F51\u9879\u76EE\u7684\u5B9A\u5236\u5316\u5F00\u53D1\uFF0C\u6D89\u53CA\u5230\u7684\u6A21\u5757\u6709:\u6D88\u606F\u4E2D\u5FC3\u3001\u65E5\u5FD7\u68C0\u7D22\u3001\u544A\u8B66\u3001\u4E8B\u4EF6\u3001\u62D3\u6251\u56FE\u7B49\u6A21\u5757\u7684\u5F00\u53D1\u5DE5\u4F5C"]},{header:"\u67B6\u6784\u76F8\u5173",contents:["\u5408\u8BA1\u6709\u4E09\u56DB\u5341\u4E2A\u5FAE\u5E94\u7528\uFF0C\u5168\u90E8\u57FA\u4E8E\u81EA\u5B9A\u4E49\u5FAE\u524D\u7AEF\u6846\u67B6\u7BA1\u7406(\u57FA\u4E8E qiankun \u4E8C\u5F00\u7684\u5FAE\u524D\u7AEF\u6846\u67B6)"]}],images:[{src:"imgs/dayu/alert-normal.png",title:"\u544A\u8B66\u6A21\u5757"},{src:"imgs/dayu/alert-add-filter.png",title:"\u6DFB\u52A0\u5230\u68C0\u7D22"},{src:"imgs/dayu/alert-fields.png",title:"\u81EA\u5B9A\u4E49\u5C55\u793A\u5217"},{src:"imgs/dayu/alert-sort.png",title:"\u81EA\u5B9A\u4E49\u6392\u5E8F"},{src:"imgs/dayu/alert-advance.png",title:"\u9AD8\u7EA7\u6A21\u5F0F"},{src:"imgs/dayu/topology-design.png",title:"\u62D3\u6251\u56FE\u8BBE\u8BA1\u5668"},{src:"imgs/dayu/topology-bind.png",title:"\u62D3\u6251\u56FE\u7ED1\u5B9A\u8BBE\u5907"},{src:"imgs/dayu/topology-view.png",title:"\u62D3\u6251\u56FE\u5B9E\u9645\u4E0A\u56FE"}]},{name:"\u5B9D\u9A6CMINI\u5C0F\u7A0B\u5E8F",url:"",descriptions:[{header:"\u4EA7\u54C1\u4ECB\u7ECD",contents:["\u4E3B\u8981\u662F\u96C6\u6210\u5728\u5FAE\u4FE1\u7AEF\u7684\u5C0F\u7A0B\u5E8F\uFF0C\u65B9\u4FBF\u7528\u6237\u5728\u7EBF\u9884\u7EA6\u3001\u9009\u8D2D\u8F66\u578B"]},{header:"\u4E3B\u8981\u804C\u8D23",contents:["\u8D1F\u8D23\u8BE5\u5C0F\u7A0B\u5E8F\u7684\u5F00\u53D1\uFF0C\u8C03\u7528\u540E\u7AEFapi\u6765\u5B9E\u73B0\u529F\u80FD\u3002"]},{header:"\u67B6\u6784\u76F8\u5173",contents:["\u91C7\u7528 taro + dva \u6765\u5B9E\u73B0\u591A\u7AEF\uFF0C\u652F\u6301\u7F16\u8BD1\u5230\u5C0F\u7A0B\u5E8F\u3001h5\u9875\u9762\uFF0C\u4E00\u5957\u4EE3\u7801\u5B9E\u73B0\u4E24\u5957\u7CFB\u7EDF"]}],images:[{src:"imgs/mini-car/barcode.jpg",title:"\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801"},{src:"imgs/mini-car/home.png",title:"\u9996\u5C4F"},{src:"imgs/mini-car/list.png",title:"\u8F66\u8F86\u5217\u8868"},{src:"imgs/mini-car/list-detail.png",title:"\u5E26\u90E8\u5206\u8BE6\u60C5\u7684\u5217\u8868"},{src:"imgs/mini-car/detail.png",title:"\u8F66\u8F86\u8BE6\u7EC6\u4FE1\u606F"},{src:"imgs/mini-car/pre-order.png",title:"\u9884\u5B9A|\u9884\u7EA6\u8BD5\u9A7E"},{src:"imgs/mini-car/me.png",title:"\u4E2A\u4EBA\u4E2D\u5FC3"}]},{name:"Wetrial\u4E34\u5E8A\u8BD5\u9A8C\u5E73\u53F0-\u836F\u7269\u8B66\u6212\u7EBF\u7CFB\u7EDF",url:"https://www.wetrial-pv.com",descriptions:[{header:"\u4EA7\u54C1\u4ECB\u7ECD",contents:["\u4E3B\u8981\u7528\u4E8E\u8BB0\u5F55\u4E34\u5E8A\u8BD5\u9A8C\u8FC7\u7A0B\u4E2D\u7684\u4E0D\u826F\u4E8B\u4EF6\u3001\u53CD\u5E94\u7B49\u5F62\u6210\u62A5\u544A\u4EE5GateWay\u5F62\u5F0F\u5BF9\u63A5\u56FD\u5BB6\u836F\u76D1\u5C40"]},{header:"\u4E3B\u8981\u804C\u8D23",contents:["\u8D1F\u8D23\u8BE5\u7CFB\u7EDF\u7684\u6574\u4F53\u5DE5\u4F5C\uFF0C\u628A\u63A7\u9700\u6C42\u642D\u5EFA\u6846\u67B6\u5206\u914D\u4EFB\u52A1\u7B49"]},{header:"\u67B6\u6784\u76F8\u5173",contents:["\u81EA\u7814react\u5757\uFF0C\u5E76\u5206\u6790\u98CE\u9669\u7A0B\u5EA6\uFF0C\u5F15\u5165\u5B9E\u9645\u4F7F\u7528\uFF1B\u6BD4\u4EE5\u5F80\u4E0D\u540C\uFF0C\u4EE5\u6B64\u9879\u76EE\u4E3A\u94FA\u57AB\uFF0C\u540E\u671F\u5E73\u53F0\u7684\u6240\u6709\u524D\u7AEF\u90E8\u5206\u90FD\u5C06\u5207\u6362\u5230react\u6808","\u91C7\u7528\u524D\u540E\u7AEF\u5B8C\u5168\u5206\u79BB\u5F62\u5F0F\uFF0C\u524D\u7AEF\u91C7\u7528react+antd+roadhog+dva+umi \u540E\u7AEF\u4EC5\u901A\u8FC7api\u63D0\u4F9B\u6570\u636E"]}],images:[{src:"imgs/pv/admin.png",title:"\u4F01\u4E1A\u7BA1\u7406\u5458"},{src:"imgs/pv/baogao.png",title:"pv\u62A5\u544A\u7BA1\u7406"},{src:"imgs/pv/status.png",title:"\u6D41\u7A0B\u72B6\u6001"},{src:"imgs/pv/zsy.png",title:"\u54CD\u5E94\u5F0F\u5E03\u5C40"}]},{name:"Wetrial\u4E34\u5E8A\u8BD5\u9A8C\u5E73\u53F0",url:"https://www.wetrial.com",descriptions:[{header:"\u4EA7\u54C1\u4ECB\u7ECD",contents:["\u4E3B\u8981\u4E3A\u521B\u65B0\u836F\u4E34\u5E8A\u7814\u7A76\u63D0\u4F9B\u4E00\u7AD9\u5F0F\u670D\u52A1\u5E73\u53F0\uFF0C \u5C06\u7533\u529E\u65B9\u3001CRO\u3001SMO\u3001\u673A\u6784\u3001\u53D7\u8BD5\u8005\u3001\u7814\u7A76\u8005\u3001CRA\u3001CRC \u7B49\u5E76\u8054\u8D77\u6765\uFF1B\u5B9E\u73B0\u9879\u76EE\u4EFB\u52A1\u6D41\u3001\u4FE1\u606F\u6D41\u3001\u6570\u636E\u6D41\u3001\u8D44\u91D1\u6D41\u7684\u53EF\u63A7","\u6574\u5757\u5E73\u53F0\u7531Wetrial\u3001CTMS\u3001SIS\u3001EDC\u3001IWRC\u3001PV\u7B49\u7CFB\u7EDF\u7EC4\u6210\uFF0C\u53EF\u4EE5\u5B8C\u6210\u6574\u5957\u4E34\u5E8A\u7814\u7A76\u7684\u6D41\u7A0B"]},{header:"\u4E3B\u8981\u804C\u8D23",contents:["\u8FDB\u5EA6\u7BA1\u7406\u6A21\u5757\u7684\u540E\u7AEFapi\u3001\u524D\u7AEF\u9875\u9762\u3001\u63A8\u9001\u7B49","\u81EA\u4E3B\u7814\u53D1\u7684jui\u524D\u7AEF\u6846\u67B6\u7684\u7EF4\u62A4\u3001\u8FED\u4EE3\u3001\u5347\u7EA7\u3001bug\u4FEE\u6539\u7B49","\u540E\u7AEF\u5E95\u5C42\u57FA\u7840\u6846\u67B6\u7684\u5F00\u53D1\u3001\u89E3\u51B3\u9047\u5230\u7684\u95EE\u9898\u3001\u7814\u7A76\u65B0\u6280\u672F\u5E76\u8BC4\u4F30\u53EF\u884C\u6027\u5F15\u5165\u4F7F\u7528"]}],images:[{src:"imgs/cts/message.png",title:"\u6D88\u606F"},{src:"imgs/cts/progressAssignUser.png",title:"\u6307\u6D3E\u8D23\u4EFB\u4EBA"},{src:"imgs/cts/progressComment.png",title:"\u8BC4\u8BBA"},{src:"imgs/cts/progressDrag.png",title:"\u9879\u76EE\u7BA1\u7406\u62D6\u62FD"},{src:"imgs/cts/progressEdit.png",title:"\u9879\u76EE\u7BA1\u7406\u7F16\u8F91"},{src:"imgs/cts/progressListEdit.png",title:"\u9879\u76EE\u7BA1\u7406\u5217\u8868\u7F16\u8F91"},{src:"imgs/cts/progressMyTaskGroupByProject.png",title:"\u6211\u7684\u4EFB\u52A1\u5206\u7EC4"},{src:"imgs/cts/projectCollect.png",title:"\u9879\u76EE\u7EDF\u8BA1"}]},{name:"\u5929\u9A6C\u5947\u5175-\u8DE8\u5883\u7535\u5546\u8F6C\u8FD0\u7CFB\u7EDF",url:"https://www.spacehorse.cn",descriptions:[{header:"\u4EA7\u54C1\u4ECB\u7ECD",contents:["\u4E3B\u8981\u7528\u6237\u7FA4\u4F53:\u6D77\u6DD8\u5BA2\u3001B \u7C7B\u7528\u6237;\u6D77\u6DD8\u5BA2\u548C B \u7C7B\u7528\u6237\u53EF\u4EE5\u5728\u6D77\u5916\u7535\u5546\u5E73\u53F0\u6216\u7EBF\u4E0B\u5B9E\u4F53\u5E97\u94FA\u8D2D\u4E70\u559C\u6B22\u7684\u5546\u54C1\uFF0C\u5C06\u5546\u54C1\u6253\u5305\u5BC4\u9001\u5230\u6211\u4EEC\u7684\u6D77\u5916\u4ED3\u5E93\uFF0C\u4ED3\u5E93\u6536\u5230\u5305\u88F9\u540E\u8FDB\u884C\u4E00\u4E9B\u5217(\u52A0\u56FA\u3001\u6E05\u70B9\u3001\u5408\u7BB1\u3001\u62C6\u7BB1\u3001\u6253\u5FEB\u9012\u5355\u2026)\u64CD\u4F5C\u540E\uFF0C\u5C06\u5305\u88F9\u9001\u4EA4\u6D77\u5173\u6E05\u5173\uFF0C\u6700\u540E\u901A\u8FC7\u56FD\u5185\u5FEB\u9012\u5BC4\u9001\u5230\u7528\u6237\u624B\u4E0A"]},{header:"\u4E3B\u8981\u804C\u8D23",contents:["\u5728\u8BE5\u7CFB\u7EDF\u4E2D\u8D1F\u8D23\u6574\u4E2A\u7CFB\u7EDF\u7684\u529F\u80FD\u8BBE\u8BA1\u3001\u5F00\u53D1(\u5982\uFF1A\u8BA2\u5355\u3001\u5145\u503C\u3001\u63D0\u73B0\u3001\u652F\u4ED8\u3001\u5FEB\u9012\u67E5\u8BE2\u3001\u77ED\u4FE1\u90AE\u4EF6\u901A\u77E5\u3001web \u5FEB\u9012\u5355\u6253\u5370\u3001\u6761\u7801\u6253\u5370\u3001\u7B2C\u4E09\u65B9\u767B\u5F55\u2026)\u76F8\u5173\u4E8B\u60C5"]},{header:"\u67B6\u6784\u76F8\u5173",contents:["\u540E\u7AEF\uFF1A\u57FA\u4E8E DDD \u9886\u57DF\u9A71\u52A8\u8BBE\u8BA1\uFF0C\u7CFB\u7EDF\u5206\u4E3A\u6838\u5FC3\u6846\u67B6\u5C42\u3001\u9886\u57DF\u5C42\u3001\u5E94\u7528\u5C42\u3001\u5C55\u793A\u5C42","\u524D\u7AEF:\u81EA\u5B9A\u4E49 js \u63D2\u4EF6\u5E93(\u5F39\u7A97\u3001\u5206\u9875\u3001\u81EA\u52A8\u5B8C\u6210\u3001\u9009\u62E9\u3001\u6D88\u606F\u63D0\u793A\u3001ajax \u6269\u5C55\u7B49)","\u4F7F\u7528 bower \u6765\u7BA1\u7406\u7B2C\u4E09\u65B9\u7684\u4E00\u4E9B\u63D2\u4EF6\u3001\u901A\u8FC7 gulp \u6765\u5408\u5E76\u538B\u7F29 js\u3001css(\u653E\u5F03\u540E\u53F0\u7684bundle)\u6765\u8FBE\u5230\u4F18\u5316\u7F51\u7EDC\u8BF7\u6C42\u7684\u76EE\u7684"]}],images:[{src:"imgs/spacehorse/01home.png",title:"\u9996\u9875"},{src:"imgs/spacehorse/02home.png",title:"\u652F\u6301\u56FD\u5BB6"},{src:"imgs/spacehorse/02login.png",title:"\u767B\u5F55"},{src:"imgs/spacehorse/03memberCenter.png",title:"\u4F1A\u5458\u4E2D\u5FC3"},{src:"imgs/spacehorse/05package2.png",title:"\u5305\u88F9\u5FEB\u9012"},{src:"imgs/spacehorse/06warehouse.png",title:"\u4ED3\u5E93"},{src:"imgs/spacehorse/cost.png",title:"\u8D39\u7528"},{src:"imgs/spacehorse/costCalc.png",title:"\u8BA1\u7B97\u5668"}]},{name:"HDaya ERP",url:"",descriptions:[{header:"\u4EA7\u54C1\u4ECB\u7ECD",contents:["\u672C ERP \u662F\u4E3A\u9999\u6E2F\u5927\u9091\u56FD\u9645\u6D0B\u884C\u6709\u9650\u516C\u53F8(HDaya)\u516C\u53F8\u5F00\u53D1\u4F7F\u7528\uFF0C\u96C6\u8BA2\u5355\u3001\u91C7\u8D2D\u3001\u6536\u8D27\u3001\u53D1\u7968\u3001\u51ED\u8BC1\u3001\u8D22\u52A1\u62A5\u8868\u7B49\u529F\u80FD"]},{header:"\u4E3B\u8981\u804C\u8D23",contents:["\u4EE3\u7801\u751F\u6210\u5DE5\u5177 CodeSmith \u6A21\u677F\u7684\u7F16\u5199","\u901A\u7528\u5206\u9875\u3001\u9AD8\u7EA7\u67E5\u8BE2\u3001\u6D88\u606F\u5904\u7406\u3001\u901A\u7528\u9A8C\u8BC1\u3001\u6743\u9650\u5904\u7406","\u6A21\u5757 SalesOrder\u3001PurchaseOrder\u3001GRN\u3001Invoice\u3001Currency\u3001\u81EA\u52A8 Generate Voucher \u7684\u540E\u53F0\u53CA\u524D\u53F0\u5B9E\u73B0","\u5386\u53F2\u6570\u636E\u7684\u89E3\u6790\u53CA\u5220\u9664\u64CD\u4F5C\u7684\u8BB0\u5F55\u3001\u663E\u793A","\u6839\u636E\u7528\u6237\u6743\u9650\u751F\u6210 Excel \u6A21\u677F\u53CA Excel \u5BFC\u5165\u5BFC\u51FA\u901A\u7528\u5E93","Code Review\u3001\u6027\u80FD\u4F18\u5316\u53CA\u5176\u4ED6\u2026"]}],images:[{src:"imgs/hdaya/home.png",title:"Home"},{src:"imgs/hdaya/MainQuickKey.png",title:"Hot Key"},{src:"imgs/hdaya/deleteLog.png",title:"Delete Log"},{src:"imgs/hdaya/invoiceAdvanceSearch.png",title:"Advance Search"},{src:"imgs/hdaya/invoiceAmount.png",title:"Invoice Amount"},{src:"imgs/hdaya/invoicePackList.png",title:"Invoice Pack List"},{src:"imgs/hdaya/labelPrint.png",title:"Label Print"},{src:"imgs/hdaya/log.png",title:"Logs"}]},{name:"\u7279\u767E\u60E0\u4F1A\u5458\u7CFB\u7EDF",url:"https://github.com/xiexingen/Bootstrap-SmartForm",descriptions:[{header:"\u4EA7\u54C1\u4ECB\u7ECD",contents:["\u8BE5\u7CFB\u7EDF\u9700\u8981\u4F9D\u8D56\u5FAE\u4FE1\uFF0C\u7528\u6237\u5173\u6CE8\u516C\u4F17\u8D26\u53F7\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u516C\u4F17\u8D26\u53F7\u6765\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\uFF0C\u5982\uFF1A\u4F1A\u5458\u6CE8\u518C\u3001\u5347\u7EA7\u3001\u4F18\u60E0\u5238\u3001\u79EF\u5206\u5238\u3001\u793C\u54C1\u7B49"]},{header:"\u4E3B\u8981\u804C\u8D23",contents:["\u5728\u8BE5\u9879\u76EE\u4E2D\u4E3B\u8981\u8D1F\u8D23\u524D\u7AEF\u76F8\u5173\uFF1B\u57FA\u4E8E jquery \u548C bootstrap \u81EA\u5B9A\u610F\u4E86\u4E00\u5957\u7EC4\u4EF6\uFF0C\u5305\u542B\uFF1A\u6D88\u606F\u63D2\u4EF6\u3001\u5F39\u7A97\u63D2\u4EF6\u3001\u5206\u9875\u63D2\u4EF6\u3001\u8868\u5355\u63D2\u4EF6\u7B49","Note:\u8868\u5355\u63D2\u4EF6\u5DF2\u7ECF\u4E0A\u4F20\u5230 github","   \u5730\u5740\uFF1Ahttps://github.com/xiexingen/Bootstrap-SmartForm","   \u76F8\u5173\u4ECB\u7ECD\uFF1Ahttps://www.cnblogs.com/xiexingen/p/4555416.html"]}],images:[]}],opens:[{github:"https://github.com/xiexingen/topology-designable",title:"\u62D3\u6251\u56FE",subTitle:"\u57FA\u4E8E x6 \u7684\u62D3\u6251\u56FE\u8BBE\u8BA1\u5668",detail:"\u7528\u4E8E\u8BBE\u8BA1\u7F51\u7EDC\u90E8\u7F72\u62D3\u6251\u56FE\uFF0C\u652F\u6301\u8BBE\u8BA1\u3001\u9884\u89C8"},{github:"https://github.com/nomui/nomui",title:"nomui",subTitle:"\u7EDF\u7B79nomui\u7684\u6574\u4F53\u5F00\u53D1\u5DE5\u4F5C\uFF0C\u5305\u62EC\u81EA\u52A8\u53D1\u5E03\u3001\u7EC4\u4EF6\u5F00\u53D1\u3001\u6587\u6863\u7F16\u5199\u7B49",detail:"\u4E00\u5957\u4F01\u4E1A\u5185\u90E8\u7684\u7EC4\u4EF6\u5E93\uFF0C\u91CD\u590D\u7684\u9020\u8F6E\u5B50\u3002"},{github:"https://github.com/wetrial",title:"Wetrial",subTitle:"\u8D1F\u8D23Wetrial\u7EC4\u7EC7\u4E0B\u6240\u6709\u5E93\u7684\u5F00\u53D1\u3001\u7EF4\u62A4\u5DE5\u4F5C",detail:"\u5305\u62EC\u4E86wetrial\u57FA\u7840\u5E93\u3001jui\u3001cli\u3001\u6587\u6863\u3001hooks\u7B49\u3002"},{github:"https://github.com/xiexingen",title:"\u4E2A\u4EBA\u9879\u76EE",subTitle:"\u5DE5\u4F5C\u8FD9\u4E9B\u5E74\u79EF\u7D2F\u548C\u8D21\u732E\u7684\u4E2A\u4EBA\u4EE3\u7801\u5E93",detail:"\u6D89\u53CA\u540E\u7AEF\u3001jquery\u63D2\u4EF6\u3001taro\u3001uni-app\u3001\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3001umi\u3001antd\u3001ahooks\u3001abp\u3001\u722C\u866B\u7B49\u3002"},{github:"https://github.com/crawlab-team/artipub",title:"ArtiPub",subTitle:"\u4E1A\u4F59\u65F6\u95F4\u53C2\u4E0E\u7684ArtiPub\u4E91\u7AEF\u7248\u672C\u7684\u5F00\u53D1",detail:'ArtiPub (Article Publisher\u7684\u7B80\u79F0\uFF0C\u610F\u4E3A"\u6587\u7AE0\u53D1\u5E03\u8005")\u662F\u4E00\u6B3E\u5F00\u6E90\u7684\u4E00\u6587\u591A\u53D1\u5E73\u53F0\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6587\u7AE0\u4F5C\u8005\u5C06\u7F16\u5199\u597D\u7684\u6587\u7AE0\u81EA\u52A8\u53D1\u5E03\u5230\u6398\u91D1\u3001SegmentFault\u3001CSDN\u3001\u77E5\u4E4E\u3001\u5F00\u6E90\u4E2D\u56FD\u7B49\u6280\u672F\u5A92\u4F53\u5E73\u53F0\uFF0C\u4F20\u64AD\u4F18\u8D28\u77E5\u8BC6\uFF0C\u83B7\u53D6\u6700\u5927\u7684\u66DD\u5149\u5EA6\u3002ArtiPub\u5B89\u88C5\u7B80\u5355\uFF0C\u63D0\u4F9B\u4E86\u591A\u79CD\u5B89\u88C5\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u4E00\u952E\u5B89\u88C5\u4F7F\u7528\uFF0C\u5B89\u88C5\u4E00\u822C\u53EA\u89815\u5206\u949F\u3002ArtiPub\u76EE\u524D\u652F\u6301\u6587\u7AE0\u7F16\u8F91\u3001\u6587\u7AE0\u53D1\u5E03\u3001\u6570\u636E\u7EDF\u8BA1\u7684\u529F\u80FD\uFF0C\u540E\u671F\u6211\u4EEC\u4F1A\u52A0\u5165\u5B58\u91CF\u6587\u7AE0\u5BFC\u5165\u3001\u6570\u636E\u5206\u6790\u7684\u529F\u80FD\uFF0C\u8BA9\u60A8\u66F4\u597D\u7684\u7BA1\u7406\u3001\u4F18\u5316\u60A8\u7684\u6280\u672F\u6587\u7AE0\u3002\u6B64\u5916\uFF0C\u6211\u4EEC\u8FD8\u4F1A\u63A5\u5165\u66F4\u591A\u5A92\u4F53\u6E20\u9053\uFF0C\u771F\u6B63\u505A\u5230\u8BA9\u6587\u7AE0\u968F\u5904\u53EF\u9605\u3002'}]},ve={normal:"normal___VOQRe"},Ee=function(){return(0,e.jsxs)("div",{className:ve.normal,children:[(0,e.jsx)(ae,{}),(0,e.jsx)(ne,{dataSource:h.technicals}),(0,e.jsx)(W,{dataSource:h.socials}),(0,e.jsx)(le,{dataSource:h.opens}),(0,e.jsx)(R,{dataSource:h.companys}),(0,e.jsx)(L,{dataSource:h.educations}),(0,e.jsx)(_,{dataSource:h.projects}),(0,e.jsx)(G,{dataSource:h.concats})]})}}}]);
