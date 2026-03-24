(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Haan Silk`,t=`/logo/haanvn.png`,n=`/hero-section/Treat_your_hair_and_skin_landing_page_2_1728x.webp`,r={eyebrow:`Giới thiệu`,lead:`Blog là nơi chúng tôi chia sẻ cách chọn và sử dụng sản phẩm, mẹo bảo quản, và những câu chuyện nhỏ quanh lụa — dành cho bạn đang tìm hiểu hoặc đã đồng hành cùng thương hiệu.`,sub:`Nội dung hướng đến sự rõ ràng, thực tế; không chen quảng cáo ồn ào giữa các bài viết.`,ctaLabel:`Xem các hướng dẫn bên dưới`,ctaHref:`#home-guides`};function i(){let{eyebrow:t,lead:i,sub:a,ctaLabel:o,ctaHref:s}=r;return`
<div class="home-intro w-full">
  <div
    class="home-intro__bg relative min-h-[min(65vh,600px)] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
    style="${`background-image:url('${n.replace(/'/g,`\\'`)}');`}"
  >
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/28 to-black/35" aria-hidden="true"></div>
    <div class="relative mx-auto flex min-h-[min(65vh,600px)] w-full max-w-none flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div class="mx-auto w-full max-w-2xl text-center text-white">
        <div class="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/75">${t}</div>
        <div class="mt-2 font-serif text-xl font-semibold leading-snug tracking-tight text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.28)] sm:text-2xl lg:text-[1.65rem]">
          Lời mở đầu · ${e}
        </div>
        <div class="mt-4 space-y-3 text-sm leading-relaxed text-white/95 sm:text-[0.95rem]">
          <p>${i}</p>
          <p class="text-xs leading-relaxed text-white/80 sm:text-sm">${a}</p>
        </div>
        <div class="mt-5 flex justify-center">
          <a
            href="${s}"
            class="group inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/55 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
          >
            ${o}
            <span aria-hidden="true" class="transition group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`}var a=[{href:`/`,label:`Trang chủ`},{href:`/search/label/blog`,label:`Blog`},{href:`/search/label/huong-dan`,label:`Hướng dẫn`},{href:`/p/gioi-thieu.html`,label:`Giới thiệu`},{href:`/p/lien-he.html`,label:`Liên hệ`}],o=`rounded-md px-2 py-1.5 text-sm text-brand-text transition hover:bg-brand-surface`;function s(){return a.map(({href:e,label:t})=>`<a class="${o}" href="${e}">${t}</a>`).join(``)}function c(){let n=s();return`
<div class="hs-header sticky top-0 z-40 w-full border-b border-brand-surface bg-white shadow-sm">
  <div class="mx-auto flex w-full items-center justify-between gap-4 px-4 py-1 sm:px-6 sm:py-1.5 lg:px-8">
    <div class="hs-header__brand min-w-0 shrink-0">
      <a href="/" class="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
        <img
          src="${t}"
          alt="${e}"
          width="240"
          height="60"
          class="h-10 w-auto max-w-[min(100%,280px)] object-contain object-left sm:h-12 lg:h-14"
          decoding="async"
          fetchpriority="high"
        />
      </a>
    </div>

    <button
      type="button"
      class="hs-header__menu-btn inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-brand-surface text-brand-text md:hidden"
      aria-expanded="false"
      aria-controls="hs-nav-panel"
      data-hs-toggle="nav"
    >
      <span class="sr-only">Mở menu</span>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round"/>
      </svg>
    </button>

    <div class="hs-header__nav hidden items-center gap-1 md:flex">
      ${n}
    </div>
  </div>

  <div
    id="hs-nav-panel"
    class="hs-header__panel hidden border-t border-brand-surface bg-white py-1.5 md:hidden"
    data-hs-panel="nav"
  >
    <div class="mx-auto flex w-full flex-col gap-1 px-4 sm:px-6 lg:px-8">
      ${n}
    </div>
  </div>
</div>`}function l(e){let t=e.querySelector(`.hs-header`);if(!t)return;let n=t.querySelector(`[data-hs-toggle="nav"]`),r=t.querySelector(`[data-hs-panel="nav"]`);if(!n||!r)return;let i=e=>{r.classList.toggle(`hidden`,!e),n.setAttribute(`aria-expanded`,String(e))};n.addEventListener(`click`,()=>{i(!!r.classList.contains(`hidden`))}),window.addEventListener(`resize`,()=>{window.matchMedia(`(min-width: 768px)`).matches&&i(!1)})}function u(e){return typeof e==`number`}function d(e){return typeof e==`string`}function f(e){return typeof e==`boolean`}function p(e){return Object.prototype.toString.call(e)===`[object Object]`}function m(e){return Math.abs(e)}function h(e){return Math.sign(e)}function g(e,t){return m(e-t)}function _(e,t){return e===0||t===0||m(e)<=m(t)?0:m(g(m(e),m(t))/e)}function v(e){return Math.round(e*100)/100}function y(e){return w(e).map(Number)}function b(e){return e[x(e)]}function x(e){return Math.max(0,e.length-1)}function S(e,t){return t===x(e)}function C(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function w(e){return Object.keys(e)}function T(e,t){return[e,t].reduce((e,t)=>(w(t).forEach(n=>{let r=e[n],i=t[n];e[n]=p(r)&&p(i)?T(r,i):i}),e),{})}function E(e,t){return t.MouseEvent!==void 0&&e instanceof t.MouseEvent}function D(e,t){let n={start:r,center:i,end:a};function r(){return 0}function i(e){return a(e)/2}function a(e){return t-e}function o(r,i){return d(e)?n[e](r):e(t,r,i)}return{measure:o}}function O(){let e=[];function t(t,n,i,a={passive:!0}){let o;if(`addEventListener`in t)t.addEventListener(n,i,a),o=()=>t.removeEventListener(n,i,a);else{let e=t;e.addListener(i),o=()=>e.removeListener(i)}return e.push(o),r}function n(){e=e.filter(e=>e())}let r={add:t,clear:n};return r}function k(e,t,n,r){let i=O(),a=1e3/60,o=null,s=0,c=0;function l(){i.add(e,`visibilitychange`,()=>{e.hidden&&m()})}function u(){p(),i.clear()}function d(e){if(!c)return;o||(o=e,n(),n());let i=e-o;for(o=e,s+=i;s>=a;)n(),s-=a;r(s/a),c&&=t.requestAnimationFrame(d)}function f(){c||=t.requestAnimationFrame(d)}function p(){t.cancelAnimationFrame(c),o=null,s=0,c=0}function m(){o=null,s=0}return{init:l,destroy:u,start:f,stop:p,update:n,render:r}}function A(e,t){let n=t===`rtl`,r=e===`y`,i=r?`y`:`x`,a=r?`x`:`y`,o=!r&&n?-1:1,s=u(),c=d();function l(e){let{height:t,width:n}=e;return r?t:n}function u(){return r?`top`:n?`right`:`left`}function d(){return r?`bottom`:n?`left`:`right`}function f(e){return e*o}return{scroll:i,cross:a,startEdge:s,endEdge:c,measureSize:l,direction:f}}function j(e=0,t=0){let n=m(e-t);function r(t){return t<e}function i(e){return e>t}function a(e){return r(e)||i(e)}function o(n){return a(n)?r(n)?e:t:n}function s(e){return n?e-n*Math.ceil((e-t)/n):e}return{length:n,max:t,min:e,constrain:o,reachedAny:a,reachedMax:i,reachedMin:r,removeOffset:s}}function M(e,t,n){let{constrain:r}=j(0,e),i=e+1,a=o(t);function o(e){return n?m((i+e)%i):r(e)}function s(){return a}function c(e){return a=o(e),d}function l(e){return u().set(s()+e)}function u(){return M(e,s(),n)}let d={get:s,set:c,add:l,clone:u};return d}function ee(e,t,n,r,i,a,o,s,c,l,u,d,p,v,y,b,x,S,C){let{cross:w,direction:T}=e,D=[`INPUT`,`SELECT`,`TEXTAREA`],k={passive:!1},A=O(),M=O(),ee=j(50,225).constrain(v.measure(20)),te={mouse:300,touch:400},ne={mouse:500,touch:600},re=y?43:25,ie=!1,ae=0,N=0,P=!1,F=!1,I=!1,L=!1;function oe(e){if(!C)return;function n(t){(f(C)||C(e,t))&&ue(t)}let r=t;A.add(r,`dragstart`,e=>e.preventDefault(),k).add(r,`touchmove`,()=>void 0,k).add(r,`touchend`,()=>void 0).add(r,`touchstart`,n).add(r,`mousedown`,n).add(r,`touchcancel`,B).add(r,`contextmenu`,B).add(r,`click`,fe,!0)}function se(){A.clear(),M.clear()}function ce(){let e=L?n:t;M.add(e,`touchmove`,de,k).add(e,`touchend`,B).add(e,`mousemove`,de,k).add(e,`mouseup`,B)}function le(e){let t=e.nodeName||``;return D.includes(t)}function R(){return(y?ne:te)[L?`mouse`:`touch`]}function z(e,t){let n=d.add(h(e)*-1),r=u.byDistance(e,!y).distance;return y||m(e)<ee?r:x&&t?r*.5:u.byIndex(n.get(),0).distance}function ue(e){let t=E(e,r);L=t,I=y&&t&&!e.buttons&&ie,ie=g(i.get(),o.get())>=2,!(t&&e.button!==0)&&(le(e.target)||(P=!0,a.pointerDown(e),l.useFriction(0).useDuration(0),i.set(o),ce(),ae=a.readPoint(e),N=a.readPoint(e,w),p.emit(`pointerDown`)))}function de(e){if(!E(e,r)&&e.touches.length>=2)return B(e);let t=a.readPoint(e),n=a.readPoint(e,w),o=g(t,ae),c=g(n,N);if(!F&&!L&&(!e.cancelable||(F=o>c,!F)))return B(e);let u=a.pointerMove(e);o>b&&(I=!0),l.useFriction(.3).useDuration(.75),s.start(),i.add(T(u)),e.preventDefault()}function B(e){let t=u.byDistance(0,!1).index!==d.get(),n=a.pointerUp(e)*R(),r=z(T(n),t),i=_(n,r),o=re-10*i,s=S+i/50;F=!1,P=!1,M.clear(),l.useDuration(o).useFriction(s),c.distance(r,!y),L=!1,p.emit(`pointerUp`)}function fe(e){I&&=(e.stopPropagation(),e.preventDefault(),!1)}function pe(){return P}return{init:oe,destroy:se,pointerDown:pe}}function te(e,t){let n,r;function i(e){return e.timeStamp}function a(n,r){let i=`client${(r||e.scroll)===`x`?`X`:`Y`}`;return(E(n,t)?n:n.touches[0])[i]}function o(e){return n=e,r=e,a(e)}function s(e){let t=a(e)-a(r),o=i(e)-i(n)>170;return r=e,o&&(n=e),t}function c(e){if(!n||!r)return 0;let t=a(r)-a(n),o=i(e)-i(n),s=i(e)-i(r)>170,c=t/o;return o&&!s&&m(c)>.1?c:0}return{pointerDown:o,pointerMove:s,pointerUp:c,readPoint:a}}function ne(){function e(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}return{measure:e}}function re(e){function t(t){return t/100*e}return{measure:t}}function ie(e,t,n,r,i,a,o){let s=[e].concat(r),c,l,u=[],d=!1;function p(e){return i.measureSize(o.measure(e))}function h(i){if(!a)return;l=p(e),u=r.map(p);function o(n){for(let a of n){if(d)return;let n=a.target===e,o=r.indexOf(a.target),s=n?l:u[o];if(m(p(n?e:r[o])-s)>=.5){i.reInit(),t.emit(`resize`);break}}}c=new ResizeObserver(e=>{(f(a)||a(i,e))&&o(e)}),n.requestAnimationFrame(()=>{s.forEach(e=>c.observe(e))})}function g(){d=!0,c&&c.disconnect()}return{init:h,destroy:g}}function ae(e,t,n,r,i,a){let o=0,s=0,c=i,l=a,u=e.get(),d=0;function f(){let t=r.get()-e.get(),i=!c,a=0;return i?(o=0,n.set(r),e.set(r),a=t):(n.set(e),o+=t/c,o*=l,u+=o,e.add(o),a=u-d),s=h(a),d=u,C}function p(){return m(r.get()-t.get())<.001}function g(){return c}function _(){return s}function v(){return o}function y(){return x(i)}function b(){return S(a)}function x(e){return c=e,C}function S(e){return l=e,C}let C={direction:_,duration:g,velocity:v,seek:f,settled:p,useBaseFriction:b,useBaseDuration:y,useFriction:S,useDuration:x};return C}function N(e,t,n,r,i){let a=i.measure(10),o=i.measure(50),s=j(.1,.99),c=!1;function l(){return!(c||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function u(i){if(!l())return;let c=m(e[e.reachedMin(t.get())?`min`:`max`]-t.get()),u=n.get()-t.get(),d=s.constrain(c/o);n.subtract(u*d),!i&&m(u)<a&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(e){c=!e}return{shouldConstrain:l,constrain:u,toggleActive:d}}function P(e,t,n,r,i){let a=j(-t+e,0),o=d(),s=u(),c=f();function l(e,t){return g(e,t)<=1}function u(){let e=o[0],t=b(o);return j(o.lastIndexOf(e),o.indexOf(t)+1)}function d(){return n.map((e,t)=>{let{min:r,max:i}=a,o=a.constrain(e),s=!t,c=S(n,t);return s?i:c||l(r,o)?r:l(i,o)?i:o}).map(e=>parseFloat(e.toFixed(3)))}function f(){if(t<=e+i)return[a.max];if(r===`keepSnaps`)return o;let{min:n,max:c}=s;return o.slice(n,c)}return{snapsContained:c,scrollContainLimit:s}}function F(e,t,n){let r=t[0];return{limit:j(n?r-e:b(t),r)}}function I(e,t,n,r){let i=.1,{reachedMin:a,reachedMax:o}=j(t.min+i,t.max+i);function s(e){return e===1?o(n.get()):e===-1?a(n.get()):!1}function c(t){if(!s(t))return;let n=t*-1*e;r.forEach(e=>e.add(n))}return{loop:c}}function L(e){let{max:t,length:n}=e;function r(e){let r=e-t;return n?r/-n:0}return{get:r}}function oe(e,t,n,r,i){let{startEdge:a,endEdge:o}=e,{groupSlides:s}=i,c=d().map(t.measure),l=f(),u=p();function d(){return s(r).map(e=>b(e)[o]-e[0][a]).map(m)}function f(){return r.map(e=>n[a]-e[a]).map(e=>-m(e))}function p(){return s(l).map(e=>e[0]).map((e,t)=>e+c[t])}return{snaps:l,snapsAligned:u}}function se(e,t,n,r,i,a){let{groupSlides:o}=i,{min:s,max:c}=r,l=u();function u(){let r=o(a),i=!e||t===`keepSnaps`;return n.length===1?[a]:i?r:r.slice(s,c).map((e,t,n)=>{let r=!t,i=S(n,t);return r?C(b(n[0])+1):i?C(x(a)-b(n)[0]+1,b(n)[0]):e})}return{slideRegistry:l}}function ce(e,t,n,r,i){let{reachedAny:a,removeOffset:o,constrain:s}=r;function c(e){return e.concat().sort((e,t)=>m(e)-m(t))[0]}function l(n){let r=e?o(n):s(n),{index:i}=t.map((e,t)=>({diff:u(e-r,0),index:t})).sort((e,t)=>m(e.diff)-m(t.diff))[0];return{index:i,distance:r}}function u(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return c(i);let a=i.filter(e=>h(e)===r);return a.length?c(a):b(i)-n}function d(e,n){return{index:e,distance:u(t[e]-i.get(),n)}}function f(n,r){let o=i.get()+n,{index:s,distance:c}=l(o),d=!e&&a(o);return!r||d?{index:s,distance:n}:{index:s,distance:n+u(t[s]-c,0)}}return{byDistance:f,byIndex:d,shortcut:u}}function le(e,t,n,r,i,a,o){function s(i){let s=i.distance,c=i.index!==t.get();a.add(s),s&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(i.index),o.emit(`select`))}function c(e,t){s(i.byDistance(e,t))}function l(e,n){let r=t.clone().set(e);s(i.byIndex(r.get(),n))}return{distance:c,index:l}}function R(e,t,n,r,i,a,o,s){let c={passive:!0,capture:!0},l=0;function d(d){if(!s)return;function m(t){if(new Date().getTime()-l>10)return;o.emit(`slideFocusStart`),e.scrollLeft=0;let a=n.findIndex(e=>e.includes(t));u(a)&&(i.useDuration(0),r.index(a,0),o.emit(`slideFocus`))}a.add(document,`keydown`,p,!1),t.forEach((e,t)=>{a.add(e,`focus`,e=>{(f(s)||s(d,e))&&m(t)},c)})}function p(e){e.code===`Tab`&&(l=new Date().getTime())}return{init:d}}function z(e){let t=e;function n(){return t}function r(e){t=o(e)}function i(e){t+=o(e)}function a(e){t-=o(e)}function o(e){return u(e)?e:e.get()}return{get:n,set:r,add:i,subtract:a}}function ue(e,t){let n=e.scroll===`x`?o:s,r=t.style,i=null,a=!1;function o(e){return`translate3d(${e}px,0px,0px)`}function s(e){return`translate3d(0px,${e}px,0px)`}function c(t){if(a)return;let o=v(e.direction(t));o!==i&&(r.transform=n(o),i=o)}function l(e){a=!e}function u(){a||(r.transform=``,t.getAttribute(`style`)||t.removeAttribute(`style`))}return{clear:u,to:c,toggleActive:l}}function de(e,t,n,r,i,a,o,s,c){let l=.5,u=y(i),d=y(i).reverse(),f=_().concat(v());function p(e,t){return e.reduce((e,t)=>e-i[t],t)}function m(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function h(e){return a.map((n,i)=>({start:n-r[i]+l+e,end:n+t-l+e}))}function g(t,r,i){let a=h(r);return t.map(t=>{let r=i?0:-n,o=i?n:0,l=i?`end`:`start`,u=a[t][l];return{index:t,loopPoint:u,slideLocation:z(-1),translate:ue(e,c[t]),target:()=>s.get()>u?r:o}})}function _(){let e=o[0];return g(m(d,e),n,!1)}function v(){return g(m(u,t-o[0]-1),-n,!0)}function b(){return f.every(({index:e})=>p(u.filter(t=>t!==e),t)<=.1)}function x(){f.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})}function S(){f.forEach(e=>e.translate.clear())}return{canLoop:b,clear:S,loop:x,loopPoints:f}}function B(e,t,n){let r,i=!1;function a(a){if(!n)return;function o(e){for(let n of e)if(n.type===`childList`){a.reInit(),t.emit(`slidesChanged`);break}}r=new MutationObserver(e=>{i||(f(n)||n(a,e))&&o(e)}),r.observe(e,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:a,destroy:o}}function fe(e,t,n,r){let i={},a=null,o=null,s,c=!1;function l(){s=new IntersectionObserver(e=>{c||(e.forEach(e=>{let n=t.indexOf(e.target);i[n]=e}),a=null,o=null,n.emit(`slidesInView`))},{root:e.parentElement,threshold:r}),t.forEach(e=>s.observe(e))}function u(){s&&s.disconnect(),c=!0}function d(e){return w(i).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:a}=i[r];return(e&&a||!e&&!a)&&t.push(r),t},[])}function f(e=!0){if(e&&a)return a;if(!e&&o)return o;let t=d(e);return e&&(a=t),e||(o=t),t}return{init:l,destroy:u,get:f}}function pe(e,t,n,r,i,a){let{measureSize:o,startEdge:s,endEdge:c}=e,l=n[0]&&i,u=h(),d=g(),f=n.map(o),p=_();function h(){if(!l)return 0;let e=n[0];return m(t[s]-e[s])}function g(){if(!l)return 0;let e=a.getComputedStyle(b(r));return parseFloat(e.getPropertyValue(`margin-${c}`))}function _(){return n.map((e,t,n)=>{let r=!t,i=S(n,t);return r?f[t]+u:i?f[t]+d:n[t+1][s]-e[s]}).map(m)}return{slideSizes:f,slideSizesWithGaps:p,startGap:u,endGap:d}}function me(e,t,n,r,i,a,o,s,c){let{startEdge:l,endEdge:d,direction:f}=e,p=u(n);function h(e,t){return y(e).filter(e=>e%t===0).map(n=>e.slice(n,n+t))}function g(e){return e.length?y(e).reduce((n,u,p)=>{let h=b(n)||0,g=h===0,_=u===x(e),v=i[l]-a[h][l],y=i[l]-a[u][d],S=!r&&g?f(o):0,C=m(y-(!r&&_?f(s):0)-(v+S));return p&&C>t+c&&n.push(u),_&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}function _(e){return p?h(e,n):g(e)}return{groupSlides:_}}function V(e,t,n,r,i,a,o){let{align:s,axis:c,direction:l,startIndex:u,loop:d,duration:f,dragFree:p,dragThreshold:m,inViewThreshold:h,slidesToScroll:g,skipSnaps:_,containScroll:v,watchResize:S,watchSlides:C,watchDrag:w,watchFocus:T}=a,E=ne(),j=E.measure(t),V=n.map(E.measure),H=A(c,l),U=H.measureSize(j),he=re(U),ge=D(s,U),W=!d&&!!v,{slideSizes:G,slideSizesWithGaps:_e,startGap:ve,endGap:ye}=pe(H,j,V,n,d||!!v,i),be=me(H,U,g,d,j,V,ve,ye,2),{snaps:xe,snapsAligned:Se}=oe(H,ge,j,V,be),K=-b(xe)+b(_e),{snapsContained:Ce,scrollContainLimit:we}=P(U,K,Se,v,2),q=W?Ce:Se,{limit:J}=F(K,q,d),Y=M(x(q),u,d),Te=Y.clone(),Ee=y(n),De=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},Oe=({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:i,scrollLooper:a,slideLooper:o,dragHandler:s,animation:c,eventHandler:l,scrollBounds:u,options:{loop:d}},f)=>{let p=e.settled(),m=!u.shouldConstrain(),h=d?p:p&&m,g=h&&!s.pointerDown();g&&c.stop();let _=n.get()*f+i.get()*(1-f);r.set(_),d&&(a.loop(e.direction()),o.loop()),t.to(r.get()),g&&l.emit(`settle`),h||l.emit(`scroll`)},ke=k(r,i,()=>De(Be),e=>Oe(Be,e)),Ae=.68,X=q[Y.get()],je=z(X),Me=z(X),Z=z(X),Q=z(X),$=ae(je,Z,Me,Q,f,Ae),Ne=ce(d,q,K,J,Q),Pe=le(ke,Y,Te,$,Ne,Q,o),Fe=L(J),Ie=O(),Le=fe(t,n,o,h),{slideRegistry:Re}=se(W,v,q,we,be,Ee),ze=R(e,n,Re,Pe,$,Ie,o,T),Be={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:j,slideRects:V,animation:ke,axis:H,dragHandler:ee(H,e,r,i,Q,te(H,i),je,ke,Pe,$,Ne,Y,o,he,p,m,_,Ae,w),eventStore:Ie,percentOfView:he,index:Y,indexPrevious:Te,limit:J,location:je,offsetLocation:Z,previousLocation:Me,options:a,resizeHandler:ie(t,o,i,n,H,S,E),scrollBody:$,scrollBounds:N(J,Z,Q,$,he),scrollLooper:I(K,J,Z,[je,Z,Me,Q]),scrollProgress:Fe,scrollSnapList:q.map(Fe.get),scrollSnaps:q,scrollTarget:Ne,scrollTo:Pe,slideLooper:de(H,U,K,G,_e,xe,q,Z,n),slideFocus:ze,slidesHandler:B(t,o,C),slidesInView:Le,slideIndexes:Ee,slideRegistry:Re,slidesToScroll:be,target:Q,translate:ue(H,t)};return Be}function H(){let e={},t;function n(e){t=e}function r(t){return e[t]||[]}function i(e){return r(e).forEach(n=>n(t,e)),c}function a(t,n){return e[t]=r(t).concat([n]),c}function o(t,n){return e[t]=r(t).filter(e=>e!==n),c}function s(){e={}}let c={init:n,emit:i,off:o,on:a,clear:s};return c}var U={align:`center`,axis:`x`,container:null,slides:null,containScroll:`trimSnaps`,direction:`ltr`,slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function he(e){function t(e,t){return T(e,t||{})}function n(n){let r=n.breakpoints||{};return t(n,w(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{}))}function r(t){return t.map(e=>w(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:r}}function ge(e){let t=[];function n(n,r){return t=r.filter(({options:t})=>e.optionsAtMedia(t).active!==!1),t.forEach(t=>t.init(n,e)),r.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})}function r(){t=t.filter(e=>e.destroy())}return{init:n,destroy:r}}function W(e,t,n){let r=e.ownerDocument,i=r.defaultView,a=he(i),o=ge(a),s=O(),c=H(),{mergeOptions:l,optionsAtMedia:u,optionsMediaQueries:f}=a,{on:p,off:m,emit:h}=c,g=k,_=!1,v,y=l(U,W.globalOptions),b=l(y),x=[],S,C,w;function T(){let{container:t,slides:n}=b;C=(d(t)?e.querySelector(t):t)||e.children[0];let r=d(n)?C.querySelectorAll(n):n;w=[].slice.call(r||C.children)}function E(t){let n=V(e,C,w,r,i,t,c);return t.loop&&!n.slideLooper.canLoop()?E(Object.assign({},t,{loop:!1})):n}function D(e,t){_||(y=l(y,e),b=u(y),x=t||x,T(),v=E(b),f([y,...x.map(({options:e})=>e)]).forEach(e=>s.add(e,`change`,k)),b.active&&(v.translate.to(v.location.get()),v.animation.init(),v.slidesInView.init(),v.slideFocus.init(R),v.eventHandler.init(R),v.resizeHandler.init(R),v.slidesHandler.init(R),v.options.loop&&v.slideLooper.loop(),C.offsetParent&&w.length&&v.dragHandler.init(R),S=o.init(R,x)))}function k(e,t){let n=N();A(),D(l({startIndex:n},e),t),c.emit(`reInit`)}function A(){v.dragHandler.destroy(),v.eventStore.clear(),v.translate.clear(),v.slideLooper.clear(),v.resizeHandler.destroy(),v.slidesHandler.destroy(),v.slidesInView.destroy(),v.animation.destroy(),o.destroy(),s.clear()}function j(){_||(_=!0,s.clear(),A(),c.emit(`destroy`),c.clear())}function M(e,t,n){!b.active||_||(v.scrollBody.useBaseFriction().useDuration(t===!0?0:b.duration),v.scrollTo.index(e,n||0))}function ee(e){M(v.index.add(1).get(),e,-1)}function te(e){M(v.index.add(-1).get(),e,1)}function ne(){return v.index.add(1).get()!==N()}function re(){return v.index.add(-1).get()!==N()}function ie(){return v.scrollSnapList}function ae(){return v.scrollProgress.get(v.offsetLocation.get())}function N(){return v.index.get()}function P(){return v.indexPrevious.get()}function F(){return v.slidesInView.get()}function I(){return v.slidesInView.get(!1)}function L(){return S}function oe(){return v}function se(){return e}function ce(){return C}function le(){return w}let R={canScrollNext:ne,canScrollPrev:re,containerNode:ce,internalEngine:oe,destroy:j,off:m,on:p,emit:h,plugins:L,previousScrollSnap:P,reInit:g,rootNode:se,scrollNext:ee,scrollPrev:te,scrollProgress:ae,scrollSnapList:ie,scrollTo:M,selectedScrollSnap:N,slideNodes:le,slidesInView:F,slidesNotInView:I};return D(t,n),setTimeout(()=>c.emit(`init`),0),R}W.globalOptions=void 0;var G=`mb-1.5 text-[0.7rem] font-medium uppercase tracking-wide text-brand-text/55`,_e=`text-xs text-brand-text/55`;function ve(){return`
<div class="flex flex-1 flex-col" id="home-sketch">
  ${c()}
  ${i()}

  <div class="flex w-full flex-1 flex-col gap-8 px-4 pb-0 pt-4 sm:px-6 sm:pt-5 lg:px-8">
  <div class="sk-region sk-featured">
    <div class="mb-3 flex items-end justify-between gap-3">
      <p class="${G} !mb-0">Blog — bài nổi bật &amp; tiếp nối</p>
      <a href="#" class="text-xs font-medium text-brand-accent hover:underline">Xem tất cả bài viết</a>
    </div>

    <div class="grid gap-4 lg:grid-cols-3 lg:gap-5">
      <div class="lg:col-span-2">
        <div class="relative overflow-hidden rounded-2xl border border-brand-surface bg-white shadow-sm">
          <div class="aspect-[16/9] w-full bg-gradient-to-br from-brand-surface/80 to-brand-bg"></div>
          <div class="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/55 via-black/20 to-transparent" aria-hidden="true"></div>
          <div class="absolute left-0 top-0 p-4 sm:p-5">
            <span class="inline-flex rounded-full bg-brand-accent px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white">Cover story</span>
          </div>
          <div class="absolute bottom-0 left-0 w-full p-4 text-white sm:p-5">
            <div class="text-[0.68rem] uppercase tracking-wide text-white/75">Nhãn / series</div>
            <div class="mt-1.5 text-xl font-semibold leading-snug sm:text-2xl">Tiêu đề bài dài — kiểu hướng dẫn hoặc editorial</div>
            <div class="mt-2 text-sm text-white/85">Dòng mô tả ngắn (excerpt) · đọc thêm →</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="rounded-xl border border-brand-surface bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div class="mb-2 text-[0.65rem] uppercase tracking-wide text-brand-text/55">Bài kế tiếp</div>
          <div class="text-[0.95rem] font-semibold leading-snug text-brand-text">Tiêu đề ngắn · hướng dẫn / mẹo chăm tóc</div>
          <div class="mt-2 text-xs text-brand-text/65">3 phút đọc · cập nhật mới</div>
        </div>

        <div class="rounded-xl border border-brand-surface bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div class="mb-2 text-[0.65rem] uppercase tracking-wide text-brand-text/55">Bài kế tiếp</div>
          <div class="text-[0.95rem] font-semibold leading-snug text-brand-text">Tiêu đề ngắn · cách dùng sản phẩm đúng quy trình</div>
          <div class="mt-2 text-xs text-brand-text/65">4 phút đọc · dành cho người mới</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sk-region sk-guides" id="home-guides">
    <div class="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p class="${G} !mb-1">Chuyên mục hướng dẫn &amp; mẹo sử dụng (blog)</p>
        <p class="text-sm text-brand-text/65">Loop theo nhãn “hướng-dẫn” hoặc PopularPosts — vẫn là bài viết, không phải catalog.</p>
      </div>
      <a href="#" class="text-xs font-medium text-brand-accent hover:underline">Xem tất cả hướng dẫn</a>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <div class="group overflow-hidden rounded-2xl border border-brand-surface bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div class="relative aspect-[5/3] overflow-hidden">
          <div class="h-full w-full bg-gradient-to-br from-brand-surface to-brand-bg transition duration-300 group-hover:scale-105"></div>
          <div class="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-text">Hướng dẫn</div>
        </div>
        <div class="space-y-2 p-4">
          <div class="text-base font-semibold leading-snug text-brand-text">Hướng dẫn A · Cách chọn sản phẩm theo loại tóc</div>
          <div class="text-sm text-brand-text/70">Checklist ngắn gọn giúp bạn chọn đúng ngay lần đầu.</div>
          <div class="pt-1 text-xs font-medium text-brand-accent">Đọc bài viết →</div>
        </div>
      </div>

      <div class="group overflow-hidden rounded-2xl border border-brand-surface bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div class="relative aspect-[5/3] overflow-hidden">
          <div class="h-full w-full bg-gradient-to-br from-brand-surface to-brand-bg transition duration-300 group-hover:scale-105"></div>
          <div class="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-text">Mẹo dùng</div>
        </div>
        <div class="space-y-2 p-4">
          <div class="text-base font-semibold leading-snug text-brand-text">Hướng dẫn B · Quy trình sử dụng tối ưu mỗi ngày</div>
          <div class="text-sm text-brand-text/70">Các bước đơn giản để hiệu quả rõ hơn và ổn định hơn.</div>
          <div class="pt-1 text-xs font-medium text-brand-accent">Đọc bài viết →</div>
        </div>
      </div>

      <div class="group overflow-hidden rounded-2xl border border-brand-surface bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div class="relative aspect-[5/3] overflow-hidden">
          <div class="h-full w-full bg-gradient-to-br from-brand-surface to-brand-bg transition duration-300 group-hover:scale-105"></div>
          <div class="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-text">Chăm sóc</div>
        </div>
        <div class="space-y-2 p-4">
          <div class="text-base font-semibold leading-snug text-brand-text">Hướng dẫn C · Bảo quản sản phẩm sau khi dùng</div>
          <div class="text-sm text-brand-text/70">Giữ chất lượng tốt hơn bằng các lưu ý quan trọng.</div>
          <div class="pt-1 text-xs font-medium text-brand-accent">Đọc bài viết →</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sk-region sk-feed w-full">
    <div class="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p class="${G} !mb-1">Mới trên blog (luồng chính)</p>
        <p class="text-sm text-brand-text/65">Danh sách bài mới nhất theo thời gian, ưu tiên nội dung hướng dẫn.</p>
      </div>
      <a href="#" class="text-xs font-medium text-brand-accent hover:underline">Vào trang blog đầy đủ</a>
    </div>

    <div class="space-y-3">
      <div class="group rounded-xl border border-brand-surface bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div class="mb-2 flex flex-wrap items-center gap-2 text-xs text-brand-text/55">
          <span class="rounded-full bg-brand-surface/60 px-2 py-0.5">20/03/2026</span>
          <span>Hướng dẫn</span>
          <span>·</span>
          <span>5 phút đọc</span>
        </div>
        <div class="text-lg font-semibold leading-snug text-brand-text transition group-hover:text-brand-accent">Tiêu đề bài — phong cách blog / hướng dẫn</div>
        <div class="mt-1.5 text-sm text-brand-text/70">Một dòng excerpt rõ ràng, nêu vấn đề và lợi ích khi đọc bài viết này.</div>
      </div>

      <div class="group rounded-xl border border-brand-surface bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div class="mb-2 flex flex-wrap items-center gap-2 text-xs text-brand-text/55">
          <span class="rounded-full bg-brand-surface/60 px-2 py-0.5">18/03/2026</span>
          <span>Mẹo dùng</span>
          <span>·</span>
          <span>4 phút đọc</span>
        </div>
        <div class="text-lg font-semibold leading-snug text-brand-text transition group-hover:text-brand-accent">Tiêu đề bài — phong cách blog / hướng dẫn</div>
        <div class="mt-1.5 text-sm text-brand-text/70">Mô tả ngắn về cách áp dụng trong thực tế, đọc xong làm được ngay.</div>
      </div>

      <div class="group rounded-xl border border-brand-surface bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div class="mb-2 flex flex-wrap items-center gap-2 text-xs text-brand-text/55">
          <span class="rounded-full bg-brand-surface/60 px-2 py-0.5">15/03/2026</span>
          <span>Chăm sóc</span>
          <span>·</span>
          <span>6 phút đọc</span>
        </div>
        <div class="text-lg font-semibold leading-snug text-brand-text transition group-hover:text-brand-accent">Tiêu đề bài — phong cách blog / hướng dẫn</div>
        <div class="mt-1.5 text-sm text-brand-text/70">Tóm tắt nội dung chính và điểm cần chú ý trước khi bắt đầu.</div>
      </div>
    </div>

    <div class="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
      <a href="#" class="rounded-md border border-brand-surface bg-white px-3 py-1.5 text-brand-text transition hover:border-brand-accent/40 hover:text-brand-accent">← Trước</a>
      <a href="#" class="rounded-md bg-brand-accent px-3 py-1.5 text-white">1</a>
      <a href="#" class="rounded-md border border-brand-surface bg-white px-3 py-1.5 text-brand-text transition hover:border-brand-accent/40 hover:text-brand-accent">2</a>
      <a href="#" class="rounded-md border border-brand-surface bg-white px-3 py-1.5 text-brand-text transition hover:border-brand-accent/40 hover:text-brand-accent">Sau →</a>
    </div>
  </div>

  <div class="sk-region sk-products border-t border-dashed border-brand-surface pt-8">
    <div class="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p class="${G} !mb-1">Sản phẩm nổi bật (phụ — liên kết từ bài hoặc trang tĩnh)</p>
        <p class="${_e}">Khối phụ nhẹ nhàng, giữ trọng tâm ở blog nhưng vẫn có điểm chuyển đổi.</p>
      </div>
      <a href="#" class="text-xs font-medium text-brand-accent hover:underline">Xem trang sản phẩm</a>
    </div>

    <div class="embla overflow-hidden" data-products-carousel>
      <div class="embla__container -ml-4 flex">
        <div class="embla__slide min-w-0 flex-[0_0_86%] pl-4 sm:flex-[0_0_52%] xl:flex-[0_0_34%]">
          <div class="group h-full rounded-2xl border border-brand-surface bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div class="mb-3 flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-brand-surface to-brand-bg">
              <span class="text-xs uppercase tracking-wide text-brand-text/60">Ảnh sản phẩm</span>
            </div>
            <div class="text-sm font-semibold text-brand-text">Sản phẩm 1 · Khăn lụa</div>
            <div class="mt-1 text-xs text-brand-text/65">Mềm nhẹ, phù hợp dùng hằng ngày.</div>
            <div class="mt-3 text-xs font-medium text-brand-accent">Tìm hiểu thêm →</div>
          </div>
      </div>

        <div class="embla__slide min-w-0 flex-[0_0_86%] pl-4 sm:flex-[0_0_52%] xl:flex-[0_0_34%]">
          <div class="group h-full rounded-2xl border border-brand-surface bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div class="mb-3 flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-brand-surface to-brand-bg">
              <span class="text-xs uppercase tracking-wide text-brand-text/60">Ảnh sản phẩm</span>
            </div>
            <div class="text-sm font-semibold text-brand-text">Sản phẩm 2 · Dây lụa</div>
            <div class="mt-1 text-xs text-brand-text/65">Thiết kế tối giản, dễ phối đồ.</div>
            <div class="mt-3 text-xs font-medium text-brand-accent">Tìm hiểu thêm →</div>
          </div>
        </div>

        <div class="embla__slide min-w-0 flex-[0_0_86%] pl-4 sm:flex-[0_0_52%] xl:flex-[0_0_34%]">
          <div class="group h-full rounded-2xl border border-brand-surface bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div class="mb-3 flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-brand-surface to-brand-bg">
              <span class="text-xs uppercase tracking-wide text-brand-text/60">Ảnh sản phẩm</span>
            </div>
            <div class="text-sm font-semibold text-brand-text">Sản phẩm 3 · Phụ kiện</div>
            <div class="mt-1 text-xs text-brand-text/65">Điểm nhấn nhỏ cho phong cách hàng ngày.</div>
            <div class="mt-3 text-xs font-medium text-brand-accent">Tìm hiểu thêm →</div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-end gap-2">
      <button type="button" class="rounded-md border border-brand-surface bg-white px-3 py-1.5 text-sm text-brand-text transition hover:border-brand-accent/40 hover:text-brand-accent disabled:cursor-not-allowed disabled:opacity-40" data-products-prev>← Trước</button>
      <button type="button" class="rounded-md border border-brand-surface bg-white px-3 py-1.5 text-sm text-brand-text transition hover:border-brand-accent/40 hover:text-brand-accent disabled:cursor-not-allowed disabled:opacity-40" data-products-next>Sau →</button>
    </div>
  </div>

  <div class="sk-region sk-foot -mx-4 mt-2 border-t border-brand-surface bg-white/95 py-6 shadow-sm sm:-mx-6 lg:-mx-8">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div class="space-y-2">
          <p class="${G} !mb-0">Footer</p>
          <p class="text-sm font-semibold text-brand-text">Haan Silk</p>
          <p class="max-w-md text-sm leading-relaxed text-brand-text/70">
            Nội dung blog về hướng dẫn sử dụng, mẹo chăm sóc và các gợi ý sản phẩm chọn lọc.
          </p>
          <div class="flex flex-wrap items-center gap-2 pt-1 text-xs text-brand-text/75">
            <span>© 2026 Haan Silk</span>
            <span>•</span>
            <a href="#" class="hover:text-brand-accent">Chính sách</a>
            <span>•</span>
            <a href="#" class="hover:text-brand-accent">Điều khoản</a>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-5 text-sm sm:grid-cols-3">
          <div class="space-y-2">
            <p class="text-xs font-semibold uppercase tracking-wide text-brand-text/60">Khám phá</p>
            <div class="space-y-1.5">
              <a href="#" class="block text-brand-text/80 hover:text-brand-accent">Blog</a>
              <a href="#" class="block text-brand-text/80 hover:text-brand-accent">Hướng dẫn</a>
              <a href="#" class="block text-brand-text/80 hover:text-brand-accent">Sản phẩm</a>
            </div>
          </div>
          <div class="space-y-2">
            <p class="text-xs font-semibold uppercase tracking-wide text-brand-text/60">Kết nối</p>
            <div class="space-y-1.5">
              <a href="#" class="block text-brand-text/80 hover:text-brand-accent">Facebook</a>
              <a href="#" class="block text-brand-text/80 hover:text-brand-accent">Instagram</a>
              <a href="#" class="block text-brand-text/80 hover:text-brand-accent">TikTok</a>
            </div>
          </div>
          <div class="col-span-2 space-y-2 sm:col-span-1">
            <p class="text-xs font-semibold uppercase tracking-wide text-brand-text/60">Bản tin</p>
            <div class="rounded-lg border border-brand-surface bg-brand-bg p-2">
              <p class="mb-2 text-xs text-brand-text/65">Nhận bài viết mới mỗi tuần</p>
              <button type="button" class="w-full rounded-md bg-brand-accent px-3 py-2 text-xs font-medium text-white transition hover:brightness-110">
                Đăng ký nhận tin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
`}function ye(e){let t=e.querySelector(`[data-products-carousel]`),n=e.querySelector(`[data-products-prev]`),r=e.querySelector(`[data-products-next]`);if(!t||!n||!r)return;let i=W(t,{loop:!1,align:`start`,dragFree:!0,containScroll:`trimSnaps`}),a=()=>{n.disabled=!i.canScrollPrev(),r.disabled=!i.canScrollNext()};n.addEventListener(`click`,()=>i.scrollPrev()),r.addEventListener(`click`,()=>i.scrollNext()),i.on(`init`,a),i.on(`select`,a),i.on(`reInit`,a),a()}function be(e){e&&(e.innerHTML=ve(),l(e),ye(e))}be(document.querySelector(`#app`));