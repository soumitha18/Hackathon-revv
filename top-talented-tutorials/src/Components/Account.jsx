import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';
import style from './style/style.module.css';
import styles from './Account.module.css';
import axios from 'axios';

function Account() {
	const context = useContext(AuthContext);
	const { login, loginUser, registration } = context;
	console.log(loginUser);
	const [ request, setRequest ] = useState(false);
	const [ payment, setPayment ] = useState(false);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ mobile, setMobile ] = useState('');
	const [ Num, setNum ] = useState(1);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isError, setIsError ] = useState(false);

	const loginApi = async () => {
		let accessToken;
		await axios({
			method: 'post',
			url: 'https://cors-anywhere.herokuapp.com/https://ft15gm1a.revvsales.com/api/v2/auth/initiate-auth',
			data: {
				user_email: 'soumithaalpineti@gmail.com',
				password: 'Schm@123',
				org_domain: 'ft15gm1a'
			},
			headers: {
				GrantType: 'password'
			}
		})
			.then((res) => {
				console.log(res);
				accessToken = res.data.User.access_token;
				return res.data.User.access_token;
			})
			.catch((err) => (accessToken = false));

		return accessToken;
	};

	// CREATE OPPORTUNITY API
	const opportunityApi = async () => {
		setIsLoading(true);
		setIsError(false);
		console.count('handleRequestCall');
		await axios({
			method: 'post',
			url: 'https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/zapier/actions',
			params: {
				action_name: 'CreateOpportunity'
			},
			headers: {
				ApiKey: 'Zapier-7WeYJUbO5GnR'
			},
			data: {
				name: 'Sample Opportunity2',
				stage_name: 'OpenNegotiation',
				close_date: '42342322242',
				expected_revenue: 32323,
				external: 'External-Test1234',
				email: 'opportunity@revvsales.com'
			}
		})
			.then((res) => {
				console.log(res);
				setIsLoading(false);
				setIsError(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
				setIsError(true);
			});
	};

	// CREATE CONTACT API
	const contactApi = async () => {
		setIsLoading(true);
		setIsError(false);
		await axios({
			method: 'post',
			url: 'https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/zapier/actions',
			params: {
				action_name: 'CreateContact'
			},
			headers: {
				ApiKey: 'Zapier-7WeYJUbO5GnR'
			},
			data: {
				name: 'Sample Contact info Test',
				external: 'externalId-test1',
				email: 'ajay+test@revvsales.com',
				title: 'Mr',
				description: 'My test Opportunity',
				phone: '892893823',
				type: 'individual',
				linkedin: 'https://www.linkedin.com/company/revvsales',
				instagram: 'https://www.instagram.com/revvsales/',
				twitter: '@RevvSales',
				notes: 'Some Random Notes for the contact'
			}
		})
			.then((res) => {
				console.log(res);
				setIsLoading(false);
				setIsError(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
				setIsError(true);
			});
	};

	const sharePrivatelyApi = async () => {
		await axios({
			method: 'post',
			url: 'https://cors-anywhere.herokuapp.com/https://api.revvsales.com/api/v2/doc-recipients/14',
			data: {
				collaborators: [
					{
						user_email: 'aayu.masai@gmail.com',
						first_name: 'Masai',
						last_name: 'School'
					}
				],
				isReview: false,
				reviewerEmailMessage: 'Hello... Its me!'
			},
			headers: {
				AccessToken:
					'eyJraWQiOiIyWm1yRW1rdHpJamxCQTlhTzE0MzhBUWxmcmZOV3ROYTV0RXJ4WHJTTlB3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkZmNiN2ZjZi1iOWI0LTRhYmMtYWE5ZS02YjJlMjBiMTdlOWYiLCJldmVudF9pZCI6ImMwNDg0YmZiLTIzZjItNGM4Mi1iODE5LWEyMDhhMjQ5NTdhZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDAzODUwMTgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX2Z0MWRTOTZTYyIsImV4cCI6MTYwMDM4ODYxOCwiaWF0IjoxNjAwMzg1MDE4LCJqdGkiOiI0NTg0ZmIzNC1iZGNiLTRiYzQtYTVjZS04MDRjMzQxNDFiNzciLCJjbGllbnRfaWQiOiI3dDd0OHBjNGZjOWIwZm50OWFrOW5zMzg1NiIsInVzZXJuYW1lIjoiZGZjYjdmY2YtYjliNC00YWJjLWFhOWUtNmIyZTIwYjE3ZTlmIn0.NyaAiT8-3YZ_y18gdGesR_1o9b8FBkblMpDveYVTlj9f1t0FNZsaLiWzbkJf6mHjiRJw2g3RcNW_pPxlnHAN8dKUnBbyquc_YhTEupM_YYlWn0f0wQSgYHVM065v8uM0jWSZT-E1Jv9_dhZ6SzIpzIleqJd9kmHzZvGnJVm-f79OlRLZcdnnElE8vCBWjr0sxbFhs0cLIyDB3sJrXd5gJrM4EcOYb9BJzxuqxHTFkwA1ttrx62D4Qqgr4JhyyhJO0RN-tTwHBOquzzmXKkY9rYiEzR-e8QAjAqs6qvYmgWNYN6MbvahHpu0haVfBGmciUTz8q2BaKbuRo7DEYtCs6g'
			}
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	const handleRegister = () => {
		sharePrivatelyApi();
		const obj = {
			name,
			email,
			mobile,
			class: Number(Num)
		};
		registration(obj);
	};

	const handleRequest = () => {
		const obj = {
			name,
			email,
			mobile
		};
		console.log(obj);
	};

	return login ? (
		<div style={{ marginTop: '5%' }}>
			<div className={style.account}>
				<div style={{ width: '30%' }}>
					<img src="https://via.placeholder.com/200x200" alt="user" style={{ borderRadius: '100px' }} />
				</div>
				<div style={{ width: '60%', marginLeft: '10%', paddingTop: '3%' }}>
					<h1>{loginUser.name}</h1>
					<h5>{loginUser.email}</h5>
					<h5>{loginUser.mobile}</h5>
				</div>
			</div>
		</div>
	) : request ? (
		<div className={styles.actions}>
			<div className={styles.requestCallForm}>
				<label>
					Name:
					<br />
					<input
						type="text"
						placeholder="Enter your Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Email:
					<br />
					<input
						type="text"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Contact No:
					<br />
					<input
						type="text"
						placeholder="Enter your contact number"
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
					/>
				</label>
				<label>
					<br />
					<button onClick={handleRequest}>Request Call</button>
				</label>
			</div>
		</div>
	) : payment ? (
		<div className={styles.actions}>
			<div className={styles.requestCallForm}>
				<label>
					Name:
					<br />
					<input
						type="text"
						placeholder="Enter your Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Email:
					<br />
					<input
						type="text"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Mobile:
					<br />
					<input
						type="text"
						placeholder="Enter your contact number"
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
					/>
				</label>
				<label>
					Class:
					<br />
					<select onChange={(e) => setNum(e.target.value)}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</label>
				<label>
					<br />
					<button onClick={handleRegister}>Make Payment</button>
				</label>
			</div>
		</div>
	) : (
		<div className={styles.actions}>
			<h1>Seems like you haven't enrolled yet</h1>
			<button onClick={() => setRequest(true)}>Request a Call</button>
			<button onClick={() => setPayment(true)}>Enroll Now</button>
		</div>
	);
}

export default Account;
