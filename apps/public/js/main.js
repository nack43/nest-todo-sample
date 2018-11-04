$(function() {
  $('.delete').on('click', function() {
    var id = $(this).attr('data-delete-id')
    $.ajax({
      url: '/todo/' + id,
      type: 'DELETE'
    }).always(() => {
      window.location.href = '/todo'
    })
  })
})
