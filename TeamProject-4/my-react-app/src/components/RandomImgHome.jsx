import { useEffect, useState } from 'react';

export function RandomImgHome({ img }) {
    //bisogna aggiungere immagini 

    const [randomIndex, setRandomIndex] = useState(null);
    const [randomImg, setRandomImg] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * img.length);
        const randomImgName = img[randomIndex];
        const imageUrl = `src/assets/${randomImgName}`;
        setRandomIndex(randomIndex);
        setRandomImg(imageUrl);
    }, []);

    return (
        <div className="img-container ">
            <img src={randomImg} className="absolute top-[8rem] left-[55rem] h-[43rem]" />
        </div>
    );
}
