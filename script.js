var x = 0
var b
$(".input__button").click(function () {
    var a = $(".input__text").val();
    x++;

    if (a.length == 0) {
        alert("введите что нибудь");
        return
    }

    if (x == 5) {
        alert("больше нельзя");
        return;
    }

    function uniqId_checkbox() {
        b = Math.floor(Math.random() * 1000);
        return b;
    }

    function uniqId() {
        x++;
        return x;
    }


    var $li = $('<li/>', {
        class: 'uniqId'
    });

    $(".taskList__task").prepend($li)

    var $div1 = $('<div/>', {
        class: "div1"
    })

    var $div2 = $('<div/>', {
        class: "div2"
    })

    var $p = $('<p/>', {
        class: "text"
    })

    var $c = $('<input>', {
        type: "checkbox",
        class: "item__checkbox",
        id: uniqId_checkbox()
    })

    $($li).append($div1);

    $($div1).append($c);

    $($li).append($div2);

    $($div2).append($p);

    $($p).html(a);

    $('.item__checkbox').change(function () {
        $(this).prop('checked');
        if (j == true) {
            $(this).parent().parent().css('opacity', '0.5');
        } else {
            $(this).parent().parent().css('opacity', '1');
        }
    })

    $('.colorSelector__radio').change(function () {
       let l = $(this).attr('id');
        console.log(l)
        $('.uniqId input:checkbox:checked').each(function (index, element) {
            $(this).parent().parent().attr('id', l);
        })
    })
})