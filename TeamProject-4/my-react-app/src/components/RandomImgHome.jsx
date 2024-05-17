import { useEffect, useState } from "react"

export function RandomImgHome({img}) {

    const [randomIndex, setRandomIndex] = useState(null);
    const [randomImg, setRandomImg] = useState(null);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * img.length);
        const randomImg = img[randomIndex];
        setRandomIndex(randomIndex);
        setRandomImg(randomImg);
    }, []);
    
    return (
        <div className="img-container ">
            <img src={randomImg} className="absolute top-[8rem] left-[55rem] h-[43rem]"/>
        </div>
    )
    
}

