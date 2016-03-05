let mapleader = ","

map <leader>b :new<CR>
map <leader>m :CtrlP<CR>
map . .[                           " set the cursor to the start of each change
map <leader>cc :ClearCtrlPCache<CR>
map <leader>d :NERDTreeToggle<CR>

nmap <leader>gc :Gcommit<CR>
nmap <leader>q :q<CR>
nmap <leader>qa :BufOnly NERD_tree_1<CR> " close all buffers except nerdtree
nmap <leader>wa :wall<CR>
nmap <leader>rl :Loc<CR>
nmap <c-a> :Ack 
nmap > ><CR>gv
nmap < <<CR>gv
nmap <leader>rg :QuickRun -outputter/buffer/into 1 -mode n<CR>

vmap > ><CR>gv
vmap < <<CR>gv

vnoremap <TAB> >gv
vnoremap <S-TAB> <gv

noremap <c-j> <c-w>j
noremap <c-k> <c-w>k
noremap <c-h> <c-w>h
noremap <c-l> <c-w>l

nnoremap <leader>n :nohlsearch<CR>
nnoremap <leader>ev :tabedit $MYVIMRC<CR>
nnoremap <leader>eV :tabedit ~/.vim<CR>
nnoremap <leader>sv :so $MYVIMRC<CR>

imap jj <ESC> # leave insert mode

