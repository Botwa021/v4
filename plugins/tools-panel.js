const fetch = require('node-fetch')
const crypto = require('crypto')
const { sizeFormatter } = require('human-readable')

const format = sizeFormatter()

const linkgc = 'https://chat.whatsapp.com/FmhN8kxZf9f9qjkCZCBF97' // Group
const domain = 'https://zxoostore.mypanell.icu' // Domain
const apikey = 'ptla_HmkdYs2eBXrMboxJMm3zeQFXW35CCLEEVs7RmFpqESl'; // Key PTLA
const c_apikey = 'ptlc_fYeMgb2g9B1VghNTdfd8WFKQWQ9bNOjKSeNRHvMzxuv' // Key PTLC

function _0x37b8(){const _0x259c42=['uuid','```','detusr','4KRLFPW','\x0aUPDATED\x20AT:\x20','/api/application/users?page=','current_page','listusr','\x0aDESCRIPTION:\x20','last_name','*SUCCESSFULLY\x20ADD\x20SERVER*\x0a\x0aTYPE:\x20','memory','listusr\x202','chat','length','932TNYVCm','disk','1664271ycTrdR','updated_at','onWhatsApp','split','toString','restartsrv','next','username','listsrv','first_name','\x20MB\x0aCPU:\x20','\x0aCPU:\x20','owner','ID\x20nya\x20mana?','409080RVvESl','DELETE','startsrv','/api/client/servers/','Status:\x20','root_admin','total_pages','\x20USER\x20DETAILS*\x0a\x0a```ID:\x20','pagination','updatesrv','listsrv\x202','help','*Format\x20salah!*\x0a\x0aPenggunaan:\x0a','\x20email,username,name,number/tag','detsrv\x20','email','errors','\x0aBerikut\x20list\x20user\x20panel\x20anda','Page\x202','current_state','POST','object','/reinstall','push','detsrv','sendMessage','/power','⏩\x20NEXT','%\x20/\x20','𝗟𝗶𝘀𝘁\x20𝗬𝗼𝘂𝗿\x20𝗦𝗲𝗿𝘃𝗲𝗿\x27𝘀','meta','name','rowner','/resources','\x0a\x0aID:\x20','randomBytes','startup','addsrv','*SUCCESSFULLY\x20','\x0aCREATED\x20AT:\x20','743810RTfCJj','\x0aPage:\x20','\x0aPASSWORD:\x20','/api/application/nests/5/eggs/','\x20THE\x20SERVER*','Berikut\x20list\x20server\x20panel\x20anda','reply','mentionedJid','\x0aMEMORY:\x20','Bearer\x20','reinstall','status','/api/application/servers/','attributes','\x20name,desc,userId,eggId,locId,memory/disk,cpu','toUpperCase','*SUCCESSFULLY\x20DELETE\x20THE\x20SERVER*','8WgMgaU','859smcrjR','Memb','language','created_at','json','Page:\x20','stopsrv','dfail','\x0a\x0aLOGIN:\x20','application/json','GET','npm','*SERVER\x20NOT\x20FOUND*','\x0aUUID:\x20','%\x0aCREATED\x20AT:\x20','Unlimited','cpu','data','1684424SbFlQt','/api/application/users/','*USER\x20NOT\x20FOUND*','node\x20run.js','count','limits','*BERIKUT\x20DETAIL\x20AKUN\x20PANEL\x20ANDA*\x0a\x0aEMAIL:\x20','\x20/\x20','\x20MB\x0aDISK:\x20','description','delsrv','links','addusr','/api/application/servers','\x0aDISK:\x20','*SUCCESSFULLY\x20UPDATED\x20THE\x20SERVER*\x0a\x0aTYPE:\x20','resources','delusr','cpu_absolute','replace','stringify','55VQAzPo','hex','\x0aNAME:\x20','\x0aADMIN:\x20','quoted','detusr\x20','quay.io/hexel_hosting/nodejs_17','swap','150345jgKlgj','*REINSTALLING\x20THE\x20SERVER..*','\x0aUSERNAME:\x20','srv','419035gPEFDk','2023\x20©\x20Dann-MD','\x0aEMAIL:\x20'];_0x37b8=function(){return _0x259c42;};return _0x37b8();}const _0x40e00c=_0x54ce;(function(_0x2b7f84,_0x275fd8){const _0x2b7507=_0x54ce,_0x21af37=_0x2b7f84();while(!![]){try{const _0x48ecb0=-parseInt(_0x2b7507(0x1dc))/0x1*(-parseInt(_0x2b7507(0x221))/0x2)+-parseInt(_0x2b7507(0x223))/0x3+-parseInt(_0x2b7507(0x215))/0x4*(parseInt(_0x2b7507(0x20f))/0x5)+parseInt(_0x2b7507(0x1a2))/0x6+parseInt(_0x2b7507(0x1ee))/0x7+parseInt(_0x2b7507(0x1db))/0x8*(-parseInt(_0x2b7507(0x20b))/0x9)+parseInt(_0x2b7507(0x1ca))/0xa*(parseInt(_0x2b7507(0x203))/0xb);if(_0x48ecb0===_0x275fd8)break;else _0x21af37['push'](_0x21af37['shift']());}catch(_0xa755e7){_0x21af37['push'](_0x21af37['shift']());}}}(_0x37b8,0x67f0e));let handler=async(_0x19d82d,{conn:_0xbabce,args:_0x527e70,text:_0x307dde,usedPrefix:_0xa7457f,command:_0x40ab87,isROwner:_0x5ae66b})=>{const _0x2b667b=_0x54ce;let _0x1286d6=_0xa7457f;switch(_0x40ab87){case _0x2b667b(0x1fa):{if(!_0x5ae66b)return global['dfail']('rowner',_0x19d82d,_0xbabce);let _0x4a387c=_0x307dde['split'](',');if(_0x4a387c['length']<0x3)return _0x19d82d[_0x2b667b(0x1d0)](_0x2b667b(0x1ae)+(_0xa7457f+_0x40ab87)+_0x2b667b(0x1af));let _0x116002=_0x4a387c[0x0],_0xcf181e=_0x4a387c[0x1],_0x5d1690=_0x4a387c[0x2],_0x4d98ed=_0x19d82d[_0x2b667b(0x207)]?_0x19d82d[_0x2b667b(0x207)]['sender']:_0x4a387c[0x3]?_0x4a387c[0x3]['replace'](/[^0-9]/g,'')+'@s.whatsapp.net':_0x19d82d[_0x2b667b(0x1d1)][0x0];if(!_0x4d98ed)return _0x19d82d[_0x2b667b(0x1d0)](_0x2b667b(0x1ae)+(_0xa7457f+_0x40ab87)+'\x20email,username,name,number/tag');let _0x56ad08=(await _0xbabce[_0x2b667b(0x225)](_0x4d98ed[_0x2b667b(0x226)]`@`[0x0]))[0x0]||{},_0x5e18a5=_0x56ad08['exists']?crypto[_0x2b667b(0x1c5)](0x5)['toString'](_0x2b667b(0x204)):_0x4a387c[0x5],_0xe1db6=await fetch(domain+'/api/application/users',{'method':'POST','headers':{'Accept':_0x2b667b(0x1e5),'Content-Type':_0x2b667b(0x1e5),'Authorization':'Bearer\x20'+apikey},'body':JSON[_0x2b667b(0x202)]({'email':_0x116002,'username':_0xcf181e,'first_name':_0x5d1690,'last_name':_0x2b667b(0x1dd),'language':'en','password':_0x5e18a5[_0x2b667b(0x227)]()})}),_0x3ae844=await _0xe1db6[_0x2b667b(0x1e0)]();if(_0x3ae844['errors'])return _0x19d82d[_0x2b667b(0x1d0)](JSON[_0x2b667b(0x202)](_0x3ae844[_0x2b667b(0x1b2)][0x0],null,0x2));let _0x1f85c2=_0x3ae844[_0x2b667b(0x1d7)],_0x2ae42e=await _0xbabce[_0x2b667b(0x1d0)](_0x19d82d[_0x2b667b(0x21f)],'\x0a*SUCCESSFULLY\x20ADD\x20USER*\x0a\x0aTYPE:\x20user\x0a\x0aID:\x20'+_0x1f85c2['id']+_0x2b667b(0x1e9)+_0x1f85c2['uuid']+_0x2b667b(0x20d)+_0x1f85c2[_0x2b667b(0x22a)]+_0x2b667b(0x211)+_0x1f85c2[_0x2b667b(0x1b1)]+_0x2b667b(0x205)+_0x1f85c2['first_name']+'\x20'+_0x1f85c2[_0x2b667b(0x21b)]+'\x0aLANGUAGE:\x20'+_0x1f85c2[_0x2b667b(0x1de)]+'\x0aADMIN:\x20'+_0x1f85c2[_0x2b667b(0x1a7)]+'\x0aCREATED\x20AT:\x20'+_0x1f85c2[_0x2b667b(0x1df)]+_0x2b667b(0x1e4)+domain+'\x0a\x0a*Password\x20telah\x20dikirim\x20di\x20private\x20chat\x20@'+_0x4d98ed[_0x2b667b(0x226)]`@`[0x0]+'*',_0x19d82d,{'mentions':[_0x4d98ed]});_0xbabce['sendMessage'](_0x4d98ed,{'text':_0x2b667b(0x1f4)+_0x116002+_0x2b667b(0x20d)+_0xcf181e+_0x2b667b(0x1cc)+_0x5e18a5[_0x2b667b(0x227)]()+_0x2b667b(0x1e4)+domain+'\x0a\x0a'+linkgc});}break;case _0x2b667b(0x1ff):{if(!_0x5ae66b)return global[_0x2b667b(0x1e3)](_0x2b667b(0x1c2),_0x19d82d,_0xbabce);let _0x187181=_0x527e70[0x0];if(!_0x187181)return _0x19d82d['reply']('ID\x20nya\x20mana?');let _0x16ca34=await fetch(domain+_0x2b667b(0x1ef)+_0x187181,{'method':_0x2b667b(0x1a3),'headers':{'Accept':_0x2b667b(0x1e5),'Content-Type':_0x2b667b(0x1e5),'Authorization':_0x2b667b(0x1d3)+apikey}}),_0x277f82=_0x16ca34['ok']?{'errors':null}:await _0x16ca34['json']();if(_0x277f82[_0x2b667b(0x1b2)])return _0x19d82d['reply'](_0x2b667b(0x1f0));_0x19d82d[_0x2b667b(0x1d0)]('*SUCCESSFULLY\x20DELETE\x20THE\x20USER*');}break;case _0x2b667b(0x219):{let _0xd2f94f=_0x527e70[0x0]?_0x527e70[0x0]:'1',_0x1a0394=await fetch(domain+_0x2b667b(0x217)+_0xd2f94f,{'method':_0x2b667b(0x1e6),'headers':{'Accept':'application/json','Content-Type':_0x2b667b(0x1e5),'Authorization':'Bearer\x20'+apikey}}),_0x2aa9f2=await _0x1a0394[_0x2b667b(0x1e0)](),_0x118056=_0x2aa9f2['data'],_0x13525d=[];for(let _0x36d0de of _0x118056){let _0x486ad0=_0x36d0de[_0x2b667b(0x1d7)],_0x964d5b={'title':_0x2b667b(0x210),'rows':[{'title':_0x486ad0['id']+'.\x20'+_0x486ad0['username'],'rowId':_0xa7457f+_0x2b667b(0x208)+_0x486ad0['id'],'description':_0x486ad0[_0x2b667b(0x22c)]+'\x20'+_0x486ad0['last_name']}]};await _0x13525d[_0x2b667b(0x1b9)](_0x964d5b),_0x13525d[_0x2b667b(0x220)]===0x32&&_0x13525d[_0x2b667b(0x1b9)]({'title':'𝗟𝗶𝘀𝘁\x20𝗬𝗼𝘂𝗿\x20𝗨𝘀𝗲𝗿\x27𝘀','rows':[{'title':_0x2b667b(0x1bd),'rowId':_0xa7457f+_0x2b667b(0x21e),'description':_0x2b667b(0x1b4)}]});}const _0x1785a0={'text':_0x2b667b(0x1b3),'footer':_0x2b667b(0x1cb)+_0x2aa9f2['meta'][_0x2b667b(0x1aa)][_0x2b667b(0x218)]+'/'+_0x2aa9f2[_0x2b667b(0x1c0)]['pagination'][_0x2b667b(0x1a8)],'title':_0x2b667b(0x210),'buttonText':_0x2aa9f2['meta'][_0x2b667b(0x1aa)][_0x2b667b(0x1f2)]+'\x20User','sections':_0x13525d};await _0xbabce[_0x2b667b(0x1bb)](_0x19d82d[_0x2b667b(0x21f)],_0x1785a0,0x0);}break;case'detusr':{let _0x8b8f9f=_0x527e70[0x0],_0x5a1b5b=await fetch(domain+_0x2b667b(0x1ef)+_0x8b8f9f,{'method':_0x2b667b(0x1e6),'headers':{'Accept':_0x2b667b(0x1e5),'Content-Type':'application/json','Authorization':_0x2b667b(0x1d3)+apikey}}),_0xc5824=await _0x5a1b5b['json']();if(_0xc5824['errors'])return _0x19d82d[_0x2b667b(0x1d0)](_0x2b667b(0x1f0));let _0x22cf1d=_0xc5824[_0x2b667b(0x1d7)];_0x19d82d['reply']('*'+_0x22cf1d['username'][_0x2b667b(0x1d9)]()+_0x2b667b(0x1a9)+_0x22cf1d['id']+_0x2b667b(0x1e9)+_0x22cf1d[_0x2b667b(0x212)]+_0x2b667b(0x20d)+_0x22cf1d[_0x2b667b(0x22a)]+_0x2b667b(0x211)+_0x22cf1d[_0x2b667b(0x1b1)]+_0x2b667b(0x205)+_0x22cf1d[_0x2b667b(0x22c)]+'\x20'+_0x22cf1d[_0x2b667b(0x21b)]+'\x0aLANGUAGE:\x20'+_0x22cf1d[_0x2b667b(0x1de)]+_0x2b667b(0x206)+_0x22cf1d[_0x2b667b(0x1a7)]+_0x2b667b(0x1c9)+_0x22cf1d['created_at']+_0x2b667b(0x213));}break;case'addsrv':{if(!_0x5ae66b)return global['dfail'](_0x2b667b(0x1c2),_0x19d82d,_0xbabce);let _0x201b5b=_0x307dde['split'](',');if(_0x201b5b[_0x2b667b(0x220)]<0x7)return _0x19d82d[_0x2b667b(0x1d0)](_0x2b667b(0x1ae)+(_0xa7457f+_0x40ab87)+_0x2b667b(0x1d8));let _0x1961a1=_0x201b5b[0x0],_0x99d66c=_0x201b5b[0x1]||'',_0x121ca2=_0x201b5b[0x2],_0xf75f21=_0x201b5b[0x3],_0x435102=_0x201b5b[0x4],_0x4101e3=_0x201b5b[0x5][_0x2b667b(0x226)]`/`,_0x367605=_0x201b5b[0x6],_0x44adf5=await fetch(domain+_0x2b667b(0x1cd)+_0xf75f21,{'method':_0x2b667b(0x1e6),'headers':{'Accept':_0x2b667b(0x1e5),'Content-Type':_0x2b667b(0x1e5),'Authorization':_0x2b667b(0x1d3)+apikey}}),_0x359ccb=await _0x44adf5[_0x2b667b(0x1e0)](),_0x3c92a0=_0x359ccb[_0x2b667b(0x1d7)][_0x2b667b(0x1c6)],_0xcf8f03=await fetch(domain+_0x2b667b(0x1fb),{'method':_0x2b667b(0x1b6),'headers':{'Accept':_0x2b667b(0x1e5),'Content-Type':'application/json','Authorization':_0x2b667b(0x1d3)+apikey},'body':JSON['stringify']({'name':_0x1961a1,'description':_0x99d66c,'user':_0x121ca2,'egg':parseInt(_0xf75f21),'docker_image':_0x2b667b(0x209),'startup':_0x3c92a0,'environment':{'INST':_0x2b667b(0x1e7),'USER_UPLOAD':'0','AUTO_UPDATE':'1','CMD_RUN':_0x2b667b(0x1f1)},'limits':{'memory':_0x4101e3[0x0],'swap':0x0,'disk':_0x4101e3[0x1],'io':0x1f4,'cpu':_0x367605},'feature_limits':{'databases':0x0,'backups':0x14,'allocations':0x0},'deploy':{'locations':[parseInt(_0x435102)],'dedicated_ip':![],'port_range':[]}})}),_0x28ba06=await _0xcf8f03[_0x2b667b(0x1e0)]();if(_0x28ba06[_0x2b667b(0x1b2)])return _0x19d82d[_0x2b667b(0x1d0)](JSON[_0x2b667b(0x202)](_0x28ba06[_0x2b667b(0x1b2)][0x0],null,0x2));let _0x1e5b70=_0x28ba06[_0x2b667b(0x1d7)];_0x19d82d[_0x2b667b(0x1d0)](_0x2b667b(0x21c)+_0x28ba06[_0x2b667b(0x1b7)]+_0x2b667b(0x1c4)+_0x1e5b70['id']+_0x2b667b(0x1e9)+_0x1e5b70['uuid']+'\x0aNAME:\x20'+_0x1e5b70[_0x2b667b(0x1c1)]+_0x2b667b(0x21a)+_0x1e5b70[_0x2b667b(0x1f7)]+_0x2b667b(0x1d2)+(_0x1e5b70[_0x2b667b(0x1f3)]['memory']===0x0?'Unlimited':_0x1e5b70['limits'][_0x2b667b(0x21d)])+'\x20MB\x0aDISK:\x20'+(_0x1e5b70[_0x2b667b(0x1f3)][_0x2b667b(0x222)]===0x0?_0x2b667b(0x1eb):_0x1e5b70[_0x2b667b(0x1f3)]['disk'])+_0x2b667b(0x19e)+_0x1e5b70['limits']['cpu']+_0x2b667b(0x1ea)+_0x1e5b70[_0x2b667b(0x1df)]);}break;case _0x2b667b(0x1f8):{if(!_0x5ae66b)return global['dfail'](_0x2b667b(0x1c2),_0x19d82d,_0xbabce);let _0x31ea7f=_0x527e70[0x0];if(!_0x31ea7f)return _0x19d82d[_0x2b667b(0x1d0)]('ID\x20nya\x20mana?');let _0x594564=await fetch(domain+_0x2b667b(0x1d6)+_0x31ea7f,{'method':_0x2b667b(0x1a3),'headers':{'Accept':_0x2b667b(0x1e5),'Content-Type':_0x2b667b(0x1e5),'Authorization':'Bearer\x20'+apikey}}),_0x2d535f=_0x594564['ok']?{'errors':null}:await _0x594564[_0x2b667b(0x1e0)]();if(_0x2d535f['errors'])return _0x19d82d[_0x2b667b(0x1d0)](_0x2b667b(0x1e8));_0x19d82d['reply'](_0x2b667b(0x1da));}break;case _0x2b667b(0x22b):{let _0x520438=_0x527e70[0x0]?_0x527e70[0x0]:'1',_0x745320=await fetch(domain+'/api/application/servers?page='+_0x520438,{'method':'GET','headers':{'Accept':'application/json','Content-Type':_0x2b667b(0x1e5),'Authorization':_0x2b667b(0x1d3)+apikey}}),_0x3754dd=await _0x745320[_0x2b667b(0x1e0)](),_0x33c522=_0x3754dd[_0x2b667b(0x1ed)],_0x50e375=[];for(let _0x15c6d7 of _0x33c522){let _0x4bb3e7=_0x15c6d7['attributes'],_0x24edbc=await fetch(domain+_0x2b667b(0x1a5)+_0x4bb3e7['uuid'][_0x2b667b(0x226)]`-`[0x0]+_0x2b667b(0x1c3),{'method':'GET','headers':{'Accept':'application/json','Content-Type':_0x2b667b(0x1e5),'Authorization':_0x2b667b(0x1d3)+c_apikey}}),_0xa364c7=await _0x24edbc[_0x2b667b(0x1e0)](),_0x4bb015={'title':_0x2b667b(0x210),'rows':[{'title':_0x4bb3e7['id']+'.\x20'+_0x4bb3e7[_0x2b667b(0x1c1)],'rowId':_0xa7457f+_0x2b667b(0x1b0)+_0x4bb3e7['id'],'description':_0x2b667b(0x1a6)+(_0xa364c7[_0x2b667b(0x1d7)]?_0xa364c7[_0x2b667b(0x1d7)][_0x2b667b(0x1b5)]:_0x4bb3e7[_0x2b667b(0x1d5)])}]};await _0x50e375[_0x2b667b(0x1b9)](_0x4bb015),_0x50e375[_0x2b667b(0x220)]>=0x32&&_0x3754dd[_0x2b667b(0x1c0)][_0x2b667b(0x1aa)][_0x2b667b(0x1f9)][_0x2b667b(0x229)]&&_0x50e375['push']({'title':_0x2b667b(0x1bf),'rows':[{'title':_0x2b667b(0x1bd),'rowId':_0xa7457f+_0x2b667b(0x1ac),'description':_0x2b667b(0x1b4)}]});}await _0xbabce[_0x2b667b(0x1bb)](_0x19d82d[_0x2b667b(0x21f)],{'text':_0x2b667b(0x1cf),'footer':_0x2b667b(0x1e1)+_0x3754dd[_0x2b667b(0x1c0)]['pagination'][_0x2b667b(0x218)]+'/'+_0x3754dd[_0x2b667b(0x1c0)][_0x2b667b(0x1aa)][_0x2b667b(0x1a8)],'title':'2023\x20©\x20Dann-MD','buttonText':_0x3754dd[_0x2b667b(0x1c0)]['pagination'][_0x2b667b(0x1f2)]+'\x20Servers','sections':_0x50e375},{'quoted':_0x19d82d});}break;case _0x2b667b(0x1ba):{let _0x453ecc=_0x527e70[0x0],_0x6070a0=await fetch(domain+_0x2b667b(0x1d6)+_0x453ecc,{'method':'GET','headers':{'Accept':'application/json','Content-Type':_0x2b667b(0x1e5),'Authorization':_0x2b667b(0x1d3)+apikey}}),_0x454cfd=await _0x6070a0['json']();if(_0x454cfd['errors'])return _0x19d82d[_0x2b667b(0x1d0)](_0x2b667b(0x1e8));let _0x292326=_0x454cfd[_0x2b667b(0x1d7)],_0x304c6a=await fetch(domain+_0x2b667b(0x1a5)+_0x292326[_0x2b667b(0x212)]['split']`-`[0x0]+_0x2b667b(0x1c3),{'method':_0x2b667b(0x1e6),'headers':{'Accept':'application/json','Content-Type':_0x2b667b(0x1e5),'Authorization':_0x2b667b(0x1d3)+c_apikey}}),_0x246056=await _0x304c6a['json'](),_0x4b6473=_0x246056['attributes'];_0x19d82d[_0x2b667b(0x1d0)]('*'+_0x292326[_0x2b667b(0x1c1)][_0x2b667b(0x1d9)]()+'\x20SERVER\x20DETAILS*\x0a\x0a```STATUS:\x20'+_0x4b6473[_0x2b667b(0x1b5)]+_0x2b667b(0x1c4)+_0x292326['id']+'\x0aUUID:\x20'+_0x292326[_0x2b667b(0x212)]+'\x0aNAME:\x20'+_0x292326[_0x2b667b(0x1c1)]+_0x2b667b(0x21a)+_0x292326[_0x2b667b(0x1f7)]+'\x0aMEMORY:\x20'+await format(_0x4b6473['resources']['memory_bytes'])[_0x2b667b(0x227)]()+_0x2b667b(0x1f5)+(_0x292326[_0x2b667b(0x1f3)][_0x2b667b(0x21d)]===0x0?_0x2b667b(0x1eb):_0x292326[_0x2b667b(0x1f3)]['memory']+'MB')+_0x2b667b(0x1fc)+await format(_0x4b6473[_0x2b667b(0x1fe)]['disk_bytes'])['toString']()+_0x2b667b(0x1f5)+(_0x292326['limits'][_0x2b667b(0x222)]===0x0?_0x2b667b(0x1eb):_0x292326[_0x2b667b(0x1f3)][_0x2b667b(0x222)]+'MB')+_0x2b667b(0x19f)+_0x4b6473[_0x2b667b(0x1fe)][_0x2b667b(0x200)]+_0x2b667b(0x1be)+(_0x292326[_0x2b667b(0x1f3)][_0x2b667b(0x1ec)]===0x0?_0x2b667b(0x1eb):_0x292326[_0x2b667b(0x1f3)][_0x2b667b(0x1ec)]+'%')+_0x2b667b(0x1c9)+_0x292326[_0x2b667b(0x1df)]+_0x2b667b(0x213));}break;case _0x2b667b(0x1d4):{if(!_0x5ae66b)return global[_0x2b667b(0x1e3)]('rowner',_0x19d82d,_0xbabce);let _0x1298cf=_0x527e70[0x0];if(!_0x1298cf)return _0x19d82d[_0x2b667b(0x1d0)]('ID\x20nya\x20mana?');let _0xdfe218=await fetch(domain+'/api/application/servers/'+_0x1298cf+_0x2b667b(0x1b8),{'method':_0x2b667b(0x1b6),'headers':{'Accept':_0x2b667b(0x1e5),'Content-Type':_0x2b667b(0x1e5),'Authorization':_0x2b667b(0x1d3)+apikey}}),_0x242d66=_0xdfe218['ok']?{'errors':null}:await _0xdfe218[_0x2b667b(0x1e0)]();if(_0x242d66['errors'])return _0x19d82d[_0x2b667b(0x1d0)]('*SERVER\x20NOT\x20FOUND*');_0x19d82d['reply'](_0x2b667b(0x20c));}break;case _0x2b667b(0x1ab):{if(!_0x5ae66b)return global['dfail'](_0x2b667b(0x1c2),_0x19d82d,_0xbabce);let _0x3c868a=_0x307dde[_0x2b667b(0x226)](',');if(_0x3c868a[_0x2b667b(0x220)]<0x4)return _0x19d82d[_0x2b667b(0x1d0)]('*Format\x20salah*\x0a\x0aPenggunaan:\x0a'+(_0xa7457f+_0x40ab87)+'\x20srvId,locId,memory/disk,cpu');let _0xdc6c93=_0x3c868a[0x0],_0xf74a01=_0x3c868a[0x1],_0x4dd5ba=_0x3c868a[0x2][_0x2b667b(0x226)]`/`,_0x48f6ef=_0x3c868a[0x3],_0x810153=await fetch(domain+_0x2b667b(0x1d6)+_0xdc6c93,{'method':_0x2b667b(0x1e6),'headers':{'Accept':_0x2b667b(0x1e5),'Content-Type':_0x2b667b(0x1e5),'Authorization':_0x2b667b(0x1d3)+apikey}}),_0x45e783=await _0x810153[_0x2b667b(0x1e0)](),_0x34c79c=await fetch(domain+_0x2b667b(0x1d6)+_0xdc6c93+'/build',{'method':'PATCH','headers':{'Accept':_0x2b667b(0x1e5),'Content-Type':'application/json','Authorization':'Bearer\x20'+apikey},'body':JSON[_0x2b667b(0x202)]({'allocation':parseInt(_0xf74a01)||_0x45e783['attributes']['allocation'],'memory':_0x4dd5ba[0x0]||_0x45e783[_0x2b667b(0x1d7)][_0x2b667b(0x1f3)][_0x2b667b(0x21d)],'swap':_0x45e783[_0x2b667b(0x1d7)][_0x2b667b(0x1f3)][_0x2b667b(0x20a)]||0x0,'disk':_0x4dd5ba[0x1]||_0x45e783[_0x2b667b(0x1d7)][_0x2b667b(0x1f3)][_0x2b667b(0x222)],'io':0x1f4,'cpu':_0x48f6ef||_0x45e783['attributes'][_0x2b667b(0x1f3)][_0x2b667b(0x1ec)],'threads':null,'feature_limits':{'databases':0x5,'allocations':0x5,'backups':0x5}})}),_0x24752c=await _0x34c79c[_0x2b667b(0x1e0)]();if(_0x24752c[_0x2b667b(0x1b2)])return _0x19d82d['reply'](JSON[_0x2b667b(0x202)](_0x24752c['errors'][0x0],null,0x2));let _0x2cac34=_0x24752c['attributes'];_0x19d82d[_0x2b667b(0x1d0)](_0x2b667b(0x1fd)+_0x24752c[_0x2b667b(0x1b7)]+'\x0a\x0aID:\x20'+_0x2cac34['id']+'\x0aUUID:\x20'+_0x2cac34[_0x2b667b(0x212)]+_0x2b667b(0x205)+_0x2cac34['name']+_0x2b667b(0x21a)+_0x2cac34[_0x2b667b(0x1f7)]+'\x0aMEMORY:\x20'+(_0x2cac34[_0x2b667b(0x1f3)]['memory']===0x0?_0x2b667b(0x1eb):_0x2cac34['limits'][_0x2b667b(0x21d)])+_0x2b667b(0x1f6)+(_0x2cac34[_0x2b667b(0x1f3)][_0x2b667b(0x222)]===0x0?'Unlimited':_0x2cac34[_0x2b667b(0x1f3)][_0x2b667b(0x222)])+_0x2b667b(0x19e)+_0x2cac34[_0x2b667b(0x1f3)][_0x2b667b(0x1ec)]+_0x2b667b(0x1ea)+_0x2cac34[_0x2b667b(0x1df)]+_0x2b667b(0x216)+_0x2cac34[_0x2b667b(0x224)]);}break;case _0x2b667b(0x1a4):case'stopsrv':case _0x2b667b(0x228):{let _0x2781bb=_0x40ab87[_0x2b667b(0x201)](_0x2b667b(0x20e),'');if(!_0x5ae66b)return global[_0x2b667b(0x1e3)]('rowner',_0x19d82d,_0xbabce);let _0x4793ad=_0x527e70[0x0];if(!_0x4793ad)return _0x19d82d['reply'](_0x2b667b(0x1a1));let _0x4ecefa=await fetch(domain+_0x2b667b(0x1a5)+_0x4793ad+_0x2b667b(0x1bc),{'method':_0x2b667b(0x1b6),'headers':{'Accept':_0x2b667b(0x1e5),'Content-Type':_0x2b667b(0x1e5),'Authorization':_0x2b667b(0x1d3)+c_apikey},'body':JSON[_0x2b667b(0x202)]({'signal':_0x2781bb})}),_0x85a61b=_0x4ecefa['ok']?{'errors':null}:await _0x4ecefa[_0x2b667b(0x1e0)]();if(_0x85a61b[_0x2b667b(0x1b2)])return _0x19d82d['reply'](JSON['stringify'](_0x85a61b[_0x2b667b(0x1b2)][0x0],null,0x2));_0x19d82d[_0x2b667b(0x1d0)](_0x2b667b(0x1c8)+_0x2781bb[_0x2b667b(0x1d9)]()+_0x2b667b(0x1ce));}}};function _0x54ce(_0xc8594c,_0x9f974f){const _0x37b87f=_0x37b8();return _0x54ce=function(_0x54cecd,_0x9cbcfc){_0x54cecd=_0x54cecd-0x19e;let _0x2b6115=_0x37b87f[_0x54cecd];return _0x2b6115;},_0x54ce(_0xc8594c,_0x9f974f);}handler[_0x40e00c(0x1ad)]=[_0x40e00c(0x1fa),_0x40e00c(0x1ff),_0x40e00c(0x219),_0x40e00c(0x214),'addsrv',_0x40e00c(0x1f8),_0x40e00c(0x22b),_0x40e00c(0x1ba),_0x40e00c(0x1d4),_0x40e00c(0x1ab),_0x40e00c(0x1a4),_0x40e00c(0x1e2),_0x40e00c(0x228)],handler['command']=[_0x40e00c(0x1fa),_0x40e00c(0x1ff),_0x40e00c(0x219),_0x40e00c(0x214),_0x40e00c(0x1c7),_0x40e00c(0x1f8),_0x40e00c(0x22b),_0x40e00c(0x1ba),_0x40e00c(0x1d4),_0x40e00c(0x1ab),'startsrv','stopsrv',_0x40e00c(0x228)],handler['tags']=['owner'],handler[_0x40e00c(0x1a0)]=!![],module['exports']=handler;

/*
  * DannTeam
  * ig: @jkt48.danzz
  * Beli no encrypt? chat: 083137550315
*/