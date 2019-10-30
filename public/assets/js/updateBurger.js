$(function() {
    $('.update-burger').on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr('id');
        var devouredState = {
            devoured: false
        };
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devouredState
        }).then(function() {
            location.reload();
        });
    });
});
