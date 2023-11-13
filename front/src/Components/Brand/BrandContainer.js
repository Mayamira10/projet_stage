import React from 'react'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import brand4 from "../../images/brand4.png";
import brand5 from "../../images/brand5.jpg";
import brand6 from "../../images/brand6.png";
import brand7 from "../../images/brand7.jpg";
import { Container, Row } from 'react-bootstrap';
const BrandContainer = () => {
    return (
        <Container>
            <div className="admin-content-text mt-2 ">tous les marques</div>
            <Row className='my-1 d-flex justify-content-between'>
                <BrandCard img={brand1} />
                <BrandCard img={brand2} />
                <BrandCard img={brand3} />
                <BrandCard img={brand4} />
                <BrandCard img={brand5} />
                <BrandCard img={brand6} />
                <BrandCard img={brand7} />
                <BrandCard img={brand1} />
                <BrandCard img={brand2} />
                <BrandCard img={brand3} />
                <BrandCard img={brand2} />
                <BrandCard img={brand1} />
                <BrandCard img={brand3} />
                <BrandCard img={brand1} />
                <BrandCard img={brand2} />
                <BrandCard img={brand3} />
                <BrandCard img={brand2} />
                <BrandCard img={brand1} />
                <BrandCard img={brand3} />

            </Row>
        </Container>
    )
}

export default BrandContainer
