import React, {useEffect} from 'react';
import AppLayout from "../../layouts";
import styled from "styled-components";
import {Button, List} from "antd";
import useCardStore from "../../store/useCardStore.js";
import {useShallow} from "zustand/react/shallow";
import {useNavigate} from "react-router-dom";

const CardPage = () => {

    const{isLoading,card,loadCard}=useCardStore(useShallow(state => ({
    isLoading:state.isLoading,
    card:state.card,
        loadCard:state.loadCard,
})))



    useEffect(()=>{
        loadCard();

    },[])
     const navigate = useNavigate()

    const onNavigate = ()=>{
         navigate('/',{
             replace:true
         })
    }
    return (
        <AppLayout>
            <Wrapper>
                <Button onClick={onNavigate}>
                    Back to Home
                </Button>
                <List loading={isLoading}
                      dataSource={card}
                      renderItem={(card) =>(
                          <List.Item key={card.id}>
                              <div>{card.date}</div>
                              {card.products.map((product)=>(
                                  <div key={product.productId}>
                                      ProductID:{product.productId},Quantity:{product.productId}
                                  </div>
                              ))}

                          </List.Item>

                      )}/>
            </Wrapper>
        </AppLayout>
            

    );
};

const Wrapper = styled.div`
width: 100%;
`

export default CardPage;