import Slider from 'react-slick';
// import logo1 from '../assets/tgem.png';
import logo2 from '../assets/rogun.png';
import logo3 from '../assets/koyo.png'
import logo4 from '../assets/elza.jpg'
import logo1 from '../assets/Hexing.jpg'
import { useTranslation } from 'react-i18next';

const partners = [
  { id: 1, name: 'Partner 1', logo: logo1 },
  { id: 2, name: 'Partner 2', logo: logo2 },
  { id: 3, name: 'Partner 3', logo: logo3 },
  { id: 4, name: 'Partner 4', logo: logo4 },
];

const Partners = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Large screens (tablets, laptops)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const {  t } = useTranslation();


  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="w-full lg:w-3/4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">{t("our_partners")}</h2>
        
        <Slider {...settings}>
          {partners.map((partner) => (
            <div key={partner.id} className="p-2 md:p-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 md:h-32 lg:h-30 w-auto object-contain mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
