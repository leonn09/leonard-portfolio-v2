import ReactDom from 'react-dom';

const OverlayBg = () => {
    return ReactDom.createPortal(
        <>
            <div className="fixed inset-0 bg-white dark:bg-[#3d3c3d] -z-1">
                <div 
                    className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
                    style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #6366f1 0, #6366f1 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '10px 10px',
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-br from-white via-white/0 to-white dark:from-gray-950 dark:via-gray-950/0 dark:to-gray-950" />
            </div>
        </>,
    document.getElementById('overlayBg')
    )
}

export default OverlayBg;