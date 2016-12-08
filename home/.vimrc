set nocompatible

" use pathogen to load plugins/etc.
execute pathogen#infect()

runtime! config/*
runtime! config/plugins/*

syntax on

set lines=70
set columns=135

set laststatus=2
let g:lightline = { 'colorscheme': 'jellybeans' }

set statusline=%F%m%r%h%w[%L][%{&ff}]%y[%p%%][%04l,%04v]
" | | | | | | | | | | |
" " | | | | | | | | | | + current
" " | | | | | | | | | | column
" " | | | | | | | | | +-- current line
" " | | | | | | | | +-- current % into file
" " | | | | | | | +-- current syntax in
" " | | | | | | | square brackets
" " | | | | | | +-- current fileformat
" " | | | | | +-- number of lines
" " | | | | +-- preview flag in square brackets
" " | | | +-- help flag in square brackets
" " | | +-- readonly flag in square brackets
" " | +-- rodified flag in square brackets
" " +-- full path to file in the buffer

"" shortmess settings:
" f - use "(3 of 5)" instead of "(file 3 of 5)"
" i - use "[noeol]" instead of "[Incomplete last line]"
" l - use "999L, 888C" instead of "999 lines, 888 characters"
" m - use "[+]" instead of "[Modified]"
" n - use "[New]" instead of "[New File]"
" r - use "[RO]" instead of "[readonly]"
" x - use "[dos]" instead of "[dos format]", "[unix]" instead of "[unix
" format]", and "[mac]" instead of "[mac format]"
" t - truncate file message at the start if it is too long to fit on the
" command-line, "<" will appear in the left most column.
" T - trunctate other messages in the middle if they are too long to fit on
" the command line. "..." will appear in the middle.
" I - don't give the intro message when starting Vim.
set shortmess=filmnrxtTI

colorscheme twilight256
let g:rehash256=1
set t_Co=256

" Environment
set history=200                        " Set history to 200
set undolevels=1000                    " Set undos to 1000
set autoread                           " Watch for file changes
set wildmenu                           " completion with menu
set wildmode=longest,list              " bash-like tab completion
set completeopt=menu,preview,longest   " complete options
set showcmd                            " Show command in status line
set timeoutlen=400

" Turn of error bells
set noerrorbells
set visualbell

" Backup and swap
set nobackup                       " Just don't backup
set nowritebackup                  " No write backups
set noswapfile                     " And no swap files

" set tags file
set tags^=./tags

" Filetypes
filetype on                        " Enable filetype detection
filetype indent on                 " Enable filetype-specific indenting
filetype plugin on                 " Enable filetype-specific plugins

set autoread

" Location
"set ruler                           " Show the line number on the bar
set number                          " Line numbers
set title                           " show file in titlebar
set ttyfast
set t_ti= t_te=                     " do not clear the screen when vim ends

" Typing
set autoindent                     " Who doesn't like autoindent?
set smartcase                      " Do smart case matching
set showmatch                      " Show matching brackets
set ts=2 sts=2 sw=2 expandtab      " Tabs and spaces
set scrolloff=3
set whichwrap+=<,>,h,l

let NERDTreeShowHidden=1

" Close all open buffers on entering a window if the only
" buffer that's left is the NERDTree buffer
" Stolen from http://stackoverflow.com/a/5403847/171364 (janus repo)
fun! s:CloseIfOnlyNerdTreeLeft()
  if exists("t:NERDTreeBufName")
    if bufwinnr(t:NERDTreeBufName) != -1
      if winnr("$") == 1
        q
      endif
    endif
  endif
endfunction

function! s:CloseIfOnlyQuickfixLeft()
  if &buftype=="quickfix"
    if winnr("$") == 1
      q
    endif
  endif
endfunction

" Search
set incsearch                      " Incremental search
set ignorecase                     " Search ignoring case
set hlsearch                       " Highlight the search
set showmatch                      " Show matching bracket

" Clipboard
set clipboard=unnamed              " use the system clipboard

