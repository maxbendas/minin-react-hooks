import React from 'react';

const Repos = ({repos}) => {
    return (
        <React.Fragment>
            {repos.map(repo=>(
                <div className="card mb-4" key={repo.id}>
                    <div className="card-body">
                        <h5>
                            <a href={repo.html_url}
                               target="_blank"
                               rel="noreferrer"
                               className="btn btn-dark"
                            > {repo.name} </a>
                        </h5>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

export default Repos;