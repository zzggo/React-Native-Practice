'use strict';

var React = require('react-native');
var BookList = require('./BookList');

var {
    StyleSheet,
    NavigatorIOS,
    Component
   } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
            title: 'Search Books',
            component: BookList
        }}/>
        );
    }
}

module.exports = Search;
