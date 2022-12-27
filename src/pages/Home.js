import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';



export default function Home() {
    return (
        <>
            <ImageSlider slides={SliderData} />
            <h2>These are the most feared creatures in the multiverse</h2>
            </>
        )
        
}