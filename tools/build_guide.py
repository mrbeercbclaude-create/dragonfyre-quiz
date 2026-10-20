import re,json,subprocess
Q='C:/Users/mrbee/Downloads/dragonfyre-quiz/'
# 1) quiz data (names, mod, impact, short desc, tags) via node
js=r'''
const fs=require('fs');const src=['addons.js','data.js','app.js'].map(f=>fs.readFileSync('%s'+f,'utf8')).join('\n');
const el={outerHTML:'',innerHTML:'',querySelectorAll:()=>[]};global.document={getElementById:()=>el};global.location={hash:'',pathname:'/'};global.history={replaceState(){}};global.scrollTo=()=>{};
eval(src.replace(/\nrender\(\);\s*$/,'')+';process.stdout.write(JSON.stringify({P,F,ORIGINS,CLASSES,BLESSINGS}))');
'''%Q
d=json.loads(subprocess.run(['node','-e',js],capture_output=True,text=True,encoding='utf-8').stdout)
# 2) translations of addon powers
tr={};cur=None
for f in ['tr1.txt','tr2.txt','tr3.txt']:
    for l in open(f,encoding='utf-8'):
        l=l.rstrip('\n')
        if l.startswith('@'): cur=l[1:]; tr[cur]=[]
        elif l: t,rest=l[0],l[2:]; n,ds=rest.split('|',1); tr[cur].append({'t':t,'n':n.strip(),'d':ds.strip()})
tr['kitsune:kitsunewhite']=tr['kitsune:kitsunered']
# addon origin name -> id (from csv)
import csv
idmap={}
for x in csv.DictReader(open('origins.csv',encoding='utf-8')): idmap.setdefault(x['ชื่อ'],x['ID'])
alias={'Druid (Magic)':'dragon_origins:druid','Druid (Mythic)':'mythic:druid','Kitsune (Mythic)':'mythic:kitsune','Valkyrie (Mythic)':'mythic:valkyrie',
 'Kitsune':'kitsune:kitsunered','Dwarf (SF)':'simply_fantastical_origins:dwarf','Ogre (SF)':'simply_fantastical_origins:ogre','Elf (SF)':'simply_fantastical_origins:elf',
 'Demi-God (O++)':'origins-plus-plus:demi_god','Undead (Magic)':'dragon_origins:undead','Frog (O++)':'origins-plus-plus:frog','Pixie (O++)':'origins-plus-plus:pixie',
 'Illusioner':'origins-plus-plus:illusioner/illusioner_novice','Voidling':'origins-plus-plus:voidling/voidling','Jack':'fairytale:jack_beanstalk',
 'Green Dragon':'dragon_origins:green_dragon_origin','Red Dragon':'dragon_origins:red_dragon','Child of Cthulhu':'origins-plus-plus:child_of_cthulhu','Hero of the Wild':'origins-plus-plus:hero_of_the_wild'}
# 3) Cisco powers from Thai guide tables
md=open('C:/Users/mrbee/Downloads/cisco-dragonfyre/knowledge/origins-guide-th.md',encoding='utf-8').read()
cis={}
sec=md.split('## พรจากเทพ')[0]
for row in re.findall(r'^\| ([^|]+) \| ([^|]+) \| ([^|]+) \|$',sec,re.M):
    n=row[0].strip()
    if n in ('เผ่า','---'): continue
    cis[n]=row
def strip(s): return re.sub(r'\*\*','',s).strip()
def cisco_powers(o):
    key=next((k for k in cis if k==o['n'] or k.split(' (')[0]==o['n'].split(' (')[0] and (k.endswith(o['n'][o['n'].find('('):]) if '(' in o['n'] else True)),None)
    if not key: return []
    _,good,bad=cis[key]; L=[]
    for g in good.split(' · '): L.append({'t':'*' if re.search(r'กดสกิล|ปุ่ม [A-Z]',g) else '+','n':'','d':strip(g)})
    for b in bad.split(' · '):
        b=strip(b)
        if b.startswith('ไม่มี'): continue
        L.append({'t':'-','n':'','d':b})
    return L
out=[]
miss=[]
for o in d['ORIGINS']:
    if o['m']=='Cisco': pw=cisco_powers(o)
    else:
        oid=alias.get(o['n']) or idmap.get(o['n'])
        pw=tr.get(oid,[])
    if not pw: miss.append(o['n'])
    tags=[k for k,v in sorted(o['w'].items(),key=lambda kv:-kv[1]) if v>=1 and k not in('simple','early','late','safe','chaos')]
    out.append({'n':o['n'],'m':o['m'],'i':o['i'],'d':o['d'],'p':pw,'tg':tags,'ev':o.get('ev',''),'x':o.get('x',''),'br':o.get('broken',''),
                'f':[k for k,v in o['f'].items() if k!='broken' and v>=3]})
print('missing powers:',miss)
cls=[{'n':c['n'],'m':c['m'],'d':c['d'],'no':c.get('no',[])} for c in d['CLASSES']]
bl=[{'n':b['n'],'m':b['m'],'d':b['d']} for b in d['BLESSINGS']]
# Cisco full blessing two-stage + class detail from md
for row in re.findall(r'^\| ([^|]+) \| ([^|]+) \| ([^|]+) \|$',md.split('## พรจากเทพ')[1].split('## อาชีพ')[0],re.M):
    for b in bl:
        if b['n']==row[0].strip(): b['now']=strip(row[1]); b['late']=strip(row[2])
for row in re.findall(r'^\| ([^|]+) \| ([^|]+) \|$',md.split('## อาชีพ')[1].split('## เลือกไม่ถูก')[0],re.M):
    for c in cls:
        if c['n']==row[0].strip(): c['full']=strip(row[1])
G={'P':d['P'],'F':d['F'],'O':out,'C':cls,'B':bl}
open(Q+'guide_data.js','w',encoding='utf-8').write('// ข้อมูลคู่มือ สร้างจาก build_guide.py (แปลพลังทุกอันจาก jar + คู่มือ Cisco)\nconst G='+json.dumps(G,ensure_ascii=False,separators=(',',':'))+';\n')
json.dump(G,open('guide.json','w',encoding='utf-8'),ensure_ascii=False)
print(len(out),'origins',sum(len(o['p']) for o in out),'powers',len(cls),len(bl))
