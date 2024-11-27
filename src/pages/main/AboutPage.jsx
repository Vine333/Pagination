import React from 'react';
import styled from "styled-components";
import {Button, Flex, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import AppLayout from "../../layouts/index.jsx";

const AboutPage = () => {

    const navigate = useNavigate();

    const onNavigate = () => {
        navigate('/', {
            replace: true // replace нужен, чтобы менять текущий путь на другой без возможности вернуться назад.
                          // Если этого не сделать то произойдет push и добавится еще один маршрут в историю.
        });
    }

    return (
        <AppLayout>
            <Wrapper>
                <Flex align={'center'} justify={'center'} gap={15} vertical={true}>
                    <Typography.Title level={1}>About page here</Typography.Title>

                    <Button onClick={onNavigate}>
                        Navigate to home page
                    </Button>
                </Flex>
            </Wrapper>
        </AppLayout>
    );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default AboutPage;
