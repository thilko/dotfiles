fun! CreateBlogEntry(title)
  let today = strftime("%Y_%m_%d")
  exec mkdir(getcwd() . "/content/blog/" . today )
  let header = ["---", "kind: 'article'", "title: '" . argv(0) . "'", "created_at: '" . today . "'", "tags: []", "---"]
  exec writefile(header, getcwd() . "/content/blog/" . today . "/test.html.md")
endfun
com! -nargs=1 CreateBlogEntry call CreateBlogEntry(<args>)
