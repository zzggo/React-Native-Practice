'use strict';

var React = require('react-native');
var Featured = require('./Featured');
var Search = require('./Search');
var Beacon = require('./Beacon');

var {
    AppRegistry,
    TabBarIOS,
    Component
   } = React;

class ReactNativeBeaconExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'featured'}
                    systemIcon="featured"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <Featured/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'search'}
                    systemIcon="search"
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Beacon/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('ReactNativeBeaconExample', () => ReactNativeBeaconExample);
