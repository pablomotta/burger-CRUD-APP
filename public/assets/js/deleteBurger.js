$(function() {
    $('.delete-burger').on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr('id');
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(function() {
            console.log('deleted burger!');
            location.reload();
        });
    });
});
