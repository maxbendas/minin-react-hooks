import React, {useEffect, useContext, Fragment} from 'react';
import {GithubContext} from "../context/github/githubContext";
import {Link} from "react-router-dom";
import Repos from "../components/Repos";

const Profile = ({match}) => {

    const urlName = match.params.name

    const {getUser, getRepos, user, repos, loading} = useContext(GithubContext)

    useEffect(() => {
        getUser(urlName)
        getRepos(urlName)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className="text text-center">Loading...</p>
    }

    const {
        name, company, avatar_url, location,
        bio, blog, login, html_url, followers,
        following, public_repos, public_gists
    } = user

    return (
        <Fragment>
            <Link to="/" className="btn btn-link">At home</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url}
                                 alt={name}
                                 style={{width: '150px'}}
                            />
                            <h1>{name}</h1>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a href={html_url}
                               target="_blank"
                               rel="noreferrer"
                               className="btn btn-dark"
                            > Open profile </a>
                            <ul>
                                {login && <li>
                                    <strong>Username: </strong>{login}
                                </li>}
                                {company && <li>
                                    <strong>Company: </strong>{company}
                                </li>}
                                {blog && <li>
                                    <strong>Website: </strong>{blog}
                                </li>}
                            </ul>
                            <span className="badge badge-primary">Followers: {followers}</span>
                            <span className="badge badge-secondary">Following: {following}</span>
                            <span className="badge badge-success">Repositories: {public_repos}</span>
                            <span className="badge badge-danger">Gists: {public_gists}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </Fragment>
    );
};

export default Profile;