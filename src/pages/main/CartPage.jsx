// import React from 'react';
// import AppLayout from "../../layouts";
// import {Layout, Card, List, Button, notification,} from "antd";
// const {Header, Content} = Layout;
// import {LeftOutlined} from '@ant-design/icons'
// import {useNavigate} from "react-router-dom";
// import styled from "styled-components";
// import {useCartStore} from "../../store/index.js";
// import {useShallow} from "zustand/react/shallow";
// const {Meta} = Card;
//
// const CartPage = () => {
//
//
//     const {isLoading, cart, removeFromCart,totalPrice} = useCartStore(useShallow(state => ({
//         isLoading: state.isLoading,
//         cart: state.cart,
//         removeFromCart: state.removeFromCart,
//     })))
//     const navigate = useNavigate();
//     const onNavigateToStore = () => {
//         navigate('/store', {
//             replace: true
//         })
//     }
//
//     const handleClearCart = async (productId)=>{
//         try {
//             await removeFromCart(productId);
//             notification.success({
//                 message:'ok',description:`item delete ${productId}`
//             })
//         }
//         catch (err){
//             return;
//         }
//     }
//
//     return (
//         <AppLayout>
//             <Wrapper>
//                 <Layout>
//                     <Header className='header'>
//
//                             <LeftOutlined onClick={onNavigateToStore} className='BackIcon'/>
//
//
//                     </Header>
//                     <Content className='content'>
//                         <h2 className='TitleCart'>Shopping Cart</h2>
//                         <List className='list'
//                             loading={isLoading}
//                             grid={{
//                                 gutter: 16, column: 1}}
//                             dataSource={cart}
//                             renderItem={(product) => (
//                                 <List.Item key={product.id} className='product-card'>
//                                     <Card className='Card'
//                                     cover={<img alt={product.title} src={product.image} className='Image'/>}
//                                     actions={[<Button onClick={() => handleClearCart(product.id)}>
//                                         Remove
//                                     </Button>]}>
//                                     <Meta title={product.title}
//                                           description={`$${product.price}`}/>
//                                 </Card>
//                                 </List.Item>
//                             )}
//                         />
//                     </Content>
//                 </Layout>
//             </Wrapper>
//         </AppLayout>
// );
// };
//
// const Wrapper = styled.div`
// width: 100%;
//
//
// .header
//     {
//   background-color: dodgerblue;
//     }
//   .TitleCart{
//     padding-left: 30px;
//   }
//   .list{
//     justify-content: space-around;
//     align-items: center;
//     display: flex;
//     padding: 30px;
//   }
//   .content{
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//   }
//   .BackIcon{
//
//     scale: 2;
//   }
//   .Card {
//       width: 300px;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//
//
//     }
//   .Image {
//     width: 200px;
//     height: 250px;
//     padding: 10px;
//     display: block;
//     margin-left: auto;
//     margin-right: auto;
//   }
//   .product-card{
//    display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `
//
// export default CartPage;