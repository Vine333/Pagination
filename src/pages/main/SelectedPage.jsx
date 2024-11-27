import React, {useEffect,useState} from 'react';
import AppLayout from "../../layouts";
import styled from "styled-components";
import {useShallow} from "zustand/react/shallow";
import {useNavigate} from "react-router-dom";
import {Button, Spin, Space, Select,Card,Pagination} from "antd";
import {useCategorieStore,useProductStore,useCountryStore } from "../../store/index.js";



const SelectedPage = () => {

    const navigate = useNavigate()

    const onNavigateHome = () => {
        navigate('/', {
            replace: true
        })
    }

    const {isLoading, countries, loadCountry} = useCountryStore(useShallow(state => ({
        isLoading: state.isLoading, countries: state.countries, loadCountry: state.loadCountry,
    })));

    const {isLoad, categories, loadCategories} = useCategorieStore(useShallow(state => ({
        isLoad: state.isLoad, categories: state.categories, loadCategories: state.loadCategories

    })))
    const {isLoadingProducts,product,loadProducts,resetProducts}=useProductStore(useShallow(state=>({
        isLoadingProducts:state.isLoadingProducts,
        product:state.product,
        loadProducts:state.loadProducts,
        resetProducts:state.resetProducts
    })))

    useEffect(() => {
        loadCountry();
        loadCategories();

    }, [])

    const handleCountryChange = (value) => {
        setSelectedCountry(value);
        setCurrentPage(1);
        console.log(`Selected country: ${value}`);
    };

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        setCurrentPage(1);
        console.log(`Selected category: ${value}`);
    };


const [selectedCountry, setSelectedCountry] = useState(null);
const [selectedCategory, setSelectedCategory] = useState(null);
 const [currentPage, setCurrentPage] = useState(1);
 const [pageSize] = useState(6);


useEffect(()=>{
    if(selectedCountry && selectedCategory){
        resetProducts();
        loadProducts(selectedCountry,selectedCategory)
        console.log(product)
    }
},[selectedCountry,selectedCategory])


 const handlePageChange = (page) => {
     setCurrentPage(page);
     loadProducts(selectedCountry, selectedCategory);
     console.log("handlePageChange",product)
 };

    const endIndex = currentPage * pageSize;
    const startIndex = endIndex - pageSize;
    const paginatedProducts = product.slice(startIndex,endIndex);

 console.log('Paginated Products:', paginatedProducts);

    return (<AppLayout>
            <Wrapper>
                <Button onClick={onNavigateHome} style={{marginBottom:'14px'}}>
                    Back to Home
                </Button>

                <Select showSearch style={{width: '100%',marginBottom:'10px'}}
                        placeholder="Выберите страну"
                        optionFilterProp="children"
                        onChange={handleCountryChange}
                        loading={isLoading}


                        notFoundContent={isLoading ? <Spin size="small"/> : 'Нет данных'}>
                    {countries.map(country => (
                        <Select.Option key={country.id} value={country.iso_name}>
                            <Space>
                                <img src={country.flag_url}
                                     alt={country.name} style={{width:'20px',marginRight:'8px'}}/>
                                {country.name}
                                ({country.currency_code})
                            </Space>
                        </Select.Option>
                    ))}
                </Select>
                <Select showSearch style={{width: '100%'}}
                        placeholder="Выберите категорию"
                        optionFilterProp="children"
                        onChange={handleCategoryChange}
                        loading={isLoad}
                        notFoundContent={isLoad ? <Spin size="small"/> : 'Нет данных'}>
                    {categories.map(categories => (
                        <Select.Option key={categories.id} value={categories.id}>
                            <Space>
                                <img src={categories.icon_url}
                                     alt={categories.name} style={{width:'20px',marginRight:'8px'}}/>
                                {categories.name}
                            </Space>
                        </Select.Option>

                    ))}
                </Select>
                    < div className='resultProducts'>
                {isLoadingProducts ? (<Spin size={"large"}/>):

                    (paginatedProducts.map(products => (
                                    <Card key={products.id} title={products.name} style={{ width: 300, margin: '16px' }}
                                          cover={<img src={products.logo_url} alt={products.name} style={{ width: '100%' }} />}>
                                        <div >

                                            <p>{products.country.name}</p>

                                            <p style={{fontSize:'20px'}}>{products.price_list_usd[0]}$ {products.currency}</p>
                                        </div>


                                    </Card>
                    )))}
                    </div>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={product.length}
                    onChange={handlePageChange} />

            </Wrapper>
        </AppLayout>);
};

const Wrapper = styled.div`
  width: 100%;
  
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 20px ;
  padding-bottom: 20px ;
  .resultProducts{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-inline: 50px;
    
  }
`

export default SelectedPage;