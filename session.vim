let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Workspace/angular.dev/jink
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 src/app/app.module.ts
badd +14 src/app/app.routes.ts
badd +9 src/app/pages/index.ts
badd +23 src/app/pages/home/home.component.ts
badd +11 src/app/pages/home/home.component.html
badd +32 src/app/services/task.service.ts
badd +24 src/app/app.component.ts
badd +2 src/app/app.component.html
badd +67 src/app/services/auth.service.ts
badd +2 src/system/console.service.ts
badd +32 src/app/layout/header/header.component.ts
badd +20 src/system/console.service.prod.ts
badd +98 src/system/console.service.dev.ts
badd +0 src/app/layout/header/header.component.html
badd +0 src/app/pages/login/login.component.scss
badd +0 src/app/pages/login/login.component.html
badd +18 src/app/pages/login/login.component.ts
badd +9 src/app/pipes/firstname.pipe.ts
badd +1 src/app/models/task.model.ts
badd +6 src/app/layout/header/header.component.scss
badd +0 src/app/pages/home/home.component.scss
badd +13 src/styles.scss
badd +0 src/app/layout/task/task.component.scss
badd +0 src/app/layout/task/task.component.html
badd +0 src/app/layout/task/task.component.ts
badd +0 src/app/layout/index.ts
argglobal
silent! argdel *
set stal=2
edit src/app/app.module.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 65 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 51 - ((31 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
51
normal! 030|
lcd ~/Workspace/angular.dev/jink/src/app
wincmd w
argglobal
edit ~/Workspace/angular.dev/jink/src/app/app.routes.ts
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 14 - ((13 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
14
normal! 056|
lcd ~/Workspace/angular.dev/jink/src/app
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 65 + 102) / 204)
tabedit ~/Workspace/angular.dev/jink/src/app/app.component.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 65 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 24 - ((23 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
24
normal! 036|
lcd ~/Workspace/angular.dev/jink/src/app
wincmd w
argglobal
edit ~/Workspace/angular.dev/jink/src/app/app.component.html
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 2 - ((1 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
2
normal! 031|
lcd ~/Workspace/angular.dev/jink/src/app
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 65 + 102) / 204)
tabedit ~/Workspace/angular.dev/jink/src/app/layout/index.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 14 - ((13 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
14
normal! 022|
lcd ~/Workspace/angular.dev/jink/src/app/layout
tabedit ~/Workspace/angular.dev/jink/src/app/models/task.model.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/Workspace/angular.dev/jink/src/app/models
tabedit ~/Workspace/angular.dev/jink/src/app/pages/home/home.component.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 39 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 11 - ((10 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
11
normal! 019|
lcd ~/Workspace/angular.dev/jink/src/app/pages/home
wincmd w
argglobal
edit ~/Workspace/angular.dev/jink/src/app/pages/home/home.component.html
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 20 - ((19 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
20
normal! 010|
lcd ~/Workspace/angular.dev/jink/src/app/pages/home
wincmd w
argglobal
edit ~/Workspace/angular.dev/jink/src/app/pages/home/home.component.scss
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 39 - ((24 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
39
normal! 05|
lcd ~/Workspace/angular.dev/jink/src/app/pages/home
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 39 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
tabedit ~/Workspace/angular.dev/jink/src/app/layout/task/task.component.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 39 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
12
normal! zo
let s:l = 25 - ((14 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
25
normal! 0
lcd ~/Workspace/angular.dev/jink/src/app/layout/task
wincmd w
argglobal
edit ~/Workspace/angular.dev/jink/src/app/layout/task/task.component.html
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 14 - ((13 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
14
normal! 013|
lcd ~/Workspace/angular.dev/jink/src/app/layout/task
wincmd w
argglobal
edit ~/Workspace/angular.dev/jink/src/app/layout/task/task.component.scss
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/Workspace/angular.dev/jink/src/app/layout/task
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 39 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
tabedit ~/Workspace/angular.dev/jink/src/app/services/auth.service.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 67 - ((0 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
67
normal! 034|
lcd ~/Workspace/angular.dev/jink/src/app/services
tabedit ~/Workspace/angular.dev/jink/src/app/services/task.service.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 32 - ((31 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
32
normal! 03|
lcd ~/Workspace/angular.dev/jink/src/app/services
tabedit ~/Workspace/angular.dev/jink/src/system/console.service.dev.ts
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 98 - ((30 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
98
normal! 029|
lcd ~/Workspace/angular.dev/jink/src/system
tabedit ~/Workspace/angular.dev/jink/src/app/layout/header/header.component.ts
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winheight=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 39 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 27 - ((14 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
27
normal! 031|
lcd ~/Workspace/angular.dev/jink/src/app/layout/header
wincmd w
argglobal
edit ~/Workspace/angular.dev/jink/src/app/layout/header/header.component.scss
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 6 - ((5 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
6
normal! 023|
lcd ~/Workspace/angular.dev/jink/src/app/layout/header
wincmd w
argglobal
edit ~/Workspace/angular.dev/jink/src/app/layout/header/header.component.html
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=10
setlocal fml=1
setlocal fdn=10
setlocal fen
let s:l = 14 - ((13 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
14
normal! 06|
lcd ~/Workspace/angular.dev/jink/src/app/layout/header
wincmd w
exe 'vert 1resize ' . ((&columns * 138 + 102) / 204)
exe 'vert 2resize ' . ((&columns * 39 + 102) / 204)
exe 'vert 3resize ' . ((&columns * 25 + 102) / 204)
tabnext 6
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=2 winwidth=25 shortmess=filnxtToO
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
