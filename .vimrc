set nocompatible              
filetype off

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
	Plugin 'VundleVim/Vundle.vim'
	Plugin 'frazrepo/vim-rainbow'
	Plugin 'mattn/emmet-vim'
	Plugin 'scrooloose/syntastic'	
	Plugin 'dense-analysis/ale'
	Plugin 'dracula/vim', { 'name': 'dracula'}
	Plugin 'srcery-colors/srcery-vim', { 'name': 'srcery'}
	Plugin 'neoclide/coc.nvim', {'branch': 'release'}
call vundle#end() 

filetype plugin indent on
syntax on
colorscheme dracula
set clipboard=unnamed
set number
set autoread
set tabstop=4 softtabstop=4
set shiftwidth=4
set nu
set smartindent
set incsearch
set ignorecase
set hlsearch
set nowrap
set noerrorbells
set backspace=indent,eol,start
set noswapfile
"set rtp+=~/tabnine-vim
set incsearch
hi SpellBad cterm=underline ctermfg=red ctermbg=NONE

"This is to compile and run the c++ code
nnoremap <C-c> :!g++ -o  %:r.out % -std=c++11<Enter>
nnoremap <C-r> :!./%:r.out<Enter>


"Automatically opens Nerdtree
"autocmd VimEnter * NERDTree | wincmd p
"autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTREE") && b:NERDTree.isTabTree()) | q | endif

"Shortcut for nerdtree  navigation
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l

"For the rainbow brackets 
" au FileType c,cpp,objc,objcpp call rainbow#load()
