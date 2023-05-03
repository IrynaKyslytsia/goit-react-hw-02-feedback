import styled from '@emotion/styled';

export const FeedbackOptions = styled.div`
    margin-bottom: 16px;
    padding: 16px;
`;

export const Statistics = styled.div`
    padding: 16px;
`;

export const SectionTitle = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 32px;
    padding-bottom: 20px;
`;

export const FeedbackButtons = styled.div`
    display: flex;
    gap: 8px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 12px;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 700;
    &:hover {
        background-color: #c6c8f9;
    }
`;

export const FeedbackOutput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const FeedbackItem = styled.span`
    font-size: 24px;
`;

