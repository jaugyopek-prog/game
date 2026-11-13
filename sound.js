// sound.js — เสียงเอฟเฟกต์และเพลงสร้างด้วย WebAudio ไม่ต้องมีไฟล์เสียง (ปุ่ม 🔊 มุมขวาบนเพื่อปิด/เปิด)
const SND=(()=>{let c,on=true,mode='',tm=0,n=0;
const A=()=>c||(c=new(window.AudioContext||window.webkitAudioContext)());
const tone=(f,d=.1,ty='square',v=.06,t0=0,f2)=>{if(!on)return;try{const a=A(),o=a.createOscillator(),g=a.createGain(),t=a.currentTime+t0;o.type=ty;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+d)}catch(e){}};
const seq=(fs,d,ty,v,gap)=>fs.forEach((f,i)=>tone(f,d,ty,v,i*gap));
const FX={hit:()=>tone(220,.12,'sawtooth',.08,0,80),weak:()=>seq([330,495],.12,'square',.07,.08),brk:()=>{tone(150,.35,'sawtooth',.1,0,40);tone(600,.2,'square',.06,.05)},
hurt:()=>tone(140,.15,'square',.07,0,60),heal:()=>seq([523,659,784],.15,'sine',.07,.08),lvl:()=>seq([523,659,784,1047],.18,'square',.06,.1),
win:()=>seq([392,523,659,784,1047],.2,'square',.06,.12),step:()=>tone(90,.04,'triangle',.03)};
const M={map:[[262,330,392,523,392,330],420,'triangle',.03],battle:[[220,262,330,262,220,196,262,330],190,'square',.022],boss:[[110,131,165,131,98,147,185,147],150,'sawtooth',.03]};
const m=k=>{if(k==mode)return;mode=k;clearInterval(tm);n=0;const s=M[k];if(!s)return;tm=setInterval(()=>tone(s[0][n++%s[0].length],s[1]/1000*1.4,s[2],s[3]),s[1])};
const wake=()=>{try{A().resume()}catch(e){}};
addEventListener('pointerdown',wake);addEventListener('keydown',wake);
const b=document.createElement('button');b.textContent='🔊';b.style.cssText='position:fixed;top:8px;right:8px;z-index:9';b.onclick=()=>{on=!on;b.textContent=on?'🔊':'🔇'};document.body.appendChild(b);
return{p:k=>FX[k]&&FX[k](),m}})();
