// VacancyPage.jsx
import React, { useState } from 'react';
import img3 from "../assets/stats.jpg";
import LoadingSpinner from '../components/Spinner';
import VacancyItem from './VacancyItem';
import VacancyDetailsModal from './VacancyDetailsModal';
import { useTranslation } from 'react-i18next';
import { useFetchVacancies } from '../api';

const VacancyPage = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVacancyId, setSelectedVacancyId] = useState(null);

  const {
    data: vacancies = [],
    isLoading,
    error,
  } = useFetchVacancies();
console.log(vacancies)
  const openModal = (id) => {
    setSelectedVacancyId(id);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
    setSelectedVacancyId(null);
  };

  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-600">{t('failed_to_load_data')}</div>;

  return (
    <>
      <header className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${img3})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-5xl font-bold mb-4">Станьте частью ИМОД и развивайте его вместе с нами.</h1>
          <p className="text-lg max-w-2xl">Мы всегда ищем увлеченных людей, которые присоединятся к нашей разнообразной и талантливой команде. Ознакомьтесь с нашими текущими вакансиями и найдите свою следующую возможность.</p>
        </div>
      </header>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">{t('vacancies')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vacancies.length < 1 ? <h2>Нет вакансии пока</h2> : 
          vacancies.map((vacancy) => (
            <VacancyItem key={vacancy.id} vacancy={vacancy} onSelect={openModal} />
          ))  
        }
        </div>
      </div>

      <VacancyDetailsModal isOpen={modalOpen} onClose={closeModal} vacancyId={selectedVacancyId} vacancy={vacancies[selectedVacancyId]} />
    </>
  );
};

export default VacancyPage;
