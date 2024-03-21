import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { verticalScale, horizontalScale } from '../../utils/ScaleSize'
import { DetailsData } from '../../data/Data'
import LinearGradient from 'react-native-linear-gradient'
import { ratingData } from '../../data/Data'
import String from '../../contants/Strings/Strings'

const ReviewDetails = () => {
    const [visible, setVisible] = useState(1);
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={require('../../assets/images/FoodPic.png')} style={styles.imageStyle} />
            </View>
            <View style={styles.imageTextView}>
                <Text style={styles.imageText}>ABC Pizzeria</Text>
                <Text style={styles.imagetext2}>Jalan ABC no 1, Kelapa Gading, Jakarta</Text>
                <Text style={styles.imagetext2}>081234567890</Text>

            </View>
            <ScrollView horizontal={true} style={{ flexGrow: 0 }} showsHorizontalScrollIndicator={false}>
                <View style={styles.buttonView}>
                    {DetailsData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => {
                                item.id === 1 ?
                                    setVisible(1) :
                                    item.id === 2 ?
                                        setVisible(2) :
                                        item.id === 3 ?
                                            setVisible(3) :
                                            item.id === 4 ?
                                                setVisible(4) :
                                                setVisible(false)
                            }}>
                                {visible == item.id ? (
                                    <LinearGradient colors={['#F9A11B', '#F96B1B']} angle={180} useAngle={true} style={styles.buttonTouch}>
                                        <Text style={styles.buttonText}>{item.name}</Text>
                                    </LinearGradient>
                                ) : <LinearGradient colors={['white', 'white']} angle={180} useAngle={true} style={styles.buttonTouch}>
                                    <Text style={styles.buttonText1}>{item.name}</Text>
                                </LinearGradient>
                                }
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
            {visible === 1 && (
                <>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <View style={{ flexDirection: 'row', marginLeft: horizontalScale(20), gap: 20, marginTop: verticalScale(30) }}>
                            <Image source={require('../../assets/images/shop.png')} />
                            <Image source={require('../../assets/images/images.png')} />
                        </View>
                    </ScrollView>
                    <View style={{ alignSelf: 'center', width: horizontalScale(375), height: 200, bottom: verticalScale(80) }}>
                        <Text style={{ textAlign: 'justify', fontSize: 12, fontWeight: '400' }}>{String.Description}</Text>
                    </View>
                </>
            )}
            {visible === 2 && (
                <>
                    <View style={styles.ratingView}>
                        <View style={styles.gap}>
                            <Text style={styles.reviewText}>5.0</Text>
                            <Text style={styles.reviews}>2 Reviews</Text>
                        </View>
                        <View style={styles.ratingGraph}>
                            {ratingData.map((item, index) => {
                                return (
                                    <View key={index} style={{ flexDirection: 'row-reverse', }}>
                                        <View style={styles.ratingNumber} />
                                        <Text style={styles.numberText}>{item.number}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                    <View style={styles.btnReview}>
                        <TouchableOpacity>
                            <LinearGradient colors={['#F9A11B', '#F96B1B']} useAngle={true} angle={180} style={styles.linearView}>
                                <Text style={styles.btnTextReview}>Add your review</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.reviewDetails}>
                        <View>
                            <Image source={require('../../assets/images/Account.png')} />
                        </View>
                        <View style={styles.detailsText}>
                            <Text style={styles.name}>Wayan Sandra</Text>
                            <Text style={styles.reviewDate}>10 Mar 2023</Text>
                            <View style={styles.reviewDesc}>
                                <Text style={styles.reviewDescStyle}>Tempatnya bagus! Banyak objek yang bisa dijadikan tempat untuk foto!</Text>
                                <Image source={require('../../assets/images/ratingView.png')} />
                            </View>
                        </View>
                    </View>
                </>
            )}
            {visible === 3 && (
                <ScrollView style={{ height: 0 }} showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={{ marginTop: verticalScale(30), gap: 5 }}>
                            <Image source={require('../../assets/images/restVideo.png')} />
                            <Text style={{ marginLeft: verticalScale(20), color: '#484848', fontWeight: '700', fontSize: 20 }}>ABC Pizzeria</Text>
                            <Text style={{ marginLeft: verticalScale(20) }}>Reviewer A</Text>
                        </View>
                        <View style={{ marginTop: verticalScale(30), gap: 5 }}>
                            <Image source={require('../../assets/images/restVideo.png')} />
                            <Text style={{ marginLeft: verticalScale(20), color: '#484848', fontWeight: '700', fontSize: 20 }}>ABC Pizzeria</Text>
                            <Text style={{ marginLeft: verticalScale(20) }}>Reviewer B</Text>
                        </View>
                        <View style={{ marginTop: verticalScale(30), gap: 5 }}>
                            <Image source={require('../../assets/images/restVideo.png')} />
                            <Text style={{ marginLeft: verticalScale(20), color: '#484848', fontWeight: '700', fontSize: 20 }}>ABC Pizzeria</Text>
                            <Text style={{ marginLeft: verticalScale(20) }}>Reviewer C</Text>
                        </View>
                    </View>
                </ScrollView>
            )}
            {visible === 4 && (
                <>
                    <View style={{ marginLeft: horizontalScale(20), marginTop: verticalScale(30) }}>
                        <Image source={require('../../assets/images/menu.png')} />
                    </View>
                    <View style={styles.downloadBtn}>
                        <TouchableOpacity style={styles.downloadStyle}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: horizontalScale(20) }}>
                                <Image source={require('../../assets/images/download.png')} />
                                <Text style={styles.downloadText}>Download PDF</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>
            )}
            {visible === 5 && (
                <>
                    <View>

                    </View>
                </>
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imageStyle: {
        width: '100%',
        height: verticalScale(230)
    },
    imageTextView: {
        position: 'absolute',
        marginTop: verticalScale(130),
        gap: 5,
        marginLeft: horizontalScale(20)
    },
    imageText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '700'
    },
    imagetext2: {
        fontSize: 10,
        color: '#FFFFFF',
        fontWeight: '400'
    },
    buttonView: {
        flexDirection: 'row',
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(25),
        gap: 15
    },
    buttonTouch: {
        width: verticalScale(120),
        height: 33,
        borderColor: '#F96B1B',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14
    },
    buttonText1: {
        color: '#F9A11B',
        fontWeight: '700',
        fontSize: 14
    },
    ratingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: verticalScale(45)
    },
    gap: {
        marginHorizontal: horizontalScale(25)
    },
    reviewText: {
        color: '#F9A11B',
        fontSize: 36,
        fontWeight: '500',
        letterSpacing: 0.2
    },
    reviews: {
        color: '#4B4B4B',
        fontWeight: '400',
        fontSize: 12
    },
    ratingGraph: {
        flexDirection: 'column',
        gap: verticalScale(10)
    },
    ratingNumber: {
        width: horizontalScale(250),
        height: verticalScale(10),
        backgroundColor: '#CEE8FF',
        alignSelf: 'center',
        borderRadius: 100,
        marginHorizontal: horizontalScale(15)
    },
    numberText: {
        color: '#4B4B4B',
        fontWeight: '400',
        fontSize: 12,
        letterSpacing: 0.2
    },
    btnReview: {
        alignItems: 'center',
        marginTop: verticalScale(30)
    },
    linearView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: horizontalScale(353),
        height: verticalScale(34),
        borderRadius: 10
    },
    btnTextReview: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16
    },
    reviewDetails: {
        width: horizontalScale(353),
        height: verticalScale(150),
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        borderColor: '#DCDCDC',
        marginTop: verticalScale(40),
        padding: 15
    },
    detailsText: {
        flexDirection: 'column',
        marginLeft: 10
    },
    name: {
        color: '#4B4B4B',
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 0.6
    },
    reviewDate: {
        color: '#4B4B4B',
        fontSize: 10,
        fontWeight: '400',
        letterSpacing: 0.6
    },
    reviewDesc: {
        marginTop: verticalScale(13),
        gap: 14
    },
    reviewDescStyle: {
        color: '#4B4B4B',
        fontSize: 12,
        fontWeight: '700'
    },
    downloadBtn: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: verticalScale(20)
    },
    downloadStyle: {
        width: horizontalScale(353),
        height: verticalScale(45),
        borderRadius: 10,
        backgroundColor: '#FF5E5E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    downloadText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default ReviewDetails