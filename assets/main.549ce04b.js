var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{i as s,o as i,h as a,T as d,n as l}from"./vendor.08fc19b9.js";var c=Object.defineProperty,p=Object.getOwnPropertyDescriptor,f=(e,t,r,o)=>{for(var n,s=o>1?void 0:o?p(t,r):t,i=e.length-1;i>=0;i--)(n=e[i])&&(s=(o?n(t,r,s):n(s))||s);return o&&s&&c(t,r,s),s};let h=class extends a{constructor(){super(...arguments),this.dragType="none",this.offset={x:0,y:0},this.pointerMap=new Map}render(){return d`
      <main class="full-size">
        <canvas class="full-size"></canvas>
        <div id="children" class="full-size"></div>
      </main>
    `}handleDown(e,t){"none"===this.dragType&&(e.preventDefault(),this.dragType=t,e.target.setPointerCapture(e.pointerId),this.pointerMap.set(e.pointerId,{id:e.pointerId,startPos:{x:e.clientX,y:e.clientY},currentPos:{x:e.clientX,y:e.clientY}}))}handleMove(e,s,i){if(this.dragType===s){e.preventDefault();const s=this.pointerMap.get(e.pointerId),a=((e,s)=>{for(var i in s||(s={}))r.call(s,i)&&n(e,i,s[i]);if(t)for(var i of t(s))o.call(s,i)&&n(e,i,s[i]);return e})({},s.currentPos);s.currentPos={x:e.clientX,y:e.clientY};i({x:s.currentPos.x-a.x,y:s.currentPos.y-a.y})}}handleUp(e){this.dragType="none",e.target.releasePointerCapture(e.pointerId)}moveCanvas(e){this.offset.x+=e.x,this.offset.y+=e.y,this.root.style.setProperty("--offset-x",`${this.offset.x}px`),this.root.style.setProperty("--offset-y",`${this.offset.y}px`)}moveElement(e,t){const r=(t,r)=>{const o=e.style.getPropertyValue(t);return o.length>0?parseFloat(o.replace("px","")):r},o=r("--dx",0)+t.x,n=r("--dy",0)+t.y;e.style.transform=`translate(${o}px, ${n}px)`,e.style.setProperty("--dx",`${o}px`),e.style.setProperty("--dy",`${n}px`)}async firstUpdated(){const e=Array.from(this.childNodes);let t=0;const r=(e,t,r)=>{e.addEventListener("pointerdown",(e=>{this.handleDown(e,t)})),e.addEventListener("pointermove",(e=>{this.handleMove(e,t,(e=>{r(e)}))})),e.addEventListener("touchstart",(e=>{this.handleDown(e,t)})),e.addEventListener("pointermove",(e=>{this.handleMove(e,t,(e=>{r(e)}))}))};for(const o of e)if(o instanceof SVGElement||o instanceof HTMLElement){const e=o;e.classList.add("child"),e.style.setProperty("--layer",`${t}`),this.container.append(e),r(e,"element",(t=>{this.moveElement(e,t)})),e.setAttribute("draggable","false"),t++}this.requestUpdate(),r(this.root,"canvas",(e=>{this.moveCanvas(e);for(const t of Array.from(this.container.children))(t instanceof SVGElement||t instanceof HTMLElement)&&this.moveElement(t,e)})),this.root.addEventListener("touchstart",(function(e){e.preventDefault()})),this.root.addEventListener("pointerup",(e=>{this.handleUp(e)}))}};h.styles=s`
    :host {
      --offset-x: 0;
      --offset-y: 0;
      --grid-background-color: white;
      --grid-color: black;
      --grid-size: 40px;
      --grid-dot-size: 1px;
    }
    main {
      overflow: hidden;
    }
    canvas {
      background-size: var(--grid-size) var(--grid-size);
      background-image: radial-gradient(
        circle,
        var(--grid-color) var(--grid-dot-size),
        var(--grid-background-color) var(--grid-dot-size)
      );
      background-position: var(--offset-x) var(--offset-y);
      z-index: 0;
    }
    .full-size {
      width: 100%;
      height: 100%;
      position: fixed;
    }
    .child {
      --dx: 0px;
      --dy: 0px;
      position: fixed;
      flex-shrink: 1;
      z-index: var(--layer, 0);
      transform: translate(var(--dx), var(--dy));
    }
    @media (prefers-color-scheme: dark) {
      main {
        --grid-background-color: black;
        --grid-color: grey;
      }
    }
  `,f([i("main")],h.prototype,"root",2),f([i("#children")],h.prototype,"container",2),f([i("canvas")],h.prototype,"canvas",2),h=f([l("css-canvas")],h);
