import React from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import 'tailwindcss/tailwind.css';


const fake_main_page = [
  {
    section_name: "Хит сезона",
    fake_products: [
      {
        id: 1,
        title: 'Бананы Мозамбик',
        image: 'https://arbuz.kz/image/s3/arbuz-kz-products/19445-banany_kg.jpg?w=1100&h=1100&_c=1692689690',
        weight: 1,
        price: 756
      },
      {
        id: 2,
        title: 'Бананы Мозамбик',
        image: 'https://arbuz.kz/image/s3/arbuz-kz-products/19445-banany_kg.jpg?w=1100&h=1100&_c=1692689690',
        weight: 1,
        price: 756
      },
      {
        id: 3,
        title: 'Бананы Мозамбик',
        image: 'https://arbuz.kz/image/s3/arbuz-kz-products/19445-banany_kg.jpg?w=1100&h=1100&_c=1692689690',
        weight: 1,
        price: 756
      } 
    ]
  },
  {
    section_name: "Новинки магазина",
    fake_products: [
      {
        id: 1,
        title: 'Арбуз Астрахань',
        image: 'https://fguz44.ru/wp-content/uploads/2016/10/61.jpg',
        weight: 20,
        price: 29.99
      } 
    ]
  }
]
const fake_sidebar_data = [
  {
    data: [
      {
        category: 'Овощи и фрукты',
        category_img:"https://img.freepik.com/premium-vector/green-apple-vector-isolated-icon-emoji-illustration-apple-vector-emoticon_603823-866.jpg",
        subcategories:[
          {
            subcategory : "Овощи",
            subcategory_img: "https://img.freepik.com/premium-vector/green-apple-vector-isolated-icon-emoji-illustration-apple-vector-emoticon_603823-866.jpg",
          },
          {
            subcategory : "Фрукты",
            subcategory_img: "https://img.freepik.com/premium-vector/green-apple-vector-isolated-icon-emoji-illustration-apple-vector-emoticon_603823-866.jpg",
          },
          {
            subcategory : "Грибы",
            subcategory_img: "https://img.freepik.com/premium-vector/green-apple-vector-isolated-icon-emoji-illustration-apple-vector-emoticon_603823-866.jpg",
          }
          

        ]
      },
      {
        category: 'Напитки',
        category_img:"https://img.freepik.com/premium-vector/green-apple-vector-isolated-icon-emoji-illustration-apple-vector-emoticon_603823-866.jpg",
        subcategories:[
          {
            subcategory : "Чай",
            subcategory_img: "https://img.freepik.com/premium-vector/green-apple-vector-isolated-icon-emoji-illustration-apple-vector-emoticon_603823-866.jpg",
          },
          {
            subcategory : "Газировки",
            subcategory_img: "https://img.freepik.com/premium-vector/green-apple-vector-isolated-icon-emoji-illustration-apple-vector-emoticon_603823-866.jpg",
          },
          {
            subcategory : "Сок",
            subcategory_img: "https://img.freepik.com/premium-vector/green-apple-vector-isolated-icon-emoji-illustration-apple-vector-emoticon_603823-866.jpg",
          }
          

        ]
      }
    ]
  }
]

const App = () => {
  return (
<div>
  <Header />
  <Sidebar categories={fake_sidebar_data} /> 
    <div>
      {fake_main_page.map(section => (
        <div key={section.section_name}>
          <h2 className='text-customgray font-bold ml-2 pt-2'>{section.section_name}</h2>
          
            <div className="product-list flex flex-wrap">
            {section.fake_products.map(product => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                weight={product.weight}
                price={product.price}
                
              />
              
            ))}
          </div>
        </div>
      ))}
      
    </div>

 </div> 
  );
}

export default App;
