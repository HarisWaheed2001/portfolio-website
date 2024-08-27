const ResumeButton = () => {
    const onButtonClick = () => {
        const pdfUrl = "Haris_W_NewGrad.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Haris_W_NewGrad.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <a
            onClick={() => onButtonClick()}
            className="bg-teal-500 text-white font-bold py-2 px-4 rounded-md transform hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            target="_blank"
            rel="noopener noreferrer"
        >
            Resume
        </a>
    )
}

export default ResumeButton