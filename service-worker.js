if(!self.define){let i,l={};const e=(e,s)=>(e=new URL(e+".js",s).href,l[e]||new Promise((l=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=l,document.head.appendChild(i)}else i=e,importScripts(e),l()})).then((()=>{let i=l[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(s,t)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let n={};const u=i=>e(i,r),Q={module:{uri:r},exports:n,require:u};l[r]=Promise.all(s.map((i=>Q[i]||u(i)))).then((i=>(t(...i),n)))}}define(["./workbox-db5fc017"],(function(i){"use strict";i.setCacheNameDetails({prefix:"stapxs-qq-lite"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/Stapxs-QQ-Lite-2.0/Border-Card-UI/LICENSE",revision:"86d3f3a95c324c9479bd8986968f4327"},{url:"/Stapxs-QQ-Lite-2.0/Border-Card-UI/css/color-dark.css",revision:"db9b72f87e05656a1c48d344e97d9b97"},{url:"/Stapxs-QQ-Lite-2.0/Border-Card-UI/css/color-light.css",revision:"2283cd9950a772ad3fd2bb1feaf9317a"},{url:"/Stapxs-QQ-Lite-2.0/Border-Card-UI/css/style.css",revision:"f125fcd40c58293ca041a31a46865dbd"},{url:"/Stapxs-QQ-Lite-2.0/Border-Card-UI/js/auto-theme.js",revision:"47d49cd4a8967a2b7a8e8f6a87acc57e"},{url:"/Stapxs-QQ-Lite-2.0/Border-Card-UI/js/main.js",revision:"1226cf91ff31715482152f5a4888706f"},{url:"/Stapxs-QQ-Lite-2.0/css/608.74db045d.css",revision:null},{url:"/Stapxs-QQ-Lite-2.0/css/app.66f40cf0.css",revision:null},{url:"/Stapxs-QQ-Lite-2.0/css/chunk-vendors.8f9c81fd.css",revision:null},{url:"/Stapxs-QQ-Lite-2.0/fonts/iconfont.1bb66e47.eot",revision:null},{url:"/Stapxs-QQ-Lite-2.0/fonts/iconfont.5a462c72.woff",revision:null},{url:"/Stapxs-QQ-Lite-2.0/fonts/iconfont.6003f034.woff2",revision:null},{url:"/Stapxs-QQ-Lite-2.0/fonts/iconfont.c9615cc2.ttf",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/0.2ab7c865.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/100.40e4e8a3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/102.84363c71.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/103.3cbff5b9.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/104.2777b74c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/106.997fc578.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/108.37c99ef8.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/11.279b4266.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/110.e5eab372.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/113.7fceda50.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/119.e0cd96f7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/12.af4a1e63.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/125.1bea7ed6.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/127.1f09a446.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/129.4ba5efa4.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/130.b4e45b82.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/135.cb3a3d96.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/171.d62f3910.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/174.a7aebaba.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/18.8ca52559.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/181.5c734eeb.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/184.e47b27f7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/185.0a1adbb3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/186.08227ee8.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/187.693ff834.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/188.bcce474c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/19.d2bd099c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/190.7e5bccf5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/193.020242d7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/194.aaf5585a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/196.7946cd81.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/197.3a1e9986.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/198.cc374276.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/199.34f587ed.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/200.a25b23e1.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/201.fa668005.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/202.fec06012.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/203.1b8f6928.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/204.a011b980.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/205.29e80650.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/206.ac7ba83d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/207.049cd168.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/208.c47af5e5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/210.a203f11a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/211.241c84ea.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/213.d36ba4ca.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/22.4925997d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/222.0a5b8f16.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/223.4f031eb1.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/224.ad9dc320.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/225.57760766.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/226.acdafefb.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/228.f15cbb40.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/229.9eef27a3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/231.8e7fa146.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/232.3b2e749d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/233.73dfae16.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/234.99b194a0.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/235.87081179.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/238.d22eae5a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/239.6436991e.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/240.2775049a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/244.1d16a00b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/245.6d6995aa.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/246.95cf2ba3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/26.425d607b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/260.32e9482f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/261.633d18ba.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/264.92db0eab.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/265.069068e8.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/267.47806878.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/269.e2e73cb2.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/27.d1366276.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/272.8cb7237c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/273.7c223440.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/274.ba04dee3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/278.11782972.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/279.fe20ec5d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/28.3c0fe4de.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/280.5ef46d8f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/282.f3d6d351.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/283.09d01ed7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/284.0a18151b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/285.0d505d60.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/287.e515a803.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/288.724d3970.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/289.b6c77984.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/29.c072abae.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/290.79d5b519.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/291.e3698bbd.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/292.f8c6fad7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/293.0bf152a1.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/294.b28ecc5a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/295.94c9ce29.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/296.3a3c5ca5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/297.0a2c0345.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/298.cd9560c5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/299.1ae750ef.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/300.e750c13e.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/301.c854d8ac.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/302.d4d5d2ce.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/303.be17f9ce.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/304.263b9458.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/305.47e151d5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/306.e7cd68dd.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/307.2455cb5f.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/308.26f11aa7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/309.820b2c0b.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/31.21f48ac8.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/310.59c0c40d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/311.dfe78ca5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/312.13a2f091.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/313.9b092748.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/314.ba4ec7c7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/315.d9efd323.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/316.5d5f1d4a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/317.7c1d6049.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/318.781656f5.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/319.4d0cbe1c.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/32.51f873d3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/320.c058971a.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/321.0ce6e8fc.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/322.929e435d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/323.8d383a13.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/35.1a08533d.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/42.60824c8e.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/5.35b21f07.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/59.fd10e5e3.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/60.79d95763.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/7.3088fa01.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/86.3685afc8.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/9.1de8c3b7.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/97.621db861.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/98.f62774f6.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/99.b3118446.gif",revision:null},{url:"/Stapxs-QQ-Lite-2.0/img/iconfont.6dd63684.svg",revision:null},{url:"/Stapxs-QQ-Lite-2.0/index.html",revision:"6f6a1ce0035cfa192d1d37c1d614f01f"},{url:"/Stapxs-QQ-Lite-2.0/js/220.43b95a90.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/392.5634e07c.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/579.1e07f78b.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/608.359db7a3.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/753.cdbf4eea.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/909.e227e7da.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/js/amap.js",revision:"aa702c11c994c12f020c0e54de0232ed"},{url:"/Stapxs-QQ-Lite-2.0/js/app.df30fad5.js",revision:null},{url:"/Stapxs-QQ-Lite-2.0/manifest.json",revision:"9b15762f6622533d83075c1b6e847487"},{url:"/Stapxs-QQ-Lite-2.0/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
