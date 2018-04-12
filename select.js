$(".tabs ul li").click(function() {

  console.log($(".tabs ul li").css("width"));

    var width = $(".tabs ul li").css("width");
    var width_value = width.substring(0, width.length-2);
    console.log(width_value);
    var tab = $(this).index();
    var position = width_value * tab;

    if($(this).hasClass('slider')) {
        return;
    }

    $(".slider").css({
        left: position + "px"
    });

    $('li').removeClass('active');
    $(this).addClass('active');
    $(this).find('li').addClass('active');
});

$(".projects_list ul li").click(function() {
  $(".popup").find(".info[data-info-id=" + page + "]").addClass("active");

  console.log("open" + page + "count" + count);
    $('body').css('overflow-y', 'hidden');
})

$(".popup .close").click(function() {
    $('body').css('overflow-y', 'scroll');
})

$(document).ready(function () {
  setInterval(function () {
    var $sample = $("body");
    if ($sample.is(":hover")) {
      window.innerDocClick = true;
    } else {
      window.innerDocClick = false;
    }
  });

});

// window.onhashchange = function () {
//   if (window.innerDocClick) {
//   } else {
//       $('body').css('overflow-y', 'scroll');
//     }
//
// };

if($) {

    $('#container > *').hide(0);
    $('#container #interfaces').show(0);

    $(".menuElement").click(function() {

        $('#container > *').hide(0)

        var tabID = $(this).data("tab");

        $('#' + tabID).show(0);

    });
}

id = "";

$('a.image').click(function() {
  id = $(this).attr('href');
  console.log(id + "id");

  page = 0;
  count = $(id).find(".popup .info").length - 1;
  console.log(count + "циферь");

});

$(".left_arrow").click(function() {

  console.log("page left" + page);

    if(page <= 0) {
      page = count;
    } else {
      page--
    }

    var active = $(".info.active");

    height = active.height();
    console.log(height);
    $(".content").css("height", height + 55);

    $(".popup").find(".info").removeClass("active");
    $(".popup").find(".info[data-info-id=" + page + "]").addClass("active");
    console.log(page);
})

$(".right_arrow").click(function() {

  console.log("page right" + page);
    if(page >= count) {
      page = 0
    } else {
      page++
    }

    var active = $(".info.active");

    height = active.height();
    console.log(height);
    $(".content").css("height", height + 55);

    // console.log("right");
    $(".popup").find(".info").removeClass("active");
    $(".popup").find(".info[data-info-id=" + page + "]").addClass("active");
    console.log(page);
})

// $(function() {
//   $(".overlay").each(function(_, overlay) {
//     var $overlay = $(overlay);
//     var $carousel = $overlay.find(".carousel");
//     var $content = $overlay.find(".content");
//     var $ul = $carousel.find("ul");
//
//     $carousel.find(".right_arrow").click(function() {
//       var $first = $ul.find("li").first();
//
//       $ul.animate({
//         left: -222
//       }, 250, function() {
//         $first.detach();
//         $ul.append($first);
//         $ul.css("left", 0);
//       });
//     });
//
//     $carousel.find(".left_arrow").click(function() {
//       var $last = $ul.find("li").last();
//
//       $ul.css("left", -222);
//       $last.detach();
//       $ul.prepend($last);
//       $ul.animate({
//         left: 0
//       }, 250)
//     });
//
//     $ul.find("li").each(function(_, li) {
//
//       var $li = $(li);
//       $li.click(function() {
//         $content.find(".info").removeClass("active");
//         $content.find(".info[data-info-id=" + $li.attr("data-info-id") + "]").addClass("active");
//       });
//     });
//   });
// });
