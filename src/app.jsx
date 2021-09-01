import React, { useState, useEffect, useCallback } from 'react';

import { Helmet } from 'react-helmet';
import SearchForm from './components/searchFom/searchForm';
import VideoList from './components/videoList/videoList';
import VideoView from './components/videoView/videoView';

import styles from './scss/app.module.scss';

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);
	const selectVideo = (video) => {
		setSelectedVideo(video);
	};

	//search
	//: query 라는 것을 받아와서 처리하는 함수이다.

	const search = useCallback((query) => {
		setSelectedVideo(null); //지정하면 원래화면으로 보인다.
		//로딩 스피너를 먼저 보여준다.
		youtube
			.search(query) //
			.then((videos) => setVideos(videos));
		//에러 피스터 화면 보여준다.
	}, []);

	// most popular

	useEffect(() => {
		youtube
			.mostPopular() //

			.then((videos) => setVideos(videos));
	}, [youtube]);

	return (
		<>
			<Helmet>
				<title>youtube clone</title>
				<meta charSet="utf-8" />
				<meta name="description" content="youtube clone" />

				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />

				<meta name="format-detection" content="telephone=no, address=no, email=no" />
			</Helmet>
			<SearchForm onSearch={search} />

			<div className={styles.content}>
				{selectedVideo && (
					<div className={styles.detail}>
						<VideoView video={selectedVideo} youtube={youtube} />
					</div>
				)}
				<div className={styles.list}>
					<VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'grid' : 'list'} />
				</div>
			</div>
		</>
	);
}

export default App;
