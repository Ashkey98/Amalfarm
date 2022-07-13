import { parse } from 'fast-xml-parser';

export const getXMLResponse = () => {
    fetch('https://www.google.com/alerts/feeds/01768412586991802709/7866738149434837200')
        .then((response) => response.text())
        .then((textResponse) => {
            let obj = parse(textResponse);
            // let fname = obj.person.fname;
            // let lname = obj.person.lname;
            // let phone = obj.person.contacts.personal.phone;
            // this.setState({ fname: fname, lname: lname, phone: phone })
			console.log("obj",obj);
        })
        .catch((error) => {
            console.log(error);
        });
}
