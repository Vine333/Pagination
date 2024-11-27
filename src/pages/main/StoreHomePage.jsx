import React, {useEffect, useState} from 'react';
import AppLayout from "../../layouts";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import useProductService from "../../store/useProductStore.js";
import {useShallow} from "zustand/react/shallow";
import {Button, Card, List, notification} from "antd";
import {Layout} from 'antd';
import {LeftOutlined, ShoppingCartOutlined, DeleteOutlined} from '@ant-design/icons'
import {useCartStore} from "../../store/index.js";

const {Header, Content} = Layout;
const {Meta} = Card;


const StoreHomePage = () => {


    const navigate = useNavigate();

    const {removeFromCart,} = useCartStore(useShallow(state => ({
        removeFromCart: state.removeFromCart,


    })))

    const {
        isLoading, products, loadProduct,loadProduct2, productsByCategory, clearProducts,productBySorts,
    } = useProductService(useShallow(state => ({
        isLoading: state.isLoading,
        products: state.products,
        loadProduct: state.loadProduct,
        loadProduct2: state.loadProduct2,
        productsByCategory: state.productsByCategory,
        clearProducts: state.clearProducts,
        productBySorts:state.productBySorts,
    })));

    useEffect(() => {
        loadProduct();
    }, [])

    const onNavigate = () => {
        navigate('/', {
            replace: true,
        })
    }

    const handleSwitchCategories = async (categoryLoader) => {
        clearProducts();
        await categoryLoader();
    }
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleCardClick = (productId) => {
        setSelectedProductId(selectedProductId === productId ? null : productId);
    }
    const addToCart = useCartStore((state) =>
        state.addToCart);

    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible((prev) => !prev);

    };

const handleSortsProducts = async ()=>{
    clearProducts();
    await productBySorts();
}

const handleShowMoreProducts = async ()=>{
        clearProducts();
    await loadProduct2();
}
    const cartItems = useCartStore((state) => state.cart);

    const handleClearCart = async (productId) => {
        try {
            await removeFromCart(productId);
            notification.success({
                message: 'ok', description: `item delete ${productId}`,placement:"bottomRight",
            })
        } catch (err) {
            return ('a');
        }
    }
    return (<AppLayout>
        <Wrapper>
            <Header className='header'>
                <LeftOutlined onClick={onNavigate} className='BackIcon'>
                    Back to Home
                </LeftOutlined>
                <span className='card-count'>
        <ShoppingCartOutlined onClick={toggleCartVisibility} className='CartIcon'/>

                    {isCartVisible && (
                        <div className="cart-dropdown">
                            <List
                                loading={isLoading}
                                dataSource={cartItems}
                                renderItem={(cart) => (
                                    <List.Item key={cart.id} title={"Your choice"}>
                                        <div><img src={cart.image} className='imgincart' alt={cart.title}/></div>
                                        <div className='carttitle'>{cart.title}</div>
                                        <div><DeleteOutlined onClick={() => handleClearCart(cart.id)}/></div>
                                    </List.Item>
                                )}
                            />
                        </div>
                    )}
      </span>

            </Header>
            <layout>


                <Content className='Content'>
                    <div>
                        <h1 className='titleCatalog'>Catalog Products</h1>
                        <ul className='Catalog'>
                            <Button onClick={() => handleSwitchCategories(loadProduct)}>All Product</Button>
                            <Button
                                onClick={() => handleSwitchCategories(() => productsByCategory(`electronics`))}>Electronic</Button>
                            <Button
                                onClick={() => handleSwitchCategories(() => productsByCategory(`jewelery`))}>Jewelery</Button>
                            <Button onClick={() => handleSwitchCategories(() => productsByCategory(`men's%20clothing`))}>Men's
                                clothing</Button>
                            <Button
                                onClick={() => handleSwitchCategories(() => productsByCategory(`women's%20clothing`))}>Women's
                                clothing </Button>
                            <Button onClick={()=>handleSortsProducts()}>
                                Sort by Id
                            </Button>
                            {/*<Button onClick={()=>handleShowMoreProducts()}>*/}
                            {/*    page2*/}
                            {/*</Button>*/}

                        </ul>
                    </div>

                    <List loading={isLoading}
                          className='list'
                          grid={{
                              gutter: 0, column: 4,
                          }}
                          dataSource={products}
                          renderItem={(product) => (
                              <List.Item key={product.id} className='product-card'>
                                  <Card className='Card'
                                        onClick={() => handleCardClick(product.id)}
                                        style={{
                                            width: 240,
                                        }}
                                        cover={<img src={product.image} alt='photo' className='Image'/>}
                                  >
                                      <Meta title={product.title}
                                            description={selectedProductId === product.id ?
                                                (<div className='Full'>{product.description}</div>) :
                                                (<div className='Short'>{product.description} </div>)}
                                      />
                                      <div className='price'>Price: {product.price}$</div>


                                  </Card>
                                  <Button onClick={() => addToCart(product)}>
                                      <ShoppingCartOutlined/>
                                  </Button>

                              </List.Item>)}

                    />

                </Content>
                <Button onClick={()=>handleShowMoreProducts()}>
                    page2
                </Button>
            </layout>
        </Wrapper>
    </AppLayout>);
};


const Wrapper = styled.div`
  width: 100%;
  //max-width: 1300px;


  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .carttitle {
    width: 50%;
  }

  .imgincart {
    width: 30px;
    height: 30px;
  }

  .cart-dropdown {
    position: absolute;
    top: 50px;
    right: 10px;
    width: 300px;
    max-height: 400px;
    overflow-y: auto;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 10px;
    z-index: 1000;
  }

  .card-count {
    position: relative;
    display: inline-block;
  }

  .BackIcon {
    scale: 2;

  }

  .CartIcon {
    font-size: 30px;
    cursor: pointer;
  }

  .cart-count-badge {
    top: 5px;
    right: -10px;
    background-color: #f60404;
    color: white;
    border-radius: 100%;
    padding: 1px 5px;
    font-size: 14px;

  }

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: dodgerblue;
  }

  .titleCatalog {
    padding-left: 30px;
  }

  .Card {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;


  }

  .product-card {
    display: flex;
    flex-direction: column;
  }


  .price {
    margin-top: 10px;
    color: #168170;
    font-size: 20px;
  }

  .list {
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 30px;
  }

  .Image {
    width: 200px;
    height: 250px;
    padding: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }


  .Full {
    white-space: normal;
  }

  .Catalog {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  .Short {
    max-height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
export default StoreHomePage;