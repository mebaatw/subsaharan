(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(156),i=function(e){return r.a.createElement("div",{style:{margin:".5rem",padding:"0rem"}},r.a.createElement("h3",{style:{margin:".0rem"}},r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("p",{style:{marginTop:".2rem"}},e.excerpt))},s=(a(158),a(76),a(35)),c=a.n(s),m=a(7),o=a.n(m),u=a(170),d=a.n(u),p=a(171),h=a.n(p),f=function(e){return r.a.createElement("div",{className:h.a.card},r.a.createElement("img",{src:".."+e.imageSharp,style:{height:"300px"},alt:""}),r.a.createElement("div",{className:h.a.container},r.a.createElement("b",{style:{fontSize:"70%",lineHeight:"1.4em"}},void 0===e.desc?"":r.a.createElement("p",{className:h.a.pt},"Hover here",r.a.createElement("span",{className:h.a.spant},e.desc.desc)))))},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).goToSlide=function(e){var t=document.getElementById("expandedImg");return t.src=a(172)({imgs:e}),t.parentElement.style.display="block",!0},n.state={},n.goToSlide=n.goToSlide.bind(c()(n)),n}return o()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.imgSharp,n=t.imgs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d.a.row},a.map(function(t){var a=t.node;return r.a.createElement("div",{className:d.a.column,key:a.id},null===a.childImageSharp||null===a.childImageSharp.fluid?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:function(){return e.goToSlide(a.childImageSharp.original.src)},id:"smlprnt"},r.a.createElement("a",{href:"#prnt"},r.a.createElement(f,{imageSharp:a.childImageSharp.original.src,desc:void 0===n?"oo":n.find(function(e){return e.name===a.relativePath})})))))})),r.a.createElement("div",{className:d.a.container,id:"prnt"},r.a.createElement("span",{onClick:function(){return document.getElementById("prnt").style.display="none"},className:d.a.closebtn},r.a.createElement("a",{href:"#smlprnt"},r.a.createElement("b",null,"×"))),r.a.createElement("img",{id:"expandedImg",style:{width:"100%"},alt:""}),r.a.createElement("div",{id:"imgtext"})))},t}(n.Component),E=a(173),y=a.n(E),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={slideIndex:0},a.showDivs=a.showDivs.bind(c()(a)),a.plusDivs=a.plusDivs.bind(c()(a)),a}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.showDivs()},a.showDivs=function(){var e,t=document.getElementsByClassName("mySlides");for(this.state.slideIndex>=t.length&&this.setState({slideIndex:1}),this.state.slideIndex<1&&this.setState({slideIndex:t.length}),e=0;e<t.length;e++)t[e].style.display="none";1===t.length?(this.setState({slideIndex:0}),t[0].style.display="block"):void 0===t[this.state.slideIndex-1]?(t[this.state.slideIndex].style.display="block",this.setState({slideIndex:2})):t[this.state.slideIndex-1].style.display="block"},a.plusDivs=function(){this.showDivs(this.setState({slideIndex:this.state.slideIndex+1}))},a.render=function(){var e=this,t=this.props.slides;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:y.a.container},t.map(function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{key:t},r.a.createElement("iframe",{style:{width:"60%",height:"100%",display:"none",marginLeft:"auto",marginRight:"auto"},className:"mySlides",src:e.url,title:e.title,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))}),r.a.createElement("button",{className:y.a.displayleft,onClick:function(){return e.plusDivs()}},"❮"),r.a.createElement("button",{className:y.a.displayright,onClick:function(){return e.plusDivs()}},"❯")))},t}(n.Component);a.d(t,"query",function(){return b});t.default=function(e){var t=e.data,a=t.markdownRemark;return r.a.createElement(l.a,null,r.a.createElement("div",{style:{maxWidth:3050,padding:" 1rem",margin:".0rem"}},r.a.createElement("h1",{style:{textAlign:"center",padding:"30px",margin:".0rem"}},a.frontmatter.title),null===a.html?"":r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),r.a.createElement("br",null),r.a.createElement("br",null),null===t.allFile||0===t.allFile.edges.length?"":r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{imgSharp:t.allFile.edges,imgs:void 0===a.frontmatter.img?" ll":a.frontmatter.img})),r.a.createElement("br",null),r.a.createElement("br",null),null===a.frontmatter.vid||0===a.frontmatter.vid.length?"":r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(v,{slides:a.frontmatter.vid})),r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",{style:{float:" left"}},null===a.frontmatter.url?"":a.frontmatter.url.map(function(e,t){return r.a.createElement(i,{style:{padding:" 1rem",margin:"0rem"},key:t,title:e.title,url:e.url,excerpt:e.desc})}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),null===a.frontmatter.refs||0===a.frontmatter.refs.length?"":r.a.createElement("span",null,r.a.createElement("p",null,"This page uses materials from Wikipedia available in the references. It is released under the  ",r.a.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/3.0/"},"Creative Commons Attribution-Share-Alike License 3.0.")),r.a.createElement("b",null,"References"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{float:" left",margin:"0rem"}},null===a.frontmatter.refs?"":a.frontmatter.refs.map(function(e,t){return r.a.createElement("div",{style:{padding:" 1rem",margin:"0px"},key:t},r.a.createElement("i",{style:{margin:".5rem",padding:"0rem"}}," ",e.ref," "," ",0===e.url.length?"":r.a.createElement("a",{href:e.url},"Link")))}))))};var b="1142229348"},152:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(153);var m=r.a.createContext({}),o=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},155:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),s=a(55),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},156:function(e,t,a){"use strict";var n=a(154),r=a(0),l=a.n(r),i=a(4),s=a.n(i),c=a(152),m=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(c.a,{to:"/subsaharan/",style:{color:"white",textDecoration:"none"}},t))),l.a.createElement("div",null,l.a.createElement(c.a,{to:"/subsaharan/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Home"),l.a.createElement("spn",{style:{color:"white"}},"|"),l.a.createElement(c.a,{to:"/subsaharan/collections/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Collections"),l.a.createElement("spn",{style:{color:"white"}},"|"),l.a.createElement(c.a,{to:"/subsaharan/countries/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Search Country")))};m.propTypes={siteTitle:s.a.string},m.defaultProps={siteTitle:""};var o=m,u=(a(157),function(e){var t=e.children;return l.a.createElement(c.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{siteTitle:e.site.siteMetadata.title,pathPrefix:"subsaharan"}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("footer",{style:{float:"left",padding:" 1rem"}},"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});u.propTypes={children:s.a.node.isRequired};t.a=u},158:function(e,t,a){var n=a(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},172:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=172}}]);
//# sourceMappingURL=component---src-templates-article-slug-js-7d2e195ea2020bfb49f8.js.map