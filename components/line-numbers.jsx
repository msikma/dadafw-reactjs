// ReactJS + Dada Framework <https://github.com/msikma/dadafw-reactjs>
// Copyright (C) 2013-2015, Michiel Sikma <michiel@sikma.org> and contributors
// MIT licensed

var React = require('react');

var DadaLineNumbers = React.createClass({
  getInitialState: function() {
    // Order of magnitude, e.g. 3 for line numbers up to 999.
    return {
      order: 0
    };
  },

  render: function() {
    return (
      <div className="dd-line-numbers order-0">
        <ul>
          <li>asdf</li>
        </ul>
      </div>
    );
  }
});

module.export = {
  DadaLineNumbers: DadaLineNumbers
};
