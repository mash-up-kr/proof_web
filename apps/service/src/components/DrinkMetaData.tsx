import styled from "@emotion/styled";
import {Text, theme} from "design-system";
import React from "react";

interface DrinkMetaDataProps {
  categoryName: string;
  abv: number;
  origin: string;
}

function DrinkMetaData({categoryName, abv, origin}: DrinkMetaDataProps) {
  return (
      <Wrapper>
        <Text type="body5" color={theme.colors.text.highlight}>
          {categoryName}
        </Text>
        <Text type="body5" color={theme.colors.ui.divider}>
          |
        </Text>
        <MetaDataWrapper>
          <Text type="body5" color={theme.colors.text.highlight}>
            Alc
          </Text>
          <Text type="body5" color={theme.colors.text.general}>
            {abv}%
          </Text>
        </MetaDataWrapper>
        <Text type="body5" color={theme.colors.ui.divider}>
          |
        </Text>
        <MetaDataWrapper>
          <Text type="body5" color={theme.colors.text.highlight}>
            산지
          </Text>
          <Text type="body5" color={theme.colors.text.general}>
            {origin}
          </Text>
        </MetaDataWrapper>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const MetaDataWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export default DrinkMetaData;
