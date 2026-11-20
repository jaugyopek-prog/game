// cg.js — ภาพประกอบเล่าเรื่อง (CG) วาดด้วยโค้ด มีแอนิเมชัน: war, seeds, tree, glade, golem, dragon, dawn
const CG=(()=>{
const el=i=>document.getElementById(i),sin=Math.sin,cos=Math.cos;let on=0,cur='';
const glow=(x,X,Y,r,c)=>{const g=x.createRadialGradient(X,Y,0,X,Y,r);g.addColorStop(0,c);g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(X-r,Y-r,2*r,2*r)};
const sky=(x,a,b,c)=>{const g=x.createLinearGradient(0,0,0,260);g.addColorStop(0,a);g.addColorStop(.6,b);g.addColorStop(1,c);x.fillStyle=g;x.fillRect(0,0,640,260)};
const stars=(x,t,n)=>{for(let i=0;i<n;i++){x.fillStyle=`rgba(255,255,255,${.4+.6*Math.abs(sin(t/700+i))})`;x.fillRect((i*97.3)%640,(i*53.7)%170,1+i%2,1+i%2)}};
const hills=(x,y,a,col,ph)=>{x.fillStyle=col;x.beginPath();x.moveTo(0,260);for(let i=0;i<=640;i+=8)x.lineTo(i,y-a*sin(i/90+ph)-a/2*sin(i/37+ph*2));x.lineTo(640,260);x.fill()};
const dragon=(x,X,Y,s,t,eye)=>{const w=sin(t/500)*8;x.fillStyle='#0d0814';x.beginPath();x.moveTo(X-200*s,Y+40*s);x.quadraticCurveTo(X-120*s,Y-110*s+w,X,Y-30*s);x.quadraticCurveTo(X+120*s,Y-110*s+w,X+200*s,Y+40*s);x.quadraticCurveTo(X+90*s,Y+10*s,X,Y+60*s);x.quadraticCurveTo(X-90*s,Y+10*s,X-200*s,Y+40*s);x.fill();
x.beginPath();x.moveTo(X-30*s,Y-20*s);x.lineTo(X-50*s,Y-90*s);x.lineTo(X-8*s,Y-40*s);x.moveTo(X+30*s,Y-20*s);x.lineTo(X+50*s,Y-90*s);x.lineTo(X+8*s,Y-40*s);x.fill();x.beginPath();x.ellipse(X,Y+10*s,34*s,28*s,0,0,7);x.fill();glow(x,X-14*s,Y+4*s,16*s,eye);glow(x,X+14*s,Y+4*s,16*s,eye)};
const SC={
war(x,t){sky(x,'#12081e','#6a1a3a','#e0602a');stars(x,t,60);glow(x,320,200,230,'rgba(255,120,40,.55)');hills(x,230,14,'#1a0c18',1);dragon(x,320,90,1.3,t,'rgba(255,200,80,1)');
for(let i=0;i<14;i++){const X=(i*173+t*.08)%700-30,Y=(i*61+t*.12)%260;x.strokeStyle='rgba(255,230,160,.8)';x.beginPath();x.moveTo(X,Y);x.lineTo(X-14,Y-9);x.stroke()}},
seeds(x,t){sky(x,'#050818','#14224a','#2a1a3a');stars(x,t,70);['#ffd84a','#6ee0e8','#9ae070'].forEach((c,i)=>{const X=180+i*140,Y=70+sin(t/600+i*2)*10;glow(x,X,Y,60,c+'cc');x.fillStyle='#fff';x.beginPath();x.arc(X,Y,6,0,7);x.fill();x.strokeStyle=c;x.globalAlpha=.5;x.beginPath();x.moveTo(X,Y);x.lineTo(320,215);x.stroke();x.globalAlpha=1});
x.strokeStyle='rgba(255,230,150,.7)';for(let k=0;k<3;k++){x.beginPath();x.ellipse(320,222,60+k*34,10+k*6,0,0,7);x.stroke()}hills(x,240,8,'#0a0a18',2);x.fillStyle='#0a0a18';[250,290,350,390].forEach((X,i)=>x.fillRect(X,205-(i%2)*18,12,38+(i%2)*18))},
tree(x,t){sky(x,'#0a1030','#2a3a6a','#4a5a7a');stars(x,t,50);glow(x,500,60,70,'rgba(255,250,210,.8)');x.fillStyle='#f4f0d8';x.beginPath();x.arc(500,60,18,0,7);x.fill();hills(x,215,16,'#1c2a3a',.5);hills(x,238,10,'#101a24',2);
x.fillStyle='#0c1418';x.fillRect(306,120,16,110);glow(x,314,100,110,'rgba(190,230,255,.35)');x.fillStyle='rgba(170,210,230,.75)';for(let i=0;i<40;i++){const a=i*2.4,r=20+(i*13%60);x.beginPath();x.arc(314+cos(a)*r*1.5,100+sin(a)*r*.7,6+i%3,0,7);x.fill()}
for(let i=0;i<12;i++){x.fillStyle='rgba(200,230,240,.8)';x.fillRect((300+i*29+t*.02)%640,(110+i*17+t*.03*(1+i%3))%250,3,2)}
[[90,214],[170,222],[470,218],[560,224]].forEach(([X,Y])=>{x.fillStyle='#08101a';x.fillRect(X,Y,34,22);x.fillStyle='#ffd070';x.fillRect(X+8,Y+8,8,8)})},
glade(x,t){sky(x,'#1a3a4a','#4a8a6a','#2a5a3a');for(let k=0;k<4;k++){x.fillStyle=`rgba(255,240,180,${.08+.04*sin(t/800+k)})`;x.beginPath();x.moveTo(120+k*130,0);x.lineTo(170+k*130,0);x.lineTo(60+k*130,260);x.lineTo(k*130,260);x.fill()}
[40,160,330,470,590].forEach((X,i)=>{x.fillStyle=i%2?'#0f2a1c':'#16382a';x.fillRect(X,0,26+i%2*10,260);x.beginPath();x.arc(X+14,40,46,0,7);x.fill()});hills(x,236,10,'#0c2218',1);
const X=330+sin(t/700)*30,Y=130+sin(t/500)*12;glow(x,X,Y,80,'rgba(160,255,230,.9)');x.fillStyle='#fff';x.beginPath();x.arc(X,Y,5,0,7);x.fill();for(let i=0;i<20;i++){x.fillStyle=`rgba(210,255,180,${.5+.5*sin(t/300+i)})`;x.fillRect((i*83+t*.01)%640,(i*47)%250,2,2)}},
golem(x,t){sky(x,'#14102a','#3a2a5a','#1a1428');stars(x,t,30);[60,170,470,580].forEach((X,i)=>{x.fillStyle='#0a0814';x.fillRect(X,60+i%2*30,34,200);x.fillRect(X-6,56+i%2*30,46,10)});hills(x,248,6,'#0a0814',0);
x.fillStyle='#1a1624';x.fillRect(250,70,140,190);x.fillRect(230,110,40,100);x.fillRect(370,110,40,100);x.fillRect(285,40,70,40);const p=.6+.4*sin(t/400);glow(x,302,60,40,`rgba(80,230,255,${p})`);glow(x,338,60,40,`rgba(80,230,255,${p})`);x.fillStyle='#bff';x.fillRect(296,58,12,6);x.fillRect(332,58,12,6)},
dragon(x,t){sky(x,'#1a0818','#5a1a2a','#c04a1a');glow(x,320,150,260,'rgba(255,140,40,.5)');dragon(x,320,120,1.7,t,'rgba(255,170,40,1)');for(let i=0;i<16;i++){x.fillStyle='rgba(255,170,60,.9)';x.fillRect((i*83+t*.03)%640,260-((i*71+t*.06)%260),2,2)}hills(x,250,8,'#120810',1)},
desert(x,t){sky(x,'#2a1a4a','#c06a8a','#ffd09a');glow(x,320,190,260,'rgba(255,210,150,.7)');hills(x,200,22,'#c89a5a',.3);hills(x,228,16,'#a87a44',2);
[[120,0,.8],[250,1,1.1],[430,2,1],[540,3,.7]].forEach(([X,i,k])=>{const g=.5+.5*sin(t/500+i);x.fillStyle=i%2?'#7fe6f2':'#e08ae8';x.beginPath();x.moveTo(X,232-90*k);x.lineTo(X+22*k,234);x.lineTo(X-22*k,234);x.fill();glow(x,X,200,60*k,`rgba(160,240,255,${.25*g})`)});
for(let i=0;i<20;i++){x.fillStyle='rgba(200,255,255,.8)';x.fillRect((i*89+t*.02)%640,(i*37+t*.01*(i%3))%250,2,2)}},
dawn(x,t){sky(x,'#3a3a7a','#e08a8a','#ffe0a0');glow(x,320,200,300,'rgba(255,240,180,.8)');for(let k=0;k<9;k++){const a=k*.7+t/4000;x.fillStyle='rgba(255,240,190,.12)';x.beginPath();x.moveTo(320,200);x.lineTo(320+cos(a)*500,200-Math.abs(sin(a))*500);x.lineTo(320+cos(a+.2)*500,200-Math.abs(sin(a+.2))*500);x.fill()}
hills(x,230,12,'#3a4a5a',1);hills(x,248,8,'#1a2a2a',3);const Y=110+sin(t/600)*8;glow(x,320,Y,70,'rgba(255,255,200,.95)');x.fillStyle='#fff';x.beginPath();x.moveTo(320,Y-16);x.lineTo(330,Y);x.lineTo(320,Y+16);x.lineTo(310,Y);x.fill()}};
function frame(){const c=el('cg');if(!c||!SC[cur])return;const x=c.getContext('2d');SC[cur](x,performance.now());x.fillStyle='rgba(0,0,0,.25)';x.fillRect(0,0,640,14);x.fillRect(0,246,640,14)}
function go(id){cur=id;frame();if(!on){on=1;(function L(){if(!el('cg')){on=0;return}frame();requestAnimationFrame(L)})()}}
return{go,frame}})();
