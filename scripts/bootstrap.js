$.fn.editable.defaults.mode = 'inline';
$('#username').editable({
    type: 'text',
    pk: 2,
    url: 'post.txt',
    title: 'Enter username'
});


$('#usernamed').editable({
    type: 'text',
    pk: 1,
    url: 'post.txt',
    title: 'Enter username'
});
