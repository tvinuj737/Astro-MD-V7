const _0x122b8a=_0x2c7d;function _0x321c(){const _0x32d189=['-preset','https://github.com/sanuwaofficial','writeUIntLE','libwebp','1515192KWDJJr','readFileSync','addOutputOptions','concat','141018XLhYdV','error','-vcodec','-ss','00:00:00','84764hiLeMj','utf-8','end','exports','toFormat','507423YOUMhT','55DHAJdl','4640724lOFpCp','save','fluent-ffmpeg','from','-an','.webp','node-webpmux','packname','2vAoTcU','exif','1212099TFAcBl','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse','00:00:05','load','-vf','-loop','Image','webp','length','912786dqaqGM','unlinkSync','default','./functions'];_0x321c=function(){return _0x32d189;};return _0x321c();}(function(_0xf1835b,_0x1017ed){const _0x49b822=_0x2c7d,_0x55d8ca=_0xf1835b();while(!![]){try{const _0x30ff25=parseInt(_0x49b822(0x205))/0x1+parseInt(_0x49b822(0x1ee))/0x2*(parseInt(_0x49b822(0x1f0))/0x3)+-parseInt(_0x49b822(0x20a))/0x4*(-parseInt(_0x49b822(0x210))/0x5)+-parseInt(_0x49b822(0x1f9))/0x6+-parseInt(_0x49b822(0x20f))/0x7+parseInt(_0x49b822(0x201))/0x8+-parseInt(_0x49b822(0x211))/0x9;if(_0x30ff25===_0x1017ed)break;else _0x55d8ca['push'](_0x55d8ca['shift']());}catch(_0x406517){_0x55d8ca['push'](_0x55d8ca['shift']());}}}(_0x321c,0x377df));const ffmpeg=require(_0x122b8a(0x213)),fs=require('fs'),WebP=require(_0x122b8a(0x1ec)),{getRandom}=require(_0x122b8a(0x1fc)),imageToWebp=_0x2c7991=>{var _0xcec785=getRandom('.webp');return new Promise((_0x1e5ac5,_0x18f38c)=>{const _0x2d516c=_0x2c7d;ffmpeg(_0x2c7991)['on'](_0x2d516c(0x206),_0x3df5b4=>{const _0xfe7e5a=_0x2d516c;fs[_0xfe7e5a(0x1fa)](_0x2c7991),_0x18f38c(_0x3df5b4);})['on'](_0x2d516c(0x20c),async()=>{const _0x18d0fd=_0x2d516c;fs['unlinkSync'](_0x2c7991),_0x1e5ac5(fs['readFileSync'](_0xcec785)),fs[_0x18d0fd(0x1fa)](_0xcec785);})[_0x2d516c(0x203)]([_0x2d516c(0x207),_0x2d516c(0x200),_0x2d516c(0x1f4),_0x2d516c(0x1f1)])[_0x2d516c(0x20e)]('webp')[_0x2d516c(0x212)](_0xcec785);});},videoToWebp=_0x54873f=>{var _0x30fb79=getRandom('.webp');return new Promise((_0x1dd22b,_0x322cab)=>{const _0x45cf1d=_0x2c7d;ffmpeg(_0x54873f)['on']('error',_0x352c32=>{fs['unlinkSync'](_0x54873f),_0x322cab(_0x352c32);})['on']('end',()=>{const _0x9e837=_0x2c7d;fs[_0x9e837(0x1fa)](_0x54873f),_0x1dd22b(fs[_0x9e837(0x202)](_0x30fb79)),fs[_0x9e837(0x1fa)](_0x30fb79);})[_0x45cf1d(0x203)]([_0x45cf1d(0x207),_0x45cf1d(0x200),'-vf',_0x45cf1d(0x1f1),_0x45cf1d(0x1f5),'0',_0x45cf1d(0x208),_0x45cf1d(0x209),'-t',_0x45cf1d(0x1f2),_0x45cf1d(0x1fd),_0x45cf1d(0x1fb),_0x45cf1d(0x1ea),'-vsync','0'])['toFormat'](_0x45cf1d(0x1f7))['save'](_0x30fb79);});},writeExif=async(_0x23594e,_0x25ef1c)=>{const _0x3a5ce4=_0x122b8a;var _0x2a94e1=getRandom(_0x3a5ce4(0x1eb));return new Promise(async(_0x3fcc7a,_0xf647d8)=>{const _0x51d8f9=_0x3a5ce4;let _0x18009f=new WebP[(_0x51d8f9(0x1f6))]();var _0x4e7f74={'sticker-pack-id':_0x51d8f9(0x1fe),'sticker-pack-name':_0x25ef1c?_0x25ef1c[_0x51d8f9(0x1ed)]:'🥽A░Q░U░A░🥽','sticker-pack-publisher':_0x25ef1c?_0x25ef1c['author']:'','emojis':['']},_0x184db4=Buffer[_0x51d8f9(0x214)]([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0,0x0,0x0,0x0,0x0,0x16,0x0,0x0,0x0]),_0x551ba0=Buffer[_0x51d8f9(0x214)](JSON['stringify'](_0x4e7f74),_0x51d8f9(0x20b)),_0x1686cf=Buffer[_0x51d8f9(0x204)]([_0x184db4,_0x551ba0]);_0x1686cf[_0x51d8f9(0x1ff)](_0x551ba0[_0x51d8f9(0x1f8)],0xe,0x4),await _0x18009f[_0x51d8f9(0x1f3)](_0x23594e),_0x18009f[_0x51d8f9(0x1ef)]=_0x1686cf,await _0x18009f[_0x51d8f9(0x212)](_0x2a94e1),_0x3fcc7a(fs[_0x51d8f9(0x202)](_0x2a94e1)),await fs[_0x51d8f9(0x1fa)](_0x2a94e1);});};function _0x2c7d(_0x2f9246,_0x428311){const _0x321cef=_0x321c();return _0x2c7d=function(_0x2c7d04,_0x5bbe96){_0x2c7d04=_0x2c7d04-0x1ea;let _0x3ca488=_0x321cef[_0x2c7d04];return _0x3ca488;},_0x2c7d(_0x2f9246,_0x428311);}module[_0x122b8a(0x20d)]={'imageToWebp':imageToWebp,'videoToWebp':videoToWebp,'writeExif':writeExif};