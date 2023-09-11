import React, { useState, useEffect } from 'react';

const DiaryContent = () => {
  const [diaryText, setDiaryText] = useState('');

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch('https://thinkito.coderf5.es/escena/3');
        const data = await response.json();
        setDiaryText(data);
        console.log("me devuelve"+diaryText )
      } catch (error) {
        console.error('Error al obtener el texto del diario:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  const contenidoDiaryStyles = {
    padding: '35px',
    color: '#000',
    lineHeight: '140%',
    textAlign: 'justify',
    fontFamily: 'satisfy',
    fontSize: '15px',
    fontWeight: 'normal',
    height: '0', 
    overflow: 'hidden',
    transition: 'height 1s ease', 
  };

  const diaryHoverStyles = {
    height: '545px', /* Altura máxima cuando se hace hover */
  };

  return (
    <center>
      {/* ... (resto del código) ... */}
      <div className="contenido-diary" style={contenidoDiaryStyles}>
        {/* ... (resto del código) ... */}
        {diaryText && <div>{diaryText}</div>} {/* Muestra el texto del diario si está disponible */}
        {/* ... (resto del código) ... */}
      </div>
      {/* ... (resto del código) ... */}
    </center>
  );
};

export default DiaryContent;
