import { ScrollView, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import { CATEGORIES } from './ListCategory'

const getCategory = id => {
    return CATEGORIES.find(item => item.id == id).name
}

const ProductItem = props => {
    const window = useWindowDimensions();
    const ITEM_SIZE = (window.width - 2 * 14 - 14 - 8) / 2;
    const PADDING_INNER = 10
    return (
        <View style={[{
            width: ITEM_SIZE,
            marginRight: props.index % 2 === 0 ? 14 : 0,
            padding: PADDING_INNER
        }, styles.container]}>
            <Image
                source={props.img}
                style={{ width: ITEM_SIZE - 2 * PADDING_INNER, height: (ITEM_SIZE - 2 * PADDING_INNER) * (107 / 144) }}
                resizeMode='contain' />
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.type}>{getCategory(props.type)}</Text>
            <View style={styles.bottom}>
                <Text style={styles.priceView}>
                    <Text style={styles.price}>{props.pricePerKg}</Text>
                    <Text> /Kg </Text>
                </Text>
                <TouchableOpacity>
                    <Image source={require('../assets/ic-add.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const ListBestSeller = ({ products = [] }) => {

    console.log('--- ListBestSeller::products -----')
    console.log(products)
    const renderItem = ({ item, index }) => <ProductItem index={index} {...item} />;
    return (
        // solution #2
        <View>
            <View>
                <Text style={styles.headerText}>Best Seller</Text>
            </View>
            <FlatList
                scrollEnabled={false}
                data={products}
                renderItem={renderItem}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ marginTop: 14 }} />}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
    },
    name: {
        fontSize: 12,
        fontWeight: '600',
        color: '#000000'

    },
    type: {
        fontSize: 10,
        color: '#A1A1A1'
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000000'
    },
    priceView: {
        fontSize: 12,
        color: '#A1A1A1'
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        backgroundColor: '#FFFFFF',
        margin: 2,
        borderRadius: 8,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1B1B1B',
        marginVertical: 18,
    }

});

export default ListBestSeller;