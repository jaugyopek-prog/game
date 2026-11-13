// save.js — เซฟอัตโนมัติลง localStorage ของเบราว์เซอร์ (เซฟทุกครั้งที่เข้าแผนที่/จบการต่อสู้)
const SAVE={k:'seed-of-star-save-v1',
put(){try{localStorage.setItem(this.k,JSON.stringify(G))}catch(e){}},
get(){try{return JSON.parse(localStorage.getItem(this.k))}catch(e){return null}},
clear(){try{localStorage.removeItem(this.k)}catch(e){}}};
