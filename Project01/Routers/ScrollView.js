import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    วิชาเหมือนสินค้า อันมีค่าอยู่เมืองไกล
                    ต้องยากลำบากไป จึงจะได้สินค้ามา
                    จงตั้งเอากายเจ้า เป็นสำเภาอันโสภา
                    ความเพียรเป็นโยธา แขนซ้ายขวาเป็นเสาใบ
                    นิ้วเป็นสายระยาง สองเท้าต่างสมอใหญ่
                    ปากเป็นนายงานไป อัชฌาสัยเป็นเสบียง
                    สติเป็นหางเสือ ถือท้ายเรือไว้ให้เที่ยง
                    ถือไว้อย่าให้เอียง ตัดแล่นเลี่ยงข้ามคงคา
                    ปัญญาเป็นกล้องแก้ว ส่องดูแถวแนวหินผา
                    เจ้าจงเอาหูตา เป็นล้าต้าฟังดูลม
                    ขี้เกียจคือปลาร้าย จะทำลายให้เรือจม
                    เอาใจเป็นปืนคม ยิงระดมให้จมไป
                    จึงจะได้สินค้ามา คือวิชาอันพิสมัยจงหมั่นมั่นหมายใจ อย่าได้คร้านการวิชา
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});

export default App;
