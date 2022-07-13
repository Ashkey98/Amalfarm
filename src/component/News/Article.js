import React, { Component } from 'react';
import { View, Linking, TouchableHighlight } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';

import { news_placeholder } from '@common';

// const defaultJSONData = {
// 	source: {
// 		id: 'fox-news',
// 		name: 'Fox News'
// 	},
// 	author: null,
// 	title:
// 		"Jeff Bezos' investigator believes 'government entity' may have obtained texts: WashPo reporter - Fox News",
// 	description:
// 		'A security consultant for Amazon founder and Washington Post owner Jeff Bezos believes the CEO’s lurid intimate photos may have been acquired by a "government entity," a reporter at the paper said Thursday.',
// 	url:
// 		'https://www.foxnews.com/tech/jeff-bezos-investigator-believes-government-entity-obtained-texts-wapo-reporter',
// 	urlToImage:
// 		'https://media2.foxnews.com/BrightCove/694940094001/2019/02/08/694940094001_5999770984001_5999767526001-vs.jpg',
// 	publishedAt: '2019-02-08T07:52:57Z',
// 	content:
// 		'A security consultant for Amazon founder and Washington Post owner Jeff Bezos believes the CEO’s lurid intimate photos may have been acquired by a "government entity," a reporter at the paper said Thursday. Manuel Roig-Franzia, the reporter, told MSNBC that w… [+1410 chars]'
// };

class Article extends Component {
	render() {
		const {
			id,
			title,
			description,
			publishedAt,
			source,
			urlToImage,
			url
		} = this.props.article;
console.log('iddddd',this.props);


		const time = moment(publishedAt || moment.now()).fromNow();

		return (
			<TouchableHighlight>
				<Card
					featuredTitle={title}
					featuredTitleStyle={{
						marginHorizontal: 5,
						textShadowColor: '#00000f',
						textShadowOffset: { width: 3, height: 3 },
						textShadowRadius: 3
					}}
					image={{
						uri: urlToImage
					}}
				>
					<Text style={{ marginBottom: 10 }}>
						{/* {description || 'Read more...'} */}
						{this?.props?.article?.title}
					</Text>
					{/* <Divider style={{ backgroundColor: '#dfe6e9' }} /> */}
					<View
						style={{ flexDirection: 'row', justifyContent: 'space-between' }}
					>
						{/* <Text
							style={{
								margin: 5,
								fontStyle: 'italic',
								color: '#b2bec3',
								fontSize: 10
							}}
						>
							{this?.props?.article?.author.name}
						</Text> */}
						<Text
							style={{
								fontStyle: 'normal',
								fontSize: 14
							}}
						>
							{this?.props?.article?.content}
						</Text>

						<Text
							style={{
								fontStyle: 'italic',
								color: '#b2bec3',
								fontSize: 10,
								right:90,
								top:55
							}}
						>
							{this?.props?.article?.published}
						</Text>
					</View>
				</Card>
			</TouchableHighlight>
		);
	}
}

export default Article;