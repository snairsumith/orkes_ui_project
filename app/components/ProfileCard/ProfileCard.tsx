import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {profileStyle} from './ProfileCard.style';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import {images} from '../../constants/images';

export type Props = {
  data: any;
  defaultSource: number;
};
const ProfileCard: React.FC<Props> = ({data}) => {
  const [isImageError, setIsImageError] = useState(false);
  function onImageError() {
    setIsImageError(true);
  }

  return (
    <View style={profileStyle.profileBoxContainer}>
      <FastImage
        source={{
          uri: data?.field_photo_image_section,
          priority: FastImage.priority.high,
        }}
        onError={onImageError}
        style={profileStyle.profileImage}
        resizeMode={FastImage.resizeMode.cover}
        /* Default image not working in the debug mode .Check out this link https://www.npmjs.com/package/react-native-fast-image#defaultsource-number  . */
        defaultSource={images.placeHolderImg}
      />
      <View style={profileStyle.contentContainer}>
        <Text style={profileStyle.titleText} numberOfLines={4}>
          {data?.title}
        </Text>
        <Text style={profileStyle.dateText}>
          {moment(data?.last_update, 'X').format('MMM DD,YYYY HH:mm A Z')}
        </Text>
      </View>
    </View>
  );
};

export default ProfileCard;
