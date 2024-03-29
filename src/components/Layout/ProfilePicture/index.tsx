import React from 'react';
import { ImageProps, Image } from 'react-native';
import { styles } from './style';

type ProfilePictureProps = ImageProps;

export const ProfilePicture: React.FC<ProfilePictureProps> = ({
  style,
  ...rest
}: ProfilePictureProps) => <Image style={[styles.image, style]} {...rest} />;
