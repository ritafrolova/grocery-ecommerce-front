import React,{useState} from 'react';

const Sidebar = ({ onClose }) => {
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
  
  const [openCategory, setOpenCategory] = useState(null);
  
  return (
  <div>
    
    <div className="sidebar open">
      <div className="bg-white w-72 h-full pt-3 pl-2 fixed top-0 left-0 transform translate-x-0 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-customgreen font-pacifico text-xl leading-none font-medium">
            Магазинчик на Мелитопольской
          </h1>
          <button className="text-forcross" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center"><button className='bg-customgreen rounded-lg text-white w-56 h-7 font-medium hover:bg-white hover: border border-customgreen hover:text-customgreen'>Войти</button></div>
        <form className=" h-7 pt-2 px-4 ">
            <div className="relative flex justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-5 h-5 my-auto text-forsearch left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input type="text" placeholder="Поиск"
                    className="w-56 pl-12 text-forsearchtext border rounded-lg outline-none bg-white focus:border-customgreen"
                />
            </div>
        </form>
        <div>
          {fake_sidebar_data.map((categoryData, index) => (
            <div key={index}>
              <h2 onClick={() => setOpenCategory(index)}>
                {categoryData.category}
              </h2>
              {openCategory === index && (
                <div>
                  <img className='h-8' src={categoryData.category_img} alt={categoryData.category} />
                  <ul>
                    {categoryData.subcategories.map((subcategoryData, subIndex) => (
                      <li key={subIndex}>
                        <h3>{subcategoryData.subcategory}</h3>
                        <img
                        className='h-8'
                          src={subcategoryData.subcategory_img}
                          alt={subcategoryData.subcategory}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      
      </div>
    </div>
    </div> 
  );
};

export default Sidebar;