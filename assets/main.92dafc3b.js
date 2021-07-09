var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{i as n,o as s,h as i,T as l,n as d}from"./vendor.08fc19b9.js";var p=Object.defineProperty,c=Object.getOwnPropertyDescriptor,h=(e,t,r,o)=>{for(var a,n=o>1?void 0:o?c(t,r):t,s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o?a(t,r,n):a(n))||n);return o&&n&&p(t,r,n),n};let y=class extends i{constructor(){super(...arguments),this.dragType="none",this.offset={x:0,y:0},this.pointerMap=new Map}render(){return l`
      <main
        class="full-size"
        @pointerdown=${e=>this.handleDown(e,"canvas")}
        @pointermove=${e=>this.handleMove(e,"canvas",(e=>this.moveCanvas(e)))}
        @touchstart=${e=>this.handleDown(e,"canvas")}
        @touchmove=${e=>this.handleMove(e,"canvas",(e=>this.moveCanvas(e)))}
        @pointerup=${e=>this.handleUp(e)}
      >
        <canvas class="full-size"></canvas>
        <div id="children" class="full-size">
          <slot
            class="child"
            draggable="false"
            @pointerdown=${e=>this.handleDown(e,"element")}
            @pointermove=${e=>this.handleMove(e,"element",(t=>{this.moveElement(e.target.parentElement===this?e.target:e.target.parentElement,t)}))}
            @touchstart=${e=>this.handleDown(e,"element")}
            @touchmove=${e=>this.handleMove(e,"element",(t=>this.moveElement(e.target.parentElement===this?e.target:e.target.parentElement,t)))}
          ></slot>
        </div>
      </main>
    `}handleDown(e,t){"none"===this.dragType&&(e.preventDefault(),this.dragType=t,e.target.setPointerCapture(e.pointerId),this.pointerMap.set(e.pointerId,{id:e.pointerId,startPos:{x:e.clientX,y:e.clientY},currentPos:{x:e.clientX,y:e.clientY}}))}handleMove(e,n,s){if(this.dragType===n){e.preventDefault();const n=this.pointerMap.get(e.pointerId),i=((e,n)=>{for(var s in n||(n={}))r.call(n,s)&&a(e,s,n[s]);if(t)for(var s of t(n))o.call(n,s)&&a(e,s,n[s]);return e})({},n.currentPos);n.currentPos={x:e.clientX,y:e.clientY};s({x:n.currentPos.x-i.x,y:n.currentPos.y-i.y})}}handleUp(e){this.dragType="none",e.target.releasePointerCapture(e.pointerId)}moveCanvas(e){this.offset.x+=e.x,this.offset.y+=e.y,this.root.style.setProperty("--offset-x",`${this.offset.x}px`),this.root.style.setProperty("--offset-y",`${this.offset.y}px`),this.container.style.setProperty("--dx",`${this.offset.x}px`),this.container.style.setProperty("--dy",`${this.offset.y}px`)}moveElement(e,t){const r=(t,r)=>{const o=e.style.getPropertyValue(t);return o.length>0?parseFloat(o.replace("px","")):r},o=r("--dx",0)+t.x,a=r("--dy",0)+t.y;e.style.transform=`translate(${o}px, ${a}px)`,e.style.setProperty("--dx",`${o}px`),e.style.setProperty("--dy",`${a}px`)}};y.styles=n`
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
      transform: translate(var(--dx), var(--dy));
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
  `,h([s("main")],y.prototype,"root",2),h([s("#children")],y.prototype,"container",2),h([s("canvas")],y.prototype,"canvas",2),y=h([d("draggable-dom")],y);
