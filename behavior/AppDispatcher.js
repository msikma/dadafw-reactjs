// ReactJS + Dada Framework <https://github.com/msikma/dadafw-reactjs>
// Copyright (C) 2013-2015, Michiel Sikma <michiel@sikma.org> and contributors
// MIT licensed

var Dispatcher = require('flux/lib/Dispatcher');
var copyProperties = require('react/lib/copyProperties');

// Extend the generic Dispatcher with our own actions.
var AppDispatcher = copyProperties(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
