import React, { FC } from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  limit: number;
  onReadMore?: () => unknown;
  children: string;
}

export const LimitedText: FC<Props> = ({
  limit,
  onReadMore,
  children,
  ...rest
}) => {
  const truncatedStr = `${children?.substr(0, limit)}... `;

  return (
    <Text {...rest}>
      {children && children.length > limit ? (
        <>
          {truncatedStr}
          {onReadMore && (
            <TouchableOpacity onPress={() => onReadMore()}>
              Read more
            </TouchableOpacity>
          )}
        </>
      ) : (
        children
      )}
    </Text>
  );
};
