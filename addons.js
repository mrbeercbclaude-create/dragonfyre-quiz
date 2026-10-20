// เผ่าจากม็อดเสริม 11 ตัวที่ลงในเซิร์ฟ (2026-10-20) · อ่านจากไฟล์ jar จริง
// เฉพาะเผ่าที่เลือกได้ตอนเริ่ม (ร่างวิวัฒนาการที่ unchoosable อยู่ในช่อง ev ของเผ่าต้นทาง)
// A(ชื่อ, ม็อด, impact 1-3, คำอธิบาย, w = จุดเด่น 0-3, f = ข้อเสีย 1-5, เพิ่มเติม {ev, x, broken})
const ADDON_ORIGINS=[];
function A(n,m,i,d,w,f,o){ADDON_ORIGINS.push(Object.assign({n,m,i,d,w,f:f||{}},o||{}));}

// ===== Animal Origins =====
A("Chameleon","Animal",1,"ยืนนิ่งแล้วแทบล่องหน (ยกเว้นเกราะที่ใส่) ตัวเล็กไม่ถึงครึ่งบล็อก เกล็ดเป็นเกราะในตัว",{stealth:3,beast:2,tank:1},{small:3});
A("Kangaroo","Animal",1,"กระเป๋าหน้าท้องเก็บของ ย่อแล้วกระโดดสูง พุ่งไกล 8 บล็อกชนศัตรูที่ขวาง",{speed:2,beast:2,unarmed:1,loot:1},{nobow:3,lowhp:1});
A("Monkey","Animal",3,"เหวี่ยงเถาวัลย์ ปีนได้ทุกที่และห้อยเพดาน (ใช้สตามินา) กระโจน ตกจากที่สูงแทบไม่เจ็บ",{climb:3,speed:2,beast:2,nature:1},{nobow:3,noshield:2,hatewater:2,small:1,complex:1,broken:1},{broken:"บางพลัง (เถาวัลย์) ใช้ไม่ได้"});
A("Penguin","Animal",1,"ว่ายน้ำเร็ว กลั้นหายใจได้ 2 เท่า มองชัดใต้น้ำ สไลด์บนน้ำแข็งได้เร็วมาก",{water:3,cold:3,speed:1},{hotweak:3,lowhp:2,small:1});
A("Reptilian","Animal",2,"ตีติดพิษ (คูลดาวน์ 30 วิ) ไม่ติดพิษ เกล็ดเป็นเกราะ ตัวสูงกว่าคน",{dot:2,beast:2,tank:1,melee:1},{coldweak:4},{x:"กลางคืนกับเขตหนาวอันตราย ใส่เสื้อหนังแก้ได้"});
A("Road Runner","Animal",3,"เผ่าที่วิ่งเร็วที่สุด กดบูสต์แล้ววิ่งบนน้ำได้ ไม่โดนสโลว์",{speed:3,explore:2,chaos:1},{nobow:3,hungry:2,hatewater:2});

// ===== Apocalypse Origins =====
A("Geneticist","Apocalypse",3,"นักพันธุศาสตร์ ใช้เข็มสกัดยีนจากมอน แล้วฉีดให้ตัวเอง มอน หรือเพื่อนเพื่อให้ได้พลัง เห็นศัตรูที่เลือดใกล้หมด",{chaos:3,support:2,tech:2,shift:2,late:3},{complex:4},{ev:"ยิ่งเก็บยีนได้มาก ยิ่งแรง ใช้ Nether Star ทำ Genetic Lock ดึงศักยภาพสูงสุดของยีน"});
A("Hexblade","Apocalypse",3,"ดาบผีต้องคำสาป ไม่มีขา มือว่างแล้วล่องหน พุ่งฟันนับเป็นคริต เก็บวิญญาณใส่แท่นบูชาไว้ร่ายตราเวท",{melee:2,magic:2,stealth:2,dark:3,chaos:2,late:3},{complex:5},{ev:"วิญญาณในแท่นบูชา 250 / 1000 / 2000 ปลด Foci ขั้น I / II / III · เพื่อนเลือกอาชีพ Hex Warrior หรือ Hex Hunter เพื่อช่วยหรือล่าคุณได้"});
A("Myconoid Spore","Apocalypse",3,"สปอร์เห็ดจิ๋วที่วิวัฒนาการได้ 9 ร่างตามไบโอมที่ยืนอยู่ ร่างไม่สนอุณหภูมิ",{shift:3,nature:2,chaos:2,late:2,mine:1},{small:3,lowhp:1,complex:3},{ev:"Brown (ขุดแร่ เห็นแร่) · Red (ทหารถือธงบัฟ) · Desert (พ่นหนาม) · Moss (สำรวจถ้ำ/หิมะ) · Snowy (พ่นลมเย็น) · Warped (สายตาไกลใน Nether) · Crimson (นักรบ Nether) · Wart (ระเบิดสปอร์เวท) · Chorus (คุมแรงโน้มถ่วง End)"});
A("Refractor","Apocalypse",3,"ร่างคริสตัลเลือด 40 พุ่งล่องหนแล้วบลิงก์ต่อได้ ใช้กระจกบิดแสงซ่อนตัว สร้างบล็อกวาร์ปข้ามมิติ",{teleport:3,stealth:2,tank:2,explore:2,tech:1,late:1},{complex:4});

// ===== Chidori Origins =====
A("Air Chidori","Chidori",1,"บินได้ตั้งแต่วันแรก มีกระเป๋ามิติเพิ่ม 9 ช่อง",{flight:3,explore:2,loot:1,early:2},{hungry:2,lowhp:1});
A("Aqua Chidori","Chidori",3,"ตัวครึ่งเดียว ไฟไม่ทำดาเมจ ว่ายลาวาเร็ว คราฟต์ยาฮีลและยาหายใจใต้น้ำเอง เริ่มเกมได้ตรีศูล",{water:2,nether:2,regen:2,support:1,climb:1,early:2},{small:3,lowhp:3,noheavyarmor:3});
A("Dark Chidori","Chidori",2,"ยิงธนูมืดจากหน้าอก แทงตัวเองเพื่อฮีลหรือวิ่งเร็ว เดินบนน้ำและลาวา เกาะผนัง ตกไม่เจ็บ",{ranged:2,magic:1,dark:3,climb:2,chaos:2},{lowhp:2,sleep_cond:3,complex:2});
A("Land Chidori","Chidori",2,"ยักษ์ใจดี เลือดเยอะ เกราะในตัว ทุบหินมือเปล่า กระโดดไกล เอื้อมไกล ตกไม่เจ็บ",{tank:3,unarmed:2,mine:2},{slow:2,big:2,nobow:3,hungry:1});

// ===== Fairytale Origins =====
A("Big Bad Wolf","Fairytale",3,"เป่าลมผลักศัตรูและพังบล็อก มองในที่มืด กลางคืนวิ่งเร็ว อยู่ใกล้หมาป่าแล้วแรงขึ้น",{night:3,beast:3,cc:1,pets:1},{fireweak:2,sunweak:2,noheavyarmor:3,broken:1},{broken:"บางพลังใช้ไม่ได้"});
A("Cinderella","Fairytale",1,"ตกไม่เจ็บ เดินและกระโดดเร็วบนพื้นขัดเงา แบ่งความคล่องตัวให้เพื่อน",{support:2,speed:1,holy:1,simple:1},{noheavyarmor:1,hatewater:1});
A("Frog Prince","Fairytale",1,"หายใจใต้น้ำ ว่ายเร็ว มองชัดใต้น้ำ",{water:3,nature:1},{needwater:3,hotweak:2,noheavyarmor:2,broken:1},{broken:"บางพลังใช้ไม่ได้"});
A("Jack","Fairytale",2,"เสกเถาถั่วไว้ปีน ตีมอนตัวใหญ่แรงขึ้น เร่งพืช ตกไม่ค่อยเจ็บ",{climb:2,boss:2,farm:2,nature:1},{cramped:3});
A("Little Mermaid","Fairytale",3,"ร้องคลื่นเสียงทำดาเมจ สตัน และผลักศัตรู แรงมากเวลาอยู่ในน้ำ",{water:3,cc:2,magic:1},{needwater:4});
A("Minotaur","Fairytale",3,"พุ่งชนทะลุกำแพง แรงมาก หนังหนากันธนู",{melee:3,tank:2,burst:1,beast:2},{slow:2,nobow:3,hungry:2,big:2,hatewater:1});
A("Red Riding Hood","Fairytale",2,"ย่อในป่าแล้วกลืนไปกับพุ่มไม้ ในป่าวิ่งเร็ว ใช้ขวานเก่ง ได้โบนัสจากหมู่บ้าน",{stealth:2,melee:2,nature:2,explore:1},{darkweak:2});
A("Sleeping Beauty","Fairytale",2,"ฟื้นเลือดเร็ว ยาบัฟอยู่นานขึ้น ไม่ติด Bad Omen",{regen:3,support:1,holy:1,simple:1},{sleep_cond:2,slow:1});

// ===== Greek Mythology Origins =====
A("Artemis Hunters","Greek",2,"ยิงแล้วศัตรูติดเครื่องหมายเรืองแสง เรียกหมาป่าเทพ กลางคืนเร็วและมองชัด ทำลูกธนูจากกิ่งไม้",{ranged:3,pets:2,night:2,nature:2},{lowhp:2});
A("Child of Aphrodite","Greek",2,"เสน่ห์ทำศัตรูหยุดสู้ ศัตรูเข้าใกล้ 3 บล็อกตาบอด ตกไม่เจ็บ (ตัวเรืองแสงตลอด)",{cc:3,support:2,holy:1},{weakhit:3});
A("Child of Apollo","Greek",3,"ธนูแรง +75% ร้องเพลงฮีลทั้งทีม คลื่นเสียงไฟ กลางวันแรงและเร็วขึ้น",{ranged:3,support:3,holy:2,burst:1},{lowhp:2,noheavyarmor:2,needsun:1});
A("Child of Ares","Greek",3,"ดาบ/ขวาน +2.5 คลั่ง 15 วิ คำรามทำศัตรูช้าและอ่อนแรง ต้านน็อกแบ็กครึ่งหนึ่ง",{melee:3,burst:3,tank:1,cc:1},{noshield:3,hungry:3});
A("Child of Athena","Greek",2,"ถือโล่แล้วตีแรงขึ้น ปล่อยคลื่นกระแทกจากโล่ เปิดตานกฮูกเห็นศัตรูทั้งหมด (แมงมุมใกล้ๆ ทำให้อ่อนแรง)",{melee:2,tank:3,holy:1},{});
A("Child of Demeter","Greek",2,"เสกต้นไม้ฮีลและวงไม้โอ๊กป้องกัน เร่งพืช เก็บเกี่ยวได้ 2 เท่า",{farm:3,support:2,regen:2,nature:3},{fireweak:3,coldweak:1});
A("Child of Dionysus","Greek",2,"ตีแล้วศัตรูมึน เถาองุ่นตรึงศัตรูรอบตัว 5 วิ ปาร์ตี้บัฟวิ่งและฮีลทีม มึนแล้วแรงขึ้น",{cc:3,support:1,nature:2,chaos:1},{hungry:3});
A("Child of Hades","Greek",3,"อันเดดรอบตัวกลัวจนขยับไม่ได้ วาร์ปเงา ฆ่าแล้วฟื้นเลือด ตีติด wither มองในที่มืด",{dark:3,night:2,teleport:2,dot:2,regen:1},{sunweak:2,broken:1},{broken:"บางพลังใช้ไม่ได้"});
A("Child of Hecate","Greek",3,"ยิงลูกเวท โล่เวท ดาเมจเวทเข้าตัวลดครึ่ง กลางคืนคูลดาวน์เร็ว 2 เท่า ยาอยู่นาน 1.5 เท่า",{magic:3,night:2,dark:1,support:1},{lowhp:3,sunweak:1});
A("Child of Hephaestus","Greek",3,"ไม่โดนไฟ เลือด +5 หัวใจและเกราะ ตีติดไฟ เรียกหุ่นเหล็กช่วยสู้ หลอมแร่ในมือได้ทันที",{nether:3,tank:3,pets:1,unarmed:1,mine:1,build:1,tech:1},{hatewater:2});
A("Child of Hermes","Greek",2,"เปิดรองเท้าปีกวิ่งเร็วระดับเทพ พุ่งตัว ตกไม่เจ็บ โชคดีและได้ส่วนลดจากชาวบ้าน",{speed:3,explore:2,loot:2},{lowhp:2,noheavyarmor:2});
A("Child of Poseidon","Greek",3,"หายใจใต้น้ำ ปาตรีศูลเวทระเบิดน้ำ ตรีศูลตีแรง พุ่งตัวในน้ำหรือตอนฝนตก",{water:3,melee:1,ranged:1,burst:1},{hotweak:3});
A("Child of Zeus","Greek",3,"เรียกฟ้าผ่าใส่เป้า ลอยขึ้นฟ้า ตกไม่เจ็บ ตีแล้วไฟฟ้าช็อตสตัน",{magic:2,burst:2,cc:1,flight:1,holy:1},{cramped:3,hungry:2});

// ===== Magic Origins =====
A("Cyborg","Magic",2,"ผิวโลหะเป็นเกราะ ไม่โดนไฟ ตกไม่เจ็บ มองในที่มืด ดีดตัวขึ้นฟ้า",{tech:3,tank:2,night:1,nether:1},{noarmor:5,hatewater:3});
A("Druid (Magic)","Magic",3,"รากไม้ตรึงศัตรูรอบตัว ไอฮีลตัวเองและเพื่อน อยู่กลางแดดฟื้นเลือด",{nature:3,support:2,cc:2,regen:2},{diet_veg:2,fireweak:2,hotweak:2,broken:1},{broken:"บางพลังใช้ไม่ได้"});
A("Green Dragon","Magic",3,"มังกรเขียวมีปีก คำรามแช่แข็งศัตรู ได้ Hero of the Village ตลอด",{flight:2,cc:2,beast:2,holy:1},{diet_veg:2,hungry:3,big:2});
A("Lorax","Magic",2,"เดินทะลุใบไม้ ตัวเล็ก ทำมาร์ชเมลโลว์จากน้ำตาล",{nature:3,climb:1},{small:2,nofarm:2});
A("Magical Fly","Magic",3,"มีปีก เสกไอรอนโกเลม ฮีลทีม หยุดดาเมจทั้งหมดในรัศมี 30 บล็อกได้ 2 นาที",{support:3,flight:2,pets:2,nature:2},{diet_veg:2,small:2,lowhp:2,weakhit:2,hotweak:2,slow:1});
A("Mimic","Magic",1,"แปลงร่างเป็นหีบหรือของอย่างอื่น",{stealth:2,chaos:3,shift:2},{});
A("Necromancer","Magic",2,"กลางคืนแรงขึ้น เรียกลูกสมุนมาช่วยสู้ตอนกลางคืน ทนเอฟเฟกต์ของมอน",{pets:3,dark:3,night:2},{sunweak:2,notrade:2});
A("Panda","Magic",1,"ชอบกินไผ่ รากไม้ตรึงศัตรูรอบตัว",{cc:2,beast:2,simple:1},{broken:1},{broken:"บางพลังใช้ไม่ได้"});
A("Pirate","Magic",1,"มือเปล่าตีแรง ปิดตามองในที่มืด คล่องตัวในทะเลและบนเรือ (ใส่ได้แต่ของทอง)",{unarmed:2,water:1,night:1,explore:1},{ironban:3});
A("Red Dragon","Magic",3,"มังกรแดงตัวใหญ่ โหมดบ้าระห่ำ 5 วิ ดาเมจที่ตีและที่โดนคูณ 2",{burst:3,beast:2,melee:1,nether:1},{coldweak:3,big:2,takedmg:1});
A("Superior Dwarf","Magic",3,"เลือดเต็มแล้วได้ Haste III กดบูสต์วิ่งหรือกระโดดได้นาน 3 นาที",{mine:3,speed:1},{small:2,lowhp:2,slow:1});
A("The Kraken","Magic",3,"ว่ายเร็ว คลื่นน้ำผลักศัตรู ดึงศัตรูเข้าหาตัว",{water:3,cc:2,beast:2},{big:2,broken:1},{broken:"บางพลังใช้ไม่ได้"});
A("Undead (Magic)","Magic",2,"เรียกซอมบี้ช่วยสู้ ซอมบี้ไม่ตี ตีติด wither พลั่วเหล็กตีแรง กลางคืนแรงขึ้น",{pets:2,dark:3,night:2,dot:1},{sunweak:3,notrade:2,undeadweak:1});
A("Yin","Magic",2,"ออร่าฮีลเพื่อน ลำแสงจากฟ้าทำดาเมจและสโลว์ สลับเป็น Yang (สายมืด) ได้",{support:3,holy:3,magic:2,shift:2},{darkweak:2},{ev:"สลับร่างได้: Yin (แสง ฮีล) กับ Yang (มืด สตัน มองทะลุ)"});

// ===== Mythic Origins =====
A("Djinn","Mythic",2,"กลายเป็นทรายทะลุบล็อก พายุทรายทำศัตรูตาบอดและช้า ล่องหนบนทราย เลือดน้อยแล้วได้ฮีลอัตโนมัติ",{teleport:2,stealth:2,cc:2,safe:1,chaos:1},{hatewater:2});
A("Druid (Mythic)","Mythic",2,"อยู่ใกล้ใบไม้แล้วล่องหน เดินเร็วบนดิน ยืนบนหญ้าหรือตากฝนฟื้นเลือด",{nature:3,stealth:2,regen:2,speed:1},{diet_veg:2,weakmine:2,cramped:2});
A("Kitsune (Mythic)","Mythic",2,"ไฟจิ้งจอกเผยตัวและทำศัตรูอ่อนแรง ม่านควันล่องหน กลางคืนแรงขึ้น กระโดดสูง",{stealth:2,night:2,magic:1,cc:1,beast:1,speed:1},{small:1});
A("Phoenix","Mythic",3,"บินได้ ไม่โดนไฟ ระเบิดลูกไฟรอบตัว ตายแล้วฟื้นทุก 15 นาที กลางแดดตีแรงขึ้น",{flight:3,nether:3,safe:2,holy:1,burst:1,magic:1},{hatewater:3,coldweak:2,needsun:1});
A("Valkyrie (Mythic)","Mythic",3,"บินได้ พุ่งกระแทกพื้นระเบิด ตรีศูลแรง ตะโกนบัฟทีม ถือโล่ดีขึ้น เลือดน้อยแล้วแรงขึ้น",{flight:3,melee:2,support:2,holy:2,tank:1},{takedmg:1,noheavyarmor:2});

// ===== Origins Kitsune =====
A("Kitsune","Kitsune",2,"จิ้งจอกโบราณ (สีแดงหรือขาว) วิ่งเร็ว 40% ย่อแล้วกระโดดสูง 3 บล็อก ตกไม่เจ็บ sculk จับไม่ได้",{speed:3,stealth:1,beast:1},{lowhp:2});

// ===== Origins Revised =====
A("Attunial","Revised",2,"วาร์ปผ่านบล็อกนำไฟฟ้าระยะสั้น ใส่เกราะนำไฟฟ้าครบชุดแล้ววิ่งเร็ว (ต้องขยับตัวถึงจะฟื้นเลือด)",{teleport:2,speed:1,tech:2},{hatewater:2,complex:1});
A("Bunnion","Revised",1,"กระโดดสั้นเร็วและกระโดดไกล ตีกลางอากาศแล้วศัตรูกระเด็น",{speed:2,beast:1,cc:1},{diet_veg:3});
A("Calci","Revised",1,"ผิวแร่เป็นเกราะ ตกจากที่สูงไม่ตาย",{tank:2,safe:1},{slow:1,weakhit:1});
A("Choriun","Revised",2,"เข้าร่างผีทะลุบล็อกได้ชั่วครู่ มีช่องเก็บของพกพาที่ตายไม่หลุด",{teleport:2,void:3,safe:2},{sunweak:2});
A("Coralin","Revised",2,"สลับร่างปะการังได้หลายแบบ ยาและน้ำอยู่นาน 1.5 เท่า หิวช้า",{water:3,shift:2,regen:1},{needwater:3,complex:1});
A("Detritu","Revised",3,"เปลือก Ancient Debris ลดดาเมจ ของมีคมทำอะไรไม่ได้ ว่ายลาวา ต่อยหินได้",{tank:3,nether:3,unarmed:1,mine:1},{nether_spawn:3,coldweak:2,hatewater:2,slow:1});
A("Halloh","Revised",3,"สะสมแสงไว้ยิงลำแสงผลักศัตรู อยู่ในที่มืดจะกลายเป็นดวงไฟ",{magic:2,holy:3,ranged:1},{darkweak:3,complex:2});
A("Rootin","Revised",1,"ปีนผนังด้วยราก เดินทะลุใบไม้",{climb:3,nature:3},{diet_veg:2,fireweak:2});
A("Wiron","Revised",3,"วิ่งไปตามสาย redstone มองในที่มืด สถานะลบหมดเร็ว",{tech:3,build:2,night:1},{hatewater:3,slow:2,complex:2});

// ===== Origins++ =====
A("Alien Axolotl","Origins++",3,"เอเลี่ยนสูง 3 บล็อก หายใจใต้น้ำ ตีติดพิษ ใกล้ทองหรือ soul sand วิ่งเร็ว เลือดน้อยแล้วลอย",{water:2,dot:2,chaos:3},{lowhp:2,fireweak:2,big:2,sleep_cond:2,complex:1});
A("Anomaly","Origins++",3,"ดาวที่กลายเป็นพลังงาน วาร์ปไปไหนก็ได้ กลางคืนแรง ไม่ต้องนอน",{teleport:3,night:2,void:2,chaos:1},{sunweak:3,hungry:2});
A("Artificial Construct","Origins++",3,"หุ่น redstone ยิงธนูจากมือรอง เกราะโลหะ เอื้อมไกล ช่องเก็บของตายไม่หลุด ไม่ต้องกิน (ใช้แบตเตอรี่)",{tech:3,ranged:2,safe:2,tank:1},{diet_special:3,complex:2});
A("Automaton","Origins++",3,"หุ่นไอน้ำ สลับโจมตีธาตุไฟกับน้ำ ไม่ตาย แค่ดับไปเมื่อไอหมด",{tech:3,magic:2,ranged:1,safe:2},{diet_special:3,complex:4,hatewater:1});
A("Beaver","Origins++",2,"ใกล้ท่อนไม้ขุดเร็ว ฟันคม โหมดคลั่งวิ่งเร็วและฮีล ว่ายเร็ว ซ่อนของในปาก",{build:3,water:2,beast:2,safe:1},{});
A("Bedrockean","Origins++",3,"แทบอมตะ เปิดโหมดไม่รับดาเมจได้ ไม่ต้องกินและหายใจ ขุดเร็ว ต่อยแรง ทุบ bedrock ได้",{tank:3,mine:3,unarmed:2,safe:2},{slow:3,nobow:3,small:2,nether_spawn:3,diet_special:2,sunweak:1});
A("Binturong","Origins++",2,"พรางตัวล่องหน กรงเล็บแรง กระโดดข้ามต้นไม้ มองในที่มืด ขุดเร็ว",{stealth:2,unarmed:2,beast:3,night:2,climb:1,mine:1},{fireweak:2,small:1});
A("Birb","Origins++",3,"นกจิ๋วบินได้ บินอยู่ตีแรง 2 เท่า ขี่หัวเพื่อนได้",{flight:3,beast:2,burst:1,chaos:1},{small:3,lowhp:2,noheavyarmor:2,diet_special:3,nobow:2,weakhit:1});
A("Blazian","Origins++",3,"Blazeborn ฉบับอัป ปาลูกไฟรัว ว่ายลาวา อยู่ใน Nether แรงขึ้นและมอนไม่ตี ตีติดไฟ",{nether:3,magic:2,ranged:1,burst:1,flight:1},{nether_spawn:3,coldweak:3,nobow:3});
A("Blob","Origins++",2,"สไลม์มีหลอดพลังแทนเลือด ยิงเนื้อตัวเอง แดช ได้ EXP 2.75 เท่า ช่องเก็บของตายไม่หลุด",{chaos:3,ranged:1,speed:1,safe:1,late:1},{lowhp:1,hotweak:2,hatewater:1,complex:3});
A("Boarling","Origins++",2,"ตีแรงมาก เลือดครึ่งแล้วคลั่ง ทนน็อกแบ็กและธนู อาหารอิ่มนาน",{melee:2,unarmed:2,tank:2,beast:2,burst:1},{noshield:3,nobow:3,slow:1,fireweak:1,takedmg:1});
A("Broodmother","Origins++",3,"ราชินีแมงมุม ปีนผนัง พ่นใยตรึงทุกอย่างรัศมี 10 บล็อก เรียกแมงมุมลูก ตีติดพิษ แมงมุมเป็นพวก",{climb:3,cc:3,beast:3,pets:2,dot:2,tank:1},{oddspawn:2,complex:1});
A("Calamitous Rogue","Origins++",2,"นักฆ่า ยืนนิ่งแล้วล่องหน ลอบตีได้ผลพิเศษตามอาวุธ ฆ่าแล้วรีเซ็ตทันที ฆ่าบอสได้มรกต",{stealth:3,burst:2,melee:1,boss:1},{notrade:2,weakhit:1,complex:2});
A("Candy-Person","Origins++",2,"คราฟต์เค้กและคุกกี้จากน้ำตาล กินน้ำตาลได้บัฟ เปิดโหมดกันดาเมจ",{chaos:2,farm:1,support:1,simple:1},{diet_special:4});
A("Child of Cthulhu","Origins++",2,"หายใจใต้น้ำ พรางสีผิว ดีดตัวขึ้นฟ้า สลับขนาดตัว เล็ก กลาง ใหญ่",{water:3,shift:2,chaos:2,dark:1},{hungry:2,fireweak:3,slow:1});
A("Chimaera","Origins++",3,"สัตว์ทดลองล่าอสูร ปล่อยหมอกพิษ โดนตีแล้ววาร์ปหนี ไม่ต้องหายใจ ตกไม่เจ็บ ตีแล้วอิ่ม",{dot:2,dark:2,chaos:3,melee:1},{noshield:2,sunweak:3,diet_special:3,complex:2});
A("Cobra","Origins++",1,"ตีติดพิษ ยิงลูกธนูพิษ เกล็ดเป็นเกราะ กลางวันและใน Nether แรงขึ้น",{dot:3,beast:2,ranged:1},{coldweak:3,small:2});
A("Copper Golem","Origins++",3,"หุ่นทองแดงจิ๋ว มีเกราะและดาเมจในตัว กินทองแดงแทนอาหาร ขึ้นสนิมต้องใช้รังผึ้ง",{tech:2,tank:1,unarmed:1},{small:3,diet_special:3,complex:2});
A("Corrupted Wither","Origins++",3,"หลบเข้ามิติอื่นแล้วอมตะและล่องหน ทำให้ลูกธนูรอบตัวช้า ดาบแรงขึ้น 1 หัวใจ",{melee:2,dark:2,void:2,stealth:1,safe:1},{hungry:3});
A("Craftsman","Origins++",1,"คราฟต์ได้ทุกที่ไม่ต้องใช้โต๊ะ ใช้ขวานเก่ง ไม่โดนไฟ เกิดในหมู่บ้าน",{build:3,melee:1,simple:2},{undeadweak:2});
A("Dark Mage","Origins++",3,"จอมเวทมืด วาร์ป 25 บล็อก เวทบดขยี้ ใช้มานาฮีลตัวเอง ทำหนังสือเวทได้ (มานาหมด = ตาย)",{magic:3,dark:3,teleport:2,burst:1},{lowhp:3,weakhit:3,nobow:2,slow:2,complex:3});
A("Deathsworn","Origins++",3,"นักปลุกผี เก็บหัวใจหินจากมอนที่ฆ่ามาเรียกเป็นลูกน้อง สั่งรุมเป้า ลูกน้องยอมตายกันให้",{pets:3,dark:3,magic:1,safe:1,late:3},{weakhit:3,notrade:4,lowhp:2,complex:4});
A("Demi-God (O++)","Origins++",2,"ปลุกพลังกำปั้นชั่วคราว วิ่งเร็ว เลือดเพิ่ม ทะลุบล็อกได้ชั่วครู่ (บอสตีแรงขึ้น)",{melee:2,speed:2,tank:1,teleport:1,holy:1},{fireweak:2,diet_special:2,takedmg:1});
A("Deranged","Origins++",2,"หลอดความคลั่ง ยิ่งฆ่ายิ่งแรง ใช้ดาบเก่ง ปาลูกดอกทำศัตรูช้า ต่อราคาชาวบ้านได้",{melee:2,cc:2,chaos:3,ranged:1,burst:1},{nosleep:4,complex:3});
A("Devine Architect","Origins++",3,"สถาปนิกจักรวาล ลอยตัว ทะลุบล็อก วาร์ปไป End หรือ Nether ณ จุดเดียวกัน ยิงลำแสงจักรวาล",{void:3,teleport:3,magic:2,explore:2,flight:1},{notrade:3,takedmg:1,complex:2});
A("Dolphin","Origins++",2,"ใต้น้ำได้ Speed II หายใจไม่จำกัด เรียกโลมา กระโดดพ้นน้ำ",{water:3,speed:1,pets:1},{needwater:4,oddspawn:2,diet_special:2});
A("Drakonwither","Origins++",2,"ลูกของ Wither กับมังกร ยิงหัวกะโหลก wither ได้ ไม่ติด wither",{ranged:2,dark:2,magic:1,dot:1,simple:2},{});
A("Dullahan","Origins++",3,"อัศวินไร้หัว โซ่เกี่ยวเลือดไหล เรียกม้าฝันร้าย ยิงหัวกะโหลก กลางคืนแรงมาก",{dark:3,night:3,dot:2,ranged:1,melee:1,speed:1,cc:1},{sunweak:2,diet_special:3,complex:2});
A("Earth Spirit","Origins++",3,"โหมดหินได้พลังและต้านดาเมจแต่ช้า ถอดร่างเป็นวิญญาณทะลุบล็อกได้",{tank:3,shift:3,teleport:1,mine:1},{hatewater:2,slow:1,complex:1});
A("Ebon-Wing","Origins++",3,"ฆ่าครบ 100 ตัวปลดปีกบินและหลบ 120 ตัวปลดออร่า wither วิ่งเร็ว ไม่โดนไฟ กลางคืนแรง",{dark:3,night:2,flight:2,nether:1,chaos:1,late:3},{sunweak:3,nether_spawn:3,sleep_cond:2,takedmg:1,complex:2});
A("Emblazing Warrior","Origins++",2,"ยิ่งเลือดลดยิ่งแรง ฟันรูปกากบาท ตีแล้วศัตรูข้างๆ ติดไฟ",{melee:3,burst:3,nether:2,chaos:1},{hungry:2,takedmg:1,complex:2});
A("End Mage","Origins++",3,"เทเลคิเนซิสโจมตี วาร์ป 50 บล็อก ดึงศัตรูหรือของมาหาตัว บัฟทีม",{magic:3,void:3,teleport:3,support:1,cc:1},{lowhp:1,complex:3});
A("Enigma","Origins++",2,"เรียกร่างโคลนระเบิด วาร์ปไปข้างหลังเป้า จ้องจนศัตรูตาย มองทะลุกำแพง",{stealth:2,teleport:2,dark:2,chaos:3,cc:1},{notrade:3,weakhit:2,complex:2});
A("Fallen Angel","Origins++",3,"บินได้ ตีแรง ยิงหัวกะโหลก wither ต่อยหินได้ ไม่ติดพิษและ wither",{flight:3,melee:2,dark:2,burst:2,ranged:1},{lowhp:1,fireweak:2,cramped:1});
A("Felvaxian","Origins++",2,"ครึ่งแมวครึ่งกา ย่อแล้วล่องหน กระโดดสูง วิ่งเร็ว มีกระเป๋าพิเศษ",{stealth:2,speed:2,beast:2,dark:1},{notrade:3});
A("Flea","Origins++",3,"หมัดจิ๋ว ต่อยแล้วดูดเลือดฮีล ย่อต่อยแล้วศัตรูติดดีบัฟสุ่ม ขี่หัวเพื่อน ตกไม่เจ็บ",{chaos:3,regen:1,dot:1,stealth:1},{lowhp:4,small:3,diet_special:3});
A("Frog (O++)","Origins++",3,"กระโดดสูง หายใจใต้น้ำ ผิวมีพิษ",{water:2,dot:2,beast:1},{sunweak:3});
A("Gaia","Origins++",2,"เทพีดอกไม้ ใกล้ดอกไม้ได้บัฟและฮีล หนามสะท้อนดาเมจ ปีนผนัง สังเคราะห์แสงแทนการกิน",{nature:3,regen:2,climb:1,farm:1,chaos:1},{diet_veg:3,small:2,fireweak:2});
A("Ghast","Origins++",3,"ยิงลูกไฟ ลอยตัว อยู่ใน Nether ทะลุบล็อกได้",{nether:3,ranged:2,magic:1,flight:1},{weakhit:3});
A("Giant","Origins++",3,"ตัวใหญ่ 2 เท่า เลือดเยอะ ตีแรง เอื้อมไกล ทุบพื้นระเบิด แบกเพื่อนแล้วปาได้ เสื้อหนังกันได้เท่าเหล็ก",{tank:3,melee:3,unarmed:1,chaos:1},{big:5,nobow:3,noshield:2,hungry:2,sleep_cond:2,slow:1});
A("Glacier","Origins++",3,"พ่นน้ำแข็ง คริแล้วแช่แข็ง เดินบนน้ำ ปาก้อนหิมะทีละ 10 ลูก บนหิมะวิ่งเร็วมาก",{cold:3,cc:2,ranged:1,magic:1,night:1},{fireweak:3,hotweak:3,sunweak:1,sleep_cond:2,oddspawn:1});
A("Gnoll","Origins++",3,"เลือดครึ่งแล้วคลั่ง เร็วและทนขึ้น ไม่ติดหิว มองในที่มืดตอนมีแสงจันทร์",{melee:2,tank:2,beast:3,night:1},{noarmor:4,big:2});
A("Golden Golem","Origins++",3,"หลอดพลังฮีลตัวเอง ใช้พลังเร่งวิ่งหรือระเบิดพลัง ไม่ต้องกิน",{tank:3,melee:1,holy:1,tech:1},{slow:2,hatewater:1,complex:1});
A("Goolien","Origins++",3,"เยลลี่เอเลี่ยน รับดาเมจกายภาพน้อย ปีนผนัง ย่อตัวได้ ไม่ต้องหายใจ",{tank:2,climb:2,chaos:2,shift:1},{weakhit:2,nobow:3,noshield:2,fireweak:3});
A("Half-Wither","Origins++",3,"ยิงหัวกะโหลก wither ไม่ติด wither ดูดวิญญาณจากตัวที่ฆ่า",{ranged:2,dark:3,dot:2},{hungry:2});
A("Hellforged","Origins++",3,"ต้องติดไฟหรือแช่ลาวาตลอด ไม่งั้นเจ็บ ตีแล้วศัตรูติดไฟทันที ว่ายลาวาเก่ง",{nether:3,melee:1,chaos:2},{hatewater:4,complex:2});
A("Hero of the Wild","Origins++",2,"ดาบปราบมาร ยิงคลื่นพลังจากดาบ เรียกม้า Epona กลิ้งหลบ",{melee:3,ranged:1,explore:2,speed:1,holy:1},{hungry:1,hatewater:2});
A("Ice King","Origins++",3,"พ่นน้ำแข็ง วาร์ปไปหาเป้า เดินบนน้ำเป็นน้ำแข็ง เขตหนาวได้บัฟ อยู่ใกล้ snow golem ฮีล",{cold:3,magic:2,teleport:2,cc:1},{fireweak:3,hotweak:3,complex:1});
A("Ice Porcupine","Origins++",3,"ยิงหนามน้ำแข็งทำช้า ล่องหนชั่วครู่ หนามสะท้อนดาเมจ เขตหนาววิ่งเร็ว",{cold:3,ranged:2,stealth:2,cc:1,beast:1},{fireweak:3,small:2,oddspawn:1});
A("Iceling","Origins++",3,"ยิงเกล็ดน้ำแข็ง เขตหนาวตีแรง หายใจใต้น้ำ ตัวจิ๋ว",{cold:3,ranged:2,water:1},{fireweak:3,small:3,hotweak:2,oddspawn:1});
A("Ignisian","Origins++",3,"ปีศาจยักษ์ กระโดดแล้วกระแทกพื้น โหมดคลั่ง ยิ่งโดนตียิ่งฟื้น ไม่หิว ไม่โดนไฟนรก",{melee:3,tank:3,nether:3,burst:1},{slow:2,nobow:2,hatewater:2,diet_special:2,big:1,takedmg:1});
A("Illusioner","Origins++",3,"ยิงธนูทำตาบอด เสกร่างเงา 2 ตัว Pillager เป็นพวก วิวัฒนาการได้ 3 ขั้น",{ranged:3,cc:2,stealth:1,dark:1,shift:2,late:3},{notrade:3,weakhit:2},{ev:"Novice แล้วต่อ Apprentice (ธนูเก่งขึ้น) แล้วต่อ Master (ปลดพลังลวงตาเต็มที่)"});
A("Insect","Origins++",2,"ตีแล้วดูดเลือด กระพือปีกร่อน เดินบนน้ำและลาวา ตัวเบาวิ่งเร็ว",{regen:2,speed:2,flight:1,beast:1},{lowhp:2,hatewater:2});
A("Jellyfish","Origins++",3,"แมงกะพรุนจิ๋ว ต่อยแล้วศัตรูชาและติดพิษ มองชัดใต้น้ำ",{water:3,cc:2,dot:2},{needwater:4,small:3,oddspawn:2});
A("Kelperet","Origins++",3,"สาหร่ายที่มีหัวใจทะเล ได้พลัง conduit ในน้ำ แบ่งให้เพื่อนได้ พุ่งตัวในน้ำ",{water:3,support:2,speed:1},{needwater:2,small:1,noheavyarmor:1,sleep_cond:1});
A("Kirin","Origins++",3,"เร่งความเร็วสูงมาก ปีนบล็อก ดีดตัว ตัวเท่าแมว",{speed:3,climb:2,beast:1,holy:1},{hatewater:2,hungry:2,small:2});
A("Land Shark","Origins++",2,"ฟันคม พุ่งตัวแบบ riptide หายใจได้ทั้งบนบกและในน้ำ ในน้ำเร็ว",{water:3,melee:2,beast:2,burst:1},{slow:3,hungry:2});
A("Light Mage","Origins++",3,"จอมเวทแสง บัฟและฮีลทีม ล้างดีบัฟ เวทฮีลที่ทำดาเมจอันเดด ไฮไลต์ทุกอย่างในระยะ 80 บล็อก",{support:3,holy:3,magic:2,boss:1},{lowhp:2,weakhit:3,nobow:2,complex:3});
A("Lost Draconian","Origins++",3,"นักรบมังกรจาก End ดีดตัวขึ้นฟ้า วาร์ประยะสั้น ตกไม่เจ็บ มีดาบและโล่ประจำตัว",{melee:2,teleport:2,void:3,flight:1,early:1},{lowhp:1,fireweak:3,small:1,sunweak:1});
A("Lunar Path","Origins++",3,"ยิงโซ่ wither ทะลุแถว เรียกโครงกระดูกกับซอมบี้ใส่เกราะ เขี้ยว evoker ตอนกลางคืน ดรอปของเพิ่ม",{dark:3,night:3,pets:2,dot:2,melee:1,loot:1},{sunweak:4,takedmg:3,notrade:2,hatewater:1});
A("Magical Manipulator","Origins++",3,"สลับเวทธาตุได้หลายแบบ วิ่งเร็วกว่าปกติ",{magic:3,speed:1,burst:1},{noheavyarmor:3,weakhit:3,complex:2});
A("Magmean","Origins++",3,"ก้อนแมกมาเด้งบนทุกบล็อก ไม่รับดาเมจแรงกระแทก ว่ายลาวาเร็ว เติมพลังด้วยลาวา",{nether:3,chaos:3,speed:1},{diet_special:4,complex:1});
A("Malfunction","Origins++",3,"บั๊กในระบบ ลอยตัว ทะลุบล็อก ดึงตัวที่ต่อยล่าสุดมาหา โดนตีแล้ววาร์ปสุ่ม",{teleport:3,chaos:3,flight:1,void:1},{complex:2});
A("Marshmallow","Origins++",2,"ดื่มน้ำผึ้งแล้วตัวโตและเลือดเพิ่ม ลอยน้ำได้",{chaos:2,tank:1,shift:1},{hatewater:2,fireweak:2});
A("Moth","Origins++",2,"มองในที่มืด ไม่รับดาเมจตก พุ่งตัว อยู่ใกล้แสงได้บัฟ",{night:2,speed:1,beast:1,flight:1},{fireweak:3,sunweak:2,small:1});
A("Mothling","Origins++",3,"กระพือปีกบินขึ้น อยู่ใกล้ตะเกียงฟื้นเลือด",{flight:2,beast:1,night:1},{diet_special:4,noheavyarmor:2,lowhp:1,small:1});
A("Mountain Goat","Origins++",1,"กระโดดสูง พุ่งชนให้ศัตรูลอย เลือดเพิ่ม เขตหนาววิ่งเร็ว",{cold:2,beast:2,tank:1,cc:1,simple:1},{hotweak:2,fireweak:1});
A("Mouse","Origins++",3,"ซอมบี้ โครงกระดูก ครีปเปอร์ไม่ตี ขี่ทุกอย่างได้ โดนตีแล้วมีโอกาสขโมยอาวุธศัตรู",{chaos:3,stealth:1,speed:1,safe:1},{lowhp:4,small:3});
A("Ninetails","Origins++",3,"จิ้งจอกเก้าหาง พุ่งตัว ยิงลูกไฟ เก็บของ 9 ช่องในปากที่ตายไม่หลุด",{magic:2,ranged:1,speed:1,safe:2,beast:1,simple:1},{});
A("Panoptican","Origins++",3,"ผู้เฝ้ามอง ลอยตัวเร็ว จ้องให้ศัตรูติด wither มองทะลุบล็อก",{flight:2,dot:2,magic:1,chaos:2},{weakhit:4,fireweak:2});
A("Part-Robot","Origins++",2,"ไม่ติดดีบัฟ ไม่หิว ยิงเลเซอร์ โหมดป้อมปืน เลือดเพิ่ม ไม่ต้องหายใจ (ฟื้นเลือดเองไม่ได้)",{tech:3,tank:2,ranged:2,safe:1},{slow:1,fireweak:2,hotweak:2,complex:1});
A("Pixie (O++)","Origins++",3,"ตัวเล็กลง 4 เท่า โชคดีถาวร บินด้วยเวทไม่ต้องใช้พลุ",{flight:3,loot:2,chaos:2},{small:4,lowhp:4});
A("Ram","Origins++",3,"พุ่งแล้วแรงและเร็วขึ้น ชาร์จกระโดดสูงมาก กระโดดสูงและร่อนถาวร",{speed:2,beast:2,melee:1,cc:1,flight:1},{diet_veg:3});
A("Raptus","Origins++",2,"ลูกหลาน velociraptor กัดแรง กระโจนใส่ศัตรู วิ่งแล้วกระโดดสูง",{unarmed:2,speed:2,beast:3,melee:1},{noheavyarmor:2,lowhp:1,small:1});
A("Rat","Origins++",2,"ตีเร็ว วิ่งเร็ว มอนดรอปของเพิ่ม กัดแรง มองในที่มืด",{speed:2,loot:2,night:2,beast:2,unarmed:1},{sunweak:3,small:2});
A("Ravager","Origins++",2,"ถึกมาก ไม่โดนน็อกแบ็ก ถือขวานแล้วแรงขึ้น พุ่งชน เรียก vex Pillager เป็นพวก",{tank:3,melee:2,pets:1,cc:1},{slow:3,nobow:3,noshield:2,big:2,notrade:1,hungry:1});
A("Red Panda","Origins++",2,"น่ารักจนแช่แข็งมอนทุกตัวรัศมี 30 บล็อก มองในที่มืด",{cc:3,beast:2,night:1,nature:1},{diet_special:4,slow:1,fireweak:2,oddspawn:1});
A("Reign Farmer","Origins++",1,"เร่งพืชโตทันที อยู่ใกล้ไร่ฟื้นเลือด เรียกสัตว์ได้ สังเคราะห์แสง",{farm:3,nature:2,support:1},{weakhit:3,noheavyarmor:3,lowhp:1});
A("Rift Mage","Origins++",2,"เปิดรอยแยกแล้วบินทะลุบล็อกรอบมัน โดนตีตายแล้วกลับไปที่รอยแยกแทน กินเพิร์ลแทนอาหาร",{void:3,teleport:3,safe:2,flight:1},{lowhp:3,diet_special:4,hatewater:2,nether_spawn:1});
A("Ryū","Origins++",3,"มังกรเทพ ดีดตัวขึ้นฟ้า พุ่งเร็ว เห็นมอน 32 บล็อก ล้างพิษ เลือดเพิ่ม Enderman ไม่โกรธ",{flight:2,speed:2,holy:2,tank:1,explore:1},{big:1});
A("Sand-Walker","Origins++",2,"ไม่โดนไฟ ทะลุบล็อกทราย กลืนกับทราย ไม่ติดหิว",{stealth:1,teleport:1,nether:1,simple:1},{coldweak:3,diet_meat:1});
A("Shadow","Origins++",3,"ในที่มืดล่องหน ทะลุบล็อก วาร์ปไปข้างหลังเป้า มองในที่มืดถาวร",{stealth:3,dark:3,night:3,teleport:2},{sunweak:4,lowhp:2,diet_special:3,noheavyarmor:2});
A("Shadow Crawler","Origins++",3,"ในที่มืดได้บัฟทุกค่า วาร์ปเงา 15 บล็อก ไม่ต้องกิน ฟื้นเลือดเรื่อยๆ",{dark:3,night:3,teleport:2,regen:1},{sunweak:4});
A("Shifter","Origins++",3,"ขโมยพลัง 9 เผ่าเริ่มต้นมาสลับร่าง (แมงมุม นก Blaze Elytra Ender แมว Merling Phantom Shulk)",{shift:3,chaos:3,flight:1,climb:1,teleport:1},{complex:4,lowhp:1});
A("Snake","Origins++",2,"กัดติดพิษ ขู่ศัตรู ย่อกระโดดพุ่งใส่เหยื่อ",{dot:2,beast:2,cc:1,unarmed:1},{lowhp:1});
A("Soul-Seer","Origins++",3,"เห็นวิญญาณทะลุบล็อก วาร์ปไปหาสิ่งที่มองเห็น ตีแล้วเติมบ่อวิญญาณเพื่อรับบัฟ",{teleport:2,dark:2,chaos:2,melee:1},{lowhp:4,diet_special:3,complex:3});
A("Spectre","Origins++",3,"เทวดาตกสวรรค์ ตีดูดวิญญาณฟื้นเลือด เต็มหลอดได้ Speed/Resistance/Haste โหมดอมตะล่องหน",{dark:2,regen:2,chaos:2,holy:1,nether:1,stealth:1},{lowhp:3,noheavyarmor:3,noshield:2,hungry:3,diet_meat:2,coldweak:2,complex:3});
A("Spirit Ram","Origins++",3,"แกะวิญญาณ ทะลุบล็อก ปล่อยหมอกให้ศัตรูรอบตัวหายใจไม่ออก ซ่อนของในเขาที่ตายไม่หลุด",{cc:2,safe:2,dot:1,teleport:1,holy:1},{sleep_cond:2,lowhp:1});
A("Sporeling","Origins++",3,"เห็ดจิ๋ว ปล่อยสปอร์พิษรอบตัว ดีดขึ้นฟ้า ไม่ติดพิษ wither และหิว",{dot:2,nature:2,chaos:2,shift:2,late:2},{fireweak:3,small:3,lowhp:2,noheavyarmor:2},{ev:"ฆ่า Ender Dragon แล้ววิวัฒนาการเป็น Shroomling (ทนขึ้น สปอร์และแรงดีดเพิ่ม)"});
A("Sprinter","Origins++",2,"Speed III ถาวร อะดรีนาลีนได้แรงและฮีล แต่หมดฤทธิ์แล้วเหลือ 2 หัวใจ",{speed:3,burst:1,simple:1},{lowhp:2,fireweak:1});
A("Stargazer","Origins++",3,"กลางคืนได้ Speed II และ Strength II ในที่มืดตีเร็วมาก ทะลุบล็อกแบบ phantom",{night:3,melee:2,burst:2,void:1,teleport:1},{sunweak:4,fireweak:1});
A("Sunken Sailor","Origins++",2,"ไม่ต้องหายใจ วิ่งใต้น้ำได้เต็มสปีด ส่องกล้องเห็นมอนทะลุบล็อก",{water:3,explore:1,dark:1},{oddspawn:2});
A("Technomancer","Origins++",3,"ไม้เท้าเทคโน: ขังศัตรู ตะขอเกี่ยว ออร่าฮีล เลเซอร์ทุบบล็อก โล่นาโนกันทุกดาเมจ",{tech:3,magic:2,support:2,cc:2,late:2},{slow:1,lowhp:2,complex:3});
A("Thornling","Origins++",3,"ใครตีก็โดนสะท้อน 1 หัวใจทะลุเกราะ ใส่ชุด Thorns III ครบลดดาเมจ 40% (ใส่ได้แต่ทอง)",{tank:2,chaos:2},{ironban:3,weakhit:3,small:1});
A("Vishaichian","Origins++",2,"นักรบโบราณ ตีแรง เลือดเพิ่ม ถุยพิษ เรียกเขี้ยว evoker กระโดดสูง",{melee:3,dot:2,tank:1},{fireweak:3,diet_meat:2});
A("Void Samurai","Origins++",2,"ซามูไรแห่งความว่าง หลบการโจมตีแรกอัตโนมัติ ล่องหน ตีแรง วิ่งเร็ว",{melee:3,void:3,stealth:1,speed:1,burst:1},{noheavyarmor:4,noshield:3,diet_special:3,lowhp:1,complex:1});
A("Voidling","Origins++",3,"ลูกแห่งความว่าง ในที่มืดได้บัฟ วิวัฒนาการได้อีก 2 ขั้น",{void:3,dark:2,night:2,shift:2,late:3},{sunweak:3,takedmg:1},{ev:"Voidling แล้วต่อ Voidborne (ได้ปีก โล่ความว่าง) แล้วต่อ Supreme Voidborne หลังฆ่า The Beast"});
A("Volcanic Dragon","Origins++",3,"พ่นลูกไฟลาวา เกราะเกล็ด แรงในตัว เลือดเพิ่ม พุ่งด้วยเปลวไฟ ไม่ติดพิษและ wither",{nether:3,tank:2,beast:2,magic:1,ranged:1,burst:1},{nether_spawn:3,coldweak:2,hungry:1});
A("Wailing One","Origins++",3,"บานชีลอยตัว ทะลุบล็อก กรีดร้องใส่ wither ตีแล้วดูดเลือด คนตีโดนช้าและอ่อนแรง",{dark:3,dot:2,regen:2,cc:1,chaos:1},{notrade:3,ironban:3,oddspawn:1});
A("Wanderer","Origins++",1,"ใส่ชุดหนังได้เกราะ ความเร็ว และดาเมจเพิ่ม ใกล้แสงฟื้นเลือด ชาวบ้านลดราคา มีกระเป๋าเดินทาง",{explore:3,simple:2,regen:1,loot:1},{noheavyarmor:1,fireweak:1});
A("Wandering Spirit","Origins++",3,"เรียกพายุฟ้าผ่ารอบตัว ผ่าใส่เป้า ทะลุบล็อก ขุดและวิ่งเร็ว (ใช้ความหิว)",{magic:3,burst:2,teleport:1,speed:1,mine:1},{darkweak:3,fireweak:2,complex:1});
A("War God","Origins++",2,"ดาบและขวานแรง เลือดเพิ่ม ไม่โดนไฟ",{melee:3,burst:1,tank:1,nether:1,simple:2},{nobow:3,darkweak:2,hungry:2});
A("Warden","Origins++",3,"เลือดเยอะและ Strength ถาวร ร้องหาศัตรู ทะลุบล็อก (ที่สว่างแทบมองไม่เห็น)",{tank:3,melee:3,night:2,dark:2},{big:2,sunweak:3});
A("Warforged","Origins++",3,"ร่างอาวุธสงคราม ตีแรงขึ้น ไม่ติดพิษ มองในที่มืด",{melee:2,tech:2,night:1,simple:2},{hatewater:2});
A("Warper","Origins++",3,"วาร์ป 32 บล็อก สร้างพอร์ทัลคู่ข้ามมิติ Ender Chest ส่วนตัวตายไม่หลุด หยุดตกกลางอากาศได้",{teleport:3,void:3,safe:2,explore:2},{lowhp:3,complex:1});
A("Witch of Ink","Origins++",2,"แม่มดหมึก ยิงสีใส่ศัตรูได้ผลต่างกัน ปลุกภาพวาดให้มีชีวิตมาช่วย แม่มดเป็นพวก",{magic:2,chaos:3,pets:1,build:1},{diet_special:4,fireweak:3,lowhp:1,complex:3});
A("Withered Fox","Origins++",3,"อันเดดไม่ตี (รวม Wither) ยิงหัวกะโหลก ตีติด wither เลือดครึ่งแล้วกันธนู",{dark:2,dot:2,beast:2,ranged:1,speed:1},{nether_spawn:3,small:1,lowhp:1});
A("Withered Skeletian","Origins++",3,"พวก Nether เป็นมิตร ดาบหินแรงมาก ตีติด wither",{melee:2,dot:2,dark:2,nether:2,early:2},{nether_spawn:3,big:1});
A("Wizard","Origins++",3,"ลูกไฟ ฟ้าผ่า ระเบิดหัวกะโหลก ฟื้นเลือดถาวร โดนตีตายแล้วรอด มี vex คุ้มกัน",{magic:3,regen:2,safe:2,pets:1,burst:1},{weakhit:3,slow:1,noheavyarmor:2});
A("Wyverian","Origins++",3,"กระพือปีกบิน พ่นหมอกพิษ กรงเล็บแรง มองในที่มืด",{flight:2,dot:3,beast:2,unarmed:1,night:1},{noheavyarmor:3,hatewater:2,big:1});
A("Zero Aizawa","Origins++",2,"Speed และร่อนถาวร เอื้อมไกล มอนส่วนใหญ่ไม่ตี โหมดอมตะชั่วคราว",{speed:2,safe:2,chaos:1,simple:1},{sunweak:2,cramped:2,big:1});

// ===== Simply Fantastical (Goblin โหลดไม่ขึ้นในเซิร์ฟ จึงไม่ใส่) =====
A("Dragonborn","SF",1,"เลือดเยอะ ต้านไฟ พ่นลูกไฟได้",{tank:1,magic:1,ranged:1,nether:1,simple:2},{});
A("Dwarf (SF)","SF",1,"มองในถ้ำชัด ขุดเก่ง ตัวแข็งแรง",{mine:3,night:1,tank:1,simple:2},{small:1});
A("Elf (SF)","SF",1,"ตัวสูง ธนูแรง ต้านเวท",{ranged:2,simple:2},{});
A("Gargoyle","SF",1,"ผิวหินเป็นเกราะ มองไม่ต้องใช้แสง เข้าโหมดหินถึกขึ้นชั่วคราว",{tank:2,night:1,simple:1},{small:1});
A("Halfling","SF",1,"ตัวเล็ก กินน้อยแต่อิ่มมาก",{simple:2,farm:1},{small:2});
A("Lizardfolk","SF",1,"หายใจได้ทั้งบนบกและในน้ำ ไม่ติดพิษ",{water:2,beast:1,simple:2},{});
A("Ogre (SF)","SF",1,"สูง 2 เท่า เลือดเยอะ ตีแรง (ใส่เสื้อและกางเกงเกราะไม่ได้)",{tank:2,melee:2},{big:4,noarmor:2,noheavyarmor:2});
A("Orc","SF",1,"ตัวใหญ่ เลือดเยอะ วันละครั้งปลุกพลังมหาศาล",{melee:2,tank:1,burst:1,simple:2},{big:1});
A("Tabaxi","SF",1,"วิ่งเร็วที่สุดบนพื้น กระโดดกลางอากาศได้ ตกไม่เจ็บ",{speed:3,beast:1,climb:1},{lowhp:1,small:1});
A("Tiefling","SF",1,"วันละครั้งตีติดไฟ ต้านไฟ",{nether:2,melee:1,simple:2},{});
A("Wraith","SF",1,"มองเห็นทุกที่ วันละครั้งหายตัวได้",{stealth:2,dark:2,night:1,simple:1},{});

const ADDON_CLASSES=[
 {n:"Mediocrity Master",m:"Apocalypse",d:"ดาเมจประชิดและระยะไกล +5% กันดาเมจ +5%",w:{simple:3},t:"any",cv:{}},
 {n:"Fungal Healer",m:"Apocalypse",d:"ตีด้วยเห็ดฮีลเพื่อน สตูว์ศักดิ์สิทธิ์ล้างดีบัฟและฮีล 10 คราฟต์ผักทองได้ 2 เท่า",w:{support:3,regen:1,farm:1},t:"any",cv:{}},
 {n:"Hex Hunter",m:"Apocalypse",d:"วิ่งเร็ว +10% ธนู +10% ตีโล่ของ Hexblade แรง 2 เท่า",w:{ranged:2,speed:2},t:"ranged",cv:{slow:1},no:["Hexblade"]},
 {n:"Hex Warrior",m:"Apocalypse",d:"เลือด −1 หัวใจ ดาบไม้ +2 ถือดาบไม้มือรองตีแรง +10% ฆ่าแล้วเก็บวิญญาณไว้กันดาเมจ",w:{melee:2,chaos:1},t:"melee",cv:{},no:["Hexblade"]},
 {n:"Bane of the Small",m:"Apocalypse",d:"ตกใส่มอนตัวเล็กแล้วสตัน ดาบ vanilla ตีกระจายรอบตัว",w:{melee:2,cc:1},t:"melee",cv:{},no:["Myconoid Spore"]},
];

// พรกรีกที่เซิร์ฟเราทำเอง (datapack zenix_greek_blessings) · อยู่ในหน้า Divine Blessing เหมือนพรของ Cisco
const ADDON_BLESSINGS=[
 {n:"Zeus",m:"เซิร์ฟเรา",d:"ตีติดไฟฟ้าและสตัน ไม่โดนฟ้าผ่า · ลงต่ำกว่า Y=30 อ่อนแรง",w:{melee:2,burst:1,cc:1,holy:1},f:{cramped:2},t:"melee",cv:{},x:{early:2}},
 {n:"Poseidon",m:"เซิร์ฟเรา",d:"หายใจใต้น้ำ มองชัด อยู่ในน้ำหรือตากฝนได้บัฟ ตรีศูลแรง · เขตร้อนช้าและหิวเร็ว",w:{water:3,melee:1},f:{hotweak:2},t:"any",cv:{},x:{early:2},need:"water"},
 {n:"Hades",m:"เซิร์ฟเรา",d:"มองในที่มืด ตีติด wither · กลางแดดไม่ใส่หมวกจะอ่อนแรง",w:{night:2,dot:2,dark:3,melee:1},f:{sunweak:1},t:"melee",cv:{darkweak:2},x:{early:2}},
 {n:"Ares",m:"เซิร์ฟเรา",d:"ต้านน็อกแบ็ก 50% ไม่ติดอ่อนแรง เลือด 5 หัวใจลงไปได้ Resistance · หิวเร็ว 2 เท่า",w:{tank:2,melee:2,burst:1},f:{hungry:2},t:"any",cv:{lowhp:1,weakhit:1},x:{early:2,safe:1}},
 {n:"Hermes",m:"เซิร์ฟเรา",d:"ตกไม่เจ็บ โชคดีตลอด ชาวบ้านลดราคา",w:{loot:3,explore:2,speed:1,simple:1},f:{},t:"any",cv:{notrade:1},x:{early:2}},
 {n:"Hephaestus (กรีก)",m:"เซิร์ฟเรา",d:"ไม่โดนไฟและลาวา ขุดและเหวี่ยงอาวุธเร็วขึ้น · โดนน้ำหรือฝนแล้วตัวแข็ง",w:{nether:3,mine:2,build:1,melee:1},f:{hatewater:2},t:"any",cv:{fireweak:4,weakmine:2},x:{early:2}},
 {n:"Hecate",m:"เซิร์ฟเรา",d:"ดาเมจเวทที่โดนลดครึ่ง ยาอยู่นาน 1.5 เท่า · กลางวันเหนื่อยง่าย",w:{magic:2,support:1,dark:1,night:1},f:{sunweak:1},t:"any",cv:{takedmg:1},x:{early:1}},
 {n:"Dionysus",m:"เซิร์ฟเรา",d:"ติดมึนแล้วแรงขึ้น เดินผ่านพุ่มหนามได้ · หิวเร็ว",w:{melee:1,chaos:2,nature:1},f:{hungry:2},t:"melee",cv:{},x:{early:1}},
 {n:"Aphrodite",m:"เซิร์ฟเรา",d:"ตกไม่เจ็บ · ดาเมจทุกอย่าง −20% (เหมาะกับสายฮีลและลูกสมุน)",w:{support:2,pets:1,holy:1},f:{weakhit:3},t:"any",cv:{},x:{}},
 {n:"Artemis",m:"เซิร์ฟเรา",d:"กลางคืนเร็วและมองชัด ยิงธนูแล้วศัตรูติดเครื่องหมาย · เลือดน้อยลง",w:{ranged:3,night:2,nature:1},f:{lowhp:2},t:"ranged",cv:{},x:{early:2}},
];
