import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, Image, ActivityIndicator } from 'react-native';
import AppHeader from './components/AppHeader';
import HeroBanner from './components/HeroBanner';
import ListCategory from './components/ListCategory';
import ListBestSeller from './components/ListBestSeller';
import { useProduct } from '../hooks/useProduct';


const App = () => {

  const [products, isLoading, fetchProducts] = useProduct([]);
  const [type, setType] = React.useState(1);

  React.useEffect(() => {
    fetchProducts(type);
  }, [type, fetchProducts]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <AppHeader />
        <View style={styles.searchContainer}>
          <Image source={require('./assets/ic-search.png')} />
          <Text style={styles.searchText}>Search By item name</Text>
        </View>
        <HeroBanner />
        <ListCategory
          onChange={setType}
          currentType={type}
        />
        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        ) : (

          <ListBestSeller products={products} />
        )
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F8F8F8',
    borderRadius: 100,
    marginVertical: 14
  },
  searchText: {
    fontSize: 12,
    marginLeft: 6,
    color: '#A1A1A1'
  },
  scrollView: {
    padding: 12,
  },
  loading:{
    margin:18
  }
});
