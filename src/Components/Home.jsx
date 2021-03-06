import React from 'react';
import { Link } from 'react-router-dom';
import data from '../Json/random.json';
import style from './style/style.module.css';

export default function Home() {
	return (
		<div style={{ marginTop: '3.2%', textAlign: 'center' }}>
			<div className={style.floating}>
				<h1 className={style.heading1}>Ready to define your future?</h1>
				<Link to="/account">
					<button className={style.bottomBtn}>Enroll Now!</button>
				</Link>
			</div>
			<div className={style.image1} />
			<div style={{ background: 'whitesmoke', padding: '2%', marginTop: '2%' }}>
				<h1>What is Top Talented Tutorials (T3) ?</h1>
				<p>
					T3 is an intensive programme of tuition services designed to stretch and challenge the very best of
					its student's overall academic development
				</p>
			</div>
			<h2 style={{ marginTop: '2%' }}>T3 Classes Notes are here</h2>
			<div style={{ display: 'flex', flexDirection: 'row', marginTop: '3%' }}>
				{data &&
					data.map((item) => (
						<Link
							key={item.id}
							style={{ width: '20%', color: 'black', textDecoration: 'none' }}
							to={`/classnotes/${item.id}/${item.subjectId}`}
						>
							<div>
								<img src={item.avatar} width="100px" alt="note1" />
							</div>
							<div>
								<h1>{item.name}</h1>
								<p>
									<small>Class {item.id}</small>
								</p>
							</div>
						</Link>
					))}
			</div>
			<div style={{ background: 'whitesmoke', padding: '2%', marginTop: '2%' }}>
				<h1>Why we started T3?</h1>
				<p>
					T3 is an intensive programme of tuition services designed to stretch and challenge the very best of
					its student's overall academic development
				</p>
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', width: '70%', marginLeft: '15%', marginTop: '2%' }}>
				<div style={{ width: '25%', color: 'teal' }}>
					<h1>Our Teachers</h1>
				</div>
				<div style={{ width: '25%' }}>
					<img className={style.teach} src="https://www.masaischool.com/static/team/nrupul.jpeg" alt="1" />
					<h1>Nrupul Dev</h1>
					<small>(Mathematics)</small>
				</div>
				<div style={{ width: '25%' }}>
					<img className={style.teach} src="https://www.masaischool.com/static/team/albert.jpeg" alt="2" />
					<h1>Albert</h1>
					<small>(English)</small>
				</div>
				<div style={{ width: '25%' }}>
					<img className={style.teach} src="https://www.masaischool.com/static/team/aman.jpg" alt="3" />
					<h1>Aman</h1>
					<small>(Mathematics) </small>
				</div>
			</div>
			<Link to="/account">
				<button className={style.bottomBtn}>Enroll Now!</button>
			</Link>
		</div>
	);
}
