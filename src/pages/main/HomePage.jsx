import React, {useEffect} from 'react';
import styled from "styled-components";
import {Button, Flex, List, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import {useShallow} from "zustand/react/shallow";

import {useAppearanceStore, useTodosStore} from "../../store/index.js";
import AppLayout from "../../layouts/index.jsx";
import reactIcon from "../../assets/react.svg";
import {HeartIcon, PaintBrushIcon} from "../../icons/index.js";

const HomePage = () => {
    const navigate = useNavigate();

    const toggleTheme = useAppearanceStore(state => state.toggleTheme);
    const {isLoading, todos, loadTodos} = useTodosStore(useShallow(state => ({
        isLoading: state.isLoading,
        todos: state.todos,
        loadTodos: state.loadTodos,
    })));

    // useEffect(() => {
    //     loadTodos();
    // }, []);

    const onNavigate = () => {
        navigate('/about');
    }
    const onNavigateStore = () => {
        navigate('/store')
    }
    const onNavigateCard =()=>{
        navigate('/card')
    }
  const onNavigateSelect=()=>{
        navigate('/select')
    }

    return (<AppLayout>
            <Wrapper>
                <Flex align={"center"} justify={'space-evenly'} gap={15} vertical={true}>
                    <img className={'logo'} src={reactIcon} alt="React logo"/>
                    <Typography.Title level={1}>Home page here</Typography.Title>

                    <Button onClick={onNavigate}>
                        Navigate to about page
                    </Button>
   <Button onClick={onNavigateCard}>
                        Navigate to Cardpage
                    </Button>

                    <Button onClick={toggleTheme}>
                        Toggle theme
                    </Button>
                    <Button onClick={onNavigateStore}>
                       Navigate to Store page
                    </Button>
   <Button onClick={onNavigateSelect}>
                       Navigate to SelectPage
                    </Button>


                    <div style={{width: '100%', maxWidth: 600}}>
                        <Typography.Title level={2}>Some icons</Typography.Title>
                        <Flex gap={15}>
                            <PaintBrushIcon width={60} height={60} strokeColor={'#343434'}/>
                            <HeartIcon width={60} height={60} strokeColor={'#343434'}/>
                        </Flex>
                    </div>

                    <div style={{width: '100%', maxWidth: 600}}>
                        <Typography.Title level={2}>Some test data</Typography.Title>
                        <List
                            loading={isLoading}
                            dataSource={todos}
                            renderItem={(item) => (
                                <List.Item key={item.id}>
                                    <List.Item.Meta
                                        title={item.title}
                                        description={item.title}
                                    />
                                    <div>Content</div>
                                </List.Item>
                            )}
                        />
                    </div>
                </Flex>

            </Wrapper>
        </AppLayout>
    );
};

const Wrapper = styled.div`
  width: 100%;

  .logo {
    width: 150px;
    height: 150px;
    margin-top: 20px;
  }
`;

export default HomePage;
