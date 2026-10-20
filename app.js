// ===== คำถาม 30 ข้อ แบบให้คะแนน 7 ระดับ =====
// A = ผลเมื่อเห็นด้วย (หรือเลือกฝั่ง L), D = ผลเมื่อไม่เห็นด้วย (หรือฝั่ง R) คูณตามระดับ 1-3
// p = ความชอบ, a = สิ่งที่รับไม่ได้, r = ความทนข้อเสีย · L/R = คำถามแบบเลือกฝั่ง (ซ้าย = A, ขวา = D)
const PAGES=[
 {t:"การต่อสู้",d:"อาวุธและวิธีฆ่าศัตรูที่คุณถนัด",qs:[
  {s:"อาวุธหลักในมือของคุณคือ",L:"ดาบ ขวาน หรือกำปั้น เข้าไปประชิด",R:"ธนู เวท หรือของยิง จากระยะไกล",A:{p:{melee:3,unarmed:1},a:{weakhit:3}},D:{p:{ranged:2,magic:2},a:{nobow:1}}},
  {s:"ฉันอยากใช้เวทมนตร์และสกิลพิเศษเป็นอาวุธหลัก มากกว่าอาวุธในมือ",A:{p:{magic:3,tech:.5}},D:{p:{melee:1,ranged:1.5},a:{weakhit:2,nobow:1}}},
  {s:"ฉันอยากมีลูกสมุน สัตว์เลี้ยง หรือกองทัพคอยสู้แทน",A:{p:{pets:3}},D:{p:{burst:.5}}},
  {s:"วิธีจัดการศัตรูที่ชอบที่สุด",L:"ฟันทีเดียวจบ ดาเมจหนักๆ",R:"ทำให้ติดไฟ ติดพิษ ติดใย แล้วค่อยๆ ตาย",A:{p:{burst:3}},D:{p:{dot:3,cc:1.5}}},
  {s:"การต่อยด้วยมือเปล่า กรงเล็บ หรือเขี้ยว ฟังดูเท่กว่าการถืออาวุธ",A:{p:{unarmed:3,beast:1}},D:{p:{melee:1}}}]},
 {t:"บทบาทในทีม",d:"ถ้าลงดันเจี้ยนกับเพื่อน คุณยืนตรงไหน",qs:[
  {s:"ตอนลงดันเจี้ยนกับเพื่อน ฉันอยาก",L:"ยืนหน้า รับดาเมจแทนทุกคน",R:"อยู่ข้างหลัง ฮีลและบัฟเพื่อน",A:{p:{tank:3,regen:1},a:{lowhp:2,small:1}},D:{p:{support:3,holy:.5}}},
  {s:"ฉันชอบแอบย่อง ล่องหน แล้วโผล่ลอบโจมตีจากด้านหลัง",A:{p:{stealth:3,burst:1}},D:{p:{tank:1,holy:.5}}},
  {s:"ฉันชอบทำให้ศัตรูขยับไม่ได้ เช่น แช่แข็ง ตรึงใย สตัน หรือทำให้ช้า",A:{p:{cc:3}},D:{p:{burst:1}}},
  {s:"ฉันอยากเป็นคนที่ล้มบอสใหญ่ๆ ของเซิร์ฟได้",A:{p:{boss:3,burst:1,late:1}},D:{p:{farm:1,build:1}}},
  {s:"ถ้าต้องเลือก",L:"ตีแรงมาก แต่ตายง่าย",R:"ตายยาก แต่ตีเบา",A:{p:{burst:2.5},r:.5},D:{p:{tank:2,safe:2,regen:1},a:{lowhp:3,takedmg:2}}}]},
 {t:"การเดินทางและชีวิตในโลก",d:"คุณใช้เวลาส่วนใหญ่ทำอะไร ไปไหนมาไหนแบบไหน",qs:[
  {s:"ฉันอยากบิน ลอย หรือร่อนบนฟ้าได้",A:{p:{flight:3}},D:{p:{mine:1}}},
  {s:"วิธีเดินทางที่อยากได้",L:"วาร์ป ทะลุกำแพง โผล่ที่ไหนก็ได้",R:"วิ่งเร็ว กระโดดไกล ปีนกำแพง",A:{p:{teleport:3,void:.5}},D:{p:{speed:2,climb:2},a:{slow:2}}},
  {s:"เวลาว่างในเซิร์ฟ ฉันชอบ",L:"ออกสำรวจ ลุยดันเจี้ยน หาของหายาก",R:"สร้างฐาน ทำฟาร์ม ขุดเหมือง",A:{p:{explore:3,loot:2,speed:.5}},D:{p:{build:2.5,farm:2,mine:2},a:{nofarm:2,weakmine:2}}},
  {s:"ฉันชอบขุดเหมืองและอยู่ในถ้ำใต้ดินนานๆ",A:{p:{mine:3,night:1},a:{cramped:3,big:1}},D:{p:{explore:1,flight:.5}}},
  {s:"ฉันชอบเล่นกลางคืนและในที่มืด มากกว่ากลางแดด",A:{p:{night:3,dark:.5},a:{needsun:3,darkweak:3}},D:{p:{holy:.5},a:{sunweak:4}}}]},
 {t:"ตัวตนของคุณ",d:"ธีมและภาพลักษณ์ของตัวละครในฝัน",qs:[
  {s:"ตัวละครในฝันของฉันคือ",L:"อัศวินแห่งแสง นักบวช หรือลูกของเทพ",R:"จอมมาร ภูตผี หรืออันเดด",A:{p:{holy:3}},D:{p:{dark:3}}},
  {s:"ถ้าเลือกได้ ฉันอยากเป็น",L:"สัตว์ สิ่งมีชีวิตจากป่า หรือพืช",R:"หุ่นยนต์ ภูตธาตุ หรือสิ่งจากอีกมิติ",A:{p:{beast:2.5,nature:2.5}},D:{p:{tech:2.5,void:2.5,chaos:1}}},
  {s:"ธาตุประจำตัวของฉัน",L:"ไฟ ลาวา และ Nether",R:"น้ำแข็ง หิมะ และความหนาว",A:{p:{nether:3},a:{fireweak:4,hotweak:2}},D:{p:{cold:3},a:{coldweak:4,nether_spawn:2}}},
  {s:"ฉันชอบทะเล และอยากใช้ชีวิตใต้น้ำได้",A:{p:{water:3},a:{hatewater:4}},D:{a:{needwater:4}}},
  {s:"การแปลงร่าง สลับร่าง หรือวิวัฒนาการเป็นร่างใหม่ ฟังดูน่าสนุกมาก",A:{p:{shift:3,chaos:1,late:.5}},D:{p:{simple:1}}}]},
 {t:"สไตล์การเล่นเกม",d:"นิสัยการเล่นจริงของคุณ",qs:[
  {s:"ฉันอยากแรงตั้งแต่วันแรก มากกว่ารอไปแรงตอนท้ายเกม",A:{p:{early:3}},D:{p:{late:3}}},
  {s:"ฉันชอบตัวละครที่เล่นง่าย ไม่ต้องจำปุ่มหรือคอยดูหลอดพลังพิเศษ",A:{p:{simple:3},a:{complex:4}},D:{p:{chaos:2,magic:.5},r:.3}},
  {s:"ฉันอยากให้คนในเซิร์ฟจำฉันได้ว่าเป็น",L:"ตัวประหลาดที่สุดในเซิร์ฟ",R:"คนธรรมดาที่เก่งจริง",A:{p:{chaos:3,shift:1,beast:.5}},D:{p:{simple:2}}},
  {s:"ฉันเล่นคนเดียวบ่อยกว่าเล่นเป็นทีม",A:{p:{regen:2,safe:1,tank:1}},D:{p:{support:3,cc:1},a:{oddspawn:3,nether_spawn:2}}},
  {s:"ฉันตายบ่อย และเสียดายของทุกครั้งที่ตาย",A:{p:{safe:3}},D:{p:{burst:1}}}]},
 {t:"ราคาที่ยอมจ่าย",d:"ทุกเผ่ามีข้อเสีย คุณทนอะไรได้แค่ไหน",qs:[
  {s:"ฉันต้องใส่เกราะเหล็กหรือเพชรเต็มตัวถึงจะสบายใจ",A:{p:{tank:1},a:{noheavyarmor:3,noarmor:5,ironban:3,noshield:2}},D:{p:{speed:1,flight:.5}}},
  {s:"ฉันอยากกินอะไรก็ได้ นอนได้ และเทรดกับชาวบ้านได้ตามปกติ",A:{p:{simple:1},a:{diet_special:4,diet_veg:2,diet_meat:2,hungry:2,nosleep:3,sleep_cond:2,notrade:4}},D:{p:{chaos:1}}},
  {s:"ฉันยอมรับข้อเสียหนักๆ ได้ ถ้าแลกกับพลังที่แรงจริง",A:{p:{chaos:1.5},r:1},D:{p:{simple:2},r:-1}},
  {s:"ถ้าต้องเลือก",L:"ตัวจิ๋ว คล่อง มุดได้ทุกที่ แต่เลือดน้อย",R:"ตัวยักษ์ ถึก แต่ช้าและเข้าประตูไม่ได้",A:{p:{speed:1,stealth:1},a:{big:3,slow:2}},D:{p:{tank:1.5},a:{small:3,lowhp:1}}},
  {s:"ฉันอยากเกิดที่เดียวกับเพื่อน และเล่นกลางแดดได้ไม่มีปัญหา",A:{a:{nether_spawn:3,oddspawn:3,sunweak:2}},D:{p:{chaos:1,night:.5}}}]},
];
const QN=PAGES.reduce((n,p)=>n+p.qs.length,0), PMN=Object.keys(P).length;

// คะแนนสูงสุดต่อมิติ
const PMAX={}; PAGES.forEach(pg=>pg.qs.forEach(q=>{const ks=new Set([...Object.keys(q.A.p||{}),...Object.keys(q.D.p||{})]); ks.forEach(k=>PMAX[k]=(PMAX[k]||0)+Math.max(q.A.p?.[k]||0,q.D.p?.[k]||0));}));
// ด้านที่มีเผ่าน้อยหรือถามน้อยได้น้ำหนักเพิ่ม (early/late/safe ลดลงเพราะเป็นตัวเสริม)
const SIG={early:.55,late:.55,safe:.65,water:1.5,nether:1.4,pets:1.4,unarmed:1.3,cold:1.2,dark:1.3,holy:1.3,nature:1.2,beast:1.2,void:1.3,tech:1.3,shift:1.2};

// ===== คำอธิบายบิลด์ =====
const CS={general:"พลังเฉพาะของเผ่า",melee:"ตีประชิดด้วยอาวุธ",ranged:"ยิงจากระยะไกล",magic:"เวทมนตร์และสกิล",unarmed:"มือเปล่า กรงเล็บ และเขี้ยว",pets:"ลูกสมุนและสัตว์เลี้ยง"};
const ROLE={tank:"ยืนหน้ารับดาเมจ",burst:"ทำดาเมจหนักจบไว",support:"ฮีลและบัฟทีม",cc:"ควบคุมศัตรู",stealth:"ลอบโจมตี",mobility:"เคลื่อนที่เหนือคนอื่น",dot:"ให้ศัตรูค่อยๆ ตาย"};
const ARCH={
 general:{tank:"ผู้รอดชีวิตสายถึก",burst:"นักผจญภัยสายบุก",support:"ผู้ช่วยแห่งทีม",cc:"ผู้คุมสนาม",stealth:"นักย่องเงา",mobility:"นักเดินทางสายลม",dot:"ผู้แพร่พิษ"},
 melee:{tank:"อัศวินป้อมปราการ",burst:"นักรบบ้าคลั่ง",support:"อัศวินผู้พิทักษ์",cc:"นักรบคุมสนาม",stealth:"นักดาบเงา",mobility:"นักดาบสายลม",dot:"นักรบคำสาป"},
 ranged:{tank:"พลธนูหุ้มเกราะ",burst:"สไนเปอร์",support:"พลธนูสนับสนุน",cc:"พรานวางกับดัก",stealth:"นักล่าในเงา",mobility:"พรานไล่ล่า",dot:"นักยิงพิษ"},
 magic:{tank:"จอมเวทป้อมปราการ",burst:"จอมเวทปืนใหญ่",support:"นักบวชแนวหลัง",cc:"จอมเวทควบคุม",stealth:"จอมเวทลวงตา",mobility:"จอมเวทวาร์ป",dot:"จอมเวทสาปแช่ง"},
 unarmed:{tank:"นักมวยหินผา",burst:"สัตว์นักล่า",support:"นักพรตกำปั้น",cc:"นักปล้ำ",stealth:"นักฆ่ากรงเล็บ",mobility:"นักสู้ว่องไว",dot:"อสูรเขี้ยวพิษ"},
 pets:{tank:"แม่ทัพยืนหน้า",burst:"ผู้บัญชาการกองทัพ",support:"ผู้เลี้ยงสัตว์ศักดิ์สิทธิ์",cc:"ผู้คุมฝูง",stealth:"นักเชิดหุ่นเงา",mobility:"ผู้นำฝูงเร่ร่อน",dot:"นักปลุกผีสาป"}};
const THEME={holy:"แห่งแสง",dark:"แห่งความมืด",nature:"แห่งพงไพร",beast:"สายสัตว์ร้าย",water:"แห่งท้องทะเล",nether:"แห่งเปลวไฟ",cold:"แห่งน้ำแข็ง",void:"แห่งความว่าง",tech:"จักรกล",night:"แห่งรัตติกาล"};
const PLAYC={general:"เผ่านี้ไม่ผูกกับอาวุธแบบไหน ให้ใช้พลังเฉพาะของเผ่าเป็นตัวนำ แล้วเลือกอาวุธตามของที่หาได้",melee:"เข้าไปประชิด เปิดด้วยท่าพุ่งหรือสกิล แล้วตีต่อเนื่องไม่ให้ศัตรูตั้งตัว",ranged:"รักษาระยะ หาที่สูงหรือที่กำบัง ยิงก่อนศัตรูเข้าถึงตัว แล้วถอยเมื่อโดนประชิด",
 magic:"ยืนหลังแนวหน้า ร่ายเวทใส่กลุ่มศัตรู คุมมานาและคูลดาวน์ให้ดี",unarmed:"ไม่ต้องพึ่งอาวุธดีๆ ต่อยตรงๆ แล้วใช้ความคล่องตัวเข้าออก",pets:"ปล่อยลูกสมุนนำหน้าให้ศัตรูหันไปตี แล้วคุณเก็บตกจากข้างหลัง"};
const PLAYR={tank:"ดึงมอนมาที่ตัวเองเพื่อให้เพื่อนตีได้สบาย",burst:"เลือกเป้าสำคัญที่สุดแล้วจบให้ไว",support:"อยู่ใกล้เพื่อนเสมอ คอยฮีลและบัฟก่อนเปิดไฟต์",cc:"หยุดศัตรูไว้ให้ทีมรุม",
 stealth:"ซ่อนตัว รอจังหวะลอบโจมตี แล้วหายตัวก่อนโดนสวน",mobility:"ใช้ความเร็ว การบิน หรือการวาร์ป คุมจังหวะการสู้ และหนีได้ทุกเมื่อ",dot:"ทำให้ติดสถานะแล้วถอยออกมา ให้มันตายเอง"};
// ทางต่อยอดด้วยม็อดในแพ็ก Dragonfyre
const MODC={general:"เลือกสายอาวุธหลักสักทาง (ดาบ ธนู หรือเวท) แล้วอัดค่าด้วย affix และ gem ของ Apotheosis กับ Passive Skill Tree",melee:"อาวุธมีสกิลจาก Simply Swords และ Soulslike Weaponry + ท่าคอมโบของ Better Combat · ตี gem และ affix ของ Apotheosis สายดาเมจ คริต ดูดเลือด · Passive Skill Tree กิ่งประชิด",
 ranged:"ธนูและหน้าไม้ที่มี affix ของ Apotheosis (ดาเมจลูกธนู ความเร็วง้าง) + ค่า Arrow Velocity และคริตจาก Apothic Attributes · Passive Skill Tree กิ่งระยะไกล",
 magic:"หนังสือเวทและม้วนเวทของ Iron's Spells 'n Spellbooks + สร้างเวทเองด้วย Ars Nouveau · gem เพิ่ม Spell Power และมานาจาก Apotheosis · Passive Skill Tree กิ่งเวท",
 unarmed:"ไม่ต้องพึ่งอาวุธ: เก็บ Attack Damage และ Attack Speed จาก affix ของเกราะ + Curios และ Relics",
 pets:"สัตว์เลี้ยงจาก Alex's Mobs + อาชีพ Beastmaster · เวทสาย Summon ของ Iron's Spells · ของ Curios และ Relics ที่บัฟลูกสมุน"};
const MODR={tank:"เกราะ affix Armor และ Toughness + gem เพิ่มเลือด",burst:"affix Crit Damage และ gem ดาเมจ",support:"เวทสาย Holy ของ Iron's Spells (Heal, Fortify)",cc:"เวทน้ำแข็งและสายฟ้าของ Iron's Spells ไว้ต่อคอมโบตรึง",
 stealth:"เวท Invisibility ยาล่องหน และ affix ดาเมจลอบตี",mobility:"Relics สายเดินทาง และ Elytra ถ้าเผ่าใส่ได้",dot:"enchant Fire Aspect เวทสาย Blood และพิษ"};
const SCHOOL={holy:"Holy",dark:"Blood และ Eldritch",nature:"Nature",cold:"Ice",nether:"Fire",void:"Ender",tech:"Lightning",night:"Eldritch",water:"Water (Ars Elemental)"};
// วิธีรับมือข้อเสีย
const TIP={lowhp:"พรเพิ่มเลือดหรือกันดาเมจ (Vishnu, Amaterasu, Ares) และเกราะ affix เลือด",takedmg:"เกราะ Toughness และพร Athena หรือ Vishnu",noheavyarmor:"ใช้เกราะเบาที่ affix ดี แล้วชดเชยด้วย Curios และ Relics",
 noarmor:"พึ่ง Curios และ Relics + พรสายกันดาเมจ (Nyx หลบ, Vishnu)",ironban:"ใช้เกราะหนัง ทอง หรือของจากม็อดที่ไม่ใช่เหล็ก",noshield:"เน้นหลบและดูดเลือดแทนการยกโล่",
 nobow:"ใช้เวทหรือของปาแทนธนู",weakhit:"ให้เวท ลูกสมุน หรือสกิลเผ่าทำดาเมจแทนการตี",diet_veg:"ทำฟาร์มผักและผลไม้ตั้งแต่วันแรก",diet_meat:"เลี้ยงหรือล่าสัตว์ไว้ตลอด",
 diet_special:"ศึกษาวิธีเติมพลังเฉพาะเผ่าในหน้าเลือกเผ่าตั้งแต่วันแรก",hungry:"อาชีพ Cook หรือพกอาหารอิ่มนาน",nosleep:"ทำฐานกันมอนกลางคืน ให้เพื่อนนอนข้ามคืน",
 sleep_cond:"เตรียมที่นอนตามเงื่อนไขของเผ่าไว้ที่ฐาน",notrade:"ให้เพื่อนเทรดแทน หรือหาของจากดันเจี้ยน",nofarm:"ให้เพื่อนทำฟาร์ม",hatewater:"หลบฝน ทำหลังคาตามทางเดิน พกบล็อกไว้กันน้ำ",
 needwater:"ทำฐานริมทะเล หรือพกถังน้ำ",sunweak:"เล่นกลางคืน ทำฐานใต้ดิน ใส่หมวก",needsun:"ออกลุยตอนกลางวัน กลางคืนพักที่ฐาน",darkweak:"พกคบเพลิงและยา Night Vision",
 fireweak:"ยา Fire Resistance และ enchant Fire Protection ก่อนเข้า Nether",coldweak:"เลี่ยงเขตหนาว หรือใส่เสื้อหนัง",hotweak:"เลี่ยงทะเลทรายและ Nether หรือพกยา",
 nether_spawn:"รีบหาพอร์ทัลกลับโลกปกติ นัดเพื่อนรอที่ spawn",oddspawn:"นัดเพื่อนก่อน แล้วเดินทางไปรวมกลุ่ม",big:"ทำประตูและฐานสูง 3 บล็อก",small:"ระวังเลือด ใช้ความเล็กมุดรู",
 slow:"พร Susanoo หรือขี่ม้า",cramped:"ทำฐานโปร่ง เลี่ยงอุโมงค์แคบ",weakmine:"ให้เพื่อนขุด หรือใช้เครื่องมือ/ระเบิดช่วย",undeadweak:"พร Arthur ปิดจุดนี้ได้",
 complex:"ลองเล่นในโลกส่วนตัวก่อน อ่านคำอธิบายสกิลในหน้าเลือกเผ่าให้ครบ"};

// ===== pixel art =====
const PAL={k:"#2b2118",w:"#fffaf2",s:"#c9c3b8",S:"#8c8378",g:"#c8902e",G:"#f2c14e",r:"#b5552f",R:"#e0602d",b:"#6b4423",l:"#4f8a3c",L:"#7fbf5a",p:"#7b4f8f",P:"#b48ad0",u:"#4f7393",U:"#8fb7d6",y:"#f7d9a6"};
function px(rows,size){const h=rows.length,w=rows[0].length;let r="";rows.forEach((row,y)=>[...row].forEach((c,x)=>{if(c!=="."&&PAL[c])r+=`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${PAL[c]}"/>`}));return `<svg viewBox="0 0 ${w} ${h}" ${size||""} shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg">${r}</svg>`}
const ICONS={
 melee:["......wS",".....wSs","....wSs.","...wSs..","r.wSs...",".rgs....","..gr....",".g..r..."],
 ranged:["..bbb...",".b...w..","b....w..","b.kkkkGk","b....w..","b....w..",".b...w..","..bbb..."],
 magic:[".....PG.","....PGP.",".....P..","....b...","...b....","..b.....",".b......","b......."],
 tank:[".SSSSSS.",".SrrrrS.",".SrGGrS.",".SrGGrS.",".SrrrrS.","..SrrS..","...SS...","........"],
 dark:["..pppp..",".pPPPPp.",".pkPPkp.",".pkPPkp.",".pPPPPp.","..pkkp..","..pPPp..","..p..p.."],
 holy:["...GG...","...GG...","GGGGGGGG","GGGGGGGG","...GG...","...GG...","...GG...","...GG..."],
 nature:["......lL",".....lLl","....lLl.","...lLl..","..lLl...",".lLl....","b.l.....","b......."],
 beast:[".k....k.","kk....kk","........","..kkkk..",".kkkkkk.",".kkkkkk.","..kkkk..","........"],
 nether:["...R....","..RR.R..","..RGRR..",".RGGGR..",".RGyGRR.","RRGyGGR.",".RRGGRR.","..RRRR.."],
 water:["........",".U...U..","UuU.UuU.","u.uUu.uU","........","U...U...","uU.UuU.U",".uUu.uUu"],
 flight:["w.......","ww......","www.....","wwww....","wwwww...","sswwww..","..sswww.","....sss."],
 stealth:["..kkkk..",".kkkkkk.","kkpkkpkk","kkkkkkkk",".kkkkkk.","..kkkk..",".kk..kk.","kk....kk"],
 pets:["..s..s..","..ssss..",".sksks..",".ssss...","..ss....","sssss...","s.s.s...","........"],
 mine:["SSSSSSS.","S.....b.",".....b..","....b...","...b....","..b.....",".b......","b......."],
};
const LOGO=["..rr....",".rRRr...","rRGGRr..","rGyyGr..",".rGGr...","..rr....","..bb....","..bb...."];
function heroArt(){
  // ภูเขา ปราสาท ดวงอาทิตย์ แบบพิกเซล 48x26 (พื้นหญ้าใช้แถบของหน้าเว็บ)
  const W=48,H=26;const g=Array.from({length:H},()=>Array(W).fill("."));
  const fill=(x0,y0,x1,y1,c)=>{for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++)if(x>=0&&x<W&&y>=0&&y<H)g[y][x]=c};
  for(let y=0;y<H;y++)for(let x=0;x<W;x++)if((x-38)**2+(y-6)**2<=12)g[y][x]="G";
  const ridge=(base,c,peaks)=>{for(let x=0;x<W;x++){let t=base;peaks.forEach(([px_,h,w])=>{t=Math.min(t,base-Math.max(0,h-Math.round(Math.abs(x-px_)*h/w)))});for(let y=t;y<H;y++)g[y][x]=c}};
  ridge(20,"s",[[6,11,8],[18,8,7],[30,12,9],[44,9,7]]);
  ridge(24,"S",[[2,8,7],[14,6,6],[26,9,8],[40,7,7]]);
  // ปราสาท
  const C="k",B="S";
  fill(14,12,33,25,"S"); fill(15,13,32,25,"s");
  for(let x=14;x<=33;x+=2) g[11][x]="S";
  fill(12,6,17,25,"S"); fill(13,7,16,25,"s"); for(let x=12;x<=17;x+=2) g[5][x]="S";
  fill(30,8,35,25,"S"); fill(31,9,34,25,"s"); for(let x=30;x<=35;x+=2) g[7][x]="S";
  fill(21,9,26,25,"S"); fill(22,10,25,25,"s"); g[8][21]=g[8][23]=g[8][25]="S";
  fill(22,20,25,25,"b"); fill(23,19,24,19,"b");
  [[14,10],[14,14],[32,12],[32,16],[23,13],[18,17],[28,17]].forEach(([x,y])=>{g[y][x]="G";g[y+1][x]="g"});
  for(let y=1;y<6;y++) g[y][14]="k"; fill(15,1,17,2,"r");
  return px(g.map(r=>r.join("")),'class="art"');
}
// ตราประจำผล: ไอคอน 8x8 ขยาย 2 เท่า วางในโล่
function badge(icon){
  const W=22,H=24;const g=Array.from({length:H},()=>Array(W).fill("."));
  for(let y=0;y<H;y++){const inset=y<15?0:Math.ceil((y-14)*1.1);for(let x=inset;x<W-inset;x++){const edge=x===inset||x===W-1-inset||y===0||y===H-1||(y>=15&&(x===inset+1||x===W-2-inset));g[y][x]=edge?"r":(y<2||x<2||x>W-3?"g":"y")}}
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){const inset=y<15?0:Math.ceil((y-14)*1.1);if(x===inset||x===W-1-inset||y===0)g[y][x]="b"}
  icon.forEach((row,y)=>[...row].forEach((c,x)=>{if(c===".")return;for(let dy=0;dy<2;dy++)for(let dx=0;dx<2;dx++)g[3+y*2+dy][3+x*2+dx]=c}));
  return g.map(r=>r.join(""));
}


// ===== state =====
const app=document.getElementById("app");
let page=-1, val={}; // val["p-q"] = -3..3 (บวก = เห็นด้วย)
const MODS=[...new Set(ORIGINS.map(o=>o.m))];
document.getElementById("logoSvg").outerHTML=px(LOGO,'width="28" height="28"');
document.getElementById("home").onclick=e=>{e.preventDefault();page=-1;val={};history.replaceState(null,"",location.pathname);render()};

function landing(){
  const combos=ORIGINS.length*CLASSES.length*BLESSINGS.length;
  app.innerHTML=`<section class="hero"><div class="in">
      <div style="padding-bottom:34px"><p class="kick">CISCO'S DRAGONFYRE · ZENIXSG</p>
        <h1>ค้นหาบิลด์ เผ่า อาชีพ และพรจากเทพที่เป็นคุณ</h1>
        <p>ตอบ ${QN} ข้อ ระบบจะคิดคะแนน ${PMN} ด้าน แล้วเทียบทุกชุดที่เป็นไปได้ ${combos.toLocaleString()} ชุด จาก ${ORIGINS.length} เผ่า (${MODS.length} ม็อด) · ${CLASSES.length} อาชีพ · ${BLESSINGS.length} พร พร้อมอธิบายคอนเซปต์และเส้นทางต่อยอดของบิลด์</p>
        <button class="btn" id="go">เริ่มทำแบบทดสอบ →</button></div>
      <div>${heroArt()}</div></div>
      <div class="ground"></div><div class="dirt"></div></section>
    <div class="cards">
      <div class="info"><b>ใช้เวลาประมาณ ${Math.round(QN*12/60)} นาที</b><span>${PAGES.length} หมวด: ${PAGES.map(p=>p.t).join(" · ")}</span></div>
      <div class="info"><b>ตอบตามที่รู้สึกจริง</b><span>ทุกข้อวัดหลายด้านพร้อมกัน ไม่สนเรื่องไหน กดวงกลางได้เลย</span></div>
      <div class="info"><b>ได้บิลด์ 10 ชุด + คำอธิบายเต็ม</b><span>คอนเซปต์ · วิธีเล่น · ค่าพลัง 6 ด้าน · จุดอ่อนและวิธีแก้ · เส้นทางต่อยอดด้วยม็อดในแพ็ก · ทางแยกของบิลด์</span></div>
    </div>
    <p class="foot" style="padding-top:20px">ข้อมูลอ่านจากไฟล์ mod ในเซิร์ฟ ZenixSg (Dragonfyre 3C Beta + ม็อดเผ่าเสริม 11 ตัว + พรกรีกของเซิร์ฟ) · เลือกผิดเปลี่ยนได้ด้วย Orb of Origin ที่ quest แรกแจกฟรี</p>`;
  document.getElementById("go").onclick=()=>{page=0;render();scrollTo(0,0)};
}

function quiz(){
  const P0=PAGES[page];
  const html=P0.qs.map((q,i)=>{const id=page+"-"+i,v=val[id],two=!!q.L;
    const la=two?q.L:"เห็นด้วย", ra=two?q.R:"ไม่เห็นด้วย";
    const dots=[3,2,1,0,-1,-2,-3].map(n=>`<button class="dot s${Math.abs(n)} ${n>0?"a":n<0?"d":""}${v===n?" on":""}" data-id="${id}" data-v="${n}" aria-label="${n>0?la+" ระดับ "+n:n<0?ra+" ระดับ "+(-n):"เท่าๆ กัน / ไม่สน"}"></button>`).join("");
    return `<div class="q${v!==undefined?" done":""}${two?" two":""}" id="q${id}"><h3>${two?`<span class="sit">${q.s}…</span>`:q.s}</h3>
      <div class="likert"><span class="lab l">${la}</span>${dots}<span class="lab r">${ra}</span></div>
      <div class="ends2"><span class="l">${la}</span><span class="r">${ra}</span></div>
      <div class="mid-note">${two?"วงกลางเล็ก = เท่าๆ กัน / เลือกไม่ได้":"วงกลางเล็ก = ได้หมด / ไม่สน"}</div></div>`}).join("");
  const answered=P0.qs.every((_,i)=>val[page+"-"+i]!==undefined);
  const before=PAGES.slice(0,page).reduce((n,p)=>n+p.qs.length,0);
  app.innerHTML=`<div class="wrap">
    <div class="bar"><button class="back" id="back" ${page===0?"disabled":""}>← ก่อนหน้า</button>
      <div class="track"><i style="width:${(page)/PAGES.length*100}%"></i></div>
      <span class="step">หมวด ${page+1}/${PAGES.length} · ข้อ ${before+1}–${before+P0.qs.length} จาก ${QN}</span></div>
    <p class="section-title">${P0.t}</p><p class="section-sub">${P0.d||""}</p>
    <div class="qs">${html}</div>
    <div class="next"><button class="btn" id="nx" ${answered?"":"disabled"}>${page===PAGES.length-1?"ดูผลลัพธ์":"ถัดไป"} →</button></div></div>`;
  app.querySelectorAll(".dot").forEach(b=>b.onclick=()=>{
    const id=b.dataset.id; val[id]=+b.dataset.v;
    const box=document.getElementById("q"+id); box.classList.add("done");
    box.querySelectorAll(".dot").forEach(d=>d.classList.toggle("on",d===b));
    const all=PAGES[page].qs.every((_,i)=>val[page+"-"+i]!==undefined);
    document.getElementById("nx").disabled=!all;
    const i=+id.split("-")[1], nx=document.getElementById("q"+page+"-"+(i+1));
    if(nx&&val[page+"-"+(i+1)]===undefined) nx.scrollIntoView({behavior:"smooth",block:"center"});
    else if(all) document.getElementById("nx").scrollIntoView({behavior:"smooth",block:"center"});
  });
  document.getElementById("back").onclick=()=>{page--;render();scrollTo(0,0)};
  document.getElementById("nx").onclick=()=>{page++;render();scrollTo(0,0)};
}

function profile(){
  const u={}, av={}; let risk=1.5;
  PAGES.forEach((pg,pi)=>pg.qs.forEach((q,qi)=>{const v=val[pi+"-"+qi]||0; if(!v) return;
    const E=v>0?q.A:q.D, m=Math.abs(v)/3;
    for(const k in (E.p||{})) u[k]=(u[k]||0)+E.p[k]*m;
    for(const k in (E.a||{})) av[k]=(av[k]||0)+E.a[k]*m;
    if(E.r) risk+=E.r*Math.abs(v)/2;
  }));
  risk=Math.max(0,Math.min(3,Math.round(risk)));
  // ข้อเสียที่ชนกับสิ่งที่ชอบโดยตรง
  av.weakmine=(av.weakmine||0)+(u.mine||0);
  av.nofarm=(av.nofarm||0)+(u.farm||0);
  av.weakhit=(av.weakhit||0)+((u.melee||0)+(u.unarmed||0))*.6;
  av.nobow=(av.nobow||0)+(u.ranged||0)*.7;
  av.slow=(av.slow||0)+Math.round((u.speed||0)/2)+1;
  av.broken=(av.broken||0)+1;
  if(risk===0){for(const k in F) av[k]=(av[k]||0)+1;}
  if(risk===3){for(const k in av) av[k]*=0.6;}
  const raw={...u};
  for(const k in u) u[k]=u[k]/PMAX[k]*10*(SIG[k]||1);
  return {u,av,risk,raw};
}
const dot=(u,w)=>Object.keys(w).reduce((s,k)=>s+(u[k]||0)*w[k],0);
const pen=(av,f)=>Object.keys(f||{}).reduce((s,k)=>s+(av[k]||0)*f[k],0);

// คู่ที่หักล้างกัน: รายการเฉพาะ + กฎทั่วไป (แดด น้ำ ที่แคบ)
function clashWhy(o,b){
  if(CONFLICT.some(([a,c])=>a===o.n&&c===b.n)) return "พลังของสองอย่างนี้หักล้างกัน";
  if(b.need==="sun"&&(o.f.sunweak||o.w.night>=3)) return `${b.n} ต้องอยู่กลางแดด แต่เผ่านี้แพ้แดดหรือแรงตอนกลางคืน`;
  if(b.f.sunweak&&o.f.needsun) return `เผ่าต้องอยู่กลางแดด แต่ ${b.n} อ่อนแรงกลางแดด`;
  if(b.need==="water"&&o.f.hatewater) return `${b.n} ได้บัฟจากน้ำ แต่เผ่านี้แพ้น้ำ`;
  if(b.f.hatewater&&o.f.needwater) return `เผ่าต้องอยู่ใกล้น้ำ แต่ ${b.n} แพ้น้ำ`;
  if(b.f.cramped&&(o.w.mine||0)>=2) return `เผ่าถนัดขุดใต้ดิน แต่ ${b.n} อ่อนแรงใต้ดิน`;
  return "";
}

function compute(){
  const {u,av,risk,raw}=profile();
  const total=Object.values(u).reduce((a,b)=>a+b,0)||1;
  const K=1.6;
  // เผ่า: match = ตรงความชอบ, pn = ชนสิ่งที่รับไม่ได้, imp = แรงกว่าความทนข้อเสีย
  const oS=ORIGINS.map(o=>{const match=dot(u,o.w), pn=-pen(av,o.f)*K, imp=o.i>risk+1?-(o.i-risk-1)*total*0.3:0;
    return {...o,match,pn,imp,s:match+pn+imp};});
  const fm=(u.melee||0)+(u.unarmed||0), fr=(u.ranged||0), ft=fm+fr+(u.magic||0)+(u.pets||0);
  const frac={melee:ft?fm/ft:.5,ranged:ft?fr/ft:.3,any:1};
  const gate=t=>(1-frac[t])*total*0.6;
  const cS=CLASSES.map(c=>{const match=dot(u,c.w), g=-gate(c.t); return {...c,match,g,s:match+g};});
  const bS=BLESSINGS.map(b=>{const match=dot(u,b.w), pn=-pen(av,b.f)*K, g=-gate(b.t); return {...b,match,pn,g,s:match+pn+g};});
  const cover=(o,x)=>Object.keys(x.cv||{}).reduce((s,k)=>s+Math.min(o.f[k]||0,x.cv[k])*(1+(av[k]||0)/3),0)*total*0.03;
  const perO=oS.map(o=>{const list=[];
    for(const c of cS){ if(c.no&&c.no.includes(o.n)) continue;
      for(const b of bS){
        let syn=0; for(const k in o.w){ if((u[k]||0)<3) continue; if(c.w[k]) syn+=1; if(b.w[k]) syn+=1; } for(const k in c.w) if((u[k]||0)>=3&&b.w[k]) syn+=.5;
        const cl=clashWhy(o,b)?total*0.35:0;
        const parts={o:o.match,open:o.pn,imp:o.imp,c:c.s*0.7,b:b.s*0.6,syn:syn*total*0.1,cov:cover(o,b)+cover(o,c),clash:-cl};
        list.push({o,c,b,parts,s:Object.values(parts).reduce((a,v)=>a+v,0)});
      }}
    list.sort((a,b)=>b.s-a.s); return list;}).sort((a,b)=>b[0].s-a[0].s);
  const pick=[],cntC={},cntB={};
  for(const list of perO){ if(pick.length===10) break;
    const x=list.find(y=>(cntC[y.c.n]||0)<3&&(cntB[y.b.n]||0)<3)||list[0];
    x.list=list; pick.push(x); cntC[x.c.n]=(cntC[x.c.n]||0)+1; cntB[x.b.n]=(cntB[x.b.n]||0)+1; }
  pick.sort((a,b)=>b.s-a.s);
  const oRank=perO.map(l=>l[0]);
  return {u,av,risk,raw,pick,total,oRank,cS:[...cS].sort((a,b)=>b.s-a.s),bS:[...bS].sort((a,b)=>b.s-a.s)};
}

// ข้อที่มีผลต่อชุดอันดับ 1 มากที่สุด: แต้มที่แต่ละคำตอบให้ (บวก = ดันขึ้น, ลบ = ฉุดลง)
function influence(x,total){
  const K=1.6, out=[];
  PAGES.forEach((pg,pi)=>pg.qs.forEach((q,qi)=>{const v=val[pi+"-"+qi]||0; if(!v) return;
    const E=v>0?q.A:q.D, m=Math.abs(v)/3; let s=0;
    for(const k in (E.p||{})){ const n=E.p[k]*m/PMAX[k]*10*(SIG[k]||1); s+=n*((x.o.w[k]||0)+(x.c.w[k]||0)*.7+(x.b.w[k]||0)*.6); }
    for(const k in (E.a||{})) s-=E.a[k]*m*K*((x.o.f[k]||0)+(x.b.f[k]||0)*.6);
    if(Math.abs(s)>0.01) out.push({q,v,s:s*100/total});
  }));
  return out.sort((a,b)=>Math.abs(b.s)-Math.abs(a.s));
}

// แกนบุคลิก 5 แกน (แบบ 16Personalities)
function axes(raw){
  const ax=[
   ["ประชิด","ระยะไกล",(raw.melee||0)+(raw.unarmed||0),(raw.ranged||0)+(raw.magic||0)+(raw.pets||0),"var(--c1)"],
   ["แสง","ความมืด",(raw.holy||0)+(raw.support||0)*.3,(raw.dark||0)+(raw.stealth||0)*.3,"var(--c2)"],
   ["ถึก","ว่องไว",(raw.tank||0)+(raw.regen||0)*.5,(raw.speed||0)+(raw.flight||0)+(raw.teleport||0)*.5+(raw.stealth||0)*.5,"var(--c3)"],
   ["ลุยเอง","ช่วยทีม",(raw.burst||0)+(raw.boss||0)*.5,(raw.support||0)+(raw.cc||0)*.5,"var(--c4)"],
   ["เล่นง่าย","ท้าทาย",(raw.simple||0),(raw.chaos||0)+(raw.shift||0)*.5,"var(--c5)"],
  ];
  return ax.map(([l,r,a,b,c])=>{const t=a+b||1,pa=Math.round(a/t*100),left=pa>=50;
    return {l,r,c,pct:left?pa:100-pa,side:left?l:r,pos:pa};});
}

function emblemFor(o){
  const order=["dark","holy","nether","water","nature","beast","flight","stealth","pets","magic","ranged","mine","tank","melee"];
  const k=order.find(k=>(o.w[k]||0)>=3)||order.find(k=>(o.w[k]||0)>=2)||"melee";
  return ICONS[k]||ICONS.melee;
}

// ===== วิเคราะห์บิลด์ =====
const vecOf=x=>{const V={}; for(const [obj,m] of [[x.o.w,1],[x.c.w,.7],[x.b.w,.6]]) for(const k in obj) V[k]=(V[k]||0)+obj[k]*m; return V;};
const argmax=(V,ks)=>ks.reduce((b,k)=>(V[k]||0)>(V[b]||0)?k:b,ks[0]);
const topTags=(w,n,skip=["simple","early","late","chaos","safe"])=>Object.entries(w).filter(([k,v])=>v>0&&!skip.includes(k)&&P[k]).sort((a,b)=>b[1]-a[1]).slice(0,n).map(([k])=>P[k]);
const join=a=>a.length<2?(a[0]||""):a.slice(0,-1).join(" ")+" และ"+a[a.length-1];
const clamp5=v=>Math.max(1,Math.min(5,Math.round(v*2)/2));
function analyse(x){
  const V=vecOf(x);
  V.mobility=Math.max(V.speed||0,V.flight||0,V.teleport||0)+((V.speed||0)+(V.flight||0)+(V.teleport||0)+(V.climb||0))*.15;
  let cs=argmax(V,["melee","ranged","magic","unarmed","pets"]); if((V[cs]||0)<1.5) cs="general";
  const role=argmax(V,["tank","burst","support","cc","stealth","mobility","dot"]);
  const thK=argmax(V,Object.keys(THEME)), th=(V[thK]||0)>=2?thK:"";
  const name=ARCH[cs][role]+(th?" "+THEME[th]:"");
  const dmg=Math.max(V.melee||0,V.ranged||0,V.magic||0,V.unarmed||0,V.pets||0);
  const st={
    "ต้นเกม":clamp5(2.2+(V.early||0)*.45+x.o.i*.25-(V.late||0)*.15-(x.o.f.complex||0)*.15),
    "ท้ายเกม":clamp5(2+(V.late||0)*.4+(V.magic>=2?.6:0)+(V.pets>=2?.5:0)+(V.boss||0)*.2+(x.o.ev?.8:0)+x.o.i*.2),
    "ความถึก":clamp5(1+(V.tank||0)*.7+(V.regen||0)*.4+(V.safe||0)*.4-(x.o.f.lowhp||0)*.35),
    "ดาเมจ":clamp5(1+dmg*.5+(V.burst||0)*.6+(V.dot||0)*.3-(x.o.f.weakhit||0)*.3),
    "ความคล่อง":clamp5(1+V.mobility*.8+(V.stealth||0)*.2-(x.o.f.slow||0)*.3),
    "ทีมเวิร์ก":clamp5(1+(V.support||0)*.8+(V.cc||0)*.5)};
  const diff=Math.min(3,Math.round(((x.o.f.complex||0)+x.o.i)/2.5));
  // จุดอ่อน: ข้อเสียของเผ่าและพร ว่าอันไหนปิดแล้ว
  const fl={...x.o.f}; for(const k in x.b.f) fl[k]=Math.max(fl[k]||0,x.b.f[k]);
  const weak=Object.keys(fl).filter(k=>k!=="broken").sort((a,b)=>fl[b]-fl[a]).map(k=>{
    const by=[x.b,x.c].filter(y=>(y.cv||{})[k]).map(y=>y.n);
    return {k,lv:fl[k],by,tip:TIP[k]||""};});
  const clash=clashWhy(x.o,x.b);
  return {V,cs,role,th,name,st,diff,weak,clash};
}
function concept(x,a){
  const ot=topTags(x.o.w,3), ct=topTags(x.c.w,2), bt=topTags(x.b.w,2);
  const covB=a.weak.filter(w=>w.by.includes(x.b.n)).map(w=>F[w.k]), covC=a.weak.filter(w=>w.by.includes(x.c.n)&&!w.by.includes(x.b.n)).map(w=>F[w.k]);
  let s=`บิลด์นี้สู้ด้วย<b>${CS[a.cs]}</b>เป็นหลัก และทำหน้าที่<b>${ROLE[a.role]}</b>`+(a.th?` ในธีม${THEME[a.th].replace(/^แห่ง/,"")}`:"")+". ";
  s+=`<b>${x.o.n}</b> เป็นแกนของบิลด์ ให้${join(ot)} `;
  s+=`อาชีพ <b>${x.c.n}</b> เสริม${join(ct)||"ชีวิตประจำวัน"}`+(covC.length?` และช่วยแก้เรื่อง${join(covC)}`:"")+" ";
  s+=`ส่วนพร <b>${x.b.n}</b> `+(covB.length?`ช่วยปิดจุดอ่อนเรื่อง${join(covB)} และเพิ่ม${join(bt)}`:`เพิ่ม${join(bt)}`)+".";
  return s;
}
function synergyTags(x,u){
  return Object.keys(P).filter(k=>!["simple","early","late"].includes(k)&&[x.o.w,x.c.w,x.b.w].filter(w=>(w[k]||0)>=1).length>=2)
    .sort((a,b)=>((u[b]||0)+vecOf(x)[b])-((u[a]||0)+vecOf(x)[a])).slice(0,5).map(k=>P[k]);
}
// ทางแยก: ชุดอื่นของเผ่าเดียวกันที่ดันด้านหนึ่งขึ้นมาก แต่แต้มรวมยังใกล้เคียง
const FORKS=[["ถ้าอยากถึกขึ้น",["tank","regen","safe"]],["ถ้าอยากแรงขึ้น",["burst","boss","melee","ranged","magic"]],["ถ้าอยากคล่องตัวขึ้น",["speed","flight","teleport","stealth","climb"]],["ถ้าอยากเล่นเป็นทีม",["support","cc"]]];
function forks(x,S){
  const g=(y,ks)=>ks.reduce((s,k)=>s+(y.c.w[k]||0)*.7+(y.b.w[k]||0)*.6,0);
  const floor=x.s-20/S; // ยอมเสียแต้มได้ไม่เกิน 20
  return FORKS.map(([lab,ks])=>{let best=null,bg=g(x,ks)+0.9;
    for(const y of x.list||[]){ if(y.s<floor) break; if(y===x) continue; const v=g(y,ks); if(v>bg){bg=v;best=y;} }
    return best?{lab,y:best,d:(best.s-x.s)*S}:null;}).filter(Boolean);
}
function modPath(a){
  const out=[MODC[a.cs],MODR[a.role]];
  if(a.th&&SCHOOL[a.th]) out.push(`ธีม${THEME[a.th].replace(/^แห่ง/,"")}เข้ากับเวทสาย ${SCHOOL[a.th]} ของ Iron's Spells`);
  if(a.st["ท้ายเกม"]>=4) out.push("พร้อมลุยบอสท้ายเกมของ L_Ender's Cataclysm และ Mowzie's Mobs เมื่อของครบ");
  return out;
}
const bars=st=>`<div class="bst">${Object.entries(st).map(([k,v])=>`<span>${k}</span><span class="bx"><i style="width:${v*20}%"></i></span><span class="vl">${v}</span>`).join("")}</div>`;

const FXN={o:"เผ่าตรงใจ",open:"ข้อเสียเผ่าที่ชน",imp:"แรงเกินที่รับได้",c:"อาชีพ",b:"พรจากเทพ",syn:"ซินเนอร์จี",cov:"ปิดจุดอ่อน",clash:"ขัดกันเอง"};
const fmt=v=>(v>0?"+":v<0?"−":"")+Math.abs(v).toFixed(1);
const stars=n=>`<span class="stars" title="ความแรง/ราคาที่ต้องจ่าย ${n}/3">${"★".repeat(n)}${"☆".repeat(3-n)}</span>`;
const modTag=m=>`<span class="mod">${m}</span>`;

// รายละเอียดเต็มของบิลด์ (ใช้กับชุดอันดับ 1 และในกล่องรายละเอียดของชุดอื่น)
function buildDetail(x,a,u,S,full){
  const syn=synergyTags(x,u);
  const fk=full?forks(x,S):[];
  const weakRows=a.weak.map(w=>`<li><b>${F[w.k]}</b> ${"●".repeat(Math.min(5,w.lv))}${w.by.length?` <span class="cv">ปิดด้วย ${w.by.join(", ")}</span>`:""}${w.tip?`<br><span class="tipt">${w.tip}</span>`:""}</li>`).join("");
  return `<div class="concept">
    <h5>คอนเซปต์</h5><p>${concept(x,a)}</p>
    <h5>วิธีเล่น</h5><p>${PLAYC[a.cs]} · ${PLAYR[a.role]}${x.o.x?` · ${x.o.x}`:""}</p>
    ${syn.length?`<h5>จุดที่เสริมกัน</h5><div class="chips">${syn.map(t=>`<span class="chip">${t}</span>`).join("")}</div>`:""}
    <h5>ค่าพลังของบิลด์ (ประมาณการ 1–5)</h5>${bars(a.st)}
    <p class="how" style="margin:6px 0 0">ความยากในการเล่น ${stars(a.diff)}</p>
    ${a.clash?`<p class="bad" style="margin:8px 0 0">⚠ ${a.clash}</p>`:""}
    ${x.o.broken?`<p class="bad" style="margin:8px 0 0">⚠ ในเซิร์ฟเรา: ${x.o.broken}</p>`:""}
    ${weakRows?`<h5>จุดอ่อนและวิธีรับมือ</h5><ul class="tipl">${weakRows}</ul>`:`<h5>จุดอ่อน</h5><p>เผ่านี้แทบไม่มีข้อเสีย</p>`}
    <h5>Potential: บิลด์นี้ไปได้ถึงไหน</h5>
    <ul class="tipl">${x.o.ev?`<li><b>วิวัฒนาการของเผ่า:</b> ${x.o.ev}</li>`:""}${modPath(a).map(t=>`<li>${t}</li>`).join("")}</ul>
    ${fk.length?`<h5>ทางแยกของบิลด์</h5><div class="forks">${fk.map(f=>`<div><b>${f.lab}</b><span>เปลี่ยนเป็น ${f.y.c.n} + ${f.y.b.n}</span><small>${f.d>=0?"+":"−"}${Math.abs(f.d).toFixed(1)} แต้ม</small></div>`).join("")}</div>`:""}
  </div>`;
}

function result(){
  const {u,av,risk,raw,pick,total,oRank,cS,bS}=compute();
  const S=100/total; // แปลงเป็นแต้ม (100 = ผลรวมความชอบทั้งหมดของคุณ)
  const best=pick[0].s, worst=Math.min(...pick.map(x=>x.s));
  const top=pick[0], A=pick.map(analyse), TA=A[0];
  const likes=Object.entries(u).filter(([k,v])=>v>=4&&k!=="simple").sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k])=>P[k]);
  const hates=Object.entries(av).filter(([k,v])=>v>=3&&k!=="broken").sort((a,b)=>b[1]-a[1]).slice(0,8).map(([k])=>F[k]);
  const riskTxt=["ไม่ชอบข้อเสีย","รับข้อเสียได้นิดหน่อย","รับข้อเสียได้ถ้าคุ้ม","ชอบความท้าทาย"][risk];
  const AX=axes(raw);
  const gap=(pick[0].s-pick[1].s)*S;
  const conf=gap>8?"ชัดเจนมาก":gap>3?"ค่อนข้างชัด":"สูสี";
  const fxTable=x=>{const ks=Object.keys(FXN).filter(k=>Math.abs(x.parts[k])>1e-6), mx=Math.max(...ks.map(k=>Math.abs(x.parts[k]*S)),1);
    return `<div class="fx">${ks.map(k=>{const v=x.parts[k]*S,w=Math.abs(v)/mx*50;
      return `<span class="nm">${FXN[k]}</span><span class="bx"><i class="${v>=0?"pos":"neg"}" style="width:${w}%"></i></span><span class="vl ${v>=0?"p":"n"}">${fmt(v)}</span>`}).join("")}
      <span class="nm tot">แต้มรวม</span><span></span><span class="vl tot">${(x.s*S).toFixed(1)}</span></div>`};
  const card=(x,i)=>{
    const a=A[i];
    const pct=Math.round(70+30*(x.s-worst)/Math.max(1,best-worst));
    const cons=Object.keys(x.o.f).filter(k=>k!=="broken").map(k=>F[k]+" "+"●".repeat(Math.min(5,x.o.f[k])));
    return `<div class="combo${i===0?" top":""}"><div class="rk">${i+1}</div><div>
      <h4>${x.o.n} <small>· ${x.c.n} · ${x.b.n}</small></h4>
      <div class="arch">${a.name}</div>
      <div class="tags"><span class="ok">เข้ากับคุณ ${pct}% · ${(x.s*S).toFixed(1)} แต้ม</span>${stars(x.o.i)}${modTag(x.o.m)}${a.weak.some(w=>w.by.length)?`<span class="cv">ปิดจุดอ่อน: ${a.weak.filter(w=>w.by.length).map(w=>F[w.k]).join(", ")}</span>`:""}${x.o.broken?`<span class="bad">ในเซิร์ฟเรา: ${x.o.broken}</span>`:""}</div>
      ${i===0?`<p class="how" style="margin:6px 0 0">อ่านคอนเซปต์เต็มในหัวข้อ 2 ด้านบน</p><details><summary>แยกแต้มทุก factor</summary>${fxTable(x)}</details>`:
      `<details><summary>คอนเซปต์ ค่าพลัง จุดอ่อน และแยกแต้ม</summary><div class="desc">
        <div><b>${x.o.n}</b> — ${x.o.d}${cons.length?"<br>ข้อเสีย: "+cons.join(" · "):""}</div>
        <div><b>${x.c.n}</b> — ${x.c.d}</div><div><b>${x.b.n}</b> — ${x.b.d}</div></div>${buildDetail(x,a,u,S,false)}${fxTable(x)}</details>`}
      </div></div>`};
  const dims=PG.map(([g,ks])=>`<h5>${g}</h5>`+ks.map(k=>{const v=Math.min(10,u[k]||0);
    return `<div class="dim"><span>${P[k]}</span><span class="bx"><i style="width:${v*10}%"></i></span><span class="vl">${v.toFixed(1)}</span></div>`}).join("")).join("");
  const rankList=(arr,lab)=>{const mx=arr[0].s, mn=arr[arr.length-1].s;
    return arr.map((x,i)=>`<div class="rank"><span class="no">${i+1}</span><span>${lab(x)}</span><span class="bx"><i style="width:${Math.max(3,(x.s-mn)/Math.max(1e-9,mx-mn)*100)}%"></i></span><span class="vl">${(x.s*S).toFixed(1)}</span></div>`).join("")};
  const RK={
    o:rankList(oRank,x=>`${x.o.n} ${stars(x.o.i)} ${modTag(x.o.m)}<br><small>คู่ที่ดีที่สุด: ${x.c.n} · ${x.b.n}</small>`),
    c:rankList(cS,x=>`${x.n} ${modTag(x.m)}<br><small>${x.d}</small>`),
    b:rankList(bS,x=>`${x.n} ${modTag(x.m)}<br><small>${x.d}</small>`)};
  const inf=influence(top,total), infPos=inf.filter(x=>x.s>0).slice(0,5), infNeg=inf.filter(x=>x.s<0).slice(0,3);
  const ans=x=>{const lv=["","นิดหน่อย","ค่อนข้างมาก","มาก"][Math.abs(x.v)]; return x.q.L?`${x.q.s}: <b>${x.v>0?x.q.L:x.q.R}</b> (${lv})`:`${x.q.s} — <b>${x.v>0?"เห็นด้วย":"ไม่เห็นด้วย"}${lv}</b>`};
  const infRow=x=>`<div><span class="vl" style="color:${x.s>0?"var(--agree)":"var(--clay)"}">${fmt(x.s)}</span><span>${ans(x)}</span></div>`;
  app.innerHTML=`<section class="rhero"><div class="in">
      <div><p class="kick">บิลด์ที่เข้ากับคุณที่สุดคือ:</p><h1>${top.o.n}</h1>
        <div class="trio">${top.c.n} · ${top.b.n}</div>
        <div class="archbig">${TA.name}</div>
        <p style="color:#5a3b1f;margin:10px 0 0;max-width:34em">${top.o.d}</p>
        <div class="stat"><div><b>${(top.s*S).toFixed(1)}</b><span>แต้มรวมชุดอันดับ 1</span></div>
          <div><b>${conf}</b><span>ความมั่นใจ · ห่างอันดับ 2 อยู่ ${gap.toFixed(1)} แต้ม</span></div>
          <div><b>${stars(risk)}</b><span>${riskTxt}</span></div></div></div>
      ${px(badge(emblemFor(top.o)),'class="emb"')}</div></section>
    <div class="wrap"><div class="grid2"><div style="display:grid;gap:22px">
      <div class="panel"><div class="h2"><span class="n">1</span>สไตล์ของคุณ</div>
        ${AX.map(a=>`<div class="trait"><div class="pct" style="color:${a.c}">${a.pct}% ${a.side}</div>
          <div class="rail" style="background:${a.c}"><span class="knob" style="left:${100-a.pos}%;border-color:${a.c}"></span></div>
          <div class="ends"><span>${a.l}</span><span>${a.r}</span></div></div>`).join("")}
        <p style="margin:6px 0 6px;font-weight:500">ชอบ</p><div class="chips">${likes.map(t=>`<span class="chip">${t}</span>`).join("")}<span class="chip">${riskTxt}</span></div>
        ${hates.length?`<p style="margin:14px 0 6px;font-weight:500">รับไม่ได้</p><div class="chips">${hates.map(t=>`<span class="chip no">${t}</span>`).join("")}</div>`:""}
      </div>
      <div class="panel"><div class="h2"><span class="n">2</span>บิลด์อันดับ 1: ${TA.name}</div>
        <div class="desc" style="margin-bottom:6px"><div><b>${top.o.n}</b> ${modTag(top.o.m)} — ${top.o.d}</div>
          <div><b>${top.c.n}</b> (อาชีพ) — ${top.c.d}</div><div><b>${top.b.n}</b> (พร) — ${top.b.d}</div></div>
        ${buildDetail(top,TA,u,S,true)}</div>
      <div class="panel"><div class="h2"><span class="n">3</span>10 บิลด์ที่เหมาะกับคุณ</div>${pick.map(card).join("")}</div>
      <div class="panel"><div class="h2"><span class="n">4</span>คะแนนทุกด้าน (${PMN} ด้าน)</div>
        <p class="how" style="margin:0">0 = ไม่สนเลย · 10 = ชอบสุดๆ (เทียบกับคะแนนเต็มที่ทำได้ในแบบทดสอบ)</p>
        <div class="dims">${dims}</div></div>
      <div class="panel"><div class="h2"><span class="n">5</span>คำตอบที่ทำให้ได้ ${top.o.n}</div>
        <div class="infl">${infPos.map(infRow).join("")}</div>
        ${infNeg.length?`<p style="margin:14px 0 6px;font-weight:500">คำตอบที่ฉุดคะแนนชุดนี้ลง</p><div class="infl">${infNeg.map(infRow).join("")}</div>`:""}</div>
      <div class="panel"><div class="h2"><span class="n">6</span>อันดับทั้งหมด</div>
        <div class="tabs"><button data-t="o" class="on">เผ่า (${ORIGINS.length})</button><button data-t="c">อาชีพ (${CLASSES.length})</button><button data-t="b">พร (${BLESSINGS.length})</button></div>
        <div id="rk" class="rkbox">${RK.o}</div>
        <p class="how" style="margin:10px 0 0">เผ่า = แต้มของชุดที่ดีที่สุดของเผ่านั้น · อาชีพ/พร = แต้มเดี่ยวก่อนรวมเป็นชุด · ★ = ความแรงและราคาที่ต้องจ่ายของเผ่า · ป้ายสีเทา = ม็อดที่เผ่ามาจาก</p></div>
      <div class="panel"><details><summary style="cursor:pointer;font:600 20px Kanit">วิธีคิดคะแนน</summary><ol class="how">
        <li><b>ความชอบ ${PMN} ด้าน:</b> คำตอบแต่ละข้อเพิ่มแต้มให้หลายด้านพร้อมกัน คูณตามระดับ (นิดหน่อย ×⅓ · ค่อนข้างมาก ×⅔ · มาก ×1) แล้วปรับเป็นสเกล 0–10 · ด้านที่มีเผ่าน้อย (น้ำ ไฟ ลูกสมุน มือเปล่า End หุ่นยนต์ ฯลฯ) ได้น้ำหนักเพิ่ม 1.2–1.5 เท่า</li>
        <li><b>เผ่าตรงใจ:</b> คะแนนความชอบของคุณ × จุดเด่นของเผ่าในด้านนั้น (0–3)</li>
        <li><b>ข้อเสียเผ่าที่ชน:</b> สิ่งที่คุณรับไม่ได้ × ความหนักของข้อเสีย (●1–5) × 1.6 · ถ้าคุณชอบตีประชิด เผ่าที่ตีเบาจะโดนหักเอง เช่นเดียวกับชอบยิงธนูแต่เผ่าใช้ธนูไม่ได้</li>
        <li><b>แรงเกินที่รับได้:</b> เผ่า ★★★ โดนหักถ้าคุณตอบว่าไม่ชอบข้อเสีย</li>
        <li><b>อาชีพ ×0.7 · พร ×0.6:</b> คิดแบบเดียวกับเผ่า แต่โดนหักถ้าบัฟสายที่คุณไม่ได้ใช้ (เช่น พรบัฟการตี แต่คุณเล่นเวท)</li>
        <li><b>ซินเนอร์จี:</b> เผ่า อาชีพ และพร เด่นด้านเดียวกับที่คุณชอบมาก (≥3)</li>
        <li><b>ปิดจุดอ่อน:</b> พร/อาชีพช่วยลบข้อเสียของเผ่า (เช่น Vishnu ปิดเลือดน้อย, Hephaestus กรีกปิดแพ้ไฟ)</li>
        <li><b>ขัดกันเอง:</b> คู่ที่หักล้างกัน เช่น เผ่าแพ้แดด + พร Ra ที่ต้องอยู่กลางแดด หรือเผ่าแพ้น้ำ + พร Poseidon</li>
        <li><b>ชื่อบิลด์และค่าพลัง:</b> รวมจุดเด่นของเผ่า อาชีพ ×0.7 และพร ×0.6 แล้วดูว่าสู้แบบไหนเด่นสุด (ประชิด ยิง เวท มือเปล่า ลูกสมุน) และทำหน้าที่อะไรเด่นสุด ค่าพลัง 1–5 เป็นการประมาณจากข้อมูลเผ่า ไม่ใช่ตัวเลขในเกม</li>
        <li>10 ชุดสุดท้าย = เผ่าละ 1 ชุด และอาชีพ/พรเดียวกันซ้ำได้ไม่เกิน 3 ชุด เพื่อให้ได้ตัวเลือกหลากหลาย</li></ol></details></div>
    </div>
    <aside class="side"><div class="panel" style="display:grid;gap:10px">
      <div style="display:flex;gap:12px;align-items:center">${px(badge(emblemFor(top.o)),'width="44" height="48"')}<div><div style="font-size:12px;color:var(--muted)">บิลด์ของคุณ</div><b>${top.o.n}</b><div style="font-size:13px;color:var(--ink2)">${TA.name}</div></div></div>
      ${bars(TA.st)}
      <button class="btn" id="copy">คัดลอกผลไปส่งเพื่อน</button>
      <button class="btn alt" id="redo">ทำแบบทดสอบใหม่</button>
      <a class="btn alt" style="text-align:center;text-decoration:none" href="https://docs.google.com/spreadsheets/d/1hRkVhCzVEke66bZlrkNiOCyuD3fd2W9imYoMExBidbQ/edit" target="_blank" rel="noopener">ตารางเผ่าที่เพิ่มมา</a>
    </div></aside></div></div>
    <p class="foot">เลือกผิดเปลี่ยนได้ด้วย Orb of Origin ที่ quest แรกแจกฟรี</p>`;
  app.querySelectorAll(".tabs button").forEach(t=>t.onclick=()=>{app.querySelectorAll(".tabs button").forEach(x=>x.classList.toggle("on",x===t));document.getElementById("rk").innerHTML=RK[t.dataset.t];});
  document.getElementById("redo").onclick=()=>{page=-1;val={};history.replaceState(null,"",location.pathname);render();scrollTo(0,0)};
  document.getElementById("copy").onclick=async e=>{
    const t="ผลแบบทดสอบ Dragonfyre ของฉัน:\n"+pick.map((x,i)=>`${i+1}. ${x.o.n} + ${x.c.n} + ${x.b.n} — ${A[i].name} (${(x.s*S).toFixed(1)} แต้ม)`).join("\n")+"\n"+location.href;
    try{await navigator.clipboard.writeText(t);e.target.textContent="คัดลอกแล้ว"}catch{e.target.textContent="คัดลอกไม่ได้"}};
}

// ลิงก์แชร์ผล: #v6=<ตัวเลข 0-6 ต่อข้อ ตามลำดับข้อ>
const keys=PAGES.flatMap((pg,pi)=>pg.qs.map((q,qi)=>pi+"-"+qi));
const encode=()=>keys.map(k=>(val[k]??0)+3).join("");
function render(){
  if(page<0) landing(); else if(page>=PAGES.length){ history.replaceState(null,"","#v6="+encode()); result(); } else quiz();
}
const m=location.hash.match(/^#v6=([0-6]+)$/);
if(m){ keys.forEach((k,i)=>val[k]=i<m[1].length?+m[1][i]-3:0); page=PAGES.length; }
else if(location.hash==="#start"){ page=0; }
render();
