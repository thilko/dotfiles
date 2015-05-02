# ----------------------------------------------------------------
# general zsh configuration
# ----------------------------------------------------------------
autoload login-test-server
autoload -U compinit
compinit

zle -N login-test-server
bindkey "^[l" login-test-server

# crazy mad shit
unsetopt correct_all
unsetopt correct
setopt auto_resume auto_cd auto_pushd pushd_to_home pushd_silent pushd_minus
setopt pushd_ignore_dups bad_pattern function_argzero inc_append_history
setopt hist_verify hist_no_store hist_no_functions
setopt hist_ignore_dups hist_find_no_dups hist_save_no_dups
setopt nobeep extended_glob prompt_subst interactive_comments
setopt list_types list_packed print_eight_bit nohup notify
setopt print_exit_value
unsetopt bgnice nomatch
setopt NO_BG_NICE # don't nice background tasks
setopt NO_HUP
setopt NO_LIST_BEEP
setopt LOCAL_OPTIONS # allow functions to have local options
setopt LOCAL_TRAPS # allow functions to have local traps
setopt HIST_VERIFY
unsetopt SHARE_HISTORY # share history between sessions ???
setopt EXTENDED_HISTORY # add timestamps to history
setopt PROMPT_SUBST
setopt CORRECT
setopt COMPLETE_IN_WORD
setopt IGNORE_EOF
setopt APPEND_HISTORY
setopt INC_APPEND_HISTORY
setopt HIST_IGNORE_ALL_DUPS
setopt HIST_REDUCE_BLANKS

HISTSIZE=5000
SAVEHIST=5000
HISTFILE=~/.history

# eliminate duplicates from these lists
typeset -U hosts path cdpath fpath fignore manpath mailpath classpath

# if [ -f "$HOME/.ssh/known_hosts" ]; then
#     sshhosts=(${${${${(f)"$(<$HOME/.ssh/known_hosts)"}:#[0-9]*}%%\ *}%%,*})
# fi
# if [ -f "/etc/hosts" ]; then
#     : ${(A)etchosts:=${(s: :)${(ps:\t:)${${(f)~~"$(</etc/hosts)"}%%\#*}##[:blank:]#[^[:blank:]]#}}}
# fi
# hosts=( $hosts $etchosts $sshhosts)
# zstyle ':completion:*:hosts' hosts $hosts

# completion engine additions
# keep cvs and *~ files out
zstyle ':completion:*:(all-|)files' ignored-patterns '(|*/)CVS' '(|*/)*\~'
zstyle ':completion:*:cd:*' ignored-patterns '(|*/)CVS'
zstyle ':completion:*:kill:*:processes' command "ps x"
zstyle -e ':completion:*:approximate:*' max-errors 'reply=( $(( ($#PREFIX + $#SUFFIX) / 3 )) )'
zstyle ':completion:*:descriptions' format "- %d -"
zstyle ':completion:*:corrections' format "- %d - (errors %e})"
zstyle ':completion:*:default' list-prompt '%S%M matches%s'
zstyle ':completion:*' group-name ''
zstyle ':completion:*:manuals' separate-sections true
zstyle ':completion:*:manuals.(^1*)' insert-sections true
zstyle ':completion:*' menu select
zstyle ':completion:*' verbose yes
# Complete cd.. (http://stackoverflow.com/questions/564648/zsh-tab-completion-for-cd)
zstyle ':completion:*' special-dirs true

# Disable ^S, useless and annoying
stty stop undef

# Includes
for f in ~/.zsh/config/*; do source $f; done
for f in ~/.zsh/private/*; do source $f; done

if [ -f `brew --prefix`/etc/autojump ]; then
  . `brew --prefix`/etc/autojump
fi

source /usr/local/share/chruby/chruby.sh
chruby ruby-2.1.2
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_45.jdk/Contents/Home
PATH=/Users/thilko/.gem/ruby/2.1.2/bin:/Users/thilko/.rubies/ruby-2.1.2/lib/ruby/gems/2.1.2/bin:/Users/thilko/.rubies/ruby-2.1.2/bin:/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/local/MacGPG2/bin:/Users/thilko/Library/grails-2.4.3/bin:~/Library/grails-2.4.3/bin
