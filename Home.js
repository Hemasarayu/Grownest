import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

// Icon stubs (replace with actual icon components for production)
const TabIcon = ({ label }) => (
  <Text style={{ color: '#FD7F23', fontSize: 20, marginRight: 8 }}>{label}</Text>
);

const GridIcon = ({ color }) => (
  <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: color, marginBottom: 8 }} />
);

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* App Branding and Intro */}
        <Text style={styles.logo}>brownest</Text>
        <Text style={styles.intro}>
          A family-first startup focused on financial literacy that helps parents manage family finances and teaches teens smart money habits
        </Text>

        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>
            Start Your Family's Financial Journey
          </Text>
        </TouchableOpacity>

        <Text style={styles.caption}>
          Join thousands of families building better financial futures together
        </Text>

        {/* Feature Grid */}
        <View style={styles.gridRow}>
          <View style={styles.gridBox}>
            <GridIcon color="#FD7F23" />
            <Text style={styles.gridTitle}>Parents in Control</Text>
            <Text style={styles.gridDesc}>Monitor & guide spending</Text>
          </View>
          <View style={styles.gridBox}>
            <GridIcon color="#22517a" />
            <Text style={styles.gridTitle}>Teens Take Charge</Text>
            <Text style={styles.gridDesc}>Learn through practice</Text>
          </View>
        </View>
        <View style={styles.gridRow}>
          <View style={styles.gridBox}>
            <GridIcon color="#238a55" />
            <Text style={styles.gridTitle}>Smart Insights</Text>
            <Text style={styles.gridDesc}>Track progress together</Text>
          </View>
          <View style={styles.gridBox}>
            <GridIcon color="#7043ad" />
            <Text style={styles.gridTitle}>Family Community</Text>
            <Text style={styles.gridDesc}>Connect & grow together</Text>
          </View>
        </View>

        {/* Trusted by Families Section */}
        <View style={styles.trustedCard}>
          <Text style={styles.trustedTitle}>Trusted by Families Everywhere</Text>
          <View style={styles.trustedStatsRow}>
            <View style={styles.statBlock}>
              <Text style={styles.statValue}>50K+</Text>
              <Text style={styles.statLabel}>Active Families</Text>
            </View>
            <View style={styles.statBlock}>
              <Text style={styles.statValue}>$2M+</Text>
              <Text style={styles.statLabel}>Saved by Teens</Text>
            </View>
            <View style={styles.statBlock}>
              <Text style={styles.statValue}>4.9★</Text>
              <Text style={styles.statLabel}>App Rating</Text>
            </View>
          </View>
        </View>

        {/* Testimonial Card */}
        <View style={styles.testimonialCard}>
          <View style={styles.testimonialRow}>
            {/* Example avatar; replace with your own image */}
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/45.jpg' }}
              style={{
                width: 38,
                height: 38,
                borderRadius: 19,
                marginRight: 12,
                borderWidth: 2,
                borderColor: '#fff',
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.reviewerName}>Nouman Ejaz</Text>
              <Text style={styles.reviewerRole}>Parent of Two Teens</Text>
              <Text style={styles.stars}>★★★★★</Text>
            </View>
          </View>
          <Text style={styles.testimonialText}>
            "This app has transformed how I manage my kids' allowances. Seeing my teens prioritize their spending is a proud moment as a parent!"
          </Text>
        </View>

        {/* Feature and Stories Buttons */}
        <TouchableOpacity style={styles.featuresButton}>
          <Text style={styles.featuresText}>Explore All Features</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.storiesButton}>
          <Text style={styles.storiesText}>Read Success Stories</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Custom footer tabs */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <TabIcon label="🏠" />
          <Text style={styles.tabLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <TabIcon label="⭐" />
          <Text style={styles.tabLabel}>Features</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <TabIcon label="📝" />
          <Text style={styles.tabLabel}>Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <TabIcon label="📊" />
          <Text style={styles.tabLabel}>Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#14161b' },
  container: { padding: 20, paddingBottom: 130 },
  logo: { fontSize: 38, color: '#fff', fontFamily: 'Cursive', fontWeight: 'bold', marginTop: 30, textAlign: 'center' },
  intro: { color: '#fff', textAlign: 'center', marginVertical: 20, fontSize: 14 },
  ctaButton: { backgroundColor: '#FD7F23', borderRadius: 23, marginVertical: 12, alignSelf: 'center', paddingHorizontal: 24, paddingVertical: 12 },
  ctaText: { color: '#fff', fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
  caption: { color: '#e0e0e0', textAlign: 'center', marginVertical: 6, fontSize: 13 },
  gridRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  gridBox: { backgroundColor: '#23253d', borderRadius: 13, flex: 1, margin: 7, padding: 16, alignItems: 'center' },
  gridTitle: { color: '#fff', fontWeight: '600', fontSize: 15, textAlign: 'center' },
  gridDesc: { color: '#bdbdbd', fontSize: 13, textAlign: 'center', marginTop: 4 },

  trustedCard: {
    backgroundColor: '#503028',
    borderRadius: 18,
    padding: 16,
    marginVertical: 24,
    alignItems: 'center',
  },
  trustedTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 7,
    textAlign: 'center',
  },
  trustedStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  statBlock: { alignItems: 'center', flex: 1 },
  statValue: { color: '#FD7F23', fontWeight: 'bold', fontSize: 17 },
  statLabel: { color: '#fff', fontSize: 12 },

  testimonialCard: {
    backgroundColor: '#23253d',
    marginVertical: 14,
    borderRadius: 15,
    padding: 18,
  },
  testimonialRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 7 },
  reviewerName: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  reviewerRole: { color: '#bdbdbd', fontSize: 12, marginBottom: 4 },
  stars: { color: '#FD7F23', fontSize: 15, fontWeight: 'bold' },
  testimonialText: { color: '#fff', fontSize: 14, marginTop: 7, fontStyle: 'italic' },

  featuresButton: {
    backgroundColor: '#23253d',
    borderRadius: 12,
    alignItems: 'center',
    padding: 13,
    marginVertical: 8,
  },
  featuresText: { color: '#fff', fontWeight: '600', fontSize: 15 },

  storiesButton: {
    backgroundColor: '#23253d',
    borderRadius: 12,
    alignItems: 'center',
    padding: 12,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  storiesText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 6,
  },

  tabBar: {
    backgroundColor: '#23253d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 74,
    paddingHorizontal: 12,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabLabel: { color: '#bdbdbd', fontSize: 11, marginTop: 3 },
  tabLabelActive: { color: '#FD7F23', fontWeight: '700', fontSize: 11, marginTop: 3 },
});
