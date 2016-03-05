" remove should in rspec specs
" examples that should (whoops) work:
" it "should use no should"
" it "should not use should"
" it "should be should-less"
" it "should not be littered with should's"
" it "should have fun being without should"
" it "should not have should's"
" it "should silenty kill should's"
" it "should display the shoulds"
" it "should pass this test"
fun! Unshouldify()
  silent! %s/\v (["'])should not/ \1doesn't/gi
  silent! %s/\v (["'])should have/ \1has/gi
  silent! %s/\v (["'])should be/ \1is/gi
  silent! %s/\v (["'])doesn't be/ \1isn't/gi
  silent! %s/\v (["'])should display/ \1displays/gi
  silent! %s/\v (["'])should ([^ ]+y) ([^ ]+)/ \1\2 \3s/gi
  silent! %s/\v (["'])should ([^ ]+)/ \1\2s/gi
  silent! %s/\v (["'])(.{-})sss/ \1\2sses/gi
endfun
com! Unshouldify call Unshouldify()

