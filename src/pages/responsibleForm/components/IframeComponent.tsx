

interface IframeProps {
    src: string;
    width?: string | number;
    height?: string | number;
    frameBorder?: string;
    title?: string;
}

const IframeComponent: React.FC<IframeProps> = ({
    src,
    width = "100%",
    height = "100%",
    frameBorder = "0",
    title = "iframe",
   
}) => {
    return (
        <iframe 
            src={src}
            width={width}
            height={height}
            frameBorder={frameBorder}
            title={title}
            
        ></iframe>
    );
}

export default IframeComponent;
