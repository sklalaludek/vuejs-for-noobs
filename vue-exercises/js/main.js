//lifecycle hooks
//directives
var vm = new Vue ({
    el: '#app',
    data: {
        output: 'Hello World',
        err: 'sth wrong',
        searchme: '...',
        count: 4,
        items: [{
            todo: "write code"
        }, {
            todo: "create website"
        }, {
            todo: "load content"
        }]
    },
    created: function () {
        console.log('Instance created ' + this.output);
    }
});

vm.output = "new content";
