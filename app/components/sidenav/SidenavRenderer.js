import React from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Divider, Badge } from "react-native-elements";

import styles from "./Style";

export default function (props, state) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={{ uri: this.state.image }}
        />
        <View style={styles.headerSubtitleContainer}>
          <Text style={styles.headerText}>{this.state.userName || '-'}</Text>
          <Text style={styles.headerText}>{this.state.userEmail || '-'}</Text>
        </View>
      </View>

      <ScrollView>
        <View>
          <View>
            <Divider style={styles.divider} />
            <Text style={styles.sectionHeadingStyle}>Subheader</Text>
          </View>

          <TouchableOpacity
            style={styles.navSectionStyle}
            onPress={this.navigateToScreen("Home")}
          >
            <View style={styles.iconCotainer}>
              <Icon name="home" style={styles.icon} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.navItemStyle}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navSectionStyle}
            onPress={this.navigateToScreen("Notification")}
          >
            <View style={styles.iconCotainer}>
              <Icon name="notifications" style={styles.icon} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.navItemStyle}>Notification</Text>
            </View>
            
            <View style={styles.badgeContainer}>
              <Badge value={this.state.notificationCount}/>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View>
            <Divider style={styles.divider} />
            <Text style={styles.sectionHeadingStyle}>Subheader</Text>
          </View>

          <TouchableOpacity
            style={styles.navSectionStyle}
            onPress={this.navigateToScreen("Contact")}
          >
            <View style={styles.iconCotainer}>
              <Icon name="email" style={styles.icon} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.navItemStyle}>Contact</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navSectionStyle}
            onPress={this.navigateToScreen("About")}
          >
            <View style={styles.iconCotainer}>
              <Icon name="info" style={styles.icon} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.navItemStyle}>About</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navSectionStyle}
            onPress={this.navigateToScreen("ReadMe")}
          >
            <View style={styles.iconCotainer}>
              <Icon name="description" style={styles.icon} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.navItemStyle}>Read Me</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navSectionStyle}
            onPress={this.logOut}
          >
            <View style={styles.iconCotainer}>
              <Icon name="power-settings-new" style={styles.icon} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.navItemStyle}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Powered by Aspire Software Solution</Text>
      </View>
    </View>
  );
}
