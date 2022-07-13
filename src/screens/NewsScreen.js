import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Article from '../component/News/Article';
// import { getUSANews } from '../utils/fetchNews';
import { TouchableOpacity } from "react-native-gesture-handler";
import { GlobalStyles, Colors} from '@helpers';
import {
    Text,
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Image
  } from 'react-native';
  import {
    OtrixContainer, OtrixHeader, OtrixContent, OtrixDivider, OtrixSocialContainer, OtrixAlert, OtrixLoader,OtirxBackButton
} from '@component';

// import { getXMLResponse } from '../utils/fetchNews';
// import Article from '../component/News/Article';
import { XMLParser } from 'fast-xml-parser';



class News extends Component {
	state = {
		articles: [],
		refreshing: true
	};

	componentDidMount = () => {
		fetch('https://www.google.com/alerts/feeds/01768412586991802709/7866738149434837200')
		.then((response) => { 
			console.log("mota response ", response)
			return response.text();
		})
		.then((textResponse) => {
			const options = {
				ignoreAttributes : false
			};
			let parser = new XMLParser();
			let obj = parser.parse(textResponse);
			let jsonObj = JSON.stringify(obj)
			// let fname = obj.person.fname;
			// let lname = obj.person.lname;
			// let phone = obj.person.contacts.personal.phone;
			// this.setState({ fname: fname, lname: lname, phone: phone })
			console.log("===========================???????",obj);
		
			this.setState({ articles: obj?.feed?.entry ,refreshing:false});
			console.log("state=============>",obj);
			
		})
		.catch((error) => {
			console.log(error);
		});

	};

	fetchNews = () => {

		// .then(articles => {
		// 		this.setState({ articles, refreshing: false });
		// 	})
		// 	.catch(() => this.setState({ refreshing: false }));
	};

	//  getXMLResponse = () => {
	
	// }

	handleRefresh = () => {
		this.setState({ refreshing: true }, () => this.fetchNews());
	};

	render() {
		console.log(this.state.articles);
		return (
            <OtrixContainer>
             <OtrixHeader >
                <TouchableOpacity style={{paddingLeft:25}} onPress={() => props.navigation.goBack()}>
                <OtirxBackButton />

                </TouchableOpacity>
                <View style={[GlobalStyles.headerCenter, { flex: 1 }]}>
                    <Text style={GlobalStyles.headingTxt}> GI News</Text>
                </View>
            </OtrixHeader>
			<FlatList
				data={this.state.articles}
				renderItem={({ item }) =><Article article={item} />}
				keyExtractor={item => item.url}
				refreshing={this.state.refreshing}
				onRefresh={this.handleRefresh}
			/>
            </OtrixContainer>
		);
	}
}

export default News;