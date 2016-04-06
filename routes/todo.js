var mongoose = require('mongoose'),
    Todo = mongoose.model('Todo');

module.exports = {
    all: function(req, res){
        console.log('we are in todo.all')
        Todo.find({}, function(err, todos){
            if(err) res.render('error', { error: 'Could not fetch items from database :('});
            console.log('in the callback')
            res.render('notes', { notes: todos });
        });
    },
    viewOne: function(req, res){
        console.log(req.params.id);
        //Looking through the DB
        Todo.find({ _id: req.params.id }, function(err, note){
            res.render('note', { note: note[0] })
        });
    },
    create: function(req, res){
        var todoContent = req.body.content;
        // create todo
        Todo.create({ content: todoContent }, function(err, todo){
            if(err) res.render('error', { error: 'Error creating your note :('})
            // reload collection
            res.redirect('/notes');
        });
    },
    destroy: function(req, res){
        var id = req.params.id;

        Todo.findByIdAndRemove(id, function(err, todo){
            if(err) res.render('error', { error: 'Error deleting todo'});
            res.redirect('/notes');
        });
    },
    edit: function(req, res){
        Todo.findOneAndUpdate({ _id: req.params.id }, {content: req.body.content}, function(err, todo){
            res.redirect('/notes');
        });
    }

};