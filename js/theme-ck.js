var jsTheme={init:function(){jsTheme.mobileNav.init();jsTheme.forms.init();console.log("javascript is locked and loaded!")}};jsTheme.mobileNav={init:function(){jsTheme.mobileNav.enableMobileNav();jsTheme.mobileNav.buildMobileNav()},enableMobileNav:function(){$("html").addClass("mobile-nav")},buildMobileNav:function(){var e=$(".header .inner");e.prepend('<span class="main-nav-trigger">menu</span>');var t=$(".main-nav-trigger"),n=$(".main-nav");t.on("click",function(){n.toggle();$(this).toggleClass("trigger-active")})}};jsTheme.forms={init:function(){$(".alert-box .close").on("click",function(e){e.preventDefault();$(this).parent(".alert-box").fadeOut(600)})}};$(jsTheme.init);