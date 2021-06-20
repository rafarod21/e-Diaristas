import styled from '@emotion/native';

export const FormContainer = styled.View`
  padding: 0 ${({ theme }) => theme.spacing(2)};
`;

export const TextContainer = styled.Text`
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing()};
  text-align: center;
`;

export const ErrorText = styled(TextContainer)`
  color: ${({ theme }) => theme.colors.error};
`;

export const ResponseContainer = styled.View`
  padding: ${({ theme }) => theme.spacing(5)} 0
    ${({ theme }) => theme.spacing(8)};
`;
