import {FaCocktail,FaSkiing,FaMusic,FaSpa} from 'react-icons/fa';

const services=[
    {
        icon:<FaCocktail></FaCocktail>,
        title:"open bar",
        info:"our bar service includes professional bartenders, ice and soft drinks, beer, wine and cocktails"
    },
    {
        icon:<FaSkiing></FaSkiing>,
        title:"free skiing",
        info:"a variety of ski trails at different levels of difficulty, and free equipment rental"
    },
    {
        icon:<FaMusic></FaMusic>,
        title:"concerts",
        info:"concerts and performances by great artists every evening"
    },
    {
        icon:<FaSpa></FaSpa>,
        title:"spa",
        info:"our spa treatments are hot stone massage, facial & body treatment, manicure, pedicure and mud bath"
    }
]

export const getServices= ()=>{
    return services;
}
