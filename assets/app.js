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
            <i aria-hidden="true" class="fa-solid fa-arrow-right text-xs transition group-hover:translate-x-0.5"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`}var a=[{href:`/`,label:`Trang chủ`},{href:`/search/label/blog`,label:`Blog`},{href:`/search/label/huong-dan`,label:`Hướng dẫn`},{href:`/p/gioi-thieu.html`,label:`Giới thiệu`},{href:`/p/lien-he.html`,label:`Liên hệ`}],o=`rounded-md px-2 py-1.5 text-sm text-brand-text transition hover:bg-brand-surface`;function s(){return a.map(({href:e,label:t})=>`<a class="${o}" href="${e}">${t}</a>`).join(``)}function c(){let n=s();return`
<div class="hs-header sticky top-0 z-40 w-full border-b border-brand-surface bg-white shadow-sm">
  <div class="mx-auto w-full max-w-[1240px] px-4 py-1 sm:px-6 sm:py-1.5 lg:px-8">
    <div class="flex items-center justify-between gap-4">
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
        <i aria-hidden="true" class="fa-solid fa-bars text-base"></i>
      </button>

      <div class="hs-header__nav hidden items-center gap-1 md:flex">
        ${n}
      </div>
    </div>
  </div>

  <div
    id="hs-nav-panel"
    class="hs-header__panel absolute left-0 top-full z-50 hidden w-full border-t border-brand-surface bg-white py-1.5 shadow-md md:hidden"
    data-hs-panel="nav"
  >
    <div class="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-1">
        ${n}
      </div>
    </div>
  </div>
</div>`}function l(e){let t=e.querySelector(`.hs-header`);if(!t)return;let n=t.querySelector(`[data-hs-toggle="nav"]`),r=t.querySelector(`[data-hs-panel="nav"]`);if(!n||!r)return;let i=e=>{r.classList.toggle(`hidden`,!e),n.setAttribute(`aria-expanded`,String(e))};n.addEventListener(`click`,()=>{i(!!r.classList.contains(`hidden`))}),window.addEventListener(`resize`,()=>{window.matchMedia(`(min-width: 768px)`).matches&&i(!1)})}function u(){return`
<div class="mt-8 w-full border-t border-brand-surface bg-white/95 py-6 shadow-sm">
  <div class="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
      <div class="space-y-2">
        <p class="mb-0 text-[0.7rem] font-medium uppercase tracking-wide text-brand-text/55">Footer</p>
        <p class="text-sm font-semibold text-brand-text">Haan Silk</p>
        <p class="max-w-md text-sm leading-relaxed text-brand-text/70">
          Noi dung blog ve huong dan su dung, meo cham soc va cac goi y san pham chon loc.
        </p>
        <div class="flex flex-wrap items-center gap-2 pt-1 text-xs text-brand-text/75">
          <span>© 2026 Haan Silk</span>
          <span>•</span>
          <a class="hover:text-brand-accent" href="/p/chinh-sach.html">Chinh sach</a>
          <span>•</span>
          <a class="hover:text-brand-accent" href="/p/dieu-khoan.html">Dieu khoan</a>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-5 text-sm sm:grid-cols-3">
        <div class="space-y-2">
          <p class="text-xs font-semibold uppercase tracking-wide text-brand-text/60">Kham pha</p>
          <div class="space-y-1.5">
            <a class="block text-brand-text/80 hover:text-brand-accent" href="/search/label/blog">Blog</a>
            <a class="block text-brand-text/80 hover:text-brand-accent" href="/search/label/huong-dan">Huong dan</a>
            <a class="block text-brand-text/80 hover:text-brand-accent" href="/p/san-pham.html">San pham</a>
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-xs font-semibold uppercase tracking-wide text-brand-text/60">Ket noi</p>
          <div class="space-y-1.5">
            <a class="block text-brand-text/80 hover:text-brand-accent" href="#">Facebook</a>
            <a class="block text-brand-text/80 hover:text-brand-accent" href="#">Instagram</a>
            <a class="block text-brand-text/80 hover:text-brand-accent" href="#">TikTok</a>
          </div>
        </div>
        <div class="col-span-2 space-y-2 sm:col-span-1">
          <p class="text-xs font-semibold uppercase tracking-wide text-brand-text/60">Ban tin</p>
          <div class="rounded-lg border border-brand-surface bg-brand-bg p-2">
            <p class="mb-2 text-xs text-brand-text/65">Nhan bai viet moi moi tuan</p>
            <button class="w-full rounded-md bg-brand-accent px-3 py-2 text-xs font-medium text-white transition hover:brightness-110" type="button">
              Dang ky nhan tin
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}function d(e){return typeof e==`number`}function f(e){return typeof e==`string`}function p(e){return typeof e==`boolean`}function m(e){return Object.prototype.toString.call(e)===`[object Object]`}function h(e){return Math.abs(e)}function g(e){return Math.sign(e)}function _(e,t){return h(e-t)}function v(e,t){return e===0||t===0||h(e)<=h(t)?0:h(_(h(e),h(t))/e)}function y(e){return Math.round(e*100)/100}function b(e){return T(e).map(Number)}function x(e){return e[S(e)]}function S(e){return Math.max(0,e.length-1)}function C(e,t){return t===S(e)}function w(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function T(e){return Object.keys(e)}function E(e,t){return[e,t].reduce((e,t)=>(T(t).forEach(n=>{let r=e[n],i=t[n];e[n]=m(r)&&m(i)?E(r,i):i}),e),{})}function D(e,t){return t.MouseEvent!==void 0&&e instanceof t.MouseEvent}function O(e,t){let n={start:r,center:i,end:a};function r(){return 0}function i(e){return a(e)/2}function a(e){return t-e}function o(r,i){return f(e)?n[e](r):e(t,r,i)}return{measure:o}}function k(){let e=[];function t(t,n,i,a={passive:!0}){let o;if(`addEventListener`in t)t.addEventListener(n,i,a),o=()=>t.removeEventListener(n,i,a);else{let e=t;e.addListener(i),o=()=>e.removeListener(i)}return e.push(o),r}function n(){e=e.filter(e=>e())}let r={add:t,clear:n};return r}function A(e,t,n,r){let i=k(),a=1e3/60,o=null,s=0,c=0;function l(){i.add(e,`visibilitychange`,()=>{e.hidden&&m()})}function u(){p(),i.clear()}function d(e){if(!c)return;o||(o=e,n(),n());let i=e-o;for(o=e,s+=i;s>=a;)n(),s-=a;r(s/a),c&&=t.requestAnimationFrame(d)}function f(){c||=t.requestAnimationFrame(d)}function p(){t.cancelAnimationFrame(c),o=null,s=0,c=0}function m(){o=null,s=0}return{init:l,destroy:u,start:f,stop:p,update:n,render:r}}function j(e,t){let n=t===`rtl`,r=e===`y`,i=r?`y`:`x`,a=r?`x`:`y`,o=!r&&n?-1:1,s=u(),c=d();function l(e){let{height:t,width:n}=e;return r?t:n}function u(){return r?`top`:n?`right`:`left`}function d(){return r?`bottom`:n?`left`:`right`}function f(e){return e*o}return{scroll:i,cross:a,startEdge:s,endEdge:c,measureSize:l,direction:f}}function M(e=0,t=0){let n=h(e-t);function r(t){return t<e}function i(e){return e>t}function a(e){return r(e)||i(e)}function o(n){return a(n)?r(n)?e:t:n}function s(e){return n?e-n*Math.ceil((e-t)/n):e}return{length:n,max:t,min:e,constrain:o,reachedAny:a,reachedMax:i,reachedMin:r,removeOffset:s}}function ee(e,t,n){let{constrain:r}=M(0,e),i=e+1,a=o(t);function o(e){return n?h((i+e)%i):r(e)}function s(){return a}function c(e){return a=o(e),d}function l(e){return u().set(s()+e)}function u(){return ee(e,s(),n)}let d={get:s,set:c,add:l,clone:u};return d}function te(e,t,n,r,i,a,o,s,c,l,u,d,f,m,y,b,x,S,C){let{cross:w,direction:T}=e,E=[`INPUT`,`SELECT`,`TEXTAREA`],O={passive:!1},A=k(),j=k(),ee=M(50,225).constrain(m.measure(20)),te={mouse:300,touch:400},ne={mouse:500,touch:600},re=y?43:25,ie=!1,ae=0,N=0,P=!1,F=!1,I=!1,L=!1;function oe(e){if(!C)return;function n(t){(p(C)||C(e,t))&&z(t)}let r=t;A.add(r,`dragstart`,e=>e.preventDefault(),O).add(r,`touchmove`,()=>void 0,O).add(r,`touchend`,()=>void 0).add(r,`touchstart`,n).add(r,`mousedown`,n).add(r,`touchcancel`,V).add(r,`contextmenu`,V).add(r,`click`,de,!0)}function se(){A.clear(),j.clear()}function ce(){let e=L?n:t;j.add(e,`touchmove`,B,O).add(e,`touchend`,V).add(e,`mousemove`,B,O).add(e,`mouseup`,V)}function le(e){let t=e.nodeName||``;return E.includes(t)}function R(){return(y?ne:te)[L?`mouse`:`touch`]}function ue(e,t){let n=d.add(g(e)*-1),r=u.byDistance(e,!y).distance;return y||h(e)<ee?r:x&&t?r*.5:u.byIndex(n.get(),0).distance}function z(e){let t=D(e,r);L=t,I=y&&t&&!e.buttons&&ie,ie=_(i.get(),o.get())>=2,!(t&&e.button!==0)&&(le(e.target)||(P=!0,a.pointerDown(e),l.useFriction(0).useDuration(0),i.set(o),ce(),ae=a.readPoint(e),N=a.readPoint(e,w),f.emit(`pointerDown`)))}function B(e){if(!D(e,r)&&e.touches.length>=2)return V(e);let t=a.readPoint(e),n=a.readPoint(e,w),o=_(t,ae),c=_(n,N);if(!F&&!L&&(!e.cancelable||(F=o>c,!F)))return V(e);let u=a.pointerMove(e);o>b&&(I=!0),l.useFriction(.3).useDuration(.75),s.start(),i.add(T(u)),e.preventDefault()}function V(e){let t=u.byDistance(0,!1).index!==d.get(),n=a.pointerUp(e)*R(),r=ue(T(n),t),i=v(n,r),o=re-10*i,s=S+i/50;F=!1,P=!1,j.clear(),l.useDuration(o).useFriction(s),c.distance(r,!y),L=!1,f.emit(`pointerUp`)}function de(e){I&&=(e.stopPropagation(),e.preventDefault(),!1)}function fe(){return P}return{init:oe,destroy:se,pointerDown:fe}}function ne(e,t){let n,r;function i(e){return e.timeStamp}function a(n,r){let i=`client${(r||e.scroll)===`x`?`X`:`Y`}`;return(D(n,t)?n:n.touches[0])[i]}function o(e){return n=e,r=e,a(e)}function s(e){let t=a(e)-a(r),o=i(e)-i(n)>170;return r=e,o&&(n=e),t}function c(e){if(!n||!r)return 0;let t=a(r)-a(n),o=i(e)-i(n),s=i(e)-i(r)>170,c=t/o;return o&&!s&&h(c)>.1?c:0}return{pointerDown:o,pointerMove:s,pointerUp:c,readPoint:a}}function re(){function e(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}return{measure:e}}function ie(e){function t(t){return t/100*e}return{measure:t}}function ae(e,t,n,r,i,a,o){let s=[e].concat(r),c,l,u=[],d=!1;function f(e){return i.measureSize(o.measure(e))}function m(i){if(!a)return;l=f(e),u=r.map(f);function o(n){for(let a of n){if(d)return;let n=a.target===e,o=r.indexOf(a.target),s=n?l:u[o];if(h(f(n?e:r[o])-s)>=.5){i.reInit(),t.emit(`resize`);break}}}c=new ResizeObserver(e=>{(p(a)||a(i,e))&&o(e)}),n.requestAnimationFrame(()=>{s.forEach(e=>c.observe(e))})}function g(){d=!0,c&&c.disconnect()}return{init:m,destroy:g}}function N(e,t,n,r,i,a){let o=0,s=0,c=i,l=a,u=e.get(),d=0;function f(){let t=r.get()-e.get(),i=!c,a=0;return i?(o=0,n.set(r),e.set(r),a=t):(n.set(e),o+=t/c,o*=l,u+=o,e.add(o),a=u-d),s=g(a),d=u,C}function p(){return h(r.get()-t.get())<.001}function m(){return c}function _(){return s}function v(){return o}function y(){return x(i)}function b(){return S(a)}function x(e){return c=e,C}function S(e){return l=e,C}let C={direction:_,duration:m,velocity:v,seek:f,settled:p,useBaseFriction:b,useBaseDuration:y,useFriction:S,useDuration:x};return C}function P(e,t,n,r,i){let a=i.measure(10),o=i.measure(50),s=M(.1,.99),c=!1;function l(){return!(c||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function u(i){if(!l())return;let c=h(e[e.reachedMin(t.get())?`min`:`max`]-t.get()),u=n.get()-t.get(),d=s.constrain(c/o);n.subtract(u*d),!i&&h(u)<a&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(e){c=!e}return{shouldConstrain:l,constrain:u,toggleActive:d}}function F(e,t,n,r,i){let a=M(-t+e,0),o=d(),s=u(),c=f();function l(e,t){return _(e,t)<=1}function u(){let e=o[0],t=x(o);return M(o.lastIndexOf(e),o.indexOf(t)+1)}function d(){return n.map((e,t)=>{let{min:r,max:i}=a,o=a.constrain(e),s=!t,c=C(n,t);return s?i:c||l(r,o)?r:l(i,o)?i:o}).map(e=>parseFloat(e.toFixed(3)))}function f(){if(t<=e+i)return[a.max];if(r===`keepSnaps`)return o;let{min:n,max:c}=s;return o.slice(n,c)}return{snapsContained:c,scrollContainLimit:s}}function I(e,t,n){let r=t[0];return{limit:M(n?r-e:x(t),r)}}function L(e,t,n,r){let i=.1,{reachedMin:a,reachedMax:o}=M(t.min+i,t.max+i);function s(e){return e===1?o(n.get()):e===-1?a(n.get()):!1}function c(t){if(!s(t))return;let n=t*-1*e;r.forEach(e=>e.add(n))}return{loop:c}}function oe(e){let{max:t,length:n}=e;function r(e){let r=e-t;return n?r/-n:0}return{get:r}}function se(e,t,n,r,i){let{startEdge:a,endEdge:o}=e,{groupSlides:s}=i,c=d().map(t.measure),l=f(),u=p();function d(){return s(r).map(e=>x(e)[o]-e[0][a]).map(h)}function f(){return r.map(e=>n[a]-e[a]).map(e=>-h(e))}function p(){return s(l).map(e=>e[0]).map((e,t)=>e+c[t])}return{snaps:l,snapsAligned:u}}function ce(e,t,n,r,i,a){let{groupSlides:o}=i,{min:s,max:c}=r,l=u();function u(){let r=o(a),i=!e||t===`keepSnaps`;return n.length===1?[a]:i?r:r.slice(s,c).map((e,t,n)=>{let r=!t,i=C(n,t);return r?w(x(n[0])+1):i?w(S(a)-x(n)[0]+1,x(n)[0]):e})}return{slideRegistry:l}}function le(e,t,n,r,i){let{reachedAny:a,removeOffset:o,constrain:s}=r;function c(e){return e.concat().sort((e,t)=>h(e)-h(t))[0]}function l(n){let r=e?o(n):s(n),{index:i}=t.map((e,t)=>({diff:u(e-r,0),index:t})).sort((e,t)=>h(e.diff)-h(t.diff))[0];return{index:i,distance:r}}function u(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return c(i);let a=i.filter(e=>g(e)===r);return a.length?c(a):x(i)-n}function d(e,n){return{index:e,distance:u(t[e]-i.get(),n)}}function f(n,r){let o=i.get()+n,{index:s,distance:c}=l(o),d=!e&&a(o);return!r||d?{index:s,distance:n}:{index:s,distance:n+u(t[s]-c,0)}}return{byDistance:f,byIndex:d,shortcut:u}}function R(e,t,n,r,i,a,o){function s(i){let s=i.distance,c=i.index!==t.get();a.add(s),s&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(i.index),o.emit(`select`))}function c(e,t){s(i.byDistance(e,t))}function l(e,n){let r=t.clone().set(e);s(i.byIndex(r.get(),n))}return{distance:c,index:l}}function ue(e,t,n,r,i,a,o,s){let c={passive:!0,capture:!0},l=0;function u(u){if(!s)return;function m(t){if(new Date().getTime()-l>10)return;o.emit(`slideFocusStart`),e.scrollLeft=0;let a=n.findIndex(e=>e.includes(t));d(a)&&(i.useDuration(0),r.index(a,0),o.emit(`slideFocus`))}a.add(document,`keydown`,f,!1),t.forEach((e,t)=>{a.add(e,`focus`,e=>{(p(s)||s(u,e))&&m(t)},c)})}function f(e){e.code===`Tab`&&(l=new Date().getTime())}return{init:u}}function z(e){let t=e;function n(){return t}function r(e){t=o(e)}function i(e){t+=o(e)}function a(e){t-=o(e)}function o(e){return d(e)?e:e.get()}return{get:n,set:r,add:i,subtract:a}}function B(e,t){let n=e.scroll===`x`?o:s,r=t.style,i=null,a=!1;function o(e){return`translate3d(${e}px,0px,0px)`}function s(e){return`translate3d(0px,${e}px,0px)`}function c(t){if(a)return;let o=y(e.direction(t));o!==i&&(r.transform=n(o),i=o)}function l(e){a=!e}function u(){a||(r.transform=``,t.getAttribute(`style`)||t.removeAttribute(`style`))}return{clear:u,to:c,toggleActive:l}}function V(e,t,n,r,i,a,o,s,c){let l=.5,u=b(i),d=b(i).reverse(),f=_().concat(v());function p(e,t){return e.reduce((e,t)=>e-i[t],t)}function m(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function h(e){return a.map((n,i)=>({start:n-r[i]+l+e,end:n+t-l+e}))}function g(t,r,i){let a=h(r);return t.map(t=>{let r=i?0:-n,o=i?n:0,l=i?`end`:`start`,u=a[t][l];return{index:t,loopPoint:u,slideLocation:z(-1),translate:B(e,c[t]),target:()=>s.get()>u?r:o}})}function _(){let e=o[0];return g(m(d,e),n,!1)}function v(){return g(m(u,t-o[0]-1),-n,!0)}function y(){return f.every(({index:e})=>p(u.filter(t=>t!==e),t)<=.1)}function x(){f.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})}function S(){f.forEach(e=>e.translate.clear())}return{canLoop:y,clear:S,loop:x,loopPoints:f}}function de(e,t,n){let r,i=!1;function a(a){if(!n)return;function o(e){for(let n of e)if(n.type===`childList`){a.reInit(),t.emit(`slidesChanged`);break}}r=new MutationObserver(e=>{i||(p(n)||n(a,e))&&o(e)}),r.observe(e,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:a,destroy:o}}function fe(e,t,n,r){let i={},a=null,o=null,s,c=!1;function l(){s=new IntersectionObserver(e=>{c||(e.forEach(e=>{let n=t.indexOf(e.target);i[n]=e}),a=null,o=null,n.emit(`slidesInView`))},{root:e.parentElement,threshold:r}),t.forEach(e=>s.observe(e))}function u(){s&&s.disconnect(),c=!0}function d(e){return T(i).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:a}=i[r];return(e&&a||!e&&!a)&&t.push(r),t},[])}function f(e=!0){if(e&&a)return a;if(!e&&o)return o;let t=d(e);return e&&(a=t),e||(o=t),t}return{init:l,destroy:u,get:f}}function pe(e,t,n,r,i,a){let{measureSize:o,startEdge:s,endEdge:c}=e,l=n[0]&&i,u=m(),d=g(),f=n.map(o),p=_();function m(){if(!l)return 0;let e=n[0];return h(t[s]-e[s])}function g(){if(!l)return 0;let e=a.getComputedStyle(x(r));return parseFloat(e.getPropertyValue(`margin-${c}`))}function _(){return n.map((e,t,n)=>{let r=!t,i=C(n,t);return r?f[t]+u:i?f[t]+d:n[t+1][s]-e[s]}).map(h)}return{slideSizes:f,slideSizesWithGaps:p,startGap:u,endGap:d}}function me(e,t,n,r,i,a,o,s,c){let{startEdge:l,endEdge:u,direction:f}=e,p=d(n);function m(e,t){return b(e).filter(e=>e%t===0).map(n=>e.slice(n,n+t))}function g(e){return e.length?b(e).reduce((n,d,p)=>{let m=x(n)||0,g=m===0,_=d===S(e),v=i[l]-a[m][l],y=i[l]-a[d][u],b=!r&&g?f(o):0,C=h(y-(!r&&_?f(s):0)-(v+b));return p&&C>t+c&&n.push(d),_&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}function _(e){return p?m(e,n):g(e)}return{groupSlides:_}}function H(e,t,n,r,i,a,o){let{align:s,axis:c,direction:l,startIndex:u,loop:d,duration:f,dragFree:p,dragThreshold:m,inViewThreshold:h,slidesToScroll:g,skipSnaps:_,containScroll:v,watchResize:y,watchSlides:C,watchDrag:w,watchFocus:T}=a,E=re(),D=E.measure(t),M=n.map(E.measure),H=j(c,l),U=H.measureSize(D),W=ie(U),he=O(s,U),ge=!d&&!!v,{slideSizes:_e,slideSizesWithGaps:G,startGap:ve,endGap:ye}=pe(H,D,M,n,d||!!v,i),be=me(H,U,g,d,D,M,ve,ye,2),{snaps:xe,snapsAligned:Se}=se(H,he,D,M,be),K=-x(xe)+x(G),{snapsContained:Ce,scrollContainLimit:we}=F(U,K,Se,v,2),q=ge?Ce:Se,{limit:J}=I(K,q,d),Y=ee(S(q),u,d),Te=Y.clone(),Ee=b(n),De=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},Oe=({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:i,scrollLooper:a,slideLooper:o,dragHandler:s,animation:c,eventHandler:l,scrollBounds:u,options:{loop:d}},f)=>{let p=e.settled(),m=!u.shouldConstrain(),h=d?p:p&&m,g=h&&!s.pointerDown();g&&c.stop();let _=n.get()*f+i.get()*(1-f);r.set(_),d&&(a.loop(e.direction()),o.loop()),t.to(r.get()),g&&l.emit(`settle`),h||l.emit(`scroll`)},ke=A(r,i,()=>De(Be),e=>Oe(Be,e)),Ae=.68,X=q[Y.get()],je=z(X),Me=z(X),Z=z(X),Q=z(X),$=N(je,Z,Me,Q,f,Ae),Ne=le(d,q,K,J,Q),Pe=R(ke,Y,Te,$,Ne,Q,o),Fe=oe(J),Ie=k(),Le=fe(t,n,o,h),{slideRegistry:Re}=ce(ge,v,q,we,be,Ee),ze=ue(e,n,Re,Pe,$,Ie,o,T),Be={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:D,slideRects:M,animation:ke,axis:H,dragHandler:te(H,e,r,i,Q,ne(H,i),je,ke,Pe,$,Ne,Y,o,W,p,m,_,Ae,w),eventStore:Ie,percentOfView:W,index:Y,indexPrevious:Te,limit:J,location:je,offsetLocation:Z,previousLocation:Me,options:a,resizeHandler:ae(t,o,i,n,H,y,E),scrollBody:$,scrollBounds:P(J,Z,Q,$,W),scrollLooper:L(K,J,Z,[je,Z,Me,Q]),scrollProgress:Fe,scrollSnapList:q.map(Fe.get),scrollSnaps:q,scrollTarget:Ne,scrollTo:Pe,slideLooper:V(H,U,K,_e,G,xe,q,Z,n),slideFocus:ze,slidesHandler:de(t,o,C),slidesInView:Le,slideIndexes:Ee,slideRegistry:Re,slidesToScroll:be,target:Q,translate:B(H,t)};return Be}function U(){let e={},t;function n(e){t=e}function r(t){return e[t]||[]}function i(e){return r(e).forEach(n=>n(t,e)),c}function a(t,n){return e[t]=r(t).concat([n]),c}function o(t,n){return e[t]=r(t).filter(e=>e!==n),c}function s(){e={}}let c={init:n,emit:i,off:o,on:a,clear:s};return c}var W={align:`center`,axis:`x`,container:null,slides:null,containScroll:`trimSnaps`,direction:`ltr`,slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function he(e){function t(e,t){return E(e,t||{})}function n(n){let r=n.breakpoints||{};return t(n,T(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{}))}function r(t){return t.map(e=>T(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:r}}function ge(e){let t=[];function n(n,r){return t=r.filter(({options:t})=>e.optionsAtMedia(t).active!==!1),t.forEach(t=>t.init(n,e)),r.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})}function r(){t=t.filter(e=>e.destroy())}return{init:n,destroy:r}}function _e(e,t,n){let r=e.ownerDocument,i=r.defaultView,a=he(i),o=ge(a),s=k(),c=U(),{mergeOptions:l,optionsAtMedia:u,optionsMediaQueries:d}=a,{on:p,off:m,emit:h}=c,g=O,_=!1,v,y=l(W,_e.globalOptions),b=l(y),x=[],S,C,w;function T(){let{container:t,slides:n}=b;C=(f(t)?e.querySelector(t):t)||e.children[0];let r=f(n)?C.querySelectorAll(n):n;w=[].slice.call(r||C.children)}function E(t){let n=H(e,C,w,r,i,t,c);return t.loop&&!n.slideLooper.canLoop()?E(Object.assign({},t,{loop:!1})):n}function D(e,t){_||(y=l(y,e),b=u(y),x=t||x,T(),v=E(b),d([y,...x.map(({options:e})=>e)]).forEach(e=>s.add(e,`change`,O)),b.active&&(v.translate.to(v.location.get()),v.animation.init(),v.slidesInView.init(),v.slideFocus.init(R),v.eventHandler.init(R),v.resizeHandler.init(R),v.slidesHandler.init(R),v.options.loop&&v.slideLooper.loop(),C.offsetParent&&w.length&&v.dragHandler.init(R),S=o.init(R,x)))}function O(e,t){let n=N();A(),D(l({startIndex:n},e),t),c.emit(`reInit`)}function A(){v.dragHandler.destroy(),v.eventStore.clear(),v.translate.clear(),v.slideLooper.clear(),v.resizeHandler.destroy(),v.slidesHandler.destroy(),v.slidesInView.destroy(),v.animation.destroy(),o.destroy(),s.clear()}function j(){_||(_=!0,s.clear(),A(),c.emit(`destroy`),c.clear())}function M(e,t,n){!b.active||_||(v.scrollBody.useBaseFriction().useDuration(t===!0?0:b.duration),v.scrollTo.index(e,n||0))}function ee(e){M(v.index.add(1).get(),e,-1)}function te(e){M(v.index.add(-1).get(),e,1)}function ne(){return v.index.add(1).get()!==N()}function re(){return v.index.add(-1).get()!==N()}function ie(){return v.scrollSnapList}function ae(){return v.scrollProgress.get(v.offsetLocation.get())}function N(){return v.index.get()}function P(){return v.indexPrevious.get()}function F(){return v.slidesInView.get()}function I(){return v.slidesInView.get(!1)}function L(){return S}function oe(){return v}function se(){return e}function ce(){return C}function le(){return w}let R={canScrollNext:ne,canScrollPrev:re,containerNode:ce,internalEngine:oe,destroy:j,off:m,on:p,emit:h,plugins:L,previousScrollSnap:P,reInit:g,rootNode:se,scrollNext:ee,scrollPrev:te,scrollProgress:ae,scrollSnapList:ie,scrollTo:M,selectedScrollSnap:N,slideNodes:le,slidesInView:F,slidesNotInView:I};return D(t,n),setTimeout(()=>c.emit(`init`),0),R}_e.globalOptions=void 0;var G=`mb-1.5 text-[0.7rem] font-medium uppercase tracking-wide text-brand-text/55`,ve=`text-xs text-brand-text/55`;function ye(){return`
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
            <div class="mt-2 inline-flex items-center gap-1.5 text-sm text-white/85">Dòng mô tả ngắn (excerpt) · đọc thêm <i aria-hidden="true" class="fa-solid fa-arrow-right text-[11px]"></i></div>
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
          <div class="inline-flex items-center gap-1.5 pt-1 text-xs font-medium text-brand-accent">Đọc bài viết <i aria-hidden="true" class="fa-solid fa-arrow-right text-[11px]"></i></div>
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
          <div class="inline-flex items-center gap-1.5 pt-1 text-xs font-medium text-brand-accent">Đọc bài viết <i aria-hidden="true" class="fa-solid fa-arrow-right text-[11px]"></i></div>
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
          <div class="inline-flex items-center gap-1.5 pt-1 text-xs font-medium text-brand-accent">Đọc bài viết <i aria-hidden="true" class="fa-solid fa-arrow-right text-[11px]"></i></div>
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
      <a href="#" class="inline-flex items-center gap-1.5 rounded-md border border-brand-surface bg-white px-3 py-1.5 text-brand-text transition hover:border-brand-accent/40 hover:text-brand-accent"><i aria-hidden="true" class="fa-solid fa-arrow-left text-[11px]"></i> Trước</a>
      <a href="#" class="rounded-md bg-brand-accent px-3 py-1.5 text-white">1</a>
      <a href="#" class="rounded-md border border-brand-surface bg-white px-3 py-1.5 text-brand-text transition hover:border-brand-accent/40 hover:text-brand-accent">2</a>
      <a href="#" class="inline-flex items-center gap-1.5 rounded-md border border-brand-surface bg-white px-3 py-1.5 text-brand-text transition hover:border-brand-accent/40 hover:text-brand-accent">Sau <i aria-hidden="true" class="fa-solid fa-arrow-right text-[11px]"></i></a>
    </div>
  </div>

  <div class="sk-region sk-products border-t border-dashed border-brand-surface pt-8">
    <div class="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p class="${G} !mb-1">Sản phẩm nổi bật (phụ — liên kết từ bài hoặc trang tĩnh)</p>
        <p class="${ve}">Khối phụ nhẹ nhàng, giữ trọng tâm ở blog nhưng vẫn có điểm chuyển đổi.</p>
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
            <div class="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-accent">Tìm hiểu thêm <i aria-hidden="true" class="fa-solid fa-arrow-right text-[11px]"></i></div>
          </div>
      </div>

        <div class="embla__slide min-w-0 flex-[0_0_86%] pl-4 sm:flex-[0_0_52%] xl:flex-[0_0_34%]">
          <div class="group h-full rounded-2xl border border-brand-surface bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div class="mb-3 flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-brand-surface to-brand-bg">
              <span class="text-xs uppercase tracking-wide text-brand-text/60">Ảnh sản phẩm</span>
            </div>
            <div class="text-sm font-semibold text-brand-text">Sản phẩm 2 · Dây lụa</div>
            <div class="mt-1 text-xs text-brand-text/65">Thiết kế tối giản, dễ phối đồ.</div>
            <div class="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-accent">Tìm hiểu thêm <i aria-hidden="true" class="fa-solid fa-arrow-right text-[11px]"></i></div>
          </div>
        </div>

        <div class="embla__slide min-w-0 flex-[0_0_86%] pl-4 sm:flex-[0_0_52%] xl:flex-[0_0_34%]">
          <div class="group h-full rounded-2xl border border-brand-surface bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div class="mb-3 flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-brand-surface to-brand-bg">
              <span class="text-xs uppercase tracking-wide text-brand-text/60">Ảnh sản phẩm</span>
            </div>
            <div class="text-sm font-semibold text-brand-text">Sản phẩm 3 · Phụ kiện</div>
            <div class="mt-1 text-xs text-brand-text/65">Điểm nhấn nhỏ cho phong cách hàng ngày.</div>
            <div class="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-accent">Tìm hiểu thêm <i aria-hidden="true" class="fa-solid fa-arrow-right text-[11px]"></i></div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-end gap-2">
      <button type="button" class="inline-flex items-center gap-1.5 rounded-md border border-brand-surface bg-white px-3 py-1.5 text-sm text-brand-text transition hover:border-brand-accent/40 hover:text-brand-accent disabled:cursor-not-allowed disabled:opacity-40" data-products-prev><i aria-hidden="true" class="fa-solid fa-arrow-left text-[11px]"></i> Trước</button>
      <button type="button" class="inline-flex items-center gap-1.5 rounded-md border border-brand-surface bg-white px-3 py-1.5 text-sm text-brand-text transition hover:border-brand-accent/40 hover:text-brand-accent disabled:cursor-not-allowed disabled:opacity-40" data-products-next>Sau <i aria-hidden="true" class="fa-solid fa-arrow-right text-[11px]"></i></button>
    </div>
  </div>
  </div>

  ${u()}
</div>
`}function be(e){let t=e.querySelector(`[data-products-carousel]`),n=e.querySelector(`[data-products-prev]`),r=e.querySelector(`[data-products-next]`);if(!t||!n||!r)return;let i=_e(t,{loop:!1,align:`start`,dragFree:!0,containScroll:`trimSnaps`}),a=()=>{n.disabled=!i.canScrollPrev(),r.disabled=!i.canScrollNext()};n.addEventListener(`click`,()=>i.scrollPrev()),r.addEventListener(`click`,()=>i.scrollNext()),i.on(`init`,a),i.on(`select`,a),i.on(`reInit`,a),a()}function xe(){return`
<div class="post-detail-scratch bg-brand-bg" data-scratch="post-detail">
  ${c()}
  <div class="mx-auto w-full max-w-[1240px] px-2 py-6 sm:px-4 lg:px-6">
    <div class="grid gap-5 lg:grid-cols-12">
      <article class="lg:col-span-8 overflow-hidden bg-white shadow-sm">
        <div class="bg-gradient-to-b from-brand-bg/45 to-white px-5 py-5 sm:px-7">
          <div class="flex flex-wrap items-center gap-2 text-[11px] font-medium text-brand-text/55">
            <span>Trang chủ</span>
            <span>›</span>
            <span>Hướng dẫn</span>
            <span>›</span>
            <span class="text-brand-text/75">Bài viết hiện tại</span>
          </div>

          <h2 class="mt-3 text-2xl font-semibold leading-tight text-brand-text sm:text-3xl sm:leading-tight">
            Tiêu đề bài viết chi tiết theo phong cách đọc dài
          </h2>

          <div class="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-brand-text/60">
            <span class="rounded-full bg-brand-surface/70 px-2.5 py-1">24 Mar 2026</span>
            <span>•</span>
            <span data-reading-time>6 phút đọc</span>
          </div>

          <div class="mt-3 flex flex-wrap gap-2">
            <span class="rounded-full bg-brand-surface/70 px-2.5 py-1 text-[11px] text-brand-text/75">hướng-dẫn</span>
            <span class="rounded-full bg-brand-surface/70 px-2.5 py-1 text-[11px] text-brand-text/75">chăm-tóc</span>
            <span class="rounded-full bg-brand-surface/70 px-2.5 py-1 text-[11px] text-brand-text/75">sản-phẩm</span>
          </div>

          <div class="mt-4 flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-brand-surface/80"></div>
            <div>
              <p class="text-sm font-semibold text-brand-text">Tên tác giả</p>
            </div>
          </div>
        </div>

        <div class="px-5 pb-6 pt-5 sm:px-7">
          <div class="overflow-hidden rounded-2xl">
            <div class="aspect-[16/9] w-full bg-gradient-to-br from-brand-surface via-brand-bg to-brand-surface/70"></div>
            <p class="bg-brand-bg/50 px-3 py-2 text-xs text-brand-text/60">
            Caption: ảnh cover bài viết (placeholder)
          </div>

          <div class="mt-4 rounded-xl bg-brand-surface/55 p-3.5">
            <div class="flex items-center gap-2">
              <p class="text-lg font-semibold tracking-tight text-brand-text sm:text-xl">Xem nhanh</p>
            </div>
            <ol class="mt-2.5 space-y-1.5 text-[0.98rem] leading-7 text-brand-accent">
              <li>
                <a href="#" class="underline-offset-2 transition hover:text-brand-text hover:underline">1. Section heading đầu tiên</a>
              </li>
              <li>
                <a href="#" class="underline-offset-2 transition hover:text-brand-text hover:underline">2. Section heading tiếp theo</a>
              </li>
              <li>
                <a href="#" class="underline-offset-2 transition hover:text-brand-text hover:underline">3. Kết luận / FAQ</a>
              </li>
            </ol>
            <ul class="mt-1.5 list-disc space-y-1 pl-6 text-sm leading-6 text-brand-accent/90">
              <li>Mục con 1 (optional)</li>
              <li>Mục con 2 (optional)</li>
            </ul>
          </div>

          <div class="mt-7 mx-auto max-w-none space-y-5 text-[15px] leading-8 text-brand-text/85" data-reading-content>
            <p class="text-base leading-8 text-brand-text/90">
              Đoạn mở bài viết: đưa người đọc vào vấn đề, nêu lợi ích và lý do nên đọc tiếp.
              Đây là vùng render content HTML từ Blogger trong bản final.
            </p>

            <h3 class="text-[1.35rem] font-semibold leading-tight text-brand-text">
              Section heading h2/h3
            </h3>

            <p>
              Nội dung đoạn thân bài, có thể gồm list, quote, hình ảnh chèn giữa bài, và các note ngắn.
              Mục tiêu là giữ nhịp đọc dễ chịu trên mobile và desktop.
            </p>

            <blockquote class="rounded-xl bg-brand-bg/50 px-4 py-3 text-sm leading-7 text-brand-text/80">
              "Khối quote / key insight để nhấn mạnh thông điệp quan trọng trong bài viết."
            </blockquote>

            <div class="rounded-xl bg-brand-bg/60 p-4 text-sm text-brand-text/75">
              Inline note / CTA nhỏ trong bài viết (optional block).
            </div>

            <p>
              Kết đoạn thân bài và dẫn xuống phần hành động: chia sẻ, đọc bài liên quan, tiếp tục danh mục.
            </p>
          </div>

          <div class="mt-7 pt-5">
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <button type="button" class="inline-flex items-center gap-1.5 rounded-md bg-brand-bg px-3 py-1.5 text-brand-text/80 transition hover:bg-brand-surface hover:text-brand-accent">
                <i aria-hidden="true" class="fab fa-facebook-f"></i>
                <span>Chia sẻ Facebook</span>
              </button>
              <button type="button" class="inline-flex items-center gap-1.5 rounded-md bg-brand-bg px-3 py-1.5 text-brand-text/80 transition hover:bg-brand-surface hover:text-brand-accent">
                <i aria-hidden="true" class="fas fa-link"></i>
                <span>Copy link</span>
              </button>
              <button type="button" class="inline-flex items-center gap-1.5 rounded-md bg-brand-bg px-3 py-1.5 text-brand-text/80 transition hover:bg-brand-surface hover:text-brand-accent">
                <i aria-hidden="true" class="fas fa-list-ul"></i>
                <span>Về danh sách bài</span>
              </button>
            </div>
          </div>

          <div class="mt-5 rounded-xl bg-brand-surface/45 p-4">
            <p class="text-base font-semibold text-brand-text">
              Bạn muốn áp dụng ngay cho tóc của mình?
            </p>
            <p class="mt-1 text-sm text-brand-text/70">
              Xem các sản phẩm phù hợp với quy trình trong bài viết này.
            </p>
            <div class="mt-3 flex flex-wrap items-center gap-3">
              <button type="button" class="rounded-md bg-brand-accent px-3 py-2 text-xs font-semibold text-white transition hover:brightness-110">
                Xem sản phẩm phù hợp
              </button>
              <a href="#" class="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-xs font-medium text-brand-text/80 transition hover:bg-brand-bg hover:text-brand-accent">
                Cần tư vấn? Liên hệ
              </a>
            </div>
          </div>

          <div class="mt-5 rounded-xl bg-brand-bg/25 p-4">
            <p class="text-sm font-semibold text-brand-text">Comments zone</p>
            <p class="mt-1 text-xs text-brand-text/65">Vùng mount comments native của Blogger.</p>
          </div>
        </div>
      </article>

      <aside class="lg:col-span-4 space-y-4">
        <div class="border border-brand-surface/80 bg-white p-4 shadow-sm">
          <div class="flex items-center justify-between gap-2">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-brand-text/55">Bài viết liên quan</p>
            <a href="#" class="text-[11px] font-medium text-brand-accent hover:underline">Xem thêm</a>
          </div>
          <div class="mt-3 space-y-3">
            <a href="#" class="group grid grid-cols-[84px,1fr] gap-3 rounded-xl border border-brand-surface p-2.5 transition hover:-translate-y-0.5 hover:border-brand-accent/35 hover:shadow-sm">
              <div class="overflow-hidden rounded-lg border border-brand-surface">
                <div class="aspect-[4/3] w-full bg-gradient-to-br from-brand-surface to-brand-bg"></div>
              </div>
              <div class="min-w-0">
                <p class="line-clamp-2 text-[13px] font-semibold leading-5 text-brand-text group-hover:text-brand-accent">Related 01: Tiêu đề bài viết liên quan</p>
                <p class="mt-1 text-[11px] text-brand-text/55">22 Mar 2026 • 4 phút đọc</p>
              </div>
            </a>
            <a href="#" class="group grid grid-cols-[84px,1fr] gap-3 rounded-xl border border-brand-surface p-2.5 transition hover:-translate-y-0.5 hover:border-brand-accent/35 hover:shadow-sm">
              <div class="overflow-hidden rounded-lg border border-brand-surface">
                <div class="aspect-[4/3] w-full bg-gradient-to-br from-brand-surface to-brand-bg"></div>
              </div>
              <div class="min-w-0">
                <p class="line-clamp-2 text-[13px] font-semibold leading-5 text-brand-text group-hover:text-brand-accent">Related 02: Tiêu đề bài viết liên quan</p>
                <p class="mt-1 text-[11px] text-brand-text/55">20 Mar 2026 • 5 phút đọc</p>
              </div>
            </a>
            <a href="#" class="group grid grid-cols-[84px,1fr] gap-3 rounded-xl border border-brand-surface p-2.5 transition hover:-translate-y-0.5 hover:border-brand-accent/35 hover:shadow-sm">
              <div class="overflow-hidden rounded-lg border border-brand-surface">
                <div class="aspect-[4/3] w-full bg-gradient-to-br from-brand-surface to-brand-bg"></div>
              </div>
              <div class="min-w-0">
                <p class="line-clamp-2 text-[13px] font-semibold leading-5 text-brand-text group-hover:text-brand-accent">Related 03: Tiêu đề bài viết liên quan</p>
                <p class="mt-1 text-[11px] text-brand-text/55">18 Mar 2026 • 3 phút đọc</p>
              </div>
            </a>
          </div>
        </div>

      </aside>
    </div>

  </div>
  ${u()}
</div>
`}function Se(e){let t=e.querySelector(`[data-reading-content]`),n=e.querySelector(`[data-reading-time]`);if(!t||!n)return;let r=(t.textContent||``).trim();if(!r)return;let i=r.split(/\s+/).filter(Boolean).length;n.textContent=`${Math.max(1,Math.ceil(i/200))} phút đọc`}function K(e){if(e){if(new URLSearchParams(window.location.search).get(`view`)===`post-detail-scratch`){e.innerHTML=xe(),l(e),Se(e);return}e.innerHTML=ye(),l(e),be(e)}}K(document.querySelector(`#app`));