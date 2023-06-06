import { Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './BibleDetailStyle'
import image from '../../assets/images/image-2.png'


const BibleDetail = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image source={image} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Quis vel eros donec ac odio tempor orci dapibus. Purus sit amet luctus venenatis lectus magna fringilla. Vitae et leo duis ut diam quam nulla porttitor massa. Convallis posuere morbi leo urna molestie at elementum. Nulla aliquet enim tortor at auctor urna. Laoreet id donec ultrices tincidunt. Blandit massa enim nec dui nunc.</Text>
                    <Text style={styles.text}>Et tortor consequat id porta nibh venenatis cras sed felis. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sed libero enim sed faucibus turpis. Eget nunc lobortis mattis aliquam.</Text>
                </View>
            </View>
        </View>

    )
}
export default BibleDetail
