(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),l=a(154),i=a(161);t.default=function(e){var t=e.data;return r.a.createElement(l.a,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(i.a,{slug:t.fields.slug,title:t.frontmatter.title,date:t.frontmatter.date,excerpt:t.excerpt}),r.a.createElement("p",null))}))};var c="474252044"},152:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(153);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},154:function(e,t,a){"use strict";var n=a(155),r=a(0),l=a.n(r),i=a(4),c=a.n(i),o=a(152),u=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(o.a,{to:"/subsaharan/",style:{color:"white",textDecoration:"none"}},t))),l.a.createElement("div",null,l.a.createElement(o.a,{to:"/subsaharan/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Home"),l.a.createElement("spn",{style:{color:"white"}},"|"),l.a.createElement(o.a,{to:"/subsaharan/collections/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Collections"),l.a.createElement("spn",{style:{color:"white"}},"|"),l.a.createElement(o.a,{to:"/subsaharan/countries/",style:{color:"white",textDecoration:"none",margin:"10px"}},"Search Country")))};u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var s=u,m=(a(157),function(e){var t=e.children;return l.a.createElement(o.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{siteTitle:e.site.siteMetadata.title,pathPrefix:"subsaharan"}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("footer",{style:{float:"left",padding:" 1rem"}},"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});m.propTypes={children:c.a.node.isRequired};t.a=m},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},161:function(e,t,a){"use strict";a(162);var n=a(0),r=a.n(n),l=a(152),i=a(169),c=a.n(i);t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{className:c.a.link,to:"/subsaharan/"+e.slug},r.a.createElement("h3",{className:c.a.title},e.title," ",r.a.createElement("span",{className:c.a.greyout},null==e.date||0===e.date.length?"":"("+e.date+")"))),r.a.createElement("img",{src:"/static/dhar-tichitt_13-4db0071844ebd45181f4e1996ee5849f.jpeg",alt:""}),r.a.createElement("p",{className:c.a.excerpt},e.excerpt))}},162:function(e,t,a){"use strict";a(163)("link",function(e){return function(t){return e(this,"a","href",t)}})},163:function(e,t,a){var n=a(11),r=a(19),l=a(20),i=/"/g,c=function(e,t,a,n){var r=String(l(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-templates-article-types-js-4eb83c4a757f944398b8.js.map