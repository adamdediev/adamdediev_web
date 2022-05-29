

$(document).ready(function () {
    $('#example').DataTable({
        'ajax':  './contacts/data.json',
        'columns': [
            { data: 'id' },
            { data: 'device' },
            { data: 'product' },
            { data: 'vendor' },
            { data: 'count' },
            { data: 'available' },
            { data: 'description' },
        ],
    });
});


router.get() 

