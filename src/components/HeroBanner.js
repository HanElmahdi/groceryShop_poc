import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';

const HeroList = [
    { id: 1, image: require('../assets/hero-banner.png') },
    { id: 2, image: require('../assets/hero-banner.png') },
    { id: 3, image: require('../assets/hero-banner.png') }
];

const Dot = ({ active }) => {
    return <View style={active ? styles.doActive : styles.dot}></View>;
}

const HeroBanner = () => {
    const window = useWindowDimensions();
    const ITEM_SIZE = window.width - 2 * 12;
    const [activeIndicator, setActiveIndicator] = React.useState(0);
    const onScroll = (evt) => {
        const index = Math.floor(evt.nativeEvent.contentOffset.x / ITEM_SIZE);
        setActiveIndicator(index);
    };
    return (
        <View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
            >
                {HeroList.map(item => <Image
                    key={item.id}
                    source={item.image}
                    style={{ width: ITEM_SIZE, height: ITEM_SIZE * (130 / 335) }}
                    resizeMode="contain" /> )}
            </ScrollView>
            <View style={styles.dotContainer}>
                <View style={styles.dotInner}>
                    {HeroList.map((item, index) =>
                        <Dot key={item.id} active={index === activeIndicator} />
                    )}
                </View>
            </View>
        </View>
    );
};

export default HeroBanner;

const styles = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: '#d9d9d9',
        marginHorizontal: 4
    },
    doActive: {
        width: 24,
        height: 8,
        borderRadius: 8,
        backgroundColor: '#26d38d',
        marginHorizontal: 4
    },
    dotContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 14
    },dotInner: {
        backgroundColor:'#F8F8F8',
        flexDirection: 'row',
        alignItems: 'center',
        padding:6,
        borderRadius:6,

    }
});
