import React, { ReactNode, LegacyRef } from 'react';
import BottomSheet from 'reanimated-bottom-sheet';

interface SnapModalProps {
  snapPoints: number[];
  modalRef?: LegacyRef<BottomSheet>;
  renderContent: () => ReactNode;
}

export type SnapModalElement = BottomSheet;

export const SnapModal: React.FC<SnapModalProps> = ({
  snapPoints,
  modalRef,
  renderContent,
}: SnapModalProps) => (
  <BottomSheet
    borderRadius={10}
    snapPoints={snapPoints}
    ref={modalRef}
    renderContent={renderContent}
  />
);
