import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProjects } from '../../actions/project';

export class Form extends Component {
  state = {
    title: '',
    summary: '',
    solve: '',
    date: '',
  };

  static propTypes = {
    addProjects: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { title, summary, solve, date } = this.state;
    const project = { title, summary, solve, date };
    this.props.addProjects(project);
  };
      render() {
       
        const { title, summary, solve, date } = this.state;
        return (
          <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
              <h2 className="text-center">Post A Project</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={this.onChange}
                    value={title}
                  />
                </div>
                <div className="form-group">
                  <label>Summary</label>
                  <input
                    type="text"
                    className="form-control"
                    name="summary"
                    onChange={this.onChange}
                    value={summary}
                  />
                </div>
                <div className="form-group">
                  <label>Solve</label>
                  <input
                    type="text"
                    className="form-control"
                    name="solve"
                    onChange={this.onChange}
                    value={solve}
                  />
                </div>
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    onChange={this.onChange}
                    value={date}
                  />
                </div>
                <br />
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                   Post it!
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      }
    }

export default connect(null, { addProjects })(Form);