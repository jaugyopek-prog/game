// art.js — พิกเซลอาร์ต 16x16 (วาดครึ่งซ้าย 8 คอลัมน์ ระบบสะท้อนให้อัตโนมัติ) มีแรเงาและเส้นขอบ
const P={k:'#1b1626',w:'#fff',W:'#d8dbe8',s:'#f4c9a0',S:'#d99a78',h:'#5a3420',r:'#d8403a',R:'#8c2230',o:'#f28c28',y:'#ffd84a',Y:'#c4962a',g:'#52b04a',G:'#2a7a3c',l:'#9ae070',b:'#4a7ad8',B:'#26429a',c:'#6ee0e8',C:'#2aa0b8',p:'#a050d0',P:'#5e2a8c',m:'#f890c0',n:'#946038',N:'#5c3a22',e:'#aab4c8',E:'#5c6680',t:'#d8a868',T:'#a8743c'};
const S={
// ตัวละครหลัก
kn:["......rr","....kkrR","..kkEeee",".kEeeWee",".kEeeeee",".kEsssss",".kEswkss",".kEsssss",".kEssSRR","..kEssss","...kksss",".kEEeeee","kEeeWeee","kEeeeeYY","kEEeeeYY","kkkkkkkk"],
mg:[".......p","......pp",".....ppP","....ppPp","..kkpppp",".kPPyyyy",".kssssss",".kswkssS",".kssssss",".kwwwwww","..kwwwww","...kwwWW",".kPPpppp","kPppppyy","kPpppppp","kkkkkkkk"],
rg:["....kkgg","..kkgggg",".kGgggGg",".kGggggg",".kGgssss",".kGsswks",".kGgssss",".kGgsSRR","..kGgsss","...kGsss","..kGGggg",".kGgnnnn","kGggnnYY","kGgggnnn","kGGgggnn","kkkkkkkk"],
// เพื่อนร่วมทีม
ly:["....lgll","..cccccc",".cccCccc",".cCsssss","sCcswkss",".Ccsmsss",".CcssSRR",".Ccsssss","..Ccssss","...kkcss","....kkss","..kCCccc",".kCcccyy","kCcccccc","kCCccccc","kkkkkkkk"],
tk:[".kkkkkkk","kEeeeeee","kEeGGeee","kEeeeeEe","kEecccee","kEeCCCee","kEeeeeee","kEekEkEk","kEeeeeee",".kEEEeee","..kkEEee",".kEEeeGe","kEeeeWee","kEeeeeee","kEEEEEEE","kkkkkkkk"],
// NPC
ok:["..lgllgl",".lggglgg","lgGgggGg","lGgnnnnn",".kNnnnnn",".kNnwknn",".kNnnnNN",".kNwwwnn",".kwwwwww","..kwwwww","..kwwWww","...kwwww","..kNnnnn",".kNnnnnn",".kNNnnnn","kkkkkkkk"],
mt:[".kTk....",".kttTk..",".kttttTt",".ktttttt","ktgktttt","ktttttmm","kwwtttkk",".kttttTt","...kkttt","..kBBbbb",".kBbbbbb","kBbbbbyy","kBbbbbbb","kBBbbbbb","kBBBBBBB","kkkkkkkk"],
// มอนสเตอร์
sl:["........","........","........",".....kkk","...kkggg","..kgglll",".kggllgg",".kgwkggg",".kgggggg","kgggggkk","kgggggGG","kggggggg","kGgggggg","kGGGGggg",".kkGGGGG","..kkkkkk"],
bt:["......kP","k....kpp","kk..kppp","kPkpprpp","kPPppkww","kpPPppkk",".kpPPppp",".kppkkpp","..kpPppp","...kkppp",".....kkp","......kk","........","........","........","........"],
mu:["....kkkk","..kkrrrr",".krrwwrr","krrwwrrr","krrrrRrr","krrrrwwr","kkkkkkkk",".ktttttt",".ktkttTt",".kttttTT",".kttttRR",".kttttTT","kttttTTT","kTTttTTT",".kkkkkkk","........"],
sp:["k.......",".k....kk","..k..kPP","...kkPPP","k.kPPrrP","kkPPPrrP","..kPPPPP","k.kPPpPP",".kPPPPPP","kkPPPpPP","..kPPPPP",".k.kkPPP","k....kkk","........","........","........"],
dr:["kE......","kEE.....","kEEkkkkk",".kEEeeee",".kEeeeEe","kEeoYoee",".kEeeeee",".kEeeEkE",".kEeeeee",".kEkwkwk","..kkwkwk","...kkRRR","..kEEeee",".kEeeeee",".kEEEEEE","kkkkkkkk"]};
