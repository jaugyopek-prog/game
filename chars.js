// chars.js — ระบบอาร์ตตัวละครหลัก: ตัวเต็ม 16x26 ประกอบจาก "หัว" (art.js) + ลำตัว/แขน/ขา + อาวุธ
// มี 4 ทิศ (d,u,l,r) เดิน 3 เฟรม (0=ยืน,1,2) ท่าโจมตี (3) และปรับโทนผิว/ธีมสีของตัวเอกได้
const CHR=(()=>{
const mk=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c};
const SK=[['#f4c9a0','#d99a78'],['#e0a878','#b9805a'],['#a8704a','#7c4c30']];
const TH=[['#d8403a','#8c2230'],['#4a7ad8','#26429a'],['#52b04a','#2a7a3c'],['#a050d0','#5e2a8c']];
const HR={kn:11,mg:12,rg:10,ly:11,tk:11,ok:12,mt:9,dw:11,fx:10,ow:10,rb:11};
const SKN={dw:['#e8b890','#c89068'],fx:['#f28c28','#c4601c'],ow:['#c89868','#946038'],rb:['#f2ece4','#c8c0b8']};
const BK={kn:'#aab4c8',mg:'#d8dbe8',rg:'#2a7a3c',ly:'#6ee0e8',tk:'#aab4c8',mt:'#d8a868',dw:'#aab4c8',fx:'#f28c28',ow:'#c89868',rb:'#f2ece4'},FACE={tk:'cC'};
const OF={
kn:{m:'#aab4c8',d:'#5c6680',a:'#ffd84a',b:'#5c3a22',lg:'#5c6680',st:'a',cp:'#d8403a',cd:'#8c2230',w:'sword'},
mg:{m:'#a050d0',d:'#5e2a8c',a:'#ffd84a',b:'#5c3a22',st:'r',w:'staff'},
rg:{m:'#52b04a',d:'#2a7a3c',a:'#946038',b:'#5c3a22',lg:'#5c3a22',st:'a',w:'bow'},
ly:{m:'#6ee0e8',d:'#2aa0b8',a:'#f890c0',b:'#2aa0b8',st:'r',w:'wand',h:'#f4c9a0'},
tk:{m:'#aab4c8',d:'#5c6680',a:'#52b04a',b:'#5c6680',lg:'#5c6680',st:'s',w:'hammer',h:'#aab4c8'},
ok:{m:'#946038',d:'#5c3a22',a:'#9ae070',b:'#5c3a22',st:'r',w:'',h:'#946038'},
mt:{m:'#4a7ad8',d:'#26429a',a:'#ffd84a',b:'#a8743c',lg:'#d8a868',st:'a',w:'',h:'#d8a868'},
dw:{m:'#946038',d:'#5c3a22',a:'#ffd84a',b:'#5c3a22',lg:'#5c6680',st:'a',w:'',h:'#e8b890'},
fx:{m:'#52b04a',d:'#2a7a3c',a:'#ffd84a',b:'#5c3a22',lg:'#946038',st:'a',w:'',h:'#f28c28'},
ow:{m:'#4a7ad8',d:'#26429a',a:'#ffd84a',b:'#5c3a22',st:'r',w:'',h:'#c89868'},
rb:{m:'#f890c0',d:'#c4608a',a:'#fff',b:'#c4608a',st:'r',w:'',h:'#f2ece4'}};
const cache={};
function head(k,ap,back,side){const rows=S[k].slice(0,HR[k]),c=mk(16,HR[k]),x=c.getContext('2d'),Q={...P,'1':BK[k]||'#aab4c8'},fs=FACE[k]||'sSRm';
if(SKN[k]){Q.s=SKN[k][0];Q.S=SKN[k][1]}
if(ap){Q.s=SK[ap.s][0];Q.S=SK[ap.s][1];const m={kn:'rR',mg:'pP',rg:'gG'}[k];if(m){Q[m[0]]=TH[ap.t][0];Q[m[1]]=TH[ap.t][1]}}
rows.forEach((l,y)=>{let f=[...l+[...l].reverse().join('')];if(back){const ix=f.map((q,i)=>fs.includes(q)?i:-1).filter(i=>i>=0);if(ix.length)for(let i=ix[0];i<=ix[ix.length-1];i++)f[i]='1'}
if(side){const ix=f.map((q,i)=>fs.includes(q)?i:-1).filter(i=>i>=0);if(ix.length){const a=ix[0],b=ix[ix.length-1],sk=k=='tk'?'e':'s',EY=k=='tk'?'cC':'kw',g=f.slice();
for(let i=a;i<=b;i++){const q=f[i],mo=k!='tk'&&'Rm'.includes(q),e=EY.includes(q);if(!e&&!mo)continue;
if(i>=8)g[i]=sk;else{const t=i-(mo?2:1);if(fs.includes(f[t])||EY.includes(f[t])){g[t]=q;if(g[i]==q)g[i]=sk}}}f=g}}
f.forEach((q,i)=>{if(q!='.'){x.fillStyle=Q[q];x.fillRect(i,y,1,1)}})});return c}
function cs(k,d,f,ap,wc){const key=k+d+f+(ap?ap.s+''+ap.t:'')+(wc||'');if(cache[key])return cache[key];
const c=mk(16,26),x=c.getContext('2d'),o=OF[k],hr=HR[k],by=14,back=d=='u',side=d=='l'||d=='r',atk=f==3,lo=f==1?1:f==2?-1:0;
const R=(col,a,b,w,h)=>{x.fillStyle=col;x.fillRect(a,b,w,h)},B=(col,a,b,w,h)=>{R('#1b1626',a-1,b-1,w+2,h+2);R(col,a,b,w,h)};
let m=o.m,dk=o.d,cp=o.cp,cd=o.cd;const th=ap&&TH[ap.t],hc=o.h||(ap?SK[ap.s][0]:'#f4c9a0');
if(th&&(k=='mg'||k=='rg')){m=th[0];dk=th[1]}if(th&&k=='kn'){cp=th[0];cd=th[1]}
const lg=o.lg||dk,lf=f==1?1:0,rt=f==2?1:0,ra=atk?-4:-lo,la=lo;
if(!side){
 if(cp&&!back)B(cp,3,by,10,9);
 if(o.st=='r'){B(dk,3,by+6,10,5);R(o.a,3,by+9,10,1);B(m,3+lo,by+10,10,1);R(o.b,5,by+11,2,1);R(o.b,9,by+11,2,1)}
 else{B(lg,5,by+6,3,4-lf);B(lg,8,by+6,3,4-rt);B(o.b,5,by+10-lf,3,2);B(o.b,8,by+10-rt,3,2)}
 if(o.st=='s'){B(m,3,by,10,6);R(o.a,4,by+1,3,1)}else{B(m,4,by,8,6);R(dk,10,by+1,2,4);if(o.st=='a')R(o.a,7,by+1,2,2)}
 R(o.a,4,by+4,8,1);
 B(dk,2,by+1+la,2,4);R(hc,2,by+4+la,2,1);B(dk,12,by+1+ra,2,4);R(hc,12,by+(atk?-3:4+ra),2,1);
 if(cp&&back){B(cp,3,by,10,10);R(cd,8,by+1,4,8)}
}else{
 const fw=f==1?2:f==2?-2:0;
 if(cp)B(cp,4,by,3,9);
 if(o.st=='r'){B(dk,4,by+6,8,5);R(o.a,4,by+9,8,1);B(m,4+lo,by+10,8,1);R(o.b,5,by+11,2,1);R(o.b,8,by+11,2,1)}
 else{B(lg,6-fw,by+6,3,4);B(o.b,6-fw,by+10,4,2);B(lg,6+fw,by+6,3,4);B(o.b,6+fw,by+10,4,2)}
 B(m,5,by,6,6);R(o.a,5,by+4,6,1);if(o.st=='a')R(o.a,8,by+1,2,2);
 const ax=7-fw/2;B(dk,atk?9:ax,atk?by-3:by+1,2,atk?5:4);R(hc,atk?9:ax,atk?by-3:by+4,2,1)}
x.drawImage(head(k,ap,back,side),0,by-hr+1);
if(atk){const w=o.w,wx=side?10:12;
 if(w=='sword'){R(wc||'#fff',wx,by-10,2,8);R(o.a,wx-1,by-2,4,1)}
 else if(w=='staff'){R('#946038',wx,by-8,2,9);R(wc||(th?th[0]:'#c6f'),wx-1,by-11,4,3)}
 else if(w=='bow'){R(wc||'#fff',wx,by-9,1,13);R('#946038',wx+1,by-8,1,11)}
 else if(w=='hammer'){R('#946038',wx,by-6,2,7);B(wc||'#aab4c8',wx-2,by-10,6,4)}
 else{R('#f890c0',wx,by-8,2,8);R(wc||'#ffd84a',wx-1,by-11,4,3)}}
if(d=='r'){const c2=mk(16,26),y=c2.getContext('2d');y.translate(16,0);y.scale(-1,1);y.drawImage(c,0,0);return cache[key]=c2}
return cache[key]=c}
return{cs,SK,TH}})();
