import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProjects } from '../../actions/project';
import PropTypes from 'prop-types';

export class Project extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired, 
    getProjects: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProjects();
  }
      render() {
        return (
          <Fragment>
            { this.props.projects.map((project) => (
                <div class="row row-cols-1 row-cols-md-2 " key={project.id}>
              <div class="col">
                <div className="card">
                    <div className="card-body">
                    <div className="card-title">
                      <h5 className="card-title">{project.title}</h5>
                      <hr />
                      <p className="card-text">{project.summary}</p>
                      <p className="card-text"><strong>Solve: </strong>{project.solve}</p>
                      <a className="btn btn-primary">Learn More</a>
                     </div>
                    </div>
                </div>
                </div>
                </div>
              ))}
          </Fragment>
        );
      }
    }

const mapStateToProps = state => ({
  projects: state.projects.projects,
})

export default connect(mapStateToProps, { getProjects })(Project);