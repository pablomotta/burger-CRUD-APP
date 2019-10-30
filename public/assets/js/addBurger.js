// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $('.add-burger').on('submit', function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $('#burgerEntry')
                .val()
                .trim(),
            devoured: false
        };
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function() {
            console.log('Added new Burger');
            location.reload();
        });
    });
});
