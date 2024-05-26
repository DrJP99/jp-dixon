import { useEffect, useState } from 'react'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const GithubHeader = ({ user }) => {
	return (
		<div className="gh-header">
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

const Github = () => {
	const [user, setUser] = useState()

	useEffect(() => {
		axios
			.get('http://api.github.com/users/DrJP99')
			.then((res) => {
				console.log(res.data)
				setUser(res.data)
			})
			.catch((err) => console.log(err.message))
	}, [])

	return (
		<Container>
			<h1 className="text-danger">My Github</h1>
			{user ? <GithubHeader user={user} /> : null}
		</Container>
	)
}

export default Github
