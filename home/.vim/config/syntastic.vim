" does not work for me :-(
" use signs to indicate lines with errors
" only if signs are available
" if has('signs')
    " let g:syntastic_enable_signs = 1
" endif

" automatically open the location list when a buffer has errors
" let g:syntastic_auto_loc_list=1

" always show warnings
" let g:syntastic_quiet_messages = {'level': 'warnings'}

" No Check for
" let g:syntastic_mode_map = {'active_filetypes': [], 'mode': 'active', 'passive_filetypes': ['html','coffee','haml','sass','scss']}  

" In vimdiff Mode do not auto-show the errors
" if &diff
" let g:syntastic_auto_loc_list=2
" endif
"
" let g:syntastic_cpp_config_file = '.syntastic'
" let g:syntastic_js_file = .'syntastic'
" let g:syntastic_javascript_checkers = ['jsxhint']
" let g:syntastic_javascript_jsxhint_exec = 'jsx-jshint-wrapper'

" let g:jsx_ext_required = 1

