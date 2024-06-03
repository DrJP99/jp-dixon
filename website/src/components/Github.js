import { useEffect, useState } from 'react'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const GithubHeader = ({ user }) => {
	return (
		<div className="gh-header mb-4">
			<Card className="bg-black">
				<CardBody>
					<Row className="text-center">
						<Col>
							<Link to={user.html_url} target="_blank">
								<Image
									src={user.avatar_url}
									roundedCircle
									fluid
									style={{ maxHeight: '130px' }}
									alt={user.login + "'s avatar"}
								/>
							</Link>
						</Col>
						<Col lg={10} md={12}>
							<Row>
								<Col>
									<h3>
										<Link
											to={user.html_url}
											target="_blank"
										>
											{user.login}
										</Link>
									</h3>
									<p className="text-info">({user.name})</p>
								</Col>
								<Col>
									<p>
										Public Repos:{' '}
										<span className="text-success">
											{user.public_repos}
										</span>
									</p>
								</Col>
							</Row>
							<Row>
								<p>
									<span className="text-success">
										{user.followers}
									</span>{' '}
									followers -{' '}
									<span className="text-success">
										{user.following}
									</span>{' '}
									following
								</p>
							</Row>
						</Col>
					</Row>
				</CardBody>
			</Card>
		</div>
	)
}

const GithubRepo = ({ repo }) => {
	return (
		<div className="gh-repo">
			<Card>
				<CardBody>
					<h4>
						<Link to={repo.html_url} target="_blank">
							{repo.name}
						</Link>
					</h4>
					{repo.language ? (
						<p>
							(
							<span className="text-success">
								{repo.language}
							</span>
							)
						</p>
					) : (
						<></>
					)}
					{repo.description ? <p>{repo.description}</p> : <></>}
				</CardBody>
			</Card>
		</div>
	)
}

const Github = () => {
	const [user, setUser] = useState()
	const [repos, setRepos] = useState()

	useEffect(() => {
		axios
			.get('http://api.github.com/users/DrJP99')
			.then((res) => {
				console.log(res.data)
				setUser(res.data)
				axios
					.get(res.data.repos_url)
					.then((res) => {
						setRepos(res.data)
						console.log(res.data)
					})
					.catch((err) => console.error(err.message))
			})
			.catch((err) => console.error(err.message))
	}, [])

	return (
		<Container>
			<h1 className="text-danger">My Github</h1>
			{user ? <GithubHeader user={user} /> : null}
			{user && repos ? (
				<div className="row">
					{repos.map((repo) => (
						<div className="col-md-4 col-sm-6 col-12 mb-4">
							<GithubRepo key={repo.id} repo={repo} />
						</div>
					))}
				</div>
			) : null}
		</Container>
	)
}

export default Github
