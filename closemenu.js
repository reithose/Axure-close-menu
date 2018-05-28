$( document ).ready(function() {
 parent.$("ul").find("ul").css({"display":"none"});
 parent.$("body").find('.sitemapMinus').removeClass('sitemapMinus').addClass('sitemapPlus')
 parent.$("body").find('.sitemapPlusMinusLink').unbind();
 parent.$("body").find('.sitemapPlusMinusLink').toggle(
  function(){
   $(this)
        .children('.sitemapPlus').removeClass('sitemapPlus').addClass('sitemapMinus').end()
         .closest('li').children('ul').css({"display":"block"});
 },
  function(){
   $(this)
         .children('.sitemapMinus').removeClass('sitemapMinus').addClass('sitemapPlus').end()
         .closest('li').children('ul').css({"display":"none"});
}
);
});
