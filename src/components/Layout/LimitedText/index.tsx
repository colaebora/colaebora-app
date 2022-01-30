import { theme } from '@globals/styles/theme';
import React, { FC } from 'react';
import { Text, ViewProps } from 'react-native';

type Props = ViewProps & {
  limit: number;
  onReadMore?: () => unknown;
  children: string;
  forceReadMore?: boolean;
};

export const LimitedText: FC<Props> = ({
  limit,
  onReadMore,
  children,
  forceReadMore,
  ...rest
}) => {
  const truncatedStr = `${children?.substr(0, limit)}... `;

  return (
    <Text {...rest}>
      {(children && children.length > limit) || forceReadMore ? (
        <>
          {truncatedStr}
          {onReadMore && (
            <Text
              {...rest}
              style={[rest.style, { color: theme.colors.primary }]}
              onPress={() => onReadMore()}
            >
              Ver mais
            </Text>
          )}
        </>
      ) : (
        children
      )}
    </Text>
  );
};
