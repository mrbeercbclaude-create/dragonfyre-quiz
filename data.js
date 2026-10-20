// ข้อมูลเผ่า อาชีพ พร ของ Cisco's Dragonfyre (อ่านจากไฟล์ mod ในเซิร์ฟ) · เผ่าจากม็อดเสริมอยู่ใน addons.js
// ===== ความชอบ (pref) =====
const P={melee:"ตีประชิด",ranged:"ยิงไกล",magic:"เวทมนตร์",unarmed:"มือเปล่า/กรงเล็บ",pets:"ลูกสมุน/สัตว์เลี้ยง",
 tank:"ถึก รับดาเมจ",burst:"ดาเมจแรง",support:"ช่วยเพื่อน",cc:"ควบคุมศัตรู",regen:"ฟื้นเลือดเก่ง",
 flight:"บินได้",climb:"ปีนกำแพง",speed:"วิ่งเร็ว",teleport:"วาร์ป/ทะลุ",stealth:"ลอบเร้น",
 explore:"สำรวจ",loot:"ลูทของหายาก",mine:"ขุดเหมือง",build:"สร้างฐาน",farm:"ฟาร์ม",
 water:"สายน้ำ",nether:"สายไฟ/Nether",cold:"สายน้ำแข็ง/เขตหนาว",night:"กลางคืน/ถ้ำ",boss:"ล่าบอส",simple:"เล่นง่าย",chaos:"แปลกและท้าทาย",
 holy:"สายศักดิ์สิทธิ์",dark:"สายมืด",nature:"สายธรรมชาติ",beast:"สายสัตว์ร้าย",dot:"พิษ/ไฟค่อยๆ ฆ่า",
 void:"สาย End/ความว่าง",tech:"หุ่นยนต์/เทคโนโลยี",shift:"แปลงร่าง/วิวัฒนาการ",
 safe:"ตายยาก/ของไม่หลุด",early:"แรงตั้งแต่ต้นเกม",late:"แรงขึ้นช่วงท้ายเกม"};
// หมวดของความชอบ (ใช้แสดงกราฟคะแนนทุกด้าน)
const PG=[["การต่อสู้",["melee","ranged","magic","unarmed","pets","dot"]],["บทบาท",["tank","burst","support","cc","regen","boss","safe"]],
 ["การเดินทาง",["flight","climb","speed","teleport","stealth"]],["ชีวิตในโลก",["explore","loot","mine","build","farm"]],
 ["ธีม/สภาพแวดล้อม",["holy","dark","nature","beast","water","nether","cold","night","void","tech"]],["จังหวะเกม",["simple","chaos","shift","early","late"]]];
// ===== ข้อเสีย (flag) =====
const F={lowhp:"เลือดน้อย",takedmg:"รับดาเมจเพิ่ม",noheavyarmor:"ใส่เกราะหนักไม่ได้/ช้า",noarmor:"ใส่เกราะไม่ได้เลย",ironban:"ใส่เหล็ก/เงินไม่ได้",
 noshield:"ถือโล่ไม่ได้",nobow:"ใช้ธนูไม่ได้",weakhit:"ตี/ทำดาเมจเบาลง",diet_veg:"กินเนื้อไม่ได้",diet_meat:"กินผักไม่ได้",diet_special:"กินอาหารปกติไม่ได้",
 hungry:"หิวเร็ว",nosleep:"นอนไม่ได้",sleep_cond:"นอนต้องมีเงื่อนไข",notrade:"ชาวบ้านไม่เทรด/golem ตี",nofarm:"เก็บพืช/ตัดไม้ลำบาก",
 hatewater:"โดนน้ำแล้วเจ็บ/จม",needwater:"ต้องอยู่ใกล้น้ำ",sunweak:"แพ้แดด",needsun:"ต้องอยู่กลางแดด",darkweak:"ที่มืดอ่อนแรง",
 fireweak:"แพ้ไฟ",coldweak:"เขตหนาวอ่อนแรง",hotweak:"เขตร้อนอ่อนแรง",nether_spawn:"เกิดใน Nether",oddspawn:"เกิดไกลจากเพื่อน (ทะเล/หิมะ/เหมือง)",big:"ตัวใหญ่มาก",small:"ตัวเล็ก",
 slow:"เดินช้า",cramped:"ที่แคบ/ใต้ดินอ่อนแรง",weakmine:"ขุดหินลำบาก",undeadweak:"อ่อนแรงใกล้ undead",complex:"เล่นยาก ต้องจำสกิล",broken:"มีของใช้ไม่ได้ในเซิร์ฟเรา"};

// เผ่าของ Cisco: w = ความชอบที่เผ่าตอบโจทย์, f = ข้อเสีย (1-5), i = impact
const ORIGINS=[
 {n:"Human",d:"คนธรรมดา ไม่มีจุดเด่นและไม่มีข้อเสีย",i:0,w:{simple:3},f:{}},
 {n:"Wood Elf",d:"ธนูแรง ชาร์จยิงทะลุ หมอบในพุ่มไม้แล้วมอนไม่เห็น ตามรอยศัตรูได้",i:1,w:{ranged:3,stealth:2,speed:1,explore:1},f:{lowhp:1,noheavyarmor:1,diet_veg:2}},
 {n:"Avian",d:"ร่อนลงช้า วิ่งเร็ว ตื่นมาวางไข่",i:1,w:{flight:1,speed:2,explore:2},f:{diet_veg:2,sleep_cond:2}},
 {n:"Arachnid",d:"ปีนกำแพงได้ทุกแบบ ตีแล้วศัตรูติดใยแมงมุม",i:1,w:{climb:3,cc:2,melee:1},f:{lowhp:2,diet_meat:2}},
 {n:"Alfiq",d:"แมวมือเปล่าตีแรง ปีนผนัง ตะครุบไกล ล้วงกระเป๋าชาวบ้าน ครีปเปอร์กลัว",i:1,w:{unarmed:3,climb:2,stealth:2,speed:1,loot:1},f:{noheavyarmor:1,diet_meat:2,complex:1}},
 {n:"High Elf (ยิงไฟ)",d:"กดสกิลยิงลูกไฟ มองในที่มืด ตามรอยศัตรู กระโดดสูง",i:1,w:{magic:2,ranged:1,night:1,speed:1},f:{noheavyarmor:2,diet_veg:2}},
 {n:"Elytrian",d:"มีปีกบินตั้งแต่เริ่ม ดีดตัวขึ้นฟ้าทุก 30 วิ บินอยู่ตีแรงมาก",i:1,w:{flight:3,explore:3,burst:1},f:{noheavyarmor:3,cramped:2}},
 {n:"Shulk",d:"ช่องเก็บของเพิ่ม 9 ช่องที่ตายไม่หลุด ผิวมีเกราะ ทุบหินมือเปล่า",i:1,w:{tank:3,mine:2,loot:1,build:1,simple:1},f:{noshield:2,hungry:2}},
 {n:"Goblin",d:"ใส่ของทองได้โบนัส ของทองทนขึ้น เจอของหายากบ่อย วิ่งเร็ว",i:1,w:{loot:3,speed:2},f:{lowhp:2,small:2}},
 {n:"Priest",d:"เริ่มเกมได้ขวด EXP ลาพิส สร้อยศักดิ์สิทธิ์ วิ่งเร็ว ตกไม่เจ็บ",i:1,w:{support:2,speed:1,simple:1},f:{diet_veg:2,undeadweak:1,broken:1},broken:"สกิลโล่ใช้ไม่ได้ในเซิร์ฟเรา"},
 {n:"Plantaemancer",d:"ยิงเถาวัลย์พิษ เร่งต้นไม้โต อยู่ในน้ำเลือดฟื้น กลางวันวิ่งเร็ว",i:1,w:{farm:3,magic:1,regen:1,cc:1},f:{fireweak:2,darkweak:2}},
 {n:"Feline",d:"ตกไม่เจ็บ กระโดดสูง เดินเงียบ ครีปเปอร์กลัว มองในที่มืดได้นิดหน่อย",i:2,w:{speed:1,stealth:2,night:1},f:{lowhp:1,weakmine:3}},
 {n:"Pixie",d:"ตัวจิ๋วบินได้ ขี่หัวเพื่อน ขุดหินบางทีได้ของมีค่า",i:2,w:{flight:3,loot:1,chaos:3,mine:1},f:{small:3,notrade:3,lowhp:1,complex:1}},
 {n:"Knight",d:"ดาบ Skofnung ตีแรง กดสกิลฟื้นเลือด+ตีเร็ว 30 วิ",i:2,w:{melee:3,burst:1,regen:1,tank:1},f:{slow:2,nobow:3,broken:1},broken:"ดาบเริ่มต้นอาจไม่ได้รับ"},
 {n:"Paladin",d:"แตะ undead ติดไฟ ฆ่าแล้วได้น้ำมนต์ สกิลฟื้นเลือด+กันดาเมจตอนกลางวัน",i:2,w:{melee:2,regen:2,support:1,boss:1},f:{hungry:1,slow:1,broken:1},broken:"ดาบเริ่มต้นอาจไม่ได้รับ"},
 {n:"Valkyrie",d:"ปีกบินอิสระ ฟาดศัตรูรอบตัว พุ่งลงพื้นฮีล+ล้างดีบัฟเพื่อน",i:2,w:{flight:3,support:3,cc:1,melee:1},f:{undeadweak:2,complex:1}},
 {n:"Enderian",d:"ปา ender pearl วาร์ปได้ไม่จำกัด เอื้อมได้ไกล",i:2,w:{teleport:3,explore:1,build:1},f:{hatewater:3}},
 {n:"Yeti",d:"เลือดเยอะมาก แช่แข็งศัตรูรอบตัว ศัตรูใกล้ตัวช้าลง เขตหนาววิ่งเร็ว",i:2,w:{tank:3,cc:2,melee:1,cold:3},f:{fireweak:2,hotweak:2,big:1}},
 {n:"Dwarf",d:"ทุบหินมือเปล่า ขุดเร็ว มองในที่มืด ดื่มเหล้าฟื้นเลือดเต็ม",i:2,w:{mine:3,night:2,regen:2,tank:1},f:{sunweak:2,small:1,hatewater:2}},
 {n:"Incubus",d:"เวทไฟแรง พ่นไฟ ไฟไม่ทำดาเมจแถมทำให้อิ่ม แรงมากใน Nether",i:2,w:{magic:2,nether:3,burst:1},f:{nether_spawn:3,hatewater:3,diet_meat:2,sunweak:1,complex:1}},
 {n:"Fae",d:"ลอยตัวได้ ฟื้นเลือดด้วยเวท ทนเวทมนตร์",i:2,w:{flight:1,magic:2,regen:2},f:{ironban:3,lowhp:1,small:1}},
 {n:"Arachnae",d:"ปีนกำแพง กัดติดพิษ พ่นใยตรึงศัตรู มองในที่มืด",i:2,w:{climb:2,cc:3,night:1,melee:1},f:{hungry:2,noheavyarmor:1,lowhp:1,diet_meat:2}},
 {n:"High Elf (จอมเวท)",d:"ถือของต่างกันได้เวทต่างกัน เวทแรง มานาเยอะ เลือกสายย่อยได้",i:2,w:{magic:3,burst:1},f:{lowhp:2,noheavyarmor:1,complex:2}},
 {n:"Siren",d:"ในน้ำหายใจได้ ว่ายเร็ว ฟื้นเลือดไว ร้องเพลงหยุดศัตรูรอบตัว",i:2,w:{water:3,cc:2,regen:1},f:{fireweak:4,needwater:2}},
 {n:"Wild Cat",d:"ตกไม่เจ็บ เดินเงียบ ปีนกำแพง มองในที่มืด ครีปเปอร์หนี",i:2,w:{climb:2,stealth:2,night:2,speed:1},f:{diet_meat:2,hungry:1}},
 {n:"Bird of Paradise",d:"บินได้ ร่อนลงช้า บินอยู่ตีแรง วิ่งเร็ว",i:2,w:{flight:3,explore:2,burst:1,speed:1},f:{noheavyarmor:3,hatewater:2,diet_meat:2,sleep_cond:1}},
 {n:"Thief",d:"ช่องเก็บของตายไม่หลุด ย่อแล้วล่องหน เริ่มได้เพชร 3 มองในที่มืด",i:2,w:{stealth:3,loot:2,speed:1,night:1},f:{lowhp:2,hungry:2}},
 {n:"Demi-God Lux",d:"ตีแรง +40% เลือดเพิ่ม กลางแจ้งรับดาเมจน้อยลง ไม่ติดมืด/wither",i:2,w:{burst:3,melee:2,boss:2,tank:1},f:{diet_special:4,takedmg:1}},
 {n:"Demi-God Umbra",d:"ตีแรง +40% เลือดเพิ่ม มองในที่มืด ใน The End รับดาเมจน้อยลง",i:2,w:{burst:3,melee:2,boss:2,night:2},f:{diet_special:4,takedmg:1}},
 {n:"Frijani Drengr",d:"ดูดเลือด 20% คริต +20% แรงคริต +50% ตีแล้วศัตรูช้า",i:2,w:{melee:3,burst:2,regen:2,cold:1},f:{takedmg:2,noshield:2,hungry:2}},
 {n:"Venthari Sharpshooter",d:"ธนูแรง +30% เขตร้อนวิ่งเร็ว",i:2,w:{ranged:3,burst:2},f:{lowhp:2,coldweak:2,diet_veg:1}},
 {n:"Lumerian Justicar",d:"เวทศักดิ์สิทธิ์ +350% ร่ายเร็ว 2 เท่า บัฟกันดาเมจให้เพื่อน",i:2,w:{magic:3,support:3,boss:1},f:{slow:2,complex:1}},
 {n:"Anthraxi Dark Mage",d:"เวทสายมืด +350% ร่ายเร็ว 2 เท่า ปุ่มหลบการโจมตี",i:2,w:{magic:3,burst:3,ranged:1},f:{lowhp:3,complex:1}},
 {n:"Pyriosi Phoenix Knight",d:"ตีติดไฟ ศัตรูติดไฟโดน +60% กลางแดดฟื้นเลือดเร็ว พุ่งเผาทาง",i:2,w:{melee:3,burst:2,regen:2,nether:1},f:{needsun:2,coldweak:2,darkweak:2}},
 {n:"Merling",d:"หายใจใต้น้ำ มองชัด ขุดเร็วใต้น้ำ ว่ายเร็ว",i:3,w:{water:3,mine:1},f:{needwater:5}},
 {n:"Blazeborn",d:"ไม่เจ็บจากไฟเลย ติดไฟแล้วตีแรง ไม่ติดพิษ/หิว",i:3,w:{nether:3,burst:1,melee:1},f:{nether_spawn:3,hatewater:3}},
 {n:"Revenant",d:"เสกโครงกระดูก/ซอมบี้/ม้าเป็นลูกสมุน สร้างวงโครงกระดูกกันดาเมจ Pillager ไม่ตี",i:3,w:{pets:3,magic:1,chaos:2,tank:1},f:{notrade:3,nosleep:2,nofarm:3,complex:2,broken:1},broken:"ลูกสมุนไม่แรงขึ้นตามพลังเวท"},
 {n:"Moon Elf",d:"ที่มืดย่อแล้วล่องหน ตีจากความมืดแรงมาก มีดสั้นแรง หลบการโจมตีได้",i:3,w:{stealth:3,burst:2,night:3},f:{nosleep:2,lowhp:2,noheavyarmor:1}},
 {n:"Plague Victim",d:"ออร่าดูดเลือดรอบตัว ไม่ติดพิษ/wither ตายแล้วรอด 1 ครั้งทุก 5 นาที",i:3,w:{chaos:3,cc:2,melee:1},f:{noarmor:5,notrade:3,nosleep:2,lowhp:2,slow:1,complex:2}},
 {n:"Gorgon",d:"จ้องตามอนให้เป็นหิน เลือดน้อยยิ่งตีแรง โดนตีแล้วพ่นพิษ",i:3,w:{cc:3,burst:1,chaos:2},f:{sunweak:3,hatewater:3,ironban:3}},
 {n:"Banshee",d:"กลายเป็นวิญญาณทะลุของ กรีดร้องผลักศัตรู ใครตีมีโอกาสโดนคำสาป",i:3,w:{cc:2,support:1,chaos:3,teleport:1},f:{lowhp:4,ironban:3,diet_special:2,complex:2}},
 {n:"Ogre",d:"ขวานตีแรงมาก ถึกมาก ไม่ติดพิษ/หิว กดสกิลคลั่ง",i:3,w:{tank:3,melee:3,burst:1,chaos:1},f:{big:4,slow:2,hungry:2}},
 {n:"Phantom",d:"สลับร่างผี ล่องหน เดินทะลุกำแพง",i:3,w:{stealth:3,teleport:2,chaos:2,night:1},f:{sunweak:3,hungry:2,lowhp:2,complex:1}},
 {n:"Otter",d:"ใต้น้ำว่ายเร็ว ตีเร็วมาก ตัวแข็งแรง พุ่งใต้น้ำ",i:3,w:{water:3,melee:2,speed:1},f:{lowhp:1,noshield:2,hungry:2,cramped:2,small:1}},
 {n:"Shaman Orc",d:"ปลุกคนตายโจมตี ระเบิดหัวกะโหลก",i:3,w:{magic:2,pets:2,chaos:1},f:{slow:1,broken:1,complex:1},broken:"ฮู้ด/ไม้เท้าอาจไม่ได้รับ"},
];
const CLASSES=[
 {n:"Lumberjack",d:"ตัดทีเดียวโค่นทั้งต้น ได้แผ่นไม้เพิ่ม",w:{build:3,simple:1}},
 {n:"Miner",d:"ขุดหินเร็ว ทุบบล็อกไม่เสียความหิว",w:{mine:3}},
 {n:"Warrior",d:"ตีแรงขึ้นทุกอาวุธ ยกโล่เดินไม่ช้า",w:{melee:2,tank:1}},
 {n:"Archer",d:"ยิงแม่นขึ้น ง้างธนูแล้วเดินเร็ว",w:{ranged:3}},
 {n:"Explorer",d:"เริ่มได้เข็มทิศ แผนที่ 9 แผ่น วิ่งไม่เสียความหิว",w:{explore:3,speed:1}},
 {n:"Rogue",d:"ย่อ 10 วิเข้าโหมดซ่อนตัว ตีจากด้านหลังแรง",w:{stealth:3,burst:1}},
 {n:"Blacksmith",d:"ของที่คราฟต์ได้บัฟ ซ่อมของถูกลง",w:{build:2,tank:1,boss:1}},
 {n:"Cleric",d:"ยาแรงและนานขึ้น enchant ได้สูงกว่าปกติ",w:{magic:2,support:2}},
 {n:"Farmer",d:"เก็บพืชได้ 2 เท่า ผงกระดูกแรง 2 เท่า",w:{farm:3}},
 {n:"Rancher",d:"ผสมพันธุ์ได้ลูก 2 ตัว ฆ่าสัตว์ได้ของเพิ่ม",w:{farm:2,pets:1}},
 {n:"Cook",d:"อาหารอิ่มนานขึ้น smoker ได้ EXP เพิ่ม",w:{farm:1,support:2,regen:1}},
 {n:"Beastmaster",d:"สัตว์เลี้ยงเลือดและแรงเพิ่มถาวร",w:{pets:3}},
];
const BLESSINGS=[
 {n:"Chiron",d:"EXP × 3 · หลังฆ่ามังกร: ฮีลแรงขึ้น เลือดเกินได้",w:{magic:2,support:1,simple:1,regen:1},f:{}},
 {n:"Vishnu",d:"เลือดฟื้นแรงตลอด · หลังฆ่ามังกร: กันดาเมจ 15%",w:{regen:3,tank:2,simple:1},f:{}},
 {n:"Amaterasu",d:"เลือดสูงสุด +10 · หลังฆ่ามังกร: เลือด +15%",w:{tank:2,regen:1,simple:2},f:{}},
 {n:"Athena",d:"เกราะ +10 · หลังฆ่ามังกร: กันดาเมจ 15%",w:{tank:3},f:{}},
 {n:"Thor",d:"ตีแรง +10 · หลังฆ่ามังกร: ดาเมจ +20%",w:{melee:2,burst:2},f:{}},
 {n:"Susanoo",d:"วิ่งเร็ว +15% · หลังฆ่ามังกร: ตีเร็ว +20%",w:{speed:3,explore:1,melee:1},f:{}},
 {n:"Loki",d:"เอื้อมไกล ย่อแล้วล่องหน ตีติดพิษ · หลังฆ่ามังกร: วาร์ปตามของที่ปา",w:{stealth:3,cc:1,teleport:1},f:{}},
 {n:"Zephyrus",d:"ตกไม่เจ็บ กระโดดสูง · หลังฆ่ามังกร: ได้ปีกบิน",w:{flight:2,speed:1,explore:1},f:{}},
 {n:"Nyx",d:"หลบการโจมตี 20% แต่กลางแดดตีเบาลง 30%",w:{stealth:2,night:2,chaos:1},f:{sunweak:1}},
 {n:"Hephaestus",d:"ตีเพิ่ม 2% ของเลือดศัตรู (ดีกับบอส)",w:{boss:3,melee:1},f:{}},
 {n:"Arthur",d:"ตี undead แรง +60% · หลังฆ่ามังกร: อาวุธได้ไฟและตีเร็วขึ้น",w:{boss:2,melee:1,support:1},f:{}},
 {n:"Baba Yaga",d:"ตีแล้วศัตรูอ่อนแรง + wither (ใช้กับการตี)",w:{cc:2,melee:1},f:{}},
 {n:"Ra",d:"อาวุธได้ดาเมจไฟ +10 ตอนอยู่กลางแดด (ใช้กับการตี ไม่ใช่เวท)",w:{nether:1,burst:1,melee:2},f:{needsun:1}},
 {n:"Boreas",d:"ดาเมจน้ำแข็ง +9 · หลังฆ่ามังกร: +25",w:{cold:2,cc:1,magic:1},f:{}},
 {n:"Skadi",d:"เขตหนาวตีแรง +30% · หลังฆ่ามังกร: ธนู +45%",w:{ranged:3,cold:1},f:{}},
 {n:"Astraeus",d:"ดาเมจ celestial +100 (ต้องใช้อาวุธ celestial)",w:{chaos:2,burst:1},f:{}},
];

// ===== ข้อมูลเสริมของเผ่า Cisco =====
// ธีมและสไตล์ฆ่า (dot) ของแต่ละเผ่า รวมเข้า w ตอนเริ่ม
const EXTRA={
 "Wood Elf":{nature:3},"Avian":{nature:1,beast:1},"Arachnid":{beast:2,dot:1},"Alfiq":{beast:3},
 "High Elf (ยิงไฟ)":{nature:1,dot:1},"Elytrian":{holy:1},"Priest":{holy:3},"Plantaemancer":{nature:3,dot:2},
 "Feline":{beast:2},"Pixie":{nature:2},"Knight":{holy:2},"Paladin":{holy:3},"Valkyrie":{holy:3},
 "Enderian":{dark:1,void:3},"Yeti":{beast:3},"Dwarf":{},"Incubus":{dark:2,dot:2},"Fae":{nature:3},
 "Arachnae":{beast:2,dot:3,dark:1},"High Elf (จอมเวท)":{nature:1},"Siren":{nature:2},"Wild Cat":{beast:3},
 "Bird of Paradise":{beast:2,holy:1},"Thief":{dark:1},"Demi-God Lux":{holy:3},"Demi-God Umbra":{dark:3,void:1},
 "Frijani Drengr":{beast:1},"Venthari Sharpshooter":{},"Lumerian Justicar":{holy:3},"Anthraxi Dark Mage":{dark:3},
 "Pyriosi Phoenix Knight":{holy:1,dot:2},"Merling":{nature:2},"Blazeborn":{dot:1},"Revenant":{dark:3},
 "Moon Elf":{dark:2},"Plague Victim":{dark:3,dot:3},"Gorgon":{dark:2,dot:2},"Banshee":{dark:3},
 "Ogre":{beast:2},"Phantom":{dark:2,shift:1},"Otter":{beast:2,nature:2},"Shaman Orc":{dark:2,dot:1},"Shulk":{void:2}
};
// ตายยาก/ของไม่หลุด (safe) และจังหวะเกม (early = ได้ของ/พลังตั้งแต่เริ่ม, late = พลังโตตามเวท/ของ)
const EXTRA2={"Shulk":{safe:2},"Thief":{safe:2},"Plague Victim":{safe:2},"Yeti":{safe:1},"Ogre":{safe:1},
 "Priest":{early:2},"Elytrian":{early:2},"Knight":{early:1},"Paladin":{early:1},"Valkyrie":{early:1},"Enderian":{early:1},
 "High Elf (จอมเวท)":{late:2},"Lumerian Justicar":{late:2},"Anthraxi Dark Mage":{late:2},"Revenant":{late:1},"Shaman Orc":{late:1}};
ORIGINS.forEach(o=>{o.m="Cisco"; for(const e of [EXTRA[o.n]||{},EXTRA2[o.n]||{}]) for(const k in e) o.w[k]=(o.w[k]||0)+e[k];});
ORIGINS.push(...ADDON_ORIGINS);

// พร: t = บัฟการสู้แบบไหน (melee = บัฟการตี, ranged = บัฟธนู, any = ใช้ได้ทุกสาย), cv = จุดอ่อนที่ช่วยปิด, x = ธีม
const BX={
 Chiron:{t:"any",cv:{},x:{nature:1}}, Vishnu:{t:"any",cv:{lowhp:2,takedmg:2,noarmor:1},x:{holy:1}},
 Amaterasu:{t:"any",cv:{lowhp:2},x:{holy:1}}, Athena:{t:"any",cv:{takedmg:2,noheavyarmor:2,noarmor:1},x:{holy:1}},
 Thor:{t:"melee",cv:{},x:{}}, Susanoo:{t:"any",cv:{slow:2},x:{}}, Loki:{t:"melee",cv:{},x:{dark:2,dot:2}},
 Zephyrus:{t:"any",cv:{},x:{}}, Nyx:{t:"any",cv:{lowhp:2,noarmor:2,noheavyarmor:1,takedmg:1},x:{dark:3}},
 Hephaestus:{t:"melee",cv:{},x:{}}, Arthur:{t:"any",cv:{undeadweak:3},x:{holy:3}}, "Baba Yaga":{t:"melee",cv:{},x:{dark:1,dot:2}},
 Ra:{t:"melee",cv:{},x:{holy:1,dot:1}}, Boreas:{t:"melee",cv:{},x:{}}, Skadi:{t:"ranged",cv:{},x:{nature:1}}, Astraeus:{t:"any",cv:{},x:{void:1}}
};
// พรที่มีโบนัส "หลังฆ่ามังกร" = late · พรที่แรงทันที = early · พรที่ทำให้ตายยาก = safe
const BX2={Chiron:{late:2},Vishnu:{late:2,safe:2},Amaterasu:{late:1,early:1,safe:2},Athena:{late:1,early:1,safe:2},Thor:{late:1,early:1},
 Susanoo:{late:2},Loki:{late:2},Zephyrus:{late:3},Nyx:{early:1,safe:1},Hephaestus:{early:2},Arthur:{late:2},"Baba Yaga":{early:2},
 Ra:{early:2},Boreas:{late:2},Skadi:{late:2},Astraeus:{late:3}};
BLESSINGS.forEach(b=>{const e=BX[b.n]; b.m="Cisco"; b.t=e.t; b.cv=e.cv; for(const x of [e.x,BX2[b.n]||{}]) for(const k in x) b.w[k]=(b.w[k]||0)+x[k];});
BLESSINGS.find(b=>b.n==="Ra").need="sun";
ADDON_BLESSINGS.forEach(b=>{for(const k in b.x) b.w[k]=(b.w[k]||0)+b.x[k]; BLESSINGS.push(b);});
// อาชีพ: t เหมือนพร, cv = จุดอ่อนที่ช่วยปิด
const CX={Warrior:{t:"melee",cv:{}},Archer:{t:"ranged",cv:{}},Rogue:{t:"any",cv:{}},Cook:{t:"any",cv:{hungry:2,diet_special:1}},
 Explorer:{t:"any",cv:{hungry:1}},Miner:{t:"any",cv:{hungry:1,weakmine:2}},Cleric:{t:"any",cv:{lowhp:1}},Beastmaster:{t:"any",cv:{}}};
CLASSES.forEach(c=>{const e=CX[c.n]||{t:"any",cv:{}}; c.m="Cisco"; c.t=e.t; c.cv=e.cv;});
CLASSES.find(c=>c.n==="Explorer").w.early=2; CLASSES.find(c=>c.n==="Blacksmith").w.late=2; CLASSES.find(c=>c.n==="Cleric").w.late=1;
CLASSES.push(...ADDON_CLASSES);
// คู่ที่ขัดกันเอง (นอกจากกฎทั่วไปใน clash())
const CONFLICT=[["Pyriosi Phoenix Knight","Nyx"],["Pyriosi Phoenix Knight","Boreas"],["Plantaemancer","Nyx"],["Phoenix","Boreas"],["Phoenix","Nyx"]];
