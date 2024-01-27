import styled from "styled-components";

const CardStyles = styled.div`
    margin-bottom: 20px;
        /* Desktop */
        @media (min-width: 768px) {
            width: 45%;
            margin-bottom: 0;
        }
        @media (min-width: 1300px) {
            width: 31%;
        }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
        background-color: #fff;
        margin: auto;
    }
    
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .card__header {
        padding: 2px 16px;
        background-color: #f1f1f1;
        color: #333;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    
    .card__header h2 {
        margin: 0;
        font-size:24px;
    }

    .card__body {
        padding: 16px;
    }

    .card__body img {
        width: 100%;
        height:300px;
        object-fit: cover;
    }

    .card__body p {
        color: #333;
        margin: 0 0 10px;
        line-height: 14px;
    }

    .card__body p span {
        display: inline-block;
        margin: 0 2px;
        background-color: #f1f1f1;
        padding: 2px;
        border-radius: 3px;
    }
`;

export default CardStyles