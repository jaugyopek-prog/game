// fx.js — เอฟเฟกต์ภาพสไตล์ HD-2D: ฉากต่อสู้หลายชั้น (พาราแลกซ์ แสง หมอก อนุภาค บลูม) + tilt-shift บนแผนที่
let T=0;
const FX=(()=>{
const el=i=>document.getElementById(i),mkc=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c},sin=Math.sin,now=()=>performance.now();
const COL={sword:'#fff',bow:'#ec6',fire:'#f84',wind:'#8fe',hammer:'#ccd'};
let pops=[],sps=[],q=0,act=null,bgs={},tmp=mkc(160,75),mt=mkc(96,64),on=0,ml=0;
const lay=o=>{const i=B.e.indexOf(o);if(i>=0){const n=B.e.length;return{x:n==1?190:n==2?[120,300][i]:[90,215,340][i],y:208+(i%2)*18,s:o.boss?150:92}}const j=G.party.indexOf(o);return{x:455+j*62,y:178+j*40,s:104}};
function bg(a){if(bgs[a])return bgs[a];const c=mkc(160,75),x=c.getContext('2d'),r=a=='r';
let g=x.createLinearGradient(0,0,0,40);(r?['#140c28','#5a2060','#e0703a']:['#2a3f78','#c9788a','#ffd9a0']).forEach((s,i)=>g.addColorStop(i/2,s));x.fillStyle=g;x.fillRect(0,0,160,40);
g=x.createRadialGradient(118,28,1,118,28,22);g.addColorStop(0,r?'rgba(255,170,90,.9)':'rgba(255,240,200,.95)');g.addColorStop(1,'rgba(255,200,120,0)');x.fillStyle=g;x.fillRect(0,0,160,60);
[[r?'#3a2050':'#5a5a98',30,9,5,.9],[r?'#2a1840':'#3f4a80',36,7,3,1.7],[r?'#1e1030':'#2c3a62',40,5,2.5,2.9]].forEach(([c1,y,a1,a2,ph],k)=>{x.fillStyle=c1;x.beginPath();x.moveTo(0,50);for(let i=0;i<=160;i++)x.lineTo(i,y-a1*sin(i/(14-k*3)+ph)-a2*sin(i/5+ph*2));x.lineTo(160,50);x.fill()});
x.fillStyle=r?'#120a20':'#15283a';
for(let i=-4;i<170;i+=8){const h=r?(i%16?7:14):10+(i*7%5);if(r){x.fillRect(i,40-h,3,h);if(i%16==0)x.fillRect(i-3,40-h,9,2)}else{x.beginPath();x.arc(i+2,40-h/2+3,5+(i%3),0,7);x.fill()}}
g=x.createLinearGradient(0,33,0,75);g.addColorStop(0,r?'#4a3a5a':'#4a7a4a');g.addColorStop(1,r?'#1c1428':'#142a20');x.fillStyle=g;x.fillRect(0,36,160,39);
return bgs[a]=c}
function amb(x,W,H,a,t){const r=a=='r';for(let i=0;i<24;i++){const s=i*7.3,px=(s*97+t*(r?.01:.015)*(.5+i%3*.3))%(W+20)-10,py=r?H-((s*53+t*.03*(.5+i%3*.4))%H):((s*37)%H*.9+sin(t/900+s)*12+H*.05),gl=.5+.5*sin(t/400+s),g=x.createRadialGradient(px,py,0,px,py,6);
g.addColorStop(0,r?`rgba(255,150,60,${.8*gl})`:`rgba(230,255,140,${.9*gl})`);g.addColorStop(1,'rgba(255,255,150,0)');x.fillStyle=g;x.fillRect(px-6,py-6,12,12)}}
function frame(){const c=el('bc');if(!c||typeof B=='undefined'||!B)return;const x=c.getContext('2d'),t=T=now(),a=G.loc=='r'?'r':'f';
x.imageSmoothingEnabled=true;x.drawImage(bg(a),0,0,640,300);
for(let k=0;k<3;k++){const cx=((t*.008*(k+1)+k*230)%800)-80,g=x.createRadialGradient(cx,50+k*22,0,cx,50+k*22,70);g.addColorStop(0,'rgba(255,255,255,.12)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(cx-70,k*22-20,140,140)}
x.fillStyle=`rgba(255,230,170,${.05+.03*sin(t/900)})`;[420,470,530].forEach((u,k)=>{x.beginPath();x.moveTo(u,0);x.lineTo(u+50,0);x.lineTo(u-170+k*30,300);x.lineTo(u-230+k*30,300);x.fill()});
x.fillStyle='rgba(0,0,0,.07)';for(let k=1;k<8;k++)x.fillRect(0,144+k*k*3.2,640,1+k/3);
x.imageSmoothingEnabled=false;x.textAlign='center';
const d=(o,k)=>{const{x:X,y:Y,s:S}=lay(o),full=G.party.includes(o),w=full?S*16/26:S,pose=act&&act.o===o&&t>=act.t0&&t-act.t0<380,spr=full?CHR.cs(o.sp,'l',pose?3:0,o===G.party[0]?G.ap:null,(WP[o.wp]||{}).c):im(k);let al=1;if(o.hp<=0){if(!o.dT)o.dT=t;al=1-(t-o.dT)/600;if(al<=0)return}else o.dT=0;
let ox=0;const hs=t-(o.hT||-9999);if(hs>=0&&hs<260)ox=sin(t/18)*5*(1-hs/260);
if(act&&act.o===o){const p=(t-act.t0)/380;if(p>=0&&p<1)ox+=act.dir*sin(p*Math.PI)*46}
x.fillStyle='rgba(0,0,0,.38)';x.beginPath();x.ellipse(X+ox,Y,w*.42,S*.1,0,0,7);x.fill();
const yy=Y-S+8+sin(t/420+X)*1.5;x.globalAlpha=al;x.drawImage(spr,X-w/2+ox,yy,w,S);
if(hs>=0&&hs<200){x.globalCompositeOperation='lighter';x.globalAlpha=.5*(1-hs/200)*al;x.drawImage(spr,X-w/2+ox,yy,w,S);x.globalCompositeOperation='source-over'}
x.globalAlpha=1;if(o.hp<=0)return;
if(o.mhp&&o.wk){const v=o.dh==null?o.hp:o.dh;o.dh=v+(o.hp-v)*.12;x.fillStyle='rgba(0,0,0,.65)';x.fillRect(X-32,Y+8,64,7);x.fillStyle='#d44';x.fillRect(X-31,Y+9,62*Math.max(0,o.dh)/o.mhp,5);
x.font='11px sans-serif';x.fillStyle='#fff';x.fillText(o.n.split(' ')[0],X,Y+27);x.fillText('🛡'+o.sh+' '+o.wk.map(w=>o.rv.includes(w)?IC[w]:'❔').join(''),X,Y+40);
if(o.brk){x.font='20px sans-serif';x.fillText('💫',X+sin(t/150)*16,yy)}}
if(G.party[B.i]===o){x.font='16px sans-serif';x.fillStyle='#fd3';x.fillText('▼',X,yy-2+sin(t/200)*4)}};
B.e.forEach(e=>d(e,e.k));G.party.forEach(u=>d(u,u.sp));
sps=sps.filter(p=>t-p.b<520);sps.forEach(p=>{if(t<p.b)return;const a2=(t-p.b)/520;x.globalAlpha=1-a2;x.fillStyle=p.c;x.fillRect(p.x+p.vx*a2*60,p.y+p.vy*a2*60+a2*a2*70,4,4)});
x.globalAlpha=1;pops=pops.filter(p=>t-p.t0<950);pops.forEach(p=>{if(t<p.t0)return;const k=(t-p.t0)/950,L=lay(p.o);x.globalAlpha=1-k*k;x.font=(p.big?'bold 30px':'bold 21px')+' sans-serif';x.lineWidth=4;x.strokeStyle='#000';x.fillStyle=p.c;const yy=L.y-L.s*.6-k*40;x.strokeText(p.txt,L.x,yy);x.fillText(p.txt,L.x,yy)});
x.globalAlpha=1;x.imageSmoothingEnabled=true;amb(x,640,300,a,t);
tmp.getContext('2d').drawImage(c,0,0,160,75);x.globalCompositeOperation='screen';x.globalAlpha=.22;x.drawImage(tmp,0,0,640,300);x.globalCompositeOperation='source-over';x.globalAlpha=1;
const g=x.createRadialGradient(320,150,130,320,150,380);g.addColorStop(0,'rgba(0,0,20,0)');g.addColorStop(1,'rgba(0,0,20,.55)');x.fillStyle=g;x.fillRect(0,0,640,300);x.imageSmoothingEnabled=false}
function ev(k,o,v){const t=Math.max(now(),q);
if(k=='act'||k=='atk'){act={o,t0:t,dir:k=='act'?-1:1};q=t+240}
else if(k=='hit'){const L=lay(o);o.hT=t+120;pops.push({o,t0:t+120,txt:'-'+v.d,c:v.w?'#ffd84a':'#fff',big:v.w});for(let i=0;i<10;i++)sps.push({x:L.x,y:L.y-L.s*.5,vx:Math.cos(i)*(.6+i%3*.4),vy:-1-i%4*.4,b:t+120,c:COL[v.ty]||'#fff'});q=t+170}
else if(k=='brk'){pops.push({o,t0:t+160,txt:'BREAK!',c:'#ffb020',big:1});q=t+300}
else if(k=='heal'){if(!v)return;pops.push({o,t0:t,txt:'+'+v,c:'#6f6'});q=t+140}
else if(k=='hurt'){o.hT=t+120;pops.push({o,t0:t+120,txt:'-'+v,c:'#f66'});q=t+260}}
function go(){frame();if(!on){on=1;(function L(){if(!el('bc')){on=0;return}frame();requestAnimationFrame(L)})()}}
function map(){if(ml)return;ml=1;let lt=0;(function L(t){if(!el('cv')){ml=0;return}if(t-lt>33){lt=t;draw()}requestAnimationFrame(L)})(0)}
function post(x,c){const t=T=now(),a=G.loc,W=480,H=320;
if(a=='f'){x.fillStyle=`rgba(255,235,170,${.06+.03*sin(t/1100)})`;for(let k=0;k<3;k++){x.beginPath();x.moveTo(120+k*150,0);x.lineTo(170+k*150,0);x.lineTo(40+k*150,H);x.lineTo(-20+k*150,H);x.fill()}}
x.imageSmoothingEnabled=true;amb(x,W,H,a,t);
mt.getContext('2d').drawImage(c,0,0,96,64);
x.globalCompositeOperation='screen';x.globalAlpha=.2;x.drawImage(mt,0,0,W,H);x.globalCompositeOperation='source-over';
for(let k=0;k<4;k++){x.globalAlpha=.75-k*.2;x.drawImage(mt,0,k*22/5,96,22/5,0,k*22,W,22);x.drawImage(mt,0,64-(k+1)*22/5,96,22/5,0,H-(k+1)*22,W,22)}
x.globalAlpha=1;x.imageSmoothingEnabled=false}
return{ev,go,map,post,frame}})();
