import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HomeSvg from './svg/HomeSvg';
import BellSvg from './svg/BellSvg';
import PostSvg from './svg/PostSvg';
import ChatSvg from './svg/ChatSvg';
import UserSvg from './svg/UserSvg';
import { useNavigation } from '@react-navigation/native';

const BottomTabNavigation: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Home');
  const navigation = useNavigation();


  const handleTabPress = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[
          styles.tabItem,
          selectedTab === 'Home' && styles.selectedTabItem,
        ]}
        onPress={() => handleTabPress('Home')}
      >
        <HomeSvg color={selectedTab === 'Home' ? '#F04438' : '#33363F'}></HomeSvg>

        <Text
          style={[
            styles.tabText,
            selectedTab === 'Home' && styles.selectedTabText,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabItem,
          selectedTab === 'Activity' && styles.selectedTabItem,
        ]}
        onPress={() => handleTabPress('Activity')}
      >
        <BellSvg color={selectedTab === 'Activity' ? '#F04438' : '#33363F'}></BellSvg>

        <Text
          style={[
            styles.tabText,
            selectedTab === 'Activity' && styles.selectedTabText,
          ]}
        >
          Activity
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabItem,
          selectedTab === 'Post' && styles.selectedTabItem,
        ]}
        onPress={() => handleTabPress('Post')}
      >
        <PostSvg color={selectedTab === 'Post' ? '#F04438' : '#33363F'}></PostSvg>

        <Text
          style={[
            styles.tabText,
            selectedTab === 'Post' && styles.selectedTabText,
          ]}
        >
          Post
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabItem,
          selectedTab === 'Chat' && styles.selectedTabItem,
        ]}
        onPress={() => handleTabPress('Chat')}
      >
        <ChatSvg color={selectedTab === 'Chat' ? '#F04438' : '#33363F'}></ChatSvg>

        <Text
          style={[
            styles.tabText,
            selectedTab === 'Chat' && styles.selectedTabText,
          ]}
        >
          Chat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabItem,
          selectedTab === 'User' && styles.selectedTabItem,
        ]}
        onPress={() => handleTabPress('User')}
      >
        <UserSvg color={selectedTab === 'User' ? '#F04438' : '#33363F'}></UserSvg>

        <Text
          style={[
            styles.tabText,
            selectedTab === 'User' && styles.selectedTabText,
          ]}
        >
          User
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  selectedTabItem: {
    backgroundColor: '#ccc',
  },
  tabIcon: {
    width: 6.67,
    height: 8,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: 'red',
  },
  selectedTabIcon: {
    borderColor: '#F04438',
  },
  tabText: {
    fontSize: 16,
  },
  selectedTabText: {
    fontWeight: 'bold',
    color: '#F04438'
  },
});

export default BottomTabNavigation;
