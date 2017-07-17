import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  SectionList
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  listView: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  row: {
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowLeftText: {
    flex: 3,
    marginLeft: 15,
  },
  rowRightText: {
    flex: 1,
    textAlign: 'right',
    marginRight: 15,
  },
  sectionHeader: {
    backgroundColor: '#f7f7f7',
    height: 25,
    justifyContent: 'center',
  },
  sectionHeaderText: {
    color: '#666666',
    fontSize: 14,
    marginLeft: 15,
    fontWeight: 'bold',
  },
});


export default class LoginCountryList extends React.Component {
  static defaultProps = {
    data: {},
  };

  renderRow = (rowItem) => {
    console.log('render row:');
    return (
      <TouchableHighlight
        onPress={() => this.props.onSelectRow(rowItem.item)}
      >
        <View style={styles.row}>
          <Text style={styles.rowLeftText}>{rowItem.item.name}</Text>
          <Text style={styles.rowRightText}>{`+${rowItem.item.ccc}`}</Text>
        </View>
      </TouchableHighlight>
    )
  };

  renderSectionHeader = (sectionItem: any) => (
    <View
      style={styles.sectionHeader}
    >
      <Text style={styles.sectionHeaderText}>{sectionItem.section.title}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          style={styles.listView}
          sections={this.props.data}
          renderItem={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
        />
      </View>
    );
  }
}

