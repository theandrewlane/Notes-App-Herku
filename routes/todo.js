var mongoose = require('mongoose'),
    Todo = mongoose.model('Todo');

module.exports = {
    all: function(req, res){
        console.log('we are in todo.all')
        Todo.find({}, function(err, notes){
            if(err) res.render('error', { error: 'Could not fetch items from database :('});
            console.log('in the callback')
            res.render('notes', { notes: notes });
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
        var d = new Date();
        // create todo
        Todo.create({ content: todoContent }, function(err, note){
            if(err) res.render('error', { error: 'Error creating your note :('})
            res.redirect('/notes');
        });
    },
    destroy: function(req, res){
        var id = req.params.id;
        Todo.findByIdAndRemove(id, function(err, notes){
            if(err) res.render('error', { error: 'Error deleting todo'});
            res.redirect('/notes');
        });
    },
    edit: function(req, res){
        Todo.findOneAndUpdate({ _id: req.params.id }, {content: req.body.content}, function(err, notes){
            res.redirect('/notes');
        });
    }

};