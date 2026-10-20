(()=>{'use strict';
const S=window.SITE;if(!S){document.body.textContent='Missing data/content.js';return}
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const val=v=>typeof v==='string'&&v.trim()&&!/^YOUR_/.test(v.trim())?v.trim():'';
const arr=a=>Array.isArray(a)?a.filter(x=>x&&(typeof x!=='string'||val(x))):[];
const fp=v=>{v=val(v);if(!v||/^(javascript|data):/i.test(v))return '';v=v.replace(/^\.?\//,'');try{return encodeURI(decodeURI(v))}catch(e){return v}};
const url=v=>{v=val(v);try{const u=new URL(v);return /^(https?:|mailto:|tel:)$/.test(u.protocol)?u.href:''}catch(e){return ''}};
const P={mail:'<path d="M3 5h18v14H3z"/><path d="M3 6l9 7 9-7"/>',phone:'<path d="M5 3h4l2 5-2.5 1.5a11 11 0 005 5L15 12l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z"/>',linkedin:'<path d="M4 9h4v11H4zM6 4a2 2 0 110 4 2 2 0 010-4zM10 9h4v2c1-2 6-3 6 2v7h-4v-6c0-3-2-2-2 0v6h-4z"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-4a3.4 3.4 0 00-1-2.6c3-.3 6.4-1.5 6.4-7A5.4 5.4 0 0020 4.8 5 5 0 0019.9 1S18.7.7 16 2.5a13.4 13.4 0 00-7 0C6.3.7 5.1 1 5.1 1A5 5 0 005 4.8 5.4 5.4 0 003.5 8.5c0 5.5 3.3 6.7 6.4 7a3.4 3.4 0 00-1 2.6V22"/>',youtube:'<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',download:'<path d="M12 3v12m-5-4l5 5 5-5M4 20h16"/>',home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',pin:'<path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',up:'<path d="M6 15l6-6 6 6"/>',play:'<path d="M8 5l11 7-11 7z" fill="currentColor"/>',ext:'<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',cap:'<path d="M2 9l10-5 10 5-10 5zM6 11v5c3 3 9 3 12 0v-5"/>',file:'<path d="M6 3h8l4 4v14H6zM14 3v4h4"/>'};
const ic=n=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;
const chips=a=>arr(a).map(t=>`<span class="chip">${esc(t)}</span>`).join('');
const chipRow=a=>arr(a).length?`<div class="chips">${chips(a)}</div>`:'';
const meta=a=>{const t=a.map(val).filter(Boolean).join(' | ');return t?`<p class="mute">${esc(t)}</p>`:''};
const ul=a=>arr(a).length?`<ul>${arr(a).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'';
const para=v=>val(v)?`<p>${esc(v)}</p>`:'';
const extBtn=(u,t,i,cls='btn ghost')=>url(u)?`<a class="${cls}" href="${esc(url(u))}" target="_blank" rel="noopener noreferrer">${i?ic(i):''}${esc(t)}</a>`:'';

/* ---- one reusable gallery + lightbox ---- */
const G=[];
const norm=(items,alt)=>arr(items).map(i=>typeof i==='string'?{src:i,alt:alt}:{src:i.src,alt:i.alt||alt}).filter(i=>fp(i.src));
const th=(g,i,it,cls='thumb')=>`<button type="button" class="${cls}" data-g="${g}" data-i="${i}" aria-label="Enlarge photo: ${esc(it.alt||'')}"><img src="${esc(fp(it.src))}" alt="${esc(it.alt||'')}" loading="lazy" onerror="this.parentNode.hidden=true"></button>`;
const gal=(items,alt,from=0)=>{const l=norm(items,alt);if(l.length<=from)return '';const g=G.push(l)-1;return `<div class="gal">${l.map((it,i)=>i>=from?th(g,i,it):'').join('')}</div>`};
const lb=$('#lb'),lbi=$('#lb-img');let cur=null;
function show(g,i){const L=G[g];if(!L)return;const n=(i+L.length)%L.length;cur={g,i:n};lbi.src=fp(L[n].src);lbi.alt=L[n].alt||'';
$('#lb-cap').textContent=(L[n].alt||'')+(L.length>1?` (${n+1}/${L.length})`:'');$$('.lb-nav',lb).forEach(b=>b.hidden=L.length<2);if(!lb.open)lb.showModal()}
lbi.onerror=()=>{$('#lb-cap').textContent='Image not found. Check the file name and path in content.js.'};
$('.prev',lb).onclick=()=>show(cur.g,cur.i-1);$('.next',lb).onclick=()=>show(cur.g,cur.i+1);$('.lb-x',lb).onclick=()=>lb.close();
lb.addEventListener('keydown',e=>{if(!cur)return;if(e.key==='ArrowLeft')show(cur.g,cur.i-1);if(e.key==='ArrowRight')show(cur.g,cur.i+1)});
lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});

/* ---- sections ---- */
const names=a=>arr(a).map(x=>typeof x==='string'?x:x.name);
const R={
about:()=>arr(S.about).map(p=>`<div class="about">${para(p)}</div>`).join(''),
skills:()=>arr(S.skills).filter(c=>names(c.items).length).map(c=>`<div class="card skillc"><h3>${esc(c.category)}</h3>${chipRow(names(c.items))}</div>`).join('')&&`<div class="grid">${arr(S.skills).filter(c=>names(c.items).length).map(c=>`<div class="card skillc rv"><h3>${esc(c.category)}</h3>${chipRow(names(c.items))}</div>`).join('')}</div>`,
experience:()=>{const L=arr(S.experience),T=[...new Set(L.map(e=>val(e.type)||'Experience'))];
return T.map(t=>`<h3 class="sub">${esc(t)}</h3><div class="tl">${L.filter(e=>(val(e.type)||'Experience')===t).map(e=>`<article class="rv"><h4>${esc(e.role)}${val(e.org)?` <span class="mute">· ${esc(e.org)}</span>`:''}</h4>${meta([e.place,e.date])}${para(e.text)}${ul(e.highlights||e.points)}${chipRow(e.technologies||e.tech)}${gal(e.images,e.org)}${extBtn(e.link,'Learn more','ext')}</article>`).join('')}</div>`).join('')},
projects:()=>{const L=arr(S.projects).filter(p=>val(p.title));if(!L.length)return '';const cats=[...new Set(L.map(p=>val(p.category)).filter(Boolean))];
return `${cats.length>1?`<div class="filters" role="group" aria-label="Project categories"><button aria-pressed="true" data-c="">All</button>${cats.map(c=>`<button aria-pressed="false" data-c="${esc(c)}">${esc(c)}</button>`).join('')}</div>`:''}<div class="grid pgrid">${L.map(p=>`<button class="card pc rv" data-p="${S.projects.indexOf(p)}" data-cat="${esc(val(p.category))}" aria-label="Open project: ${esc(p.title)}"><div class="im">${ic('cap')}${fp(p.image)?`<img src="${esc(fp(p.image))}" alt="${esc(p.title)}" loading="lazy" onerror="this.remove()">`:''}</div><div class="bd"><span class="mute">${esc([p.year,p.category].map(val).filter(Boolean).join(' | '))}</span><h3>${esc(p.title)}</h3>${para(p.summary)}${chipRow(p.technologies)}<span class="more">Explore project →</span></div></button>`).join('')}</div>`},
education:()=>`<div class="tl now">${arr(S.education).map(e=>`<article class="rv"><h3>${esc(e.degree)}${e.current?'<span class="badge">Current</span>':''}</h3>${para(e.field)}${meta([e.school,e.place,e.date])}${chipRow(e.areas)}</article>`).join('')}</div>`,
volunteering:()=>`<div class="grid">${arr(S.volunteering).map(v=>`<div class="card rv"><h3>${esc(v.role)}</h3>${meta([v.org,v.date])}${para(v.text)}${chipRow(v.skills)}${gal(v.images,v.org)}${extBtn(v.link,'Learn more','ext')}</div>`).join('')}</div>`,
languages:()=>`<div class="langs">${arr(S.languages).map(l=>`<div class="lang"><b>${esc(l.name)}</b><span>${esc(val(l.level))}${val(l.cefr)?` (${esc(l.cefr)})`:''}</span></div>`).join('')}</div>`,
documents:()=>{const D=arr(S.documents).filter(d=>fp(d.file));return D.length?`<p class="mute dnote">Choose a language. Documents open in a new tab for preview; use the download icon to save a copy.</p><div class="docs">${D.map(d=>`<div class="card doc rv"><div class="dtx"><span class="dic">${ic('file')}</span><div><h3>${esc(d.label)}</h3><p class="mute">${esc([d.kind,d.language].map(val).filter(Boolean).join(' · '))}</p></div></div><div class="acts"><a class="btn" href="${esc(fp(d.file))}" target="_blank" rel="noopener noreferrer">${ic('ext')}Open</a><a class="btn ghost" href="${esc(fp(d.file))}" download aria-label="Download ${esc(d.label)}">${ic('download')}</a></div></div>`).join('')}</div>`:''},
contact:()=>{const em=val(S.email),ph=val(S.phone),li=url(S.linkedin),gh=S.showGithub===true&&url(S.github);
return `<div class="ctr"><p>Interested in collaborating, internships, alternance or engineering opportunities? Feel free to get in touch.</p><div class="crow">${em?`<a class="btn" href="mailto:${esc(em)}">${ic('mail')}${esc(em)}</a>`:''}${ph?`<a class="btn ghost" href="tel:${esc(ph.replace(/\s/g,''))}">${ic('phone')}${esc(ph)}</a>`:''}${extBtn(li,'LinkedIn','linkedin')}${gh?extBtn(gh,'GitHub','github'):''}</div></div>`}};

/* ---- page ---- */
const ini=S.name.split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase();
let html=`<section id="home" class="hero"><div class="w"><div><h1>${esc(S.name)}</h1><p>${esc(S.title)}</p>${para(S.statement).replace('<p>','<p class="st">')}<div class="tags">${val(S.studying)?`<span>${ic('cap')}${esc(S.studying)}</span>`:''}${val(S.location)?`<span>${ic('pin')}${esc(S.location)}</span>`:''}${val(S.availability)?`<span class="status">${esc(S.availability)}</span>`:''}</div>
<div class="acts"><a class="btn" href="#projects">View projects</a><a class="btn ghost" href="#documents">${ic('file')}CV &amp; Documents</a><a class="btn ghost" href="#contact">${ic('mail')}Contact me</a></div></div>${fp(S.photo)?`<div class="ph"><span aria-hidden="true">${esc(ini)}</span><img src="${esc(fp(S.photo))}" alt="Portrait of ${esc(S.name)}" onerror="this.remove()"></div>`:''}</div></section>`;
const nav=[['home','Home']];
arr(S.sectionOrder).forEach((id,n)=>{const c=S.custom&&S.custom[id];const title=c?c.title:(S.sectionTitles||{})[id]||id;
const body=c?`<div class="grid">${arr(c.items).map(i=>`<div class="card rv"><h3>${esc(i.title)}</h3>${meta([i.meta])}${para(i.text)}${extBtn(i.link,'Open','ext')}</div>`).join('')}</div>`:(R[id]?R[id]():'');
if(!body)return;html+=`<section id="${esc(id)}" class="${n%2?'dark':''}"><div class="w"><h2>${esc(title)}</h2>${body}</div></section>`;nav.push([id,id==='volunteering'?'Volunteering':id==='documents'?'CV & Documents':title])});
$('#app').innerHTML=html;
$('#links').innerHTML=nav.map(n=>`<li><a href="#${esc(n[0])}">${esc(n[1])}</a></li>`).join('');
$('#logo').innerHTML=ic('home')+esc(S.name);$('#up').innerHTML=ic('up');
const soc=[['mail','Email',val(S.email)?'mailto:'+S.email:''],['phone','Phone',val(S.phone)?'tel:'+S.phone.replace(/\s/g,''):''],['linkedin','LinkedIn',url(S.linkedin)],['github','GitHub',S.showGithub===true?url(S.github):'']].filter(s=>s[2]);
$('#foot').innerHTML=`<b>${esc(S.name)}</b><br>${esc(S.title)} | ${esc(S.location)}<div class="soc">${soc.map(s=>`<a href="${esc(s[2])}" ${/^https/.test(s[2])?'target="_blank" rel="noopener noreferrer"':''} aria-label="${s[1]}">${ic(s[0])}</a>`).join('')}</div>&copy; ${new Date().getFullYear()} ${esc(S.name)}`;

/* ---- behaviour ---- */
const links=$('#links'),b=$('#burger');
b.onclick=()=>{const o=links.classList.toggle('open');b.setAttribute('aria-expanded',o)};
links.onclick=e=>{if(e.target.closest('a')){links.classList.remove('open');b.setAttribute('aria-expanded','false')}};
if('IntersectionObserver'in window){
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('#links a').forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});$$('main section').forEach(s=>so.observe(s));
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');ro.unobserve(e.target)}}),{threshold:.1});$$('.rv').forEach(e=>ro.observe(e))}else $$('.rv').forEach(e=>e.classList.add('vis'));
const onScroll=()=>{const m=document.documentElement.scrollHeight-innerHeight;$('#bar').style.width=(m>0?scrollY/m*100:0)+'%';$('#up').classList.toggle('show',scrollY>600)};addEventListener('scroll',onScroll,{passive:true});onScroll();

const dlg=$('#dlg');
dlg.addEventListener('click',e=>{if(e.target===dlg||e.target.closest('.x'))dlg.close()});
const ytId=u=>{const m=String(u||'').match(/(?:youtube\.com\/(?:watch\?(?:[^#]*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/);return m?m[1]:''};
const canEmbed=/^https?:$/.test(location.protocol);
function video(p){const id=ytId(p.youtube);if(!id)return '';const watch=url(p.youtube)||'https://www.youtube.com/watch?v='+id;const bg=`background-image:url(https://img.youtube.com/vi/${id}/hqdefault.jpg)`;
return `<div class="vid">${canEmbed?`<button type="button" data-yt="${id}" style="${bg}" aria-label="Play video here">${ic('play')}</button>`:`<a href="${esc(watch)}" target="_blank" rel="noopener noreferrer" style="${bg}" aria-label="Watch on YouTube">${ic('play')}</a>`}</div><p class="vnote mute">${canEmbed?'If the video does not play here (some videos block embedding), use the YouTube button.':'Embedded playback works on the published website. Here it opens YouTube.'}</p>`}
function project(p){const L=norm([p.image].concat(arr(p.gallery)),p.title),hasCover=!!fp(p.image),g=L.length?G.push(L)-1:-1;
const det=[['My role',p.role],['Problem',p.problem],['Objective',p.objective],['Design & methodology',p.approach||p.design],['Implementation',p.implementation],['Control & programming',p.control],['Results',p.outcome||p.result],['Lessons learned',p.learned]].filter(d=>val(d[1])).map(d=>`<div><h4>${d[0]}</h4><p>${esc(d[1])}</p></div>`).join('');
const rep=fp(p.report);const yid=ytId(p.youtube);
const links=[yid?extBtn(p.youtube,'Watch on YouTube','youtube','btn'):'',extBtn(p.github,'Source code','github'),rep?`<a class="btn ghost" href="${esc(rep)}" target="_blank" rel="noopener noreferrer">${ic('file')}Project report (PDF)</a>`:''].join('');
dlg.innerHTML=`<div class="dl"><div class="dl-head"><div><span class="mute">${esc([p.year,p.category].map(val).filter(Boolean).join(' | '))}</span><h3>${esc(p.title)}</h3></div><button class="x" aria-label="Close project">${ic('x')}</button></div><div class="dl-body">${para(p.summary)}${chipRow(p.technologies)}${hasCover&&g>=0?th(g,0,L[0],'cover'):''}${video(p)}${det?`<div class="det">${det}</div>`:''}${g>=0&&L.length>(hasCover?1:0)?`<h4 class="gh">Gallery</h4><div class="gal">${L.map((it,i)=>i>=(hasCover?1:0)?th(g,i,it):'').join('')}</div>`:''}${links.trim()?`<div class="acts dlinks">${links}</div>`:''}</div></div>`;
dlg.showModal();dlg.scrollTop=0}
document.addEventListener('click',e=>{const t=e.target;
const th=t.closest('[data-g]');if(th){show(+th.dataset.g,+th.dataset.i);return}
const pc=t.closest('[data-p]');if(pc){project(S.projects[+pc.dataset.p]);return}
const yt=t.closest('[data-yt]');if(yt){yt.parentNode.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${yt.dataset.yt}?rel=0&autoplay=1" title="Project video" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;return}
const fb=t.closest('.filters button');if(fb){$$('button',fb.parentNode).forEach(x=>x.setAttribute('aria-pressed',x===fb));$$('[data-p]').forEach(c=>c.hidden=!!fb.dataset.c&&c.dataset.cat!==fb.dataset.c)}});
})();
