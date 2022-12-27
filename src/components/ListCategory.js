import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

export const CATEGORIES = [
    {
        id: 1,
        name: 'Vegetable',
        image: require('../assets/vegetable.png')
    },
    {
        id: 2,
        name: 'Fruit',
        image: require('../assets/fruit.png')
    },
    {
        id: 3,
        name: 'Dairy',
        image: require('../assets/dairy.png')
    },
    {
        id: 4,
        name: 'Meats',
        image: require('../assets/meats.png')
    },
]

const ListCategory = ({onChange, currentType}) => {
    console.log(currentType)
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {CATEGORIES.map(category =>
                <TouchableOpacity 
                    key={category.id} 
                    onPress={() => onChange(category.id)}
                    style={[
                        styles.item,
                        currentType == category.id && {backgroundColor: '#16C07B'},
                      ]}
                    > 
                    <Image source={category.image} />
                    <Text 
                    style={[
                        styles.name,
                        currentType == category.id && {color: '#FFFFFF'},
                      ]}>{category.name}</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    );
};

export default ListCategory;

const styles = StyleSheet.create({
    name: {
        fontSize: 12,
        color: '#A1A1A1',
        marginLeft: 8,
      },
    item: {
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 36,
        marginRight: 14,
      },
});
