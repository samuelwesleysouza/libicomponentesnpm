import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions, Text } from 'react-native';
import { buttonstyle } from '../../styles/styleButton';


const { width } = Dimensions.get('window');

type CarouselCustomProps = {
  arrayImages: { 
    image?: number, 
    text?: string,   
    isFinalSlide?: boolean  
  }[],  
  onFinish: () => void  
};

export default function CarouselCustom({ arrayImages, onFinish }: CarouselCustomProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slideIndex);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={arrayImages}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            {item.image && <Image source={item.image} style={styles.image} />}
            {item.text && <Text style={styles.text}>{item.text}</Text>}
            {item.isFinalSlide && (
              <View style={styles.finalSlideContent}>
                
              </View>
            )}
          </View>
        )}
      />
      <View style={styles.indicatorContainer}>
        {arrayImages.map((_, index) => (
          <View
            key={index}
            style={[styles.indicator, currentIndex === index && styles.activeIndicator]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  slide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  finalSlideContent: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    padding: 20,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    display: 'flex',
    marginBottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#c3bddb',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#c3bddb',
    width: 10,
    height: 10,
  },
});
