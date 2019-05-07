call plug#begin('~/.vim/bundle')

Plug 'ctrlpvim/ctrlp.vim'
Plug 'editorconfig/editorconfig-vim'
Plug 'int3/vim-extradite'
Plug 'kana/vim-textobj-user'
Plug 'maxbrunsfeld/vim-yankstack'
Plug 'mhinz/vim-grepper'
Plug 'skwp/greplace.vim'
Plug 'itchyny/lightline.vim'
Plug 'tpope/vim-endwise'
Plug 'tpope/vim-fugitive'
Plug 'tpope/vim-repeat'
Plug 'tpope/vim-surround'
Plug 'mxw/vim-jsx'
Plug 'tyru/caw.vim'
Plug 'vim-scripts/DirDiff.vim'
Plug 'w0rp/ale'
Plug 'scrooloose/nerdtree', { 'on': [ 'NERDTreeSmartToggle', 'NERDTree', 'NERDTreeToggle', 'NERDTreeFind' ] } "
Plug 'tclem/vim-arduino'

Plug 'Keithbsmiley/rspec.vim', { 'for': 'rspec' }
Plug 'alvan/vim-closetag', { 'for': ['html', 'xml'] }
Plug 'elzr/vim-json', { 'for': 'json' }
Plug 'vim-ruby/vim-ruby', { 'for': ['ruby', 'rspec'] }

call plug#end()
