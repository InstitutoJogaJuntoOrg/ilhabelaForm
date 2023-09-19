import { Footer } from '../../components/footer';
import IframeComponent from './components/IframeComponent';

const SomePage: React.FC = () => {
    return (
        <div>
            
            <IframeComponent 
                src="https://portal-do-titular-ilhabela.s3.sa-east-1.amazonaws.com/a.html"
                width="100%"
                height="800px"
                title="Portal do titular "
            />
            <Footer/>
        </div>
    );
}

export default SomePage;
