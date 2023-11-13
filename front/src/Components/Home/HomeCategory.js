import React from 'react'
import { Container, Row } from 'react-bootstrap';
import SubTiltle from '../Uitily/SubTiltle'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
//btntitle : titre de boutton
//subtitle: titre de component

const HomeCategory = () => {
    return (
        <Container>
            <SubTiltle title="categories" btntitle="plus" pathText="/allcategory" />
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="vétements" img={clothe} background="#F4DBA4" />
                <CategoryCard title="make up" img={cat2} background="#F4DBA4" />
                <CategoryCard title="electroniques" img={labtop} background="#0034FF" />
                <CategoryCard title="soldes" img={sale} background="#F4DBA4" />
                <CategoryCard title="vétements" img={clothe} background="#FF6262" />
                <CategoryCard title="electromenager" img={pic} background="#F4DBA4" />
            </Row>
        </Container>
    )
}

export default HomeCategory
