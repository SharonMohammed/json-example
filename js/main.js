$(function () {

    var $orders = $('#orders');
    var $name = $('#name');
    var $drink = $('#drink');

    $.ajax({
        type: 'GET',
        url: 'https://github.com/SharonMohammed/json-example/blob/master/js/JSON.json',
        success: function(orders){
            $.each(orders, function (i, order) {
                $orders.append('<li>name: ' + order.name +', drink: ' + order.species + '</li>');
            });
        },
        error: function () {
            alert('error loading orders');
        }
    });

    $('#add-order').on('click', function () {
        var order = {
            name: $name.val(),
            drink: $drink.val()
        };

        //$.ajax({
        //    type: 'POST',
        //    url: 'https://github.com/SharonMohammed/json-example/blob/master/js/JSON.json',
        //    success:
        //})
    }

    );
});