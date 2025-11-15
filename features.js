import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const features = [
  {
    title: 'Parents in Control',
    desc: "Set spending limits, approve purchases, and monitor your teen's financial activity in real-time.",
  },
  {
    title: 'Teens Take Charge',
    desc: 'Empower your teens to make smart financial decisions with guided independence and learning opportunities.',
  },
  {
    title: 'Insights That Inspire',
    desc: 'Get detailed analytics and insights into spending patterns to make informed financial decisions.',
  },
  {
    title: 'Financial Wisdom, Together',
    desc: 'Learn financial literacy as a family with interactive lessons and shared goals.',
  },
  {
    title: 'Accounts Built Just for You',
    desc: 'Customized accounts designed specifically for families and teens with age-appropriate features.',
  },
  {
    title: 'Learn and Grow with Others',
    desc: 'Connect with other families and share financial learning experiences in a safe community.',
  },
];

export default function FeaturesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header & Nav */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Features</Text>
      </View>
      <ScrollView>
        <Text style={styles.pageTitle}>
          Everything Your Family Needs
        </Text>
        <Text style={styles.pageSub}>
          Discover powerful features designed to help your family build better financial habits together.
        </Text>

        {features.map((item, idx) => (
          <View style={styles.card} key={idx}>
            <View style={styles.cardTitleRow}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.plusIcon}>+</Text>
            </View>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>Get Started Today</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer tab bar mimic */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabLabelActive}>Features</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabLabel}>Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Text style={styles.tabLabel}>Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#14161b', paddingTop: 20, paddingHorizontal: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  backArrow: { fontSize: 22, color: '#fff', padding: 6 },
  headerTitle: { fontSize: 18, color: '#fff', fontWeight: 'bold', marginLeft: 18 },
  pageTitle: { fontWeight: 'bold', fontSize: 22, color: '#fff', marginTop: 16, marginBottom: 3 },
  pageSub: { color: '#d0d0d0', fontSize: 14, marginBottom: 15 },
  card: {
    backgroundColor: '#23253d',
    borderRadius: 13,
    marginVertical: 9,
    padding: 16,
  },
  cardTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 },
  cardTitle: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  plusIcon: { color: '#FD7F23', fontWeight: 'bold', fontSize: 20 },
  cardDesc: { color: '#bdbdbd', fontSize: 13, marginTop: 5 },
  ctaButton: {
    backgroundColor: '#FD7F23',
    borderRadius: 22,
    alignItems: 'center',
    paddingVertical: 14,
    marginVertical: 17,
    alignSelf: 'center',
    width: '70%',
  },
  ctaText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  tabBar: {
    backgroundColor: '#23253d', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    position: 'absolute', bottom: 0, left: 0, right: 0, height: 64, paddingHorizontal: 12, borderTopLeftRadius: 17, borderTopRightRadius: 17
  },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabLabel: { color: '#bdbdbd', fontSize: 12, marginTop: 2 },
  tabLabelActive: { color: '#FD7F23', fontWeight: '700', fontSize: 12, marginTop: 2 },
});
