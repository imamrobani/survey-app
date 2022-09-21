import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {
  IcTabHomeOn,
  IcTabHomeOff,
  IcTabCustomerOn,
  IcTabCustomerOff,
  IcTabSurveyOn,
  IcTabSurveyOff,
  IcTabHelpOn,
  IcTabHelpOff
} from '../../../assets';
import {fontType} from '../../../const';
import {Gap} from '../../atoms';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <IcTabHomeOn /> : <IcTabHomeOff />;
    case 'Customer':
      return focus ? <IcTabCustomerOn /> : <IcTabCustomerOff />;
    case 'Survey':
      return focus ? <IcTabSurveyOn /> : <IcTabSurveyOff />;
    case 'Bantuan':
      return focus ? <IcTabHelpOn /> : <IcTabHelpOff />;
    default:
      return <IcTabHomeOn />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.contentContainer}>
              <Icon label={label} focus={isFocused} />
              <Gap height={8} />
              <Text style={isFocused ? fontType.fs10RegPrimary : fontType.fs10RegBlack}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 16,
    justifyContent: 'space-evenly',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  contentContainer: {alignItems: 'center'}
});
